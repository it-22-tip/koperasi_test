const akun_add_form = async function (
  akun_no,
  akun_nama,
  akun_norek,
  akun_namabank,
  akun_an,
  akun_alamat
) {
  element(by.model('input.akun_no')).sendKeys(akun_no);
  element(by.model('input.akun_nama')).sendKeys(akun_nama);
  element(by.model('input.akun_norek')).sendKeys(akun_norek);
  element(by.model('input.akun_namabank')).sendKeys(akun_namabank);
  element(by.model('input.akun_an')).sendKeys(akun_an);
  element(by.model('input.akun_alamat')).sendKeys(akun_alamat);
}
export default akun_add_form;
