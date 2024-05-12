interface Logger {
  log: (...messages: any[]) => void;
  error: (...messages: any[]) => void;
  info: (...messages: any[]) => void;
}

const isProduction: boolean = process.env.NODE_ENV === 'production';

const logger: Logger = {
  log: (...messages: any[]): void => {
    if (!isProduction) {
      console.log(...messages);
    }
  },
  error: (...messages: any[]): void => {
    if (!isProduction) {
      console.error(...messages);
    }
  },
  info: (...messages: any[]): void => {
    if (!isProduction) {
      console.info(...messages);
    }
  },
};

export default logger;
