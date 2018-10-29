import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { SaludoComponent } from './saludo.component';
import { ControlComponent } from './control/control.component';
import { DomcontrolComponent } from './domcontrol/domcontrol.component';
import { SuperheroesListComponent } from './superheroes-list/superheroes-list.component';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ControlComponent,
    DomcontrolComponent,
    SuperheroesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
