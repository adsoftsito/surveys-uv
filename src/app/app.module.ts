import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAdmisionUvWebComponent } from './components/add-admision-test-uv-web/add-admision-uv-web.component';
import { AdmisionUvWebDetailsComponent } from './components/admision-uv-web-details/admision-uv-web-details.component';
import { AdmisionUvWebListComponent } from './components/admision-uv-web-list/admision-uv-web-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAdmisionUvWebComponent,
    AdmisionUvWebDetailsComponent,
    AdmisionUvWebListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
