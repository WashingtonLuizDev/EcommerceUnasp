import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  form: FormGroup;
  nomeFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  });
  cpfFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  })
  dataNascimentoFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  })
  emailFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  })
  senhaFormControl = this.formBuild.control('', {
    validators: [Validators.required], updateOn: 'blur'
  })

  constructor(private formBuild: FormBuilder,
    private clienteService: ClienteService) {
    this.form = this.formBuild.group({
      nomeFormControl: this.nomeFormControl,
      cpfFormControl: this.cpfFormControl,
      dataNascimentoFormControl: this.dataNascimentoFormControl,
      emailFormControl: this.emailFormControl,
      senhaFormControl: this.senhaFormControl
    });
  }

  ngOnInit(): void {
  }

  salvar() {
    if (this.form.valid) {
      if (this.cliente == undefined || this.cliente == null)
        this.cliente = new Cliente();

      this.cliente.nome = this.nomeFormControl.value;
      this.cliente.cpf = this.cpfFormControl.value;
      this.cliente.dataNascimento = this.dataNascimentoFormControl.value;
      this.cliente.email = this.emailFormControl.value;
      this.cliente.senha = this.senhaFormControl.value;

      if (this.cliente.id == undefined || this.cliente.id == null) {
        this.clienteService.post(this.cliente).subscribe((cliente: Cliente) => {
          this.cliente = cliente;
        });
      } else {
        this.clienteService.put(this.cliente).subscribe((cliente: Cliente) => {
          this.cliente = cliente;
        })
      }
    }
  }
}
