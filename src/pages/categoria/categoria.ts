import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/CategoriaService';
import { Categoria } from '../../models/Categoria';
import { ProdutosPage } from '../produtos/produtos';

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
})
export class CategoriaPage {
  public categorias: Categoria[] = new Array<Categoria>();
  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaService: CategoriaService) {
    this.listarCategorias();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriaPage');
  }

  listarCategorias() {
    this.categoriaService.listar().subscribe(res => {
      console.log(res);
      this.categorias = <Categoria[]> res;
    })
  }

  abrirCategoria(categoria: Categoria) {
    this.categoriaService.visualizar(categoria.id).subscribe(res => {
      this.navCtrl.push(ProdutosPage, {categoriaProdutos: res});
    });
  }

}
