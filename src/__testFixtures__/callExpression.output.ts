test('Fixture getBy*', () => {
  expect(getByText('hello')).toBeInTheDocument();
  expect(getByLabelText('someProp')).toBeInTheDocument();
  expect(getByPlaceholderText('someProp')).toBeInTheDocument();
  expect(getByAltText('someProperty')).toBeInTheDocument();
  expect(getByTitle('someProperty')).toBeInTheDocument();
  expect(getByDisplayValue('someProperty')).toBeInTheDocument();
  expect(getByRole('alert')).toBeInTheDocument();
  expect(getByTestId('someProperty')).toBeInTheDocument();
  expect(getAllByLabelText('someProperty')).toBeInTheDocument();
  expect(getAllByPlaceholderText('someProperty')).toBeInTheDocument();
  expect(getAllByText('someProperty')).toBeInTheDocument();
  expect(getAllByAltText('someProperty')).toBeInTheDocument();
  expect(getAllByTitle('someProperty')).toBeInTheDocument();
  expect(getAllByDisplayValue('someProperty')).toBeInTheDocument();
  expect(getAllByRole('alert')).toBeInTheDocument();
  expect(getAllByTestId('testId')).toBeInTheDocument();
})