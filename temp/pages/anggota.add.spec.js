export default async function (
anggota_wilpel_id,
anggota_kodelama,
anggota_nama,
anggota_lahir_tempat,
anggota_lahir_date,
anggota_jk,
anggota_agama,
anggota_alamat,
anggota_masuk_date,
anggota_tipe,
anggota_no_ktp,
anggota_no_telp,
anggota_pendidikan,
anggota_pekerjaan,
anggota_simppokok,
anggota_simpwajib,
anggota_simpsukarela
) {
await dropdown('input.anggota_wilpel_id', anggota_wilpel_id)
await element(by.model('input.anggota_kodelama')).sendKeys(anggota_kodelama)
await element(by.model('input.anggota_nama')).sendKeys(anggota_nama)
await element(by.model('input.anggota_lahir_tempat')).sendKeys(anggota_lahir_tempat)
await element(by.model('input.anggota_lahir_date')).sendKeys(anggota_lahir_date)
await dropdown('input.anggota_jk', anggota_jk)
await dropdown('input.anggota_agama', anggota_agama)
await element(by.model('input.anggota_alamat')).sendKeys(anggota_alamat)
await element(by.model('input.anggota_masuk_date')).sendKeys(anggota_masuk_date)
await dropdown('input.anggota_tipe', anggota_tipe)
await element(by.model('input.anggota_no_ktp')).sendKeys(anggota_no_ktp)
await element(by.model('input.anggota_no_telp')).sendKeys(anggota_no_telp)
await element(by.model('input.anggota_pendidikan')).sendKeys(anggota_pendidikan)
await element(by.model('input.anggota_pekerjaan')).sendKeys(anggota_pekerjaan)
await element(by.model('input.anggota_simppokok')).sendKeys(anggota_simppokok)
await element(by.model('input.anggota_simpwajib')).sendKeys(anggota_simpwajib)
await element(by.model('input.anggota_simpsukarela')).sendKeys(anggota_simpsukarela)
}