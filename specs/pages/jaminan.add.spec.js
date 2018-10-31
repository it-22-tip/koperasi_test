// model:
// input.jaminan_kode
// input.jaminan_ket
import jaminan_add_form from '../forms/jaminan.add.form';
describe('tambah jaminan', function () {
  it('buka halaman tambah jaminan', function () {
    await clickSidebarMenu('jaminan');
    await clickTambah();
  });
  it('isi form', function () {
    jaminan_add_form('123', 'ini ket jaminan 123');
  });
});
