
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
 * Model SystemPurchase
 * 
 */
export type SystemPurchase = $Result.DefaultSelection<Prisma.$SystemPurchasePayload>
/**
 * Model ScheduleDate
 * 
 */
export type ScheduleDate = $Result.DefaultSelection<Prisma.$ScheduleDatePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SystemPurchaseStatus: {
  complete: 'complete',
  expired: 'expired',
  open: 'open',
  unassigned: 'unassigned'
};

export type SystemPurchaseStatus = (typeof SystemPurchaseStatus)[keyof typeof SystemPurchaseStatus]

}

export type SystemPurchaseStatus = $Enums.SystemPurchaseStatus

export const SystemPurchaseStatus: typeof $Enums.SystemPurchaseStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SystemPurchases
 * const systemPurchases = await prisma.systemPurchase.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more SystemPurchases
   * const systemPurchases = await prisma.systemPurchase.findMany()
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
   * `prisma.systemPurchase`: Exposes CRUD operations for the **SystemPurchase** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemPurchases
    * const systemPurchases = await prisma.systemPurchase.findMany()
    * ```
    */
  get systemPurchase(): Prisma.SystemPurchaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduleDate`: Exposes CRUD operations for the **ScheduleDate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ScheduleDates
    * const scheduleDates = await prisma.scheduleDate.findMany()
    * ```
    */
  get scheduleDate(): Prisma.ScheduleDateDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    SystemPurchase: 'SystemPurchase',
    ScheduleDate: 'ScheduleDate'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    dbDmsByIvinDev?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "systemPurchase" | "scheduleDate"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SystemPurchase: {
        payload: Prisma.$SystemPurchasePayload<ExtArgs>
        fields: Prisma.SystemPurchaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemPurchaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemPurchaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>
          }
          findFirst: {
            args: Prisma.SystemPurchaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemPurchaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>
          }
          findMany: {
            args: Prisma.SystemPurchaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>[]
          }
          create: {
            args: Prisma.SystemPurchaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>
          }
          createMany: {
            args: Prisma.SystemPurchaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SystemPurchaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>[]
          }
          delete: {
            args: Prisma.SystemPurchaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>
          }
          update: {
            args: Prisma.SystemPurchaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>
          }
          deleteMany: {
            args: Prisma.SystemPurchaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemPurchaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SystemPurchaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>[]
          }
          upsert: {
            args: Prisma.SystemPurchaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemPurchasePayload>
          }
          aggregate: {
            args: Prisma.SystemPurchaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemPurchase>
          }
          groupBy: {
            args: Prisma.SystemPurchaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemPurchaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemPurchaseCountArgs<ExtArgs>
            result: $Utils.Optional<SystemPurchaseCountAggregateOutputType> | number
          }
        }
      }
      ScheduleDate: {
        payload: Prisma.$ScheduleDatePayload<ExtArgs>
        fields: Prisma.ScheduleDateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleDateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleDateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>
          }
          findFirst: {
            args: Prisma.ScheduleDateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleDateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>
          }
          findMany: {
            args: Prisma.ScheduleDateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>[]
          }
          create: {
            args: Prisma.ScheduleDateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>
          }
          createMany: {
            args: Prisma.ScheduleDateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ScheduleDateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>[]
          }
          delete: {
            args: Prisma.ScheduleDateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>
          }
          update: {
            args: Prisma.ScheduleDateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleDateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ScheduleDateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>[]
          }
          upsert: {
            args: Prisma.ScheduleDateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ScheduleDatePayload>
          }
          aggregate: {
            args: Prisma.ScheduleDateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduleDate>
          }
          groupBy: {
            args: Prisma.ScheduleDateGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleDateGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleDateCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleDateCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    systemPurchase?: SystemPurchaseOmit
    scheduleDate?: ScheduleDateOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Models
   */

  /**
   * Model SystemPurchase
   */

  export type AggregateSystemPurchase = {
    _count: SystemPurchaseCountAggregateOutputType | null
    _avg: SystemPurchaseAvgAggregateOutputType | null
    _sum: SystemPurchaseSumAggregateOutputType | null
    _min: SystemPurchaseMinAggregateOutputType | null
    _max: SystemPurchaseMaxAggregateOutputType | null
  }

  export type SystemPurchaseAvgAggregateOutputType = {
    amount: number | null
  }

  export type SystemPurchaseSumAggregateOutputType = {
    amount: number | null
  }

  export type SystemPurchaseMinAggregateOutputType = {
    id: string | null
    stripeSessionId: string | null
    stripePaymentId: string | null
    amount: number | null
    currency: string | null
    customerId: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    customerBusinessName: string | null
    customerCountry: string | null
    customerState: string | null
    customerCity: string | null
    status: $Enums.SystemPurchaseStatus | null
    receiptUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemPurchaseMaxAggregateOutputType = {
    id: string | null
    stripeSessionId: string | null
    stripePaymentId: string | null
    amount: number | null
    currency: string | null
    customerId: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    customerBusinessName: string | null
    customerCountry: string | null
    customerState: string | null
    customerCity: string | null
    status: $Enums.SystemPurchaseStatus | null
    receiptUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SystemPurchaseCountAggregateOutputType = {
    id: number
    stripeSessionId: number
    stripePaymentId: number
    amount: number
    currency: number
    customerId: number
    customerName: number
    customerEmail: number
    customerPhone: number
    customerBusinessName: number
    customerCountry: number
    customerState: number
    customerCity: number
    status: number
    receiptUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SystemPurchaseAvgAggregateInputType = {
    amount?: true
  }

  export type SystemPurchaseSumAggregateInputType = {
    amount?: true
  }

  export type SystemPurchaseMinAggregateInputType = {
    id?: true
    stripeSessionId?: true
    stripePaymentId?: true
    amount?: true
    currency?: true
    customerId?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    customerBusinessName?: true
    customerCountry?: true
    customerState?: true
    customerCity?: true
    status?: true
    receiptUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemPurchaseMaxAggregateInputType = {
    id?: true
    stripeSessionId?: true
    stripePaymentId?: true
    amount?: true
    currency?: true
    customerId?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    customerBusinessName?: true
    customerCountry?: true
    customerState?: true
    customerCity?: true
    status?: true
    receiptUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SystemPurchaseCountAggregateInputType = {
    id?: true
    stripeSessionId?: true
    stripePaymentId?: true
    amount?: true
    currency?: true
    customerId?: true
    customerName?: true
    customerEmail?: true
    customerPhone?: true
    customerBusinessName?: true
    customerCountry?: true
    customerState?: true
    customerCity?: true
    status?: true
    receiptUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SystemPurchaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemPurchase to aggregate.
     */
    where?: SystemPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemPurchases to fetch.
     */
    orderBy?: SystemPurchaseOrderByWithRelationInput | SystemPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemPurchases
    **/
    _count?: true | SystemPurchaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemPurchaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemPurchaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemPurchaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemPurchaseMaxAggregateInputType
  }

  export type GetSystemPurchaseAggregateType<T extends SystemPurchaseAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemPurchase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemPurchase[P]>
      : GetScalarType<T[P], AggregateSystemPurchase[P]>
  }




  export type SystemPurchaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemPurchaseWhereInput
    orderBy?: SystemPurchaseOrderByWithAggregationInput | SystemPurchaseOrderByWithAggregationInput[]
    by: SystemPurchaseScalarFieldEnum[] | SystemPurchaseScalarFieldEnum
    having?: SystemPurchaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemPurchaseCountAggregateInputType | true
    _avg?: SystemPurchaseAvgAggregateInputType
    _sum?: SystemPurchaseSumAggregateInputType
    _min?: SystemPurchaseMinAggregateInputType
    _max?: SystemPurchaseMaxAggregateInputType
  }

  export type SystemPurchaseGroupByOutputType = {
    id: string
    stripeSessionId: string
    stripePaymentId: string | null
    amount: number
    currency: string | null
    customerId: string | null
    customerName: string | null
    customerEmail: string | null
    customerPhone: string | null
    customerBusinessName: string | null
    customerCountry: string | null
    customerState: string | null
    customerCity: string | null
    status: $Enums.SystemPurchaseStatus | null
    receiptUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SystemPurchaseCountAggregateOutputType | null
    _avg: SystemPurchaseAvgAggregateOutputType | null
    _sum: SystemPurchaseSumAggregateOutputType | null
    _min: SystemPurchaseMinAggregateOutputType | null
    _max: SystemPurchaseMaxAggregateOutputType | null
  }

  type GetSystemPurchaseGroupByPayload<T extends SystemPurchaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemPurchaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemPurchaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemPurchaseGroupByOutputType[P]>
            : GetScalarType<T[P], SystemPurchaseGroupByOutputType[P]>
        }
      >
    >


  export type SystemPurchaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    amount?: boolean
    currency?: boolean
    customerId?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerBusinessName?: boolean
    customerCountry?: boolean
    customerState?: boolean
    customerCity?: boolean
    status?: boolean
    receiptUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemPurchase"]>

  export type SystemPurchaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    amount?: boolean
    currency?: boolean
    customerId?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerBusinessName?: boolean
    customerCountry?: boolean
    customerState?: boolean
    customerCity?: boolean
    status?: boolean
    receiptUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemPurchase"]>

  export type SystemPurchaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    amount?: boolean
    currency?: boolean
    customerId?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerBusinessName?: boolean
    customerCountry?: boolean
    customerState?: boolean
    customerCity?: boolean
    status?: boolean
    receiptUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["systemPurchase"]>

  export type SystemPurchaseSelectScalar = {
    id?: boolean
    stripeSessionId?: boolean
    stripePaymentId?: boolean
    amount?: boolean
    currency?: boolean
    customerId?: boolean
    customerName?: boolean
    customerEmail?: boolean
    customerPhone?: boolean
    customerBusinessName?: boolean
    customerCountry?: boolean
    customerState?: boolean
    customerCity?: boolean
    status?: boolean
    receiptUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SystemPurchaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "stripeSessionId" | "stripePaymentId" | "amount" | "currency" | "customerId" | "customerName" | "customerEmail" | "customerPhone" | "customerBusinessName" | "customerCountry" | "customerState" | "customerCity" | "status" | "receiptUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["systemPurchase"]>

  export type $SystemPurchasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemPurchase"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      stripeSessionId: string
      stripePaymentId: string | null
      amount: number
      currency: string | null
      customerId: string | null
      customerName: string | null
      customerEmail: string | null
      customerPhone: string | null
      customerBusinessName: string | null
      customerCountry: string | null
      customerState: string | null
      customerCity: string | null
      status: $Enums.SystemPurchaseStatus | null
      receiptUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["systemPurchase"]>
    composites: {}
  }

  type SystemPurchaseGetPayload<S extends boolean | null | undefined | SystemPurchaseDefaultArgs> = $Result.GetResult<Prisma.$SystemPurchasePayload, S>

  type SystemPurchaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SystemPurchaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SystemPurchaseCountAggregateInputType | true
    }

  export interface SystemPurchaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemPurchase'], meta: { name: 'SystemPurchase' } }
    /**
     * Find zero or one SystemPurchase that matches the filter.
     * @param {SystemPurchaseFindUniqueArgs} args - Arguments to find a SystemPurchase
     * @example
     * // Get one SystemPurchase
     * const systemPurchase = await prisma.systemPurchase.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemPurchaseFindUniqueArgs>(args: SelectSubset<T, SystemPurchaseFindUniqueArgs<ExtArgs>>): Prisma__SystemPurchaseClient<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SystemPurchase that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SystemPurchaseFindUniqueOrThrowArgs} args - Arguments to find a SystemPurchase
     * @example
     * // Get one SystemPurchase
     * const systemPurchase = await prisma.systemPurchase.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemPurchaseFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemPurchaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemPurchaseClient<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemPurchase that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemPurchaseFindFirstArgs} args - Arguments to find a SystemPurchase
     * @example
     * // Get one SystemPurchase
     * const systemPurchase = await prisma.systemPurchase.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemPurchaseFindFirstArgs>(args?: SelectSubset<T, SystemPurchaseFindFirstArgs<ExtArgs>>): Prisma__SystemPurchaseClient<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SystemPurchase that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemPurchaseFindFirstOrThrowArgs} args - Arguments to find a SystemPurchase
     * @example
     * // Get one SystemPurchase
     * const systemPurchase = await prisma.systemPurchase.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemPurchaseFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemPurchaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemPurchaseClient<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SystemPurchases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemPurchaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemPurchases
     * const systemPurchases = await prisma.systemPurchase.findMany()
     * 
     * // Get first 10 SystemPurchases
     * const systemPurchases = await prisma.systemPurchase.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemPurchaseWithIdOnly = await prisma.systemPurchase.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemPurchaseFindManyArgs>(args?: SelectSubset<T, SystemPurchaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SystemPurchase.
     * @param {SystemPurchaseCreateArgs} args - Arguments to create a SystemPurchase.
     * @example
     * // Create one SystemPurchase
     * const SystemPurchase = await prisma.systemPurchase.create({
     *   data: {
     *     // ... data to create a SystemPurchase
     *   }
     * })
     * 
     */
    create<T extends SystemPurchaseCreateArgs>(args: SelectSubset<T, SystemPurchaseCreateArgs<ExtArgs>>): Prisma__SystemPurchaseClient<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SystemPurchases.
     * @param {SystemPurchaseCreateManyArgs} args - Arguments to create many SystemPurchases.
     * @example
     * // Create many SystemPurchases
     * const systemPurchase = await prisma.systemPurchase.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemPurchaseCreateManyArgs>(args?: SelectSubset<T, SystemPurchaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SystemPurchases and returns the data saved in the database.
     * @param {SystemPurchaseCreateManyAndReturnArgs} args - Arguments to create many SystemPurchases.
     * @example
     * // Create many SystemPurchases
     * const systemPurchase = await prisma.systemPurchase.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SystemPurchases and only return the `id`
     * const systemPurchaseWithIdOnly = await prisma.systemPurchase.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SystemPurchaseCreateManyAndReturnArgs>(args?: SelectSubset<T, SystemPurchaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SystemPurchase.
     * @param {SystemPurchaseDeleteArgs} args - Arguments to delete one SystemPurchase.
     * @example
     * // Delete one SystemPurchase
     * const SystemPurchase = await prisma.systemPurchase.delete({
     *   where: {
     *     // ... filter to delete one SystemPurchase
     *   }
     * })
     * 
     */
    delete<T extends SystemPurchaseDeleteArgs>(args: SelectSubset<T, SystemPurchaseDeleteArgs<ExtArgs>>): Prisma__SystemPurchaseClient<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SystemPurchase.
     * @param {SystemPurchaseUpdateArgs} args - Arguments to update one SystemPurchase.
     * @example
     * // Update one SystemPurchase
     * const systemPurchase = await prisma.systemPurchase.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemPurchaseUpdateArgs>(args: SelectSubset<T, SystemPurchaseUpdateArgs<ExtArgs>>): Prisma__SystemPurchaseClient<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SystemPurchases.
     * @param {SystemPurchaseDeleteManyArgs} args - Arguments to filter SystemPurchases to delete.
     * @example
     * // Delete a few SystemPurchases
     * const { count } = await prisma.systemPurchase.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemPurchaseDeleteManyArgs>(args?: SelectSubset<T, SystemPurchaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemPurchaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemPurchases
     * const systemPurchase = await prisma.systemPurchase.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemPurchaseUpdateManyArgs>(args: SelectSubset<T, SystemPurchaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemPurchases and returns the data updated in the database.
     * @param {SystemPurchaseUpdateManyAndReturnArgs} args - Arguments to update many SystemPurchases.
     * @example
     * // Update many SystemPurchases
     * const systemPurchase = await prisma.systemPurchase.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SystemPurchases and only return the `id`
     * const systemPurchaseWithIdOnly = await prisma.systemPurchase.updateManyAndReturn({
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
    updateManyAndReturn<T extends SystemPurchaseUpdateManyAndReturnArgs>(args: SelectSubset<T, SystemPurchaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SystemPurchase.
     * @param {SystemPurchaseUpsertArgs} args - Arguments to update or create a SystemPurchase.
     * @example
     * // Update or create a SystemPurchase
     * const systemPurchase = await prisma.systemPurchase.upsert({
     *   create: {
     *     // ... data to create a SystemPurchase
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemPurchase we want to update
     *   }
     * })
     */
    upsert<T extends SystemPurchaseUpsertArgs>(args: SelectSubset<T, SystemPurchaseUpsertArgs<ExtArgs>>): Prisma__SystemPurchaseClient<$Result.GetResult<Prisma.$SystemPurchasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SystemPurchases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemPurchaseCountArgs} args - Arguments to filter SystemPurchases to count.
     * @example
     * // Count the number of SystemPurchases
     * const count = await prisma.systemPurchase.count({
     *   where: {
     *     // ... the filter for the SystemPurchases we want to count
     *   }
     * })
    **/
    count<T extends SystemPurchaseCountArgs>(
      args?: Subset<T, SystemPurchaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemPurchaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemPurchaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SystemPurchaseAggregateArgs>(args: Subset<T, SystemPurchaseAggregateArgs>): Prisma.PrismaPromise<GetSystemPurchaseAggregateType<T>>

    /**
     * Group by SystemPurchase.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemPurchaseGroupByArgs} args - Group by arguments.
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
      T extends SystemPurchaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemPurchaseGroupByArgs['orderBy'] }
        : { orderBy?: SystemPurchaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SystemPurchaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemPurchaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemPurchase model
   */
  readonly fields: SystemPurchaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemPurchase.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemPurchaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SystemPurchase model
   */
  interface SystemPurchaseFieldRefs {
    readonly id: FieldRef<"SystemPurchase", 'String'>
    readonly stripeSessionId: FieldRef<"SystemPurchase", 'String'>
    readonly stripePaymentId: FieldRef<"SystemPurchase", 'String'>
    readonly amount: FieldRef<"SystemPurchase", 'Float'>
    readonly currency: FieldRef<"SystemPurchase", 'String'>
    readonly customerId: FieldRef<"SystemPurchase", 'String'>
    readonly customerName: FieldRef<"SystemPurchase", 'String'>
    readonly customerEmail: FieldRef<"SystemPurchase", 'String'>
    readonly customerPhone: FieldRef<"SystemPurchase", 'String'>
    readonly customerBusinessName: FieldRef<"SystemPurchase", 'String'>
    readonly customerCountry: FieldRef<"SystemPurchase", 'String'>
    readonly customerState: FieldRef<"SystemPurchase", 'String'>
    readonly customerCity: FieldRef<"SystemPurchase", 'String'>
    readonly status: FieldRef<"SystemPurchase", 'SystemPurchaseStatus'>
    readonly receiptUrl: FieldRef<"SystemPurchase", 'String'>
    readonly isActive: FieldRef<"SystemPurchase", 'Boolean'>
    readonly createdAt: FieldRef<"SystemPurchase", 'DateTime'>
    readonly updatedAt: FieldRef<"SystemPurchase", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemPurchase findUnique
   */
  export type SystemPurchaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * Filter, which SystemPurchase to fetch.
     */
    where: SystemPurchaseWhereUniqueInput
  }

  /**
   * SystemPurchase findUniqueOrThrow
   */
  export type SystemPurchaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * Filter, which SystemPurchase to fetch.
     */
    where: SystemPurchaseWhereUniqueInput
  }

  /**
   * SystemPurchase findFirst
   */
  export type SystemPurchaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * Filter, which SystemPurchase to fetch.
     */
    where?: SystemPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemPurchases to fetch.
     */
    orderBy?: SystemPurchaseOrderByWithRelationInput | SystemPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemPurchases.
     */
    cursor?: SystemPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemPurchases.
     */
    distinct?: SystemPurchaseScalarFieldEnum | SystemPurchaseScalarFieldEnum[]
  }

  /**
   * SystemPurchase findFirstOrThrow
   */
  export type SystemPurchaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * Filter, which SystemPurchase to fetch.
     */
    where?: SystemPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemPurchases to fetch.
     */
    orderBy?: SystemPurchaseOrderByWithRelationInput | SystemPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemPurchases.
     */
    cursor?: SystemPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemPurchases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemPurchases.
     */
    distinct?: SystemPurchaseScalarFieldEnum | SystemPurchaseScalarFieldEnum[]
  }

  /**
   * SystemPurchase findMany
   */
  export type SystemPurchaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * Filter, which SystemPurchases to fetch.
     */
    where?: SystemPurchaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemPurchases to fetch.
     */
    orderBy?: SystemPurchaseOrderByWithRelationInput | SystemPurchaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemPurchases.
     */
    cursor?: SystemPurchaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemPurchases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemPurchases.
     */
    skip?: number
    distinct?: SystemPurchaseScalarFieldEnum | SystemPurchaseScalarFieldEnum[]
  }

  /**
   * SystemPurchase create
   */
  export type SystemPurchaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * The data needed to create a SystemPurchase.
     */
    data: XOR<SystemPurchaseCreateInput, SystemPurchaseUncheckedCreateInput>
  }

  /**
   * SystemPurchase createMany
   */
  export type SystemPurchaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemPurchases.
     */
    data: SystemPurchaseCreateManyInput | SystemPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemPurchase createManyAndReturn
   */
  export type SystemPurchaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * The data used to create many SystemPurchases.
     */
    data: SystemPurchaseCreateManyInput | SystemPurchaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemPurchase update
   */
  export type SystemPurchaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * The data needed to update a SystemPurchase.
     */
    data: XOR<SystemPurchaseUpdateInput, SystemPurchaseUncheckedUpdateInput>
    /**
     * Choose, which SystemPurchase to update.
     */
    where: SystemPurchaseWhereUniqueInput
  }

  /**
   * SystemPurchase updateMany
   */
  export type SystemPurchaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemPurchases.
     */
    data: XOR<SystemPurchaseUpdateManyMutationInput, SystemPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which SystemPurchases to update
     */
    where?: SystemPurchaseWhereInput
    /**
     * Limit how many SystemPurchases to update.
     */
    limit?: number
  }

  /**
   * SystemPurchase updateManyAndReturn
   */
  export type SystemPurchaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * The data used to update SystemPurchases.
     */
    data: XOR<SystemPurchaseUpdateManyMutationInput, SystemPurchaseUncheckedUpdateManyInput>
    /**
     * Filter which SystemPurchases to update
     */
    where?: SystemPurchaseWhereInput
    /**
     * Limit how many SystemPurchases to update.
     */
    limit?: number
  }

  /**
   * SystemPurchase upsert
   */
  export type SystemPurchaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * The filter to search for the SystemPurchase to update in case it exists.
     */
    where: SystemPurchaseWhereUniqueInput
    /**
     * In case the SystemPurchase found by the `where` argument doesn't exist, create a new SystemPurchase with this data.
     */
    create: XOR<SystemPurchaseCreateInput, SystemPurchaseUncheckedCreateInput>
    /**
     * In case the SystemPurchase was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemPurchaseUpdateInput, SystemPurchaseUncheckedUpdateInput>
  }

  /**
   * SystemPurchase delete
   */
  export type SystemPurchaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
    /**
     * Filter which SystemPurchase to delete.
     */
    where: SystemPurchaseWhereUniqueInput
  }

  /**
   * SystemPurchase deleteMany
   */
  export type SystemPurchaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemPurchases to delete
     */
    where?: SystemPurchaseWhereInput
    /**
     * Limit how many SystemPurchases to delete.
     */
    limit?: number
  }

  /**
   * SystemPurchase without action
   */
  export type SystemPurchaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemPurchase
     */
    select?: SystemPurchaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SystemPurchase
     */
    omit?: SystemPurchaseOmit<ExtArgs> | null
  }


  /**
   * Model ScheduleDate
   */

  export type AggregateScheduleDate = {
    _count: ScheduleDateCountAggregateOutputType | null
    _min: ScheduleDateMinAggregateOutputType | null
    _max: ScheduleDateMaxAggregateOutputType | null
  }

  export type ScheduleDateMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyAddress: string | null
    firtName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    state: string | null
    city: string | null
    zip: string | null
    message: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleDateMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyAddress: string | null
    firtName: string | null
    lastName: string | null
    email: string | null
    phoneNumber: string | null
    state: string | null
    city: string | null
    zip: string | null
    message: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ScheduleDateCountAggregateOutputType = {
    id: number
    companyName: number
    companyAddress: number
    firtName: number
    lastName: number
    email: number
    phoneNumber: number
    state: number
    city: number
    zip: number
    message: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ScheduleDateMinAggregateInputType = {
    id?: true
    companyName?: true
    companyAddress?: true
    firtName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    state?: true
    city?: true
    zip?: true
    message?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleDateMaxAggregateInputType = {
    id?: true
    companyName?: true
    companyAddress?: true
    firtName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    state?: true
    city?: true
    zip?: true
    message?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ScheduleDateCountAggregateInputType = {
    id?: true
    companyName?: true
    companyAddress?: true
    firtName?: true
    lastName?: true
    email?: true
    phoneNumber?: true
    state?: true
    city?: true
    zip?: true
    message?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ScheduleDateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleDate to aggregate.
     */
    where?: ScheduleDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDates to fetch.
     */
    orderBy?: ScheduleDateOrderByWithRelationInput | ScheduleDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ScheduleDates
    **/
    _count?: true | ScheduleDateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleDateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleDateMaxAggregateInputType
  }

  export type GetScheduleDateAggregateType<T extends ScheduleDateAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduleDate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduleDate[P]>
      : GetScalarType<T[P], AggregateScheduleDate[P]>
  }




  export type ScheduleDateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleDateWhereInput
    orderBy?: ScheduleDateOrderByWithAggregationInput | ScheduleDateOrderByWithAggregationInput[]
    by: ScheduleDateScalarFieldEnum[] | ScheduleDateScalarFieldEnum
    having?: ScheduleDateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleDateCountAggregateInputType | true
    _min?: ScheduleDateMinAggregateInputType
    _max?: ScheduleDateMaxAggregateInputType
  }

  export type ScheduleDateGroupByOutputType = {
    id: string
    companyName: string
    companyAddress: string
    firtName: string
    lastName: string
    email: string
    phoneNumber: string
    state: string
    city: string
    zip: string
    message: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ScheduleDateCountAggregateOutputType | null
    _min: ScheduleDateMinAggregateOutputType | null
    _max: ScheduleDateMaxAggregateOutputType | null
  }

  type GetScheduleDateGroupByPayload<T extends ScheduleDateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleDateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleDateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleDateGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleDateGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleDateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyAddress?: boolean
    firtName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    state?: boolean
    city?: boolean
    zip?: boolean
    message?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scheduleDate"]>

  export type ScheduleDateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyAddress?: boolean
    firtName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    state?: boolean
    city?: boolean
    zip?: boolean
    message?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scheduleDate"]>

  export type ScheduleDateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyAddress?: boolean
    firtName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    state?: boolean
    city?: boolean
    zip?: boolean
    message?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["scheduleDate"]>

  export type ScheduleDateSelectScalar = {
    id?: boolean
    companyName?: boolean
    companyAddress?: boolean
    firtName?: boolean
    lastName?: boolean
    email?: boolean
    phoneNumber?: boolean
    state?: boolean
    city?: boolean
    zip?: boolean
    message?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ScheduleDateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "companyAddress" | "firtName" | "lastName" | "email" | "phoneNumber" | "state" | "city" | "zip" | "message" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["scheduleDate"]>

  export type $ScheduleDatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ScheduleDate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      companyAddress: string
      firtName: string
      lastName: string
      email: string
      phoneNumber: string
      state: string
      city: string
      zip: string
      message: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["scheduleDate"]>
    composites: {}
  }

  type ScheduleDateGetPayload<S extends boolean | null | undefined | ScheduleDateDefaultArgs> = $Result.GetResult<Prisma.$ScheduleDatePayload, S>

  type ScheduleDateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleDateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleDateCountAggregateInputType | true
    }

  export interface ScheduleDateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ScheduleDate'], meta: { name: 'ScheduleDate' } }
    /**
     * Find zero or one ScheduleDate that matches the filter.
     * @param {ScheduleDateFindUniqueArgs} args - Arguments to find a ScheduleDate
     * @example
     * // Get one ScheduleDate
     * const scheduleDate = await prisma.scheduleDate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleDateFindUniqueArgs>(args: SelectSubset<T, ScheduleDateFindUniqueArgs<ExtArgs>>): Prisma__ScheduleDateClient<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ScheduleDate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleDateFindUniqueOrThrowArgs} args - Arguments to find a ScheduleDate
     * @example
     * // Get one ScheduleDate
     * const scheduleDate = await prisma.scheduleDate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleDateFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleDateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleDateClient<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleDate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDateFindFirstArgs} args - Arguments to find a ScheduleDate
     * @example
     * // Get one ScheduleDate
     * const scheduleDate = await prisma.scheduleDate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleDateFindFirstArgs>(args?: SelectSubset<T, ScheduleDateFindFirstArgs<ExtArgs>>): Prisma__ScheduleDateClient<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ScheduleDate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDateFindFirstOrThrowArgs} args - Arguments to find a ScheduleDate
     * @example
     * // Get one ScheduleDate
     * const scheduleDate = await prisma.scheduleDate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleDateFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleDateFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleDateClient<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ScheduleDates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ScheduleDates
     * const scheduleDates = await prisma.scheduleDate.findMany()
     * 
     * // Get first 10 ScheduleDates
     * const scheduleDates = await prisma.scheduleDate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleDateWithIdOnly = await prisma.scheduleDate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleDateFindManyArgs>(args?: SelectSubset<T, ScheduleDateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ScheduleDate.
     * @param {ScheduleDateCreateArgs} args - Arguments to create a ScheduleDate.
     * @example
     * // Create one ScheduleDate
     * const ScheduleDate = await prisma.scheduleDate.create({
     *   data: {
     *     // ... data to create a ScheduleDate
     *   }
     * })
     * 
     */
    create<T extends ScheduleDateCreateArgs>(args: SelectSubset<T, ScheduleDateCreateArgs<ExtArgs>>): Prisma__ScheduleDateClient<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ScheduleDates.
     * @param {ScheduleDateCreateManyArgs} args - Arguments to create many ScheduleDates.
     * @example
     * // Create many ScheduleDates
     * const scheduleDate = await prisma.scheduleDate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleDateCreateManyArgs>(args?: SelectSubset<T, ScheduleDateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ScheduleDates and returns the data saved in the database.
     * @param {ScheduleDateCreateManyAndReturnArgs} args - Arguments to create many ScheduleDates.
     * @example
     * // Create many ScheduleDates
     * const scheduleDate = await prisma.scheduleDate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ScheduleDates and only return the `id`
     * const scheduleDateWithIdOnly = await prisma.scheduleDate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ScheduleDateCreateManyAndReturnArgs>(args?: SelectSubset<T, ScheduleDateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ScheduleDate.
     * @param {ScheduleDateDeleteArgs} args - Arguments to delete one ScheduleDate.
     * @example
     * // Delete one ScheduleDate
     * const ScheduleDate = await prisma.scheduleDate.delete({
     *   where: {
     *     // ... filter to delete one ScheduleDate
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDateDeleteArgs>(args: SelectSubset<T, ScheduleDateDeleteArgs<ExtArgs>>): Prisma__ScheduleDateClient<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ScheduleDate.
     * @param {ScheduleDateUpdateArgs} args - Arguments to update one ScheduleDate.
     * @example
     * // Update one ScheduleDate
     * const scheduleDate = await prisma.scheduleDate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleDateUpdateArgs>(args: SelectSubset<T, ScheduleDateUpdateArgs<ExtArgs>>): Prisma__ScheduleDateClient<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ScheduleDates.
     * @param {ScheduleDateDeleteManyArgs} args - Arguments to filter ScheduleDates to delete.
     * @example
     * // Delete a few ScheduleDates
     * const { count } = await prisma.scheduleDate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDateDeleteManyArgs>(args?: SelectSubset<T, ScheduleDateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ScheduleDates
     * const scheduleDate = await prisma.scheduleDate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleDateUpdateManyArgs>(args: SelectSubset<T, ScheduleDateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ScheduleDates and returns the data updated in the database.
     * @param {ScheduleDateUpdateManyAndReturnArgs} args - Arguments to update many ScheduleDates.
     * @example
     * // Update many ScheduleDates
     * const scheduleDate = await prisma.scheduleDate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ScheduleDates and only return the `id`
     * const scheduleDateWithIdOnly = await prisma.scheduleDate.updateManyAndReturn({
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
    updateManyAndReturn<T extends ScheduleDateUpdateManyAndReturnArgs>(args: SelectSubset<T, ScheduleDateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ScheduleDate.
     * @param {ScheduleDateUpsertArgs} args - Arguments to update or create a ScheduleDate.
     * @example
     * // Update or create a ScheduleDate
     * const scheduleDate = await prisma.scheduleDate.upsert({
     *   create: {
     *     // ... data to create a ScheduleDate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ScheduleDate we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleDateUpsertArgs>(args: SelectSubset<T, ScheduleDateUpsertArgs<ExtArgs>>): Prisma__ScheduleDateClient<$Result.GetResult<Prisma.$ScheduleDatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ScheduleDates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDateCountArgs} args - Arguments to filter ScheduleDates to count.
     * @example
     * // Count the number of ScheduleDates
     * const count = await prisma.scheduleDate.count({
     *   where: {
     *     // ... the filter for the ScheduleDates we want to count
     *   }
     * })
    **/
    count<T extends ScheduleDateCountArgs>(
      args?: Subset<T, ScheduleDateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleDateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ScheduleDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleDateAggregateArgs>(args: Subset<T, ScheduleDateAggregateArgs>): Prisma.PrismaPromise<GetScheduleDateAggregateType<T>>

    /**
     * Group by ScheduleDate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleDateGroupByArgs} args - Group by arguments.
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
      T extends ScheduleDateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleDateGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleDateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleDateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleDateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ScheduleDate model
   */
  readonly fields: ScheduleDateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ScheduleDate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleDateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the ScheduleDate model
   */
  interface ScheduleDateFieldRefs {
    readonly id: FieldRef<"ScheduleDate", 'String'>
    readonly companyName: FieldRef<"ScheduleDate", 'String'>
    readonly companyAddress: FieldRef<"ScheduleDate", 'String'>
    readonly firtName: FieldRef<"ScheduleDate", 'String'>
    readonly lastName: FieldRef<"ScheduleDate", 'String'>
    readonly email: FieldRef<"ScheduleDate", 'String'>
    readonly phoneNumber: FieldRef<"ScheduleDate", 'String'>
    readonly state: FieldRef<"ScheduleDate", 'String'>
    readonly city: FieldRef<"ScheduleDate", 'String'>
    readonly zip: FieldRef<"ScheduleDate", 'String'>
    readonly message: FieldRef<"ScheduleDate", 'String'>
    readonly isActive: FieldRef<"ScheduleDate", 'Boolean'>
    readonly createdAt: FieldRef<"ScheduleDate", 'DateTime'>
    readonly updatedAt: FieldRef<"ScheduleDate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ScheduleDate findUnique
   */
  export type ScheduleDateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleDate to fetch.
     */
    where: ScheduleDateWhereUniqueInput
  }

  /**
   * ScheduleDate findUniqueOrThrow
   */
  export type ScheduleDateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleDate to fetch.
     */
    where: ScheduleDateWhereUniqueInput
  }

  /**
   * ScheduleDate findFirst
   */
  export type ScheduleDateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleDate to fetch.
     */
    where?: ScheduleDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDates to fetch.
     */
    orderBy?: ScheduleDateOrderByWithRelationInput | ScheduleDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleDates.
     */
    cursor?: ScheduleDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleDates.
     */
    distinct?: ScheduleDateScalarFieldEnum | ScheduleDateScalarFieldEnum[]
  }

  /**
   * ScheduleDate findFirstOrThrow
   */
  export type ScheduleDateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleDate to fetch.
     */
    where?: ScheduleDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDates to fetch.
     */
    orderBy?: ScheduleDateOrderByWithRelationInput | ScheduleDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ScheduleDates.
     */
    cursor?: ScheduleDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ScheduleDates.
     */
    distinct?: ScheduleDateScalarFieldEnum | ScheduleDateScalarFieldEnum[]
  }

  /**
   * ScheduleDate findMany
   */
  export type ScheduleDateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * Filter, which ScheduleDates to fetch.
     */
    where?: ScheduleDateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ScheduleDates to fetch.
     */
    orderBy?: ScheduleDateOrderByWithRelationInput | ScheduleDateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ScheduleDates.
     */
    cursor?: ScheduleDateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ScheduleDates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ScheduleDates.
     */
    skip?: number
    distinct?: ScheduleDateScalarFieldEnum | ScheduleDateScalarFieldEnum[]
  }

  /**
   * ScheduleDate create
   */
  export type ScheduleDateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * The data needed to create a ScheduleDate.
     */
    data: XOR<ScheduleDateCreateInput, ScheduleDateUncheckedCreateInput>
  }

  /**
   * ScheduleDate createMany
   */
  export type ScheduleDateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ScheduleDates.
     */
    data: ScheduleDateCreateManyInput | ScheduleDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleDate createManyAndReturn
   */
  export type ScheduleDateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * The data used to create many ScheduleDates.
     */
    data: ScheduleDateCreateManyInput | ScheduleDateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ScheduleDate update
   */
  export type ScheduleDateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * The data needed to update a ScheduleDate.
     */
    data: XOR<ScheduleDateUpdateInput, ScheduleDateUncheckedUpdateInput>
    /**
     * Choose, which ScheduleDate to update.
     */
    where: ScheduleDateWhereUniqueInput
  }

  /**
   * ScheduleDate updateMany
   */
  export type ScheduleDateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ScheduleDates.
     */
    data: XOR<ScheduleDateUpdateManyMutationInput, ScheduleDateUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleDates to update
     */
    where?: ScheduleDateWhereInput
    /**
     * Limit how many ScheduleDates to update.
     */
    limit?: number
  }

  /**
   * ScheduleDate updateManyAndReturn
   */
  export type ScheduleDateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * The data used to update ScheduleDates.
     */
    data: XOR<ScheduleDateUpdateManyMutationInput, ScheduleDateUncheckedUpdateManyInput>
    /**
     * Filter which ScheduleDates to update
     */
    where?: ScheduleDateWhereInput
    /**
     * Limit how many ScheduleDates to update.
     */
    limit?: number
  }

  /**
   * ScheduleDate upsert
   */
  export type ScheduleDateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * The filter to search for the ScheduleDate to update in case it exists.
     */
    where: ScheduleDateWhereUniqueInput
    /**
     * In case the ScheduleDate found by the `where` argument doesn't exist, create a new ScheduleDate with this data.
     */
    create: XOR<ScheduleDateCreateInput, ScheduleDateUncheckedCreateInput>
    /**
     * In case the ScheduleDate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleDateUpdateInput, ScheduleDateUncheckedUpdateInput>
  }

  /**
   * ScheduleDate delete
   */
  export type ScheduleDateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
    /**
     * Filter which ScheduleDate to delete.
     */
    where: ScheduleDateWhereUniqueInput
  }

  /**
   * ScheduleDate deleteMany
   */
  export type ScheduleDateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ScheduleDates to delete
     */
    where?: ScheduleDateWhereInput
    /**
     * Limit how many ScheduleDates to delete.
     */
    limit?: number
  }

  /**
   * ScheduleDate without action
   */
  export type ScheduleDateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleDate
     */
    select?: ScheduleDateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ScheduleDate
     */
    omit?: ScheduleDateOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const SystemPurchaseScalarFieldEnum: {
    id: 'id',
    stripeSessionId: 'stripeSessionId',
    stripePaymentId: 'stripePaymentId',
    amount: 'amount',
    currency: 'currency',
    customerId: 'customerId',
    customerName: 'customerName',
    customerEmail: 'customerEmail',
    customerPhone: 'customerPhone',
    customerBusinessName: 'customerBusinessName',
    customerCountry: 'customerCountry',
    customerState: 'customerState',
    customerCity: 'customerCity',
    status: 'status',
    receiptUrl: 'receiptUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SystemPurchaseScalarFieldEnum = (typeof SystemPurchaseScalarFieldEnum)[keyof typeof SystemPurchaseScalarFieldEnum]


  export const ScheduleDateScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    companyAddress: 'companyAddress',
    firtName: 'firtName',
    lastName: 'lastName',
    email: 'email',
    phoneNumber: 'phoneNumber',
    state: 'state',
    city: 'city',
    zip: 'zip',
    message: 'message',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ScheduleDateScalarFieldEnum = (typeof ScheduleDateScalarFieldEnum)[keyof typeof ScheduleDateScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'SystemPurchaseStatus'
   */
  export type EnumSystemPurchaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemPurchaseStatus'>
    


  /**
   * Reference to a field of type 'SystemPurchaseStatus[]'
   */
  export type ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SystemPurchaseStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type SystemPurchaseWhereInput = {
    AND?: SystemPurchaseWhereInput | SystemPurchaseWhereInput[]
    OR?: SystemPurchaseWhereInput[]
    NOT?: SystemPurchaseWhereInput | SystemPurchaseWhereInput[]
    id?: StringFilter<"SystemPurchase"> | string
    stripeSessionId?: StringFilter<"SystemPurchase"> | string
    stripePaymentId?: StringNullableFilter<"SystemPurchase"> | string | null
    amount?: FloatFilter<"SystemPurchase"> | number
    currency?: StringNullableFilter<"SystemPurchase"> | string | null
    customerId?: StringNullableFilter<"SystemPurchase"> | string | null
    customerName?: StringNullableFilter<"SystemPurchase"> | string | null
    customerEmail?: StringNullableFilter<"SystemPurchase"> | string | null
    customerPhone?: StringNullableFilter<"SystemPurchase"> | string | null
    customerBusinessName?: StringNullableFilter<"SystemPurchase"> | string | null
    customerCountry?: StringNullableFilter<"SystemPurchase"> | string | null
    customerState?: StringNullableFilter<"SystemPurchase"> | string | null
    customerCity?: StringNullableFilter<"SystemPurchase"> | string | null
    status?: EnumSystemPurchaseStatusNullableFilter<"SystemPurchase"> | $Enums.SystemPurchaseStatus | null
    receiptUrl?: StringNullableFilter<"SystemPurchase"> | string | null
    isActive?: BoolFilter<"SystemPurchase"> | boolean
    createdAt?: DateTimeFilter<"SystemPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"SystemPurchase"> | Date | string
  }

  export type SystemPurchaseOrderByWithRelationInput = {
    id?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrderInput | SortOrder
    customerPhone?: SortOrderInput | SortOrder
    customerBusinessName?: SortOrderInput | SortOrder
    customerCountry?: SortOrderInput | SortOrder
    customerState?: SortOrderInput | SortOrder
    customerCity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemPurchaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    stripeSessionId?: string
    AND?: SystemPurchaseWhereInput | SystemPurchaseWhereInput[]
    OR?: SystemPurchaseWhereInput[]
    NOT?: SystemPurchaseWhereInput | SystemPurchaseWhereInput[]
    stripePaymentId?: StringNullableFilter<"SystemPurchase"> | string | null
    amount?: FloatFilter<"SystemPurchase"> | number
    currency?: StringNullableFilter<"SystemPurchase"> | string | null
    customerId?: StringNullableFilter<"SystemPurchase"> | string | null
    customerName?: StringNullableFilter<"SystemPurchase"> | string | null
    customerEmail?: StringNullableFilter<"SystemPurchase"> | string | null
    customerPhone?: StringNullableFilter<"SystemPurchase"> | string | null
    customerBusinessName?: StringNullableFilter<"SystemPurchase"> | string | null
    customerCountry?: StringNullableFilter<"SystemPurchase"> | string | null
    customerState?: StringNullableFilter<"SystemPurchase"> | string | null
    customerCity?: StringNullableFilter<"SystemPurchase"> | string | null
    status?: EnumSystemPurchaseStatusNullableFilter<"SystemPurchase"> | $Enums.SystemPurchaseStatus | null
    receiptUrl?: StringNullableFilter<"SystemPurchase"> | string | null
    isActive?: BoolFilter<"SystemPurchase"> | boolean
    createdAt?: DateTimeFilter<"SystemPurchase"> | Date | string
    updatedAt?: DateTimeFilter<"SystemPurchase"> | Date | string
  }, "id" | "stripeSessionId">

  export type SystemPurchaseOrderByWithAggregationInput = {
    id?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    customerName?: SortOrderInput | SortOrder
    customerEmail?: SortOrderInput | SortOrder
    customerPhone?: SortOrderInput | SortOrder
    customerBusinessName?: SortOrderInput | SortOrder
    customerCountry?: SortOrderInput | SortOrder
    customerState?: SortOrderInput | SortOrder
    customerCity?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    receiptUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SystemPurchaseCountOrderByAggregateInput
    _avg?: SystemPurchaseAvgOrderByAggregateInput
    _max?: SystemPurchaseMaxOrderByAggregateInput
    _min?: SystemPurchaseMinOrderByAggregateInput
    _sum?: SystemPurchaseSumOrderByAggregateInput
  }

  export type SystemPurchaseScalarWhereWithAggregatesInput = {
    AND?: SystemPurchaseScalarWhereWithAggregatesInput | SystemPurchaseScalarWhereWithAggregatesInput[]
    OR?: SystemPurchaseScalarWhereWithAggregatesInput[]
    NOT?: SystemPurchaseScalarWhereWithAggregatesInput | SystemPurchaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemPurchase"> | string
    stripeSessionId?: StringWithAggregatesFilter<"SystemPurchase"> | string
    stripePaymentId?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    amount?: FloatWithAggregatesFilter<"SystemPurchase"> | number
    currency?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    customerId?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    customerName?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    customerEmail?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    customerPhone?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    customerBusinessName?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    customerCountry?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    customerState?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    customerCity?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    status?: EnumSystemPurchaseStatusNullableWithAggregatesFilter<"SystemPurchase"> | $Enums.SystemPurchaseStatus | null
    receiptUrl?: StringNullableWithAggregatesFilter<"SystemPurchase"> | string | null
    isActive?: BoolWithAggregatesFilter<"SystemPurchase"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SystemPurchase"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SystemPurchase"> | Date | string
  }

  export type ScheduleDateWhereInput = {
    AND?: ScheduleDateWhereInput | ScheduleDateWhereInput[]
    OR?: ScheduleDateWhereInput[]
    NOT?: ScheduleDateWhereInput | ScheduleDateWhereInput[]
    id?: StringFilter<"ScheduleDate"> | string
    companyName?: StringFilter<"ScheduleDate"> | string
    companyAddress?: StringFilter<"ScheduleDate"> | string
    firtName?: StringFilter<"ScheduleDate"> | string
    lastName?: StringFilter<"ScheduleDate"> | string
    email?: StringFilter<"ScheduleDate"> | string
    phoneNumber?: StringFilter<"ScheduleDate"> | string
    state?: StringFilter<"ScheduleDate"> | string
    city?: StringFilter<"ScheduleDate"> | string
    zip?: StringFilter<"ScheduleDate"> | string
    message?: StringNullableFilter<"ScheduleDate"> | string | null
    isActive?: BoolFilter<"ScheduleDate"> | boolean
    createdAt?: DateTimeFilter<"ScheduleDate"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleDate"> | Date | string
  }

  export type ScheduleDateOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    firtName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    message?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleDateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ScheduleDateWhereInput | ScheduleDateWhereInput[]
    OR?: ScheduleDateWhereInput[]
    NOT?: ScheduleDateWhereInput | ScheduleDateWhereInput[]
    companyName?: StringFilter<"ScheduleDate"> | string
    companyAddress?: StringFilter<"ScheduleDate"> | string
    firtName?: StringFilter<"ScheduleDate"> | string
    lastName?: StringFilter<"ScheduleDate"> | string
    email?: StringFilter<"ScheduleDate"> | string
    phoneNumber?: StringFilter<"ScheduleDate"> | string
    state?: StringFilter<"ScheduleDate"> | string
    city?: StringFilter<"ScheduleDate"> | string
    zip?: StringFilter<"ScheduleDate"> | string
    message?: StringNullableFilter<"ScheduleDate"> | string | null
    isActive?: BoolFilter<"ScheduleDate"> | boolean
    createdAt?: DateTimeFilter<"ScheduleDate"> | Date | string
    updatedAt?: DateTimeFilter<"ScheduleDate"> | Date | string
  }, "id">

  export type ScheduleDateOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    firtName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    message?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ScheduleDateCountOrderByAggregateInput
    _max?: ScheduleDateMaxOrderByAggregateInput
    _min?: ScheduleDateMinOrderByAggregateInput
  }

  export type ScheduleDateScalarWhereWithAggregatesInput = {
    AND?: ScheduleDateScalarWhereWithAggregatesInput | ScheduleDateScalarWhereWithAggregatesInput[]
    OR?: ScheduleDateScalarWhereWithAggregatesInput[]
    NOT?: ScheduleDateScalarWhereWithAggregatesInput | ScheduleDateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ScheduleDate"> | string
    companyName?: StringWithAggregatesFilter<"ScheduleDate"> | string
    companyAddress?: StringWithAggregatesFilter<"ScheduleDate"> | string
    firtName?: StringWithAggregatesFilter<"ScheduleDate"> | string
    lastName?: StringWithAggregatesFilter<"ScheduleDate"> | string
    email?: StringWithAggregatesFilter<"ScheduleDate"> | string
    phoneNumber?: StringWithAggregatesFilter<"ScheduleDate"> | string
    state?: StringWithAggregatesFilter<"ScheduleDate"> | string
    city?: StringWithAggregatesFilter<"ScheduleDate"> | string
    zip?: StringWithAggregatesFilter<"ScheduleDate"> | string
    message?: StringNullableWithAggregatesFilter<"ScheduleDate"> | string | null
    isActive?: BoolWithAggregatesFilter<"ScheduleDate"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ScheduleDate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ScheduleDate"> | Date | string
  }

  export type SystemPurchaseCreateInput = {
    id?: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string | null
    customerId?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPhone?: string | null
    customerBusinessName?: string | null
    customerCountry?: string | null
    customerState?: string | null
    customerCity?: string | null
    status?: $Enums.SystemPurchaseStatus | null
    receiptUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemPurchaseUncheckedCreateInput = {
    id?: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string | null
    customerId?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPhone?: string | null
    customerBusinessName?: string | null
    customerCountry?: string | null
    customerState?: string | null
    customerCity?: string | null
    status?: $Enums.SystemPurchaseStatus | null
    receiptUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemPurchaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCountry?: NullableStringFieldUpdateOperationsInput | string | null
    customerState?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSystemPurchaseStatusFieldUpdateOperationsInput | $Enums.SystemPurchaseStatus | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemPurchaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCountry?: NullableStringFieldUpdateOperationsInput | string | null
    customerState?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSystemPurchaseStatusFieldUpdateOperationsInput | $Enums.SystemPurchaseStatus | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemPurchaseCreateManyInput = {
    id?: string
    stripeSessionId: string
    stripePaymentId?: string | null
    amount: number
    currency?: string | null
    customerId?: string | null
    customerName?: string | null
    customerEmail?: string | null
    customerPhone?: string | null
    customerBusinessName?: string | null
    customerCountry?: string | null
    customerState?: string | null
    customerCity?: string | null
    status?: $Enums.SystemPurchaseStatus | null
    receiptUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SystemPurchaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCountry?: NullableStringFieldUpdateOperationsInput | string | null
    customerState?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSystemPurchaseStatusFieldUpdateOperationsInput | $Enums.SystemPurchaseStatus | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemPurchaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    stripeSessionId?: StringFieldUpdateOperationsInput | string
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerName?: NullableStringFieldUpdateOperationsInput | string | null
    customerEmail?: NullableStringFieldUpdateOperationsInput | string | null
    customerPhone?: NullableStringFieldUpdateOperationsInput | string | null
    customerBusinessName?: NullableStringFieldUpdateOperationsInput | string | null
    customerCountry?: NullableStringFieldUpdateOperationsInput | string | null
    customerState?: NullableStringFieldUpdateOperationsInput | string | null
    customerCity?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableEnumSystemPurchaseStatusFieldUpdateOperationsInput | $Enums.SystemPurchaseStatus | null
    receiptUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleDateCreateInput = {
    id?: string
    companyName: string
    companyAddress: string
    firtName: string
    lastName: string
    email: string
    phoneNumber: string
    state: string
    city: string
    zip: string
    message?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleDateUncheckedCreateInput = {
    id?: string
    companyName: string
    companyAddress: string
    firtName: string
    lastName: string
    email: string
    phoneNumber: string
    state: string
    city: string
    zip: string
    message?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleDateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    firtName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleDateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    firtName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleDateCreateManyInput = {
    id?: string
    companyName: string
    companyAddress: string
    firtName: string
    lastName: string
    email: string
    phoneNumber: string
    state: string
    city: string
    zip: string
    message?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ScheduleDateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    firtName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ScheduleDateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyAddress?: StringFieldUpdateOperationsInput | string
    firtName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumSystemPurchaseStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemPurchaseStatus | EnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemPurchaseStatus[] | ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemPurchaseStatus[] | ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemPurchaseStatusNullableFilter<$PrismaModel> | $Enums.SystemPurchaseStatus | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SystemPurchaseCountOrderByAggregateInput = {
    id?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerBusinessName?: SortOrder
    customerCountry?: SortOrder
    customerState?: SortOrder
    customerCity?: SortOrder
    status?: SortOrder
    receiptUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemPurchaseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SystemPurchaseMaxOrderByAggregateInput = {
    id?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerBusinessName?: SortOrder
    customerCountry?: SortOrder
    customerState?: SortOrder
    customerCity?: SortOrder
    status?: SortOrder
    receiptUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemPurchaseMinOrderByAggregateInput = {
    id?: SortOrder
    stripeSessionId?: SortOrder
    stripePaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    customerId?: SortOrder
    customerName?: SortOrder
    customerEmail?: SortOrder
    customerPhone?: SortOrder
    customerBusinessName?: SortOrder
    customerCountry?: SortOrder
    customerState?: SortOrder
    customerCity?: SortOrder
    status?: SortOrder
    receiptUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SystemPurchaseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type EnumSystemPurchaseStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemPurchaseStatus | EnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemPurchaseStatus[] | ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemPurchaseStatus[] | ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemPurchaseStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.SystemPurchaseStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSystemPurchaseStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumSystemPurchaseStatusNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ScheduleDateCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    firtName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    message?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleDateMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    firtName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    message?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ScheduleDateMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyAddress?: SortOrder
    firtName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    state?: SortOrder
    city?: SortOrder
    zip?: SortOrder
    message?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableEnumSystemPurchaseStatusFieldUpdateOperationsInput = {
    set?: $Enums.SystemPurchaseStatus | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumSystemPurchaseStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemPurchaseStatus | EnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemPurchaseStatus[] | ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemPurchaseStatus[] | ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemPurchaseStatusNullableFilter<$PrismaModel> | $Enums.SystemPurchaseStatus | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedEnumSystemPurchaseStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SystemPurchaseStatus | EnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.SystemPurchaseStatus[] | ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.SystemPurchaseStatus[] | ListEnumSystemPurchaseStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumSystemPurchaseStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.SystemPurchaseStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumSystemPurchaseStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumSystemPurchaseStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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