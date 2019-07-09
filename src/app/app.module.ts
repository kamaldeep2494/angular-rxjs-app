import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { JokeListComponent } from './joke-list/joke-list/joke-list.component';
import { JokeService } from './joke.service';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [JokeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
