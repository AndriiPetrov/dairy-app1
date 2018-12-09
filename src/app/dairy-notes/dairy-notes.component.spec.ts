import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyNotesComponent } from './dairy-notes.component';

describe('DairyNotesComponent', () => {
  let component: DairyNotesComponent;
  let fixture: ComponentFixture<DairyNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
