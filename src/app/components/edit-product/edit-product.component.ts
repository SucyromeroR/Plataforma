import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ProductService } from '../services/data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})


export class EditProductComponent implements OnInit {
  nombreProducto: string="";
  tipoProducto: string = "";
  productoId: string = "";


  constructor(private location: Location, private productService: ProductService, private router: Router) { }

  ngOnInit( ) {
    const productoId = localStorage.getItem('productoId');
    if (productoId && productoId.trim().length>0 ) {
      this.productoId = productoId;
    }
    console.log("this.productoId", this.productoId);
  }
  goBack(): void {
    this.location.back();
  }

  async actualizarProducto() {
    console.log('actualizando')
    if(!this.productoId){
      window.alert("No existe un poducto para actualizar");
      return;
    }
    const resp = await this.productService.actualizarProducto({
      id: this.productoId,
      producto: {
        nombreProducto: this.nombreProducto,
        tipoProducto: this.tipoProducto,
      }
    });
    this.router.navigate(['/productos']);
  }

}
