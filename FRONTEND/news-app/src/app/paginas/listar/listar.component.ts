import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.sass'
})
export class ListarComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) {

  }
  usuarios!: any;

  ngOnInit(): void {
    this.http.get('http://localhost:8080/bd/listar')
      .subscribe(data => {
        console.log(data)
        this.usuarios = data
      })
  }

  deleteUsuario(value: string) {
    console.log('oi')
    this.http.delete(`http://localhost:8080/bd/delete/${value}`)
      .subscribe(data => {
        this.http.get('http://localhost:8080/bd/listar')
          .subscribe(data => {
            console.log(data)
            this.usuarios = data
          })
      })
  }
  editarUsuario(value: string){
    this.router.navigate(["/cadastrar", value])
  }

}
