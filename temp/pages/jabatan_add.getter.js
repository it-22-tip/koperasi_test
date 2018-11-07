export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.jabatan_nama':
    	ret = await element(by.model('input.jabatan_nama')).getAttribute('value');
    	break;
	}
	return ret;
}