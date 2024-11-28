import {Component, input, InputSignal, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatListItemIcon, MatListItemMeta, MatListItemTitle} from "@angular/material/list";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MenuItem} from '../custom-sidenav/custom-sidenav.component';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-menu-item',
  imports: [
    MatIcon,
    MatListItem,
    MatListItemIcon,
    MatListItemTitle,
    RouterLinkActive,
    RouterLink,
    MatListItemMeta
  ],
  templateUrl: './menu-item.component.html',
  styleUrl: './menu-item.component.scss',
  animations: [
    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0 , height: '0' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0' })),
      ])
    ])
  ]
})
export class MenuItemComponent {

  readonly item:InputSignal<MenuItem> = input.required<MenuItem>();
  collapse = input(false);
  nestedMenuOpen = signal(false);

  toggleNested() {
    if (!this.item().subItems) {
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }
}
