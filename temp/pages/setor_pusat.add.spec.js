export default async function (
setorpusat_area_id,
setorpusat_noref,
setorpusat_datetime,
setorpusat_amount,
setorpusat_akun_cr_id
) {
await dropdown('input.setorpusat_area_id', setorpusat_area_id)
await element(by.model('input.setorpusat_noref')).sendKeys(setorpusat_noref)
await element(by.model('input.setorpusat_datetime')).sendKeys(setorpusat_datetime)
await element(by.model('input.setorpusat_amount')).sendKeys(setorpusat_amount)
await dropdown('input.setorpusat_akun_cr_id', setorpusat_akun_cr_id)
}