import * as utils from '../utils'

  it('should make number of dollar symbols equals to given integer', () => {
    expect(utils.makeDollarSigns(4)).toEqual("$$$$");
    expect(utils.makeDollarSigns(1)).toEqual("$");
    expect(utils.makeDollarSigns(0)).not.toEqual("$");
})

