import { Component, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { imagesBaseUrl } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {
  public imagesBaseUrl = imagesBaseUrl;
  @Input() movie!: Movie;
}
