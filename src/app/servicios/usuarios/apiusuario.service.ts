import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { Usuario, UsuarioId} from './../../modelo/login';
@Injectable({
  providedIn: 'root'
})
export class ApiusuarioService {
  urlRegistro = ": https://dummyjson.com/users/add";
  urlUsuario = "https://dummyjson.com/auth/login";
  private coUsuarios = new BehaviorSubject<Array<UsuarioId>>([]);
  public usuarios$ = this.coUsuarios.asObservable();
  constructor(private http:HttpClient) { }




  public registro(usuario: Usuario): Observable<any> {
    return this.http.post(this.urlRegistro, usuario, {
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      }
    })
  }
}
