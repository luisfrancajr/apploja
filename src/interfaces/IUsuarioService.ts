import { Usuario } from "../models/Usuario";
import { Observable } from "rxjs/Observable";
import { Login } from "../services/UsuarioService";

export interface IUsuarioService {
  cadastrar(usuario: Usuario) : Observable<Object>;
  atualizar(usuario: Usuario) : Observable<Object>;
  recuperarSenha(id: number) : Observable<Object>;
  login(login: Login) : Observable<Object>;
  logar(usuario: Usuario) : void;
  logout() : void;
  retornarUsuarioLogado() : Usuario;
  apagarConta(id: number) : Observable<Object>;
}
