import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user/user.service';
import { user } from 'src/interfaces/user.interface';
import { FuncionesGlobalesService } from 'src/app/services/global/funciones-globales.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage {

  cont: number = 0;
  usr = new user();

  constructor(
    private NavCtrl: NavController,
    private userService: UserService,
    private globalFunctions: FuncionesGlobalesService) { }

    //cuando se da click en iniciar
  Submit_Form() {
    if (this.usr.email != "" && this.usr.contrasena != "") {
      console.log(this.usr); 
      this.userService.getLoginResponse(this.usr).subscribe((response: any) => {
        console.log(response.user[0]);
        this.NavCtrl.navigateForward('home');
        if (response.success  && response.user.length > 0) {
          localStorage.setItem("user_Data",JSON.stringify(response.user[0]));
          // this.storage.set('user_Data', response.user[0]).then((val) => {
          //   this.NavCtrl.navigateForward('home');
          // });
        }
        else {
          this.cont++;
          this.globalFunctions.Show_Ok_Alert('Error', 'Los datos ingresados no son correctos. Por favor intentalo nuevamente.');
        }
      },
        (error) => {
          this.globalFunctions.Show_Ok_Alert('Error', 'Existen problemas con el servidor');
          console.log(error);
        });
    }
    else {
      this.globalFunctions.Show_Ok_Alert('Error', 'Ambos campos son obligatorios.');
    }
  }

  //redirecciona a pagina de recuperar contraseña
  Reset_Password() {
    this.NavCtrl.navigateForward('recoverpassword');
  }

  //checa que la cadena cumpla con la expresion regular , sino, borra el ultimo digito ingresado 
  validate_input(target, option) {
    target.value = this.globalFunctions.validate_fields(target.value, option);
  }

}
