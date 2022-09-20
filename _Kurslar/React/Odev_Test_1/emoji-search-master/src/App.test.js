import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

// test('renders learn react link', () => {
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test("başlık ?", () => {
  const { container } = render(<App />);
  const boxes = container.getElementsByClassName('component-header');
  expect(boxes[0].children.length).toBeGreaterThan(0);
})


test(' Emoji Listesi Eklendi mi ?', () => {
  render(<App />);
  const items = screen.getAllByText(/Click to copy emoji/i);
  const item = screen.getByText("Relaxed");
  expect(item).toBeInTheDocument();
  expect(items.length).toEqual(20);
});

 
test("Emoji Filtre", () => {
  render(<App />);
  const inputText = screen.getByText("Smile");
  expect(inputText).toBeInTheDocument("Smile");
});




