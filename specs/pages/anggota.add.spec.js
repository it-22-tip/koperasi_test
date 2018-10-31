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

const anggota_add = async function (
  anggota_wilpel_id = null,
  anggota_kodelama = null,
  anggota_nama = null,
  anggota_lahir_tempat = null,
  anggota_lahir_date = null,
  anggota_jk = null,
  anggota_agama = null,
  anggota_alamat = null,
  anggota_masuk_date = null,
  anggota_no_ktp = null,
  anggota_no_telp = null,
  anggota_pendidikan = null,
  anggota_pekerjaan = null,
  // anggota_simppokok = null,
  // anggota_simpwajib = null,
  // anggota_simpsukarela = null
) {
  await dropdown('input.anggota_wilpel_id', anggota_wilpel_id);
  // var dropdown = await element(by.css('[model="input.anggota_wilpel_id"]'));
  // await dropdown.click();
  // var vis = await dropdown.element(by.className('menu transition'));
  // expect(vis.isDisplayed()).toBeTruthy();
  // await vis.all(by.repeater('item in items')).last().click();
  // var count = await items.count()
  // console.log(items);
  await element(by.model('input.anggota_kodelama')).sendKeys(anggota_kodelama);
  await element(by.model('input.anggota_nama')).sendKeys(anggota_nama);
  await element(by.model('input.anggota_lahir_tempat')).sendKeys(anggota_lahir_tempat);
  await element(by.model('input.anggota_lahir_date')).sendKeys(anggota_lahir_date);
  await dropdown('input.anggota_jk', anggota_jk);
  await dropdown('input.anggota_agama', anggota_agama);// input.anggota_agama
  await element(by.model('input.anggota_alamat')).sendKeys(anggota_alamat);
  await element(by.model('input.anggota_masuk_date')).sendKeys(anggota_masuk_date);
  await element(by.model('input.anggota_no_ktp')).sendKeys(anggota_no_ktp);
  await element(by.model('input.anggota_no_telp')).sendKeys(anggota_no_telp);
  await element(by.model('input.anggota_pendidikan')).sendKeys(anggota_pendidikan);
  await element(by.model('input.anggota_pekerjaan')).sendKeys(anggota_pekerjaan);
  // await element(by.model('input.anggota_simppokok')).sendKeys(anggota_simppokok);
  // await element(by.model('input.anggota_simpwajib')).sendKeys(anggota_simpwajib);
  // await element(by.model('input.anggota_simpsukarela')).sendKeys(anggota_simpsukarela);
}

describe('xfocus login', function () {


  it('harus masuk ke dashboard', async function () {
    await login();
  });

  it('go to anggota add page', async function () {
    await browser.get('http://localhost/koperasi/anggota/add');
    expect(browser.getTitle()).toEqual('Anggota');
  });

  it('make me dizzy', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    browser.sleep(1000);

    // await dropdown('input.anggota_wilpel_id', '112 - WIL 1');
    // var dropdown = await element(by.css('[model="input.anggota_wilpel_id"]'));
    // await dropdown.click();
    // var vis = await dropdown.element(by.className('menu transition'));
    // expect(vis.isDisplayed()).toBeTruthy();
    // await vis.all(by.repeater('item in items')).last().click();
    // var count = await items.count()
    // console.log(items);
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
      'Pekerjaan'
    );

    // await element(by.model('input.anggota_no_ktp')).sendKeys('5432154321');
    // await element(by.model('input.anggota_no_telp')).sendKeys('345-321');
    // await element(by.model('input.anggota_pendidikan')).sendKeys('Pendidikan');
    // await element(by.model('input.anggota_pekerjaan')).sendKeys('Pekerjaan');
    await element(by.model('input.anggota_simppokok')).sendKeys('1000000');
    await element(by.model('input.anggota_simpwajib')).sendKeys('');
    await element(by.model('input.anggota_simpsukarela')).sendKeys('');
    // await anggota_add('112 - WIL 1', null, 'Sample Nama Anggota', 'Surabaya', '18 Okt 2000');
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
