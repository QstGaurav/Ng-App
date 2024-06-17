/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Rform2Component } from './rform2.component';

describe('Rform2Component', () => {
  let component: Rform2Component;
  let fixture: ComponentFixture<Rform2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rform2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rform2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
