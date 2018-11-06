export default async function (
jnsaset_nama,
jnsaset_tidak_susut,
jnsaset_metode_id,
jnsaset_umur_bulan,
jnsaset_depresiasi_pc
) {
await element(by.model('input.jnsaset_nama')).sendKeys(jnsaset_nama)
await dropdown('input.jnsaset_tidak_susut', jnsaset_tidak_susut)
await dropdown('input.jnsaset_metode_id', jnsaset_metode_id)
await element(by.model('input.jnsaset_umur_bulan')).sendKeys(jnsaset_umur_bulan)
await element(by.model('input.jnsaset_depresiasi_pc')).sendKeys(jnsaset_depresiasi_pc)
}