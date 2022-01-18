test('Fixture findBy*', async () => {
  await findByLabelText('someElement');
  await findByPlaceholderText('someElement');
  await findByText('someElement');
  await findByAltText('someElement');
  await findByTitle('someElement');
  await findByDisplayValue('someElement');
  await findByRole('someElement');
  await findByTestId('someElement');
  await findAllByLabelText('someElement');
  await findAllByPlaceholderText('someElement');
  await findAllByText('someElement');
  await findAllByAltText('someElement');
  await findAllByTitle('someElement');
  await findAllByDisplayValue('someElement');
  await findAllByRole('someElement');
  await findAllByTestId('someElement');
});