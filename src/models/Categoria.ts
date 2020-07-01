import { Produto } from "./Produto";

export class Categoria {
  public id: number = null;
  public descricao: string = null;
  public produtos: Array<Produto> = new Array<Produto>();
}
