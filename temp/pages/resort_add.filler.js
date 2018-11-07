export default async function (
	wilpel_area_id,
	wilpel_kode,
	wilpel_nama
) {
	await dropdown('input.wilpel_area_id', wilpel_area_id);
	await element(by.model('input.wilpel_kode')).sendKeys(wilpel_kode);
	await element(by.model('input.wilpel_nama')).sendKeys(wilpel_nama);
}