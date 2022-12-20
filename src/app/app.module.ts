import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BooksComponent } from './books/books.component';
import { SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/compat/firestore';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthorsComponent } from './authors/authors.component';
import { RankingsComponent } from './rankings/rankings.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    NavigationComponent,
    AuthorsComponent,
    RankingsComponent,
    AboutComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireModule,
    RouterModule,
    AuthModule,
    ReactiveFormsModule,
         AuthRoutingModule
         
  ],
  providers: [{
    provide: FIRESTORE_SETTINGS,
    useValue: { experimentalAutoDetectLongPolling: true, merge: true },
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
