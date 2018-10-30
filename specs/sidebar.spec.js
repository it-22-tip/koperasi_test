const fs = require('fs');
const path = require('path');
const forEach = require('lodash').forEach;
const startCase = require('lodash').startCase;
const toLower = require('lodash').toLower;
const snakeCase = require('lodash').snakeCase;
const clickSidebarMenu = require('../helper').clickSidebarMenu;
const clickTambah = require('../helper').clickTambah;
const list = [
  'resort',
  'jabatan',
  'jaminan',
  'tipe jasa',
  'tipe trans',
  'tipe akun',
  'jenis pinjaman',
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
      // const title = toLower(value);


      it(value, async function () {
        await clickSidebarMenu(value);
        var browserTitle = await browser.getTitle();
        expect(toLower(browserTitle)).toEqual(toLower(value));
        await clickTambah();

        const fn = snakeCase(toLower(value));
        fname = `${pagesPath}/${fn}.add.spec.js`;
        console.log(fname);
        var mdl = `// model:`;
        let main = await element(by.className('main'));
        await main.all(by.css('[ng-model]')).each(
          async function (element, index) {
            var model = await element.getWebElement().getAttribute('ng-model');
            mdl += `\n// ${model}`
            // console.log(model);
          }
        )
        // console.log(mdl);
        fs.writeFileSync(`${fname}`, mdl)
      });
    }
  );
})


