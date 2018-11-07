export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.mutasisimp_area_asal':
    	ret = await dropdownValue('input.mutasisimp_area_asal');
    	break;
		case 'input.mutasisimp_area_baru':
    	ret = await dropdownValue('input.mutasisimp_area_baru');
    	break;
		case 'input.mutasisimp_akun_db_id':
    	ret = await dropdownValue('input.mutasisimp_akun_db_id');
    	break;
		case 'input.mutasisimp_akun_cr_id':
    	ret = await dropdownValue('input.mutasisimp_akun_cr_id');
    	break;
		case 'input.mutasisimp_datetime':
    	ret = await element(by.model('input.mutasisimp_datetime')).getAttribute('value');
    	break;
		case 'input.mutasisimp_pokok':
    	ret = await element(by.model('input.mutasisimp_pokok')).getAttribute('value');
    	break;
		case 'input.mutasisimp_wajib':
    	ret = await element(by.model('input.mutasisimp_wajib')).getAttribute('value');
    	break;
		case 'input.mutasisimp_sukarela':
    	ret = await element(by.model('input.mutasisimp_sukarela')).getAttribute('value');
    	break;
	}
	return ret;
}