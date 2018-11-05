const gaji_add_form = function (
  gaji_pegawai_id,
  gaji_bulan,
  gaji_pokok,
  gaji_jasa,
  gaji_honor,
  gaji_insentif,
  gaji_tunj_jabatan,
  gaji_tunj_beras,
  gaji_kesra,
  gaji_pot_kesra,
  gaji_pot_pulsa,
  gaji_bersih
) {
  element(by.model('input.gaji_pegawai_id')).sendKeys(gaji_pegawai_id);
  element(by.model('input.gaji_bulan')).sendKeys(gaji_bulan);
  element(by.model('input.gaji_pokok')).sendKeys(gaji_pokok);
  element(by.model('input.gaji_jasa')).sendKeys(gaji_jasa);
  element(by.model('input.gaji_honor')).sendKeys(gaji_honor);
  element(by.model('input.gaji_insentif')).sendKeys(gaji_insentif);
  element(by.model('input.gaji_tunj_jabatan')).sendKeys(gaji_tunj_jabatan);
  element(by.model('input.gaji_tunj_beras')).sendKeys(gaji_tunj_beras);
  element(by.model('input.gaji_kesra')).sendKeys(gaji_kesra);
  element(by.model('input.gaji_pot_kesra')).sendKeys(gaji_pot_kesra);
  element(by.model('input.gaji_pot_pulsa')).sendKeys(gaji_pot_pulsa);
  element(by.model('input.gaji_bersih')).sendKeys(gaji_bersih);

  element(by.css('[items="akun"]')).click();
  element(by.css('[data-value="15"]')).click();
  element(by.css('[ng-click="action()"]')).click();

  await browser.get('http://localhost/koperasi/gaji');
  expect(element.all(by.css('[ng-right-click="contextPosition($event, data)"]')).count()).toEqual(3);
}

export default gaji_add_form;
