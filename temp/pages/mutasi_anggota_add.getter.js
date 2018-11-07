export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.anggota_id':
    	ret = await element(by.model('input.anggota_id')).getAttribute('value');
    	break;
		case 'input.mutasiagt_area_lama':
    	ret = await dropdownValue('input.mutasiagt_area_lama');
    	break;
		case 'input.mutasiagt_wilpel_lama':
    	ret = await dropdownValue('input.mutasiagt_wilpel_lama');
    	break;
		case 'input.anggota_area_id':
    	ret = await dropdownValue('input.anggota_area_id');
    	break;
		case 'input.anggota_wilpel_id':
    	ret = await dropdownValue('input.anggota_wilpel_id');
    	break;
	}
	return ret;
}