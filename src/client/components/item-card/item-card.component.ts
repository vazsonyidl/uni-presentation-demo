import {Component, Input} from '@angular/core';
import {ShoppingListItem} from '../../interfaces/shopping-list.interface';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent {
  @Input() config!: ShoppingListItem;
}
