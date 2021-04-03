import validateTransactionRequestMiddleware from '@/middleware/validateTransactionRequest'

describe('Transaction request middleware validates', () => {
  test('All data is valid', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        query: {
          address: 'MskAT35r9sE2mmS5Ksg9U4egwRsHKqdAoxz',
          amount: '123',
          tag: '@myTag',
          label: 'hello world',
        },
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.route.query).toEqual({
      address: 'MskAT35r9sE2mmS5Ksg9U4egwRsHKqdAoxz',
      amount: 123,
      label: 'hello world',
      tag: '@myTag',
    })
    expect(context.redirect).not.toHaveBeenCalled()
  })

  test('All data is valid: 8 precision amount', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        query: {
          address: 'MskAT35r9sE2mmS5Ksg9U4egwRsHKqdAoxz',
          amount: '123.544553434',
          tag: '@myTag',
          label: 'hello world',
        },
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.route.query.amount).toBe(123.54455343)
    expect(context.redirect).not.toHaveBeenCalled()
  })

  test('Invalid amount because of MCX label', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        query: {
          address: 'MskAT35r9sE2mmS5Ksg9U4egwRsHKqdAoxz',
          amount: 'MCX 123.544553434',
          tag: '@myTag',
          label: 'hello world',
        },
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.redirect).toHaveBeenCalled()
  })

  test('Invalid amount because of a wrong separator', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        query: {
          address: 'MskAT35r9sE2mmS5Ksg9U4egwRsHKqdAoxz',
          amount: '123,544553434',
          tag: '@myTag',
          label: 'hello world',
        },
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.redirect).toHaveBeenCalled()
  })

  test('Invalid tag because of forbidden character', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        query: {
          address: 'MskAT35r9sE2mmS5Ksg9U4egwRsHKqdAoxz',
          amount: '123',
          tag: '@my-Tag',
          label: 'hello world',
        },
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.redirect).toHaveBeenCalled()
  })

  test('Invalid address because of forbidden character', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        query: {
          address: 'MskAT35r9sE2mm-5Ksg9U4egwRsHKqdAoxz',
          amount: '123',
          tag: '@myTag',
          label: 'hello world',
        },
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.redirect).toHaveBeenCalled()
  })

  test('Invalid label because its too long', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        query: {
          address: 'MskAT35r9sE2mmD5Ksg9U4egwRsHKqdAoxz',
          amount: '123',
          tag: '@myTag',
          label:
            'hello world hello world hello world hello world hello world hello world hello world hello world',
        },
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.redirect).toHaveBeenCalled()
  })

  test('Invalid label because its too short', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        query: {
          address: 'MskAT35r9sE2mmD5Ksg9U4egwRsHKqdAoxz',
          amount: '123',
          tag: '@myTag',
          label: '',
        },
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.redirect).toHaveBeenCalled()
  })

  test('Invalid because of all data is missing', () => {
    const context = {
      redirect: jest.fn(),
      route: {
        params: {},
        query: {},
        meta: {},
      },
    }

    validateTransactionRequestMiddleware(context)

    expect(context.redirect).toHaveBeenCalled()
  })
})
