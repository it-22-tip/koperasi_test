
const fill_autocomplete = async function (model, sendVal, searchVal = '') {
  let selector = `[ng-model="${model}"]`;
  searchVal = (searchVal === '') ? sendVal : searchVal;
  let hidden = await element.all(by.css(selector)).first();
  let textField = await hidden.element(by.xpath('preceding-sibling::div')).element(by.model('text'));
  await textField.sendKeys(searchVal);
  let folowingParent = await textField.element(by.xpath('..')).element(by.xpath('following-sibling::div'));
  browser.wait(protractor.ExpectedConditions.visibilityOf(folowingParent), 3000);
  await folowingParent.all(by.css('[class="result"]')).filter(
    async function (elem, index) {
      let texts = await elem.getText()
      return texts === sendVal;
    }
  ).first().click();
}

export default fill_autocomplete;
