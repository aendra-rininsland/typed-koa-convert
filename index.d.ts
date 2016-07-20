/**
 * TypeScript definition for koa-convert
 *
 * 2016 Ændrew Rininsland <@aendrew>
 */

declare module "koa-convert" {
  var convert: ConvertStatic;
  export = convert;

  import * as Compose from 'koa-compose';

  interface ConvertStatic {
      (generator: GeneratorFunction): Compose.Middleware<any>;

      compose(
        mw: Array<GeneratorFunction> | GeneratorFunction,
        mw2?: GeneratorFunction,
        mw3?: GeneratorFunction,
        mw4?: GeneratorFunction,
        mw5?: GeneratorFunction,
        mw6?: GeneratorFunction,
        mw7?: GeneratorFunction,
        mw8?: GeneratorFunction,
        mw9?: GeneratorFunction,
        mw10?: GeneratorFunction
      ): Compose.Middleware<any>;

      back(mw: Compose.Middleware<any>): GeneratorFunction;
  }
}
