import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ToastController, ActionSheetController, NavController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario;
  fotografia:any;

  constructor(
    private _sanitizer: DomSanitizer,
    public actionSheetController: ActionSheetController,
    private camara: Camera,
    private _user: UserService) { }

  ngOnInit() {
    this.usuario = {...JSON.parse(localStorage.getItem("user_Data"))};
    this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);
    console.log(this.usuario.fotografia);
    console.log(this.fotografia);

  }

  actualizar(){

    console.log(this.usuario.fotografia);
    this._user.updateUserData(this.usuario).subscribe(data=>{
      console.log(data);
    });

  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      buttons: [{
        text: 'Cámara',
        icon: 'camera',
        handler: () => {
          this.imgPreCam();
        }
      }, {
        text: 'Galeria',
        icon: 'images',
        handler: () => {
          this.imgPreAlb();
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel'
      }
    ]
    });
    await actionSheet.present();
  }

  imgPreAlb(){
    let imagen = document.getElementById("perfil");
    this.camara.getPicture({
      quality : 100,
      destinationType : this.camara.DestinationType.DATA_URL,
      sourceType : this.camara.PictureSourceType.PHOTOLIBRARY,
      allowEdit : true,
      encodingType: this.camara.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: true
    }).then(foto=>{
      foto = escape(foto);
      this.usuario.fotografia = 'data:image/jpg;base64,'+foto;
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);
      console.log(this.usuario.fotografia);
      console.log(this.fotografia);

    });

  }

  imgPreCam(){
    let imagen = document.getElementById("perfil");
    this.camara.getPicture({
      quality : 100,
      destinationType : this.camara.DestinationType.DATA_URL,
      sourceType : this.camara.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: this.camara.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      saveToPhotoAlbum: true
    }).then(foto=>{
      foto = escape(foto);
      this.usuario.fotografia = 'data:image/jpg;base64,'+foto;
      this.fotografia = this._sanitizer.bypassSecurityTrustUrl(`${this.usuario.fotografia}`);

    });

  }

}
