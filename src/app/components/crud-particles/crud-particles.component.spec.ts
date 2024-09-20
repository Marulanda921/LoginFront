import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudParticlesComponent } from './crud-particles.component';

describe('CrudParticlesComponent', () => {
  let component: CrudParticlesComponent;
  let fixture: ComponentFixture<CrudParticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudParticlesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudParticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
