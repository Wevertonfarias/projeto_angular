import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'noticias', component: NoticiasComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'listar', component: ListarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
