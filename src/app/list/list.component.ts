import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products:string[] = [];
  constructor() {
    this.products = [
      "item 1",
      "item 2",
      "item 3"
    ]
  }

  addProduct() {
    this.products.push("item " + (this.products.length + 1));
  }
  popProduct() {
    this.products.pop();
  }
  selectIndexAndProduct(index: number) {
    alert(`Product selected: [i:${index}] ` + this.products[index]);
  }
  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
