import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';
import { CadastroProdutoPage } from '../pages/cadastro-produto/cadastro-produto';
import { ProdutosPage } from '../pages/produtos/produtos';
import { SingleProdutoPage } from '../pages/single-produto/single-produto';
import { CadastroCategoriaPage } from '../pages/cadastro-categoria/cadastro-categoria';
import { CategoriaPage } from '../pages/categoria/categoria';
import { PerfilPage } from '../pages/perfil/perfil';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../services/UsuarioService';
import { ProdutoService } from '../services/ProdutoService';
import { CategoriaService } from '../services/CategoriaService';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastroUsuarioPage,
    CadastroProdutoPage,
    ProdutosPage,
    SingleProdutoPage,
    CadastroCategoriaPage,
    CategoriaPage,
    PerfilPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    CadastroUsuarioPage,
    CadastroProdutoPage,
    ProdutosPage,
    SingleProdutoPage,
    CadastroCategoriaPage,
    CategoriaPage,
    PerfilPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    // já que vamos utilizar esses serviços em várias páginas eu incluir aqui
    UsuarioService,
    ProdutoService,
    CategoriaService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
