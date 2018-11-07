export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.tipebunga_nama':
    	ret = await element(by.model('input.tipebunga_nama')).getAttribute('value');
    	break;
	}
	return ret;
}