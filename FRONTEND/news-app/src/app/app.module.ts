import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HeaderComponent } from './componentes/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './paginas/home/home.component';
import { CadastrarComponent } from './paginas/cadastrar/cadastrar.component';
import { ListarComponent } from './paginas/listar/listar.component';
import { NoticiasComponent } from './paginas/noticias/noticias.component';
import { FonteDirective } from './diretivas/fonte.directive';
import { LowercasePipe } from './pipes/lowercase.pipe';
import { HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarComponent,
    ListarComponent,
    NoticiasComponent,
    FonteDirective,
    HeaderComponent,
    LowercasePipe,
    HttpClient
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
