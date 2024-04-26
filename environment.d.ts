// environment.d.ts

declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_URL_LOGIN: string;
        URL_OTP_GENERATE: string;
        URL_OTP_VERIFY: string;
        URL_DATE_TIME_UPDATE: string;

        URL_AV_REPORTS: string;
        URL_AV_RECORDS: string;

        URL_APBS_CREDIT_REPORTS: string;
        SECRET_API_KEY: string;  // Note this won't be accessible on the client-side
      }
    }
  }
  
  export {}
  