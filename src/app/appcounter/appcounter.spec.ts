import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Appcounter } from './appcounter';

describe('Appcounter', () => {
  let component: Appcounter;
  let fixture: ComponentFixture<Appcounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Appcounter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Appcounter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
