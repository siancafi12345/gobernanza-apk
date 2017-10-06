import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class GobernanzaServiceProvider {
	public gobernanzaApi: string;
  public gobernanza_api: string;
  public data : any;

  constructor(public http: Http) {
    
   this.gobernanzaApi  = "/gobernanzaApi/";

  }

  getActores(){
    //return this.http.get(this.gobernanzaApi+"Mains/apiMapas").map(res => res.json());
    return this.http.get("http://gobernanza.linktic.com/Mains/apiMapas").map(res => res.json());
  }
  getInstituciones(){ 
   // return this.http.get(this.gobernanzaApi+"Actores/nacionalApiAll").map(res => res.json());
   return this.http.get("http://gobernanza.linktic.com/Actores/nacionalApiAll").map(res => res.json());
  }
  getDetailInstitution(mapa,id){ 
    //return this.http.get(this.gobernanzaApi+"Actores/ApiDetailInstitucion/"+mapa+"?id_entidad="+id).map(res => res.json()); 
    return this.http.get("http://gobernanza.linktic.com/Actores/ApiDetailInstitucion/"+mapa+"?id_entidad="+id).map(res => res.json()); 
  }
  getDetailPreguntaInstitution(mapa,id){
    //return this.http.get(this.gobernanzaApi+"Actores/ApiDetailPreguntaInstitucion/"+mapa+"?id_entidad="+id).map(res => res.json()); 
    return this.http.get("http://gobernanza.linktic.com/Actores/ApiDetailPreguntaInstitucion/"+mapa+"?id_entidad="+id).map(res => res.json()); 
  }
  getDetailRespuestaInstitution(mapa,id){ 
    //return this.http.get(this.gobernanzaApi+"Actores/ApiDetailRespuestaInstitucion/"+mapa+"?id_entidad="+id).map(res => res.json()); 
    return this.http.get("http://gobernanza.linktic.com/Actores/ApiDetailRespuestaInstitucion/"+mapa+"?id_entidad="+id).map(res => res.json()); 
  }
  getDepartamentos(){ 
    //return this.http.get(this.gobernanzaApi+"Actores/apiDepartamentos/").map(res => res.json()); 
    return this.http.get("http://gobernanza.linktic.com/Actores/apiDepartamentos/").map(res => res.json()); 

  }
  getdepartamentinstitutionByDepartamentApi(id){ 
    //return this.http.get(this.gobernanzaApi+"Actores/getdepartamentinstitutionByDepartamentApi/"+id).map(res => res.json()); 
    return this.http.get("http://gobernanza.linktic.com/Actores/getdepartamentinstitutionByDepartamentApi/"+id).map(res => res.json()); 
  }
  getdepartamentinstitutionByTypeApi(id){ 
    //return this.http.get(this.gobernanzaApi+"Actores/getdepartamentinstitutionByTypeApi/"+id ).map(res => res.json()); 
    return this.http.get("http://gobernanza.linktic.com/Actores/getdepartamentinstitutionByTypeApi/"+id ).map(res => res.json()); 
  }
  getInstitucionsDepartament(id_departament, tipo){

    //return this.http.get(this.gobernanzaApi+"Actores/get-departament-institutions/"+id_departament+"/"+tipo ).map(res => res.json()); 
    return this.http.get("http://gobernanza.linktic.com/Actores/get-departament-institutions/"+id_departament+"/"+tipo ).map(res => res.json()); 
  }
  institucion(institucion){

    //return this.http.get(this.gobernanzaApi+"Actores/getinstitucion/"+institucion).map(res => res.json()); 
    return this.http.get("http://gobernanza.linktic.com/Actores/getinstitucion/"+institucion).map(res => res.json()); 

  }
  

}
