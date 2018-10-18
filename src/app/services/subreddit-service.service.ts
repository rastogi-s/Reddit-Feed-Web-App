import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubredditServiceService {

  url: string;

  constructor() {
    this.url = 'https://www.reddit.com/r/default/top/.json';
  }

  fetchUReddits(topic, time) {

    let url = this.url;
    if (time == null) {
      url.replace('default', topic);
    } else {
      url = url.replace('default', topic) + '?t=' + time;
    }
    return fetch(url
    ).then(response => {
      if (response.headers.get('content-type') != null) {
        return response.json();
      } else {
        return null;
      }
    });
  }

}
