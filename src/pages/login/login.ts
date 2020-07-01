import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UsuarioService, Login } from '../../services/UsuarioService';
import { CadastroUsuarioPage } from '../cadastro-usuario/cadastro-usuario';
import { Usuario } from '../../models/Usuario';
import { ProdutosPage } from '../produtos/produtos';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login: Login = {
    email: null,
    senha: null
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService: UsuarioService, public menu: MenuController) {
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(false);
  }

  ionViewWillUnload() {
    //confira a dcumentação
    // https://ionicframework.com/docs/v3/api/navigation/NavController/,

    this.menu.swipeEnable(true);
  }

  abrirCadastro() {
    this.navCtrl.push(CadastroUsuarioPage);
  }

  fazerLogin() {
    this.usuarioService.login(this.login).subscribe((res) => {
      let usuario: Usuario = <Usuario> res;
      this.usuarioService.logar(usuario);
      this.navCtrl.setRoot(ProdutosPage);
    });
  }

}
