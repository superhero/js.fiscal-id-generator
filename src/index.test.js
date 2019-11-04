describe('Endpoint tests for create-new-line', () =>
{
  const expect = require('chai').expect

  it('is expected to be able to generate a NIF', async function()
  {
    const
    FiscalIdGenerator = require('.'),
    fiscalIdGenerator = new FiscalIdGenerator,
    nif               = fiscalIdGenerator.generateNIF()

    expect(nif.length).to.equal(9)
  })
})
