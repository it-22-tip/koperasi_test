import _ from 'lodash';
const pages = ['resort',
'jabatan',
'jaminan',
'tipe_jasa',
'tipe_trans',
'tipe_akun',
'jenis_pinjaman',
'jenis_aset',
'anggota',
'tambahan_modal',
'akun',
'mata_uang',
'pegawai',
'kategori_aset',
'gaji',
'setor_pusat',
'pengajuan_pinjaman',
'pinjaman',
'pinjaman_pos',
'jasa',
'mutasi_simpanan'];

var pgs = ['anggota', 'jenis_aset'];

describe('run add', function () {
  it('run', async function () {
    await login();
  })
})

_.forEach(pgs, function(val) {
  require(`./pages/${val}.add.spec.js`);
});

describe('run add', function () {
  it('run', async function () {
    await logout();
  })
})

