import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRedditHomeComponent } from './my-reddit-home.component';

describe('MyRedditHomeComponent', () => {
  let component: MyRedditHomeComponent;
  let fixture: ComponentFixture<MyRedditHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRedditHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRedditHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
