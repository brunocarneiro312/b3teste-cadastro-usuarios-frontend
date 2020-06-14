import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-email-search',
  templateUrl: './email-search.component.html',
  styleUrls: ['./email-search.component.scss']
})
export class EmailSearchComponent implements OnInit {

  constructor(private http: HttpClient) { }

  usuarios: any[] = [];
  email: undefined;
  page = 1;
  pageSize = 5;
  collectionSize = undefined;
  ngOnInit(): void {
  }

  buscarPorEmail() {
    this.http.get('./usuario/email?email=' + this.email)
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
}
