export default async function (
	mutasisimp_area_asal,
	mutasisimp_area_baru,
	mutasisimp_akun_db_id,
	mutasisimp_akun_cr_id,
	mutasisimp_datetime,
	mutasisimp_pokok,
	mutasisimp_wajib,
	mutasisimp_sukarela
) {
	await dropdown('input.mutasisimp_area_asal', mutasisimp_area_asal);
	await dropdown('input.mutasisimp_area_baru', mutasisimp_area_baru);
	await dropdown('input.mutasisimp_akun_db_id', mutasisimp_akun_db_id);
	await dropdown('input.mutasisimp_akun_cr_id', mutasisimp_akun_cr_id);
	await element(by.model('input.mutasisimp_datetime')).sendKeys(mutasisimp_datetime);
	await element(by.model('input.mutasisimp_pokok')).sendKeys(mutasisimp_pokok);
	await element(by.model('input.mutasisimp_wajib')).sendKeys(mutasisimp_wajib);
	await element(by.model('input.mutasisimp_sukarela')).sendKeys(mutasisimp_sukarela);
}