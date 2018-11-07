export default async function (
	searchModel
) {
	let ret;
	switch (searchModel) {
		case 'input.pkredit_datetime':
    	ret = await element(by.model('input.pkredit_datetime')).getAttribute('value');
    	break;
		case 'input.pkredit_anggota_id':
    	ret = await element(by.model('input.pkredit_anggota_id')).getAttribute('value');
    	break;
		case 'input.pkredit_wilpel_id':
    	ret = await dropdownValue('input.pkredit_wilpel_id');
    	break;
		case 'input.pkredit_noktp':
    	ret = await element(by.model('input.pkredit_noktp')).getAttribute('value');
    	break;
		case 'input.pkredit_nama':
    	ret = await element(by.model('input.pkredit_nama')).getAttribute('value');
    	break;
		case 'input.pkredit_alamat':
    	ret = await element(by.model('input.pkredit_alamat')).getAttribute('value');
    	break;
		case 'input.pkredit_jk':
    	ret = await dropdownValue('input.pkredit_jk');
    	break;
		case 'input.pkredit_notelp':
    	ret = await element(by.model('input.pkredit_notelp')).getAttribute('value');
    	break;
		case 'input.pkredit_pekerjaan':
    	ret = await element(by.model('input.pkredit_pekerjaan')).getAttribute('value');
    	break;
		case 'input.pkredit_jeniskredit_id':
    	ret = await dropdownValue('input.pkredit_jeniskredit_id');
    	break;
		case 'input.pkredit_tipebunga_id':
    	ret = await dropdownValue('input.pkredit_tipebunga_id');
    	break;
		case 'input.pkredit_bunga':
    	ret = await element(by.model('input.pkredit_bunga')).getAttribute('value');
    	break;
		case 'input.pkredit_diajukan':
    	ret = await element(by.model('input.pkredit_diajukan')).getAttribute('value');
    	break;
		case 'input.pkredit_jmlspm':
    	ret = await element(by.model('input.pkredit_jmlspm')).getAttribute('value');
    	break;
		case 'input.pkredit_um':
    	ret = await element(by.model('input.pkredit_um')).getAttribute('value');
    	break;
		case 'input.pkredit_jaminan_id':
    	ret = await dropdownValue('input.pkredit_jaminan_id');
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