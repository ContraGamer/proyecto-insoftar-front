import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component'


const routes: Routes = [
  {path: 'listaUsuarios', component:ListaUsuariosComponent},
  {path: '', pathMatch:'full' ,redirectTo:'listaUsuarios'},
  {path:'formulario',component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
