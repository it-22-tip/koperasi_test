export default async function (model, selection) {
  // TODO: cari tau kenapa dropdown ini ga bisa di cari pakai model
  var dropdown = await element(by.css(`[model="${model}"]`));
  await dropdown.click();
  // menu itu  ada di dalam class: menu transition baru di cari di repeater
  var menu = await dropdown.element(by.className('menu transition'));
  await menu.all(by.repeater('item in items')).filter(
    async function (element, index) {
      var text = await element.getText();
      return text === selection;
    }
  )
  .first()
  .click();
}
