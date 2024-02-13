// // custom-typings.d.ts

// declare module 'i18next-xhr-backend' {
//   import { BackendModule, ReadCallback, MultiReadCallback } from 'i18next';

//   interface XHRBackendOptions {
//     loadPath?: string;
//   }

//   class XHR implements BackendModule<object> {
//     type: 'backend';
//     init(services: any, options?: XHRBackendOptions, i18nextOptions?: any): void;
//     read(lng: string, ns: string, callback: ReadCallback): void;
//     readMulti(languages: string[], namespaces: string[], callback: MultiReadCallback): void;
//     create(languages: readonly string[] | string, namespace: string, key: string, fallbackValue: string): void;
//   }

//   export = XHR;
// }
