import { Injectable } from '@angular/core';
import Usuario from '../model/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  // Estamos gerenciando o estado na propria aplicação, isso nao é o 100% adequado.
  // Normalmente os dados vem de alguma API.
  // Para o projeto, vao ser aceitas as 3 formas
  // - 1: Quero gerenciar direto no front
  // - 2: Vou fazer uma API -> VIDA REAL.
  // - 3: Quero usar local storage(similares)
  usuarios: Set<Usuario> = new Set<Usuario>();

  constructor() {}

  carregaUsuarios = () => this.usuarios;

  buscaPorId = (id: number) => Array.from(this.usuarios).find(u => u.id == id);

  insereUsuario = (usuario: Usuario) => this.usuarios.add(usuario);

}
