import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { FormsModule } from "@angular/forms";
import { EmailComponent } from "./email.component";

describe("EmailComponent", () => {
    let component: EmailComponent;
    let fixture: ComponentFixture<EmailComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EmailComponent,
            ],
            imports: [
                FormsModule,
            ],
        })
               .compileComponents();
    }));

    beforeEach(() => {
        fixture   = TestBed.createComponent(EmailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should be created", () => {
        expect(component).toBeTruthy();
    });
});
