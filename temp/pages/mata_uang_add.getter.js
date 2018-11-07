export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.mtuang_kode':
    	ret = await element(by.model('input.mtuang_kode')).getAttribute('value');
    	break;
		case 'input.mtuang_simbol':
    	ret = await element(by.model('input.mtuang_simbol')).getAttribute('value');
    	break;
		case 'input.mtuang_nama':
    	ret = await element(by.model('input.mtuang_nama')).getAttribute('value');
    	break;
		case 'input.mtuang_kurs':
    	ret = await element(by.model('input.mtuang_kurs')).getAttribute('value');
    	break;
		case 'input.mtuang_piutang_akun_id':
    	ret = await dropdownValue('input.mtuang_piutang_akun_id');
    	break;
		case 'input.mtuang_hutang_akun_id':
    	ret = await dropdownValue('input.mtuang_hutang_akun_id');
    	break;
		case 'input.mtuang_umjual_akun_id':
    	ret = await dropdownValue('input.mtuang_umjual_akun_id');
    	break;
		case 'input.mtuang_umbeli_akun_id':
    	ret = await dropdownValue('input.mtuang_umbeli_akun_id');
    	break;
		case 'input.mtuang_returjual_akun_id':
    	ret = await dropdownValue('input.mtuang_returjual_akun_id');
    	break;
		case 'input.mtuang_returbeli_akun_id':
    	ret = await dropdownValue('input.mtuang_returbeli_akun_id');
    	break;
		case 'input.mtuang_tambdiscjual_akun_id':
    	ret = await dropdownValue('input.mtuang_tambdiscjual_akun_id');
    	break;
		case 'input.mtuang_tambdiscbeli_akun_id':
    	ret = await dropdownValue('input.mtuang_tambdiscbeli_akun_id');
    	break;
		case 'input.mtuang_selisihbeli_akun_id':
    	ret = await dropdownValue('input.mtuang_selisihbeli_akun_id');
    	break;
		case 'input.mtuang_saldoreturjual_akun_id':
    	ret = await dropdownValue('input.mtuang_saldoreturjual_akun_id');
    	break;
	}
	return ret;
}