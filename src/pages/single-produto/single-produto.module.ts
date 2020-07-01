import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleProdutoPage } from './single-produto';

@NgModule({
  declarations: [
    SingleProdutoPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleProdutoPage),
  ],
})
export class SingleProdutoPageModule {}
