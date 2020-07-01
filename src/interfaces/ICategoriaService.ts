import { Categoria } from "../models/Categoria";
import { Observable } from "rxjs/Observable";

export interface ICategoriaService {
  cadastrar(usuario: Categoria) : Observable<Object>;
  editar(usuario: Categoria) : Observable<Object>;
  listar() : Observable<Object>;
  visualizar(id: number) : Observable<Object>;
  excluir(id: number) : Observable<Object>;
}
