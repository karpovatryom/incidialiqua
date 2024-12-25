   const winston = require('winston');
   
   const logger = winston.createLogger({
     level: 'info',
     format: winston.format.json(),
     transports: [
       new winston.transports.Console()
     ]
   });

   logger.log('info', "This ad is better.");
   