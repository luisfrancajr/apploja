import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdutoService } from '../../services/ProdutoService';
import { Produto } from '../../models/Produto';
import { Categoria } from '../../models/Categoria';
import { CategoriaService } from '../../services/CategoriaService';
import { ProdutosPage } from '../produtos/produtos';

/**
 * Generated class for the CadastroProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-produto',
  templateUrl: 'cadastro-produto.html',
})
export class CadastroProdutoPage {

  public produto: Produto = new Produto();
  public categorias: Categoria[] = new Array<Categoria>();

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoService: ProdutoService,
    public categoriaService: CategoriaService) {
      this.buscarCategorias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroProdutoPage');
  }

  buscarCategorias() {
    this.categoriaService.listar().subscribe(res => {
      this.categorias = <Categoria[]> res;
    })
  }

  cadastrarProduto() {
    console.log(this.produto);
    this.produtoService.cadastrar(this.produto).subscribe(res => {
      this.navCtrl.setRoot(ProdutosPage);
    })
  }

}
