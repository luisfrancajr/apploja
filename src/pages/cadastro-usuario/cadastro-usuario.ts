import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/UsuarioService';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html'
})
export class CadastroUsuarioPage {

  public novoUsuario: Usuario = new Usuario();

  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService: UsuarioService, public menu: MenuController) {
    // tipo de usuário 2 é o consumidor
    this.novoUsuario.tipo_usuario = 2;
  }

  salvarUsuario() {
    console.log(this.novoUsuario);
    this.usuarioService.cadastrar(this.novoUsuario).subscribe(res => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
