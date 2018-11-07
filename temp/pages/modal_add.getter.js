export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.modaldet_datetime':
    	ret = await element(by.model('input.modaldet_datetime')).getAttribute('value');
    	break;
		case 'input.modaldet_modal_id':
    	ret = await element(by.model('input.modaldet_modal_id')).getAttribute('value');
    	break;
		case 'input.modaldet_amount':
    	ret = await element(by.model('input.modaldet_amount')).getAttribute('value');
    	break;
		case 'input.modaldet_anggota_id':
    	ret = await element(by.model('input.modaldet_anggota_id')).getAttribute('value');
    	break;
		case 'input.modaldet_akun_id':
    	ret = await dropdownValue('input.modaldet_akun_id');
    	break;
	}
	return ret;
}