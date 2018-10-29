import { Component, Input } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
    selector: 'hola-app',
    template: ` Bienvenido a {{ title }}!`
})
export class SaludoComponent {
    @Input() title;
}