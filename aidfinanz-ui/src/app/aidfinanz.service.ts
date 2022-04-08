import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AidfinanzService {

  constructor(private apiService:ApiService) { }

  public calculateRisk(payload:any): Observable<any>{
    return this.apiService.post('calculate', payload);
  }
}
