import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {TestingModule} from "../../../../tests/testing.module";
import {PersonModule} from "../../person.module";
import {PersonDetailComponent} from "./person-detail.component";

describe("PersonDetailComponent", () => {
    let component: PersonDetailComponent;
    let fixture: ComponentFixture<PersonDetailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                TestingModule,
                PersonModule,
            ],
            declarations: [],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture   = TestBed.createComponent(PersonDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should be created", () => {
        expect(component).toBeTruthy();
    });
});