export default async function (
	kreditpos_nosp,
	kreditpos_anggota_id,
	kreditpos_jeniskredit_id,
	kreditpos_wilpel_id,
	kreditpos_pinj_datetime,
	kreditpos_fotoktp,
	kreditpos_nopen,
	kreditpos_nopen_col,
	kreditpos_nopen_kprk,
	kreditpos_noskpensiun,
	kreditpos_instansi,
	kreditpos_statussk,
	kreditpos_pokok,
	kreditpos_bunga_id,
	kreditpos_administrasi,
	kreditpos_provisi,
	kreditpos_tenor,
	kreditpos_jaminan_id,
	kreditpos_nojaminan,
	kreditpos_jmlspm,
	kreditpos_um,
	kreditpos_akun_id,
	kreditpos_simpwajib,
	pkredit_id,
	penjamin_nama,
	penjamin_alamat,
	penjamin_jk,
	penjamin_notelp,
	penjamin_pekerjaan,
	penjamin_fotoktp,
	penjamin_hubungan
) {
	await element(by.model('input.kreditpos_nosp')).sendKeys(kreditpos_nosp);
	await element(by.model('input.kreditpos_anggota_id')).sendKeys(kreditpos_anggota_id);
	await dropdown('input.kreditpos_jeniskredit_id', kreditpos_jeniskredit_id);
	await dropdown('input.kreditpos_wilpel_id', kreditpos_wilpel_id);
	await element(by.model('input.kreditpos_pinj_datetime')).sendKeys(kreditpos_pinj_datetime);
	await element(by.model('input.kreditpos_fotoktp')).sendKeys(kreditpos_fotoktp);
	await element(by.model('input.kreditpos_nopen')).sendKeys(kreditpos_nopen);
	await element(by.model('input.kreditpos_nopen_col')).sendKeys(kreditpos_nopen_col);
	await element(by.model('input.kreditpos_nopen_kprk')).sendKeys(kreditpos_nopen_kprk);
	await element(by.model('input.kreditpos_noskpensiun')).sendKeys(kreditpos_noskpensiun);
	await element(by.model('input.kreditpos_instansi')).sendKeys(kreditpos_instansi);
	await element(by.model('input.kreditpos_statussk')).sendKeys(kreditpos_statussk);
	await element(by.model('input.kreditpos_pokok')).sendKeys(kreditpos_pokok);
	await dropdown('input.kreditpos_bunga_id', kreditpos_bunga_id);
	await element(by.model('input.kreditpos_administrasi')).sendKeys(kreditpos_administrasi);
	await element(by.model('input.kreditpos_provisi')).sendKeys(kreditpos_provisi);
	await element(by.model('input.kreditpos_tenor')).sendKeys(kreditpos_tenor);
	await dropdown('input.kreditpos_jaminan_id', kreditpos_jaminan_id);
	await element(by.model('input.kreditpos_nojaminan')).sendKeys(kreditpos_nojaminan);
	await element(by.model('input.kreditpos_jmlspm')).sendKeys(kreditpos_jmlspm);
	await element(by.model('input.kreditpos_um')).sendKeys(kreditpos_um);
	await dropdown('input.kreditpos_akun_id', kreditpos_akun_id);
	await element(by.model('input.kreditpos_simpwajib')).sendKeys(kreditpos_simpwajib);
	await element(by.model('input.pkredit_id')).sendKeys(pkredit_id);
	await element(by.model('input.penjamin_nama')).sendKeys(penjamin_nama);
	await element(by.model('input.penjamin_alamat')).sendKeys(penjamin_alamat);
	await dropdown('input.penjamin_jk', penjamin_jk);
	await element(by.model('input.penjamin_notelp')).sendKeys(penjamin_notelp);
	await element(by.model('input.penjamin_pekerjaan')).sendKeys(penjamin_pekerjaan);
	await element(by.model('input.penjamin_fotoktp')).sendKeys(penjamin_fotoktp);
	await element(by.model('input.penjamin_hubungan')).sendKeys(penjamin_hubungan);
}