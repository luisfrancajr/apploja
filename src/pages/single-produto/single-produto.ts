import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../models/Produto';

/**
 * Generated class for the SingleProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-single-produto',
  templateUrl: 'single-produto.html',
})
export class SingleProdutoPage {
  public produto: Produto = new Produto();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.produto = <Produto> this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleProdutoPage');
  }

}
