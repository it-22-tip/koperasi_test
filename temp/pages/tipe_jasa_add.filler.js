export default async function (
	tipebunga_nama
) {
	await element(by.model('input.tipebunga_nama')).sendKeys(tipebunga_nama);
}