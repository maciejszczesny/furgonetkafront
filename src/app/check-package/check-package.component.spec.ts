import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPackageComponent } from './check-package.component';

describe('CheckPackageComponent', () => {
  let component: CheckPackageComponent;
  let fixture: ComponentFixture<CheckPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
