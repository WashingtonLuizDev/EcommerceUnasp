import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

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
      let cliente: Cliente = new Cliente();
      cliente.email = this.emailFormControl.value;
      cliente.senha = this.senhaFormControl.value;
      this.clienteService.login(cliente).subscribe((clienteResponse: Cliente) => {
        this.clienteService.cliente = clienteResponse;
        this.Router.navigate(["/pedido"]);
      }, (error: any) => {
        let cliente: Cliente = new Cliente();
        cliente.email = this.emailFormControl.value;
        cliente.senha = this.senhaFormControl.value;
        this.clienteService.login(cliente).subscribe((cliente: Cliente) => {
          this.clienteService.cliente = cliente;
          this.Router.navigate(["/home"]);
        }, (error) => {
          alert("Email ou senha invalidos!");
        })
      })
    }
  }
}
