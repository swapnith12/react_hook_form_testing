import { http, HttpResponse } from "msw";
import type { Job } from '../lib/types'
const jobs=[
      {
        jobId: "1",
        role: "SDE",
        salary: "25000",
        description: "build something useful",
        experience: "1 year",
      },
      {
        jobId: "2",
        role: "Frontend Developer",
        salary: "30000",
        description: "Build modern UIs using React and Tailwind CSS.",
        experience: "2 years",
      },
      {
        jobId: "3",
        role: "Backend Engineer",
        salary: "35000",
        description: "Design REST APIs and manage databases.",
        experience: "3 years",
      },
      {
        jobId: "4",
        role: "Fullstack Developer",
        salary: "40000",
        description: "Handle both frontend and backend development.",
        experience: "4 years",
      },
      {
        jobId: "5",
        role: "DevOps Engineer",
        salary: "45000",
        description: "Set up CI/CD pipelines and cloud infrastructure.",
        experience: "3 years",
      },
      {
        jobId: "6",
        role: "Data Scientist",
        salary: "50000",
        description: "Analyze data and build machine learning models.",
        experience: "2 years",
      },
      {
        jobId: "7",
        role: "UI/UX Designer",
        salary: "28000",
        description: "Design user-friendly interfaces and prototypes.",
        experience: "1.5 years",
      },
      {
        jobId: "8",
        role: "QA Engineer",
        salary: "27000",
        description: "Write test cases and automate testing.",
        experience: "2 years",
      },
      {
        jobId: "9",
        role: "Cloud Architect",
        salary: "55000",
        description: "Design and manage scalable cloud solutions.",
        experience: "5 years",
      },
      {
        jobId: "10",
        role: "AI Engineer",
        salary: "60000",
        description: "Develop AI algorithms and integrate into products.",
        experience: "4 years",
      },
    ]
export const handlers = [
  http.get<never, never, Job[]>("/api/jobs", () => {
    return HttpResponse.json<Job[]>(jobs);
  }),
   http.get<any, never, Job>("/api/jobs/:id", ({params}) => {
    const id = params?.id
    const job = jobs.find(j => j.jobId === id);
    return HttpResponse.json<Job>(job);
  }),
];
