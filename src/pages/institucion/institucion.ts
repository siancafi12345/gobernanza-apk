import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { GobernanzaServiceProvider} from '../../providers/gobernanza-service/gobernanza-service' 
/**
 * Generated class for the InstitucionPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-institucion',
  templateUrl: 'institucion.html',
})
export class InstitucionPage {
	public entidad;
	public institucion;

  constructor(public navCtrl: NavController, public navParams: NavParams, public actoresService: GobernanzaServiceProvider) {

  	this.entidad = navParams.get("id_entidad");
  	this.institucion = [];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InstitucionPage');
    this._getInstitucion();
  }

    _getInstitucion(){
    	this.actoresService.institucion(this.entidad).subscribe(data => {
    		console.log(data);
    		this.institucion = data[0];
    	})

    }


}
