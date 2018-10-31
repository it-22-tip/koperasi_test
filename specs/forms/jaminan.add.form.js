import { element } from "protractor";

// input.jaminan_kode
// input.jaminan_ket
const jaminan_add_form = function (jaminan_kode, jaminan_ket) {
  element(by.model('input.jaminan_kode')).sendKeys(jaminan_kode);
  element(by.model('input.jaminan_ket')).sendKeys(jaminan_ket);
}
export default jaminan_add_form;
