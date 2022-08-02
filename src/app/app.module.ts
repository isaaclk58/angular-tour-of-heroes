import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'dashboard', component: DashboardComponent },
      { path: 'heroes', component: HeroesComponent },
      { path: 'detail', component: DetailComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    DashboardComponent,
    HeroesComponent,
    DetailComponent,
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
