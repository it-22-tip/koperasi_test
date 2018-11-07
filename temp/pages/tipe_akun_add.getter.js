export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.tipeakun_nama':
    	ret = await element(by.model('input.tipeakun_nama')).getAttribute('value');
    	break;
	}
	return ret;
}