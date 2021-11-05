import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedCitisComponent } from './saved-citis.component';

describe('SavedCitisComponent', () => {
  let component: SavedCitisComponent;
  let fixture: ComponentFixture<SavedCitisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedCitisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedCitisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
