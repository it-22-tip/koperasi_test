const anggota_add = async function (
  anggota_wilpel_id = null,
  anggota_kodelama = null,
  anggota_nama = null,
  anggota_lahir_tempat = null,
  anggota_lahir_date = null,
  anggota_jk = null,
  anggota_agama = null,
  anggota_alamat = null,
  anggota_masuk_date = null,
  anggota_no_ktp = null,
  anggota_no_telp = null,
  anggota_pendidikan = null,
  anggota_pekerjaan = null,
  anggota_simppokok = null,
  anggota_simpwajib = null,
  anggota_simpsukarela = null
) {
  await dropdown('input.anggota_wilpel_id', anggota_wilpel_id);
  await element(by.model('input.anggota_kodelama')).sendKeys(anggota_kodelama);
  await element(by.model('input.anggota_nama')).sendKeys(anggota_nama);
  await element(by.model('input.anggota_lahir_tempat')).sendKeys(anggota_lahir_tempat);
  await element(by.model('input.anggota_lahir_date')).clear();
  await element(by.model('input.anggota_lahir_date')).sendKeys(anggota_lahir_date);
  await dropdown('input.anggota_jk', anggota_jk);
  await dropdown('input.anggota_agama', anggota_agama);// input.anggota_agama
  await element(by.model('input.anggota_alamat')).sendKeys(anggota_alamat);
  await element(by.model('input.anggota_masuk_date')).clear();
  await element(by.model('input.anggota_masuk_date')).sendKeys(anggota_masuk_date);
  await element(by.model('input.anggota_no_ktp')).sendKeys(anggota_no_ktp);
  await element(by.model('input.anggota_no_telp')).sendKeys(anggota_no_telp);
  await element(by.model('input.anggota_pendidikan')).sendKeys(anggota_pendidikan);
  await element(by.model('input.anggota_pekerjaan')).sendKeys(anggota_pekerjaan);
  await element(by.model('input.anggota_simppokok')).sendKeys(anggota_simppokok);
  await element(by.model('input.anggota_simpwajib')).sendKeys(anggota_simpwajib);
  await element(by.model('input.anggota_simpsukarela')).sendKeys(anggota_simpsukarela);
}
export default anggota_add;
