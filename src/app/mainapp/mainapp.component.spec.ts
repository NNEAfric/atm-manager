import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainappPage } from './mainapp.page';

describe('MainappPage', () => {
  let component: MainappPage;
  let fixture: ComponentFixture<MainappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainappPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
