export default async function (
kataset_nama,
kataset_berwujud,
kataset_pajak,
kataset_jnsaset_id,
kataset_akunaset_id,
kataset_akundepresiasi_id,
kataset_akunakumulasi_id
) {
await element(by.model('input.kataset_nama')).sendKeys(kataset_nama)
await dropdown('input.kataset_berwujud', kataset_berwujud)
await dropdown('input.kataset_pajak', kataset_pajak)
await dropdown('input.kataset_jnsaset_id', kataset_jnsaset_id)
await dropdown('input.kataset_akunaset_id', kataset_akunaset_id)
await dropdown('input.kataset_akundepresiasi_id', kataset_akundepresiasi_id)
await dropdown('input.kataset_akunakumulasi_id', kataset_akunakumulasi_id)
}