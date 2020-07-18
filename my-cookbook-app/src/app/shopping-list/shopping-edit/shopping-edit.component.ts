import {Component, ElementRef, OnInit, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('unitInput') unitInput: ElementRef;
  @Output() add = new EventEmitter<Ingredient>();

  readIngredientForm(): Ingredient {
    return {
      name: this.nameInput.nativeElement.value,
      amount: this.amountInput.nativeElement.value,
      unit: this.unitInput.nativeElement.value
    };
  }

  onAdd() {
    this.add.emit(this.readIngredientForm());
  }

}
