import { InserirUsuarioComponent } from './usuarios/inserir-usuario/inserir-usuario.component';
import { UsuarioDetalheComponent } from './usuario-detalhe/usuario-detalhe.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'usuario/novo',
    component: InserirUsuarioComponent
  },
  {
    path: 'usuario/:id',
    component: UsuarioDetalheComponent
  },
  {
    path: 'usuario/editar/:id',
    component: InserirUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
