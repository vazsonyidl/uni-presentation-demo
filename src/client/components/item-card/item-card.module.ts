import {NgModule} from '@angular/core';
import {ItemCardComponent} from './item-card.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [ItemCardComponent],
  exports: [ItemCardComponent],
  imports: [MatCardModule, CommonModule]
})
export class ItemCardModule{}
