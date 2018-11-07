export default async function (
	tipeakun_nama
) {
	await element(by.model('input.tipeakun_nama')).sendKeys(tipeakun_nama);
}