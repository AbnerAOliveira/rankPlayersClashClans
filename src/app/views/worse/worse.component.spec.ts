import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorseComponent } from './worse.component';

describe('WorseComponent', () => {
  let component: WorseComponent;
  let fixture: ComponentFixture<WorseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
