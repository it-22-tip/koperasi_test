import { installMatcher } from '@hetznercloud/protractor-test-helper/';
import * as helper from './helper';
import { assign } from 'lodash';
import path from 'path';
const config = {
  // directConnect: true, // menggunakan chrome default, akan mendisable opsi seleniumAddress & capabilities
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-gpu', '--disable-notifications', '--window-size=800,600'] // menggunakan headless chrome
    }
  },
  specs: [
    'specs/pages.add.spec.js',
    // 'specs/sibling.js'
  ],
  /**
   * params bisa dipanggil di semua test
   * browser.params.[paramskey]
  */
  params: {
    base_url: 'http://localhost/koperasi',
    cl_no: '001',
    username: 'edo',
    password: 'edo',
  },
  onPrepare() {
    installMatcher();
    global.rootPath = path.resolve(__dirname);
    assign(global, helper);
  },
};

export { config };
