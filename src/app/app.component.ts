import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rickymorty';

  personajes:any = null;

  constructor(private http: HttpClient){ }

  ngOnInit(){
    this.http.get("https://rickandmortyapi.com/api/character").subscribe(
    result => {

      this.personajes=result;
      console.log(this.personajes.results[0]);
    },
    error =>{
      console.log('problems');
    }
    );
  }



}
