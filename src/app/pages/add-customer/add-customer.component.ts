import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DanhMucService } from 'src/app/danhmuc.service';
import { LoadingService } from 'src/shared/utils/loading-service';
import { ToastService } from 'src/shared/utils/toast-service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
})
export class AddCustomerComponent implements OnInit {
  id: any;
  user: any;
  name: any;
  phone: any;
  address: any;
  REQUEST_URL = '/api/v1/customer/'
  REQUEST_Image_URL = '/api/v1/upload/'
  selectedFiles: any[] = [];
  previewUrls: any[] = [];
  images: any[] = [];
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
            this.name = result.name;
            this.address = result.address;
            this.phone = result.phone;
            this.images = [...result.images];
            console.log(this.images)
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
      name: this.name,
      address: this.address,
      phone: this.phone
    }
    this.loading.show()
    this.dmService.postOption(payload, this.REQUEST_URL, 'create').subscribe((res: HttpResponse<any>) => {
      if (res.body.code === 200) {
        this.toast.success('Tạo cộng tác viên thành công')
        this.loading.hide();
        this.router.navigate(['edit-customer/' + res.body.result.id])
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
      name: this.name,
      isActive: 1,
      address: this.address,
      phone: this.phone,
    }
    console.log(payload)
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

  onFilesSelected(event: any): void {
    this.selectedFiles = <File[]>Array.from(event.target.files);
    this.previewUrls = [];

    this.selectedFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.images.push({url: e.target.result});
      };
      console.log(this.images)
      reader.readAsDataURL(file);
    });
  }

  onSubmit(): void {
    this.selectedFiles.forEach(file => {
      this.loading.show();
      this.dmService.uploadFile(this.REQUEST_Image_URL +'?customerId=' + this.id, file).subscribe((res: HttpResponse<any>) => {
        this.toast.success('Thành công')
        this.loading.hide();
      },
        () => {
          this.toast.success('Thành công');
          this.loading.hide()
        }
      );

    });


  }

}
