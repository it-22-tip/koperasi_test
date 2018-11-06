export default async function (
jaminan_kode,
jaminan_ket
) {
await element(by.model('input.jaminan_kode')).sendKeys(jaminan_kode)
await element(by.model('input.jaminan_ket')).sendKeys(jaminan_ket)
}