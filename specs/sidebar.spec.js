const fs = require('fs');
const path = require('path');
const forEach = require('lodash').forEach;
const startCase = require('lodash').startCase;
const toLower = require('lodash').toLower;
const snakeCase = require('lodash').snakeCase;
const clickSidebarMenu = require('./helper.spec').clickSidebarMenu;
const clickTambah = require('./helper.spec').clickTambah;
const list = [
  'resort',
  'jabatan',
  'jaminan',
  'tipe jasa',
  'tipe trans',
  'tipe akun',
  'jenis kredit',
  'jenis aset',
  'anggota',
  'tambahan modal',
  'akun',
  'mata uang',
  'pegawai',
  'kategori aset',
  'gaji',
  'setor pusat',
  'pengajuan pinjaman',
  'pinjaman',
  'pinjaman pos',
  'jasa',
  'mutasi simpanan'
];

describe('sidebar', function () {
  var testParams = list;
  var appUrl = 'http://localhost/koperasi/masuk';
  var cl_no = '001';
  var username = 'edo';
  var password = 'edo';
  var pagesPath = path.resolve(__dirname + '/pages');

  it('harus masuk ke dashboard', async function () {
    browser.get(appUrl);
    element(by.partialButtonText('Masuk')).click();

    // mengharapkan title browser === 'Dashboard'
    expect(browser.getTitle()).toEqual('Dashboard');
  });

  forEach(
    list,
    function (value, key) {
      const title = startCase(toLower(value));
      const fn = snakeCase(title);
      fname = `${pagesPath}/${fn}.spec.js`;
      // fs.writeFileSync(`${pagesPath}/${fn}.spec.js`, '')
      it(value, async function () {
        await clickSidebarMenu(value);
        await clickTambah();
        /* let main = element(by.className('main'));
        main.all(by.css('[ng-model]')).each(
          async function (element, index) {
            var model = await element.getWebElement().getAttribute('ng-model');
            console.log(model);
          }
        ) */
        // expect(browser.getTitle()).toEqual(title);
      });
    }
  );
})


