import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'; 
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar'; 
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio'; 
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { DetailPage } from '../pages/detail/detail';
import { InstitucionPage } from '../pages/institucion/institucion';
import { HttpModule } from '@angular/http';
import { GobernanzaServiceProvider } from '../providers/gobernanza-service/gobernanza-service';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage ,
    DetailPage,
    InstitucionPage 
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    PerfilesPage,
    ContactoPage,
    AcercaPage, 
    DetailPage,
    InstitucionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GobernanzaServiceProvider
  ]
})
export class AppModule {}
