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
    'specs/es6.spec.js'
  ],

  params: {

  },
  onPrepare() {
    require("@babel/register");
  },
};

