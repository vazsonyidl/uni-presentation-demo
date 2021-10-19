import {NgModule} from '@angular/core';
import {ItemFormComponent} from './item-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {ShoppingListService} from '../../services/shopping-list.service';

@NgModule({
  declarations: [ItemFormComponent],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [ItemFormComponent],
  providers: [ShoppingListService]
})
export class ItemFormModule {}
