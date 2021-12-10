import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarDetail } from '../models/car/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  
  apiUrl = "https://localhost:7111/api/"

  constructor(private httpClient:HttpClient) { }

  getCarById(id:number):Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl + "cars/getcarbyid?id="+id
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
