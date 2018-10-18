import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-reddit-home',
  templateUrl: './my-reddit-home.component.html',
  styleUrls: ['./my-reddit-home.component.css']
})
export class MyRedditHomeComponent implements OnInit {

  topic: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

}
