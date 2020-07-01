import { IUsuarioService } from "../interfaces/IUsuarioService";
import { Observable } from "rxjs/Observable";
import { Usuario } from "../models/Usuario";
import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from "@angular/core";
import { Global } from '../shared/Global';
import { LoginPage } from "../pages/login/login";

export interface Login {
  email: string;
  senha: string;
}

@Injectable()
export class UsuarioService implements IUsuarioService {

  private apiURL: string = Global.apiURL+"usuarios";

  constructor (public http: HttpClient) {}

  cadastrar(usuario: Usuario) : Observable<Object> {
    if (!usuario.nome) throw new Error('O campo nome é obrigatório.');
    if (!usuario.email) throw new Error('O campo email é obrigatório.');
    if (!usuario.senha) throw new Error('O campo senha é obrigatório.');
    if (!usuario.confirmar_senha) throw new Error('O campo confirmar senha é obrigatório.');
    if (usuario.senha !== usuario.confirmar_senha) throw new Error('As senhas não coincidem.');
    if (!usuario.genero) throw new Error('O campo gênero é obrigatório.');
    if (!usuario.cpf) throw new Error('O campo CPF é obrigatório.');
    if (!usuario.data_nascimento) throw new Error('O campo data de nascimento é obrigatório.');
    return this.http.post(this.apiURL, usuario);
  }
  atualizar(usuario: Usuario) : Observable<Object> {
    if (!usuario.nome) throw new Error('O campo nome é obrigatório.');
    if (!usuario.email) throw new Error('O campo email é obrigatório.');
    // verifico se o usuário quer alterar a senha
    if (usuario.senha) {
      if (!usuario.confirmar_senha) throw new Error('O campo confirmar senha é obrigatório.');
      if (usuario.senha !== usuario.confirmar_senha) throw new Error('As senhas não coincidem.');
    }
    if (!usuario.genero) throw new Error('O campo gênero é obrigatório.');
    if (!usuario.cpf) throw new Error('O campo CPF é obrigatório.');
    if (!usuario.data_nascimento) throw new Error('O campo data de nascimento é obrigatório.');
    return this.http.put(this.apiURL+"/"+usuario.id, usuario);
  }
  recuperarSenha(id: number) : Observable<Object> {
    throw new Error('não implementado');
  }
  login(login: Login) : Observable<Object> {
    if (!login.email) throw new Error('O campo email é obrigatório.');
    if (!login.senha) throw new Error('O campo senha é obrigatório.');
    return this.http.post(this.apiURL+"/atuenticacao", login);
  }
  logar(usuario: Usuario) : void {
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  logout() : void {
    localStorage.clear();
  }
  retornarUsuarioLogado() : Usuario {
    let usuario: Usuario = <Usuario> JSON.parse(localStorage.getItem('usuario'));
    return usuario;
  }
  apagarConta(id: number) : Observable<Object> {
    throw new Error('não implementado');
  }
}
