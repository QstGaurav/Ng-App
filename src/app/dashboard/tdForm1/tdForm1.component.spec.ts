/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TdForm1Component } from './tdForm1.component';

describe('TdForm1Component', () => {
  let component: TdForm1Component;
  let fixture: ComponentFixture<TdForm1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdForm1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
