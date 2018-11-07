export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.area_kode':
    	ret = await element(by.model('input.area_kode')).getAttribute('value');
    	break;
		case 'input.area_nama':
    	ret = await element(by.model('input.area_nama')).getAttribute('value');
    	break;
		case 'input.area_ktrans':
    	ret = await element(by.model('input.area_ktrans')).getAttribute('value');
    	break;
		case 'input.area_alamat':
    	ret = await element(by.model('input.area_alamat')).getAttribute('value');
    	break;
		case 'input.area_telp':
    	ret = await element(by.model('input.area_telp')).getAttribute('value');
    	break;
		case 'input.area_induk':
    	ret = await dropdownValue('input.area_induk');
    	break;
		case 'input.area_npwp_no':
    	ret = await element(by.model('input.area_npwp_no')).getAttribute('value');
    	break;
		case 'input.area_npwp_nama':
    	ret = await element(by.model('input.area_npwp_nama')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatjalan':
    	ret = await element(by.model('input.area_npwp_alamatjalan')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatblok':
    	ret = await element(by.model('input.area_npwp_alamatblok')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatno':
    	ret = await element(by.model('input.area_npwp_alamatno')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatrt':
    	ret = await element(by.model('input.area_npwp_alamatrt')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatrw':
    	ret = await element(by.model('input.area_npwp_alamatrw')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatkel':
    	ret = await element(by.model('input.area_npwp_alamatkel')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatkec':
    	ret = await element(by.model('input.area_npwp_alamatkec')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatkabkota':
    	ret = await element(by.model('input.area_npwp_alamatkabkota')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatprop':
    	ret = await element(by.model('input.area_npwp_alamatprop')).getAttribute('value');
    	break;
		case 'input.area_npwp_alamatkodepos':
    	ret = await element(by.model('input.area_npwp_alamatkodepos')).getAttribute('value');
    	break;
		case 'input.area_npwp_telp':
    	ret = await element(by.model('input.area_npwp_telp')).getAttribute('value');
    	break;
		case 'input.area_no_badanhk':
    	ret = await element(by.model('input.area_no_badanhk')).getAttribute('value');
    	break;
		case 'input.area_badanhk_date':
    	ret = await element(by.model('input.area_badanhk_date')).getAttribute('value');
    	break;
		case 'input.area_ppj_persen':
    	ret = await element(by.model('input.area_ppj_persen')).getAttribute('value');
    	break;
	}
	return ret;
}