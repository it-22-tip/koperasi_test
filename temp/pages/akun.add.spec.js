export default async function (
akun_no,
akun_nama,
akun_tipeakun_id,
akun_induk,
akun_norek,
akun_namabank,
akun_bukubank,
akun_an,
akun_alamat
) {
await element(by.model('input.akun_no')).sendKeys(akun_no)
await element(by.model('input.akun_nama')).sendKeys(akun_nama)
await dropdown('input.akun_tipeakun_id', akun_tipeakun_id)
await dropdown('input.akun_induk', akun_induk)
await element(by.model('input.akun_norek')).sendKeys(akun_norek)
await element(by.model('input.akun_namabank')).sendKeys(akun_namabank)
await dropdown('input.akun_bukubank', akun_bukubank)
await element(by.model('input.akun_an')).sendKeys(akun_an)
await element(by.model('input.akun_alamat')).sendKeys(akun_alamat)
}