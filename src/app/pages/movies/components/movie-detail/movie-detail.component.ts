import {Component, OnInit} from "@angular/core";
import {FormBuilder, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractDetailComponent} from "../../../../shared/components/abstract-detail.component";
import {NotificationService} from "../../../../shared/services/notification.service";
import {Movie} from "../../models/movie.model";
import {MovieHttpService} from "../../movie-http.service";
import {MovieService} from "../../movie.service";

declare const $: any;

@Component({
    selector: "app-movie-detail",
    templateUrl: "./movie-detail.component.html",
    styleUrls: ["./movie-detail.component.scss"],
})
export class MovieDetailComponent extends AbstractDetailComponent implements OnInit {
    public selectedMovie: Movie;
    public movieForm = this.formBuilder.group({
        saw: [false],
        wantSee: [true],
        year: [2000, [Validators.minLength(4), Validators.maxLength(4), Validators.min(1880)]],
        content: [""],
        csfdId: [""],
        imdbId: [""],
        movieDbId: [""],
        duration: [0, Validators.min(0)],
        countries: [[]],
        genres: [[]],
        avatar: [""],
        title: ["", [Validators.required, Validators.minLength(3)]],
        titleSk: [""],
    });

    public constructor(private readonly route: ActivatedRoute,
                       private readonly router: Router,
                       private readonly formBuilder: FormBuilder,
                       private readonly notificationService: NotificationService,
                       public readonly movieService: MovieService,
                       private readonly movieHttpService: MovieHttpService) {
        super();
    }

    public ngOnInit(): void {
        this.route.params.subscribe((data: any) => {
            const actId = data["id"];
            if (actId === "new") {
                this.setMovie(new Movie());
                this.isNew = true;
                this.setDisabled(false);
            } else {
                this.movieHttpService.getDetail(actId).subscribe((movie: Movie) => {
                    this.setMovie(movie);
                    this.setDisabled(true);
                }, (error) => this.notificationService.openErrorNotification(error));
            }
        }, (error) => this.notificationService.openErrorNotification(error));
    }

    public setDisabled(value: boolean): void {
        this.disabled = value;
        value ? this.movieForm.disable() : this.movieForm.enable();
        const elements = $(".ui.dropdown.search");
        value ? elements.addClass("disabled") : elements.removeClass("disabled");
    }

    public setMovie(movie: Movie): void {
        this.selectedMovie = movie;
        this.movieForm.patchValue({
            ...movie,
            year: new Date(movie.year, 0, 1),
        });
    }

    public save(): void {
        console.log(this.movieForm.value);
        const genres = $(".ui.dropdown.search.genres").dropdown("get values");
        const countries = $(".ui.dropdown.search.countries").dropdown("get values");
        this.disabled = true;
    }

    public back(): void {
        if (this.isNew) {
            this.router.navigate(["movies"]);
        } else {
            this.setDisabled(true);
        }
    }

    public edit(): void {
        this.setDisabled(false);
    }
}
