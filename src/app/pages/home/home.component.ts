import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from 'src/app/model/operation';
import { OperationService } from 'src/app/service/operation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [OperationService]
})
export class HomeComponent implements OnInit {

  operations: any = []
  devIngreso
  sumaIngreso
  devEgreso
  sumaEgreso
  idEditar
  datosEditados = {
    concepto: "Varios",
    monto: "0"
  }

  constructor(
    private operationService: OperationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getOperations()
    this.getIngreso()
    this.getEgreso()
  }

  getId(id) {
    this.idEditar = id
    console.log(this.idEditar)
  }

  getOperations() {
    this.operationService.getOperations().subscribe(
      res => {
        this.operations = res
      },
      err => {
        console.error(err)
      }
    )
  }

  getIngreso() {
    this.operationService.getIngreso().subscribe(
      res => {
        this.devIngreso = res
        this.sumaIngreso = this.devIngreso.ingresoTotal
      },
      err => {
        console.error(err)
      }
    )
  }

  getEgreso() {
    this.operationService.getEgreso().subscribe(
      res => {
        this.devEgreso = res
        this.sumaEgreso = this.devEgreso.egresoTotal
      },
      err => {
        console.error(err)
      }
    )
  }

  editOperation(id) {
    this.operationService.editOperation(this.idEditar, this.datosEditados).subscribe(
      res => {
        console.log('Los datos fueron editados')
        location.reload();
      },
      err => console.error(err)
    )
  }

  deleteOperation(id) {
    this.operationService.deleteOperation(id).subscribe(
      res => {
        console.log('Los datos fueron eliminados')
        location.reload();
      },
      err => console.error(err)
    )
  }
}
