import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelContentHolderComponent } from './panel-content-holder/panel-content-holder.component';
import { PanelContentComponent } from './panel-content/panel-content.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PanelContentHolderComponent, PanelContentComponent],
  exports: [PanelContentHolderComponent, PanelContentComponent],
})
export class CustomPanelModule {}
