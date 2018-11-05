import pegawai_add_form from '../forms/pegawai.add.form'
describe('pegawai add', function () {
  it('go to add', async function () {
    await clickSidebarMenu('anggota');
    await clickSidebarMenu('pegawai');
    await clickTambah();
    var x = await pegawai_add_form(
      'test - test',
      '54321',
      '12345',
      'sample name',
      '20 Oct 2000',
      'semarang',
      'aa',
      'Laki - Laki',
      '543-123',
      '',
      'KTP',
      'ID-123123',
      'Islam',
      'S1',
      'Matematika',
      '20 April 2017',
      'Semarang',
      'Surakarta',
      '',
      '',
      '',
      '',
      '',
      ''
    )
    // let form = await element(by.className('form')).all(by.className('submit button')).count();
    // console.log(form);
    // await form.click();
  });
})
