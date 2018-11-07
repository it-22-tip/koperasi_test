export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.gaji_pegawai_id':
    	ret = await element(by.model('input.gaji_pegawai_id')).getAttribute('value');
    	break;
		case 'input.gaji_bulan':
    	ret = await element(by.model('input.gaji_bulan')).getAttribute('value');
    	break;
		case 'input.gaji_pokok':
    	ret = await element(by.model('input.gaji_pokok')).getAttribute('value');
    	break;
		case 'input.gaji_jasa':
    	ret = await element(by.model('input.gaji_jasa')).getAttribute('value');
    	break;
		case 'input.gaji_honor':
    	ret = await element(by.model('input.gaji_honor')).getAttribute('value');
    	break;
		case 'input.gaji_insentif':
    	ret = await element(by.model('input.gaji_insentif')).getAttribute('value');
    	break;
		case 'input.gaji_tunj_jabatan':
    	ret = await element(by.model('input.gaji_tunj_jabatan')).getAttribute('value');
    	break;
		case 'input.gaji_tunj_beras':
    	ret = await element(by.model('input.gaji_tunj_beras')).getAttribute('value');
    	break;
		case 'input.gaji_kesra':
    	ret = await element(by.model('input.gaji_kesra')).getAttribute('value');
    	break;
		case 'input.gaji_pot_kesra':
    	ret = await element(by.model('input.gaji_pot_kesra')).getAttribute('value');
    	break;
		case 'input.gaji_pot_pulsa':
    	ret = await element(by.model('input.gaji_pot_pulsa')).getAttribute('value');
    	break;
		case 'input.gaji_bersih':
    	ret = await element(by.model('input.gaji_bersih')).getAttribute('value');
    	break;
		case 'input.gaji_akun_id':
    	ret = await dropdownValue('input.gaji_akun_id');
    	break;
	}
	return ret;
}