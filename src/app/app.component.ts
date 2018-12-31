import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CommunityService } from './services/community.service';
import { MasterDetailService } from './services/masterdetail.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [CommunityService, MasterDetailService],
})
export class AppComponent {
    public appPages = [
        {
            title: 'My Communities',
            url: '/mycommunities',
            icon: 'contacts'
        },
        {
            title: 'Add Community',
            url: '/about',
            icon: 'add'
        }

    ];
    UserID: any = "";
    password: any = "";
    imgPerRow: any = 4;
    rowsPerPage: any = 5;
    serviceVersion: any = "P";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
      private statusBar: StatusBar, private storage: Storage,
      public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
        this.splashScreen.hide();

        this.storage.get('UserID').then(val => {
            if (val != null) {
                console.log(val);
                this.UserID = val;
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });

        this.storage.get('password').then(val => {
            if (val != null) {
                console.log(val);
                this.password = val;
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });

        this.storage.get('imgPerRow').then(val => {
            if (val != null) {
                console.log(val);
                this.imgPerRow = val;
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });

        this.storage.get('rowsPerPage').then(val => {
            if (val != null) {
                console.log(val);
                this.rowsPerPage = val;
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });

        this.storage.get('serviceVersion').then(val => {
            if (val != null) {
                console.log(val);
                this.serviceVersion = val;
            }
            else {
                //this.navCtrl.navigateForward('login');
            }
        });

    });
    }

    saveSetting() {
        this.storage.set('UserID', this.UserID);
        this.storage.set('password', this.password);
        this.storage.set('imgPerRow', this.imgPerRow);
        this.storage.set('rowsPerPage', this.rowsPerPage);
        this.storage.set('serviceVersion', this.serviceVersion);
        this.navCtrl.navigateForward('');
            
        
    }
}
