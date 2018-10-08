import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AbstractDetailComponent } from "../../../shared/components/abstract-detail.component";
import { Address } from "../../../shared/models/person/address.model";
import { Person } from "../../../shared/models/person/person.model";
import { MapsService } from "../../../shared/services/maps.service";
import { PersonService } from "../../../shared/services/person.service";

declare let $: any;

@Component({
    selector: "app-person-detail",
    templateUrl: "./person-detail.component.html",
    styleUrls: ["./person-detail.component.css"],
})
export class PersonDetailComponent extends AbstractDetailComponent implements OnInit {
    public selectedPerson: Person;
    public mapUrl = "";
    public timer: any;

    constructor(private readonly route: ActivatedRoute,
                private readonly mapService: MapsService,
                private readonly personService: PersonService) {
        super();
    }

    private static preparePerson(person: Person): Person {
        if (!person.address) {
            person.address = new Address();
        }
        return person;
    }

    public ngOnInit() {
        this.route.params.subscribe((data) => {
            const actId = data["id"];
            if (actId === "new") {
                this.selectedPerson = new Person();
                this.bindEvents();
                this.isNew    = true;
                this.disabled = false;
            } else {
                this.isNew    = false;
                this.disabled = true;
                this.personService.getDetail(actId).subscribe((person) => {
                    this.selectedPerson = PersonDetailComponent.preparePerson(person);
                    this.bindEvents();
                });
            }
        });
    }

    public unbindEvents(): void {
        clearTimeout(this.timer);
    }

    public save() {
        if (this.isNew) {
            this.personService.add(this.selectedPerson).subscribe((data) => {
                this.selectedPerson = PersonDetailComponent.preparePerson(data);
                this.bindEvents();
                // this.showMessage();
                this.disabled = true;
                // this.router.navigate(["/" + Config.PATH_IMAGE_UPLOAD]);
            });
        } else {
            this.personService.update(this.selectedPerson).subscribe((data) => {
                this.selectedPerson = PersonDetailComponent.preparePerson(data);
                this.bindEvents();
                // this.showMessage();
                this.disabled = true;
            });
        }
    }

    /*
    private showMessage(text: string = "", delay: number = 2000) {
        const box = $(".positive.message");

        box.removeClass("hidden");
        setTimeout(() => {
            box.transition("fade");
        }, delay);
    }
    */

    public showMap() {
        const iframe: any = window.document.getElementById("mapIframe");
        iframe.src        = iframe.src;
        let address       = this.selectedPerson.address.city + " ";
        address += this.selectedPerson.address.street + " ";
        address += this.selectedPerson.address.streetNumber;

        this.mapUrl = this.mapService.getLocationEmbedUrl(encodeURI(address));
        $(".modal").modal("show");
    }

    public edit() {
        this.disabled = false;
        this.bindEvents();
    }

    public back() {
        this.disabled = true;
    }

    private bindEvents(): void {
        this.timer = setTimeout(() => {
            $(".ui.radio.checkbox").checkbox();
            $("select.dropdown").dropdown();
        }, 10);
    }
}
