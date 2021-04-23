import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizApiService {

  url='https://opentdb.com/api.php?amount=20&category=18&difficulty=medium&type=multiple';

  constructor(private http:HttpClient) {
   }
   
   getQuiz():Observable<Object>{
    return this.http.get(this.url);
   }
}
