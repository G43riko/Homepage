import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { AppStaticConfig } from "../../appStaticConfig";
import { Address } from "../models/person/address.model";
import { AbstractHttpService } from "./abstract-http.service";
import { AuthService } from "./auth.service";
import { NotificationService } from "./notification.service";

type AllowedTypes = "restaurant";

export interface PlaceAroundParam {
    readonly latitude: number;
    readonly longitude: number;
    readonly type?: AllowedTypes;
    key: string;
    keyword: string;
    location?: string;
    radius?: number;
}

@Injectable({
    providedIn: "root"
})
export class MapsService extends AbstractHttpService {
    public constructor(http: HttpClient, authService: AuthService, notificationService: NotificationService) {
        super(http, authService, notificationService);
    }

    public getLocationEmbedUrlFromAddress(address: Address): string {
        const searchQuery = address.city + " " + address.street + " " + address.streetNumber;
        let url           = AppStaticConfig.GOOGLE_MAPS_API_EMBED_URL + "?";
        url += "key=" + AppStaticConfig.GOOGLE_MAPS_API_EMBED_KEY;
        url += "&q=" + encodeURIComponent(searchQuery);

        return url;
    }

    public getLocationEmbedUrlFromLatAndLong(latitude: number, longitude: number, zoom = 18): string {
        return this.getLocationEmbedUrl(`${ latitude },${ longitude }`, zoom);
    }

    public getPlacesAround(params: PlaceAroundParam): Observable<any> {
        params.radius = params.radius || 500; // max 50000

        params.location = params.latitude + "," + params.longitude;
        params.key      = params.key || AppStaticConfig.GOOGLE_MAPS_API_KEY;

        return this.http.post<any>("http://g43.clanweb.eu/API/maps.php", params)
                   .pipe(
                       catchError(this.handleError<any>("getPlacesAround"))
                   );
    }

    private getLocationEmbedUrl(searchQuery: string, zoom = 18): string {
        let url = AppStaticConfig.GOOGLE_MAPS_API_EMBED_URL + "?";
        url += "key=" + AppStaticConfig.GOOGLE_MAPS_API_EMBED_KEY;
        url += "&zoom=" + zoom;
        url += "&q=" + searchQuery;

        return url;
    }
}
