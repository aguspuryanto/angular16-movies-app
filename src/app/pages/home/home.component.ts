import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { MoviesService, imagesBaseUrl } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private moviesService = inject(MoviesService);
  public imagesBaseUrl = imagesBaseUrl;
  public popularMovies$ = this.moviesService
    .fetchMoviesByType('popular')
    .pipe(map((data) => {
      console.log(data.results)
      return data.results
    }));

  public topRatedMovies$ = this.moviesService
    .fetchMoviesByType('top_rated')
    .pipe(map((data) => data.results));
    
  public nowPlayingMovies$ = this.moviesService
    .fetchMoviesByType('now_playing')
    .pipe(map((data) => data.results));
}
