import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CentroMediacionModel } from '../models/centro_mediacion.model';

const base_url = environment.URL_BASE

@Injectable({
  providedIn: 'root'
})
export class CentrosMediacionService {

  centroMediacion: CentroMediacionModel = new CentroMediacionModel();
  constructor(
    private readonly http: HttpClient
  ) { }

  guardarCentroMediacion(data: Partial<CentroMediacionModel>){    
    this.centroMediacion={...data};
    return this.http.post(`${base_url}/centros-mediacion`, this.centroMediacion);
  }

  listarCentroMediacionTodos(){
    return this.http.get<[tramite:CentroMediacionModel[], total: number]>(`${base_url}/centros-mediacion`)
  }

  
}