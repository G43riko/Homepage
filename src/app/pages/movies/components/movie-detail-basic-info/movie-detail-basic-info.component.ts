import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {FormGroup} from "@angular/forms";
import {MatDatepicker} from "@angular/material/datepicker";
import {forkJoin} from "rxjs";
import {NotificationService} from "../../../../shared/services/notification.service";
import {MovieHttpService} from "../../movie-http.service";

@Component({
    selector: "app-movie-detail-basic-info",
    templateUrl: "./movie-detail-basic-info.component.html",
    styleUrls: ["./movie-detail-basic-info.component.scss"],
})
export class MovieDetailBasicInfoComponent implements OnInit {
    @Input() public readonly movieForm: FormGroup;
    @Output() public readonly onYearChange = new EventEmitter<Date>();
    public genres: string[] = [];
    public countries: string[] = [];

    public constructor(private readonly notificationService: NotificationService,
                       private readonly movieHttpService: MovieHttpService,
    ) {
    }

    public closeDatePicker(picker: MatDatepicker<any>, $event: any): void {
        this.onYearChange.emit($event);
        picker.close();
    }

    public ngOnInit(): void {
        const countries$ = this.movieHttpService.getCountries();
        const genres$ = this.movieHttpService.getGenres();
        forkJoin([countries$, genres$]).subscribe(([countries, genres]) => {
            this.countries = countries;
            this.genres = genres;
        }, (error: any) => this.notificationService.openErrorNotification(error));
    }

}
