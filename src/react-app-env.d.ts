/// <reference types="react-scripts" />
declare namespace NodeJS {                                                                                                                  
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    REACT_APP_IMGUR_BASE_URL: string
    REACT_APP_IMGUR_CLIENT_ID: string
  }
}
