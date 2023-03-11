import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://olsmidtgt6.execute-api.us-east-2.amazonaws.com/Dev/comercializadora';

  constructor(private http: HttpClient) { }


  crearProducto(body: Producto): Promise<CrearProductoResponse> {
    return firstValueFrom(this.http.post<CrearProductoResponse>(this.url, body));
  }

  actualizarProducto(body: ProductoAct): Promise<CrearProductoResponse> {
    return firstValueFrom(this.http.put<CrearProductoResponse>(this.url, body));
  }

  eliminarCaso(body: deleteItem): Promise<CrearProductoResponse> {
    return firstValueFrom(this.http.put<CrearProductoResponse>(this.url, body));
  }

}

export interface Producto {
  cliente: {
    direccion: string;
    idCliente: number;
    telefono: string;
    tipoComprador: string;
    tipoID: string;
  };
  producto: {
    nombreProducto: string;
    proveedor: string;
    tipoProducto: string;
  };
}


export interface CrearProductoResponse {
  code: string;
  message: string;
}


export interface ProductoAct {
  id: string
  producto: {
    nombreProducto: string;
    tipoProducto: string;
  };

}

export interface deleteItem {
  id: string
}

