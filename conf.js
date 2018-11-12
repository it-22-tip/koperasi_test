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
      click_redbackbutton,
      click_sidemenu,
      click_tambah,
      fill_autocomplete,
      generate_testhelper,
      has_click_tambah,
      list_sidemenuitems,
      login,
      logout,
      open_sidemenu,
      open_tablecontextmenu,
      select_dropdown,
      value_dropdown
    } = helper;
    global.click_redbackbutton = click_redbackbutton;
    global.click_sidemenu = click_sidemenu;
    global.click_tambah = click_tambah;
    global.fill_autocomplete = fill_autocomplete;
    global.generate_testhelper = generate_testhelper;
    global.has_click_tambah = has_click_tambah;
    global.list_sidemenuitems = list_sidemenuitems;
    global.login = login;
    global.logout = logout;
    global.open_sidemenu = open_sidemenu;
    global.open_tablecontextmenu = open_tablecontextmenu;
    global.select_dropdown = select_dropdown;
    global.value_dropdown = value_dropdown;
    global.rootPath = path.resolve(__dirname);
  },
};

export { config };
