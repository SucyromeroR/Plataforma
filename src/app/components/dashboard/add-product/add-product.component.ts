import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  nombreProducto: string= ' ';
  tipo_producto: string = ' ';
  proveedor: string = '';


  
  constructor(private location: Location, private productService: ProductService, private router: Router) {
  }


  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }

  async crearProducto() {
    const resp = await this.productService.crearProducto({
      "cliente": {
        "direccion": "Carrera 97 No. 45-54",
        "idCliente": 90000019,
        "telefono": "3208196687",
        "tipoComprador": "Compradores",
        "tipoID": "Nit"
      },
      "producto": {
        "nombreProducto": this.nombreProducto,
        "proveedor": this.proveedor,
        "tipoProducto": this.tipo_producto,
      }
    });
      this.router.navigate(['/productos']);
  }

}
