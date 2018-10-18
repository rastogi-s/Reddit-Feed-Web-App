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

  constructor(private service: SubredditServiceService, private route: ActivatedRoute) {
    this.timeString = 'Past 24 hours';
    this.listingTime = 'day';
    this.topic = ' ';
    this.toggleError = true;
    this.error = '';
    this.route.params.subscribe(param => {
      this.topic = param['topic'];
    });

    if (this.topic !== ' ') {
      this.fetchListing(this.topic, this.listingTime);
    }
  }

  fetchListing(topic, time = null) {
    console.log(time);
    this.service.fetchUReddits(topic, time).then((listings) => {
      if (listings != null && listings.error !== 404) {

        this.listings = listings.data.children.map((obj) => obj.data).map((obj => {
          const newObj = obj;
          console.log(obj.created);
          newObj.created = new Date(obj.created * 1000).toDateString();
          return newObj;
        }));
        console.log(this.listings);
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
