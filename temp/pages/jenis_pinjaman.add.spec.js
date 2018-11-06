export default async function (
jeniskredit_nama
) {
await element(by.model('input.jeniskredit_nama')).sendKeys(jeniskredit_nama)
}