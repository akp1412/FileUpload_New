import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { PopoverPageModule } from './popover/popover.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { FormsModule } from '@angular/forms';
import { Screenshot } from '@ionic-native/screenshot/ngx';


//import { Base64 } from '@ionic-native/base64/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
    imports: [FormsModule, BrowserModule, IonicModule.forRoot(), IonicStorageModule.forRoot(), AppRoutingModule, HttpModule, PopoverPageModule],
  providers: [
    StatusBar,
    SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      FileTransfer,
      //FileUploadOptions,
      FileTransferObject,
      File,
      Camera,
      PhotoViewer,
      SocialSharing,
      ImagePicker,
      Screenshot
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
