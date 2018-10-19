import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubredditServiceService {

  url: string;

  constructor() {
    this.url = 'https://www.reddit.com/r/default/top/.json';
  }

  fetchUReddits(topic, time, after) {
    console.log(topic);
    console.log(after);
    console.log(time);
    let url = this.url;
    url = url.replace('default', topic) + ((time !== null) ? '?t=' + time : '') + ((after != null) ? '?after=' + after : '');
    console.log(url);
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
