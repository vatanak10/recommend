import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionSelectionComponent } from './session-selection/session-selection.component';
import { ResultComponent } from './result/result.component';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { DataService } from './services/data.service';

const appRoutes: Routes = [
  {
    path: '',
    component: SessionSelectionComponent
  },
  {
    path: 'result',
    component: ResultComponent
  }
];

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN1OjGV_lpi4XMVm4tQUBR2w9iJUVguxo",
  authDomain: "kirirom-forum-chatbot.firebaseapp.com",
  databaseURL: "https://kirirom-forum-chatbot-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kirirom-forum-chatbot",
  storageBucket: "kirirom-forum-chatbot.appspot.com",
  messagingSenderId: "1047652526437",
  appId: "1:1047652526437:web:fec9d8359b5d40b984d98c",
  measurementId: "G-YYBXWNG94Y"
};

@NgModule({
  declarations: [
    AppComponent,
    SessionSelectionComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
