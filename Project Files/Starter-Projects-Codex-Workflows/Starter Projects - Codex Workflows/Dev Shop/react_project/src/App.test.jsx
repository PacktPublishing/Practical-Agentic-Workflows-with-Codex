import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import App from './App';

function setup() {
  const user = userEvent.setup();
  render(<App />);
  return { user };
}

describe('Product list', () => {
  it('renders all 5 products', () => {
    setup();
    const buttons = screen.getAllByRole('button', { name: /add to cart/i });
    expect(buttons).toHaveLength(5);
  });

  it('shows each product name and price', () => {
    setup();
    expect(screen.getByText('Mechanical Keyboard')).toBeInTheDocument();
    expect(screen.getByText('$89.99')).toBeInTheDocument();
    expect(screen.getByText('USB-C Hub')).toBeInTheDocument();
    expect(screen.getByText('$34.99')).toBeInTheDocument();
    expect(screen.getByText('Monitor Stand')).toBeInTheDocument();
    expect(screen.getByText('$49.99')).toBeInTheDocument();
    expect(screen.getByText('Webcam HD 1080p')).toBeInTheDocument();
    expect(screen.getByText('$79.99')).toBeInTheDocument();
    expect(screen.getByText('Desk Lamp LED')).toBeInTheDocument();
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });
});

describe('Add to cart', () => {
  it('adds a product to the cart when "Add to Cart" is clicked', async () => {
    const { user } = setup();
    await user.click(screen.getAllByRole('button', { name: /add to cart/i })[0]);
    expect(screen.getByText('Mechanical Keyboard', { selector: 'span' })).toBeInTheDocument();
  });

  it('increases quantity to 2 when the same product is added twice', async () => {
    const { user } = setup();
    const addButton = screen.getAllByRole('button', { name: /add to cart/i })[0];
    await user.click(addButton);
    await user.click(addButton);
    expect(screen.getByText(/× 2/)).toBeInTheDocument();
  });

  it('shows correct line total for a product with quantity 2', async () => {
    const { user } = setup();
    const addButton = screen.getAllByRole('button', { name: /add to cart/i })[0];
    await user.click(addButton);
    await user.click(addButton);
    // Mechanical Keyboard $89.99 × 2 = $179.98 (line total and cart total are both $179.98)
    expect(screen.getAllByText('$179.98')).toHaveLength(2);
  });

  it('shows correct total when multiple different products are added', async () => {
    const { user } = setup();
    const addButtons = screen.getAllByRole('button', { name: /add to cart/i });
    // Mechanical Keyboard $89.99 + USB-C Hub $34.99 = $124.98
    await user.click(addButtons[0]);
    await user.click(addButtons[1]);
    expect(screen.getByText(/\$124\.98/)).toBeInTheDocument();
  });
});

describe('Cart interactions', () => {
  it('removes an item entirely when "Remove" is clicked', async () => {
    const { user } = setup();
    await user.click(screen.getAllByRole('button', { name: /add to cart/i })[0]);
    await user.click(screen.getByRole('button', { name: /remove/i }));
    expect(screen.queryByText('Mechanical Keyboard', { selector: 'span' })).not.toBeInTheDocument();
  });

  it('empties the cart when "Clear Cart" is clicked', async () => {
    const { user } = setup();
    const addButtons = screen.getAllByRole('button', { name: /add to cart/i });
    await user.click(addButtons[0]);
    await user.click(addButtons[1]);
    await user.click(screen.getByRole('button', { name: /clear cart/i }));
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });
});

describe('Empty cart state', () => {
  it('shows "Your cart is empty" when no items are in the cart', () => {
    setup();
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it('does not show "Your cart is empty" when the cart has items', async () => {
    const { user } = setup();
    await user.click(screen.getAllByRole('button', { name: /add to cart/i })[0]);
    expect(screen.queryByText(/your cart is empty/i)).not.toBeInTheDocument();
  });
});
