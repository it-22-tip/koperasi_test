// model:
// input.kataset_nama

describe('tambah kategori asset', function () {
  it('Kataset ADD', async function () {
    await browser.get('http://localhost/koperasi/kataset');
    await browser.get('http://localhost/koperasi/kataset/add');

    element(by.model('input.kataset_nama')).sendKeys('AAA');
    dropdown('input.kataset_berwujud', 'ya');
    dropdown('input.kataset_pajak', 'ya');
    dropdown('input.kataset_jnsaset_id', 'rrr');
    dropdown('input.kataset_akunaset_id', 'ya');
    dropdown('input.kataset_akundepresiasi_id', 'ya');
    dropdown('input.kataset_akunakumulasi_id', 'ya');
    element(by.css('[ng-click="action()"]')).click();
  });
})
