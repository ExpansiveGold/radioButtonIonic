import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public controladorToast: ToastController) {}

  async exibirToast(mensagem) {
    const toast = await this.controladorToast.create({
      message: mensagem,
      duration: 2000,
      color:'success'
    });
    toast.present();
  }

  verificaSelecionado(valor: any){
    let mensagem: string;
    if(valor.detail.value === 'C'){
      mensagem='Legal! Você usa C#!'
    }
    else if(valor.detail.value === 'Java'){
      mensagem='Java, a pioneira me multiplataforma!!!'
    }
    else{
      mensagem='Python... Não sei de nada'
    }
    this.exibirToast(mensagem);
  }

}
