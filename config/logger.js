const { createLogger, format, transports } = require('winston');
_ = require('winston-daily-rotate-file');

const myFormat = format.printf(({ level, message, timestamp }) => {
    const log = `${timestamp} ${level} : ${message}`;
    return log;
});

const infoLogger = createLogger({
    level: 'info',
    format: format.combine(format.timestamp(), myFormat),
    transports: [
        new transports.DailyRotateFile({
            filename: './logs/info/info-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '200m',
            maxFiles: '14d'
        })
    ]
});


const errorLogger = createLogger({
    level: 'error',
    format: format.combine(format.timestamp(), myFormat),
    transports: [
        new transports.DailyRotateFile({
            filename: './logs/error/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxSize: '200m',
            maxFiles: '30d'
        })
    ]
});


const logger = {
    infoLogger,
    errorLogger
}

if (process.env.NODE_ENV !== 'production') {

    infoLogger.add(new transports.Console({
        format: format.combine(format.timestamp(), myFormat)
    }));

    errorLogger.add(new transports.Console({
        format: format.combine(format.timestamp(), myFormat)
    }));
}

module.exports = logger;