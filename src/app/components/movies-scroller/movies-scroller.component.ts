import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movies-scroller',
  standalone: false,
  templateUrl: './movies-scroller.component.html',
  styleUrls: ['./movies-scroller.component.css']
})
export class MoviesScrollerComponent {
  @Input() dataObs!: Observable<Movie[]>;
  @ViewChild('content', { read: ElementRef })
  public content!: ElementRef<any>;

  public scrollRight(): void {
    this.content.nativeElement.scrollTo({ left: (this.content.nativeElement.scrollLeft + 150), behavior: 'smooth' });
  }

  public scrollLeft(): void {
    this.content.nativeElement.scrollTo({ left: (this.content.nativeElement.scrollLeft - 150), behavior: 'smooth' });
  }
}
