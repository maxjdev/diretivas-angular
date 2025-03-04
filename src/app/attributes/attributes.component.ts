import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attributes',
  imports: [CommonModule],
  templateUrl: './attributes.component.html',
  styleUrl: './attributes.component.css'
})
export class AttributesComponent {
  style: string = 'enable';
  backgroundColor: string = 'red';

  changeColor() {
    if (this.style === 'enable') {
      this.style = 'disable';
    } else {
      this.style = 'enable';
    }
  }
}
