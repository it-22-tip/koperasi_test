export default async function (
bunga_nama,
bunga_tipebunga_id,
bunga_persen,
bunga_tipebunga_id_2,
bunga_persen_2
) {
await element(by.model('input.bunga_nama')).sendKeys(bunga_nama)
await dropdown('input.bunga_tipebunga_id', bunga_tipebunga_id)
await element(by.model('input.bunga_persen')).sendKeys(bunga_persen)
await dropdown('input.bunga_tipebunga_id_2', bunga_tipebunga_id_2)
await element(by.model('input.bunga_persen_2')).sendKeys(bunga_persen_2)
}