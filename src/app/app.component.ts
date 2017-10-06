import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen'; 
import { InicioPage } from '../pages/inicio/inicio';
import { PerfilesPage } from '../pages/perfiles/perfiles';

import { GobernanzaServiceProvider} from '../providers/gobernanza-service/gobernanza-service'



@Component({
  templateUrl: 'app.html', 
  providers: [GobernanzaServiceProvider]
})

export class MyApp {

  @ViewChild('NAV') nav: Nav;
  
  public rootPage: any; 
  public pageInicio: Array<{ titulo:string; component: any; icon:string }>;
  public actores: Array<any>;
  public actoresIterable: any; 



  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public actoresService: GobernanzaServiceProvider) {

    this.rootPage = InicioPage; 

    this.pageInicio = [
    {titulo: 'Inicio', component: InicioPage, icon:'home'}, 
    ];

    this.actoresService.getActores().subscribe(data =>{
      this.actores  = data;
      console.log(this.actores);
      let actoresArray = this.actores.map;
      console.log(actoresArray);

      for(let i =0; i < actoresArray.length; i++) {
        actoresArray[i].component = PerfilesPage;
        actoresArray[i].icon = 'person';
        console.log(actoresArray[i].component); 
      }
      this.actoresIterable = actoresArray;
      console.log(this.actoresIterable);


    })


    platform.ready().then(() => { // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  

 
  
  

    goToPage(page){ 
    this.nav.setRoot(page);
  }
  goToListInstituciones(id){ 

    this.nav.setRoot(PerfilesPage, id);
  }

}

