import {Component, computed, Input, input, signal} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {MatListItem, MatListItemIcon, MatListItemTitle, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
}

@Component({
    selector: 'app-custom-sidenav',
    imports: [
        NgOptimizedImage,
        MatNavList,
        MatListItem,
        MatIcon,
        MatListItemTitle,
        RouterLink,
        RouterLinkActive,
        MatListItemIcon
    ],
    template: `
    <div class="sidenav-header">
      <img [width]="profilePicSize()" [height]="profilePicSize()"
           src="https://yt3.ggpht.com/ytc/AIdro_nHjl4n9VuTLFIBZ3HDjIUdnSqMqBAZOVnA1ZCqvXx1cfQ=s176-c-k-c0x00ffffff-no-rj"/>
      <div class="header-text" [class.hide-header-text]="sideNavCollapsed()">
        <h2>Your channel</h2>
        <p>Marcelo Andrés Fernández Poo</p>
      </div>
    </div>
    <mat-nav-list>
      @for (item of menuItems(); track item) {
        <a mat-list-item
           class="menu-item"
           [routerLink]="item.route"
           routerLinkActive="selected-menu-item"
           #rla="routerLinkActive"
           [activated]="rla.isActive"
        >
          <mat-icon [fontSet]="rla.isActive ? 'material-icons' : 'material-icons-outlined'" matListItemIcon>{{ item.icon }}</mat-icon>
          @if(!sideNavCollapsed()){
            <span matListItemTitle>{{item.label}}</span>
          }
        </a>
      }

    </mat-nav-list>
  `,
    styles: [`

    :host * {
      transition: all 500ms ease-in-out;
    }

    .sidenav-header {
      padding-top: 24px;
      text-align: center;

      > img {
        border-radius: 100%;
        object-fit: cover;
        margin-bottom: 10px;
      }

      .header-text {
        height: 3rem;

        > h2 {
          margin: 0;
          font-size: 1rem;
          line-height: 1.5rem;
        }

        > p {
          margin: 0;
          font-size: 0.8rem;
        }
      }
    }

    .list-item-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .hide-header-text {
      opacity: 0;
      height: 0 !important;
    }

    .menu-item {
      border-left: 5px solid;
      border-left-color: rgba(0,0,0,0);
    }

    .selected-menu-item {
      border-left-color: blue;
      background: rgba(0,0,0,0.05);
    }
  `]
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal<boolean>(false)
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value)
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard',
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'content',
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics',
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments',
    }
  ])

  profilePicSize = computed(()=> this.sideNavCollapsed() ? '32' : '100')
}
