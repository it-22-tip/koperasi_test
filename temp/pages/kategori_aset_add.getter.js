export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.kataset_nama':
    	ret = await element(by.model('input.kataset_nama')).getAttribute('value');
    	break;
		case 'input.kataset_berwujud':
    	ret = await dropdownValue('input.kataset_berwujud');
    	break;
		case 'input.kataset_pajak':
    	ret = await dropdownValue('input.kataset_pajak');
    	break;
		case 'input.kataset_jnsaset_id':
    	ret = await dropdownValue('input.kataset_jnsaset_id');
    	break;
		case 'input.kataset_akunaset_id':
    	ret = await dropdownValue('input.kataset_akunaset_id');
    	break;
		case 'input.kataset_akundepresiasi_id':
    	ret = await dropdownValue('input.kataset_akundepresiasi_id');
    	break;
		case 'input.kataset_akunakumulasi_id':
    	ret = await dropdownValue('input.kataset_akunakumulasi_id');
    	break;
	}
	return ret;
}