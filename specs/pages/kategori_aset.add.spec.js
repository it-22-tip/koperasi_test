// model:
// input.kataset_nama
import kategori_aset_add_form from '../forms/kategori_aset.add.form'
describe('tambah kategori asset', function () {
  it('Kataset ADD', async function () {
    await browser.get('http://localhost/koperasi/kataset');
    await browser.get('http://localhost/koperasi/kataset/add');
    await kategori_aset_add_form(
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    )

  });
})
