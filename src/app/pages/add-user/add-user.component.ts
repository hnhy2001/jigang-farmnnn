import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DanhMucService } from 'src/app/danhmuc.service';
import { LoadingService } from 'src/shared/utils/loading-service';
import { ToastService } from 'src/shared/utils/toast-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
})
export class AddUserComponent implements OnInit {
  userName: any;
  password: any;
  email: any;
  address: any;
  fullName: any;
  phone: any;
  id: any;
  user: any;
  REQUEST_URL = '/api/v1/user/'
  constructor(
    private dmService: DanhMucService,
    private router: Router,
    private toast: ToastService,
    private loading: LoadingService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('info') as any);
    this.route.params.subscribe(params => {
      this.id = +params['id']; // Dấu cộng để chuyển đổi sang kiểu number
    });
    if (this.id) {
      this.getDetail();
    }
  }

  getDetail() {
    this.loading.show();
    this.dmService.getOption({ id: this.id }, this.REQUEST_URL, "detail").subscribe(
      (res: HttpResponse<any>) => {
        this.loading.hide();
        if (res.body) {
          if (res.body.code === 200) {
            let result = res.body.result;
            this.userName = result.userName,
              this.password = result.password,
              this.email = result.email,
              this.address = result.address,
              this.phone = result.phone,
              this.fullName = result.fullName
            this.loading.hide();

          } else {
            this.toast.error(res.body.MESSAGE)
            this.loading.hide();

          }
        } else {
          this.toast.error("Đã có lỗi xảy ra");
          this.loading.hide();

        }
      },
      () => {
        this.loading.hide();
        this.toast.error("Đã có lỗi xảy ra");
        console.error();
      }
    );
  }

  save() {
    console.log(this.id)
    if (this.id) {
      this.edit()
    } else {
      this.create();
    }
  }

  create() {
    const payload: any = {
      userName: this.userName,
      // password: this.password,
      email: this.email,
      address: this.address,
      fullName: this.fullName,
      phone: this.phone,
    }
    this.loading.show()
    this.dmService.postOption(payload, this.REQUEST_URL, 'create').subscribe((res: HttpResponse<any>) => {
      if (res.body.code === 200) {
        this.toast.success('Tạo cộng tác viên thành công')
        this.loading.hide();
      } else {
        this.loading.hide();
        this.toast.error('Thất bại')
      }
    },
      () => {
        this.toast.error('Thất bại');
        this.loading.hide()
      }
    )
  }

  edit() {
    const payload: any = {
      id: this.id,
      userName: this.userName,
      // password: this.password,
      isActive: 1,
      email: this.email,
      address: this.address,
      fullName: this.fullName,
      phone: this.phone,
    }
    this.loading.show()
    this.dmService.putOption(payload, this.REQUEST_URL, 'update').subscribe((res: HttpResponse<any>) => {
      if (res.body.code === 200) {
        this.toast.success('Cập nhật cộng tác viên thành công')
        this.loading.hide();
      } else {
        this.loading.hide();
        this.toast.error('Thất bại')
      }
    },
      () => {
        this.toast.error('Thất bại');
        this.loading.hide()
      }
    )
  }

}
