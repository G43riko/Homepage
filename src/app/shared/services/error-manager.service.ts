import { Injectable } from "@angular/core";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

@Injectable()
export class ErrorManagerService {

    public getMessageFromError(error: Response | string, defaultError: string): string {
        let message = defaultError;
        if (typeof error === "string") {
            message = error;
        } else if (error.status === 0) {
            message = "Stránka je nedostupná";

        } else {
        }
        return message;
    }
}
