import {Component, OnInit} from '@angular/core';
import {ShoppingListService} from '../services/shopping-list.service';
import {BehaviorSubject} from 'rxjs';
import {ShoppingListItem} from '../interfaces/shopping-list.interface';
import {ApiService} from '../services/api.service';
import {take, tap} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public shoppingListItems: BehaviorSubject<Array<ShoppingListItem>> = this.shoppingListService.shoppingListItems;

  constructor(private readonly shoppingListService: ShoppingListService, private readonly apiService: ApiService) {
  }

  public ngOnInit(): void {
    // this.apiService.get('/items').pipe(
    //   take(1),
    //   tap((items: Array<ShoppingListItem>) => this.shoppingListService.shoppingListItems.next(items))
    // ).subscribe();
  }
}
