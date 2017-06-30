import _ from 'lodash';

const evallog = (possibleLogger, ...args) => {
  const isPassedLogger = typeof possibleLogger === 'function';
  // eslint-disable-next-line no-console
  const logger = isPassedLogger ? possibleLogger : console.log;
  const expressions = isPassedLogger ? args : [possibleLogger, ...args];

  // eslint-disable-next-line no-eval
  logger(_.zipObject(expressions, expressions.map(eval)));
};

export default evallog;
