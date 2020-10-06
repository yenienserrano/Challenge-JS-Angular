import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/service/operation.service';


@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  providers: [OperationService]
})
export class OperacionComponent implements OnInit {

  operations
  devEgreso
  egreso
  sumaEgreso
  devIngreso
  ingreso
  sumaIngreso
  idEditar
  datos = {
    monto: 0,
    tipo: "",
    concepto: "Varios"
  }
  datosEditados = {
    concepto: "Varios",
    monto: "0"
  }

  constructor(private operationService: OperationService) { }

  ngOnInit(): void {
    this.getOperations()
    this.getEgreso()
    this.getIngreso()
  }

  getId(id) {
    this.idEditar = id
    console.log(this.idEditar)
  }  

  saveOperations() {
    this.operationService.saveOperations(this.datos).subscribe(
      res => {
        console.log(res)
        location.reload();
      }

    ),
      err => console.log(err)
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

  getEgreso() {
    this.operationService.getEgreso().subscribe(
      res => {
        this.devEgreso = res
        this.egreso = this.devEgreso.result
        this.sumaEgreso = this.devEgreso.egresoTotal
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
        this.ingreso = this.devIngreso.result
        this.sumaIngreso = this.devIngreso.ingresoTotal
      },
      err => {
        console.error(err)
      }
    )
  }

  editOperation(id) {
    this.operationService.editOperation(id, this.datosEditados).subscribe(
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
