test('Fixture findBy*', async () => {
  expect(await findByLabelText('someElement')).toBeInTheDocument();
  expect(await findByPlaceholderText('someElement')).toBeInTheDocument();
  expect(await findByText('someElement')).toBeInTheDocument();
  expect(await findByAltText('someElement')).toBeInTheDocument();
  expect(await findByTitle('someElement')).toBeInTheDocument();
  expect(await findByDisplayValue('someElement')).toBeInTheDocument();
  expect(await findByRole('someElement')).toBeInTheDocument();
  expect(await findByTestId('someElement')).toBeInTheDocument();
  expect(await findAllByLabelText('someElement')).toBeInTheDocument();
  expect(await findAllByPlaceholderText('someElement')).toBeInTheDocument();
  expect(await findAllByText('someElement')).toBeInTheDocument();
  expect(await findAllByAltText('someElement')).toBeInTheDocument();
  expect(await findAllByTitle('someElement')).toBeInTheDocument();
  expect(await findAllByDisplayValue('someElement')).toBeInTheDocument();
  expect(await findAllByRole('someElement')).toBeInTheDocument();
  expect(await findAllByTestId('someElement')).toBeInTheDocument();
});