import {Component, OnInit} from '@angular/core';
import {IMovie} from "../../interfaces/movie";

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  movie!: IMovie;

  ngOnInit() {
    this.movie = {
      title: 'Game of Thrones',
      plot: 'very interesting'
    }
  }
}
