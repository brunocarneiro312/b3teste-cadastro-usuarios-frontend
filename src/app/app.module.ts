import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListagemComponent } from './listagem/listagem.component';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmailSearchComponent } from './email-search/email-search.component';
import { CompanyidSearchComponent } from './companyid-search/companyid-search.component';
import { SendFileComponent } from './send-file/send-file.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    HomeComponent,
    EmailSearchComponent,
    CompanyidSearchComponent,
    SendFileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
