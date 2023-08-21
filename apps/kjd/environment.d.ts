export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KJD_HYGRAPH_ENDPOINT: string;
    }
  }
}
