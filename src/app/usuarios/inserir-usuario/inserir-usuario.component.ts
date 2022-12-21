import { UsuariosService } from './../../service/usuarios.service';
import { Component } from '@angular/core';
import Usuario from 'src/app/model/usuario';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.css'],
})
export class InserirUsuarioComponent {
  usuario: Usuario = new Usuario();
  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return 'You must enter a value';
  }

  
  constructor(private usuariosService: UsuariosService) {}

  insereUsuario = () => {
    
    this.usuario.cpf = this.cpf.value ?? "";
    this.usuario.nome = this.nome.value ?? "";
    this.usuario.email = this.email.value ?? "";

    this.usuariosService.insereUsuario(this.usuario);
    console.log(this.usuario);
  };

  
}
