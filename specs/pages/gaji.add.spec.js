// model:
// input.gaji_pegawai_id
// input.gaji_bulan
// input.gaji_pokok
// input.gaji_jasa
// input.gaji_honor
// input.gaji_insentif
// input.gaji_tunj_jabatan
// input.gaji_tunj_beras
// input.gaji_kesra
// input.gaji_pot_kesra
// input.gaji_pot_pulsa
// input.gaji_bersih

it('Gaji ADD', async function () {
  await browser.get('http://localhost/koperasi/gaji');
  expect(browser.getTitle()).toEqual('Gaji');
  await browser.get('http://localhost/koperasi/gaji/add');
  element(by.model('input.gaji_pegawai_id')).sendKeys('1');
  element(by.model('input.gaji_bulan')).sendKeys('2018-08-08');
  element(by.model('input.gaji_pokok')).sendKeys('200000');
  element(by.model('input.gaji_jasa')).sendKeys('200000');
  element(by.model('input.gaji_honor')).sendKeys('200000');
  element(by.model('input.gaji_insentif')).sendKeys('200000');
  element(by.model('input.gaji_tunj_jabatan')).sendKeys('200000');
  element(by.model('input.gaji_tunj_beras')).sendKeys('200000');
  element(by.model('input.gaji_kesra')).sendKeys('200000');
  element(by.model('input.gaji_pot_kesra')).sendKeys('200000');
  element(by.model('input.gaji_pot_pulsa')).sendKeys('200000');
  element(by.model('input.gaji_bersih')).sendKeys('200000');

  element(by.css('[items="akun"]')).click();
  element(by.css('[data-value="15"]')).click();
  element(by.css('[ng-click="action()"]')).click();

  await browser.get('http://localhost/koperasi/gaji');
  expect(element.all(by.css('[ng-right-click="contextPosition($event, data)"]')).count()).toEqual(3);

});
