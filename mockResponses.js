const mockOk = {
    success: "true",
    errorMsg: null
}

const mockLogin = {
    success: 'true',
    privileges: [
        {
            name: 'activities',
            content: ['picking', 'audit', 'other'],
        },
        {
            name: 'roles',
            content: ['keyuser', 'picker'],
        },
        {
            name: 'areas',
             content: ['Zone'],
        },
  
    ],
    // tslint:disable-next-line: no-null-keyword
    errorMsg: null,
  };
  
  const mockGetOrder = {
    success: 'true',
    data: {
        orderid: '12345',
        explicitchangeconfirm: [
            {
                name: 'aisle',
            },
        ],
        items: [
            {
                pickid: '0001',
                location: {
                    coordinates: [
                        {
                            name: 'aisle',
                            sequence: '1',
                            value: '1',
                        },
                        {
                            name: 'rack',
                            sequence: '2',
                            value: '1',
                        },
                        {
                            name: 'level',
                            sequence: '3',
                            value: '1',
                        },
                        {
                            name: 'bin',
                            sequence: '4',
                            value: '1',
                        },
                    ],
                },
                confirmation: {
                    required: 'false',
                    checkdigits: '41',
                    scan: [
                        {
                            value: '12345678901234567890123456',
                        },
                        {
                            value: '1234567890123',
                        },
                    ],
                },
                article: {
                    number: '12345',
                    description: 'arcticle 1',
                    remark: 'keep upright',
                },
                pick: {
                    quantity: '3',
                    unitofmeasure: 'piece',
                    allowskip: 'false',
                    short: {
                        allowed: 'true',
                        confirmreason: 'true',
                        reasons: [
                            {
                                name: 'damaged',
                            },
                            {
                                name: 'empty',
                            },
                        ],
                    },
                    excess: {
                        allowed: 'false',
                    },
                },
            },
        ],
        destination: {
            name: 'gate 1',
            confirmation: {
                required: 'true',
                checkdigits: '35',
                scan: [
                    {
                        value: '12345678901234567890123456',
                    },
                    {
                        value: '1234567890123',
                    },
                ],
            },
        },
    },
    // tslint:disable-next-line: no-null-keyword
    errorMsg: null,
  };

module.exports = {
    mockGetOrder,
    mockLogin,
    mockOk
};