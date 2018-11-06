const fs = require('fs');
const path = require('path');
const forEach = require('lodash').forEach;
// const startCase = require('lodash').startCase;
const toLower = require('lodash').toLower;
const snakeCase = require('lodash').snakeCase;
/* const clickSidebarMenu = require('../helper').clickSidebarMenu;
const clickTambah = require('../helper').clickTambah; */
const list = [
  'resort',
  // 'jabatan',
  // 'jaminan',
  // 'tipe jasa',
  // 'tipe trans',
  // 'tipe akun',
  // 'jenis pinjaman',
  // 'jenis aset',
  // 'anggota',
  // 'akun',
  // 'mata uang',
  // 'pegawai',
  // 'kategori aset',
  // 'gaji',
  // 'setor pusat',
  // 'pengajuan pinjaman',
  // 'pinjaman',
  // 'pinjaman pos',
  // 'jasa',
  // 'mutasi simpanan',
  // 'mutasi pegawai',
  // 'realisasi pinjaman',
  // 'mutasi anggota',
  // 'simpanan anggota keluar',
  // 'simpanan anggota masuk',
  // 'cabang / unit',
  // 'tambahan modal',
  // 'modal',
  // 'laporan pegawai',
];

describe('sidebar', function () {
  var rootPath = path.resolve(__dirname + '/../');
  var pagesPath = path.join(rootPath, 'temp', 'pages');

  forEach(
    list,
    function (value, key) {
      // const title = toLower(value);


      it(value, async function () {
        console.log(pagesPath);
        await clickSidebarMenu(value);
        var browserTitle = await browser.getTitle();
        expect(toLower(browserTitle)).toEqual(toLower(value));
        await clickTambah();

        const fn = snakeCase(toLower(value));
        var fname = `${pagesPath}/${fn}.add.spec.js`;
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
        console.log(mdl);
        // fs.writeFileSync(`${fname}`, mdl)
      });
    }
  );
})


