import evallog from 'evallog/evallog';
import expect from 'evallog/tests/expect';
import sinon from 'sinon';

describe('evallog', () => {
  it('logs evaluated expressions', () => {
    const logger = sinon.spy();

    evallog(logger, '2 + 5', '3 * 10');

    expect(logger).to.be.calledWithExactly({
      '2 + 5': 7,
      '3 * 10': 30,
    });
  });

  it('works with default logger', () => {
    evallog('2 + 5', '3 * 10');
  });
});
