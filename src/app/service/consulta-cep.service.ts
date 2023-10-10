import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http: HttpClient) { }
  url_API = 'https://viacep.com.br/ws/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  }
  
  getConsultaCep(cep: string) {

    return this.http.get(`${this.url_API}${cep}/json`, this.httpOptions)
        .pipe(
          retry(2),
            catchError(this.handleError)
          )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
