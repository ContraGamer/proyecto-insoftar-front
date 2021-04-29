import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from '../../environments/environment';
import { Usuario } from '../modelo/Usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioServicioService {

  constructor(private http:HttpClient) { }

  listAll(){
    const httpHeaders={
      headers:new HttpHeaders({
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
    return this.http.get<Usuario[]>(environment.apiUrl+"listAll",httpHeaders).subscribe();
  }

  getUser(id:number){
    const httpHeaders={
      headers:new HttpHeaders({
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Usuario>(environment.apiUrl+"getUser",id,httpHeaders).subscribe();
  }

  addUpdate(usuario:Usuario){
    const httpHeaders={
      headers:new HttpHeaders({
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<Usuario>(environment.apiUrl+"addUpdate",usuario,httpHeaders).subscribe();
  }

}
