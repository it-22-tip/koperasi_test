import { installMatcher } from '@hetznercloud/protractor-test-helper/';
import _ from 'lodash';
import helper from './helper';
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
    // 'specs/anggota-add.spec.js'
    // 'specs/sidebar.spec.js',
    'specs/pages.add.spec.js',
    // 'specs/try.spec.js'
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
    var { clickBackButton, login, logout, openSideBar, clickSidebarMenu, clickTambah, dropdown } = helper;
    global.clickBackButton = clickBackButton;
    global.login = login;
    global.logout = logout;
    global.clickSidebarMenu = clickSidebarMenu;
    global.openSideBar = openSideBar;
    global.clickTambah = clickTambah;
    global.dropdown = dropdown;
  },
};

export { config };
