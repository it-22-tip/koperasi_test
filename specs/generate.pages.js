import { forEach } from 'lodash';
const list = [ 'anggota',
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
'modal',
// 'laporan tambahan modal',
//  'laporan setor pusat',
// 'laporan target jasa',
// 'laporan target pokok',
// 'menu edit',
// 'progress'
]
;

describe('sidebar', function () {
  forEach(
    list,
    function (name, key) {
      // it(`generate form helper: ${name}`, () => generateFormFiller(name));
      // it(`generate form helper: ${name}`, () => generateFormValueGetter(name));
      it(`generate form helper: ${name}`, () => generateJsonDummyTemplate(name));
    }
  );
})
