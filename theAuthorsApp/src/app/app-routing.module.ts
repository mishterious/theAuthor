import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  { path: 'add', component: AddComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: '**', component: AllComponent },
  { path: 'all', component: AllComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
