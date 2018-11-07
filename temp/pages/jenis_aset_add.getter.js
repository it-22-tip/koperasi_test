export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.jnsaset_nama':
    	ret = await element(by.model('input.jnsaset_nama')).getAttribute('value');
    	break;
		case 'input.jnsaset_tidak_susut':
    	ret = await dropdownValue('input.jnsaset_tidak_susut');
    	break;
		case 'input.jnsaset_metode_id':
    	ret = await dropdownValue('input.jnsaset_metode_id');
    	break;
		case 'input.jnsaset_umur_bulan':
    	ret = await element(by.model('input.jnsaset_umur_bulan')).getAttribute('value');
    	break;
		case 'input.jnsaset_depresiasi_pc':
    	ret = await element(by.model('input.jnsaset_depresiasi_pc')).getAttribute('value');
    	break;
	}
	return ret;
}