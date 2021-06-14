import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';

import { UsersPagesComponent } from './feature/users/pages/users-pages/users-pages.component';
import { UsersDetailComponent } from './feature/users/pages/users-detail/users-detail.component';
import { UsersListComponent } from './feature/users/pages/users-list/users-list.component';
import { UsersEditFormComponent } from './feature/users/pages/users-edit-form/users-edit-form.component';
import { UsersNewFormComponent } from './feature/users/pages/users-new-form/users-new-form.component';
import { UsersFormComponent } from './feature/users/components/users-form/users-form.component';
import { MedicsPageComponent } from './feature/medics/pages/medics-page/medics-page.component';
import { MedicsDetailComponent } from './feature/medics/pages/medics-detail/medics-detail.component';
import { MedicsListComponent } from './feature/medics/pages/medics-list/medics-list.component';
import { MedicsEditFormComponent } from './feature/medics/pages/medics-edit-form/medics-edit-form.component';
import { MedicsNewFormComponent } from './feature/medics/pages/medics-new-form/medics-new-form.component';
import { MedicFormComponent } from './feature/medics/components/medic-form/medic-form.component';
import { RendezvousFormComponent } from './feature/rendezvous/components/rendezvous-form/rendezvous-form.component';
import { RendezvousPageComponent } from './feature/rendezvous/pages/rendezvous-page/rendezvous-page.component';
import { RendezvousDetailComponent } from './feature/rendezvous/pages/rendezvous-detail/rendezvous-detail.component';
import { RendezvousListComponent } from './feature/rendezvous/pages/rendezvous-list/rendezvous-list.component';
import { RendezvousEditFormComponent } from './feature/rendezvous/pages/rendezvous-edit-form/rendezvous-edit-form.component';
import { RendezvousNewFormComponent } from './feature/rendezvous/pages/rendezvous-new-form/rendezvous-new-form.component';
import { NotificationPageComponent } from './feature/notification/pages/notification-page/notification-page.component';
import { NotificationDetailComponent } from './feature/notification/pages/notification-detail/notification-detail.component';
import { NotificationListComponent } from './feature/notification/pages/notification-list/notification-list.component';
import { NotificationEditFormComponent } from './feature/notification/pages/notification-edit-form/notification-edit-form.component';
import { NotificationNewFormComponent } from './feature/notification/pages/notification-new-form/notification-new-form.component';
import { NotificationFormComponent } from './feature/notification/components/notification-form/notification-form.component';
import { ComptePageComponent } from './feature/compte/pages/compte-page/compte-page.component';
import { HomePageComponent } from './feature/home/pages/home-page/home-page.component';
import { NotfoundComponent } from './feature/notfound/notfound.component';
import { ButtonRedirectorComponent } from './shared-component/button-redirector/button-redirector.component';
import { AssistantDetailComponent } from './feature/users/pages/assistant-detail/assistant-detail.component';
import { ConnexionComponent } from './feature/authentification/connexion/connexion.component';
import { InscriptionComponent } from './feature/authentification/inscription/inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

import { FrequencesPagesComponent } from './feature/frequence/pages/frequences-pages/frequences-pages.component';
import { FrequencesListComponent } from './feature/frequence/pages/frequences-list/frequences-list.component';
import { FrequencesNewFormComponent } from './feature/frequence/pages/frequences-new-form/frequences-new-form.component';
import { FrequencesEditFormComponent } from './feature/frequence/pages/frequences-edit-form/frequences-edit-form.component';
import { DureesEditFormComponent } from './feature/duree/pages/durees-edit-form/durees-edit-form.component';
import { DureesNewFormComponent } from './feature/duree/pages/durees-new-form/durees-new-form.component';
import { DureesListComponent } from './feature/duree/pages/durees-list/durees-list.component';
import { DureesPagesComponent } from './feature/duree/pages/durees-pages/durees-pages.component';

const modules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatRadioModule, 
  MatCheckboxModule,
  MatTableModule
];

@NgModule({
  declarations: [
    AppComponent,
    UsersPagesComponent,
    UsersDetailComponent,
    UsersListComponent,
    UsersEditFormComponent,
    UsersNewFormComponent,
    UsersFormComponent,
    MedicsPageComponent,
    MedicsDetailComponent,
    MedicsListComponent,
    MedicsEditFormComponent,
    MedicsNewFormComponent,
    MedicFormComponent,
    RendezvousFormComponent,
    RendezvousPageComponent,
    RendezvousDetailComponent,
    RendezvousListComponent,
    RendezvousEditFormComponent,
    RendezvousNewFormComponent,
    NotificationPageComponent,
    NotificationDetailComponent,
    NotificationListComponent,
    NotificationEditFormComponent,
    NotificationNewFormComponent,
    NotificationFormComponent,
    ComptePageComponent,
    HomePageComponent,
    NotfoundComponent,
    ButtonRedirectorComponent,
    AssistantDetailComponent,
    ConnexionComponent,
    InscriptionComponent,
    FrequencesPagesComponent,
    FrequencesListComponent,
    FrequencesNewFormComponent,
    FrequencesEditFormComponent,
    DureesEditFormComponent,
    DureesNewFormComponent,
    DureesListComponent,
    DureesPagesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    [...modules]
  ],
  exports: [
    [...modules]
  ],
  providers: [{ provide: MatDialogRef, useValue: {} }],
  bootstrap: [AppComponent]
})
export class AppModule { }
