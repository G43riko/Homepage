import { NgModule } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from "@angular/fire/storage";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BrowserModule } from "@angular/platform-browser";
import { G43TestingModule } from "@g43/common";
import { TranslateModule } from "@ngx-translate/core";
import { MaterialModule } from "../shared/modules/material.module";
import { AngularFireAuthMockService } from "./mock-services/angular-fire-auth-mock.service";
import { AngularFireStorageMockService } from "./mock-services/angular-fire-storage-mock.service";
import { AngularFirestoreMockService } from "./mock-services/angular-firestore-mock.service";

@NgModule({
    imports     : [
        TranslateModule.forRoot()
    ],
    declarations: [],
    providers   : [
        {provide: AngularFirestore, useClass: AngularFirestoreMockService},
        {provide: AngularFireAuth, useClass: AngularFireAuthMockService},
        {provide: AngularFireStorage, useClass: AngularFireStorageMockService},

        {provide: MatDialogRef, useValue: {}},
        {provide: MAT_DIALOG_DATA, useValue: {}}
    ],
    exports     : [
        G43TestingModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ]
})
export class TestingModule {
}
