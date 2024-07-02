import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setActionHeader } from 'src/shared/store/action';
import { ActionHeaderState } from 'src/shared/store/reducer';

@Component({
  selector: 'layout-component',
  templateUrl: './layout.component.html',
  styleUrls: ['layout.component.scss'],
})
export class LayoutComponent {
  listMenu: any[] = [
    {
      key: 'home',
      name: 'Dashboard',
      path: '/home',
      icon: '../../assets/icon/menu/home.png',
      roles: [],
    },
    {
      key: 'account',
      name: 'Quản lý tài khoản',
      path: '/account',
      icon: '../../assets/icon/menu/account.png',
      roles: [],
    },
    {
      key: 'diseases',
      name: 'Quản lý bệnh',
      path: '/diseases',
      icon: '../../assets/icon/menu/diseases.png',
      roles: [],
    },
  ];
  isMenuActive = '';
  menuName = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store,
  ) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const pageUrl = event.url.split('/')[1];
        this.isMenuActive = pageUrl;
        this.getMenuNameActive(pageUrl);
        this.store.dispatch(
          setActionHeader({
            buttonText: '',
            buttonClickHandler: () => {},
          })
        );
      }
    });
  }
  getMenuNameActive(name: any) {
    const result = this.listMenu.find(
      (item: any) => item.path.split('/')[1] === name
    );
    if (result) this.menuName = result.name;
  }
  checkMenuActive(params: any) {}

  link(value: any) {
    this.router.navigate([value])
  }
}
