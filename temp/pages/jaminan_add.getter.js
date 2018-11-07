export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.jaminan_kode':
    	ret = await element(by.model('input.jaminan_kode')).getAttribute('value');
    	break;
		case 'input.jaminan_ket':
    	ret = await element(by.model('input.jaminan_ket')).getAttribute('value');
    	break;
	}
	return ret;
}