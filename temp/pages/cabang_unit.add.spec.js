export default async function (
area_kode,
area_nama,
area_ktrans,
area_alamat,
area_telp,
area_induk,
area_npwp_no,
area_npwp_nama,
area_npwp_alamatjalan,
area_npwp_alamatblok,
area_npwp_alamatno,
area_npwp_alamatrt,
area_npwp_alamatrw,
area_npwp_alamatkel,
area_npwp_alamatkec,
area_npwp_alamatkabkota,
area_npwp_alamatprop,
area_npwp_alamatkodepos,
area_npwp_telp,
area_no_badanhk,
area_badanhk_date,
area_ppj_persen
) {
await element(by.model('input.area_kode')).sendKeys(area_kode)
await element(by.model('input.area_nama')).sendKeys(area_nama)
await element(by.model('input.area_ktrans')).sendKeys(area_ktrans)
await element(by.model('input.area_alamat')).sendKeys(area_alamat)
await element(by.model('input.area_telp')).sendKeys(area_telp)
await dropdown('input.area_induk', area_induk)
await element(by.model('input.area_npwp_no')).sendKeys(area_npwp_no)
await element(by.model('input.area_npwp_nama')).sendKeys(area_npwp_nama)
await element(by.model('input.area_npwp_alamatjalan')).sendKeys(area_npwp_alamatjalan)
await element(by.model('input.area_npwp_alamatblok')).sendKeys(area_npwp_alamatblok)
await element(by.model('input.area_npwp_alamatno')).sendKeys(area_npwp_alamatno)
await element(by.model('input.area_npwp_alamatrt')).sendKeys(area_npwp_alamatrt)
await element(by.model('input.area_npwp_alamatrw')).sendKeys(area_npwp_alamatrw)
await element(by.model('input.area_npwp_alamatkel')).sendKeys(area_npwp_alamatkel)
await element(by.model('input.area_npwp_alamatkec')).sendKeys(area_npwp_alamatkec)
await element(by.model('input.area_npwp_alamatkabkota')).sendKeys(area_npwp_alamatkabkota)
await element(by.model('input.area_npwp_alamatprop')).sendKeys(area_npwp_alamatprop)
await element(by.model('input.area_npwp_alamatkodepos')).sendKeys(area_npwp_alamatkodepos)
await element(by.model('input.area_npwp_telp')).sendKeys(area_npwp_telp)
await element(by.model('input.area_no_badanhk')).sendKeys(area_no_badanhk)
await element(by.model('input.area_badanhk_date')).sendKeys(area_badanhk_date)
await element(by.model('input.area_ppj_persen')).sendKeys(area_ppj_persen)
}