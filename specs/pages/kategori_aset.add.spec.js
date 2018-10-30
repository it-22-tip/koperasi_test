// model:
// input.kataset_nama

it('Kataset ADD', async function () {
  await browser.get('http://localhost/koperasi/kataset');
  expect(browser.getTitle()).toEqual('Kategori Aset');
  await browser.get('http://localhost/koperasi/kataset/add');

   element(by.model('input.kataset_nama')).sendKeys('AAA');

   element(by.css('[items="berwujud"]')).click();

   element(by.css('[items="pajak"]')).click();

   element(by.css('[items="akun"]')).click();
   element(by.css('[data-value="5"]')).click();

   element(by.css('[ng-click="action()"]')).click();

   await browser.get('http://localhost/koperasi/kataset');
   expect(element.all(by.css('[ng-right-click="contextPosition($event, data)"]')).count()).toEqual(3);

});
