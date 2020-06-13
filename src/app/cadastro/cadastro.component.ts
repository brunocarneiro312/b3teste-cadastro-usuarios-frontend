import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {


  isFormSubmited: boolean;
  isFormSuccess: boolean;
  isFormError: boolean;

  companyIdValues = [1, 2, 5, 7, 10];

  requestForm = {
    companyId: undefined,
    email: undefined,
    birthdate: undefined,
  };

  response = undefined;

  isBtnCadastroDisabled = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  limpar() {
    this.requestForm.companyId = undefined;
    this.requestForm.email = undefined;
    this.requestForm.birthdate = undefined;
  }

  submitForm() {
    this.http.post('./usuario/save', this.requestForm)
      .subscribe(responseData => {
        alert('usuário cadastrado com sucesso!');
        this.response = responseData;
        this.limpar();
      });
  }

}
