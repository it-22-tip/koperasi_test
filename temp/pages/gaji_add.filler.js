export default async function (
	gaji_pegawai_id,
	gaji_bulan,
	gaji_pokok,
	gaji_jasa,
	gaji_honor,
	gaji_insentif,
	gaji_tunj_jabatan,
	gaji_tunj_beras,
	gaji_kesra,
	gaji_pot_kesra,
	gaji_pot_pulsa,
	gaji_bersih,
	gaji_akun_id
) {
	await element(by.model('input.gaji_pegawai_id')).sendKeys(gaji_pegawai_id);
	await element(by.model('input.gaji_bulan')).sendKeys(gaji_bulan);
	await element(by.model('input.gaji_pokok')).sendKeys(gaji_pokok);
	await element(by.model('input.gaji_jasa')).sendKeys(gaji_jasa);
	await element(by.model('input.gaji_honor')).sendKeys(gaji_honor);
	await element(by.model('input.gaji_insentif')).sendKeys(gaji_insentif);
	await element(by.model('input.gaji_tunj_jabatan')).sendKeys(gaji_tunj_jabatan);
	await element(by.model('input.gaji_tunj_beras')).sendKeys(gaji_tunj_beras);
	await element(by.model('input.gaji_kesra')).sendKeys(gaji_kesra);
	await element(by.model('input.gaji_pot_kesra')).sendKeys(gaji_pot_kesra);
	await element(by.model('input.gaji_pot_pulsa')).sendKeys(gaji_pot_pulsa);
	await element(by.model('input.gaji_bersih')).sendKeys(gaji_bersih);
	await dropdown('input.gaji_akun_id', gaji_akun_id);
}