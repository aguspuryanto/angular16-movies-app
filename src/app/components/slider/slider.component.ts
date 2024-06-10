import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  @Input() dataObs!: Observable<Movie[]>;
  @Input() imagesBaseUrl = '';
  public slideIndex = 0;

  ngOnInit(){
    setInterval(()=>{
      
      if(this.slideIndex < 19){
        this.slideIndex++;
      }
      else {
        this.slideIndex = 0;
      }
    } , 5000);
  }

  slideLeft(){

    if(this.slideIndex <= 0 ){
      return
    }
    this.slideIndex--;
    
  }

  slideRight(){
    if(this.slideIndex >= 19 ){
      return
    }
    this.slideIndex++;
  }
}
