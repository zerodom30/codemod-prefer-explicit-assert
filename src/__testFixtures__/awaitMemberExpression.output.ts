test('Fixture findBy*', async () => {
  expect(await screen.findByLabelText('someElement')).toBeInTheDocument();
  expect(await screen.findByPlaceholderText('someElement')).toBeInTheDocument();
  expect(await screen.findByText('someElement')).toBeInTheDocument();
  expect(await screen.findByAltText('someElement')).toBeInTheDocument();
  expect(await screen.findByTitle('someElement')).toBeInTheDocument();
  expect(await screen.findByDisplayValue('someElement')).toBeInTheDocument();
  expect(await screen.findByRole('someElement')).toBeInTheDocument();
  expect(await screen.findByTestId('someElement')).toBeInTheDocument();
  expect(await screen.findAllByLabelText('someElement')).toBeInTheDocument();
  expect(await screen.findAllByPlaceholderText('someElement')).toBeInTheDocument();
  expect(await screen.findAllByText('someElement')).toBeInTheDocument();
  expect(await screen.findAllByAltText('someElement')).toBeInTheDocument();
  expect(await screen.findAllByTitle('someElement')).toBeInTheDocument();
  expect(await screen.findAllByDisplayValue('someElement')).toBeInTheDocument();
  expect(await screen.findAllByRole('someElement')).toBeInTheDocument();
  expect(await screen.findAllByTestId('someElement')).toBeInTheDocument();
});