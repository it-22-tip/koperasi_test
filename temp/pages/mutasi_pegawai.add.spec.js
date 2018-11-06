export default async function (
mutasipeg_date,
pegawai_id,
mutasipeg_jab_baru,
mutasipeg_wilpel_baru,
mutasipeg_area_baru,
mutasipeg_gajipokok,
mutasipeg_tunj_jabatan,
mutasipeg_tunj_beras,
mutasipeg_kesra
) {
await element(by.model('input.mutasipeg_date')).sendKeys(mutasipeg_date)
await element(by.model('input.pegawai_id')).sendKeys(pegawai_id)
await dropdown('input.mutasipeg_jab_baru', mutasipeg_jab_baru)
await dropdown('input.mutasipeg_wilpel_baru', mutasipeg_wilpel_baru)
await dropdown('input.mutasipeg_area_baru', mutasipeg_area_baru)
await element(by.model('input.mutasipeg_gajipokok')).sendKeys(mutasipeg_gajipokok)
await element(by.model('input.mutasipeg_tunj_jabatan')).sendKeys(mutasipeg_tunj_jabatan)
await element(by.model('input.mutasipeg_tunj_beras')).sendKeys(mutasipeg_tunj_beras)
await element(by.model('input.mutasipeg_kesra')).sendKeys(mutasipeg_kesra)
}