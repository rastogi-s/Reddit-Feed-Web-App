import { TestBed, inject } from '@angular/core/testing';

import { SubredditServiceService } from './subreddit-service.service';

describe('SubredditServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubredditServiceService]
    });
  });

  it('should be created', inject([SubredditServiceService], (service: SubredditServiceService) => {
    expect(service).toBeTruthy();
  }));
});
