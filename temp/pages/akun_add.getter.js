export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.akun_no':
    	ret = await element(by.model('input.akun_no')).getAttribute('value');
    	break;
		case 'input.akun_nama':
    	ret = await element(by.model('input.akun_nama')).getAttribute('value');
    	break;
		case 'input.akun_tipeakun_id':
    	ret = await dropdownValue('input.akun_tipeakun_id');
    	break;
		case 'input.akun_induk':
    	ret = await dropdownValue('input.akun_induk');
    	break;
		case 'input.akun_norek':
    	ret = await element(by.model('input.akun_norek')).getAttribute('value');
    	break;
		case 'input.akun_namabank':
    	ret = await element(by.model('input.akun_namabank')).getAttribute('value');
    	break;
		case 'input.akun_bukubank':
    	ret = await dropdownValue('input.akun_bukubank');
    	break;
		case 'input.akun_an':
    	ret = await element(by.model('input.akun_an')).getAttribute('value');
    	break;
		case 'input.akun_alamat':
    	ret = await element(by.model('input.akun_alamat')).getAttribute('value');
    	break;
	}
	return ret;
}