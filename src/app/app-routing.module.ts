import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListMedicosComponent } from './list-medicos/list-medicos.component';


const routes: Routes = [
  { path: '', component: ListMedicosComponent },
  { path: 'medicos', component: ListMedicosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }