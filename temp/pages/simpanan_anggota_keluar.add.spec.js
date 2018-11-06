export default async function (
simpdetagt_datetime,
simpdetagt_anggota_id,
simpdetagt_akun_id,
simpdetagt_pokok_keluar,
simpdetagt_wajib_keluar,
simpdetagt_sukarela_keluar
) {
await element(by.model('input.simpdetagt_datetime')).sendKeys(simpdetagt_datetime)
await element(by.model('input.simpdetagt_anggota_id')).sendKeys(simpdetagt_anggota_id)
await dropdown('input.simpdetagt_akun_id', simpdetagt_akun_id)
await element(by.model('input.simpdetagt_pokok_keluar')).sendKeys(simpdetagt_pokok_keluar)
await element(by.model('input.simpdetagt_wajib_keluar')).sendKeys(simpdetagt_wajib_keluar)
await element(by.model('input.simpdetagt_sukarela_keluar')).sendKeys(simpdetagt_sukarela_keluar)
}