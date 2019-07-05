import * as core from '@angular/core';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as rxjs from 'rxjs';
import * as tslib from 'tslib';
import * as ionic from '@ionic/angular';
import * as wakoMobileSdk from '@wako-app/mobile-sdk';
import * as ngxTranslateCore from '@ngx-translate/core';


export const PLUGIN_EXTERNALS_MAP = {
  'ng.core': core,
  'ng.common': common,
  'ng.forms': forms,
  'ng.router': router,
  rxjs,
  tslib,
  'ionic.angular': ionic,
  'wako.mobile-sdk': wakoMobileSdk,
  'ngx-translate.core': ngxTranslateCore
};
