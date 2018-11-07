export default async function (
searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.wilpel_area_id':
    	ret = await dropdownValue('input.wilpel_area_id');
    	break;
		case 'input.wilpel_kode':
    	ret = await element(by.model('input.wilpel_kode')).getAttribute('value');
    	break;

		case 'input.wilpel_nama':
    	ret = await element(by.model('input.wilpel_nama')).getAttribute('value');
    	break;

	}
	return ret;
}