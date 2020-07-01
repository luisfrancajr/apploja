import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from '../../services/ProdutoService';
import { Produto } from '../../models/Produto';
import { SingleProdutoPage } from '../single-produto/single-produto';
import { Categoria } from '../../models/Categoria';

/**
 * Generated class for the ProdutosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {
  //define o título da página inicialmente
  public titulo: string = 'Produtos';
  public produtos: Produto[] = new Array<Produto>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoService: ProdutoService) {

    /**
     * Essa página é utilizada em dois lugares
     * Na listagem de produtos do menu produtos
     * E na listagem de produtos de uma categoria específica
     */

     //em alguns momentos vai receber argumentos da categoria selecionada
    let registrosCategoria: Categoria = this.navParams.get('categoriaProdutos');
    if (registrosCategoria) {
      //retorna os produtos de acordo com a categoria escolhida
      this.produtos = registrosCategoria.produtos;
      //troca o título para o nome da categoria selecionada no menu categoria
      this.titulo = registrosCategoria.descricao;
    } else {
      //retorna todos os produtos, independentemente da categoria
      this.retornarProdutos();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutosPage');
  }

  retornarProdutos() {
    this.produtoService.listar().subscribe(res => {
      console.log(res);
      this.produtos = <Produto[]> res;
    });
  }

  abrirProduto(produto: Produto) {
    this.navCtrl.push(SingleProdutoPage, produto);
  }

}
