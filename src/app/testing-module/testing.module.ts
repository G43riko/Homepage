import { CommonModule } from "@angular/common";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterTestingModule } from "@angular/router/testing";

@NgModule({
    imports     : [],
    declarations: [],
    providers   : [],
    exports     : [
        BrowserAnimationsModule,
        BrowserModule,
        RouterTestingModule,
        FormsModule,
        CommonModule,
        HttpClientTestingModule,
    ],
})
export class TestingModule {
}
