// model:
// input.pegawai_nik
// input.pegawai_anggota_id
// input.pegawai_nama
// input.pegawai_lahir_date
// input.pegawai_lahir_tempat
// input.pegawai_telp
// input.pegawai_npwp_no
// input.pegawai_no_identitas
// input.pegawai_pend_jenjang
// input.pegawai_pend_jurusan
// input.pegawai_pend_thn_lulus
// input.pegawai_almt_ktp
// input.pegawai_almt_domisili
// input.pegawai_penyertaan
// input.pegawai_gajipokok
// input.pegawai_tunj_jabatan
// input.pegawai_kesra
// input.pegawai_tunj_beras
// input.pegawai_masuk_date
import pegawai_add_form from '../forms/pegawai.add.form'
describe('pegawai add', function () {
  it('go to add', async function () {
    await clickSidebarMenu('pegawai');
    await clickTambah();
    await pegawai_add_form(
      'test - test',
      '54321',
      '12345',
      'sample name',
      '20 Oct 2000',
      'semarang',
      'aa',
      'Laki - Laki',
      '543-123',
      '',
      'KTP',
      'ID-123123',
      'Islam',
      'S1',
      'Matematika',
      '20 April 2017',
      'Semarang',
      'Surakarta',
      '',
      '',
      '',
      '',
      '',
      ''
    )
  })
})
