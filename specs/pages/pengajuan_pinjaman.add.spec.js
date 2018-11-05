// model:
// input.pkredit_datetime
// input.pkredit_anggota_id
// input.pkredit_noktp
// input.pkredit_nama
// input.pkredit_alamat
// input.pkredit_notelp
// input.pkredit_pekerjaan
// input.pkredit_bunga
// input.pkredit_diajukan
// input.pkredit_jmlspm
// input.pkredit_um
// input.penjamin_nama
// input.penjamin_alamat
// input.penjamin_notelp
// input.penjamin_pekerjaan
// input.penjamin_fotoktp
// input.penjamin_hubungan
import pengajuan_pinjaman_add_form from '../forms/pengajuan_pinjaman.add.form';
describe('tambah pengajuan pinjaman', function (){
  it('', async function () {
    await clickSidebarMenu('pengajuan pinjaman');
    await clickTambah();
    await pengajuan_pinjaman_add_form(
      '', // pkredit_datetime
      '', // pkredit_anggota_id
      '', // pkredit_wilpel_id
      '', // pkredit_noktp
      'nama pemohon ajuan', // pkredit_nama
      '', // pkredit_alamat
      'Perempuan', // pkredit_jk
      '', // pkredit_notelp
      '', // pkredit_pekerjaan
      'POS', // pkredit_jeniskredit_id
      'Anuitas', // pkredit_tipebunga_id
      '', // pkredit_bunga
      '', // pkredit_diajukan
      '', // pkredit_jmlspm
      '', // pkredit_um
      'BPKB', // pkredit_jaminan_id
      '', // penjamin_nama
      '', // penjamin_alamat
      'Perempuan', // penjamin_jk
      '', // penjamin_notelp
      '', // penjamin_pekerjaan
      '', // penjamin_fotoktp
      '', // penjamin_hubungan
    )
  })
})
