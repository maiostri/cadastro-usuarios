import { UsuariosService } from './../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Usuario from '../model/usuario';

@Component({
  selector: 'app-usuario-detalhe',
  templateUrl: './usuario-detalhe.component.html',
  styleUrls: ['./usuario-detalhe.component.css'],
})
export class UsuarioDetalheComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(
    private usuarioService: UsuariosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    const usuario = this.usuarioService.buscaPorId(id);
    this.usuario = usuario ?? this.usuario;
  }
}
