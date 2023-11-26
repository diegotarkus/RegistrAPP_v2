import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { ApiResponse } from '../models/apiResponse';
import { Region } from '../models/region';
import { environment } from 'src/environments/environment';
import { Comuna } from '../models/comuna';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(public http:HttpClient) { }

  async getRegion(){
    return await lastValueFrom(this.http.get<ApiResponse<Region>>(`${environment.apiUrl}region`));
  }

  async getComuna(regionId: number){
    return await lastValueFrom(this.http.get<ApiResponse<Comuna>>(`${environment.apiUrl}comuna/` + regionId));
  }
}
