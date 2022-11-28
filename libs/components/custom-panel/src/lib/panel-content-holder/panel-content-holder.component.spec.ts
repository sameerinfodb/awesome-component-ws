import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelContentHolderComponent } from './panel-content-holder.component';

describe('PanelContentHolderComponent', () => {
  let component: PanelContentHolderComponent;
  let fixture: ComponentFixture<PanelContentHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PanelContentHolderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PanelContentHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
