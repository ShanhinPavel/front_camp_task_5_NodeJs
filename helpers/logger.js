const winston = require('winston');
const expressWinston = require('express-winston');

const myFormat = winston.format.printf(({ timestamp, meta }) => {
  return `[date: ${timestamp}] [url: ${meta.req.url}] [method: ${meta.req.method}]`;
});

const logger = expressWinston.logger({
  transports: [
    new winston.transports.File({timestamp:true, filename: 'info.log'})
  ],

  format: winston.format.combine(
    winston.format.timestamp({format:'MM-YY-DD hh:mm:ss'}),
    myFormat
  )
})

module.exports = logger;