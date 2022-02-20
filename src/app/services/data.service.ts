import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  likes: any[] = [];

  constructor() { }

  addLikes(image: string){
    this.likes.push(image);
  }

  getLikes(){
    return this.likes;
  }
}
