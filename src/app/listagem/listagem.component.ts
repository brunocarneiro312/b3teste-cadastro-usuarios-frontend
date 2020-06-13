import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  usuarios: any[];
  page = 1;
  pageSize = 5;
  collectionSize = undefined;

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.http.get('./usuario')
      .pipe(map(responseData => {
        const usuariosArray = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            usuariosArray.push({...responseData[key]});
          }
        }
        return usuariosArray;
      }))
      .subscribe(usuarios => {
        this.usuarios = usuarios;
      });
  }
  excluir(userId) {
    this.http.delete(`./usuario/${userId}`)
      .subscribe(responseData => {
        console.log('Usuário deletado');
        console.log(responseData);
        this.listar();
      });
  }

}
