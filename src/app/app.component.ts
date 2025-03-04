import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { ListComponent } from "./list/list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, CommonModule, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isAlived = false;
  menuType: string = "admin";
}
