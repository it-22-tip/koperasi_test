export default async function (
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
await element(by.model('input.kredit_nosp')).sendKeys(kredit_nosp)
await element(by.model('input.kredit_anggota_id')).sendKeys(kredit_anggota_id)
await dropdown('input.kredit_jeniskredit_id', kredit_jeniskredit_id)
await dropdown('input.kredit_wilpel_id', kredit_wilpel_id)
await element(by.model('input.kredit_pinj_datetime')).sendKeys(kredit_pinj_datetime)
await element(by.model('input.kredit_fotoktp')).sendKeys(kredit_fotoktp)
await element(by.model('input.kredit_pokok')).sendKeys(kredit_pokok)
await dropdown('input.kredit_bunga_id', kredit_bunga_id)
await element(by.model('input.kredit_tenor')).sendKeys(kredit_tenor)
await element(by.model('input.kredit_administrasi')).sendKeys(kredit_administrasi)
await element(by.model('input.kredit_provisi')).sendKeys(kredit_provisi)
await element(by.model('input.kredit_ppj')).sendKeys(kredit_ppj)
await element(by.model('input.kredit_simpwajib')).sendKeys(kredit_simpwajib)
await element(by.model('input.kredit_dansos')).sendKeys(kredit_dansos)
await dropdown('input.kredit_jaminan_id', kredit_jaminan_id)
await element(by.model('input.kredit_nojaminan')).sendKeys(kredit_nojaminan)
await element(by.model('input.kredit_jmlspm')).sendKeys(kredit_jmlspm)
await element(by.model('input.kredit_um')).sendKeys(kredit_um)
await dropdown('input.kredit_akun_id', kredit_akun_id)
await element(by.model('input.kredit_bunga')).sendKeys(kredit_bunga)
await element(by.model('input.penjamin_nama')).sendKeys(penjamin_nama)
await element(by.model('input.penjamin_alamat')).sendKeys(penjamin_alamat)
await dropdown('input.penjamin_jk', penjamin_jk)
await element(by.model('input.penjamin_notelp')).sendKeys(penjamin_notelp)
await element(by.model('input.penjamin_pekerjaan')).sendKeys(penjamin_pekerjaan)
await element(by.model('input.penjamin_fotoktp')).sendKeys(penjamin_fotoktp)
await element(by.model('input.penjamin_hubungan')).sendKeys(penjamin_hubungan)
}