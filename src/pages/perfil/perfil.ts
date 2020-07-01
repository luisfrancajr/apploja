import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/UsuarioService';
import { Usuario } from '../../models/Usuario';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public usuario: Usuario = new Usuario();
  constructor(public navCtrl: NavController, public navParams: NavParams, public usuarioService: UsuarioService) {
    this.usuario = <Usuario> this.usuarioService.retornarUsuarioLogado();
    this.usuario.senha = null;
    console.log(this.usuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  atualizarUsuario() {
    this.usuarioService.atualizar(this.usuario).subscribe(res => {
      console.log(res);
      let usuarioAtualizado: Usuario = <Usuario> res;
      this.usuarioService.logar(usuarioAtualizado);
    });
  }

}
