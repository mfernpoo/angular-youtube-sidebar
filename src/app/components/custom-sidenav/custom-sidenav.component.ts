import {Component, computed, Input, signal} from '@angular/core';
import {MatNavList} from '@angular/material/list';
import {MenuItemComponent} from '../menu-item/menu-item.component';

export type MenuItem = {
  icon: string;
  label: string;
  route?: string;
  subItems?: MenuItem[];
}

@Component({
  selector: 'app-custom-sidenav',
  imports: [
    MatNavList,
    MenuItemComponent,
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrls: ['./custom-sidenav.component.scss']
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
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: 'videos',
        },
        {
          icon: 'playlist_play',
          label: 'Playlists',
          route: 'playlists',
        },
        {
          icon: 'post_add',
          label: 'Posts',
          route: 'posts',
        },
      ]
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

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100')
}
