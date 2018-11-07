export default async function (
	pegawai_wilpel_id,
	pegawai_nik,
	pegawai_anggota_id,
	anggota_nama,
	pegawai_lahir_date,
	pegawai_lahir_tempat,
	pegawai_jabatan_id,
	pegawai_jk,
	pegawai_telp,
	pegawai_npwp_no,
	pegawai_identitas,
	pegawai_no_identitas,
	pegawai_agama,
	pegawai_pend_jenjang,
	pegawai_pend_jurusan,
	pegawai_pend_thn_lulus,
	pegawai_almt_ktp,
	pegawai_almt_domisili,
	pegawai_akun_id,
	pegawai_penyertaan,
	pegawai_gajipokok,
	pegawai_tunj_jabatan,
	pegawai_kesra,
	pegawai_tunj_beras,
	pegawai_masuk_date
) {
	await dropdown('input.pegawai_wilpel_id', pegawai_wilpel_id);
	await element(by.model('input.pegawai_nik')).sendKeys(pegawai_nik);
	await element(by.model('input.pegawai_anggota_id')).sendKeys(pegawai_anggota_id);
	await element(by.model('input.anggota_nama')).sendKeys(anggota_nama);
	await element(by.model('input.pegawai_lahir_date')).sendKeys(pegawai_lahir_date);
	await element(by.model('input.pegawai_lahir_tempat')).sendKeys(pegawai_lahir_tempat);
	await dropdown('input.pegawai_jabatan_id', pegawai_jabatan_id);
	await dropdown('input.pegawai_jk', pegawai_jk);
	await element(by.model('input.pegawai_telp')).sendKeys(pegawai_telp);
	await element(by.model('input.pegawai_npwp_no')).sendKeys(pegawai_npwp_no);
	await dropdown('input.pegawai_identitas', pegawai_identitas);
	await element(by.model('input.pegawai_no_identitas')).sendKeys(pegawai_no_identitas);
	await dropdown('input.pegawai_agama', pegawai_agama);
	await element(by.model('input.pegawai_pend_jenjang')).sendKeys(pegawai_pend_jenjang);
	await element(by.model('input.pegawai_pend_jurusan')).sendKeys(pegawai_pend_jurusan);
	await element(by.model('input.pegawai_pend_thn_lulus')).sendKeys(pegawai_pend_thn_lulus);
	await element(by.model('input.pegawai_almt_ktp')).sendKeys(pegawai_almt_ktp);
	await element(by.model('input.pegawai_almt_domisili')).sendKeys(pegawai_almt_domisili);
	await dropdown('input.pegawai_akun_id', pegawai_akun_id);
	await element(by.model('input.pegawai_penyertaan')).sendKeys(pegawai_penyertaan);
	await element(by.model('input.pegawai_gajipokok')).sendKeys(pegawai_gajipokok);
	await element(by.model('input.pegawai_tunj_jabatan')).sendKeys(pegawai_tunj_jabatan);
	await element(by.model('input.pegawai_kesra')).sendKeys(pegawai_kesra);
	await element(by.model('input.pegawai_tunj_beras')).sendKeys(pegawai_tunj_beras);
	await element(by.model('input.pegawai_masuk_date')).sendKeys(pegawai_masuk_date);
}