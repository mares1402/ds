import { Component } from '@angular/core';
import { RouterOutlet } from "../../node_modules/@angular/router/router_module.d";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [RouterOutlet]
})
export class AppComponent {}