
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model auth_user
 * 
 */
export type auth_user = $Result.DefaultSelection<Prisma.$auth_userPayload>
/**
 * Model core_settings
 * 
 */
export type core_settings = $Result.DefaultSelection<Prisma.$core_settingsPayload>
/**
 * Model core_test
 * 
 */
export type core_test = $Result.DefaultSelection<Prisma.$core_testPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Auth_users
 * const auth_users = await prisma.auth_user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Auth_users
   * const auth_users = await prisma.auth_user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.auth_user`: Exposes CRUD operations for the **auth_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Auth_users
    * const auth_users = await prisma.auth_user.findMany()
    * ```
    */
  get auth_user(): Prisma.auth_userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.core_settings`: Exposes CRUD operations for the **core_settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Core_settings
    * const core_settings = await prisma.core_settings.findMany()
    * ```
    */
  get core_settings(): Prisma.core_settingsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.core_test`: Exposes CRUD operations for the **core_test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Core_tests
    * const core_tests = await prisma.core_test.findMany()
    * ```
    */
  get core_test(): Prisma.core_testDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    auth_user: 'auth_user',
    core_settings: 'core_settings',
    core_test: 'core_test'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "auth_user" | "core_settings" | "core_test"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      auth_user: {
        payload: Prisma.$auth_userPayload<ExtArgs>
        fields: Prisma.auth_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.auth_userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.auth_userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          findFirst: {
            args: Prisma.auth_userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.auth_userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          findMany: {
            args: Prisma.auth_userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>[]
          }
          create: {
            args: Prisma.auth_userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          createMany: {
            args: Prisma.auth_userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.auth_userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>[]
          }
          delete: {
            args: Prisma.auth_userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          update: {
            args: Prisma.auth_userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          deleteMany: {
            args: Prisma.auth_userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.auth_userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.auth_userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>[]
          }
          upsert: {
            args: Prisma.auth_userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$auth_userPayload>
          }
          aggregate: {
            args: Prisma.Auth_userAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuth_user>
          }
          groupBy: {
            args: Prisma.auth_userGroupByArgs<ExtArgs>
            result: $Utils.Optional<Auth_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.auth_userCountArgs<ExtArgs>
            result: $Utils.Optional<Auth_userCountAggregateOutputType> | number
          }
        }
      }
      core_settings: {
        payload: Prisma.$core_settingsPayload<ExtArgs>
        fields: Prisma.core_settingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.core_settingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.core_settingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>
          }
          findFirst: {
            args: Prisma.core_settingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.core_settingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>
          }
          findMany: {
            args: Prisma.core_settingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>[]
          }
          create: {
            args: Prisma.core_settingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>
          }
          createMany: {
            args: Prisma.core_settingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.core_settingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>[]
          }
          delete: {
            args: Prisma.core_settingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>
          }
          update: {
            args: Prisma.core_settingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>
          }
          deleteMany: {
            args: Prisma.core_settingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.core_settingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.core_settingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>[]
          }
          upsert: {
            args: Prisma.core_settingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_settingsPayload>
          }
          aggregate: {
            args: Prisma.Core_settingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCore_settings>
          }
          groupBy: {
            args: Prisma.core_settingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Core_settingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.core_settingsCountArgs<ExtArgs>
            result: $Utils.Optional<Core_settingsCountAggregateOutputType> | number
          }
        }
      }
      core_test: {
        payload: Prisma.$core_testPayload<ExtArgs>
        fields: Prisma.core_testFieldRefs
        operations: {
          findUnique: {
            args: Prisma.core_testFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.core_testFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>
          }
          findFirst: {
            args: Prisma.core_testFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.core_testFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>
          }
          findMany: {
            args: Prisma.core_testFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>[]
          }
          create: {
            args: Prisma.core_testCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>
          }
          createMany: {
            args: Prisma.core_testCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.core_testCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>[]
          }
          delete: {
            args: Prisma.core_testDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>
          }
          update: {
            args: Prisma.core_testUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>
          }
          deleteMany: {
            args: Prisma.core_testDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.core_testUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.core_testUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>[]
          }
          upsert: {
            args: Prisma.core_testUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$core_testPayload>
          }
          aggregate: {
            args: Prisma.Core_testAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCore_test>
          }
          groupBy: {
            args: Prisma.core_testGroupByArgs<ExtArgs>
            result: $Utils.Optional<Core_testGroupByOutputType>[]
          }
          count: {
            args: Prisma.core_testCountArgs<ExtArgs>
            result: $Utils.Optional<Core_testCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    auth_user?: auth_userOmit
    core_settings?: core_settingsOmit
    core_test?: core_testOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Auth_userCountOutputType
   */

  export type Auth_userCountOutputType = {
    core_test: number
  }

  export type Auth_userCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    core_test?: boolean | Auth_userCountOutputTypeCountCore_testArgs
  }

  // Custom InputTypes
  /**
   * Auth_userCountOutputType without action
   */
  export type Auth_userCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Auth_userCountOutputType
     */
    select?: Auth_userCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Auth_userCountOutputType without action
   */
  export type Auth_userCountOutputTypeCountCore_testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: core_testWhereInput
  }


  /**
   * Models
   */

  /**
   * Model auth_user
   */

  export type AggregateAuth_user = {
    _count: Auth_userCountAggregateOutputType | null
    _avg: Auth_userAvgAggregateOutputType | null
    _sum: Auth_userSumAggregateOutputType | null
    _min: Auth_userMinAggregateOutputType | null
    _max: Auth_userMaxAggregateOutputType | null
  }

  export type Auth_userAvgAggregateOutputType = {
    id: number | null
  }

  export type Auth_userSumAggregateOutputType = {
    id: number | null
  }

  export type Auth_userMinAggregateOutputType = {
    id: number | null
    password: string | null
    last_login: Date | null
    is_superuser: boolean | null
    username: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_staff: boolean | null
    is_active: boolean | null
    date_joined: Date | null
  }

  export type Auth_userMaxAggregateOutputType = {
    id: number | null
    password: string | null
    last_login: Date | null
    is_superuser: boolean | null
    username: string | null
    first_name: string | null
    last_name: string | null
    email: string | null
    is_staff: boolean | null
    is_active: boolean | null
    date_joined: Date | null
  }

  export type Auth_userCountAggregateOutputType = {
    id: number
    password: number
    last_login: number
    is_superuser: number
    username: number
    first_name: number
    last_name: number
    email: number
    is_staff: number
    is_active: number
    date_joined: number
    _all: number
  }


  export type Auth_userAvgAggregateInputType = {
    id?: true
  }

  export type Auth_userSumAggregateInputType = {
    id?: true
  }

  export type Auth_userMinAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
  }

  export type Auth_userMaxAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
  }

  export type Auth_userCountAggregateInputType = {
    id?: true
    password?: true
    last_login?: true
    is_superuser?: true
    username?: true
    first_name?: true
    last_name?: true
    email?: true
    is_staff?: true
    is_active?: true
    date_joined?: true
    _all?: true
  }

  export type Auth_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_user to aggregate.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned auth_users
    **/
    _count?: true | Auth_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Auth_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Auth_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Auth_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Auth_userMaxAggregateInputType
  }

  export type GetAuth_userAggregateType<T extends Auth_userAggregateArgs> = {
        [P in keyof T & keyof AggregateAuth_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuth_user[P]>
      : GetScalarType<T[P], AggregateAuth_user[P]>
  }




  export type auth_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: auth_userWhereInput
    orderBy?: auth_userOrderByWithAggregationInput | auth_userOrderByWithAggregationInput[]
    by: Auth_userScalarFieldEnum[] | Auth_userScalarFieldEnum
    having?: auth_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Auth_userCountAggregateInputType | true
    _avg?: Auth_userAvgAggregateInputType
    _sum?: Auth_userSumAggregateInputType
    _min?: Auth_userMinAggregateInputType
    _max?: Auth_userMaxAggregateInputType
  }

  export type Auth_userGroupByOutputType = {
    id: number
    password: string
    last_login: Date | null
    is_superuser: boolean | null
    username: string
    first_name: string | null
    last_name: string | null
    email: string
    is_staff: boolean | null
    is_active: boolean | null
    date_joined: Date
    _count: Auth_userCountAggregateOutputType | null
    _avg: Auth_userAvgAggregateOutputType | null
    _sum: Auth_userSumAggregateOutputType | null
    _min: Auth_userMinAggregateOutputType | null
    _max: Auth_userMaxAggregateOutputType | null
  }

  type GetAuth_userGroupByPayload<T extends auth_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Auth_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Auth_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Auth_userGroupByOutputType[P]>
            : GetScalarType<T[P], Auth_userGroupByOutputType[P]>
        }
      >
    >


  export type auth_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
    core_settings?: boolean | auth_user$core_settingsArgs<ExtArgs>
    core_test?: boolean | auth_user$core_testArgs<ExtArgs>
    _count?: boolean | Auth_userCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auth_user"]>

  export type auth_userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
  }, ExtArgs["result"]["auth_user"]>

  export type auth_userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
  }, ExtArgs["result"]["auth_user"]>

  export type auth_userSelectScalar = {
    id?: boolean
    password?: boolean
    last_login?: boolean
    is_superuser?: boolean
    username?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    is_staff?: boolean
    is_active?: boolean
    date_joined?: boolean
  }

  export type auth_userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "password" | "last_login" | "is_superuser" | "username" | "first_name" | "last_name" | "email" | "is_staff" | "is_active" | "date_joined", ExtArgs["result"]["auth_user"]>
  export type auth_userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    core_settings?: boolean | auth_user$core_settingsArgs<ExtArgs>
    core_test?: boolean | auth_user$core_testArgs<ExtArgs>
    _count?: boolean | Auth_userCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type auth_userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type auth_userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $auth_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "auth_user"
    objects: {
      core_settings: Prisma.$core_settingsPayload<ExtArgs> | null
      core_test: Prisma.$core_testPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      password: string
      last_login: Date | null
      is_superuser: boolean | null
      username: string
      first_name: string | null
      last_name: string | null
      email: string
      is_staff: boolean | null
      is_active: boolean | null
      date_joined: Date
    }, ExtArgs["result"]["auth_user"]>
    composites: {}
  }

  type auth_userGetPayload<S extends boolean | null | undefined | auth_userDefaultArgs> = $Result.GetResult<Prisma.$auth_userPayload, S>

  type auth_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<auth_userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Auth_userCountAggregateInputType | true
    }

  export interface auth_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['auth_user'], meta: { name: 'auth_user' } }
    /**
     * Find zero or one Auth_user that matches the filter.
     * @param {auth_userFindUniqueArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends auth_userFindUniqueArgs>(args: SelectSubset<T, auth_userFindUniqueArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Auth_user that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {auth_userFindUniqueOrThrowArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends auth_userFindUniqueOrThrowArgs>(args: SelectSubset<T, auth_userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindFirstArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends auth_userFindFirstArgs>(args?: SelectSubset<T, auth_userFindFirstArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Auth_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindFirstOrThrowArgs} args - Arguments to find a Auth_user
     * @example
     * // Get one Auth_user
     * const auth_user = await prisma.auth_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends auth_userFindFirstOrThrowArgs>(args?: SelectSubset<T, auth_userFindFirstOrThrowArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Auth_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Auth_users
     * const auth_users = await prisma.auth_user.findMany()
     * 
     * // Get first 10 Auth_users
     * const auth_users = await prisma.auth_user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auth_userWithIdOnly = await prisma.auth_user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends auth_userFindManyArgs>(args?: SelectSubset<T, auth_userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Auth_user.
     * @param {auth_userCreateArgs} args - Arguments to create a Auth_user.
     * @example
     * // Create one Auth_user
     * const Auth_user = await prisma.auth_user.create({
     *   data: {
     *     // ... data to create a Auth_user
     *   }
     * })
     * 
     */
    create<T extends auth_userCreateArgs>(args: SelectSubset<T, auth_userCreateArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Auth_users.
     * @param {auth_userCreateManyArgs} args - Arguments to create many Auth_users.
     * @example
     * // Create many Auth_users
     * const auth_user = await prisma.auth_user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends auth_userCreateManyArgs>(args?: SelectSubset<T, auth_userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Auth_users and returns the data saved in the database.
     * @param {auth_userCreateManyAndReturnArgs} args - Arguments to create many Auth_users.
     * @example
     * // Create many Auth_users
     * const auth_user = await prisma.auth_user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Auth_users and only return the `id`
     * const auth_userWithIdOnly = await prisma.auth_user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends auth_userCreateManyAndReturnArgs>(args?: SelectSubset<T, auth_userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Auth_user.
     * @param {auth_userDeleteArgs} args - Arguments to delete one Auth_user.
     * @example
     * // Delete one Auth_user
     * const Auth_user = await prisma.auth_user.delete({
     *   where: {
     *     // ... filter to delete one Auth_user
     *   }
     * })
     * 
     */
    delete<T extends auth_userDeleteArgs>(args: SelectSubset<T, auth_userDeleteArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Auth_user.
     * @param {auth_userUpdateArgs} args - Arguments to update one Auth_user.
     * @example
     * // Update one Auth_user
     * const auth_user = await prisma.auth_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends auth_userUpdateArgs>(args: SelectSubset<T, auth_userUpdateArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Auth_users.
     * @param {auth_userDeleteManyArgs} args - Arguments to filter Auth_users to delete.
     * @example
     * // Delete a few Auth_users
     * const { count } = await prisma.auth_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends auth_userDeleteManyArgs>(args?: SelectSubset<T, auth_userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Auth_users
     * const auth_user = await prisma.auth_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends auth_userUpdateManyArgs>(args: SelectSubset<T, auth_userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Auth_users and returns the data updated in the database.
     * @param {auth_userUpdateManyAndReturnArgs} args - Arguments to update many Auth_users.
     * @example
     * // Update many Auth_users
     * const auth_user = await prisma.auth_user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Auth_users and only return the `id`
     * const auth_userWithIdOnly = await prisma.auth_user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends auth_userUpdateManyAndReturnArgs>(args: SelectSubset<T, auth_userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Auth_user.
     * @param {auth_userUpsertArgs} args - Arguments to update or create a Auth_user.
     * @example
     * // Update or create a Auth_user
     * const auth_user = await prisma.auth_user.upsert({
     *   create: {
     *     // ... data to create a Auth_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Auth_user we want to update
     *   }
     * })
     */
    upsert<T extends auth_userUpsertArgs>(args: SelectSubset<T, auth_userUpsertArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Auth_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userCountArgs} args - Arguments to filter Auth_users to count.
     * @example
     * // Count the number of Auth_users
     * const count = await prisma.auth_user.count({
     *   where: {
     *     // ... the filter for the Auth_users we want to count
     *   }
     * })
    **/
    count<T extends auth_userCountArgs>(
      args?: Subset<T, auth_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Auth_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Auth_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Auth_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Auth_userAggregateArgs>(args: Subset<T, Auth_userAggregateArgs>): Prisma.PrismaPromise<GetAuth_userAggregateType<T>>

    /**
     * Group by Auth_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {auth_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends auth_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: auth_userGroupByArgs['orderBy'] }
        : { orderBy?: auth_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, auth_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuth_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the auth_user model
   */
  readonly fields: auth_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for auth_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__auth_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    core_settings<T extends auth_user$core_settingsArgs<ExtArgs> = {}>(args?: Subset<T, auth_user$core_settingsArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    core_test<T extends auth_user$core_testArgs<ExtArgs> = {}>(args?: Subset<T, auth_user$core_testArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the auth_user model
   */
  interface auth_userFieldRefs {
    readonly id: FieldRef<"auth_user", 'Int'>
    readonly password: FieldRef<"auth_user", 'String'>
    readonly last_login: FieldRef<"auth_user", 'DateTime'>
    readonly is_superuser: FieldRef<"auth_user", 'Boolean'>
    readonly username: FieldRef<"auth_user", 'String'>
    readonly first_name: FieldRef<"auth_user", 'String'>
    readonly last_name: FieldRef<"auth_user", 'String'>
    readonly email: FieldRef<"auth_user", 'String'>
    readonly is_staff: FieldRef<"auth_user", 'Boolean'>
    readonly is_active: FieldRef<"auth_user", 'Boolean'>
    readonly date_joined: FieldRef<"auth_user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * auth_user findUnique
   */
  export type auth_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user findUniqueOrThrow
   */
  export type auth_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user findFirst
   */
  export type auth_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_users.
     */
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user findFirstOrThrow
   */
  export type auth_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_user to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of auth_users.
     */
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user findMany
   */
  export type auth_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter, which auth_users to fetch.
     */
    where?: auth_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of auth_users to fetch.
     */
    orderBy?: auth_userOrderByWithRelationInput | auth_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing auth_users.
     */
    cursor?: auth_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` auth_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` auth_users.
     */
    skip?: number
    distinct?: Auth_userScalarFieldEnum | Auth_userScalarFieldEnum[]
  }

  /**
   * auth_user create
   */
  export type auth_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * The data needed to create a auth_user.
     */
    data: XOR<auth_userCreateInput, auth_userUncheckedCreateInput>
  }

  /**
   * auth_user createMany
   */
  export type auth_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many auth_users.
     */
    data: auth_userCreateManyInput | auth_userCreateManyInput[]
  }

  /**
   * auth_user createManyAndReturn
   */
  export type auth_userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * The data used to create many auth_users.
     */
    data: auth_userCreateManyInput | auth_userCreateManyInput[]
  }

  /**
   * auth_user update
   */
  export type auth_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * The data needed to update a auth_user.
     */
    data: XOR<auth_userUpdateInput, auth_userUncheckedUpdateInput>
    /**
     * Choose, which auth_user to update.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user updateMany
   */
  export type auth_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update auth_users.
     */
    data: XOR<auth_userUpdateManyMutationInput, auth_userUncheckedUpdateManyInput>
    /**
     * Filter which auth_users to update
     */
    where?: auth_userWhereInput
    /**
     * Limit how many auth_users to update.
     */
    limit?: number
  }

  /**
   * auth_user updateManyAndReturn
   */
  export type auth_userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * The data used to update auth_users.
     */
    data: XOR<auth_userUpdateManyMutationInput, auth_userUncheckedUpdateManyInput>
    /**
     * Filter which auth_users to update
     */
    where?: auth_userWhereInput
    /**
     * Limit how many auth_users to update.
     */
    limit?: number
  }

  /**
   * auth_user upsert
   */
  export type auth_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * The filter to search for the auth_user to update in case it exists.
     */
    where: auth_userWhereUniqueInput
    /**
     * In case the auth_user found by the `where` argument doesn't exist, create a new auth_user with this data.
     */
    create: XOR<auth_userCreateInput, auth_userUncheckedCreateInput>
    /**
     * In case the auth_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<auth_userUpdateInput, auth_userUncheckedUpdateInput>
  }

  /**
   * auth_user delete
   */
  export type auth_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
    /**
     * Filter which auth_user to delete.
     */
    where: auth_userWhereUniqueInput
  }

  /**
   * auth_user deleteMany
   */
  export type auth_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which auth_users to delete
     */
    where?: auth_userWhereInput
    /**
     * Limit how many auth_users to delete.
     */
    limit?: number
  }

  /**
   * auth_user.core_settings
   */
  export type auth_user$core_settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    where?: core_settingsWhereInput
  }

  /**
   * auth_user.core_test
   */
  export type auth_user$core_testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    where?: core_testWhereInput
    orderBy?: core_testOrderByWithRelationInput | core_testOrderByWithRelationInput[]
    cursor?: core_testWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Core_testScalarFieldEnum | Core_testScalarFieldEnum[]
  }

  /**
   * auth_user without action
   */
  export type auth_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the auth_user
     */
    select?: auth_userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the auth_user
     */
    omit?: auth_userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: auth_userInclude<ExtArgs> | null
  }


  /**
   * Model core_settings
   */

  export type AggregateCore_settings = {
    _count: Core_settingsCountAggregateOutputType | null
    _avg: Core_settingsAvgAggregateOutputType | null
    _sum: Core_settingsSumAggregateOutputType | null
    _min: Core_settingsMinAggregateOutputType | null
    _max: Core_settingsMaxAggregateOutputType | null
  }

  export type Core_settingsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type Core_settingsSumAggregateOutputType = {
    id: bigint | null
    user_id: number | null
  }

  export type Core_settingsMinAggregateOutputType = {
    id: bigint | null
    theme: string | null
    font: string | null
    user_id: number | null
  }

  export type Core_settingsMaxAggregateOutputType = {
    id: bigint | null
    theme: string | null
    font: string | null
    user_id: number | null
  }

  export type Core_settingsCountAggregateOutputType = {
    id: number
    theme: number
    font: number
    user_id: number
    _all: number
  }


  export type Core_settingsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Core_settingsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type Core_settingsMinAggregateInputType = {
    id?: true
    theme?: true
    font?: true
    user_id?: true
  }

  export type Core_settingsMaxAggregateInputType = {
    id?: true
    theme?: true
    font?: true
    user_id?: true
  }

  export type Core_settingsCountAggregateInputType = {
    id?: true
    theme?: true
    font?: true
    user_id?: true
    _all?: true
  }

  export type Core_settingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which core_settings to aggregate.
     */
    where?: core_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of core_settings to fetch.
     */
    orderBy?: core_settingsOrderByWithRelationInput | core_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: core_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` core_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` core_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned core_settings
    **/
    _count?: true | Core_settingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Core_settingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Core_settingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Core_settingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Core_settingsMaxAggregateInputType
  }

  export type GetCore_settingsAggregateType<T extends Core_settingsAggregateArgs> = {
        [P in keyof T & keyof AggregateCore_settings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCore_settings[P]>
      : GetScalarType<T[P], AggregateCore_settings[P]>
  }




  export type core_settingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: core_settingsWhereInput
    orderBy?: core_settingsOrderByWithAggregationInput | core_settingsOrderByWithAggregationInput[]
    by: Core_settingsScalarFieldEnum[] | Core_settingsScalarFieldEnum
    having?: core_settingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Core_settingsCountAggregateInputType | true
    _avg?: Core_settingsAvgAggregateInputType
    _sum?: Core_settingsSumAggregateInputType
    _min?: Core_settingsMinAggregateInputType
    _max?: Core_settingsMaxAggregateInputType
  }

  export type Core_settingsGroupByOutputType = {
    id: bigint
    theme: string
    font: string
    user_id: number
    _count: Core_settingsCountAggregateOutputType | null
    _avg: Core_settingsAvgAggregateOutputType | null
    _sum: Core_settingsSumAggregateOutputType | null
    _min: Core_settingsMinAggregateOutputType | null
    _max: Core_settingsMaxAggregateOutputType | null
  }

  type GetCore_settingsGroupByPayload<T extends core_settingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Core_settingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Core_settingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Core_settingsGroupByOutputType[P]>
            : GetScalarType<T[P], Core_settingsGroupByOutputType[P]>
        }
      >
    >


  export type core_settingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    font?: boolean
    user_id?: boolean
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["core_settings"]>

  export type core_settingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    font?: boolean
    user_id?: boolean
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["core_settings"]>

  export type core_settingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    theme?: boolean
    font?: boolean
    user_id?: boolean
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["core_settings"]>

  export type core_settingsSelectScalar = {
    id?: boolean
    theme?: boolean
    font?: boolean
    user_id?: boolean
  }

  export type core_settingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "theme" | "font" | "user_id", ExtArgs["result"]["core_settings"]>
  export type core_settingsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type core_settingsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type core_settingsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }

  export type $core_settingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "core_settings"
    objects: {
      auth_user: Prisma.$auth_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      theme: string
      font: string
      user_id: number
    }, ExtArgs["result"]["core_settings"]>
    composites: {}
  }

  type core_settingsGetPayload<S extends boolean | null | undefined | core_settingsDefaultArgs> = $Result.GetResult<Prisma.$core_settingsPayload, S>

  type core_settingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<core_settingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Core_settingsCountAggregateInputType | true
    }

  export interface core_settingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['core_settings'], meta: { name: 'core_settings' } }
    /**
     * Find zero or one Core_settings that matches the filter.
     * @param {core_settingsFindUniqueArgs} args - Arguments to find a Core_settings
     * @example
     * // Get one Core_settings
     * const core_settings = await prisma.core_settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends core_settingsFindUniqueArgs>(args: SelectSubset<T, core_settingsFindUniqueArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Core_settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {core_settingsFindUniqueOrThrowArgs} args - Arguments to find a Core_settings
     * @example
     * // Get one Core_settings
     * const core_settings = await prisma.core_settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends core_settingsFindUniqueOrThrowArgs>(args: SelectSubset<T, core_settingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Core_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_settingsFindFirstArgs} args - Arguments to find a Core_settings
     * @example
     * // Get one Core_settings
     * const core_settings = await prisma.core_settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends core_settingsFindFirstArgs>(args?: SelectSubset<T, core_settingsFindFirstArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Core_settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_settingsFindFirstOrThrowArgs} args - Arguments to find a Core_settings
     * @example
     * // Get one Core_settings
     * const core_settings = await prisma.core_settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends core_settingsFindFirstOrThrowArgs>(args?: SelectSubset<T, core_settingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Core_settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_settingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Core_settings
     * const core_settings = await prisma.core_settings.findMany()
     * 
     * // Get first 10 Core_settings
     * const core_settings = await prisma.core_settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const core_settingsWithIdOnly = await prisma.core_settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends core_settingsFindManyArgs>(args?: SelectSubset<T, core_settingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Core_settings.
     * @param {core_settingsCreateArgs} args - Arguments to create a Core_settings.
     * @example
     * // Create one Core_settings
     * const Core_settings = await prisma.core_settings.create({
     *   data: {
     *     // ... data to create a Core_settings
     *   }
     * })
     * 
     */
    create<T extends core_settingsCreateArgs>(args: SelectSubset<T, core_settingsCreateArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Core_settings.
     * @param {core_settingsCreateManyArgs} args - Arguments to create many Core_settings.
     * @example
     * // Create many Core_settings
     * const core_settings = await prisma.core_settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends core_settingsCreateManyArgs>(args?: SelectSubset<T, core_settingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Core_settings and returns the data saved in the database.
     * @param {core_settingsCreateManyAndReturnArgs} args - Arguments to create many Core_settings.
     * @example
     * // Create many Core_settings
     * const core_settings = await prisma.core_settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Core_settings and only return the `id`
     * const core_settingsWithIdOnly = await prisma.core_settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends core_settingsCreateManyAndReturnArgs>(args?: SelectSubset<T, core_settingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Core_settings.
     * @param {core_settingsDeleteArgs} args - Arguments to delete one Core_settings.
     * @example
     * // Delete one Core_settings
     * const Core_settings = await prisma.core_settings.delete({
     *   where: {
     *     // ... filter to delete one Core_settings
     *   }
     * })
     * 
     */
    delete<T extends core_settingsDeleteArgs>(args: SelectSubset<T, core_settingsDeleteArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Core_settings.
     * @param {core_settingsUpdateArgs} args - Arguments to update one Core_settings.
     * @example
     * // Update one Core_settings
     * const core_settings = await prisma.core_settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends core_settingsUpdateArgs>(args: SelectSubset<T, core_settingsUpdateArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Core_settings.
     * @param {core_settingsDeleteManyArgs} args - Arguments to filter Core_settings to delete.
     * @example
     * // Delete a few Core_settings
     * const { count } = await prisma.core_settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends core_settingsDeleteManyArgs>(args?: SelectSubset<T, core_settingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Core_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_settingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Core_settings
     * const core_settings = await prisma.core_settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends core_settingsUpdateManyArgs>(args: SelectSubset<T, core_settingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Core_settings and returns the data updated in the database.
     * @param {core_settingsUpdateManyAndReturnArgs} args - Arguments to update many Core_settings.
     * @example
     * // Update many Core_settings
     * const core_settings = await prisma.core_settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Core_settings and only return the `id`
     * const core_settingsWithIdOnly = await prisma.core_settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends core_settingsUpdateManyAndReturnArgs>(args: SelectSubset<T, core_settingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Core_settings.
     * @param {core_settingsUpsertArgs} args - Arguments to update or create a Core_settings.
     * @example
     * // Update or create a Core_settings
     * const core_settings = await prisma.core_settings.upsert({
     *   create: {
     *     // ... data to create a Core_settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Core_settings we want to update
     *   }
     * })
     */
    upsert<T extends core_settingsUpsertArgs>(args: SelectSubset<T, core_settingsUpsertArgs<ExtArgs>>): Prisma__core_settingsClient<$Result.GetResult<Prisma.$core_settingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Core_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_settingsCountArgs} args - Arguments to filter Core_settings to count.
     * @example
     * // Count the number of Core_settings
     * const count = await prisma.core_settings.count({
     *   where: {
     *     // ... the filter for the Core_settings we want to count
     *   }
     * })
    **/
    count<T extends core_settingsCountArgs>(
      args?: Subset<T, core_settingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Core_settingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Core_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Core_settingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Core_settingsAggregateArgs>(args: Subset<T, Core_settingsAggregateArgs>): Prisma.PrismaPromise<GetCore_settingsAggregateType<T>>

    /**
     * Group by Core_settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_settingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends core_settingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: core_settingsGroupByArgs['orderBy'] }
        : { orderBy?: core_settingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, core_settingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCore_settingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the core_settings model
   */
  readonly fields: core_settingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for core_settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__core_settingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_user<T extends auth_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_userDefaultArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the core_settings model
   */
  interface core_settingsFieldRefs {
    readonly id: FieldRef<"core_settings", 'BigInt'>
    readonly theme: FieldRef<"core_settings", 'String'>
    readonly font: FieldRef<"core_settings", 'String'>
    readonly user_id: FieldRef<"core_settings", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * core_settings findUnique
   */
  export type core_settingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * Filter, which core_settings to fetch.
     */
    where: core_settingsWhereUniqueInput
  }

  /**
   * core_settings findUniqueOrThrow
   */
  export type core_settingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * Filter, which core_settings to fetch.
     */
    where: core_settingsWhereUniqueInput
  }

  /**
   * core_settings findFirst
   */
  export type core_settingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * Filter, which core_settings to fetch.
     */
    where?: core_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of core_settings to fetch.
     */
    orderBy?: core_settingsOrderByWithRelationInput | core_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for core_settings.
     */
    cursor?: core_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` core_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` core_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of core_settings.
     */
    distinct?: Core_settingsScalarFieldEnum | Core_settingsScalarFieldEnum[]
  }

  /**
   * core_settings findFirstOrThrow
   */
  export type core_settingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * Filter, which core_settings to fetch.
     */
    where?: core_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of core_settings to fetch.
     */
    orderBy?: core_settingsOrderByWithRelationInput | core_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for core_settings.
     */
    cursor?: core_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` core_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` core_settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of core_settings.
     */
    distinct?: Core_settingsScalarFieldEnum | Core_settingsScalarFieldEnum[]
  }

  /**
   * core_settings findMany
   */
  export type core_settingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * Filter, which core_settings to fetch.
     */
    where?: core_settingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of core_settings to fetch.
     */
    orderBy?: core_settingsOrderByWithRelationInput | core_settingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing core_settings.
     */
    cursor?: core_settingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` core_settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` core_settings.
     */
    skip?: number
    distinct?: Core_settingsScalarFieldEnum | Core_settingsScalarFieldEnum[]
  }

  /**
   * core_settings create
   */
  export type core_settingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * The data needed to create a core_settings.
     */
    data: XOR<core_settingsCreateInput, core_settingsUncheckedCreateInput>
  }

  /**
   * core_settings createMany
   */
  export type core_settingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many core_settings.
     */
    data: core_settingsCreateManyInput | core_settingsCreateManyInput[]
  }

  /**
   * core_settings createManyAndReturn
   */
  export type core_settingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * The data used to create many core_settings.
     */
    data: core_settingsCreateManyInput | core_settingsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * core_settings update
   */
  export type core_settingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * The data needed to update a core_settings.
     */
    data: XOR<core_settingsUpdateInput, core_settingsUncheckedUpdateInput>
    /**
     * Choose, which core_settings to update.
     */
    where: core_settingsWhereUniqueInput
  }

  /**
   * core_settings updateMany
   */
  export type core_settingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update core_settings.
     */
    data: XOR<core_settingsUpdateManyMutationInput, core_settingsUncheckedUpdateManyInput>
    /**
     * Filter which core_settings to update
     */
    where?: core_settingsWhereInput
    /**
     * Limit how many core_settings to update.
     */
    limit?: number
  }

  /**
   * core_settings updateManyAndReturn
   */
  export type core_settingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * The data used to update core_settings.
     */
    data: XOR<core_settingsUpdateManyMutationInput, core_settingsUncheckedUpdateManyInput>
    /**
     * Filter which core_settings to update
     */
    where?: core_settingsWhereInput
    /**
     * Limit how many core_settings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * core_settings upsert
   */
  export type core_settingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * The filter to search for the core_settings to update in case it exists.
     */
    where: core_settingsWhereUniqueInput
    /**
     * In case the core_settings found by the `where` argument doesn't exist, create a new core_settings with this data.
     */
    create: XOR<core_settingsCreateInput, core_settingsUncheckedCreateInput>
    /**
     * In case the core_settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<core_settingsUpdateInput, core_settingsUncheckedUpdateInput>
  }

  /**
   * core_settings delete
   */
  export type core_settingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
    /**
     * Filter which core_settings to delete.
     */
    where: core_settingsWhereUniqueInput
  }

  /**
   * core_settings deleteMany
   */
  export type core_settingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which core_settings to delete
     */
    where?: core_settingsWhereInput
    /**
     * Limit how many core_settings to delete.
     */
    limit?: number
  }

  /**
   * core_settings without action
   */
  export type core_settingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_settings
     */
    select?: core_settingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_settings
     */
    omit?: core_settingsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_settingsInclude<ExtArgs> | null
  }


  /**
   * Model core_test
   */

  export type AggregateCore_test = {
    _count: Core_testCountAggregateOutputType | null
    _avg: Core_testAvgAggregateOutputType | null
    _sum: Core_testSumAggregateOutputType | null
    _min: Core_testMinAggregateOutputType | null
    _max: Core_testMaxAggregateOutputType | null
  }

  export type Core_testAvgAggregateOutputType = {
    id: number | null
    qpm: number | null
    raw: number | null
    accuracy: number | null
    difficulty: number | null
    user_id: number | null
    number: number | null
    time: number | null
  }

  export type Core_testSumAggregateOutputType = {
    id: bigint | null
    qpm: number | null
    raw: number | null
    accuracy: number | null
    difficulty: number | null
    user_id: number | null
    number: number | null
    time: number | null
  }

  export type Core_testMinAggregateOutputType = {
    id: bigint | null
    qpm: number | null
    raw: number | null
    accuracy: number | null
    mode: string | null
    difficulty: number | null
    creation: Date | null
    user_id: number | null
    number: number | null
    time: number | null
  }

  export type Core_testMaxAggregateOutputType = {
    id: bigint | null
    qpm: number | null
    raw: number | null
    accuracy: number | null
    mode: string | null
    difficulty: number | null
    creation: Date | null
    user_id: number | null
    number: number | null
    time: number | null
  }

  export type Core_testCountAggregateOutputType = {
    id: number
    qpm: number
    raw: number
    accuracy: number
    mode: number
    difficulty: number
    creation: number
    user_id: number
    number: number
    time: number
    _all: number
  }


  export type Core_testAvgAggregateInputType = {
    id?: true
    qpm?: true
    raw?: true
    accuracy?: true
    difficulty?: true
    user_id?: true
    number?: true
    time?: true
  }

  export type Core_testSumAggregateInputType = {
    id?: true
    qpm?: true
    raw?: true
    accuracy?: true
    difficulty?: true
    user_id?: true
    number?: true
    time?: true
  }

  export type Core_testMinAggregateInputType = {
    id?: true
    qpm?: true
    raw?: true
    accuracy?: true
    mode?: true
    difficulty?: true
    creation?: true
    user_id?: true
    number?: true
    time?: true
  }

  export type Core_testMaxAggregateInputType = {
    id?: true
    qpm?: true
    raw?: true
    accuracy?: true
    mode?: true
    difficulty?: true
    creation?: true
    user_id?: true
    number?: true
    time?: true
  }

  export type Core_testCountAggregateInputType = {
    id?: true
    qpm?: true
    raw?: true
    accuracy?: true
    mode?: true
    difficulty?: true
    creation?: true
    user_id?: true
    number?: true
    time?: true
    _all?: true
  }

  export type Core_testAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which core_test to aggregate.
     */
    where?: core_testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of core_tests to fetch.
     */
    orderBy?: core_testOrderByWithRelationInput | core_testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: core_testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` core_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` core_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned core_tests
    **/
    _count?: true | Core_testCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Core_testAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Core_testSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Core_testMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Core_testMaxAggregateInputType
  }

  export type GetCore_testAggregateType<T extends Core_testAggregateArgs> = {
        [P in keyof T & keyof AggregateCore_test]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCore_test[P]>
      : GetScalarType<T[P], AggregateCore_test[P]>
  }




  export type core_testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: core_testWhereInput
    orderBy?: core_testOrderByWithAggregationInput | core_testOrderByWithAggregationInput[]
    by: Core_testScalarFieldEnum[] | Core_testScalarFieldEnum
    having?: core_testScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Core_testCountAggregateInputType | true
    _avg?: Core_testAvgAggregateInputType
    _sum?: Core_testSumAggregateInputType
    _min?: Core_testMinAggregateInputType
    _max?: Core_testMaxAggregateInputType
  }

  export type Core_testGroupByOutputType = {
    id: bigint
    qpm: number
    raw: number
    accuracy: number
    mode: string
    difficulty: number
    creation: Date
    user_id: number
    number: number
    time: number
    _count: Core_testCountAggregateOutputType | null
    _avg: Core_testAvgAggregateOutputType | null
    _sum: Core_testSumAggregateOutputType | null
    _min: Core_testMinAggregateOutputType | null
    _max: Core_testMaxAggregateOutputType | null
  }

  type GetCore_testGroupByPayload<T extends core_testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Core_testGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Core_testGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Core_testGroupByOutputType[P]>
            : GetScalarType<T[P], Core_testGroupByOutputType[P]>
        }
      >
    >


  export type core_testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qpm?: boolean
    raw?: boolean
    accuracy?: boolean
    mode?: boolean
    difficulty?: boolean
    creation?: boolean
    user_id?: boolean
    number?: boolean
    time?: boolean
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["core_test"]>

  export type core_testSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qpm?: boolean
    raw?: boolean
    accuracy?: boolean
    mode?: boolean
    difficulty?: boolean
    creation?: boolean
    user_id?: boolean
    number?: boolean
    time?: boolean
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["core_test"]>

  export type core_testSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    qpm?: boolean
    raw?: boolean
    accuracy?: boolean
    mode?: boolean
    difficulty?: boolean
    creation?: boolean
    user_id?: boolean
    number?: boolean
    time?: boolean
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["core_test"]>

  export type core_testSelectScalar = {
    id?: boolean
    qpm?: boolean
    raw?: boolean
    accuracy?: boolean
    mode?: boolean
    difficulty?: boolean
    creation?: boolean
    user_id?: boolean
    number?: boolean
    time?: boolean
  }

  export type core_testOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "qpm" | "raw" | "accuracy" | "mode" | "difficulty" | "creation" | "user_id" | "number" | "time", ExtArgs["result"]["core_test"]>
  export type core_testInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type core_testIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }
  export type core_testIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    auth_user?: boolean | auth_userDefaultArgs<ExtArgs>
  }

  export type $core_testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "core_test"
    objects: {
      auth_user: Prisma.$auth_userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      qpm: number
      raw: number
      accuracy: number
      mode: string
      difficulty: number
      creation: Date
      user_id: number
      number: number
      time: number
    }, ExtArgs["result"]["core_test"]>
    composites: {}
  }

  type core_testGetPayload<S extends boolean | null | undefined | core_testDefaultArgs> = $Result.GetResult<Prisma.$core_testPayload, S>

  type core_testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<core_testFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Core_testCountAggregateInputType | true
    }

  export interface core_testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['core_test'], meta: { name: 'core_test' } }
    /**
     * Find zero or one Core_test that matches the filter.
     * @param {core_testFindUniqueArgs} args - Arguments to find a Core_test
     * @example
     * // Get one Core_test
     * const core_test = await prisma.core_test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends core_testFindUniqueArgs>(args: SelectSubset<T, core_testFindUniqueArgs<ExtArgs>>): Prisma__core_testClient<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Core_test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {core_testFindUniqueOrThrowArgs} args - Arguments to find a Core_test
     * @example
     * // Get one Core_test
     * const core_test = await prisma.core_test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends core_testFindUniqueOrThrowArgs>(args: SelectSubset<T, core_testFindUniqueOrThrowArgs<ExtArgs>>): Prisma__core_testClient<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Core_test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_testFindFirstArgs} args - Arguments to find a Core_test
     * @example
     * // Get one Core_test
     * const core_test = await prisma.core_test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends core_testFindFirstArgs>(args?: SelectSubset<T, core_testFindFirstArgs<ExtArgs>>): Prisma__core_testClient<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Core_test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_testFindFirstOrThrowArgs} args - Arguments to find a Core_test
     * @example
     * // Get one Core_test
     * const core_test = await prisma.core_test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends core_testFindFirstOrThrowArgs>(args?: SelectSubset<T, core_testFindFirstOrThrowArgs<ExtArgs>>): Prisma__core_testClient<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Core_tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_testFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Core_tests
     * const core_tests = await prisma.core_test.findMany()
     * 
     * // Get first 10 Core_tests
     * const core_tests = await prisma.core_test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const core_testWithIdOnly = await prisma.core_test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends core_testFindManyArgs>(args?: SelectSubset<T, core_testFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Core_test.
     * @param {core_testCreateArgs} args - Arguments to create a Core_test.
     * @example
     * // Create one Core_test
     * const Core_test = await prisma.core_test.create({
     *   data: {
     *     // ... data to create a Core_test
     *   }
     * })
     * 
     */
    create<T extends core_testCreateArgs>(args: SelectSubset<T, core_testCreateArgs<ExtArgs>>): Prisma__core_testClient<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Core_tests.
     * @param {core_testCreateManyArgs} args - Arguments to create many Core_tests.
     * @example
     * // Create many Core_tests
     * const core_test = await prisma.core_test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends core_testCreateManyArgs>(args?: SelectSubset<T, core_testCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Core_tests and returns the data saved in the database.
     * @param {core_testCreateManyAndReturnArgs} args - Arguments to create many Core_tests.
     * @example
     * // Create many Core_tests
     * const core_test = await prisma.core_test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Core_tests and only return the `id`
     * const core_testWithIdOnly = await prisma.core_test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends core_testCreateManyAndReturnArgs>(args?: SelectSubset<T, core_testCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Core_test.
     * @param {core_testDeleteArgs} args - Arguments to delete one Core_test.
     * @example
     * // Delete one Core_test
     * const Core_test = await prisma.core_test.delete({
     *   where: {
     *     // ... filter to delete one Core_test
     *   }
     * })
     * 
     */
    delete<T extends core_testDeleteArgs>(args: SelectSubset<T, core_testDeleteArgs<ExtArgs>>): Prisma__core_testClient<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Core_test.
     * @param {core_testUpdateArgs} args - Arguments to update one Core_test.
     * @example
     * // Update one Core_test
     * const core_test = await prisma.core_test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends core_testUpdateArgs>(args: SelectSubset<T, core_testUpdateArgs<ExtArgs>>): Prisma__core_testClient<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Core_tests.
     * @param {core_testDeleteManyArgs} args - Arguments to filter Core_tests to delete.
     * @example
     * // Delete a few Core_tests
     * const { count } = await prisma.core_test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends core_testDeleteManyArgs>(args?: SelectSubset<T, core_testDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Core_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Core_tests
     * const core_test = await prisma.core_test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends core_testUpdateManyArgs>(args: SelectSubset<T, core_testUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Core_tests and returns the data updated in the database.
     * @param {core_testUpdateManyAndReturnArgs} args - Arguments to update many Core_tests.
     * @example
     * // Update many Core_tests
     * const core_test = await prisma.core_test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Core_tests and only return the `id`
     * const core_testWithIdOnly = await prisma.core_test.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends core_testUpdateManyAndReturnArgs>(args: SelectSubset<T, core_testUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Core_test.
     * @param {core_testUpsertArgs} args - Arguments to update or create a Core_test.
     * @example
     * // Update or create a Core_test
     * const core_test = await prisma.core_test.upsert({
     *   create: {
     *     // ... data to create a Core_test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Core_test we want to update
     *   }
     * })
     */
    upsert<T extends core_testUpsertArgs>(args: SelectSubset<T, core_testUpsertArgs<ExtArgs>>): Prisma__core_testClient<$Result.GetResult<Prisma.$core_testPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Core_tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_testCountArgs} args - Arguments to filter Core_tests to count.
     * @example
     * // Count the number of Core_tests
     * const count = await prisma.core_test.count({
     *   where: {
     *     // ... the filter for the Core_tests we want to count
     *   }
     * })
    **/
    count<T extends core_testCountArgs>(
      args?: Subset<T, core_testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Core_testCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Core_test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Core_testAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Core_testAggregateArgs>(args: Subset<T, Core_testAggregateArgs>): Prisma.PrismaPromise<GetCore_testAggregateType<T>>

    /**
     * Group by Core_test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {core_testGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends core_testGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: core_testGroupByArgs['orderBy'] }
        : { orderBy?: core_testGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, core_testGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCore_testGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the core_test model
   */
  readonly fields: core_testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for core_test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__core_testClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    auth_user<T extends auth_userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, auth_userDefaultArgs<ExtArgs>>): Prisma__auth_userClient<$Result.GetResult<Prisma.$auth_userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the core_test model
   */
  interface core_testFieldRefs {
    readonly id: FieldRef<"core_test", 'BigInt'>
    readonly qpm: FieldRef<"core_test", 'Float'>
    readonly raw: FieldRef<"core_test", 'Float'>
    readonly accuracy: FieldRef<"core_test", 'Int'>
    readonly mode: FieldRef<"core_test", 'String'>
    readonly difficulty: FieldRef<"core_test", 'Int'>
    readonly creation: FieldRef<"core_test", 'DateTime'>
    readonly user_id: FieldRef<"core_test", 'Int'>
    readonly number: FieldRef<"core_test", 'Int'>
    readonly time: FieldRef<"core_test", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * core_test findUnique
   */
  export type core_testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * Filter, which core_test to fetch.
     */
    where: core_testWhereUniqueInput
  }

  /**
   * core_test findUniqueOrThrow
   */
  export type core_testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * Filter, which core_test to fetch.
     */
    where: core_testWhereUniqueInput
  }

  /**
   * core_test findFirst
   */
  export type core_testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * Filter, which core_test to fetch.
     */
    where?: core_testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of core_tests to fetch.
     */
    orderBy?: core_testOrderByWithRelationInput | core_testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for core_tests.
     */
    cursor?: core_testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` core_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` core_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of core_tests.
     */
    distinct?: Core_testScalarFieldEnum | Core_testScalarFieldEnum[]
  }

  /**
   * core_test findFirstOrThrow
   */
  export type core_testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * Filter, which core_test to fetch.
     */
    where?: core_testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of core_tests to fetch.
     */
    orderBy?: core_testOrderByWithRelationInput | core_testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for core_tests.
     */
    cursor?: core_testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` core_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` core_tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of core_tests.
     */
    distinct?: Core_testScalarFieldEnum | Core_testScalarFieldEnum[]
  }

  /**
   * core_test findMany
   */
  export type core_testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * Filter, which core_tests to fetch.
     */
    where?: core_testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of core_tests to fetch.
     */
    orderBy?: core_testOrderByWithRelationInput | core_testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing core_tests.
     */
    cursor?: core_testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` core_tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` core_tests.
     */
    skip?: number
    distinct?: Core_testScalarFieldEnum | Core_testScalarFieldEnum[]
  }

  /**
   * core_test create
   */
  export type core_testCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * The data needed to create a core_test.
     */
    data: XOR<core_testCreateInput, core_testUncheckedCreateInput>
  }

  /**
   * core_test createMany
   */
  export type core_testCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many core_tests.
     */
    data: core_testCreateManyInput | core_testCreateManyInput[]
  }

  /**
   * core_test createManyAndReturn
   */
  export type core_testCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * The data used to create many core_tests.
     */
    data: core_testCreateManyInput | core_testCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * core_test update
   */
  export type core_testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * The data needed to update a core_test.
     */
    data: XOR<core_testUpdateInput, core_testUncheckedUpdateInput>
    /**
     * Choose, which core_test to update.
     */
    where: core_testWhereUniqueInput
  }

  /**
   * core_test updateMany
   */
  export type core_testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update core_tests.
     */
    data: XOR<core_testUpdateManyMutationInput, core_testUncheckedUpdateManyInput>
    /**
     * Filter which core_tests to update
     */
    where?: core_testWhereInput
    /**
     * Limit how many core_tests to update.
     */
    limit?: number
  }

  /**
   * core_test updateManyAndReturn
   */
  export type core_testUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * The data used to update core_tests.
     */
    data: XOR<core_testUpdateManyMutationInput, core_testUncheckedUpdateManyInput>
    /**
     * Filter which core_tests to update
     */
    where?: core_testWhereInput
    /**
     * Limit how many core_tests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * core_test upsert
   */
  export type core_testUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * The filter to search for the core_test to update in case it exists.
     */
    where: core_testWhereUniqueInput
    /**
     * In case the core_test found by the `where` argument doesn't exist, create a new core_test with this data.
     */
    create: XOR<core_testCreateInput, core_testUncheckedCreateInput>
    /**
     * In case the core_test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<core_testUpdateInput, core_testUncheckedUpdateInput>
  }

  /**
   * core_test delete
   */
  export type core_testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
    /**
     * Filter which core_test to delete.
     */
    where: core_testWhereUniqueInput
  }

  /**
   * core_test deleteMany
   */
  export type core_testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which core_tests to delete
     */
    where?: core_testWhereInput
    /**
     * Limit how many core_tests to delete.
     */
    limit?: number
  }

  /**
   * core_test without action
   */
  export type core_testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the core_test
     */
    select?: core_testSelect<ExtArgs> | null
    /**
     * Omit specific fields from the core_test
     */
    omit?: core_testOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: core_testInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Auth_userScalarFieldEnum: {
    id: 'id',
    password: 'password',
    last_login: 'last_login',
    is_superuser: 'is_superuser',
    username: 'username',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    is_staff: 'is_staff',
    is_active: 'is_active',
    date_joined: 'date_joined'
  };

  export type Auth_userScalarFieldEnum = (typeof Auth_userScalarFieldEnum)[keyof typeof Auth_userScalarFieldEnum]


  export const Core_settingsScalarFieldEnum: {
    id: 'id',
    theme: 'theme',
    font: 'font',
    user_id: 'user_id'
  };

  export type Core_settingsScalarFieldEnum = (typeof Core_settingsScalarFieldEnum)[keyof typeof Core_settingsScalarFieldEnum]


  export const Core_testScalarFieldEnum: {
    id: 'id',
    qpm: 'qpm',
    raw: 'raw',
    accuracy: 'accuracy',
    mode: 'mode',
    difficulty: 'difficulty',
    creation: 'creation',
    user_id: 'user_id',
    number: 'number',
    time: 'time'
  };

  export type Core_testScalarFieldEnum = (typeof Core_testScalarFieldEnum)[keyof typeof Core_testScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type auth_userWhereInput = {
    AND?: auth_userWhereInput | auth_userWhereInput[]
    OR?: auth_userWhereInput[]
    NOT?: auth_userWhereInput | auth_userWhereInput[]
    id?: IntFilter<"auth_user"> | number
    password?: StringFilter<"auth_user"> | string
    last_login?: DateTimeNullableFilter<"auth_user"> | Date | string | null
    is_superuser?: BoolNullableFilter<"auth_user"> | boolean | null
    username?: StringFilter<"auth_user"> | string
    first_name?: StringNullableFilter<"auth_user"> | string | null
    last_name?: StringNullableFilter<"auth_user"> | string | null
    email?: StringFilter<"auth_user"> | string
    is_staff?: BoolNullableFilter<"auth_user"> | boolean | null
    is_active?: BoolNullableFilter<"auth_user"> | boolean | null
    date_joined?: DateTimeFilter<"auth_user"> | Date | string
    core_settings?: XOR<Core_settingsNullableScalarRelationFilter, core_settingsWhereInput> | null
    core_test?: Core_testListRelationFilter
  }

  export type auth_userOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrderInput | SortOrder
    is_superuser?: SortOrderInput | SortOrder
    username?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    is_staff?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    date_joined?: SortOrder
    core_settings?: core_settingsOrderByWithRelationInput
    core_test?: core_testOrderByRelationAggregateInput
  }

  export type auth_userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: auth_userWhereInput | auth_userWhereInput[]
    OR?: auth_userWhereInput[]
    NOT?: auth_userWhereInput | auth_userWhereInput[]
    password?: StringFilter<"auth_user"> | string
    last_login?: DateTimeNullableFilter<"auth_user"> | Date | string | null
    is_superuser?: BoolNullableFilter<"auth_user"> | boolean | null
    first_name?: StringNullableFilter<"auth_user"> | string | null
    last_name?: StringNullableFilter<"auth_user"> | string | null
    is_staff?: BoolNullableFilter<"auth_user"> | boolean | null
    is_active?: BoolNullableFilter<"auth_user"> | boolean | null
    date_joined?: DateTimeFilter<"auth_user"> | Date | string
    core_settings?: XOR<Core_settingsNullableScalarRelationFilter, core_settingsWhereInput> | null
    core_test?: Core_testListRelationFilter
  }, "id" | "username" | "email">

  export type auth_userOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrderInput | SortOrder
    is_superuser?: SortOrderInput | SortOrder
    username?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    is_staff?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    date_joined?: SortOrder
    _count?: auth_userCountOrderByAggregateInput
    _avg?: auth_userAvgOrderByAggregateInput
    _max?: auth_userMaxOrderByAggregateInput
    _min?: auth_userMinOrderByAggregateInput
    _sum?: auth_userSumOrderByAggregateInput
  }

  export type auth_userScalarWhereWithAggregatesInput = {
    AND?: auth_userScalarWhereWithAggregatesInput | auth_userScalarWhereWithAggregatesInput[]
    OR?: auth_userScalarWhereWithAggregatesInput[]
    NOT?: auth_userScalarWhereWithAggregatesInput | auth_userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"auth_user"> | number
    password?: StringWithAggregatesFilter<"auth_user"> | string
    last_login?: DateTimeNullableWithAggregatesFilter<"auth_user"> | Date | string | null
    is_superuser?: BoolNullableWithAggregatesFilter<"auth_user"> | boolean | null
    username?: StringWithAggregatesFilter<"auth_user"> | string
    first_name?: StringNullableWithAggregatesFilter<"auth_user"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"auth_user"> | string | null
    email?: StringWithAggregatesFilter<"auth_user"> | string
    is_staff?: BoolNullableWithAggregatesFilter<"auth_user"> | boolean | null
    is_active?: BoolNullableWithAggregatesFilter<"auth_user"> | boolean | null
    date_joined?: DateTimeWithAggregatesFilter<"auth_user"> | Date | string
  }

  export type core_settingsWhereInput = {
    AND?: core_settingsWhereInput | core_settingsWhereInput[]
    OR?: core_settingsWhereInput[]
    NOT?: core_settingsWhereInput | core_settingsWhereInput[]
    id?: BigIntFilter<"core_settings"> | bigint | number
    theme?: StringFilter<"core_settings"> | string
    font?: StringFilter<"core_settings"> | string
    user_id?: IntFilter<"core_settings"> | number
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }

  export type core_settingsOrderByWithRelationInput = {
    id?: SortOrder
    theme?: SortOrder
    font?: SortOrder
    user_id?: SortOrder
    auth_user?: auth_userOrderByWithRelationInput
  }

  export type core_settingsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    user_id?: number
    AND?: core_settingsWhereInput | core_settingsWhereInput[]
    OR?: core_settingsWhereInput[]
    NOT?: core_settingsWhereInput | core_settingsWhereInput[]
    theme?: StringFilter<"core_settings"> | string
    font?: StringFilter<"core_settings"> | string
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }, "id" | "user_id">

  export type core_settingsOrderByWithAggregationInput = {
    id?: SortOrder
    theme?: SortOrder
    font?: SortOrder
    user_id?: SortOrder
    _count?: core_settingsCountOrderByAggregateInput
    _avg?: core_settingsAvgOrderByAggregateInput
    _max?: core_settingsMaxOrderByAggregateInput
    _min?: core_settingsMinOrderByAggregateInput
    _sum?: core_settingsSumOrderByAggregateInput
  }

  export type core_settingsScalarWhereWithAggregatesInput = {
    AND?: core_settingsScalarWhereWithAggregatesInput | core_settingsScalarWhereWithAggregatesInput[]
    OR?: core_settingsScalarWhereWithAggregatesInput[]
    NOT?: core_settingsScalarWhereWithAggregatesInput | core_settingsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"core_settings"> | bigint | number
    theme?: StringWithAggregatesFilter<"core_settings"> | string
    font?: StringWithAggregatesFilter<"core_settings"> | string
    user_id?: IntWithAggregatesFilter<"core_settings"> | number
  }

  export type core_testWhereInput = {
    AND?: core_testWhereInput | core_testWhereInput[]
    OR?: core_testWhereInput[]
    NOT?: core_testWhereInput | core_testWhereInput[]
    id?: BigIntFilter<"core_test"> | bigint | number
    qpm?: FloatFilter<"core_test"> | number
    raw?: FloatFilter<"core_test"> | number
    accuracy?: IntFilter<"core_test"> | number
    mode?: StringFilter<"core_test"> | string
    difficulty?: IntFilter<"core_test"> | number
    creation?: DateTimeFilter<"core_test"> | Date | string
    user_id?: IntFilter<"core_test"> | number
    number?: IntFilter<"core_test"> | number
    time?: IntFilter<"core_test"> | number
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }

  export type core_testOrderByWithRelationInput = {
    id?: SortOrder
    qpm?: SortOrder
    raw?: SortOrder
    accuracy?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    creation?: SortOrder
    user_id?: SortOrder
    number?: SortOrder
    time?: SortOrder
    auth_user?: auth_userOrderByWithRelationInput
  }

  export type core_testWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: core_testWhereInput | core_testWhereInput[]
    OR?: core_testWhereInput[]
    NOT?: core_testWhereInput | core_testWhereInput[]
    qpm?: FloatFilter<"core_test"> | number
    raw?: FloatFilter<"core_test"> | number
    accuracy?: IntFilter<"core_test"> | number
    mode?: StringFilter<"core_test"> | string
    difficulty?: IntFilter<"core_test"> | number
    creation?: DateTimeFilter<"core_test"> | Date | string
    user_id?: IntFilter<"core_test"> | number
    number?: IntFilter<"core_test"> | number
    time?: IntFilter<"core_test"> | number
    auth_user?: XOR<Auth_userScalarRelationFilter, auth_userWhereInput>
  }, "id">

  export type core_testOrderByWithAggregationInput = {
    id?: SortOrder
    qpm?: SortOrder
    raw?: SortOrder
    accuracy?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    creation?: SortOrder
    user_id?: SortOrder
    number?: SortOrder
    time?: SortOrder
    _count?: core_testCountOrderByAggregateInput
    _avg?: core_testAvgOrderByAggregateInput
    _max?: core_testMaxOrderByAggregateInput
    _min?: core_testMinOrderByAggregateInput
    _sum?: core_testSumOrderByAggregateInput
  }

  export type core_testScalarWhereWithAggregatesInput = {
    AND?: core_testScalarWhereWithAggregatesInput | core_testScalarWhereWithAggregatesInput[]
    OR?: core_testScalarWhereWithAggregatesInput[]
    NOT?: core_testScalarWhereWithAggregatesInput | core_testScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"core_test"> | bigint | number
    qpm?: FloatWithAggregatesFilter<"core_test"> | number
    raw?: FloatWithAggregatesFilter<"core_test"> | number
    accuracy?: IntWithAggregatesFilter<"core_test"> | number
    mode?: StringWithAggregatesFilter<"core_test"> | string
    difficulty?: IntWithAggregatesFilter<"core_test"> | number
    creation?: DateTimeWithAggregatesFilter<"core_test"> | Date | string
    user_id?: IntWithAggregatesFilter<"core_test"> | number
    number?: IntWithAggregatesFilter<"core_test"> | number
    time?: IntWithAggregatesFilter<"core_test"> | number
  }

  export type auth_userCreateInput = {
    password: string
    last_login?: Date | string | null
    is_superuser?: boolean | null
    username: string
    first_name?: string | null
    last_name?: string | null
    email: string
    is_staff?: boolean | null
    is_active?: boolean | null
    date_joined?: Date | string
    core_settings?: core_settingsCreateNestedOneWithoutAuth_userInput
    core_test?: core_testCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser?: boolean | null
    username: string
    first_name?: string | null
    last_name?: string | null
    email: string
    is_staff?: boolean | null
    is_active?: boolean | null
    date_joined?: Date | string
    core_settings?: core_settingsUncheckedCreateNestedOneWithoutAuth_userInput
    core_test?: core_testUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    core_settings?: core_settingsUpdateOneWithoutAuth_userNestedInput
    core_test?: core_testUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    core_settings?: core_settingsUncheckedUpdateOneWithoutAuth_userNestedInput
    core_test?: core_testUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userCreateManyInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser?: boolean | null
    username: string
    first_name?: string | null
    last_name?: string | null
    email: string
    is_staff?: boolean | null
    is_active?: boolean | null
    date_joined?: Date | string
  }

  export type auth_userUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type auth_userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type core_settingsCreateInput = {
    id?: bigint | number
    theme: string
    font: string
    auth_user: auth_userCreateNestedOneWithoutCore_settingsInput
  }

  export type core_settingsUncheckedCreateInput = {
    id?: bigint | number
    theme: string
    font: string
    user_id: number
  }

  export type core_settingsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    theme?: StringFieldUpdateOperationsInput | string
    font?: StringFieldUpdateOperationsInput | string
    auth_user?: auth_userUpdateOneRequiredWithoutCore_settingsNestedInput
  }

  export type core_settingsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    theme?: StringFieldUpdateOperationsInput | string
    font?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type core_settingsCreateManyInput = {
    id?: bigint | number
    theme: string
    font: string
    user_id: number
  }

  export type core_settingsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    theme?: StringFieldUpdateOperationsInput | string
    font?: StringFieldUpdateOperationsInput | string
  }

  export type core_settingsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    theme?: StringFieldUpdateOperationsInput | string
    font?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type core_testCreateInput = {
    id?: bigint | number
    qpm: number
    raw: number
    accuracy: number
    mode: string
    difficulty: number
    creation: Date | string
    number: number
    time: number
    auth_user: auth_userCreateNestedOneWithoutCore_testInput
  }

  export type core_testUncheckedCreateInput = {
    id?: bigint | number
    qpm: number
    raw: number
    accuracy: number
    mode: string
    difficulty: number
    creation: Date | string
    user_id: number
    number: number
    time: number
  }

  export type core_testUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    qpm?: FloatFieldUpdateOperationsInput | number
    raw?: FloatFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
    auth_user?: auth_userUpdateOneRequiredWithoutCore_testNestedInput
  }

  export type core_testUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    qpm?: FloatFieldUpdateOperationsInput | number
    raw?: FloatFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type core_testCreateManyInput = {
    id?: bigint | number
    qpm: number
    raw: number
    accuracy: number
    mode: string
    difficulty: number
    creation: Date | string
    user_id: number
    number: number
    time: number
  }

  export type core_testUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    qpm?: FloatFieldUpdateOperationsInput | number
    raw?: FloatFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type core_testUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    qpm?: FloatFieldUpdateOperationsInput | number
    raw?: FloatFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: IntFieldUpdateOperationsInput | number
    number?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Core_settingsNullableScalarRelationFilter = {
    is?: core_settingsWhereInput | null
    isNot?: core_settingsWhereInput | null
  }

  export type Core_testListRelationFilter = {
    every?: core_testWhereInput
    some?: core_testWhereInput
    none?: core_testWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type core_testOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type auth_userCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type auth_userMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    last_login?: SortOrder
    is_superuser?: SortOrder
    username?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    is_staff?: SortOrder
    is_active?: SortOrder
    date_joined?: SortOrder
  }

  export type auth_userSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type Auth_userScalarRelationFilter = {
    is?: auth_userWhereInput
    isNot?: auth_userWhereInput
  }

  export type core_settingsCountOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    font?: SortOrder
    user_id?: SortOrder
  }

  export type core_settingsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type core_settingsMaxOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    font?: SortOrder
    user_id?: SortOrder
  }

  export type core_settingsMinOrderByAggregateInput = {
    id?: SortOrder
    theme?: SortOrder
    font?: SortOrder
    user_id?: SortOrder
  }

  export type core_settingsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type core_testCountOrderByAggregateInput = {
    id?: SortOrder
    qpm?: SortOrder
    raw?: SortOrder
    accuracy?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    creation?: SortOrder
    user_id?: SortOrder
    number?: SortOrder
    time?: SortOrder
  }

  export type core_testAvgOrderByAggregateInput = {
    id?: SortOrder
    qpm?: SortOrder
    raw?: SortOrder
    accuracy?: SortOrder
    difficulty?: SortOrder
    user_id?: SortOrder
    number?: SortOrder
    time?: SortOrder
  }

  export type core_testMaxOrderByAggregateInput = {
    id?: SortOrder
    qpm?: SortOrder
    raw?: SortOrder
    accuracy?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    creation?: SortOrder
    user_id?: SortOrder
    number?: SortOrder
    time?: SortOrder
  }

  export type core_testMinOrderByAggregateInput = {
    id?: SortOrder
    qpm?: SortOrder
    raw?: SortOrder
    accuracy?: SortOrder
    mode?: SortOrder
    difficulty?: SortOrder
    creation?: SortOrder
    user_id?: SortOrder
    number?: SortOrder
    time?: SortOrder
  }

  export type core_testSumOrderByAggregateInput = {
    id?: SortOrder
    qpm?: SortOrder
    raw?: SortOrder
    accuracy?: SortOrder
    difficulty?: SortOrder
    user_id?: SortOrder
    number?: SortOrder
    time?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type core_settingsCreateNestedOneWithoutAuth_userInput = {
    create?: XOR<core_settingsCreateWithoutAuth_userInput, core_settingsUncheckedCreateWithoutAuth_userInput>
    connectOrCreate?: core_settingsCreateOrConnectWithoutAuth_userInput
    connect?: core_settingsWhereUniqueInput
  }

  export type core_testCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<core_testCreateWithoutAuth_userInput, core_testUncheckedCreateWithoutAuth_userInput> | core_testCreateWithoutAuth_userInput[] | core_testUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: core_testCreateOrConnectWithoutAuth_userInput | core_testCreateOrConnectWithoutAuth_userInput[]
    createMany?: core_testCreateManyAuth_userInputEnvelope
    connect?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
  }

  export type core_settingsUncheckedCreateNestedOneWithoutAuth_userInput = {
    create?: XOR<core_settingsCreateWithoutAuth_userInput, core_settingsUncheckedCreateWithoutAuth_userInput>
    connectOrCreate?: core_settingsCreateOrConnectWithoutAuth_userInput
    connect?: core_settingsWhereUniqueInput
  }

  export type core_testUncheckedCreateNestedManyWithoutAuth_userInput = {
    create?: XOR<core_testCreateWithoutAuth_userInput, core_testUncheckedCreateWithoutAuth_userInput> | core_testCreateWithoutAuth_userInput[] | core_testUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: core_testCreateOrConnectWithoutAuth_userInput | core_testCreateOrConnectWithoutAuth_userInput[]
    createMany?: core_testCreateManyAuth_userInputEnvelope
    connect?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type core_settingsUpdateOneWithoutAuth_userNestedInput = {
    create?: XOR<core_settingsCreateWithoutAuth_userInput, core_settingsUncheckedCreateWithoutAuth_userInput>
    connectOrCreate?: core_settingsCreateOrConnectWithoutAuth_userInput
    upsert?: core_settingsUpsertWithoutAuth_userInput
    disconnect?: core_settingsWhereInput | boolean
    delete?: core_settingsWhereInput | boolean
    connect?: core_settingsWhereUniqueInput
    update?: XOR<XOR<core_settingsUpdateToOneWithWhereWithoutAuth_userInput, core_settingsUpdateWithoutAuth_userInput>, core_settingsUncheckedUpdateWithoutAuth_userInput>
  }

  export type core_testUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<core_testCreateWithoutAuth_userInput, core_testUncheckedCreateWithoutAuth_userInput> | core_testCreateWithoutAuth_userInput[] | core_testUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: core_testCreateOrConnectWithoutAuth_userInput | core_testCreateOrConnectWithoutAuth_userInput[]
    upsert?: core_testUpsertWithWhereUniqueWithoutAuth_userInput | core_testUpsertWithWhereUniqueWithoutAuth_userInput[]
    createMany?: core_testCreateManyAuth_userInputEnvelope
    set?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
    disconnect?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
    delete?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
    connect?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
    update?: core_testUpdateWithWhereUniqueWithoutAuth_userInput | core_testUpdateWithWhereUniqueWithoutAuth_userInput[]
    updateMany?: core_testUpdateManyWithWhereWithoutAuth_userInput | core_testUpdateManyWithWhereWithoutAuth_userInput[]
    deleteMany?: core_testScalarWhereInput | core_testScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type core_settingsUncheckedUpdateOneWithoutAuth_userNestedInput = {
    create?: XOR<core_settingsCreateWithoutAuth_userInput, core_settingsUncheckedCreateWithoutAuth_userInput>
    connectOrCreate?: core_settingsCreateOrConnectWithoutAuth_userInput
    upsert?: core_settingsUpsertWithoutAuth_userInput
    disconnect?: core_settingsWhereInput | boolean
    delete?: core_settingsWhereInput | boolean
    connect?: core_settingsWhereUniqueInput
    update?: XOR<XOR<core_settingsUpdateToOneWithWhereWithoutAuth_userInput, core_settingsUpdateWithoutAuth_userInput>, core_settingsUncheckedUpdateWithoutAuth_userInput>
  }

  export type core_testUncheckedUpdateManyWithoutAuth_userNestedInput = {
    create?: XOR<core_testCreateWithoutAuth_userInput, core_testUncheckedCreateWithoutAuth_userInput> | core_testCreateWithoutAuth_userInput[] | core_testUncheckedCreateWithoutAuth_userInput[]
    connectOrCreate?: core_testCreateOrConnectWithoutAuth_userInput | core_testCreateOrConnectWithoutAuth_userInput[]
    upsert?: core_testUpsertWithWhereUniqueWithoutAuth_userInput | core_testUpsertWithWhereUniqueWithoutAuth_userInput[]
    createMany?: core_testCreateManyAuth_userInputEnvelope
    set?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
    disconnect?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
    delete?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
    connect?: core_testWhereUniqueInput | core_testWhereUniqueInput[]
    update?: core_testUpdateWithWhereUniqueWithoutAuth_userInput | core_testUpdateWithWhereUniqueWithoutAuth_userInput[]
    updateMany?: core_testUpdateManyWithWhereWithoutAuth_userInput | core_testUpdateManyWithWhereWithoutAuth_userInput[]
    deleteMany?: core_testScalarWhereInput | core_testScalarWhereInput[]
  }

  export type auth_userCreateNestedOneWithoutCore_settingsInput = {
    create?: XOR<auth_userCreateWithoutCore_settingsInput, auth_userUncheckedCreateWithoutCore_settingsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutCore_settingsInput
    connect?: auth_userWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type auth_userUpdateOneRequiredWithoutCore_settingsNestedInput = {
    create?: XOR<auth_userCreateWithoutCore_settingsInput, auth_userUncheckedCreateWithoutCore_settingsInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutCore_settingsInput
    upsert?: auth_userUpsertWithoutCore_settingsInput
    connect?: auth_userWhereUniqueInput
    update?: XOR<XOR<auth_userUpdateToOneWithWhereWithoutCore_settingsInput, auth_userUpdateWithoutCore_settingsInput>, auth_userUncheckedUpdateWithoutCore_settingsInput>
  }

  export type auth_userCreateNestedOneWithoutCore_testInput = {
    create?: XOR<auth_userCreateWithoutCore_testInput, auth_userUncheckedCreateWithoutCore_testInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutCore_testInput
    connect?: auth_userWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type auth_userUpdateOneRequiredWithoutCore_testNestedInput = {
    create?: XOR<auth_userCreateWithoutCore_testInput, auth_userUncheckedCreateWithoutCore_testInput>
    connectOrCreate?: auth_userCreateOrConnectWithoutCore_testInput
    upsert?: auth_userUpsertWithoutCore_testInput
    connect?: auth_userWhereUniqueInput
    update?: XOR<XOR<auth_userUpdateToOneWithWhereWithoutCore_testInput, auth_userUpdateWithoutCore_testInput>, auth_userUncheckedUpdateWithoutCore_testInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type core_settingsCreateWithoutAuth_userInput = {
    id?: bigint | number
    theme: string
    font: string
  }

  export type core_settingsUncheckedCreateWithoutAuth_userInput = {
    id?: bigint | number
    theme: string
    font: string
  }

  export type core_settingsCreateOrConnectWithoutAuth_userInput = {
    where: core_settingsWhereUniqueInput
    create: XOR<core_settingsCreateWithoutAuth_userInput, core_settingsUncheckedCreateWithoutAuth_userInput>
  }

  export type core_testCreateWithoutAuth_userInput = {
    id?: bigint | number
    qpm: number
    raw: number
    accuracy: number
    mode: string
    difficulty: number
    creation: Date | string
    number: number
    time: number
  }

  export type core_testUncheckedCreateWithoutAuth_userInput = {
    id?: bigint | number
    qpm: number
    raw: number
    accuracy: number
    mode: string
    difficulty: number
    creation: Date | string
    number: number
    time: number
  }

  export type core_testCreateOrConnectWithoutAuth_userInput = {
    where: core_testWhereUniqueInput
    create: XOR<core_testCreateWithoutAuth_userInput, core_testUncheckedCreateWithoutAuth_userInput>
  }

  export type core_testCreateManyAuth_userInputEnvelope = {
    data: core_testCreateManyAuth_userInput | core_testCreateManyAuth_userInput[]
  }

  export type core_settingsUpsertWithoutAuth_userInput = {
    update: XOR<core_settingsUpdateWithoutAuth_userInput, core_settingsUncheckedUpdateWithoutAuth_userInput>
    create: XOR<core_settingsCreateWithoutAuth_userInput, core_settingsUncheckedCreateWithoutAuth_userInput>
    where?: core_settingsWhereInput
  }

  export type core_settingsUpdateToOneWithWhereWithoutAuth_userInput = {
    where?: core_settingsWhereInput
    data: XOR<core_settingsUpdateWithoutAuth_userInput, core_settingsUncheckedUpdateWithoutAuth_userInput>
  }

  export type core_settingsUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    theme?: StringFieldUpdateOperationsInput | string
    font?: StringFieldUpdateOperationsInput | string
  }

  export type core_settingsUncheckedUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    theme?: StringFieldUpdateOperationsInput | string
    font?: StringFieldUpdateOperationsInput | string
  }

  export type core_testUpsertWithWhereUniqueWithoutAuth_userInput = {
    where: core_testWhereUniqueInput
    update: XOR<core_testUpdateWithoutAuth_userInput, core_testUncheckedUpdateWithoutAuth_userInput>
    create: XOR<core_testCreateWithoutAuth_userInput, core_testUncheckedCreateWithoutAuth_userInput>
  }

  export type core_testUpdateWithWhereUniqueWithoutAuth_userInput = {
    where: core_testWhereUniqueInput
    data: XOR<core_testUpdateWithoutAuth_userInput, core_testUncheckedUpdateWithoutAuth_userInput>
  }

  export type core_testUpdateManyWithWhereWithoutAuth_userInput = {
    where: core_testScalarWhereInput
    data: XOR<core_testUpdateManyMutationInput, core_testUncheckedUpdateManyWithoutAuth_userInput>
  }

  export type core_testScalarWhereInput = {
    AND?: core_testScalarWhereInput | core_testScalarWhereInput[]
    OR?: core_testScalarWhereInput[]
    NOT?: core_testScalarWhereInput | core_testScalarWhereInput[]
    id?: BigIntFilter<"core_test"> | bigint | number
    qpm?: FloatFilter<"core_test"> | number
    raw?: FloatFilter<"core_test"> | number
    accuracy?: IntFilter<"core_test"> | number
    mode?: StringFilter<"core_test"> | string
    difficulty?: IntFilter<"core_test"> | number
    creation?: DateTimeFilter<"core_test"> | Date | string
    user_id?: IntFilter<"core_test"> | number
    number?: IntFilter<"core_test"> | number
    time?: IntFilter<"core_test"> | number
  }

  export type auth_userCreateWithoutCore_settingsInput = {
    password: string
    last_login?: Date | string | null
    is_superuser?: boolean | null
    username: string
    first_name?: string | null
    last_name?: string | null
    email: string
    is_staff?: boolean | null
    is_active?: boolean | null
    date_joined?: Date | string
    core_test?: core_testCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateWithoutCore_settingsInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser?: boolean | null
    username: string
    first_name?: string | null
    last_name?: string | null
    email: string
    is_staff?: boolean | null
    is_active?: boolean | null
    date_joined?: Date | string
    core_test?: core_testUncheckedCreateNestedManyWithoutAuth_userInput
  }

  export type auth_userCreateOrConnectWithoutCore_settingsInput = {
    where: auth_userWhereUniqueInput
    create: XOR<auth_userCreateWithoutCore_settingsInput, auth_userUncheckedCreateWithoutCore_settingsInput>
  }

  export type auth_userUpsertWithoutCore_settingsInput = {
    update: XOR<auth_userUpdateWithoutCore_settingsInput, auth_userUncheckedUpdateWithoutCore_settingsInput>
    create: XOR<auth_userCreateWithoutCore_settingsInput, auth_userUncheckedCreateWithoutCore_settingsInput>
    where?: auth_userWhereInput
  }

  export type auth_userUpdateToOneWithWhereWithoutCore_settingsInput = {
    where?: auth_userWhereInput
    data: XOR<auth_userUpdateWithoutCore_settingsInput, auth_userUncheckedUpdateWithoutCore_settingsInput>
  }

  export type auth_userUpdateWithoutCore_settingsInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    core_test?: core_testUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateWithoutCore_settingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    core_test?: core_testUncheckedUpdateManyWithoutAuth_userNestedInput
  }

  export type auth_userCreateWithoutCore_testInput = {
    password: string
    last_login?: Date | string | null
    is_superuser?: boolean | null
    username: string
    first_name?: string | null
    last_name?: string | null
    email: string
    is_staff?: boolean | null
    is_active?: boolean | null
    date_joined?: Date | string
    core_settings?: core_settingsCreateNestedOneWithoutAuth_userInput
  }

  export type auth_userUncheckedCreateWithoutCore_testInput = {
    id?: number
    password: string
    last_login?: Date | string | null
    is_superuser?: boolean | null
    username: string
    first_name?: string | null
    last_name?: string | null
    email: string
    is_staff?: boolean | null
    is_active?: boolean | null
    date_joined?: Date | string
    core_settings?: core_settingsUncheckedCreateNestedOneWithoutAuth_userInput
  }

  export type auth_userCreateOrConnectWithoutCore_testInput = {
    where: auth_userWhereUniqueInput
    create: XOR<auth_userCreateWithoutCore_testInput, auth_userUncheckedCreateWithoutCore_testInput>
  }

  export type auth_userUpsertWithoutCore_testInput = {
    update: XOR<auth_userUpdateWithoutCore_testInput, auth_userUncheckedUpdateWithoutCore_testInput>
    create: XOR<auth_userCreateWithoutCore_testInput, auth_userUncheckedCreateWithoutCore_testInput>
    where?: auth_userWhereInput
  }

  export type auth_userUpdateToOneWithWhereWithoutCore_testInput = {
    where?: auth_userWhereInput
    data: XOR<auth_userUpdateWithoutCore_testInput, auth_userUncheckedUpdateWithoutCore_testInput>
  }

  export type auth_userUpdateWithoutCore_testInput = {
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    core_settings?: core_settingsUpdateOneWithoutAuth_userNestedInput
  }

  export type auth_userUncheckedUpdateWithoutCore_testInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    is_superuser?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    is_staff?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    date_joined?: DateTimeFieldUpdateOperationsInput | Date | string
    core_settings?: core_settingsUncheckedUpdateOneWithoutAuth_userNestedInput
  }

  export type core_testCreateManyAuth_userInput = {
    id?: bigint | number
    qpm: number
    raw: number
    accuracy: number
    mode: string
    difficulty: number
    creation: Date | string
    number: number
    time: number
  }

  export type core_testUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    qpm?: FloatFieldUpdateOperationsInput | number
    raw?: FloatFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type core_testUncheckedUpdateWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    qpm?: FloatFieldUpdateOperationsInput | number
    raw?: FloatFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }

  export type core_testUncheckedUpdateManyWithoutAuth_userInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    qpm?: FloatFieldUpdateOperationsInput | number
    raw?: FloatFieldUpdateOperationsInput | number
    accuracy?: IntFieldUpdateOperationsInput | number
    mode?: StringFieldUpdateOperationsInput | string
    difficulty?: IntFieldUpdateOperationsInput | number
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: IntFieldUpdateOperationsInput | number
    time?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}