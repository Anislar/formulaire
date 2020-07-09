import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormualaireFormComponent } from './formualaire-form.component';

describe('FormualaireFormComponent', () => {
  let component: FormualaireFormComponent;
  let fixture: ComponentFixture<FormualaireFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormualaireFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormualaireFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
