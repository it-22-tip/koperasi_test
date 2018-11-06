export default async function (
simpdetagt_datetime,
simpdetagt_anggota_id,
simpdetagt_akun_id,
simpdetagt_pokok_masuk,
simpdetagt_wajib_masuk,
simpdetagt_sukarela_masuk
) {
await element(by.model('input.simpdetagt_datetime')).sendKeys(simpdetagt_datetime)
await element(by.model('input.simpdetagt_anggota_id')).sendKeys(simpdetagt_anggota_id)
await dropdown('input.simpdetagt_akun_id', simpdetagt_akun_id)
await element(by.model('input.simpdetagt_pokok_masuk')).sendKeys(simpdetagt_pokok_masuk)
await element(by.model('input.simpdetagt_wajib_masuk')).sendKeys(simpdetagt_wajib_masuk)
await element(by.model('input.simpdetagt_sukarela_masuk')).sendKeys(simpdetagt_sukarela_masuk)
}