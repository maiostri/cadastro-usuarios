import { UsuariosService } from './../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import Usuario from '../model/usuario';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // Vamos utilizar uma lista, porque o Componente de Tabela do material funciona
  // somente com listas
  usuarios: Usuario[] = [];

  colunasExibidas: string[] = ["Id", "Nome", "Ver", "Remover", "Editar"];

  busca = new FormControl('');

  constructor(private usuariosService: UsuariosService) {}
  
  // Vamos fazer o carregamento dos dados.
  ngOnInit(): void {
    this.usuarios = Array.from(this.usuariosService.carregaUsuarios());
  }

  removerUsuario(usuario: Usuario): void {
    this.usuariosService.removeUsuario(usuario);
  }

  buscaUsuarios() {
    const nome = this.busca.value;
    this.usuarios = this.usuariosService.buscaPorNome(nome ?? '');
    console.log('usuarios encontrados: ', this.usuarios);
  }

}
