import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Etiket from "../../../components/Payment/Etiket";

describe('Etiket Component', () => {
  it('renders component with success message', () => {
    render(<Etiket />);
    expect(screen.getByText('Pembayaran Berhasil!')).toBeInTheDocument();
  });

  it('renders button for downloading slip', () => {
    render(<Etiket />);
    const downloadButton = screen.getByTitle('Download Slip');
    expect(downloadButton).toBeInTheDocument();
  });

  it('simulates click event on download button', async () => {
    render(<Etiket />);
    const downloadButton = screen.getByTitle('Download Slip');
    const mockFetch = jest.fn(() =>
      Promise.resolve(new Response(new Blob(), { status: 200 }))
    );
    global.fetch = mockFetch;
    fireEvent.click(downloadButton);
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });
});