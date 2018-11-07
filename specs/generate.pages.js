import { forEach } from 'lodash';
const list = [
  'resort',
  'jabatan',
  'jaminan',
  'tipe jasa',
  'tipe trans',
  'tipe akun',
  'jenis pinjaman',
  'jenis aset',
  'anggota',
  'akun',
  'mata uang',
  'pegawai',
  'kategori aset',
  'gaji',
  'setor pusat',
  'pengajuan pinjaman',
  'pinjaman',
  'pinjaman pos',
  'jasa',
  'mutasi simpanan',
  'mutasi pegawai',
  'realisasi pinjaman',
  'mutasi anggota',
  'simpanan anggota keluar',
  'simpanan anggota masuk',
  'cabang / unit',
  'tambahan modal',
  'modal',
  'laporan pegawai',
];

describe('sidebar', function () {
  forEach(
    list,
    function (name, key) {
      it(`generate form helper: ${name}`, () => generateFormFiller(name));
      it(`generate form helper: ${name}`, () => generateFormValueGetter(name));
    }
  );
})
