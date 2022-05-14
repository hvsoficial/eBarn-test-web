import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tractor } from '../models/tractor.model';

const baseUrl = 'http://localhost:8080/tractors';

@Injectable({
  providedIn: 'root'
})
export class TractorService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tractor[]> {
    return this.http.get<Tractor[]>(baseUrl);
  }

  get(id: any): Observable<Tractor> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tractor[]> {
    return this.http.get<Tractor[]>(`${baseUrl}?title=${title}`);
  }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    console.log(file)

    const req = new HttpRequest('POST', `${baseUrl}/images`, formData, {
      reportProgress: true,
      responseType: 'json'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${baseUrl}/images`);
  }
}
