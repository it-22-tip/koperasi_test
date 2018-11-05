const tambahan_modal_add_form = async function (
  modal_area_id,
  modal_noref,
  modal_datetime,
  modal_amount,
) {
  dropdown('input.modal_area_id', modal_area_id);
  element(by.model('input.modal_noref')).sendKeys(modal_noref);
  element(by.model('input.modal_datetime')).sendKeys(modal_datetime);
  element(by.model('input.modal_amount')).sendKeys(modal_amount);
}

export default tambahan_modal_add_form;
