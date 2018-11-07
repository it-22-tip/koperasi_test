export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.bunga_nama':
    	ret = await element(by.model('input.bunga_nama')).getAttribute('value');
    	break;
		case 'input.bunga_tipebunga_id':
    	ret = await dropdownValue('input.bunga_tipebunga_id');
    	break;
		case 'input.bunga_persen':
    	ret = await element(by.model('input.bunga_persen')).getAttribute('value');
    	break;
		case 'input.bunga_tipebunga_id_2':
    	ret = await dropdownValue('input.bunga_tipebunga_id_2');
    	break;
		case 'input.bunga_persen_2':
    	ret = await element(by.model('input.bunga_persen_2')).getAttribute('value');
    	break;
	}
	return ret;
}