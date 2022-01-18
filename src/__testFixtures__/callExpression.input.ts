test('Fixture getBy*', () => {
  getByText('hello');
  getByLabelText('someProp');
  getByPlaceholderText('someProp');
  getByAltText('someProperty');
  getByTitle('someProperty');
  getByDisplayValue('someProperty');
  getByRole('alert');
  getByTestId('someProperty');
  getAllByLabelText('someProperty');
  getAllByPlaceholderText('someProperty');
  getAllByText('someProperty');
  getAllByAltText('someProperty');
  getAllByTitle('someProperty');
  getAllByDisplayValue('someProperty');
  getAllByRole('alert');
  getAllByTestId('testId');
})