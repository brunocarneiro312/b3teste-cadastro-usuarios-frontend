import {Component, OnInit} from '@angular/core';

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

  isBtnCadastroDisabled = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  limpar() {
    this.requestForm.companyId = undefined;
    this.requestForm.email = undefined;
    this.requestForm.birthdate = undefined;
  }

  submitForm() {
    this.isFormSubmited = true;
    this.isFormSuccess = true;
    this.limpar()
  }

}
