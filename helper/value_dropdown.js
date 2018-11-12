const value_dropdown = async function (model) {
  var dropdown = await element(by.css(`[model="${model}"]`));
  var text = await dropdown.element(by.css('[class="text"]')).getText();
  return text();
}
export default value_dropdown;
