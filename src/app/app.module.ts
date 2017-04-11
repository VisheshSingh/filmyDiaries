import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';
import { FirebaseService } from './services/firebase.service';
import{ FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { EditMovieComponent } from './components/edit-movie/edit-movie.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCUy7dczumKHqwhuG33dINkw3NVIosk0rI',
  authDomain: 'filmydiaries-20750.firebaseapp.com',
  databaseURL: 'https://filmydiaries-20750.firebaseio.com',
  storageBucket: 'filmydiaries-20750.appspot.com',
  messagingSenderId: '759832969622'
};

const FirebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'movies', component: MoviesComponent},
  {path:'listing/:id', component: ListingComponent},
  {path:'edit-movie/:id', component: EditMovieComponent},
  {path:'add-movie', component: AddMovieComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent,
    NavbarComponent,
    ListingComponent,
    AddMovieComponent,
    EditMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, FirebaseAuthConfig),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
