import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { GobernanzaServiceProvider} from '../../providers/gobernanza-service/gobernanza-service'

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
  providers: [GobernanzaServiceProvider]
})
export class DetailPage {
	public mapa; 
	public entidad; 
	public  infoEntidad;
	public  info;
	public preguntas: any;
	public respuestas: any;
	public res;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public actoresService: GobernanzaServiceProvider) {

  	this.mapa = navParams.get("id_mapa");
  	this.entidad = navParams.get("id_entidad");
  	this.info = [];
  	this.preguntas = [];
  	this.respuestas = [];
  	this.res = [];

  }

  ionViewDidLoad() {
  	console.log('ionViewDidLoad DetailPage'); 
  	this.getInstitutions();
  	this.getPreguntas();
  	this.getRespuestas(); 
  	this.merge_arrays();

  	
  }

  merge_arrays(){

  	
  }
  getInstitutions(){

  		this.actoresService.getDetailInstitution(this.mapa,this.entidad).subscribe(data => {
  		this.infoEntidad = data;
  		this.info = this.infoEntidad[0];
  		console.log(this.info); 
  	}) 


  }
  getPreguntas(){
  	this.actoresService.getDetailPreguntaInstitution(this.mapa,this.entidad).subscribe(data => {
  		console.log(data);
  		this.preguntas = data;
  		console.log(this.preguntas) 
  	}) 
  }
  getRespuestas(){

  	  	this.actoresService.getDetailRespuestaInstitution(this.mapa,this.entidad).subscribe(data => {
  		console.log(data); 
  		this.respuestas = data; 
  		console.log(this.respuestas, "son respuestas");
  		let array_respuestas = this.respuestas; 


  		console.log(this.preguntas, "-----");

  		for(let i = 0; i < array_respuestas.length; i++){ 
  			let respuesta = array_respuestas[i][0]; 
  			this.res.push(respuesta); 
  		}

  		for(let i = 0; i <this.preguntas.length; i++ ){

  			console.log(this.res[i].tipo, "tipo")

  			if(this.res[i].tipo == 's_multiple_multiple' || this.res[i].tipo == 'pregunta_cerrada' 
          || this.res[i].tipo == 's_multiple_unica'){

          let quantity = (this.res[i].name.match(/|/g) || []).length;
          for(let j = 0; j < quantity; j++){

            this.res[i].name =  this.res[i].name.replace("|", ",");

          }



        }

  			this.preguntas[i].respuesta = this.res[i].name; 		

  			console.log(this.preguntas[i].respuesta, "-----");
  		}


  	})

  }

}


