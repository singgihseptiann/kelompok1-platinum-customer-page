import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeadStepper from "../../../components/Payment/HeadStepper";

describe('HeadStepper Component', () => {
  it('should call navigate when handleBack is invoked', () => {
    const mockNavigate = jest.fn();
    jest.mock('react-router-dom', () => ({
      ...jest.requireActual('react-router-dom'),
      useNavigate: () => mockNavigate
    }));

    render(<HeadStepper />);
    expect(mockNavigate).not.toHaveBeenCalled();

    screen.getByText('Back').click();
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
