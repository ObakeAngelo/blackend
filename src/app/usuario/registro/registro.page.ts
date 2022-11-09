import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {ApiusuarioService} from './../../servicios/usuarios/apiusuario.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  public formulario :FormGroup;
  constructor(private formB: FormBuilder,private ruta: Router, private api: ApiusuarioService, ) {
    this.constFormulario();
   }

   private constFormulario() {
    this.formulario = this.formB.group({
      // new FormControl()
      firstName: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      age: new FormControl(0, [Validators.required, Validators.min(18), Validators.max(98)]),
      userName: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      password:new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      gender:new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]),
     
    })
  
   }
   public campo(control: string){
    return this.formulario.get(control);
  }
  public tocado(control: string){
    return this.formulario.get(control).touched;
  }
  public sucio(control: string){
    return this.formulario.get(control).dirty;
  }

  ngOnInit() {
     public guardarProducto(): Promise<void> {
      if(this.formulario.invalid ){
        this.formulario.markAsTouched();
        return;
      }
  
  
      this.api.registro({
        ...this.formulario.value
      })
      .subscribe(datos => {
        if(datos){
  
          alert('SE registro Correctamente ');
          this.router.navigate(['/listar']);
  
        }
      })
    }
  

}
