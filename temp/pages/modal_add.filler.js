export default async function (
	modaldet_datetime,
	modaldet_modal_id,
	modaldet_amount,
	modaldet_anggota_id,
	modaldet_akun_id
) {
	await element(by.model('input.modaldet_datetime')).sendKeys(modaldet_datetime);
	await element(by.model('input.modaldet_modal_id')).sendKeys(modaldet_modal_id);
	await element(by.model('input.modaldet_amount')).sendKeys(modaldet_amount);
	await element(by.model('input.modaldet_anggota_id')).sendKeys(modaldet_anggota_id);
	await dropdown('input.modaldet_akun_id', modaldet_akun_id);
}