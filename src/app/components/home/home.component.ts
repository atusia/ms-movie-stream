import { Component } from '@angular/core';
import {MovieDetailComponent} from "../movie-detail/movie-detail.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MovieDetailComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
