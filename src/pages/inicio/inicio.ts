import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { GobernanzaServiceProvider} from '../../providers/gobernanza-service/gobernanza-service' 
import { PerfilesPage } from '../../pages/perfiles/perfiles';
import { InstitucionPage } from '../../pages/institucion/institucion';
/**
 * Generated class for the InicioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage() 
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
  providers: [GobernanzaServiceProvider]
})
export class InicioPage {

  public   actores : Array<any>; 
  public   instituciones : Array<any>; 
  public actoresIterable : any; 
  public number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actoresService: GobernanzaServiceProvider) {
    this.actoresIterable = []; 
    this.number = 8;
  }


  ionViewDidLoad() {
    console.log('Pagina cargada');


    this._getInstituciones();
    this._getActores();

  }
  
  _getInstituciones(){
    this.actoresService.getInstituciones().subscribe(data => {
      console.log(data);
      this.instituciones = data;
      console.log(this.instituciones);


    })
  }
  institutions(id){ 
    console.log(id);
    console.log(this.actoresIterable[0].id, "entro");
    this.navCtrl.push(InstitucionPage, {
      id_mapa:this.actoresIterable[0].id,
      id_entidad: id 
    }) 
    
  }
  _getActores(){

    console.log("entro");

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
  
  }
  doInfinite(infiniteScroll) {

    setTimeout(() => {
      this.number = this.number * 2; 

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
