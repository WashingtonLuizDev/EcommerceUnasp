import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { UsuarioAdminService } from 'src/app/services/usuario-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  emailFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  senhaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });

  constructor(private fb: FormBuilder,
    private clienteService: ClienteService,
    private Router: Router) {
    this.form = this.fb.group({
      emailFormControl: this.emailFormControl,
      senhaFormControl: this.senhaFormControl
    });
  }

  ngOnInit(): void {
  }

  logar() {
    if (this.form.valid) {
      let userAdm: UsuarioAdmin = new UsuarioAdmin();
      userAdm.email = this.emailFormControl.value;
      userAdm.senha = this.senhaFormControl.value;
      this.usuarioAdminService.login(userAdm).subscribe((usuarioAdminIn: UsuarioAdmin) => {
        this.usuarioAdminService.usuarioLogado = usuarioAdminIn;
        this.Router.navigate(["/"]);
      }, (error: any) => {
        let cliente: Cliente = new Cliente();
        cliente.email = this.emailFormControl.value;
        cliente.senha = this.senhaFormControl.value;
        this.clienteService.login(cliente).subscribe((cliente: Cliente) => {
          this.clienteService.cliente = cliente;
          this.Router.navigate(["/"]);
        }, (error) => {
          alert("Email ou senha invalidos!");
        })
      })
    }
  }
}
