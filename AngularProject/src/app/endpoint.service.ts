import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  userURL = "http://127.0.0.1:8080/"

  constructor(private http: HttpClient) {
  }
  public userSearch() {
    return this.http.get("/assets/data/user.json");
  }
  public search(url) {
    return this.http.get(this.userURL + url);
  }

  public save(subUrl,form) {
    return this.http.post(this.userURL +subUrl+ "/save", form);
  }

  public preload(subUrl) {
    return this.http.get(this.userURL +subUrl+ "/preload/");
  }

  public delete(subUrl,id) {
    return this.http.get(this.userURL +subUrl+ "/delete/"+id );
  }

}
