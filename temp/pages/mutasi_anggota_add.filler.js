export default async function (
	anggota_id,
	mutasiagt_area_lama,
	mutasiagt_wilpel_lama,
	anggota_area_id,
	anggota_wilpel_id
) {
	await element(by.model('input.anggota_id')).sendKeys(anggota_id);
	await dropdown('input.mutasiagt_area_lama', mutasiagt_area_lama);
	await dropdown('input.mutasiagt_wilpel_lama', mutasiagt_wilpel_lama);
	await dropdown('input.anggota_area_id', anggota_area_id);
	await dropdown('input.anggota_wilpel_id', anggota_wilpel_id);
}