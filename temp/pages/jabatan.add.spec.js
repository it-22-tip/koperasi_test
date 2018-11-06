export default async function (
jabatan_nama
) {
await element(by.model('input.jabatan_nama')).sendKeys(jabatan_nama)
}