exports.config = {
  // directConnect: true, // menggunakan chrome default, akan mendisable opsi seleniumAddress & capabilities
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ["--disable-gpu", "--disable-notifications", "--window-size=800,600"] // menggunakan headless chrome
    }
  },
  specs: [
    // 'specs/anggota-add.spec.js'
    'specs/sidebar.spec.js'
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
    //...
    //browser.manage().window().setSize(1600, 1000);
    require('@hetznercloud/protractor-test-helper/').installMatcher();
  },
};

