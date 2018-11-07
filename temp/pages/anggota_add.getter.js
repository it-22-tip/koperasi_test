export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.anggota_wilpel_id':
    	ret = await dropdownValue('input.anggota_wilpel_id');
    	break;
		case 'input.anggota_kodelama':
    	ret = await element(by.model('input.anggota_kodelama')).getAttribute('value');
    	break;
		case 'input.anggota_nama':
    	ret = await element(by.model('input.anggota_nama')).getAttribute('value');
    	break;
		case 'input.anggota_lahir_tempat':
    	ret = await element(by.model('input.anggota_lahir_tempat')).getAttribute('value');
    	break;
		case 'input.anggota_lahir_date':
    	ret = await element(by.model('input.anggota_lahir_date')).getAttribute('value');
    	break;
		case 'input.anggota_jk':
    	ret = await dropdownValue('input.anggota_jk');
    	break;
		case 'input.anggota_agama':
    	ret = await dropdownValue('input.anggota_agama');
    	break;
		case 'input.anggota_alamat':
    	ret = await element(by.model('input.anggota_alamat')).getAttribute('value');
    	break;
		case 'input.anggota_masuk_date':
    	ret = await element(by.model('input.anggota_masuk_date')).getAttribute('value');
    	break;
		case 'input.anggota_tipe':
    	ret = await dropdownValue('input.anggota_tipe');
    	break;
		case 'input.anggota_no_ktp':
    	ret = await element(by.model('input.anggota_no_ktp')).getAttribute('value');
    	break;
		case 'input.anggota_no_telp':
    	ret = await element(by.model('input.anggota_no_telp')).getAttribute('value');
    	break;
		case 'input.anggota_pendidikan':
    	ret = await element(by.model('input.anggota_pendidikan')).getAttribute('value');
    	break;
		case 'input.anggota_pekerjaan':
    	ret = await element(by.model('input.anggota_pekerjaan')).getAttribute('value');
    	break;
		case 'input.anggota_simppokok':
    	ret = await element(by.model('input.anggota_simppokok')).getAttribute('value');
    	break;
		case 'input.anggota_simpwajib':
    	ret = await element(by.model('input.anggota_simpwajib')).getAttribute('value');
    	break;
		case 'input.anggota_simpsukarela':
    	ret = await element(by.model('input.anggota_simpsukarela')).getAttribute('value');
    	break;
	}
	return ret;
}