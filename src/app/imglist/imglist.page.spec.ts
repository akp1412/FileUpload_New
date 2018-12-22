import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImglistPage } from './imglist.page';

describe('ImglistPage', () => {
  let component: ImglistPage;
  let fixture: ComponentFixture<ImglistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImglistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImglistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
