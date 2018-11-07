export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.mutasipeg_date':
    	ret = await element(by.model('input.mutasipeg_date')).getAttribute('value');
    	break;
		case 'input.pegawai_id':
    	ret = await element(by.model('input.pegawai_id')).getAttribute('value');
    	break;
		case 'input.mutasipeg_jab_baru':
    	ret = await dropdownValue('input.mutasipeg_jab_baru');
    	break;
		case 'input.mutasipeg_wilpel_baru':
    	ret = await dropdownValue('input.mutasipeg_wilpel_baru');
    	break;
		case 'input.mutasipeg_area_baru':
    	ret = await dropdownValue('input.mutasipeg_area_baru');
    	break;
		case 'input.mutasipeg_gajipokok':
    	ret = await element(by.model('input.mutasipeg_gajipokok')).getAttribute('value');
    	break;
		case 'input.mutasipeg_tunj_jabatan':
    	ret = await element(by.model('input.mutasipeg_tunj_jabatan')).getAttribute('value');
    	break;
		case 'input.mutasipeg_tunj_beras':
    	ret = await element(by.model('input.mutasipeg_tunj_beras')).getAttribute('value');
    	break;
		case 'input.mutasipeg_kesra':
    	ret = await element(by.model('input.mutasipeg_kesra')).getAttribute('value');
    	break;
	}
	return ret;
}