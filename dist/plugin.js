!(function (n, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ng.router'),
        require('ngx-translate.core'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : 'function' == typeof define && define.amd
    ? define(['ng.common', 'tslib', 'ng.forms', 'ng.router', 'ngx-translate.core', 'wako-app.mobile-sdk', 'ng.core', 'ionic.angular'], e)
    : 'object' == typeof exports
    ? (exports.plugin = e(
        require('ng.common'),
        require('tslib'),
        require('ng.forms'),
        require('ng.router'),
        require('ngx-translate.core'),
        require('wako-app.mobile-sdk'),
        require('ng.core'),
        require('ionic.angular')
      ))
    : (n.plugin = e(
        n['ng.common'],
        n.tslib,
        n['ng.forms'],
        n['ng.router'],
        n['ngx-translate.core'],
        n['wako-app.mobile-sdk'],
        n['ng.core'],
        n['ionic.angular']
      ));
})('undefined' != typeof self ? self : this, function (n, e, l, t, o, r, u, i) {
  return (function (n) {
    var e = {};
    function l(t) {
      if (e[t]) return e[t].exports;
      var o = (e[t] = { i: t, l: !1, exports: {} });
      return n[t].call(o.exports, o, o.exports, l), (o.l = !0), o.exports;
    }
    return (
      (l.m = n),
      (l.c = e),
      (l.d = function (n, e, t) {
        l.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: t });
      }),
      (l.r = function (n) {
        'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(n, '__esModule', { value: !0 });
      }),
      (l.t = function (n, e) {
        if ((1 & e && (n = l(n)), 8 & e)) return n;
        if (4 & e && 'object' == typeof n && n && n.__esModule) return n;
        var t = Object.create(null);
        if ((l.r(t), Object.defineProperty(t, 'default', { enumerable: !0, value: n }), 2 & e && 'string' != typeof n))
          for (var o in n)
            l.d(
              t,
              o,
              function (e) {
                return n[e];
              }.bind(null, o)
            );
        return t;
      }),
      (l.n = function (n) {
        var e =
          n && n.__esModule
            ? function () {
                return n.default;
              }
            : function () {
                return n;
              };
        return l.d(e, 'a', e), e;
      }),
      (l.o = function (n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
      }),
      (l.p = ''),
      l((l.s = 0))
    );
  })({
    0: function (n, e, l) {
      n.exports = l('zUnb');
    },
    '0S4P': function (e, l) {
      e.exports = n;
    },
    '17wl': function (n, l) {
      n.exports = e;
    },
    '3xDq': function (n, e) {
      n.exports = l;
    },
    FsH7: function (n, e, l) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var t = l('17wl'),
        o = l('vOrQ'),
        r = l('z1lQ'),
        u = l('TGDj');
      e.ToastService = (function () {
        function n(n, e) {
          (this.toastCtrl = n), (this.translateService = e);
        }
        return (
          (n.prototype.simpleMessage = function (n, e, l, t) {
            var o = this;
            void 0 === l && (l = 2e3),
              void 0 === t && (t = 'top'),
              this.translateService.get(n, e).subscribe(function (n) {
                o.toastCtrl.create({ message: n, mode: 'ios', position: t, duration: l }).then(function (n) {
                  n.present();
                });
              });
          }),
          t.__decorate([o.Injectable(), t.__metadata('design:paramtypes', [r.ToastController, u.TranslateService])], n)
        );
      })();
    },
    GoKE: function (n, e, l) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var t = l('17wl'),
        o = l('vOrQ'),
        r = l('z1lQ');
      e.BrowserService = (function () {
        function n(n) {
          this.platform = n;
        }
        return (
          (n.prototype.open = function (n, e) {
            if ((void 0 === e && (e = !0), !1 !== this.platform.is('cordova') && e)) {
              var l = document.body.classList.contains('dark');
              SafariViewController.isAvailable(function (e) {
                e
                  ? SafariViewController.show({
                      url: n,
                      hidden: !1,
                      animated: !0,
                      transition: 'curl',
                      enterReaderModeIfAvailable: !1,
                      barColor: l ? '#000000' : '#1f2d3f',
                      tintColor: l ? '#000000' : '#1f2d3f',
                      controlTintColor: '#ffffff'
                    })
                  : window.open(n, '_system', 'location=yes');
              });
            } else window.open(n, '_system', 'location=yes');
          }),
          t.__decorate([o.Injectable(), t.__metadata('design:paramtypes', [r.Platform])], n)
        );
      })();
    },
    JAnZ: function (n, e) {
      n.exports = t;
    },
    TGDj: function (n, e) {
      n.exports = o;
    },
    doF0: function (n, e) {
      n.exports = r;
    },
    vOrQ: function (n, e) {
      n.exports = u;
    },
    z1lQ: function (n, e) {
      n.exports = i;
    },
    zUnb: function (n, e, l) {
      'use strict';
      l.r(e);
      var t = l('doF0'),
        o = l('TGDj');
      function r(...n) {
        Object(t.wakoLog)('plugin.my-plugin', n);
      }
      class u extends t.PluginBaseService {
        constructor(n) {
          super(), (this.translate = n);
        }
        initialize() {
          r('plugin initialized');
        }
        afterInstall() {
          r('plugin installed');
        }
        afterUpdate() {
          r('plugin updated');
        }
        setTranslation(n, e) {
          this.translate.setDefaultLang(n), this.translate.use(n), this.translate.setTranslation(n, e);
        }
        customAction(n, e) {}
      }
      var i = l('z1lQ'),
        a = l('vOrQ');
      class s {
        constructor(n, e, l) {
          (this.modalCtrl = n), (this.browserService = e), (this.toastService = l);
        }
        ngOnInit() {
          this.toastService.simpleMessage('openMedia', { imdbId: this.movie ? this.movie.imdbId : this.show.imdbId });
        }
        dismiss() {
          this.modalCtrl.dismiss();
        }
        openImdb(n) {
          this.browserService.open(`http://www.imdb.com/title/${n}/`);
        }
      }
      class c extends t.MovieDetailBaseComponent {
        constructor(n) {
          super(), (this.modalCtrl = n);
        }
        setMovie(n) {
          this.movie = n;
        }
        openMovie() {
          this.modalCtrl.create({ component: s, componentProps: { movie: this.movie } }).then((n) => {
            n.present();
          });
        }
      }
      class d {
        constructor(n) {
          this.translate = n;
        }
        ngOnInit() {
          r('Current lang', this.translate.currentLang), r('Test instant translate', this.translate.instant('settings.title'));
        }
      }
      class p extends t.EpisodeDetailBaseComponent {
        constructor(n) {
          super(), (this.modalCtrl = n);
        }
        setShowEpisode(n, e) {
          (this.show = n), (this.episode = e);
        }
        openEpisode() {
          this.modalCtrl.create({ component: s, componentProps: { show: this.show, episode: this.episode } }).then((n) => {
            n.present();
          });
        }
      }
      class f {
        constructor() {}
        ngOnInit() {}
      }
      let m = (() => {
        class n extends t.PluginBaseModule {}
        return (
          (n.pluginService = u),
          (n.settingsComponent = d),
          (n.movieComponent = c),
          (n.episodeComponent = p),
          (n.pluginDetailComponent = f),
          n
        );
      })();
      var g = l('0S4P');
      l('JAnZ');
      var v = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function h(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var C = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function b(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var T = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function _(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var y = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function I(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var S = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function R(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var E = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function w(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var D = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function M(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var N = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function k(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var x = a['\u0275crt']({ encapsulation: 2, styles: [], data: {} });
      function P(n) {
        return a['\u0275vid'](2, [a['\u0275ncd'](null, 0)], null, null);
      }
      var A = a['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function O(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(),
            a['\u0275eld'](
              0,
              0,
              null,
              null,
              2,
              'ion-button',
              [],
              null,
              [[null, 'click']],
              function (n, e, l) {
                var t = !0;
                return 'click' === e && (t = !1 !== n.component.openMovie() && t), t;
              },
              h,
              v
            )),
            a['\u0275did'](1, 49152, null, 0, i.IonButton, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275ted'](2, 0, [' My movie : ', ' ', '\n']))
          ],
          null,
          function (n, e) {
            var l = e.component;
            n(e, 2, 0, l.movie.title, l.movie.traktId);
          }
        );
      }
      function L(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 1, 'ng-component', [], null, null, null, O, A)),
            a['\u0275did'](1, 49152, null, 0, c, [i.ModalController], null, null)
          ],
          null,
          null
        );
      }
      var j = a['\u0275ccf']('ng-component', c, L, {}, {}, []),
        F = a['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function Z(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(),
            a['\u0275eld'](
              0,
              0,
              null,
              null,
              2,
              'ion-button',
              [],
              null,
              [[null, 'click']],
              function (n, e, l) {
                var t = !0;
                return 'click' === e && (t = !1 !== n.component.openEpisode() && t), t;
              },
              h,
              v
            )),
            a['\u0275did'](1, 49152, null, 0, i.IonButton, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275ted'](2, 0, [' Show : ', ' - Episode ', '\n']))
          ],
          null,
          function (n, e) {
            var l = e.component;
            n(e, 2, 0, l.show.title, l.episode.code);
          }
        );
      }
      function q(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 1, 'ng-component', [], null, null, null, Z, F)),
            a['\u0275did'](1, 49152, null, 0, p, [i.ModalController], null, null)
          ],
          null,
          null
        );
      }
      var U = a['\u0275ccf']('ng-component', p, q, {}, {}, []),
        B = a['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function G(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 2, 'p', [], null, null, null, null, null)),
            (n()(), a['\u0275ted'](1, null, [' ', '\n'])),
            a['\u0275pid'](131072, o.TranslatePipe, [o.TranslateService, a.ChangeDetectorRef]),
            (n()(), a['\u0275eld'](3, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), a['\u0275ted'](-1, null, ['My plugin']))
          ],
          null,
          function (n, e) {
            n(e, 1, 0, a['\u0275unv'](e, 1, 0, a['\u0275nov'](e, 2).transform('settings.title')));
          }
        );
      }
      function z(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 1, 'ng-component', [], null, null, null, G, B)),
            a['\u0275did'](1, 114688, null, 0, d, [o.TranslateService], null, null)
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Q = a['\u0275ccf']('ng-component', d, z, {}, {}, []),
        H = l('GoKE'),
        V = l('FsH7'),
        J = a['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function K(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 4, 'ion-card-content', [], null, null, null, I, y)),
            a['\u0275did'](1, 49152, null, 0, i.IonCardContent, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(),
            a['\u0275eld'](
              2,
              0,
              null,
              0,
              2,
              'ion-button',
              [],
              null,
              [[null, 'click']],
              function (n, e, l) {
                var t = !0,
                  o = n.component;
                return 'click' === e && (t = !1 !== o.openImdb(o.movie.imdbId) && t), t;
              },
              h,
              v
            )),
            a['\u0275did'](3, 49152, null, 0, i.IonButton, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275ted'](-1, 0, [' Open on Imdb ']))
          ],
          null,
          null
        );
      }
      function X(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 4, 'ion-card-content', [], null, null, null, I, y)),
            a['\u0275did'](1, 49152, null, 0, i.IonCardContent, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(),
            a['\u0275eld'](
              2,
              0,
              null,
              0,
              2,
              'ion-button',
              [],
              null,
              [[null, 'click']],
              function (n, e, l) {
                var t = !0,
                  o = n.component;
                return 'click' === e && (t = !1 !== o.openImdb(o.show.imdbId) && t), t;
              },
              h,
              v
            )),
            a['\u0275did'](3, 49152, null, 0, i.IonButton, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275ted'](-1, 0, [' Open on Imdb ']))
          ],
          null,
          null
        );
      }
      function $(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 12, 'ion-header', [], null, null, null, w, E)),
            a['\u0275did'](1, 49152, null, 0, i.IonHeader, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275eld'](2, 0, null, 0, 10, 'ion-toolbar', [], null, null, null, P, x)),
            a['\u0275did'](3, 49152, null, 0, i.IonToolbar, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275eld'](4, 0, null, 0, 2, 'ion-title', [], null, null, null, k, N)),
            a['\u0275did'](5, 49152, null, 0, i.IonTitle, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275ted'](6, 0, [' ', ' '])),
            (n()(), a['\u0275eld'](7, 0, null, 0, 5, 'ion-buttons', [['slot', 'end']], null, null, null, b, C)),
            a['\u0275did'](8, 49152, null, 0, i.IonButtons, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(),
            a['\u0275eld'](
              9,
              0,
              null,
              0,
              3,
              'ion-button',
              [['color', 'light']],
              null,
              [[null, 'click']],
              function (n, e, l) {
                var t = !0;
                return 'click' === e && (t = !1 !== n.component.dismiss() && t), t;
              },
              h,
              v
            )),
            a['\u0275did'](10, 49152, null, 0, i.IonButton, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], { color: [0, 'color'] }, null),
            (n()(), a['\u0275eld'](11, 0, null, 0, 1, 'ion-icon', [['name', 'close']], null, null, null, M, D)),
            a['\u0275did'](12, 49152, null, 0, i.IonIcon, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], { name: [0, 'name'] }, null),
            (n()(), a['\u0275eld'](13, 0, null, null, 7, 'ion-content', [], null, null, null, R, S)),
            a['\u0275did'](14, 49152, null, 0, i.IonContent, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275eld'](15, 0, null, 0, 5, 'ion-card', [], null, null, null, _, T)),
            a['\u0275did'](16, 49152, null, 0, i.IonCard, [a.ChangeDetectorRef, a.ElementRef, a.NgZone], null, null),
            (n()(), a['\u0275and'](16777216, null, 0, 1, null, K)),
            a['\u0275did'](18, 16384, null, 0, g.NgIf, [a.ViewContainerRef, a.TemplateRef], { ngIf: [0, 'ngIf'] }, null),
            (n()(), a['\u0275and'](16777216, null, 0, 1, null, X)),
            a['\u0275did'](20, 16384, null, 0, g.NgIf, [a.ViewContainerRef, a.TemplateRef], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (n, e) {
            var l = e.component;
            n(e, 10, 0, 'light'), n(e, 12, 0, 'close'), n(e, 18, 0, l.movie), n(e, 20, 0, l.show);
          },
          function (n, e) {
            var l = e.component;
            n(e, 6, 0, l.movie ? l.movie.title : l.show.title + ' ' + l.episode.code);
          }
        );
      }
      function W(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 1, 'app-media-modal', [], null, null, null, $, J)),
            a['\u0275did'](1, 114688, null, 0, s, [i.ModalController, H.BrowserService, V.ToastService], null, null)
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var Y = a['\u0275ccf']('app-media-modal', s, W, {}, {}, []),
        nn = a['\u0275crt']({ encapsulation: 0, styles: [['']], data: {} });
      function en(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (n()(), a['\u0275ted'](-1, null, [' This is the plugin detail\n']))
          ],
          null,
          null
        );
      }
      function ln(n) {
        return a['\u0275vid'](
          0,
          [
            (n()(), a['\u0275eld'](0, 0, null, null, 1, 'app-plugin-detail', [], null, null, null, en, nn)),
            a['\u0275did'](1, 114688, null, 0, f, [], null, null)
          ],
          function (n, e) {
            n(e, 1, 0);
          },
          null
        );
      }
      var tn = a['\u0275ccf']('app-plugin-detail', f, ln, {}, {}, []),
        on = l('3xDq'),
        rn = a['\u0275cmf'](m, [], function (n) {
          return a['\u0275mod']([
            a['\u0275mpd'](512, a.ComponentFactoryResolver, a['\u0275CodegenComponentFactoryResolver'], [
              [8, [j, U, Q, Y, tn]],
              [3, a.ComponentFactoryResolver],
              a.NgModuleRef
            ]),
            a['\u0275mpd'](4608, g.NgLocalization, g.NgLocaleLocalization, [a.LOCALE_ID, [2, g['\u0275angular_packages_common_common_a']]]),
            a['\u0275mpd'](4608, on['\u0275angular_packages_forms_forms_o'], on['\u0275angular_packages_forms_forms_o'], []),
            a['\u0275mpd'](4608, i.AngularDelegate, i.AngularDelegate, [a.NgZone, a.ApplicationRef]),
            a['\u0275mpd'](4608, i.ModalController, i.ModalController, [i.AngularDelegate, a.ComponentFactoryResolver, a.Injector]),
            a['\u0275mpd'](4608, i.PopoverController, i.PopoverController, [i.AngularDelegate, a.ComponentFactoryResolver, a.Injector]),
            a['\u0275mpd'](
              5120,
              a.APP_INITIALIZER,
              function (n, e, l) {
                return [i['\u0275f'](n, e, l)];
              },
              [i['\u0275a'], g.DOCUMENT, a.NgZone]
            ),
            a['\u0275mpd'](4608, o.TranslateLoader, o.TranslateFakeLoader, []),
            a['\u0275mpd'](4608, o.TranslateCompiler, o.TranslateFakeCompiler, []),
            a['\u0275mpd'](4608, o.TranslateParser, o.TranslateDefaultParser, []),
            a['\u0275mpd'](4608, o.MissingTranslationHandler, o.FakeMissingTranslationHandler, []),
            a['\u0275mpd'](4608, o.TranslateStore, o.TranslateStore, []),
            a['\u0275mpd'](4608, o.TranslateService, o.TranslateService, [
              o.TranslateStore,
              o.TranslateLoader,
              o.TranslateCompiler,
              o.TranslateParser,
              o.MissingTranslationHandler,
              o.USE_DEFAULT_LANG,
              o.USE_STORE,
              o.USE_EXTEND,
              o.DEFAULT_LANGUAGE
            ]),
            a['\u0275mpd'](4608, u, u, [o.TranslateService]),
            a['\u0275mpd'](4608, H.BrowserService, H.BrowserService, [i.Platform]),
            a['\u0275mpd'](4608, V.ToastService, V.ToastService, [i.ToastController, o.TranslateService]),
            a['\u0275mpd'](1073742336, g.CommonModule, g.CommonModule, []),
            a['\u0275mpd'](1073742336, on['\u0275angular_packages_forms_forms_d'], on['\u0275angular_packages_forms_forms_d'], []),
            a['\u0275mpd'](1073742336, on.FormsModule, on.FormsModule, []),
            a['\u0275mpd'](1073742336, i.IonicModule, i.IonicModule, []),
            a['\u0275mpd'](1073742336, o.TranslateModule, o.TranslateModule, []),
            a['\u0275mpd'](1073742336, m, m, []),
            a['\u0275mpd'](256, i['\u0275a'], void 0, []),
            a['\u0275mpd'](256, o.USE_STORE, void 0, []),
            a['\u0275mpd'](256, o.USE_DEFAULT_LANG, void 0, []),
            a['\u0275mpd'](256, o.USE_EXTEND, void 0, []),
            a['\u0275mpd'](256, o.DEFAULT_LANGUAGE, void 0, [])
          ]);
        });
      l.d(e, 'PluginModule', function () {
        return m;
      }),
        l.d(e, 'PluginModuleNgFactory', function () {
          return rn;
        }),
        (e.default = rn);
    }
  });
});
