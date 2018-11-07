export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.kreditpos_nosp':
    	ret = await element(by.model('input.kreditpos_nosp')).getAttribute('value');
    	break;
		case 'input.kreditpos_anggota_id':
    	ret = await element(by.model('input.kreditpos_anggota_id')).getAttribute('value');
    	break;
		case 'input.kreditpos_jeniskredit_id':
    	ret = await dropdownValue('input.kreditpos_jeniskredit_id');
    	break;
		case 'input.kreditpos_wilpel_id':
    	ret = await dropdownValue('input.kreditpos_wilpel_id');
    	break;
		case 'input.kreditpos_pinj_datetime':
    	ret = await element(by.model('input.kreditpos_pinj_datetime')).getAttribute('value');
    	break;
		case 'input.kreditpos_fotoktp':
    	ret = await element(by.model('input.kreditpos_fotoktp')).getAttribute('value');
    	break;
		case 'input.kreditpos_nopen':
    	ret = await element(by.model('input.kreditpos_nopen')).getAttribute('value');
    	break;
		case 'input.kreditpos_nopen_col':
    	ret = await element(by.model('input.kreditpos_nopen_col')).getAttribute('value');
    	break;
		case 'input.kreditpos_nopen_kprk':
    	ret = await element(by.model('input.kreditpos_nopen_kprk')).getAttribute('value');
    	break;
		case 'input.kreditpos_noskpensiun':
    	ret = await element(by.model('input.kreditpos_noskpensiun')).getAttribute('value');
    	break;
		case 'input.kreditpos_instansi':
    	ret = await element(by.model('input.kreditpos_instansi')).getAttribute('value');
    	break;
		case 'input.kreditpos_statussk':
    	ret = await element(by.model('input.kreditpos_statussk')).getAttribute('value');
    	break;
		case 'input.kreditpos_pokok':
    	ret = await element(by.model('input.kreditpos_pokok')).getAttribute('value');
    	break;
		case 'input.kreditpos_bunga_id':
    	ret = await dropdownValue('input.kreditpos_bunga_id');
    	break;
		case 'input.kreditpos_administrasi':
    	ret = await element(by.model('input.kreditpos_administrasi')).getAttribute('value');
    	break;
		case 'input.kreditpos_provisi':
    	ret = await element(by.model('input.kreditpos_provisi')).getAttribute('value');
    	break;
		case 'input.kreditpos_tenor':
    	ret = await element(by.model('input.kreditpos_tenor')).getAttribute('value');
    	break;
		case 'input.kreditpos_jaminan_id':
    	ret = await dropdownValue('input.kreditpos_jaminan_id');
    	break;
		case 'input.kreditpos_nojaminan':
    	ret = await element(by.model('input.kreditpos_nojaminan')).getAttribute('value');
    	break;
		case 'input.kreditpos_jmlspm':
    	ret = await element(by.model('input.kreditpos_jmlspm')).getAttribute('value');
    	break;
		case 'input.kreditpos_um':
    	ret = await element(by.model('input.kreditpos_um')).getAttribute('value');
    	break;
		case 'input.kreditpos_akun_id':
    	ret = await dropdownValue('input.kreditpos_akun_id');
    	break;
		case 'input.kreditpos_simpwajib':
    	ret = await element(by.model('input.kreditpos_simpwajib')).getAttribute('value');
    	break;
		case 'input.pkredit_id':
    	ret = await element(by.model('input.pkredit_id')).getAttribute('value');
    	break;
		case 'input.penjamin_nama':
    	ret = await element(by.model('input.penjamin_nama')).getAttribute('value');
    	break;
		case 'input.penjamin_alamat':
    	ret = await element(by.model('input.penjamin_alamat')).getAttribute('value');
    	break;
		case 'input.penjamin_jk':
    	ret = await dropdownValue('input.penjamin_jk');
    	break;
		case 'input.penjamin_notelp':
    	ret = await element(by.model('input.penjamin_notelp')).getAttribute('value');
    	break;
		case 'input.penjamin_pekerjaan':
    	ret = await element(by.model('input.penjamin_pekerjaan')).getAttribute('value');
    	break;
		case 'input.penjamin_fotoktp':
    	ret = await element(by.model('input.penjamin_fotoktp')).getAttribute('value');
    	break;
		case 'input.penjamin_hubungan':
    	ret = await element(by.model('input.penjamin_hubungan')).getAttribute('value');
    	break;
	}
	return ret;
}