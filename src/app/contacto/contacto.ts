import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { required } from '@angular/forms/signals';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  private fb = inject(FormBuilder);

  formularioContacto = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email],],
    telefono: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
    descripcion: ['',[Validators.maxLength(10), Validators.minLength(200)]]
    
  });


  enviar() {
    if (this.formularioContacto.valid)
      {alert('El formulario se envio de manera correcra al servidor')}
    else {alert('El formulario tiene datos ingresados de manera incorrecta')}
    console.log(this.formularioContacto.value);
    console.log(this.formularioContacto.valid);
    
  }
}