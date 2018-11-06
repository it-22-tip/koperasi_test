export default async function (
tipetrans_kode,
tipetrans_nama
) {
await element(by.model('input.tipetrans_kode')).sendKeys(tipetrans_kode)
await element(by.model('input.tipetrans_nama')).sendKeys(tipetrans_nama)
}