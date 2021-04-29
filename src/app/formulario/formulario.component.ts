import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelo/Usuario';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Mensaje } from '../modelo/Mensaje';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  private state:any;
  private usuario:Usuario;
  public formEditAdd;
  public tipoFormulario:String ="creación";
  dato:Mensaje;

  constructor(private router:Router, private http:HttpClient) {
    this.usuario= new Usuario();
    if (this.router.getCurrentNavigation().extras.state) {
      this.state =  this.router.getCurrentNavigation().extras.state;
      this.usuario=this.state;
      this.tipoFormulario="edición";
    }

    this.formEditAdd = new FormGroup({
      id: new FormControl(this.usuario.id),
      primerNombre: new FormControl(this.usuario.primerNombre),
      segundoNombre: new FormControl(this.usuario.segundoNombre),
      primerApellido: new FormControl(this.usuario.primerApellido),
      segundoApellido: new FormControl(this.usuario.segundoApellido),
      cedula: new FormControl(this.usuario.cedula),
      correo: new FormControl(this.usuario.correo),
      telefono: new FormControl(this.usuario.telefono),
    });

   }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.usuario=this.formEditAdd.value;
    this.http.post<Mensaje>(environment.apiUrl+"addUpdate",this.usuario).subscribe(data=>this.dato=data,err=>this.dato=err);
    console.log(this.dato.mensaje);
    this.router.navigate(['/listaUsuarios']);
  }

  atras(){
    this.router.navigate(['/listaUsuarios']);
  }

}
