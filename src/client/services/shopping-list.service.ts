import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ShoppingListItem} from '../interfaces/shopping-list.interface';

@Injectable()
export class ShoppingListService {
  public shoppingListItems = new BehaviorSubject<Array<ShoppingListItem>>([]);

  public addShoppingListItem(item: ShoppingListItem) {
    this.shoppingListItems.next([...this.shoppingListItems.value, item]);
  }
}
