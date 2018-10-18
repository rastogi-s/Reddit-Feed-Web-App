import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubredditListingComponent } from './subreddit-listing.component';

describe('SubredditListingComponent', () => {
  let component: SubredditListingComponent;
  let fixture: ComponentFixture<SubredditListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubredditListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubredditListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
