import {RouterModule, Routes} from '@angular/router';
import {MyRedditHomeComponent} from './components/my-reddit-home/my-reddit-home.component';
import {SubredditListingComponent} from './components/subreddit-listing/subreddit-listing.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MyRedditHomeComponent},
  {path: 'subreddit/:topic', component: SubredditListingComponent},
  {path: '**', component: MyRedditHomeComponent} // last
];
export const routing = RouterModule.forRoot(appRoutes);
