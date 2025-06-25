import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import type { Job } from '../../../utils/types'
import { NavLink } from "react-router";

export const JobCard = ({ jobDetails }: { jobDetails: Job }) => (
    <NavLink to={`/job/jobDescription/${jobDetails.jobId}`}>
    <Card data-testid="job-card" className="bg-green-500 min-w-50 text-black font-bold border-4 hover:bg-green-200 
                  transform transition-transform duration-300 hover:scale-105">
        <CardHeader>
            <CardTitle>{jobDetails.role}</CardTitle>
        </CardHeader>
        <CardContent>
            <p>{jobDetails.experience}</p>
        </CardContent>
        <CardFooter>
            <p>{jobDetails.salary}</p>
        </CardFooter>
    </Card>
    </NavLink>
) 