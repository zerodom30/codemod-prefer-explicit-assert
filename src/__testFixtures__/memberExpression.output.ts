test('Fixture getByText', () => {
  expect(screen.getByText('hello')).toBeInTheDocument();
  expect(screen.getByLabelText('someProp')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('someProp')).toBeInTheDocument();
  expect(screen.getByAltText('someProperty')).toBeInTheDocument();
  expect(screen.getByTitle('someProperty')).toBeInTheDocument();
  expect(screen.getByDisplayValue('someProperty')).toBeInTheDocument();
  expect(screen.getByRole('alert')).toBeInTheDocument();
  expect(screen.getByTestId('someProperty')).toBeInTheDocument();
  expect(screen.getAllByLabelText('someProperty')).toBeInTheDocument();
  expect(screen.getAllByPlaceholderText('someProperty')).toBeInTheDocument();
  expect(screen.getAllByText('someProperty')).toBeInTheDocument();
  expect(screen.getAllByAltText('someProperty')).toBeInTheDocument();
  expect(screen.getAllByTitle('someProperty')).toBeInTheDocument();
  expect(screen.getAllByDisplayValue('someProperty')).toBeInTheDocument();
  expect(screen.getAllByRole('alert')).toBeInTheDocument();
  expect(screen.getAllByTestId('testId')).toBeInTheDocument();
})