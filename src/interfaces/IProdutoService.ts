import { Produto } from "../models/Produto";
import { Observable } from "rxjs/Observable";

export interface IProdutoService {
  cadastrar(usuario: Produto) : Observable<Object>;
  atualizar(usuario: Produto) : Observable<Object>;
  listar() : Observable<Object>;
  excluir(id: number) : Observable<Object>;
  visualizar(id: number) : Observable<Object>;
}
