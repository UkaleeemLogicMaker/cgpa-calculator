import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemestersPage } from './semesters.page';

describe('SemestersPage', () => {
  let component: SemestersPage;
  let fixture: ComponentFixture<SemestersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemestersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemestersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
