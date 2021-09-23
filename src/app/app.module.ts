import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CampaignsListComponent } from './components/campaigns-list/campaigns-list.component';
import { NewFormComponent } from './components/new-form/new-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CampaignsListComponent,
    NewFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
