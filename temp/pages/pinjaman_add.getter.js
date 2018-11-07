export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.kredit_nosp':
    	ret = await element(by.model('input.kredit_nosp')).getAttribute('value');
    	break;
		case 'input.kredit_anggota_id':
    	ret = await element(by.model('input.kredit_anggota_id')).getAttribute('value');
    	break;
		case 'input.kredit_jeniskredit_id':
    	ret = await dropdownValue('input.kredit_jeniskredit_id');
    	break;
		case 'input.kredit_wilpel_id':
    	ret = await dropdownValue('input.kredit_wilpel_id');
    	break;
		case 'input.kredit_pinj_datetime':
    	ret = await element(by.model('input.kredit_pinj_datetime')).getAttribute('value');
    	break;
		case 'input.kredit_fotoktp':
    	ret = await element(by.model('input.kredit_fotoktp')).getAttribute('value');
    	break;
		case 'input.kredit_pokok':
    	ret = await element(by.model('input.kredit_pokok')).getAttribute('value');
    	break;
		case 'input.kredit_bunga_id':
    	ret = await dropdownValue('input.kredit_bunga_id');
    	break;
		case 'input.kredit_tenor':
    	ret = await element(by.model('input.kredit_tenor')).getAttribute('value');
    	break;
		case 'input.kredit_administrasi':
    	ret = await element(by.model('input.kredit_administrasi')).getAttribute('value');
    	break;
		case 'input.kredit_provisi':
    	ret = await element(by.model('input.kredit_provisi')).getAttribute('value');
    	break;
		case 'input.kredit_ppj':
    	ret = await element(by.model('input.kredit_ppj')).getAttribute('value');
    	break;
		case 'input.kredit_simpwajib':
    	ret = await element(by.model('input.kredit_simpwajib')).getAttribute('value');
    	break;
		case 'input.kredit_dansos':
    	ret = await element(by.model('input.kredit_dansos')).getAttribute('value');
    	break;
		case 'input.kredit_jaminan_id':
    	ret = await dropdownValue('input.kredit_jaminan_id');
    	break;
		case 'input.kredit_nojaminan':
    	ret = await element(by.model('input.kredit_nojaminan')).getAttribute('value');
    	break;
		case 'input.kredit_jmlspm':
    	ret = await element(by.model('input.kredit_jmlspm')).getAttribute('value');
    	break;
		case 'input.kredit_um':
    	ret = await element(by.model('input.kredit_um')).getAttribute('value');
    	break;
		case 'input.kredit_akun_id':
    	ret = await dropdownValue('input.kredit_akun_id');
    	break;
		case 'input.kredit_bunga':
    	ret = await element(by.model('input.kredit_bunga')).getAttribute('value');
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