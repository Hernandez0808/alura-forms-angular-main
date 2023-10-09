import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
// import { ConsultaCepService } from "../services/consulta-cep.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {}

  cadastrar(form: any) {
    return form.valid
      ? this.router.navigate(["sucesso"])
      : alert("Formulário inválido");
  }

  consultaCEP(cep: any, form: any) {
    // this.consultaCepService.consultaCep(cep);
    // cep = cep.value.replace(/\D/g, "");
    // if (cep != "") {
    //   var validaCEP = /^[0-9]{8}$/;
    //   // this.consultaCepService.getDados()
    //   if (validaCEP.test(cep)) {
    //     this.http.get(`https://viacep.com.br/ws/${cep}/json/`)
    //     .subscribe(
    //       (dados) => this.populaDadosForms(dados, form));
    //   }
    // }
  }
  populaDadosForms(dados: any, form: NgForm) {
    form.form.patchValue({
      endereco: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }
}
