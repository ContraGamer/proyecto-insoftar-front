
import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Usuario } from '../modelo/Usuario';
import {environment} from '../../environments/environment';
import { UsuarioServicioService } from '../servicio/usuario-servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit {

  lista:Usuario[];

  constructor(private http:HttpClient,private servicio:UsuarioServicioService, private router:Router) {
    
  }

  ngOnInit(): void {
    const httpHeaders={
      headers:new HttpHeaders({
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      })
    };
   this.http.get<Usuario[]>(environment.apiUrl+'listAll',httpHeaders).subscribe(data=>this.lista=data);
  }

  editar(usuario:Usuario){
    this.router.navigate(['/formulario'],{state:usuario});
  }

  agregar(){
    this.router.navigate(['/formulario']);
  }

}
