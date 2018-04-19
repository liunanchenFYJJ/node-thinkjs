'use strict';

/**
 * session configs
 */
export default {
  name: 'thinkjs_session',
  type: 'file',
  secret: '@YEO^S`)',
  timeout: 24 * 3600,
  cookie: { // cookie options
    length: 32,
    httponly: true
  },
  adapter: {
    file: {
      path: think.RUNTIME_PATH + '/session',
    }
  }
};