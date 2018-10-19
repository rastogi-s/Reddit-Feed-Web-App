import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubredditServiceService} from '../../services/subreddit-service.service';

@Component({
  selector: 'app-subreddit-listing',
  templateUrl: './subreddit-listing.component.html',
  styleUrls: ['./subreddit-listing.component.css']
})
export class SubredditListingComponent implements OnInit {

  listings = [];
  error: string;
  toggleError: boolean;
  listingTime: string;
  timeString: string;
  topic: string;
  searchTopic: string;
  leftPage: boolean;
  rightPage: boolean;
  afterName: string;

  constructor(private service: SubredditServiceService, private route: ActivatedRoute) {
    this.afterName = null;
    this.leftPage = true;
    this.rightPage = true;
    this.timeString = 'Past 24 hours';
    this.listingTime = 'day';
    this.topic = '';
    this.toggleError = true;
    this.error = '';
    this.route.params.subscribe(param => {
      this.topic = param['topic'];
    });

    if (this.topic !== ' ') {
      this.fetchListing(this.topic, this.listingTime);
    }
  }

  fetchListing(topic, time = null, after = null) {
    this.listingTime = time;
    this.topic = topic;
    // this.afterName = after;
    this.service.fetchUReddits(topic, time, after).then((listings) => {
      if (listings != null && listings.error !== 404) {

        this.afterName = listings.data.after;

        if (this.afterName == null) {
          this.rightPage = true ;
        } else {
          this.rightPage = false ;
        }

          this.listings = listings.data.children.map((obj) => obj.data).map((obj => {
            const newObj = obj;
            newObj.created = new Date(obj.created * 1000).toDateString();
            return newObj;
          }));
        this.toggleError = true;
      } else {
        this.error = 'Something went wrong. Please select the keyword judicially.';
        this.toggleError = false;
      }
    }).catch((error) => {
      this.error = error.toString().split(':')[1];
      this.toggleError = false;
    });

  }

  ngOnInit() {

  }
}
