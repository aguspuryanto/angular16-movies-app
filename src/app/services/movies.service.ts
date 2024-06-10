import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, Movies } from '../models/movie.model';
import { Videos } from '../models/video.model';
import { Credits } from '../models/credit.model';

export const imagesBaseUrl = 'https://image.tmdb.org/t/p/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.apiKEY;
  private httpClient = inject(HttpClient);

  constructor() { }

  fetchMoviesByType(type: string, pageNumber = 1) {
    // return this.httpClient
      // .get<Movies>(`${this.apiUrl}/movie/${type}?page=${pageNumber}&api_key=${this.apiKey}`)
      return this.httpClient.get<Movies>(`/assets/${type}.json`)
  }

  fetchSimilarMovies(id: string) {
    return this.httpClient
      .get<Movies>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data)=> data.results));
  }

  fetchMovieById(id: string) {
    return this.httpClient.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    )
  }

  fetchMovieVideos(id: string) {
    return this.httpClient
      .get<Videos>(
        `${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }

  fetchMovieCast(id: string) {
    return this.httpClient
      .get<Credits>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast))
  }
}