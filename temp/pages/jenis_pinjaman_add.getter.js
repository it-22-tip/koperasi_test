export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.jeniskredit_nama':
    	ret = await element(by.model('input.jeniskredit_nama')).getAttribute('value');
    	break;
	}
	return ret;
}