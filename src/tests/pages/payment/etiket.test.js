// Import necessary dependencies and components
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter } from 'react-router-dom'; // Import MemoryRouter
import Etiket from '../../../components/Payment/Etiket';
import { mockLocalStorage } from '../../../mocks/localStorage/index';

// Mock axios to control its behavior during testing
jest.mock('axios');

// Mock localStorage
const { setItemMock, getItemMock, removeItemMock } = mockLocalStorage();

jest.mock('react-bootstrap/Spinner', () => {
  return {
    __esModule: true,
    default: jest.fn().mockReturnValue(<div data-testid="mock-spinner"></div>),
    animation: 'border',
    role: 'status',
  };
});

// Inisialisasi server MSW
const server = setupServer(
  // Existing handler for login endpoint
  rest.post('https://api-car-rental.binaracademy.org/customer/auth/login', async (req, res, ctx) => {
    const { email } = await req.json();
    if (email === 'customer@bcr.io') {
      return res(
        ctx.status(201),
        ctx.json({
          email: 'customer@bcr.io',
          role: 'Customer',
          access_token: 'dummy-token',
        })
      );
    }
    return res(
      ctx.status(400),
      ctx.json({ code: 400, message: 'Email or password is incorrect' })
    );
  }),

  // New handler for getCars endpoint
  rest.get('https://api-car-rental.binaracademy.org/customer/v2/car', async (req, res, ctx) => {
    // Customize the response based on your test case
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          cars: [
            // Add sample car data here
            { id: 1, name: 'Car 1', category: 'small', price: 100 },
            { id: 2, name: 'Car 2', category: 'medium', price: 150 },
            // Add more cars as needed
          ],
        },
      })
    );
  })
);

// Test suite for the Etiket component
describe('Etiket Component', () => {
  // Set up MSW server before tests
  beforeAll(() => server.listen());

  // Clear all mocks and reset MSW server after each test
  afterEach(() => {
    jest.clearAllMocks();
    server.resetHandlers();
  });

  // Stop MSW server after all tests
  afterAll(() => server.close());

  // ... (Other test cases remain unchanged)

  // Test 5: Tests local storage usage
  it('tests local storage usage', async () => {
    // Mock order data for axios response
    const mockOrderData = {
      orderID: '123456',
      slip: 'path/to/slip.png',
    };

    // Mock axios get method with resolved value
    axios.get.mockResolvedValue({ data: mockOrderData });

    // Render Etiket component within MemoryRouter
    render(
      <MemoryRouter>
        <Etiket />
      </MemoryRouter>
    );

    // Wait for the download button to be available
    await waitFor(() => {
      const downloadButton = screen.getByTitle('Download Slip');
      // Simulate click event on the download button
      fireEvent.click(downloadButton);
    });

    // Check local storage usage
    expect(getItemMock).toHaveBeenCalledTimes(2); // Adjust the count based on your localStorage usage
    expect(setItemMock).toHaveBeenCalledTimes(0); // Adjust the count based on your localStorage usage
    expect(removeItemMock).toHaveBeenCalledTimes(0); // Adjust the count based on your localStorage usage
  });
});
