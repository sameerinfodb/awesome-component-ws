import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomPanelModule } from '@awesome/components/custom-panel';
import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    CustomPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
