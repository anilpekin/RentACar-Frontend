import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarDetailService } from 'src/app/services/carDetail.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './carDetail.component.html',
  styleUrls: ['./carDetail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetail[] = [];
  dataLoaded = false;
  constructor(private carDetailService: CarDetailService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarById(params["id"]);
      }
    })
  }

  getCarById(id:number){
    this.carDetailService.getCarById(id).subscribe(response =>{
      this.carDetails = response.data;
    })
  }
}
