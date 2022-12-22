import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../../service/usuarios.service';
import { Component, OnInit } from '@angular/core';
import Usuario from 'src/app/model/usuario';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inserir-usuario',
  templateUrl: './inserir-usuario.component.html',
  styleUrls: ['./inserir-usuario.component.css'],
})
export class InserirUsuarioComponent implements OnInit {
  usuario: Usuario = new Usuario();
  email = new FormControl('', [Validators.required, Validators.email]);
  nome = new FormControl('', [Validators.required]);
  cpf = new FormControl('', [Validators.required]);

  getErrorMessage() {
    return 'You must enter a value';
  }

  
  constructor(private usuariosService: UsuariosService, 
    private router: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.router.snapshot.params['id'];
    if (id) {
      this.usuario = this.usuariosService.buscaPorId(id)!;

      console.log('usuuario encontrado', this.usuario);

      this.email.setValue(this.usuario.email);
      this.nome.setValue(this.usuario.nome);
      this.cpf.setValue(this.usuario.cpf);
    }
  }

  insereUsuario = () => {
    
    this.usuario.cpf = this.cpf.value ?? "";
    this.usuario.nome = this.nome.value ?? "";
    this.usuario.email = this.email.value ?? "";

    this.usuariosService.insereUsuario(this.usuario);
    console.log(this.usuario);
  };

  
}
