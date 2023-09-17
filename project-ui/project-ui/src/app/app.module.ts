import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestsComponent } from './requests/requests.component';
import { TemplatesComponent } from './templates/templates.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { FormsModule } from '@angular/forms';
import { ArchivedComponent } from './archived/archived.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    RequestsComponent,
    TemplatesComponent,
    StatisticsComponent,
    ArchivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
