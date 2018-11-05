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

const pengajuan_pinjaman_add_form = async function (
  pkredit_datetime,
  pkredit_anggota_id,
  pkredit_wilpel_id,
  pkredit_noktp,
  pkredit_nama,
  pkredit_alamat,
  pkredit_jk,
  pkredit_notelp,
  pkredit_pekerjaan,
  pkredit_jeniskredit_id,
  pkredit_tipebunga_id,
  pkredit_bunga,
  pkredit_diajukan,
  pkredit_jmlspm,
  pkredit_um,
  pkredit_jaminan_id,
  penjamin_nama,
  penjamin_alamat,
  penjamin_jk,
  penjamin_notelp,
  penjamin_pekerjaan,
  penjamin_fotoktp,
  penjamin_hubungan
) {
  await element(by.model('input.pkredit_datetime')).sendKeys(pkredit_datetime);
  await element(by.model('input.pkredit_anggota_id')).sendKeys(pkredit_anggota_id);
  await dropdown('input.pkredit_wilpel_id', pkredit_wilpel_id);
  await element(by.model('input.pkredit_noktp')).sendKeys(pkredit_noktp);
  await element(by.model('input.pkredit_nama')).sendKeys(pkredit_nama);
  await element(by.model('input.pkredit_alamat')).sendKeys(pkredit_alamat);
  await dropdown('input.pkredit_jk', pkredit_jk);
  await element(by.model('input.pkredit_notelp')).sendKeys(pkredit_notelp);
  await element(by.model('input.pkredit_pekerjaan')).sendKeys(pkredit_pekerjaan);
  await dropdown('input.pkredit_jeniskredit_id', pkredit_jeniskredit_id);
  await dropdown('input.pkredit_tipebunga_id', pkredit_tipebunga_id);
  await element(by.model('input.pkredit_bunga')).sendKeys(pkredit_bunga);
  await element(by.model('input.pkredit_diajukan')).sendKeys(pkredit_diajukan);
  await element(by.model('input.pkredit_jmlspm')).sendKeys(pkredit_jmlspm);
  await element(by.model('input.pkredit_um')).sendKeys(pkredit_um);
  await dropdown('input.pkredit_jaminan_id', pkredit_jaminan_id);
  await element(by.model('input.penjamin_nama')).sendKeys(penjamin_nama);
  await element(by.model('input.penjamin_alamat')).sendKeys(penjamin_alamat);
  await dropdown('input.penjamin_jk', penjamin_jk);
  await element(by.model('input.penjamin_notelp')).sendKeys(penjamin_notelp);
  await element(by.model('input.penjamin_pekerjaan')).sendKeys(penjamin_pekerjaan);
  await element(by.model('input.penjamin_fotoktp')).sendKeys(penjamin_fotoktp);
  await element(by.model('input.penjamin_hubungan')).sendKeys(penjamin_hubungan);
}

export default pengajuan_pinjaman_add_form;

