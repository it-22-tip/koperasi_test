export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.setorpusat_area_id':
    	ret = await dropdownValue('input.setorpusat_area_id');
    	break;
		case 'input.setorpusat_noref':
    	ret = await element(by.model('input.setorpusat_noref')).getAttribute('value');
    	break;
		case 'input.setorpusat_datetime':
    	ret = await element(by.model('input.setorpusat_datetime')).getAttribute('value');
    	break;
		case 'input.setorpusat_amount':
    	ret = await element(by.model('input.setorpusat_amount')).getAttribute('value');
    	break;
		case 'input.setorpusat_akun_cr_id':
    	ret = await dropdownValue('input.setorpusat_akun_cr_id');
    	break;
	}
	return ret;
}