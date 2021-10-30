import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContactoService } from 'src/app/servicios/contacto.service';
import { FormBuilder, FormGroup,Validator, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.page.html',
  styleUrls: ['./contactenos.page.scss'],
})
export class ContactenosPage implements OnInit {
    
  myform:FormGroup  
  id_editar:number=0;
  constructor(public alertController: AlertController,private _builder:FormBuilder,private contacto: ContactoService) { 
    this.myform=this._builder.group({
      fullname: ['', [Validators.required, Validators.maxLength(50)]]  ,
      phone: ['', [Validators.required]]  ,
      email: ['', [Validators.required, Validators.maxLength(100)]] 
    })
  }

  lista_contactos: any;
  nuevocon={
    fullname:null,
    phone:null,
    email:null
  }




  alta(value:any) {
    this.nuevocon={
      fullname:value.fullname,
      phone:value.phone,
      email:value.email
    }
    this.contacto.alta(this.nuevocon).subscribe(datos => {
      console.log(datos)
      this.myform.reset()
      this.showAlert()
     
     });
  }





  

  showAlert() {

    this.alertController.create({
      header: 'Informacion',
      subHeader: 'gestion de contactos',
      message: 'Contacto agregado',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }

  ngOnInit() {
    
  }

}
