export default async function (
modal_area_id,
modal_noref,
modal_datetime,
modal_amount,
modal_akun_cr_id
) {
await dropdown('input.modal_area_id', modal_area_id)
await element(by.model('input.modal_noref')).sendKeys(modal_noref)
await element(by.model('input.modal_datetime')).sendKeys(modal_datetime)
await element(by.model('input.modal_amount')).sendKeys(modal_amount)
await dropdown('input.modal_akun_cr_id', modal_akun_cr_id)
}