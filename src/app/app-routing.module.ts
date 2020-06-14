import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListagemComponent} from './listagem/listagem.component';
import {CadastroComponent} from './cadastro/cadastro.component';
import {EmailSearchComponent} from './email-search/email-search.component';
import {CompanyidSearchComponent} from './companyid-search/companyid-search.component';


const routes: Routes = [
  {path: '', component: ListagemComponent},
  {path: 'listagem', component: ListagemComponent},
  {path: 'email', component: EmailSearchComponent},
  {path: 'companyid', component: CompanyidSearchComponent},
  {path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
