import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntil } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  private  moviesService  =  inject(MoviesService);
  private  pageNumber  =  1;
  private destroyRef  =  inject(DestroyRef)
  public  moviesObs$  =  this.moviesService.fetchMoviesByType('popular', this.pageNumber);
  public  moviesResults:  Movie[] = [];

  ngOnInit(){
    this.moviesObs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.moviesResults = data.results;
    });
  }

  onScroll(): void {
      this.pageNumber++;
      console.log("scrolled!!");

      this.moviesObs$ = this.moviesService.fetchMoviesByType('popular', this.pageNumber);
      this.moviesObs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
        this.moviesResults = this.moviesResults.concat(data.results);
      });
    
  }
}
