test('Fixture getByText', () => {
  screen.getByText('hello');
  screen.getByLabelText('someProp');
  screen.getByPlaceholderText('someProp');
  screen.getByAltText('someProperty');
  screen.getByTitle('someProperty');
  screen.getByDisplayValue('someProperty');
  screen.getByRole('alert');
  screen.getByTestId('someProperty');
  screen.getAllByLabelText('someProperty');
  screen.getAllByPlaceholderText('someProperty');
  screen.getAllByText('someProperty');
  screen.getAllByAltText('someProperty');
  screen.getAllByTitle('someProperty');
  screen.getAllByDisplayValue('someProperty');
  screen.getAllByRole('alert');
  screen.getAllByTestId('testId');
})