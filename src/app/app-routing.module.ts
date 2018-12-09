import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiaryItemsComponent } from './diary-items/diary-items.component';
import { DairyNotesComponent } from './dairy-notes/dairy-notes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dairyelements', pathMatch: 'full'},
  { path: 'dairyelements', component: DiaryItemsComponent,
  children: [
    {path: ':id', component: DairyNotesComponent}
  ]},
  // { path: 'dairyelements/:id', component:}
  {path: 'dairyelements/:id', component: DairyNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
