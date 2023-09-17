import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsComponent } from './statistics/statistics.component';
import { RequestsComponent } from './requests/requests.component';
import { TemplatesComponent } from './templates/templates.component';
import { ArchivedComponent } from './archived/archived.component';


const routes: Routes = [{ path: 'statistics', component:StatisticsComponent },
{ path: '', component:TemplatesComponent },
{ path: 'requests', component:RequestsComponent },
{ path: 'archived', component:ArchivedComponent },
{ path: 'templates', component:TemplatesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
