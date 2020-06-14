import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-companyid-search',
  templateUrl: './companyid-search.component.html',
  styleUrls: ['./companyid-search.component.scss']
})
export class CompanyidSearchComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  usuarios: any[] = [];
  companyId: undefined;
  companyIdValues = [1, 2, 5, 7, 10];
  page = 1;
  pageSize = 5;
  collectionSize = undefined;

  ngOnInit(): void {
  }

  buscarPorCompanyId() {
    this.http.get('./usuario/company/' + this.companyId)
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
