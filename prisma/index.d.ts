
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
 * Model learn
 * 
 */
export type learn = $Result.DefaultSelection<Prisma.$learnPayload>
/**
 * Model nsfw_content
 * 
 */
export type nsfw_content = $Result.DefaultSelection<Prisma.$nsfw_contentPayload>
/**
 * Model statement
 * 
 */
export type statement = $Result.DefaultSelection<Prisma.$statementPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Learns
 * const learns = await prisma.learn.findMany()
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
   * // Fetch zero or more Learns
   * const learns = await prisma.learn.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.learn`: Exposes CRUD operations for the **learn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Learns
    * const learns = await prisma.learn.findMany()
    * ```
    */
  get learn(): Prisma.learnDelegate<ExtArgs>;

  /**
   * `prisma.nsfw_content`: Exposes CRUD operations for the **nsfw_content** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nsfw_contents
    * const nsfw_contents = await prisma.nsfw_content.findMany()
    * ```
    */
  get nsfw_content(): Prisma.nsfw_contentDelegate<ExtArgs>;

  /**
   * `prisma.statement`: Exposes CRUD operations for the **statement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statements
    * const statements = await prisma.statement.findMany()
    * ```
    */
  get statement(): Prisma.statementDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    learn: 'learn',
    nsfw_content: 'nsfw_content',
    statement: 'statement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "learn" | "nsfw_content" | "statement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      learn: {
        payload: Prisma.$learnPayload<ExtArgs>
        fields: Prisma.learnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.learnFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.learnFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload>
          }
          findFirst: {
            args: Prisma.learnFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.learnFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload>
          }
          findMany: {
            args: Prisma.learnFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload>[]
          }
          create: {
            args: Prisma.learnCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload>
          }
          createMany: {
            args: Prisma.learnCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.learnDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload>
          }
          update: {
            args: Prisma.learnUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload>
          }
          deleteMany: {
            args: Prisma.learnDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.learnUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.learnUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$learnPayload>
          }
          aggregate: {
            args: Prisma.LearnAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLearn>
          }
          groupBy: {
            args: Prisma.learnGroupByArgs<ExtArgs>
            result: $Utils.Optional<LearnGroupByOutputType>[]
          }
          count: {
            args: Prisma.learnCountArgs<ExtArgs>
            result: $Utils.Optional<LearnCountAggregateOutputType> | number
          }
        }
      }
      nsfw_content: {
        payload: Prisma.$nsfw_contentPayload<ExtArgs>
        fields: Prisma.nsfw_contentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nsfw_contentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nsfw_contentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload>
          }
          findFirst: {
            args: Prisma.nsfw_contentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nsfw_contentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload>
          }
          findMany: {
            args: Prisma.nsfw_contentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload>[]
          }
          create: {
            args: Prisma.nsfw_contentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload>
          }
          createMany: {
            args: Prisma.nsfw_contentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.nsfw_contentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload>
          }
          update: {
            args: Prisma.nsfw_contentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload>
          }
          deleteMany: {
            args: Prisma.nsfw_contentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nsfw_contentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.nsfw_contentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nsfw_contentPayload>
          }
          aggregate: {
            args: Prisma.Nsfw_contentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNsfw_content>
          }
          groupBy: {
            args: Prisma.nsfw_contentGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nsfw_contentGroupByOutputType>[]
          }
          count: {
            args: Prisma.nsfw_contentCountArgs<ExtArgs>
            result: $Utils.Optional<Nsfw_contentCountAggregateOutputType> | number
          }
        }
      }
      statement: {
        payload: Prisma.$statementPayload<ExtArgs>
        fields: Prisma.statementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.statementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.statementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload>
          }
          findFirst: {
            args: Prisma.statementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.statementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload>
          }
          findMany: {
            args: Prisma.statementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload>[]
          }
          create: {
            args: Prisma.statementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload>
          }
          createMany: {
            args: Prisma.statementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.statementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload>
          }
          update: {
            args: Prisma.statementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload>
          }
          deleteMany: {
            args: Prisma.statementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.statementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.statementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$statementPayload>
          }
          aggregate: {
            args: Prisma.StatementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatement>
          }
          groupBy: {
            args: Prisma.statementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatementGroupByOutputType>[]
          }
          count: {
            args: Prisma.statementCountArgs<ExtArgs>
            result: $Utils.Optional<StatementCountAggregateOutputType> | number
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
   * Models
   */

  /**
   * Model learn
   */

  export type AggregateLearn = {
    _count: LearnCountAggregateOutputType | null
    _avg: LearnAvgAggregateOutputType | null
    _sum: LearnSumAggregateOutputType | null
    _min: LearnMinAggregateOutputType | null
    _max: LearnMaxAggregateOutputType | null
  }

  export type LearnAvgAggregateOutputType = {
    id: number | null
  }

  export type LearnSumAggregateOutputType = {
    id: number | null
  }

  export type LearnMinAggregateOutputType = {
    id: number | null
    command: string | null
    result: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type LearnMaxAggregateOutputType = {
    id: number | null
    command: string | null
    result: string | null
    user_id: string | null
    created_at: Date | null
  }

  export type LearnCountAggregateOutputType = {
    id: number
    command: number
    result: number
    user_id: number
    created_at: number
    _all: number
  }


  export type LearnAvgAggregateInputType = {
    id?: true
  }

  export type LearnSumAggregateInputType = {
    id?: true
  }

  export type LearnMinAggregateInputType = {
    id?: true
    command?: true
    result?: true
    user_id?: true
    created_at?: true
  }

  export type LearnMaxAggregateInputType = {
    id?: true
    command?: true
    result?: true
    user_id?: true
    created_at?: true
  }

  export type LearnCountAggregateInputType = {
    id?: true
    command?: true
    result?: true
    user_id?: true
    created_at?: true
    _all?: true
  }

  export type LearnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which learn to aggregate.
     */
    where?: learnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of learns to fetch.
     */
    orderBy?: learnOrderByWithRelationInput | learnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: learnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` learns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` learns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned learns
    **/
    _count?: true | LearnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LearnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LearnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LearnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LearnMaxAggregateInputType
  }

  export type GetLearnAggregateType<T extends LearnAggregateArgs> = {
        [P in keyof T & keyof AggregateLearn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLearn[P]>
      : GetScalarType<T[P], AggregateLearn[P]>
  }




  export type learnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: learnWhereInput
    orderBy?: learnOrderByWithAggregationInput | learnOrderByWithAggregationInput[]
    by: LearnScalarFieldEnum[] | LearnScalarFieldEnum
    having?: learnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LearnCountAggregateInputType | true
    _avg?: LearnAvgAggregateInputType
    _sum?: LearnSumAggregateInputType
    _min?: LearnMinAggregateInputType
    _max?: LearnMaxAggregateInputType
  }

  export type LearnGroupByOutputType = {
    id: number
    command: string
    result: string
    user_id: string
    created_at: Date
    _count: LearnCountAggregateOutputType | null
    _avg: LearnAvgAggregateOutputType | null
    _sum: LearnSumAggregateOutputType | null
    _min: LearnMinAggregateOutputType | null
    _max: LearnMaxAggregateOutputType | null
  }

  type GetLearnGroupByPayload<T extends learnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LearnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LearnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LearnGroupByOutputType[P]>
            : GetScalarType<T[P], LearnGroupByOutputType[P]>
        }
      >
    >


  export type learnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    command?: boolean
    result?: boolean
    user_id?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["learn"]>


  export type learnSelectScalar = {
    id?: boolean
    command?: boolean
    result?: boolean
    user_id?: boolean
    created_at?: boolean
  }


  export type $learnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "learn"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      command: string
      result: string
      user_id: string
      created_at: Date
    }, ExtArgs["result"]["learn"]>
    composites: {}
  }

  type learnGetPayload<S extends boolean | null | undefined | learnDefaultArgs> = $Result.GetResult<Prisma.$learnPayload, S>

  type learnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<learnFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LearnCountAggregateInputType | true
    }

  export interface learnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['learn'], meta: { name: 'learn' } }
    /**
     * Find zero or one Learn that matches the filter.
     * @param {learnFindUniqueArgs} args - Arguments to find a Learn
     * @example
     * // Get one Learn
     * const learn = await prisma.learn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends learnFindUniqueArgs>(args: SelectSubset<T, learnFindUniqueArgs<ExtArgs>>): Prisma__learnClient<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Learn that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {learnFindUniqueOrThrowArgs} args - Arguments to find a Learn
     * @example
     * // Get one Learn
     * const learn = await prisma.learn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends learnFindUniqueOrThrowArgs>(args: SelectSubset<T, learnFindUniqueOrThrowArgs<ExtArgs>>): Prisma__learnClient<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Learn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learnFindFirstArgs} args - Arguments to find a Learn
     * @example
     * // Get one Learn
     * const learn = await prisma.learn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends learnFindFirstArgs>(args?: SelectSubset<T, learnFindFirstArgs<ExtArgs>>): Prisma__learnClient<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Learn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learnFindFirstOrThrowArgs} args - Arguments to find a Learn
     * @example
     * // Get one Learn
     * const learn = await prisma.learn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends learnFindFirstOrThrowArgs>(args?: SelectSubset<T, learnFindFirstOrThrowArgs<ExtArgs>>): Prisma__learnClient<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Learns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learnFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Learns
     * const learns = await prisma.learn.findMany()
     * 
     * // Get first 10 Learns
     * const learns = await prisma.learn.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const learnWithIdOnly = await prisma.learn.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends learnFindManyArgs>(args?: SelectSubset<T, learnFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Learn.
     * @param {learnCreateArgs} args - Arguments to create a Learn.
     * @example
     * // Create one Learn
     * const Learn = await prisma.learn.create({
     *   data: {
     *     // ... data to create a Learn
     *   }
     * })
     * 
     */
    create<T extends learnCreateArgs>(args: SelectSubset<T, learnCreateArgs<ExtArgs>>): Prisma__learnClient<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Learns.
     * @param {learnCreateManyArgs} args - Arguments to create many Learns.
     * @example
     * // Create many Learns
     * const learn = await prisma.learn.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends learnCreateManyArgs>(args?: SelectSubset<T, learnCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Learn.
     * @param {learnDeleteArgs} args - Arguments to delete one Learn.
     * @example
     * // Delete one Learn
     * const Learn = await prisma.learn.delete({
     *   where: {
     *     // ... filter to delete one Learn
     *   }
     * })
     * 
     */
    delete<T extends learnDeleteArgs>(args: SelectSubset<T, learnDeleteArgs<ExtArgs>>): Prisma__learnClient<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Learn.
     * @param {learnUpdateArgs} args - Arguments to update one Learn.
     * @example
     * // Update one Learn
     * const learn = await prisma.learn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends learnUpdateArgs>(args: SelectSubset<T, learnUpdateArgs<ExtArgs>>): Prisma__learnClient<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Learns.
     * @param {learnDeleteManyArgs} args - Arguments to filter Learns to delete.
     * @example
     * // Delete a few Learns
     * const { count } = await prisma.learn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends learnDeleteManyArgs>(args?: SelectSubset<T, learnDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Learns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Learns
     * const learn = await prisma.learn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends learnUpdateManyArgs>(args: SelectSubset<T, learnUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Learn.
     * @param {learnUpsertArgs} args - Arguments to update or create a Learn.
     * @example
     * // Update or create a Learn
     * const learn = await prisma.learn.upsert({
     *   create: {
     *     // ... data to create a Learn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Learn we want to update
     *   }
     * })
     */
    upsert<T extends learnUpsertArgs>(args: SelectSubset<T, learnUpsertArgs<ExtArgs>>): Prisma__learnClient<$Result.GetResult<Prisma.$learnPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Learns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learnCountArgs} args - Arguments to filter Learns to count.
     * @example
     * // Count the number of Learns
     * const count = await prisma.learn.count({
     *   where: {
     *     // ... the filter for the Learns we want to count
     *   }
     * })
    **/
    count<T extends learnCountArgs>(
      args?: Subset<T, learnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LearnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Learn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LearnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LearnAggregateArgs>(args: Subset<T, LearnAggregateArgs>): Prisma.PrismaPromise<GetLearnAggregateType<T>>

    /**
     * Group by Learn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {learnGroupByArgs} args - Group by arguments.
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
      T extends learnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: learnGroupByArgs['orderBy'] }
        : { orderBy?: learnGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, learnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLearnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the learn model
   */
  readonly fields: learnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for learn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__learnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the learn model
   */ 
  interface learnFieldRefs {
    readonly id: FieldRef<"learn", 'Int'>
    readonly command: FieldRef<"learn", 'String'>
    readonly result: FieldRef<"learn", 'String'>
    readonly user_id: FieldRef<"learn", 'String'>
    readonly created_at: FieldRef<"learn", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * learn findUnique
   */
  export type learnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * Filter, which learn to fetch.
     */
    where: learnWhereUniqueInput
  }

  /**
   * learn findUniqueOrThrow
   */
  export type learnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * Filter, which learn to fetch.
     */
    where: learnWhereUniqueInput
  }

  /**
   * learn findFirst
   */
  export type learnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * Filter, which learn to fetch.
     */
    where?: learnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of learns to fetch.
     */
    orderBy?: learnOrderByWithRelationInput | learnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for learns.
     */
    cursor?: learnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` learns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` learns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of learns.
     */
    distinct?: LearnScalarFieldEnum | LearnScalarFieldEnum[]
  }

  /**
   * learn findFirstOrThrow
   */
  export type learnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * Filter, which learn to fetch.
     */
    where?: learnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of learns to fetch.
     */
    orderBy?: learnOrderByWithRelationInput | learnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for learns.
     */
    cursor?: learnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` learns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` learns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of learns.
     */
    distinct?: LearnScalarFieldEnum | LearnScalarFieldEnum[]
  }

  /**
   * learn findMany
   */
  export type learnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * Filter, which learns to fetch.
     */
    where?: learnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of learns to fetch.
     */
    orderBy?: learnOrderByWithRelationInput | learnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing learns.
     */
    cursor?: learnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` learns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` learns.
     */
    skip?: number
    distinct?: LearnScalarFieldEnum | LearnScalarFieldEnum[]
  }

  /**
   * learn create
   */
  export type learnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * The data needed to create a learn.
     */
    data: XOR<learnCreateInput, learnUncheckedCreateInput>
  }

  /**
   * learn createMany
   */
  export type learnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many learns.
     */
    data: learnCreateManyInput | learnCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * learn update
   */
  export type learnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * The data needed to update a learn.
     */
    data: XOR<learnUpdateInput, learnUncheckedUpdateInput>
    /**
     * Choose, which learn to update.
     */
    where: learnWhereUniqueInput
  }

  /**
   * learn updateMany
   */
  export type learnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update learns.
     */
    data: XOR<learnUpdateManyMutationInput, learnUncheckedUpdateManyInput>
    /**
     * Filter which learns to update
     */
    where?: learnWhereInput
  }

  /**
   * learn upsert
   */
  export type learnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * The filter to search for the learn to update in case it exists.
     */
    where: learnWhereUniqueInput
    /**
     * In case the learn found by the `where` argument doesn't exist, create a new learn with this data.
     */
    create: XOR<learnCreateInput, learnUncheckedCreateInput>
    /**
     * In case the learn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<learnUpdateInput, learnUncheckedUpdateInput>
  }

  /**
   * learn delete
   */
  export type learnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
    /**
     * Filter which learn to delete.
     */
    where: learnWhereUniqueInput
  }

  /**
   * learn deleteMany
   */
  export type learnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which learns to delete
     */
    where?: learnWhereInput
  }

  /**
   * learn without action
   */
  export type learnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the learn
     */
    select?: learnSelect<ExtArgs> | null
  }


  /**
   * Model nsfw_content
   */

  export type AggregateNsfw_content = {
    _count: Nsfw_contentCountAggregateOutputType | null
    _avg: Nsfw_contentAvgAggregateOutputType | null
    _sum: Nsfw_contentSumAggregateOutputType | null
    _min: Nsfw_contentMinAggregateOutputType | null
    _max: Nsfw_contentMaxAggregateOutputType | null
  }

  export type Nsfw_contentAvgAggregateOutputType = {
    id: number | null
  }

  export type Nsfw_contentSumAggregateOutputType = {
    id: number | null
  }

  export type Nsfw_contentMinAggregateOutputType = {
    id: number | null
    text: string | null
    created_at: Date | null
    persona: string | null
  }

  export type Nsfw_contentMaxAggregateOutputType = {
    id: number | null
    text: string | null
    created_at: Date | null
    persona: string | null
  }

  export type Nsfw_contentCountAggregateOutputType = {
    id: number
    text: number
    created_at: number
    persona: number
    _all: number
  }


  export type Nsfw_contentAvgAggregateInputType = {
    id?: true
  }

  export type Nsfw_contentSumAggregateInputType = {
    id?: true
  }

  export type Nsfw_contentMinAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    persona?: true
  }

  export type Nsfw_contentMaxAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    persona?: true
  }

  export type Nsfw_contentCountAggregateInputType = {
    id?: true
    text?: true
    created_at?: true
    persona?: true
    _all?: true
  }

  export type Nsfw_contentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nsfw_content to aggregate.
     */
    where?: nsfw_contentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nsfw_contents to fetch.
     */
    orderBy?: nsfw_contentOrderByWithRelationInput | nsfw_contentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nsfw_contentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nsfw_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nsfw_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nsfw_contents
    **/
    _count?: true | Nsfw_contentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Nsfw_contentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Nsfw_contentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nsfw_contentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nsfw_contentMaxAggregateInputType
  }

  export type GetNsfw_contentAggregateType<T extends Nsfw_contentAggregateArgs> = {
        [P in keyof T & keyof AggregateNsfw_content]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNsfw_content[P]>
      : GetScalarType<T[P], AggregateNsfw_content[P]>
  }




  export type nsfw_contentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nsfw_contentWhereInput
    orderBy?: nsfw_contentOrderByWithAggregationInput | nsfw_contentOrderByWithAggregationInput[]
    by: Nsfw_contentScalarFieldEnum[] | Nsfw_contentScalarFieldEnum
    having?: nsfw_contentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nsfw_contentCountAggregateInputType | true
    _avg?: Nsfw_contentAvgAggregateInputType
    _sum?: Nsfw_contentSumAggregateInputType
    _min?: Nsfw_contentMinAggregateInputType
    _max?: Nsfw_contentMaxAggregateInputType
  }

  export type Nsfw_contentGroupByOutputType = {
    id: number
    text: string
    created_at: Date | null
    persona: string
    _count: Nsfw_contentCountAggregateOutputType | null
    _avg: Nsfw_contentAvgAggregateOutputType | null
    _sum: Nsfw_contentSumAggregateOutputType | null
    _min: Nsfw_contentMinAggregateOutputType | null
    _max: Nsfw_contentMaxAggregateOutputType | null
  }

  type GetNsfw_contentGroupByPayload<T extends nsfw_contentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nsfw_contentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nsfw_contentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nsfw_contentGroupByOutputType[P]>
            : GetScalarType<T[P], Nsfw_contentGroupByOutputType[P]>
        }
      >
    >


  export type nsfw_contentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    created_at?: boolean
    persona?: boolean
  }, ExtArgs["result"]["nsfw_content"]>


  export type nsfw_contentSelectScalar = {
    id?: boolean
    text?: boolean
    created_at?: boolean
    persona?: boolean
  }


  export type $nsfw_contentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nsfw_content"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      created_at: Date | null
      persona: string
    }, ExtArgs["result"]["nsfw_content"]>
    composites: {}
  }

  type nsfw_contentGetPayload<S extends boolean | null | undefined | nsfw_contentDefaultArgs> = $Result.GetResult<Prisma.$nsfw_contentPayload, S>

  type nsfw_contentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<nsfw_contentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Nsfw_contentCountAggregateInputType | true
    }

  export interface nsfw_contentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nsfw_content'], meta: { name: 'nsfw_content' } }
    /**
     * Find zero or one Nsfw_content that matches the filter.
     * @param {nsfw_contentFindUniqueArgs} args - Arguments to find a Nsfw_content
     * @example
     * // Get one Nsfw_content
     * const nsfw_content = await prisma.nsfw_content.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nsfw_contentFindUniqueArgs>(args: SelectSubset<T, nsfw_contentFindUniqueArgs<ExtArgs>>): Prisma__nsfw_contentClient<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Nsfw_content that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {nsfw_contentFindUniqueOrThrowArgs} args - Arguments to find a Nsfw_content
     * @example
     * // Get one Nsfw_content
     * const nsfw_content = await prisma.nsfw_content.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nsfw_contentFindUniqueOrThrowArgs>(args: SelectSubset<T, nsfw_contentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nsfw_contentClient<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Nsfw_content that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nsfw_contentFindFirstArgs} args - Arguments to find a Nsfw_content
     * @example
     * // Get one Nsfw_content
     * const nsfw_content = await prisma.nsfw_content.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nsfw_contentFindFirstArgs>(args?: SelectSubset<T, nsfw_contentFindFirstArgs<ExtArgs>>): Prisma__nsfw_contentClient<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Nsfw_content that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nsfw_contentFindFirstOrThrowArgs} args - Arguments to find a Nsfw_content
     * @example
     * // Get one Nsfw_content
     * const nsfw_content = await prisma.nsfw_content.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nsfw_contentFindFirstOrThrowArgs>(args?: SelectSubset<T, nsfw_contentFindFirstOrThrowArgs<ExtArgs>>): Prisma__nsfw_contentClient<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Nsfw_contents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nsfw_contentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nsfw_contents
     * const nsfw_contents = await prisma.nsfw_content.findMany()
     * 
     * // Get first 10 Nsfw_contents
     * const nsfw_contents = await prisma.nsfw_content.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nsfw_contentWithIdOnly = await prisma.nsfw_content.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nsfw_contentFindManyArgs>(args?: SelectSubset<T, nsfw_contentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Nsfw_content.
     * @param {nsfw_contentCreateArgs} args - Arguments to create a Nsfw_content.
     * @example
     * // Create one Nsfw_content
     * const Nsfw_content = await prisma.nsfw_content.create({
     *   data: {
     *     // ... data to create a Nsfw_content
     *   }
     * })
     * 
     */
    create<T extends nsfw_contentCreateArgs>(args: SelectSubset<T, nsfw_contentCreateArgs<ExtArgs>>): Prisma__nsfw_contentClient<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Nsfw_contents.
     * @param {nsfw_contentCreateManyArgs} args - Arguments to create many Nsfw_contents.
     * @example
     * // Create many Nsfw_contents
     * const nsfw_content = await prisma.nsfw_content.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nsfw_contentCreateManyArgs>(args?: SelectSubset<T, nsfw_contentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Nsfw_content.
     * @param {nsfw_contentDeleteArgs} args - Arguments to delete one Nsfw_content.
     * @example
     * // Delete one Nsfw_content
     * const Nsfw_content = await prisma.nsfw_content.delete({
     *   where: {
     *     // ... filter to delete one Nsfw_content
     *   }
     * })
     * 
     */
    delete<T extends nsfw_contentDeleteArgs>(args: SelectSubset<T, nsfw_contentDeleteArgs<ExtArgs>>): Prisma__nsfw_contentClient<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Nsfw_content.
     * @param {nsfw_contentUpdateArgs} args - Arguments to update one Nsfw_content.
     * @example
     * // Update one Nsfw_content
     * const nsfw_content = await prisma.nsfw_content.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nsfw_contentUpdateArgs>(args: SelectSubset<T, nsfw_contentUpdateArgs<ExtArgs>>): Prisma__nsfw_contentClient<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Nsfw_contents.
     * @param {nsfw_contentDeleteManyArgs} args - Arguments to filter Nsfw_contents to delete.
     * @example
     * // Delete a few Nsfw_contents
     * const { count } = await prisma.nsfw_content.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nsfw_contentDeleteManyArgs>(args?: SelectSubset<T, nsfw_contentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nsfw_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nsfw_contentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nsfw_contents
     * const nsfw_content = await prisma.nsfw_content.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nsfw_contentUpdateManyArgs>(args: SelectSubset<T, nsfw_contentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Nsfw_content.
     * @param {nsfw_contentUpsertArgs} args - Arguments to update or create a Nsfw_content.
     * @example
     * // Update or create a Nsfw_content
     * const nsfw_content = await prisma.nsfw_content.upsert({
     *   create: {
     *     // ... data to create a Nsfw_content
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nsfw_content we want to update
     *   }
     * })
     */
    upsert<T extends nsfw_contentUpsertArgs>(args: SelectSubset<T, nsfw_contentUpsertArgs<ExtArgs>>): Prisma__nsfw_contentClient<$Result.GetResult<Prisma.$nsfw_contentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Nsfw_contents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nsfw_contentCountArgs} args - Arguments to filter Nsfw_contents to count.
     * @example
     * // Count the number of Nsfw_contents
     * const count = await prisma.nsfw_content.count({
     *   where: {
     *     // ... the filter for the Nsfw_contents we want to count
     *   }
     * })
    **/
    count<T extends nsfw_contentCountArgs>(
      args?: Subset<T, nsfw_contentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nsfw_contentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nsfw_content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nsfw_contentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Nsfw_contentAggregateArgs>(args: Subset<T, Nsfw_contentAggregateArgs>): Prisma.PrismaPromise<GetNsfw_contentAggregateType<T>>

    /**
     * Group by Nsfw_content.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nsfw_contentGroupByArgs} args - Group by arguments.
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
      T extends nsfw_contentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nsfw_contentGroupByArgs['orderBy'] }
        : { orderBy?: nsfw_contentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nsfw_contentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNsfw_contentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nsfw_content model
   */
  readonly fields: nsfw_contentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nsfw_content.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nsfw_contentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the nsfw_content model
   */ 
  interface nsfw_contentFieldRefs {
    readonly id: FieldRef<"nsfw_content", 'Int'>
    readonly text: FieldRef<"nsfw_content", 'String'>
    readonly created_at: FieldRef<"nsfw_content", 'DateTime'>
    readonly persona: FieldRef<"nsfw_content", 'String'>
  }
    

  // Custom InputTypes
  /**
   * nsfw_content findUnique
   */
  export type nsfw_contentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * Filter, which nsfw_content to fetch.
     */
    where: nsfw_contentWhereUniqueInput
  }

  /**
   * nsfw_content findUniqueOrThrow
   */
  export type nsfw_contentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * Filter, which nsfw_content to fetch.
     */
    where: nsfw_contentWhereUniqueInput
  }

  /**
   * nsfw_content findFirst
   */
  export type nsfw_contentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * Filter, which nsfw_content to fetch.
     */
    where?: nsfw_contentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nsfw_contents to fetch.
     */
    orderBy?: nsfw_contentOrderByWithRelationInput | nsfw_contentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nsfw_contents.
     */
    cursor?: nsfw_contentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nsfw_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nsfw_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nsfw_contents.
     */
    distinct?: Nsfw_contentScalarFieldEnum | Nsfw_contentScalarFieldEnum[]
  }

  /**
   * nsfw_content findFirstOrThrow
   */
  export type nsfw_contentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * Filter, which nsfw_content to fetch.
     */
    where?: nsfw_contentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nsfw_contents to fetch.
     */
    orderBy?: nsfw_contentOrderByWithRelationInput | nsfw_contentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nsfw_contents.
     */
    cursor?: nsfw_contentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nsfw_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nsfw_contents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nsfw_contents.
     */
    distinct?: Nsfw_contentScalarFieldEnum | Nsfw_contentScalarFieldEnum[]
  }

  /**
   * nsfw_content findMany
   */
  export type nsfw_contentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * Filter, which nsfw_contents to fetch.
     */
    where?: nsfw_contentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nsfw_contents to fetch.
     */
    orderBy?: nsfw_contentOrderByWithRelationInput | nsfw_contentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nsfw_contents.
     */
    cursor?: nsfw_contentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nsfw_contents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nsfw_contents.
     */
    skip?: number
    distinct?: Nsfw_contentScalarFieldEnum | Nsfw_contentScalarFieldEnum[]
  }

  /**
   * nsfw_content create
   */
  export type nsfw_contentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * The data needed to create a nsfw_content.
     */
    data?: XOR<nsfw_contentCreateInput, nsfw_contentUncheckedCreateInput>
  }

  /**
   * nsfw_content createMany
   */
  export type nsfw_contentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nsfw_contents.
     */
    data: nsfw_contentCreateManyInput | nsfw_contentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nsfw_content update
   */
  export type nsfw_contentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * The data needed to update a nsfw_content.
     */
    data: XOR<nsfw_contentUpdateInput, nsfw_contentUncheckedUpdateInput>
    /**
     * Choose, which nsfw_content to update.
     */
    where: nsfw_contentWhereUniqueInput
  }

  /**
   * nsfw_content updateMany
   */
  export type nsfw_contentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nsfw_contents.
     */
    data: XOR<nsfw_contentUpdateManyMutationInput, nsfw_contentUncheckedUpdateManyInput>
    /**
     * Filter which nsfw_contents to update
     */
    where?: nsfw_contentWhereInput
  }

  /**
   * nsfw_content upsert
   */
  export type nsfw_contentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * The filter to search for the nsfw_content to update in case it exists.
     */
    where: nsfw_contentWhereUniqueInput
    /**
     * In case the nsfw_content found by the `where` argument doesn't exist, create a new nsfw_content with this data.
     */
    create: XOR<nsfw_contentCreateInput, nsfw_contentUncheckedCreateInput>
    /**
     * In case the nsfw_content was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nsfw_contentUpdateInput, nsfw_contentUncheckedUpdateInput>
  }

  /**
   * nsfw_content delete
   */
  export type nsfw_contentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
    /**
     * Filter which nsfw_content to delete.
     */
    where: nsfw_contentWhereUniqueInput
  }

  /**
   * nsfw_content deleteMany
   */
  export type nsfw_contentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nsfw_contents to delete
     */
    where?: nsfw_contentWhereInput
  }

  /**
   * nsfw_content without action
   */
  export type nsfw_contentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nsfw_content
     */
    select?: nsfw_contentSelect<ExtArgs> | null
  }


  /**
   * Model statement
   */

  export type AggregateStatement = {
    _count: StatementCountAggregateOutputType | null
    _avg: StatementAvgAggregateOutputType | null
    _sum: StatementSumAggregateOutputType | null
    _min: StatementMinAggregateOutputType | null
    _max: StatementMaxAggregateOutputType | null
  }

  export type StatementAvgAggregateOutputType = {
    id: number | null
  }

  export type StatementSumAggregateOutputType = {
    id: number | null
  }

  export type StatementMinAggregateOutputType = {
    id: number | null
    text: string | null
    search_text: string | null
    conversation: string | null
    created_at: Date | null
    in_response_to: string | null
    search_in_response_to: string | null
    persona: string | null
  }

  export type StatementMaxAggregateOutputType = {
    id: number | null
    text: string | null
    search_text: string | null
    conversation: string | null
    created_at: Date | null
    in_response_to: string | null
    search_in_response_to: string | null
    persona: string | null
  }

  export type StatementCountAggregateOutputType = {
    id: number
    text: number
    search_text: number
    conversation: number
    created_at: number
    in_response_to: number
    search_in_response_to: number
    persona: number
    _all: number
  }


  export type StatementAvgAggregateInputType = {
    id?: true
  }

  export type StatementSumAggregateInputType = {
    id?: true
  }

  export type StatementMinAggregateInputType = {
    id?: true
    text?: true
    search_text?: true
    conversation?: true
    created_at?: true
    in_response_to?: true
    search_in_response_to?: true
    persona?: true
  }

  export type StatementMaxAggregateInputType = {
    id?: true
    text?: true
    search_text?: true
    conversation?: true
    created_at?: true
    in_response_to?: true
    search_in_response_to?: true
    persona?: true
  }

  export type StatementCountAggregateInputType = {
    id?: true
    text?: true
    search_text?: true
    conversation?: true
    created_at?: true
    in_response_to?: true
    search_in_response_to?: true
    persona?: true
    _all?: true
  }

  export type StatementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statement to aggregate.
     */
    where?: statementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statements to fetch.
     */
    orderBy?: statementOrderByWithRelationInput | statementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: statementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned statements
    **/
    _count?: true | StatementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatementMaxAggregateInputType
  }

  export type GetStatementAggregateType<T extends StatementAggregateArgs> = {
        [P in keyof T & keyof AggregateStatement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatement[P]>
      : GetScalarType<T[P], AggregateStatement[P]>
  }




  export type statementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: statementWhereInput
    orderBy?: statementOrderByWithAggregationInput | statementOrderByWithAggregationInput[]
    by: StatementScalarFieldEnum[] | StatementScalarFieldEnum
    having?: statementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatementCountAggregateInputType | true
    _avg?: StatementAvgAggregateInputType
    _sum?: StatementSumAggregateInputType
    _min?: StatementMinAggregateInputType
    _max?: StatementMaxAggregateInputType
  }

  export type StatementGroupByOutputType = {
    id: number
    text: string
    search_text: string
    conversation: string
    created_at: Date | null
    in_response_to: string | null
    search_in_response_to: string
    persona: string
    _count: StatementCountAggregateOutputType | null
    _avg: StatementAvgAggregateOutputType | null
    _sum: StatementSumAggregateOutputType | null
    _min: StatementMinAggregateOutputType | null
    _max: StatementMaxAggregateOutputType | null
  }

  type GetStatementGroupByPayload<T extends statementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatementGroupByOutputType[P]>
            : GetScalarType<T[P], StatementGroupByOutputType[P]>
        }
      >
    >


  export type statementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    search_text?: boolean
    conversation?: boolean
    created_at?: boolean
    in_response_to?: boolean
    search_in_response_to?: boolean
    persona?: boolean
  }, ExtArgs["result"]["statement"]>


  export type statementSelectScalar = {
    id?: boolean
    text?: boolean
    search_text?: boolean
    conversation?: boolean
    created_at?: boolean
    in_response_to?: boolean
    search_in_response_to?: boolean
    persona?: boolean
  }


  export type $statementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "statement"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      text: string
      search_text: string
      conversation: string
      created_at: Date | null
      in_response_to: string | null
      search_in_response_to: string
      persona: string
    }, ExtArgs["result"]["statement"]>
    composites: {}
  }

  type statementGetPayload<S extends boolean | null | undefined | statementDefaultArgs> = $Result.GetResult<Prisma.$statementPayload, S>

  type statementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<statementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StatementCountAggregateInputType | true
    }

  export interface statementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['statement'], meta: { name: 'statement' } }
    /**
     * Find zero or one Statement that matches the filter.
     * @param {statementFindUniqueArgs} args - Arguments to find a Statement
     * @example
     * // Get one Statement
     * const statement = await prisma.statement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends statementFindUniqueArgs>(args: SelectSubset<T, statementFindUniqueArgs<ExtArgs>>): Prisma__statementClient<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Statement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {statementFindUniqueOrThrowArgs} args - Arguments to find a Statement
     * @example
     * // Get one Statement
     * const statement = await prisma.statement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends statementFindUniqueOrThrowArgs>(args: SelectSubset<T, statementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__statementClient<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Statement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statementFindFirstArgs} args - Arguments to find a Statement
     * @example
     * // Get one Statement
     * const statement = await prisma.statement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends statementFindFirstArgs>(args?: SelectSubset<T, statementFindFirstArgs<ExtArgs>>): Prisma__statementClient<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Statement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statementFindFirstOrThrowArgs} args - Arguments to find a Statement
     * @example
     * // Get one Statement
     * const statement = await prisma.statement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends statementFindFirstOrThrowArgs>(args?: SelectSubset<T, statementFindFirstOrThrowArgs<ExtArgs>>): Prisma__statementClient<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Statements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statements
     * const statements = await prisma.statement.findMany()
     * 
     * // Get first 10 Statements
     * const statements = await prisma.statement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statementWithIdOnly = await prisma.statement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends statementFindManyArgs>(args?: SelectSubset<T, statementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Statement.
     * @param {statementCreateArgs} args - Arguments to create a Statement.
     * @example
     * // Create one Statement
     * const Statement = await prisma.statement.create({
     *   data: {
     *     // ... data to create a Statement
     *   }
     * })
     * 
     */
    create<T extends statementCreateArgs>(args: SelectSubset<T, statementCreateArgs<ExtArgs>>): Prisma__statementClient<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Statements.
     * @param {statementCreateManyArgs} args - Arguments to create many Statements.
     * @example
     * // Create many Statements
     * const statement = await prisma.statement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends statementCreateManyArgs>(args?: SelectSubset<T, statementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Statement.
     * @param {statementDeleteArgs} args - Arguments to delete one Statement.
     * @example
     * // Delete one Statement
     * const Statement = await prisma.statement.delete({
     *   where: {
     *     // ... filter to delete one Statement
     *   }
     * })
     * 
     */
    delete<T extends statementDeleteArgs>(args: SelectSubset<T, statementDeleteArgs<ExtArgs>>): Prisma__statementClient<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Statement.
     * @param {statementUpdateArgs} args - Arguments to update one Statement.
     * @example
     * // Update one Statement
     * const statement = await prisma.statement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends statementUpdateArgs>(args: SelectSubset<T, statementUpdateArgs<ExtArgs>>): Prisma__statementClient<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Statements.
     * @param {statementDeleteManyArgs} args - Arguments to filter Statements to delete.
     * @example
     * // Delete a few Statements
     * const { count } = await prisma.statement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends statementDeleteManyArgs>(args?: SelectSubset<T, statementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statements
     * const statement = await prisma.statement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends statementUpdateManyArgs>(args: SelectSubset<T, statementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Statement.
     * @param {statementUpsertArgs} args - Arguments to update or create a Statement.
     * @example
     * // Update or create a Statement
     * const statement = await prisma.statement.upsert({
     *   create: {
     *     // ... data to create a Statement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statement we want to update
     *   }
     * })
     */
    upsert<T extends statementUpsertArgs>(args: SelectSubset<T, statementUpsertArgs<ExtArgs>>): Prisma__statementClient<$Result.GetResult<Prisma.$statementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Statements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statementCountArgs} args - Arguments to filter Statements to count.
     * @example
     * // Count the number of Statements
     * const count = await prisma.statement.count({
     *   where: {
     *     // ... the filter for the Statements we want to count
     *   }
     * })
    **/
    count<T extends statementCountArgs>(
      args?: Subset<T, statementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatementAggregateArgs>(args: Subset<T, StatementAggregateArgs>): Prisma.PrismaPromise<GetStatementAggregateType<T>>

    /**
     * Group by Statement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {statementGroupByArgs} args - Group by arguments.
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
      T extends statementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: statementGroupByArgs['orderBy'] }
        : { orderBy?: statementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, statementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the statement model
   */
  readonly fields: statementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for statement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__statementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the statement model
   */ 
  interface statementFieldRefs {
    readonly id: FieldRef<"statement", 'Int'>
    readonly text: FieldRef<"statement", 'String'>
    readonly search_text: FieldRef<"statement", 'String'>
    readonly conversation: FieldRef<"statement", 'String'>
    readonly created_at: FieldRef<"statement", 'DateTime'>
    readonly in_response_to: FieldRef<"statement", 'String'>
    readonly search_in_response_to: FieldRef<"statement", 'String'>
    readonly persona: FieldRef<"statement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * statement findUnique
   */
  export type statementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * Filter, which statement to fetch.
     */
    where: statementWhereUniqueInput
  }

  /**
   * statement findUniqueOrThrow
   */
  export type statementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * Filter, which statement to fetch.
     */
    where: statementWhereUniqueInput
  }

  /**
   * statement findFirst
   */
  export type statementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * Filter, which statement to fetch.
     */
    where?: statementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statements to fetch.
     */
    orderBy?: statementOrderByWithRelationInput | statementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statements.
     */
    cursor?: statementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statements.
     */
    distinct?: StatementScalarFieldEnum | StatementScalarFieldEnum[]
  }

  /**
   * statement findFirstOrThrow
   */
  export type statementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * Filter, which statement to fetch.
     */
    where?: statementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statements to fetch.
     */
    orderBy?: statementOrderByWithRelationInput | statementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for statements.
     */
    cursor?: statementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of statements.
     */
    distinct?: StatementScalarFieldEnum | StatementScalarFieldEnum[]
  }

  /**
   * statement findMany
   */
  export type statementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * Filter, which statements to fetch.
     */
    where?: statementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of statements to fetch.
     */
    orderBy?: statementOrderByWithRelationInput | statementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing statements.
     */
    cursor?: statementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` statements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` statements.
     */
    skip?: number
    distinct?: StatementScalarFieldEnum | StatementScalarFieldEnum[]
  }

  /**
   * statement create
   */
  export type statementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * The data needed to create a statement.
     */
    data: XOR<statementCreateInput, statementUncheckedCreateInput>
  }

  /**
   * statement createMany
   */
  export type statementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many statements.
     */
    data: statementCreateManyInput | statementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * statement update
   */
  export type statementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * The data needed to update a statement.
     */
    data: XOR<statementUpdateInput, statementUncheckedUpdateInput>
    /**
     * Choose, which statement to update.
     */
    where: statementWhereUniqueInput
  }

  /**
   * statement updateMany
   */
  export type statementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update statements.
     */
    data: XOR<statementUpdateManyMutationInput, statementUncheckedUpdateManyInput>
    /**
     * Filter which statements to update
     */
    where?: statementWhereInput
  }

  /**
   * statement upsert
   */
  export type statementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * The filter to search for the statement to update in case it exists.
     */
    where: statementWhereUniqueInput
    /**
     * In case the statement found by the `where` argument doesn't exist, create a new statement with this data.
     */
    create: XOR<statementCreateInput, statementUncheckedCreateInput>
    /**
     * In case the statement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<statementUpdateInput, statementUncheckedUpdateInput>
  }

  /**
   * statement delete
   */
  export type statementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
    /**
     * Filter which statement to delete.
     */
    where: statementWhereUniqueInput
  }

  /**
   * statement deleteMany
   */
  export type statementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which statements to delete
     */
    where?: statementWhereInput
  }

  /**
   * statement without action
   */
  export type statementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the statement
     */
    select?: statementSelect<ExtArgs> | null
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


  export const LearnScalarFieldEnum: {
    id: 'id',
    command: 'command',
    result: 'result',
    user_id: 'user_id',
    created_at: 'created_at'
  };

  export type LearnScalarFieldEnum = (typeof LearnScalarFieldEnum)[keyof typeof LearnScalarFieldEnum]


  export const Nsfw_contentScalarFieldEnum: {
    id: 'id',
    text: 'text',
    created_at: 'created_at',
    persona: 'persona'
  };

  export type Nsfw_contentScalarFieldEnum = (typeof Nsfw_contentScalarFieldEnum)[keyof typeof Nsfw_contentScalarFieldEnum]


  export const StatementScalarFieldEnum: {
    id: 'id',
    text: 'text',
    search_text: 'search_text',
    conversation: 'conversation',
    created_at: 'created_at',
    in_response_to: 'in_response_to',
    search_in_response_to: 'search_in_response_to',
    persona: 'persona'
  };

  export type StatementScalarFieldEnum = (typeof StatementScalarFieldEnum)[keyof typeof StatementScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type learnWhereInput = {
    AND?: learnWhereInput | learnWhereInput[]
    OR?: learnWhereInput[]
    NOT?: learnWhereInput | learnWhereInput[]
    id?: IntFilter<"learn"> | number
    command?: StringFilter<"learn"> | string
    result?: StringFilter<"learn"> | string
    user_id?: StringFilter<"learn"> | string
    created_at?: DateTimeFilter<"learn"> | Date | string
  }

  export type learnOrderByWithRelationInput = {
    id?: SortOrder
    command?: SortOrder
    result?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type learnWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: learnWhereInput | learnWhereInput[]
    OR?: learnWhereInput[]
    NOT?: learnWhereInput | learnWhereInput[]
    command?: StringFilter<"learn"> | string
    result?: StringFilter<"learn"> | string
    user_id?: StringFilter<"learn"> | string
    created_at?: DateTimeFilter<"learn"> | Date | string
  }, "id">

  export type learnOrderByWithAggregationInput = {
    id?: SortOrder
    command?: SortOrder
    result?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    _count?: learnCountOrderByAggregateInput
    _avg?: learnAvgOrderByAggregateInput
    _max?: learnMaxOrderByAggregateInput
    _min?: learnMinOrderByAggregateInput
    _sum?: learnSumOrderByAggregateInput
  }

  export type learnScalarWhereWithAggregatesInput = {
    AND?: learnScalarWhereWithAggregatesInput | learnScalarWhereWithAggregatesInput[]
    OR?: learnScalarWhereWithAggregatesInput[]
    NOT?: learnScalarWhereWithAggregatesInput | learnScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"learn"> | number
    command?: StringWithAggregatesFilter<"learn"> | string
    result?: StringWithAggregatesFilter<"learn"> | string
    user_id?: StringWithAggregatesFilter<"learn"> | string
    created_at?: DateTimeWithAggregatesFilter<"learn"> | Date | string
  }

  export type nsfw_contentWhereInput = {
    AND?: nsfw_contentWhereInput | nsfw_contentWhereInput[]
    OR?: nsfw_contentWhereInput[]
    NOT?: nsfw_contentWhereInput | nsfw_contentWhereInput[]
    id?: IntFilter<"nsfw_content"> | number
    text?: StringFilter<"nsfw_content"> | string
    created_at?: DateTimeNullableFilter<"nsfw_content"> | Date | string | null
    persona?: StringFilter<"nsfw_content"> | string
  }

  export type nsfw_contentOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrderInput | SortOrder
    persona?: SortOrder
  }

  export type nsfw_contentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: nsfw_contentWhereInput | nsfw_contentWhereInput[]
    OR?: nsfw_contentWhereInput[]
    NOT?: nsfw_contentWhereInput | nsfw_contentWhereInput[]
    text?: StringFilter<"nsfw_content"> | string
    created_at?: DateTimeNullableFilter<"nsfw_content"> | Date | string | null
    persona?: StringFilter<"nsfw_content"> | string
  }, "id">

  export type nsfw_contentOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrderInput | SortOrder
    persona?: SortOrder
    _count?: nsfw_contentCountOrderByAggregateInput
    _avg?: nsfw_contentAvgOrderByAggregateInput
    _max?: nsfw_contentMaxOrderByAggregateInput
    _min?: nsfw_contentMinOrderByAggregateInput
    _sum?: nsfw_contentSumOrderByAggregateInput
  }

  export type nsfw_contentScalarWhereWithAggregatesInput = {
    AND?: nsfw_contentScalarWhereWithAggregatesInput | nsfw_contentScalarWhereWithAggregatesInput[]
    OR?: nsfw_contentScalarWhereWithAggregatesInput[]
    NOT?: nsfw_contentScalarWhereWithAggregatesInput | nsfw_contentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"nsfw_content"> | number
    text?: StringWithAggregatesFilter<"nsfw_content"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"nsfw_content"> | Date | string | null
    persona?: StringWithAggregatesFilter<"nsfw_content"> | string
  }

  export type statementWhereInput = {
    AND?: statementWhereInput | statementWhereInput[]
    OR?: statementWhereInput[]
    NOT?: statementWhereInput | statementWhereInput[]
    id?: IntFilter<"statement"> | number
    text?: StringFilter<"statement"> | string
    search_text?: StringFilter<"statement"> | string
    conversation?: StringFilter<"statement"> | string
    created_at?: DateTimeNullableFilter<"statement"> | Date | string | null
    in_response_to?: StringNullableFilter<"statement"> | string | null
    search_in_response_to?: StringFilter<"statement"> | string
    persona?: StringFilter<"statement"> | string
  }

  export type statementOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    search_text?: SortOrder
    conversation?: SortOrder
    created_at?: SortOrderInput | SortOrder
    in_response_to?: SortOrderInput | SortOrder
    search_in_response_to?: SortOrder
    persona?: SortOrder
  }

  export type statementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: statementWhereInput | statementWhereInput[]
    OR?: statementWhereInput[]
    NOT?: statementWhereInput | statementWhereInput[]
    text?: StringFilter<"statement"> | string
    search_text?: StringFilter<"statement"> | string
    conversation?: StringFilter<"statement"> | string
    created_at?: DateTimeNullableFilter<"statement"> | Date | string | null
    in_response_to?: StringNullableFilter<"statement"> | string | null
    search_in_response_to?: StringFilter<"statement"> | string
    persona?: StringFilter<"statement"> | string
  }, "id">

  export type statementOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    search_text?: SortOrder
    conversation?: SortOrder
    created_at?: SortOrderInput | SortOrder
    in_response_to?: SortOrderInput | SortOrder
    search_in_response_to?: SortOrder
    persona?: SortOrder
    _count?: statementCountOrderByAggregateInput
    _avg?: statementAvgOrderByAggregateInput
    _max?: statementMaxOrderByAggregateInput
    _min?: statementMinOrderByAggregateInput
    _sum?: statementSumOrderByAggregateInput
  }

  export type statementScalarWhereWithAggregatesInput = {
    AND?: statementScalarWhereWithAggregatesInput | statementScalarWhereWithAggregatesInput[]
    OR?: statementScalarWhereWithAggregatesInput[]
    NOT?: statementScalarWhereWithAggregatesInput | statementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"statement"> | number
    text?: StringWithAggregatesFilter<"statement"> | string
    search_text?: StringWithAggregatesFilter<"statement"> | string
    conversation?: StringWithAggregatesFilter<"statement"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"statement"> | Date | string | null
    in_response_to?: StringNullableWithAggregatesFilter<"statement"> | string | null
    search_in_response_to?: StringWithAggregatesFilter<"statement"> | string
    persona?: StringWithAggregatesFilter<"statement"> | string
  }

  export type learnCreateInput = {
    command: string
    result: string
    user_id: string
    created_at?: Date | string
  }

  export type learnUncheckedCreateInput = {
    id?: number
    command: string
    result: string
    user_id: string
    created_at?: Date | string
  }

  export type learnUpdateInput = {
    command?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type learnUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    command?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type learnCreateManyInput = {
    id?: number
    command: string
    result: string
    user_id: string
    created_at?: Date | string
  }

  export type learnUpdateManyMutationInput = {
    command?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type learnUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    command?: StringFieldUpdateOperationsInput | string
    result?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nsfw_contentCreateInput = {
    text?: string
    created_at?: Date | string | null
    persona?: string
  }

  export type nsfw_contentUncheckedCreateInput = {
    id?: number
    text?: string
    created_at?: Date | string | null
    persona?: string
  }

  export type nsfw_contentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: StringFieldUpdateOperationsInput | string
  }

  export type nsfw_contentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: StringFieldUpdateOperationsInput | string
  }

  export type nsfw_contentCreateManyInput = {
    id?: number
    text?: string
    created_at?: Date | string | null
    persona?: string
  }

  export type nsfw_contentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: StringFieldUpdateOperationsInput | string
  }

  export type nsfw_contentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    persona?: StringFieldUpdateOperationsInput | string
  }

  export type statementCreateInput = {
    text: string
    search_text?: string
    conversation?: string
    created_at?: Date | string | null
    in_response_to?: string | null
    search_in_response_to?: string
    persona?: string
  }

  export type statementUncheckedCreateInput = {
    id?: number
    text: string
    search_text?: string
    conversation?: string
    created_at?: Date | string | null
    in_response_to?: string | null
    search_in_response_to?: string
    persona?: string
  }

  export type statementUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    search_text?: StringFieldUpdateOperationsInput | string
    conversation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    in_response_to?: NullableStringFieldUpdateOperationsInput | string | null
    search_in_response_to?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
  }

  export type statementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    search_text?: StringFieldUpdateOperationsInput | string
    conversation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    in_response_to?: NullableStringFieldUpdateOperationsInput | string | null
    search_in_response_to?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
  }

  export type statementCreateManyInput = {
    id?: number
    text: string
    search_text?: string
    conversation?: string
    created_at?: Date | string | null
    in_response_to?: string | null
    search_in_response_to?: string
    persona?: string
  }

  export type statementUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    search_text?: StringFieldUpdateOperationsInput | string
    conversation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    in_response_to?: NullableStringFieldUpdateOperationsInput | string | null
    search_in_response_to?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
  }

  export type statementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    search_text?: StringFieldUpdateOperationsInput | string
    conversation?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    in_response_to?: NullableStringFieldUpdateOperationsInput | string | null
    search_in_response_to?: StringFieldUpdateOperationsInput | string
    persona?: StringFieldUpdateOperationsInput | string
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

  export type learnCountOrderByAggregateInput = {
    id?: SortOrder
    command?: SortOrder
    result?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type learnAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type learnMaxOrderByAggregateInput = {
    id?: SortOrder
    command?: SortOrder
    result?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type learnMinOrderByAggregateInput = {
    id?: SortOrder
    command?: SortOrder
    result?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type learnSumOrderByAggregateInput = {
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type nsfw_contentCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    persona?: SortOrder
  }

  export type nsfw_contentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type nsfw_contentMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    persona?: SortOrder
  }

  export type nsfw_contentMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    created_at?: SortOrder
    persona?: SortOrder
  }

  export type nsfw_contentSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type statementCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    search_text?: SortOrder
    conversation?: SortOrder
    created_at?: SortOrder
    in_response_to?: SortOrder
    search_in_response_to?: SortOrder
    persona?: SortOrder
  }

  export type statementAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type statementMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    search_text?: SortOrder
    conversation?: SortOrder
    created_at?: SortOrder
    in_response_to?: SortOrder
    search_in_response_to?: SortOrder
    persona?: SortOrder
  }

  export type statementMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    search_text?: SortOrder
    conversation?: SortOrder
    created_at?: SortOrder
    in_response_to?: SortOrder
    search_in_response_to?: SortOrder
    persona?: SortOrder
  }

  export type statementSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use learnDefaultArgs instead
     */
    export type learnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = learnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use nsfw_contentDefaultArgs instead
     */
    export type nsfw_contentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = nsfw_contentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use statementDefaultArgs instead
     */
    export type statementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = statementDefaultArgs<ExtArgs>

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