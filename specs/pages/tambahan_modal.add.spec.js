// model:
import tambahan_modal_add_from from '../forms/tambahan_modal.add.form'
describe('tambahan modal', function () {
  it('pergi ke tambah modal', async function () {
    tambahan_modal_add_from(
      'Sukoharjo',
      '1234',
      '01 Nov 2018',
      '10000'
    )
  })
})
