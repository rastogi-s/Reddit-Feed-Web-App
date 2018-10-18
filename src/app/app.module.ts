import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import { AppComponent } from './app.component';
import { SubredditListingComponent } from './components/subreddit-listing/subreddit-listing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyRedditHomeComponent } from './components/my-reddit-home/my-reddit-home.component';

@NgModule({
  declarations: [
    AppComponent,
    SubredditListingComponent,
    NavbarComponent,
    FooterComponent,
    MyRedditHomeComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
