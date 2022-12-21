import { UsuariosService } from './../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import Usuario from '../model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  // Vamos utilizar uma lista, porque o Componente de Tabela do material funciona
  // somente com listas
  usuarios: Usuario[] = [];

  colunasExibidas: string[] = ["Id", "Nome", "Ver"];

  constructor(private usuariosService: UsuariosService) {}
  
  // Vamos fazer o carregamento dos dados.
  ngOnInit(): void {
    this.usuarios = Array.from(this.usuariosService.carregaUsuarios());
  }

}
