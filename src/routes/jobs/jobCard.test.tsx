// JobCard.test.tsx
import { render, fireEvent , screen} from '../../components/test-utils';
// import { render, screen } from '@testing-library/react';
import { JobCard } from './jobCard';
import { MemoryRouter } from 'react-router';

const jobDetails={
  jobId: "99",
  role: "QA engineer",
  salary: "20000",
  description: "This is a test description",
  experience:"5 years"
}
describe('JobCard', () => {
  it('renders job title, company, and location', () => {
    render(<MemoryRouter>
        <JobCard key={jobDetails.jobId} jobDetails={jobDetails} />
      </MemoryRouter>);
    
    expect(screen.getByText('QA engineer'));
    expect(screen.getByText('20000'))
    expect(screen.getByText('5 years'))
    expect(screen.getByTestId('job-card'))
  });
});
