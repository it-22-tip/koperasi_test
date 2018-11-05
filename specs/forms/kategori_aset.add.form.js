const kategori_aset_add_form = async function (
  kataset_nama,
  kataset_berwujud,
  kataset_pajak,
  kataset_jnsaset_id,
  kataset_akunaset_id,
  kataset_akundepresiasi_id,
  kataset_akunakumulasi_id
) {
  element(by.model('input.kataset_nama')).sendKeys(kataset_nama);
  dropdown('input.kataset_berwujud', kataset_berwujud);
  dropdown('input.kataset_pajak', kataset_pajak);
  dropdown('input.kataset_jnsaset_id', kataset_jnsaset_id);
  dropdown('input.kataset_akunaset_id', kataset_akunaset_id);
  dropdown('input.kataset_akundepresiasi_id', kataset_akundepresiasi_id);
  dropdown('input.kataset_akunakumulasi_id', kataset_akunakumulasi_id);
}

export default kategori_aset_add_form;
