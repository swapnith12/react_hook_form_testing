// src/routes/job/Applicationform.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Applicationform from '../Applicationform/[id]';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Applicationform', () => {
  const renderWithRouter = (jobId = '123') =>
    render(
      <MemoryRouter initialEntries={[`/application/${jobId}`]}>
        <Routes>
          <Route path="application/:id" element={<Applicationform />} />
        </Routes>
      </MemoryRouter>
    );

  it('renders form with job ID from URL', () => {
    renderWithRouter('999');
    expect(screen.getByText(/Apply for Job ID: 999/i));
  });

  it('shows validation errors on empty submit', async () => {
    renderWithRouter();

    const submitButton = screen.getByRole('button', { name: /submit application/i });
    await userEvent.click(submitButton);

    expect(await screen.findByText(/Full name is required/i));
    expect(screen.getByText(/Email is required/i));
    expect(screen.getByText(/Resume is required/i));
  });

  it('submits form with valid data', async () => {
    renderWithRouter();

    const fullNameInput = screen.getByLabelText(/Full Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const resumeInput = screen.getByLabelText(/Upload Resume/i);
    const submitButton = screen.getByRole('button', { name: /submit application/i });

    const fakeFile = new File(['resume content'], 'resume.pdf', { type: 'application/pdf' });

    await userEvent.type(fullNameInput, 'swap');
    await userEvent.type(emailInput, 'spatan@example.com');
    await userEvent.upload(resumeInput, fakeFile);
    await userEvent.click(submitButton);

    expect(submitButton).toBeDisabled(); 

    await waitFor(() => {
      expect(screen.getByText(/Application Submitted!/i));
    });
  });
});
