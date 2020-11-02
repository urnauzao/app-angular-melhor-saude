import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from './../../models/Medico';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  url: string = 'http://127.0.0.1:8080/medicos';
  constructor(private http: HttpClient) { }

  getAll(){
    return  this.http.get<any>(this.url)
    .pipe(map(data =>
      data.map((medico) => new Medico(
        medico.clinica_id,
        medico.nome,
        medico.idade,
        medico.especializacao,
        medico.preco_consulta,
        medico.telefone,
        medico.email,
        medico.whatsapp,
        medico.foto,

        ))
      ));
  }
}
