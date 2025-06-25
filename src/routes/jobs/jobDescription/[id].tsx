import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import type { Job } from '../../../../utils/types';

async function fetchJob(jobId: string): Promise<Job> {
  const res = await fetch(`/api/jobs/${jobId}`);
  if (!res.ok) throw new Error('Failed to fetch job');
  return res.json();
}

export default function JobDescription() {
  const { id } = useParams<{ id: string }>();
  console.log(id, "jobId")
  const { data: job, isLoading, isError, error } = useQuery({
    queryKey: ['job', id],
    queryFn: () => fetchJob(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return <p className="text-white">Loading job details...</p>;
  }

  if (isError) {
    return <p className="text-red-500">Error: {(error as Error).message}</p>;
  }

  if (!job) {
    return <p className="text-white">No job found</p>;
  }

  return (
    <div className="p-4 mt-1 text-white">
      <h1 className="text-3xl font-bold">{job.role}</h1>
      <p className="mt-2">{job.description}</p>
      <p className="mt-1">Salary: {job.salary}</p>
      <p className="mt-1">Experience: {job.experience}</p>
      <Link to={`/job/application/${job.jobId}`}><button type="button" className="text-white mt-1 border-2 bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Apply</button></Link>
    </div>
  );
}
