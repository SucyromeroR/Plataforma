import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ProductService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  nombreProducto: string = ' ';
  tipoProducto: string = ' ';
  constructor(private location: Location, private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
 
}
