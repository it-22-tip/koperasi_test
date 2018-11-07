export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.simpdetagt_datetime':
    	ret = await element(by.model('input.simpdetagt_datetime')).getAttribute('value');
    	break;
		case 'input.simpdetagt_anggota_id':
    	ret = await element(by.model('input.simpdetagt_anggota_id')).getAttribute('value');
    	break;
		case 'input.simpdetagt_akun_id':
    	ret = await dropdownValue('input.simpdetagt_akun_id');
    	break;
		case 'input.simpdetagt_pokok_keluar':
    	ret = await element(by.model('input.simpdetagt_pokok_keluar')).getAttribute('value');
    	break;
		case 'input.simpdetagt_wajib_keluar':
    	ret = await element(by.model('input.simpdetagt_wajib_keluar')).getAttribute('value');
    	break;
		case 'input.simpdetagt_sukarela_keluar':
    	ret = await element(by.model('input.simpdetagt_sukarela_keluar')).getAttribute('value');
    	break;
	}
	return ret;
}