// model:
// input.jnsaset_nama
// input.jnsaset_umur_bulan
// input.jnsaset_depresiasi_pc

describe('jenis aset add', function () {
  it('open page', async function () {
    await clickSidebarMenu('jenis aset');
    await clickContextMenu('edit');
    await clickBackButton()
    await clickTambah();
  })

  it('add one', async function () {
    // await element(by.model('input.anggota_kodelama')).sendKeys(anggota_kodelama);
    // await element(by.css('[ng-model="input.jnsaset_umur_bulan"]')).sendKeys(protractor.Key.ARROW_UP);
    // await element(by.css('[ng-model="input.jnsaset_umur_bulan"]')).sendKeys(protractor.Key.ARROW_UP);
    // await element(by.css('[ng-model="input.jnsaset_umur_bulan"]')).sendKeys(protractor.Key.ARROW_UP);
    await element(by.css('[ng-model="input.jnsaset_umur_bulan"]')).sendKeys('12');
    await element(by.css('[ng-model="input.jnsaset_umur_bulan"]')).clear();
    await browser.sleep('6000');
  });

  /* it('edit one', async function () {

  }); */

  it('delete one', function () {

  });
})
