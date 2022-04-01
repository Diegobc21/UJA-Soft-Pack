import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, Software } from 'src/app/model/software.interface';

@Injectable({
  providedIn: 'root'
})
export class SoftwareService {

  constructor(private http: HttpClient) { }

  url: string = "https://usp-server.herokuapp.com";
  // url: string = "http://localhost:3000";
  
  getSoftware(): Observable<Software[]>{
    return this.http.get<Software[]>(this.url + "/software");
  }

  getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.url + "/categories");
  }

  find(id: string):Observable<Software>{
      return this.http.get<Software>(this.url + "/software/" + id);
  }

  findByCategory(category: string):Observable<Software[]>{
    return this.http.get<Software[]>(this.url + "/software?categories_like=" + category);
  }
}
