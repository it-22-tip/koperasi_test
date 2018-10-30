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

var dd = async function (model, selection) {
    var dropdown = await element(by.css(`[model="${model}"]`));
    await dropdown.click();
    var vis = await dropdown.element(by.className('menu transition'));
    expect(vis.isDisplayed()).toBeTruthy();

    await vis.all(by.repeater('item in items')).each(
      async function(element, index) {
        var txt = await element.getText();
        console.log(txt);
      }
    )
    await vis.all(by.repeater('item in items')).filter(
      async function (element, index) {
        var text = await element.getText();
        return text === selection;
      }
    ).first().click();
}

describe('xfocus login', function () {
  var appUrl = 'http://localhost/koperasi/masuk';

  it('harus masuk ke dashboard', async function () {
    browser.get(appUrl);
    element(by.partialButtonText('Masuk')).click();

    // mengharapkan title browser === 'Dashboard'
    expect(browser.getTitle()).toEqual('Dashboard');
  });

  it('go to anggota add page', async function () {
    await browser.get('http://localhost/koperasi/anggota/add');
    expect(browser.getTitle()).toEqual('Anggota');
  });

  it('make me dizzy', async function () {
    browser.driver.manage().timeouts().setScriptTimeout(30000);
    browser.sleep(1000);

    await dd('input.anggota_wilpel_id', '112 - WIL 1');
    // var dropdown = await element(by.css('[model="input.anggota_wilpel_id"]'));
    // await dropdown.click();
    // var vis = await dropdown.element(by.className('menu transition'));
    // expect(vis.isDisplayed()).toBeTruthy();
    // await vis.all(by.repeater('item in items')).last().click();
    // var count = await items.count()
    // console.log(items);
    await element(by.model('input.anggota_kodelama')).sendKeys('200000');
    await element(by.model('input.anggota_nama')).sendKeys('Sample Nama Anggota');
    await element(by.model('input.anggota_lahir_tempat')).sendKeys('200000');
    await element(by.model('input.anggota_lahir_date')).sendKeys('18 Okt 2000');
    await dd('input.anggota_jk', 'Laki - Laki');
    await dd('input.anggota_agama', 'Islam');// input.anggota_agama
    await element(by.model('input.anggota_alamat')).sendKeys('Sukoharjo');
    await element(by.model('input.anggota_masuk_date')).sendKeys('18 Okt 2018');
    await element(by.model('input.anggota_no_ktp')).sendKeys('5432154321');
    await element(by.model('input.anggota_no_telp')).sendKeys('345-321');
    await element(by.model('input.anggota_pendidikan')).sendKeys('Pendidikan');
    await element(by.model('input.anggota_pekerjaan')).sendKeys('Pekerjaan');
    await element(by.model('input.anggota_simppokok')).sendKeys('1000000');
    await element(by.model('input.anggota_simpwajib')).sendKeys('');
    await element(by.model('input.anggota_simpsukarela')).sendKeys('');
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
