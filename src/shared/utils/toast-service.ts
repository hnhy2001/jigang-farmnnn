import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastController: ToastController) {}

  async success(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'success',
    });

    await toast.present();
  }
  async error(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'danger',
    });

    await toast.present();
  }
  async warning(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
      color: 'warning',
    });

    await toast.present();
  }
}
