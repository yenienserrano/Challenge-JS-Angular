import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Operation } from '../model/operation'
import { urlGlobal } from './url';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  url:string

  constructor(
    private _http: HttpClient,  ) { 
    this.url = urlGlobal.url
  }
  

  getOperations(){
    return this._http.get(this.url+"operations")
  }
  getEgreso(){
    return this._http.get(this.url+"operations/egreso")
  }
  getIngreso(){
    return this._http.get(this.url+"operations/ingreso")
  }
  

  saveOperations(datos):Observable<Operation>{
    return this._http.post(this.url+"operations", datos)
  }

  editOperation(id, datos){
    
    return this._http.put(this.url+'operations/'+id, datos)
  }

  deleteOperation(id){
    return this._http.delete(this.url+'operations/'+id)
  }

}
