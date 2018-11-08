describe('siblings', function() {
  it('run', async function () {
    await login();
  })
  it('get siblings', async function () {
    await clickSidebarMenu('modal');
    await clickTambah();
    let hidden = await element.all(by.css('[ng-model="input.modaldet_anggota_id"]')).first();
    // let sib = await hidden(by.xpath('preceding-sibling')).count();
    // let par = await hidden.element(by.xpath('..')).getAttribute('class');
    // let par = await hidden.element(by.xpath('..')).element(by.css('[ng-model]')).getAttribute('ng-model')
    let par = await hidden.element(by.xpath('preceding-sibling::div')).getAttribute('model');
    console.log(par)
    // let before = hidden(by.xpath('preceding-sibling')).first();
    // before.sendKeys('edo');
  })
});
