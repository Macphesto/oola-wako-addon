import { Compiler, Injectable } from '@angular/core';
import { PLUGIN_EXTERNALS_MAP } from './plugin-externals';


@Injectable({
  providedIn: 'root'
})
export class ModuleLoaderService {
  constructor(private compiler: Compiler) {
  }

  loadModule(source: string) {
    const exports = {}; // this will hold module exports
    const modules = PLUGIN_EXTERNALS_MAP;

    // shim 'require' and eval
    const require: any = module => modules[module];

    // @ts-ignore
    eval(source);

    this.compiler.compileModuleAndAllComponentsSync(exports[`PluginModule`]);

    return exports;
  }
}
