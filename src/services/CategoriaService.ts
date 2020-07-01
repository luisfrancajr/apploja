import { ICategoriaService } from "../interfaces/ICategoriaService";
import { Global } from "../shared/Global";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "../models/Categoria";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CategoriaService implements ICategoriaService {

  private apiURL: string = Global.apiURL+"categorias";

  constructor (public http: HttpClient) {}

  cadastrar(categoria: Categoria) : Observable<Object> {
    if (!categoria.descricao) throw new Error('O campo descricao é obrigatório.');
    return this.http.post(this.apiURL, categoria);
  }
  editar(categoria: Categoria) : Observable<Object> {
    throw new Error('não implementado');
  }
  listar() : Observable<Object> {
    return this.http.get(this.apiURL);
  }
  visualizar(id: number) : Observable<Object> {
    return this.http.get(this.apiURL+"/"+id);
  }
  excluir(id: number) : Observable<Object> {
    throw new Error('não implementado');
  }
}
