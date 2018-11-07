export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.modal_area_id':
    	ret = await dropdownValue('input.modal_area_id');
    	break;
		case 'input.modal_noref':
    	ret = await element(by.model('input.modal_noref')).getAttribute('value');
    	break;
		case 'input.modal_datetime':
    	ret = await element(by.model('input.modal_datetime')).getAttribute('value');
    	break;
		case 'input.modal_amount':
    	ret = await element(by.model('input.modal_amount')).getAttribute('value');
    	break;
		case 'input.modal_akun_cr_id':
    	ret = await dropdownValue('input.modal_akun_cr_id');
    	break;
	}
	return ret;
}