export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      EXPO_PUBLIC_REALM_APP_ID: string;
    }
  }
}
