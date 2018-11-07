export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.pegawai_wilpel_id':
    	ret = await dropdownValue('input.pegawai_wilpel_id');
    	break;
		case 'input.pegawai_nik':
    	ret = await element(by.model('input.pegawai_nik')).getAttribute('value');
    	break;
		case 'input.pegawai_anggota_id':
    	ret = await element(by.model('input.pegawai_anggota_id')).getAttribute('value');
    	break;
		case 'input.anggota_nama':
    	ret = await element(by.model('input.anggota_nama')).getAttribute('value');
    	break;
		case 'input.pegawai_lahir_date':
    	ret = await element(by.model('input.pegawai_lahir_date')).getAttribute('value');
    	break;
		case 'input.pegawai_lahir_tempat':
    	ret = await element(by.model('input.pegawai_lahir_tempat')).getAttribute('value');
    	break;
		case 'input.pegawai_jabatan_id':
    	ret = await dropdownValue('input.pegawai_jabatan_id');
    	break;
		case 'input.pegawai_jk':
    	ret = await dropdownValue('input.pegawai_jk');
    	break;
		case 'input.pegawai_telp':
    	ret = await element(by.model('input.pegawai_telp')).getAttribute('value');
    	break;
		case 'input.pegawai_npwp_no':
    	ret = await element(by.model('input.pegawai_npwp_no')).getAttribute('value');
    	break;
		case 'input.pegawai_identitas':
    	ret = await dropdownValue('input.pegawai_identitas');
    	break;
		case 'input.pegawai_no_identitas':
    	ret = await element(by.model('input.pegawai_no_identitas')).getAttribute('value');
    	break;
		case 'input.pegawai_agama':
    	ret = await dropdownValue('input.pegawai_agama');
    	break;
		case 'input.pegawai_pend_jenjang':
    	ret = await element(by.model('input.pegawai_pend_jenjang')).getAttribute('value');
    	break;
		case 'input.pegawai_pend_jurusan':
    	ret = await element(by.model('input.pegawai_pend_jurusan')).getAttribute('value');
    	break;
		case 'input.pegawai_pend_thn_lulus':
    	ret = await element(by.model('input.pegawai_pend_thn_lulus')).getAttribute('value');
    	break;
		case 'input.pegawai_almt_ktp':
    	ret = await element(by.model('input.pegawai_almt_ktp')).getAttribute('value');
    	break;
		case 'input.pegawai_almt_domisili':
    	ret = await element(by.model('input.pegawai_almt_domisili')).getAttribute('value');
    	break;
		case 'input.pegawai_akun_id':
    	ret = await dropdownValue('input.pegawai_akun_id');
    	break;
		case 'input.pegawai_penyertaan':
    	ret = await element(by.model('input.pegawai_penyertaan')).getAttribute('value');
    	break;
		case 'input.pegawai_gajipokok':
    	ret = await element(by.model('input.pegawai_gajipokok')).getAttribute('value');
    	break;
		case 'input.pegawai_tunj_jabatan':
    	ret = await element(by.model('input.pegawai_tunj_jabatan')).getAttribute('value');
    	break;
		case 'input.pegawai_kesra':
    	ret = await element(by.model('input.pegawai_kesra')).getAttribute('value');
    	break;
		case 'input.pegawai_tunj_beras':
    	ret = await element(by.model('input.pegawai_tunj_beras')).getAttribute('value');
    	break;
		case 'input.pegawai_masuk_date':
    	ret = await element(by.model('input.pegawai_masuk_date')).getAttribute('value');
    	break;
	}
	return ret;
}