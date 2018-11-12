import { installMatcher } from '@hetznercloud/protractor-test-helper/';
import _ from 'lodash';
import helper from './helper';
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
    // 'specs/anggota-add.spec.js'
    // 'specs/sidebar.spec.js',
    // 'specs/pages.add.spec.js',
    'specs/sibling.js',
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
    var {
      clickBackButton,
      login,
      logout,
      openSideBar,
      clickSidebarMenu,
      clickTambah,
      dropdown,
      clickContextMenu,
      getModelList,
      listSideBar,
      testHelperGenerator,
      bisaClickTambah,
      fillautocomplete
    } = helper;
    global.clickBackButton = clickBackButton;
    global.login = login;
    global.logout = logout;
    global.clickSidebarMenu = clickSidebarMenu;
    global.openSideBar = openSideBar;
    global.clickTambah = clickTambah;
    global.dropdown = dropdown;
    global.clickContextMenu = clickContextMenu;
    global.getModelList = getModelList;
    global.listSideBar = listSideBar;
    global.bisaClickTambah = bisaClickTambah;
    global.testHelperGenerator = testHelperGenerator;
    global.fillautocomplete = fillautocomplete;
    global.rootPath = path.resolve(__dirname);
  },
};

export { config };
