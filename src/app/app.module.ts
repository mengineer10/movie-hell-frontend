import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { SocialBarComponent } from './social-bar/social-bar.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { FooterComponent } from './footer/footer.component';
import { MovieComponent } from './movie/movie.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SocialBarComponent,
    CardMovieComponent,
    MovieDetailComponent,
    FooterComponent,
    MovieComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
