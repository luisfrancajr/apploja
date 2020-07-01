import { Categoria } from "./Categoria";

export class Produto {
  public id: number = null;
  public nome: string = null;
  public descricao: string = null;
  public quantidade: number = null;
  public preco: number = null;
  public marca: string = null;
  public categoria_id: number = null;
  public categoria: Categoria = null;
}
