import * as core from '@angular/core';
import * as rxjs from 'rxjs';
import * as rxjsOperators from 'rxjs/operators';
import * as ionicStorage from '@ionic/storage';
import * as ngxTranslateCore from '@ngx-translate/core';
import * as wakoAppMobileSdk from '@wako-app/mobile-sdk';
import * as common from '@angular/common';
import * as forms from '@angular/forms';
import * as router from '@angular/router';
import * as tslib from 'tslib';
import * as ionic from '@ionic/angular';

export const PLUGIN_EXTERNALS_MAP = {
  // this is the list of modules accessible by plugins
  '@angular/core': core,
  '@angular/common': common,
  '@angular/forms': forms,
  '@angular/router': router,
  rxjs,
  'rxjs/operators': rxjsOperators,
  tslib,
  '@ionic/angular': ionic,
  '@ionic/storage': ionicStorage,
  '@wako-app/mobile-sdk': wakoAppMobileSdk,
  '@ngx-translate/core': ngxTranslateCore
};
