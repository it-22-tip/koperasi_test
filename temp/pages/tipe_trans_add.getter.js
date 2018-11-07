export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.tipetrans_kode':
    	ret = await element(by.model('input.tipetrans_kode')).getAttribute('value');
    	break;
		case 'input.tipetrans_nama':
    	ret = await element(by.model('input.tipetrans_nama')).getAttribute('value');
    	break;
	}
	return ret;
}