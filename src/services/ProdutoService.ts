import { IProdutoService } from "../interfaces/IProdutoService";
import { Observable } from "rxjs/Observable";
import { Produto } from "../models/Produto";
import { Global } from "../shared/Global";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ProdutoService implements IProdutoService {

  private apiURL: string = Global.apiURL+"produtos";

  constructor (public http: HttpClient) {}

  cadastrar(produto: Produto) : Observable<Object> {
    if (!produto.nome) throw new Error('O campo nome é obrigatório.');
    if (!produto.descricao) throw new Error('O campo descrição é obrigatório.');
    if (!produto.quantidade) throw new Error('O campo quantidade é obrigatório.');
    if (!produto.preco) throw new Error('O campo preço é obrigatório.');
    if (!produto.marca) throw new Error('O campo marca é obrigatório.');
    if (!produto.categoria_id) throw new Error('O campo Categoria é obrigatório.');

    return this.http.post(this.apiURL, produto);
  }

  atualizar(produto: Produto) : Observable<Object> {
    throw new Error('não implementado');
  }

  listar() : Observable<Object> {
    return this.http.get(this.apiURL);
  }

  excluir(id: number) : Observable<Object> {
    throw new Error('não implementado');
  }

  visualizar(id: number) : Observable<Object> {
    throw new Error('não implementado');
  }

}
