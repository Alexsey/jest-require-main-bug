let foo
jest.isolateModules(() =>
  foo = require('./index')
)

test('test', () => {
  expect(foo()).toEqual({
    dependencies: { jest: '^25.1.0' },
    name: 'jest-main-require-bug',
    scripts: { test: 'jest' },
    version: '1.0.0'
  })
})
