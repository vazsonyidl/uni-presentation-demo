import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ShoppingListService} from '../../services/shopping-list.service';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  public formGroup = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl('')
  });

  constructor(private readonly shoppingListService: ShoppingListService, private readonly apiService: ApiService) {
  }

  public onItemAdd(): void {
    this.shoppingListService.addShoppingListItem(this.formGroup.value);
    this.formGroup.reset();
  }
}
