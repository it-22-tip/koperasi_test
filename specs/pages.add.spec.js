import _ from 'lodash';
const pages = /* ['resort',
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
'mutasi_simpanan']; */

[ 'anggota',
  'akun',
  'pegawai',
  'kategori aset',
  'gaji',
  'cabang / unit',
  'resort',
  'jabatan',
  'jaminan',
  'tipe jasa',
  'tipe trans',
  'tipe akun',
  'jenis pinjaman',
  'jenis aset',
  'mata uang',
  'jasa',
  'tambahan modal',
  'setor pusat',
  'pengajuan pinjaman',
  'pinjaman',
  'pinjaman pos',
  'mutasi simpanan',
  'mutasi pegawai',
  'realisasi pinjaman',
  'mutasi anggota',
  'simpanan anggota keluar',
  'simpanan anggota masuk',
  'modal'];

var pgs = [
  /*
    'anggota',
    'jenis_aset',
    'pegawai'*/
    'pinjaman_pos'];

describe('run add', function () {
  it('run', async function () {
    await login();
  })
})

/* describe('list menu', function () {
  it('list menu', async function () {
    var ls = await listSideBar();
    console.log(ls);
  });
}); */
require(`./generate.pages.js`);
/* _.forEach(pgs, function(val) {
  require(`./pages/${val}.add.spec.js`);
}); */

describe('run add', function () {
  it('run', async function () {
    await logout();
  })
})

