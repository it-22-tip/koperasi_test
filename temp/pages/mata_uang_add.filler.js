export default async function (
	mtuang_kode,
	mtuang_simbol,
	mtuang_nama,
	mtuang_kurs,
	mtuang_piutang_akun_id,
	mtuang_hutang_akun_id,
	mtuang_umjual_akun_id,
	mtuang_umbeli_akun_id,
	mtuang_returjual_akun_id,
	mtuang_returbeli_akun_id,
	mtuang_tambdiscjual_akun_id,
	mtuang_tambdiscbeli_akun_id,
	mtuang_selisihbeli_akun_id,
	mtuang_saldoreturjual_akun_id
) {
	await element(by.model('input.mtuang_kode')).sendKeys(mtuang_kode);
	await element(by.model('input.mtuang_simbol')).sendKeys(mtuang_simbol);
	await element(by.model('input.mtuang_nama')).sendKeys(mtuang_nama);
	await element(by.model('input.mtuang_kurs')).sendKeys(mtuang_kurs);
	await dropdown('input.mtuang_piutang_akun_id', mtuang_piutang_akun_id);
	await dropdown('input.mtuang_hutang_akun_id', mtuang_hutang_akun_id);
	await dropdown('input.mtuang_umjual_akun_id', mtuang_umjual_akun_id);
	await dropdown('input.mtuang_umbeli_akun_id', mtuang_umbeli_akun_id);
	await dropdown('input.mtuang_returjual_akun_id', mtuang_returjual_akun_id);
	await dropdown('input.mtuang_returbeli_akun_id', mtuang_returbeli_akun_id);
	await dropdown('input.mtuang_tambdiscjual_akun_id', mtuang_tambdiscjual_akun_id);
	await dropdown('input.mtuang_tambdiscbeli_akun_id', mtuang_tambdiscbeli_akun_id);
	await dropdown('input.mtuang_selisihbeli_akun_id', mtuang_selisihbeli_akun_id);
	await dropdown('input.mtuang_saldoreturjual_akun_id', mtuang_saldoreturjual_akun_id);
}