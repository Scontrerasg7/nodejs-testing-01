import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin.test.ts', () => { 
  
  test('buildLogger should return a function logger', () => { 
    const logger = buildLogger('test');

    expect(typeof logger.log).toBe('function');
    expect(typeof logger.error).toBe('function');
  })

  test('should log a message', () => { 
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
    const message = 'test message';
    const service = 'test service';

    const logger = buildLogger(service);
    logger.log(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'info',
      expect.objectContaining({
        level: 'info',
        message, 
        service
      })
    );
  })

  test('should log an error', () => { 
    const winstonLoggerMock = jest.spyOn(winstonLogger, 'error');
    const message = 'test message';
    const service = 'test service';

    const logger = buildLogger(service);
    logger.error(message);

    expect(winstonLoggerMock).toHaveBeenCalledWith(
      'error',
      expect.objectContaining({
        message, 
        service
      })
    );
  })

})