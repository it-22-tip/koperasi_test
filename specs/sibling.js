describe('siblings', function() {
  it('run', async function () {
    await login();
  })
  it('get siblings', async function () {
    await click_sidemenu('modal');
    await click_tambah();
    fill_autocomplete('input.modaldet_anggota_id', 'xxx');
    // console.log(c);
    browser.sleep(3000);
    // let before = hidden(by.xpath('preceding-sibling')).first();
    // before.sendKeys('edo');
  })
});
