import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SucessoCadastroComponent } from './sucesso-cadastro/sucesso-cadastro.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { MensagemComponent } from './components/mensagem/mensagem.component';
import { HttpClientModule } from '@angular/common/http';
import { MaiorDeIdadeDirective } from './shared/maior-de-idade.directive';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    SucessoCadastroComponent,
    FooterComponent,
    HeaderComponent,
    MensagemComponent,
    MaiorDeIdadeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
