import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriaService } from '../../services/CategoriaService';
import { Categoria } from '../../models/Categoria';
import { CategoriaPage } from '../categoria/categoria';

/**
 * Generated class for the CadastroCategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-categoria',
  templateUrl: 'cadastro-categoria.html',
})
export class CadastroCategoriaPage {
  public categoria: Categoria = new Categoria();
  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroCategoriaPage');
  }

  cadastrarCategoria() {
    console.log(this.categoria);
    this.categoriaService.cadastrar(this.categoria).subscribe(res => {
      //após o cadastro ter sido feito redireciona a página para a listagem de categorias
      this.navCtrl.setRoot(CategoriaPage);
    })
  }

}
