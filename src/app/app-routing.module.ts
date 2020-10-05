import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OperacionComponent } from './pages/operacion/operacion.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'operaciones', component: OperacionComponent},
  {path: '', redirectTo:'home',  pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
