import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(private loadingCtrl: LoadingController) {}

  async show() {
    this.loading = await this.loadingCtrl.create({
      message: 'Đang tải...',
      duration: 3000
    });

    await this.loading.present();
  }

  async hide() {
    if (this.loading) {
      await this.loading?.dismiss();
    }
  }
}
