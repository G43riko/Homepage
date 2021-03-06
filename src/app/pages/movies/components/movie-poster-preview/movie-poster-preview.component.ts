import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit } from "@angular/core";
import { Movie } from "../../models/movie.model";
import { MovieService } from "../../services/movie.service";

@Component({
    selector   : "app-movie-poster-preview",
    templateUrl: "./movie-poster-preview.component.html",
    styleUrls  : ["./movie-poster-preview.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host       : {
        class: "movie-wrapper"
    }
})
export class MoviePosterPreviewComponent implements OnInit {
    @Input() public movie: Movie;

    public constructor(public readonly movieService: MovieService,
                       private readonly elementRef: ElementRef) {
    }

    public ngOnInit(): void {
    }

    @HostListener("click", ["$event.target"])
    private onClick(): void {
        this.elementRef.nativeElement.classList.add("opened");
    }

    @HostListener("mouseleave", ["$event.target"])
    private onMouseLeave(): void {
        this.elementRef.nativeElement.classList.remove("opened");
    }

}
