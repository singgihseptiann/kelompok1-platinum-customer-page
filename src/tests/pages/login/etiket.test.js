import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Etiket from "../../../components/Payment/Etiket";
import axios from 'axios';

jest.mock('axios');

describe('Etiket Component', () => {
  it('renders component with success message', async () => {
    render(<Etiket />);
    await waitFor(() => {
      expect(screen.getByText('Pembayaran Berhasil!')).toBeInTheDocument();
    });
  });

  it('renders button for downloading slip', async () => {
    render(<Etiket />);
    await waitFor(() => {
      const downloadButton = screen.getByTitle('Download Slip');
      expect(downloadButton).toBeInTheDocument();
    });
  });

  it('simulates click event on download button', async () => {
    const mockOrderData = {
      orderID: '123456',
      slip: 'path/to/slip.png',
    };
    axios.get.mockResolvedValue({ data: mockOrderData });

    render(<Etiket />);
    
    await waitFor(() => {
      const downloadButton = screen.getByTitle('Download Slip');
      fireEvent.click(downloadButton);
    });

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        `https://api-car-rental.binaracademy.org/customer/order/${mockOrderData.orderID}`,
        {
          headers: { access_token: expect.any(String) },
        }
      );
    });
  });

  it('handles API error when simulating click event on download button', async () => {
    axios.get.mockRejectedValue({ message: 'Failed to fetch data' });

    render(<Etiket />);
    
    await waitFor(() => {
      const downloadButton = screen.getByTitle('Download Slip');
      fireEvent.click(downloadButton);
    });

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(screen.getByText('Error fetching data: Failed to fetch data')).toBeInTheDocument();
    });
  });
});
