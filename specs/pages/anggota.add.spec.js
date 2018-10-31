// model:
// input.anggota_kodelama
// input.anggota_nama
// input.anggota_lahir_tempat
// input.anggota_lahir_date
// input.anggota_alamat
// input.anggota_masuk_date
// input.anggota_no_ktp
// input.anggota_no_telp
// input.anggota_pendidikan
// input.anggota_pekerjaan
// input.anggota_simppokok
// input.anggota_simpwajib
// input.anggota_simpsukarela

import anggota_add from '../forms/anggota.add';

describe('tambah anggota', function () {


  /* it('harus masuk ke dashboard', async function () {
    await login();
  }); */

  it('go to anggota add page', async function () {
    await clickSidebarMenu('anggota');
    await clickTambah();
  });

  it('make me dizzy', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    browser.sleep(1000);
    //
    await anggota_add(
      '112 - WIL 1',
      'kode-lama-1234','sample nama',
      'sample tempat lahir',
      '18 Okt 2000',
      'Laki - Laki',
      'Islam',
      'Sukoharjo',
      '18 Okt 2018',
      '5432154321',
      '345-321',
      'Pendidikan',
      'Pekerjaan',
      '1000000',
      '',
      '',
      ''
    );
  });

  it('membuka sidebar', async function () {
    // console.log(helper);
    await openSideBar();
    await clickSidebarMenu('jabatan');
    // console.log(helper);
    browser.sleep(12000);
  });

  /* it('membuka menu', async function () {
    await helper.openSideBar();
    await helper.logout();
    // browser.sleep(3000);
  }); */

  /* it('harus pergi ke logout', async function () {
    // browser.driver.manage().timeouts().setScriptTimeout(30000); --> pakai ini kalau harus tunggu loading


    // ui sidebar left inverted vertical menu ng - scope-- > sidebar tidak terlihat
    // ui sidebar left inverted vertical menu ng - scope overlay visible-- > sidebar terlihat

    // browser.executeScript('document.querySelector(\'[class="ui sidebar left inverted vertical menu ng-scope"]\').classList.add(\'visible\')');
    // element(by.css('[ng-click="keluar()"]')).click();
    //expect(browser.getTitle()).toEqual('Focus Trading Plus');
  }); */
})
