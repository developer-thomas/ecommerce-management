import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountingBoxComponent } from './mounting-box.component';

describe('MountingBoxComponent', () => {
  let component: MountingBoxComponent;
  let fixture: ComponentFixture<MountingBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MountingBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MountingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
