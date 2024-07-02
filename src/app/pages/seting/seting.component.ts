import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DanhMucService } from 'src/app/danhmuc.service';
import { LoadingService } from 'src/shared/utils/loading-service';
import { ToastService } from 'src/shared/utils/toast-service';

@Component({
  selector: 'app-seting',
  templateUrl: './seting.component.html',
})
export class SetingComponent  implements OnInit {
  listData = [
    {
      name: "Nguyễn Hoài Nam",
      phone: "085555555",
      ctv: "Dương Tùng Anh"
    },
    {
      name: "Nguyễn Hoài Nam",
      phone: "085555555",
      ctv: "Dương Tùng Anh"
    },
    {
      name: "Nguyễn Hoài Nam",
      phone: "085555555",
      ctv: "Dương Tùng Anh"
    },
    {
      name: "Nguyễn Hoài Nam",
      phone: "085555555",
      ctv: "Dương Tùng Anh"
    },
    {
      name: "Nguyễn Hoài Nam",
      phone: "085555555",
      ctv: "Dương Tùng Anh"
    },
    {
      name: "Nguyễn Hoài Nam",
      phone: "085555555",
      ctv: "Dương Tùng Anh"
    }
  ]
  user: any;
  constructor(private dmService: DanhMucService,
    private router: Router,
    private toast: ToastService,
    private loading: LoadingService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('info') as any);
  }

  signout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
