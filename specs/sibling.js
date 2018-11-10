describe('siblings', function() {
  it('run', async function () {
    await login();
  })
  it('get siblings', async function () {
    await clickSidebarMenu('modal');
    await clickTambah();
    fillautocomplete('input.modaldet_anggota_id', 'xxx');
    // console.log(c);
    browser.sleep(3000);
    // let before = hidden(by.xpath('preceding-sibling')).first();
    // before.sendKeys('edo');
  })
});
