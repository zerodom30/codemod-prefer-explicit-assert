test('Fixture findBy*', async () => {
  await screen.findByLabelText('someElement');
  await screen.findByPlaceholderText('someElement');
  await screen.findByText('someElement');
  await screen.findByAltText('someElement');
  await screen.findByTitle('someElement');
  await screen.findByDisplayValue('someElement');
  await screen.findByRole('someElement');
  await screen.findByTestId('someElement');
  await screen.findAllByLabelText('someElement');
  await screen.findAllByPlaceholderText('someElement');
  await screen.findAllByText('someElement');
  await screen.findAllByAltText('someElement');
  await screen.findAllByTitle('someElement');
  await screen.findAllByDisplayValue('someElement');
  await screen.findAllByRole('someElement');
  await screen.findAllByTestId('someElement');
});