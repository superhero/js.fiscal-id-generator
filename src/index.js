class FiscalIdGenerator
{
  /**
   * @returns {string}
   */
  generateNIF()
  {
    const
    random      = Math.random(),
    value       = Math.floor(1e8 * random),
    valuePadded = value.toString().padStart(8, '0'),
    suffix      = this.calculateChar(value),
    fiscalId    = valuePadded + suffix

    return fiscalId
  }

  /**
   * @param {number} input
   */
  calculateChar(input)
  {
    return 'TRWAGMYFPDXBNJZSQVHLCKE'.charAt(input % 23)
  }
}

module.exports = FiscalIdGenerator
