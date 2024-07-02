import { Component, OnInit } from '@angular/core';
import { DanhMucService } from 'src/app/danhmuc.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/shared/utils/toast-service';
import { HttpResponse } from '@angular/common/http';
import { LoadingService } from 'src/shared/utils/loading-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  username: any;
  password: any;
  REQUEST_URL = '/api/v1/user/login';
  constructor(private dmService: DanhMucService,
    private router: Router,
    private toast: ToastService,
    private loading: LoadingService) { }

  ngOnInit() { }

  login() {
    // this.router.navigate(['/dashboard']);
    this.loading.show();
    const payload = {
      username: this.username,
      password: this.password,
    };
    this.dmService.postOption(payload, this.REQUEST_URL, '').subscribe(
      (res: HttpResponse<any>) => {
        if (res.body.code === 200) {
          localStorage.setItem('token', res.body.result.token);
          const info = res.body.result;
          localStorage.setItem('info', JSON.stringify(info));
          this.router.navigate(['/user']);
          this.toast.success('Đăng nhập thành công');
          this.loading.hide();

        } else {
          this.toast.error(res.body.message);
          this.loading.hide();
        }
      },
      (err: any) => {
        console.error();
        this.loading.hide();
      }
    );
  }

}
