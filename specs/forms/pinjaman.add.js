// input.kredit_nosp
// input.kredit_anggota_id
// input.kredit_jeniskredit_id
// input.kredit_wilpel_id
// input.kredit_pinj_datetime
// input.kredit_fotoktp
// input.kredit_pokok
// input.kredit_bunga_id
// input.kredit_tenor
// input.kredit_administrasi
// input.kredit_provisi
// input.kredit_ppj
// input.kredit_simpwajib
// input.kredit_dansos
// input.kredit_jaminan_id
// input.kredit_nojaminan
// input.kredit_jmlspm
// input.kredit_um
// input.kredit_akun_id
// input.kredit_bunga
// input.penjamin_nama
// input.penjamin_alamat
// input.penjamin_notelp
// input.penjamin_pekerjaan
// input.penjamin_fotoktp
// input.penjamin_hubungan

const pinjaman_add_form = function (
  kredit_nosp,
  kredit_anggota_id,
  kredit_jeniskredit_id,
  kredit_wilpel_id,
  kredit_pinj_datetime,
  kredit_fotoktp,
  kredit_pokok,
  kredit_bunga_id,
  kredit_tenor,
  kredit_administrasi,
  kredit_provisi,
  kredit_ppj,
  kredit_simpwajib,
  kredit_dansos,
  kredit_jaminan_id,
  kredit_nojaminan,
  kredit_jmlspm,
  kredit_um,
  kredit_akun_id,
  kredit_bunga,
  penjamin_nama,
  penjamin_alamat,
  penjamin_jk,
  penjamin_notelp,
  penjamin_pekerjaan,
  penjamin_fotoktp,
  penjamin_hubungan
) {
element(by.model('input.kredit_nosp')).sendKeys(kredit_nosp)
element(by.model('input.kredit_anggota_id')).sendKeys(kredit_anggota_id)
dropdown('input.kredit_jeniskredit_id', kredit_jeniskredit_id)
element(by.model('input.kredit_wilpel_id')).sendKeys(kredit_wilpel_id)
element(by.model('input.kredit_pinj_datetime')).sendKeys(kredit_pinj_datetime)
element(by.model('input.kredit_fotoktp')).sendKeys(kredit_fotoktp)
element(by.model('input.kredit_pokok')).sendKeys(kredit_pokok)
dropdown('input.kredit_bunga_id', kredit_bunga_id)
element(by.model('input.kredit_tenor')).sendKeys(kredit_tenor)
element(by.model('input.kredit_administrasi')).sendKeys(kredit_administrasi)
element(by.model('input.kredit_provisi')).sendKeys(kredit_provisi)
element(by.model('input.kredit_ppj')).sendKeys(kredit_ppj)
element(by.model('input.kredit_simpwajib')).sendKeys(kredit_simpwajib)
element(by.model('input.kredit_dansos')).sendKeys(kredit_dansos)
dropdown('input.kredit_jaminan_id', kredit_jaminan_id)
element(by.model('input.kredit_nojaminan')).sendKeys(kredit_nojaminan)
element(by.model('input.kredit_jmlspm')).sendKeys(kredit_jmlspm)
element(by.model('input.kredit_um')).sendKeys(kredit_um)
dropdown('input.kredit_akun_id', kredit_akun_id)
element(by.model('input.kredit_bunga')).sendKeys(kredit_bunga)
element(by.model('input.penjamin_nama')).sendKeys(penjamin_nama)
element(by.model('input.penjamin_alamat')).sendKeys(penjamin_alamat)
dropdown('input.penjamin_jk', penjamin_jk)
element(by.model('input.penjamin_notelp')).sendKeys(penjamin_notelp)
element(by.model('input.penjamin_pekerjaan')).sendKeys(penjamin_pekerjaan)
element(by.model('input.penjamin_fotoktp')).sendKeys(penjamin_fotoktp)
element(by.model('input.penjamin_hubungan')).sendKeys(penjamin_hubungan)
}
export default pinjaman_add_form;
