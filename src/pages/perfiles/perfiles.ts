import { Component } from '@angular/core';
import { IonicPage,NavController,  NavParams } from 'ionic-angular'; 
import { DetailPage } from '../../pages/detail/detail';

import { GobernanzaServiceProvider} from '../../providers/gobernanza-service/gobernanza-service' 
/**
 * Generated class for the PerfilesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
})
export class PerfilesPage {

	detailPage =  DetailPage;
	public mapa;  
	public instituciones;
  public id_mapa;
  public departamentos;
  public id_departament;
  public tipo;
  public searchTerm;
  public instituciones_store;
  public isValid;
  public number;

  constructor( public navCtrl: NavController, public navParams: NavParams,  public actoresService: GobernanzaServiceProvider) {

  	this.mapa = navParams.get("id_mapa");
    this.id_mapa = navParams.data; 
    this.instituciones = []; 
    this.departamentos = [];
    this.instituciones_store = [];
    this.isValid = false;
    this.number = 2;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilesPage');

    console.log(this.navParams.data);
    this._getInstituciones();
    this._getDepartamentos()

    
  }

  _getDepartamentos(){
    this.actoresService.getDepartamentos().subscribe(data =>{
      console.log(data);
      this.departamentos = data;
    })


  }

   
  _getInstituciones(){
    this.actoresService.getInstituciones().subscribe(data => {
      console.log(data);
      this.instituciones = data;
      console.log(this.instituciones);
      this.instituciones_store = data;


    })
  }
  detailInstitutions(institucion_id){
  	this.navCtrl.push(DetailPage, { 
  		id_mapa:this.id_mapa,
  		id_entidad: institucion_id 
  	}) 


  }
  select_departamento(){
    this.searchTerm = '';

    if(this.id_departament == null){
      this.actoresService.getdepartamentinstitutionByTypeApi(this.tipo).subscribe(data =>{
        console.log(data);
        this.instituciones = data;
        this.instituciones_store = this.instituciones;
      })
    }else{
      if(this.tipo == null){
        this.actoresService.getdepartamentinstitutionByDepartamentApi(this.id_departament).subscribe(data =>{
          console.log(data); 
          this.instituciones = data; 
          this.instituciones_store = this.instituciones;
        })
      }else{
        this.actoresService.getInstitucionsDepartament(this.id_departament, this.tipo).subscribe(data =>{
          console.log(data);

          this.instituciones = data;

          this.instituciones_store = this.instituciones;

        })

      }

    }

    

    
  }

  filterItems(){
    console.log(this.instituciones); 
    console.log(this.instituciones_store);    
    this.instituciones = this.instituciones_store; 

    this.instituciones = this.instituciones.filter((item) => {
      return item.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
    });     
    

  }
   doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
     this.number = this.number * 2; 

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
