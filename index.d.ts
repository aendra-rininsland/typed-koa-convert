/**
 * TypeScript definition for koa-convert
 *
 * 2016 Ændrew Rininsland (@aendrew)
 *
 * Thanks to Philip Bulley (@milkisevil) for some help
 */

declare module "koa-convert" {
  var convert: ConvertStatic;
  export = convert;

  import * as Compose from 'koa-compose';

  interface ConvertStatic {
      (generator: GeneratorFunction): Compose.Middleware<any>;

      compose(mw: Array<GeneratorFunction>): Compose.Middleware<any>;
      compose(...rest:Array<GeneratorFunction>): Compose.Middleware<any>;

      back(mw: Compose.Middleware<any>): GeneratorFunction;
  }
}
