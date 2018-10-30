import { installMatcher } from '@hetznercloud/protractor-test-helper/';
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
    base_url: 'http://xfocus.id.localhost',
    cl_no: '111',
    username: 'TRIAL',
    password: 'TRIAL',
  },
  onPrepare() {
    // global helper
    installMatcher();
    var { clickBackButton, login, logout, openSideBar, clickSidebarMenu, dropdown } = helper;
    global.clickBackButton = clickBackButton;
    global.login = login;
    global.logout = logout;
    global.clickSidebarMenu = clickSidebarMenu;
    global.openSideBar = openSideBar;
    global.dropdown = dropdown;
  },
};

export { config };
