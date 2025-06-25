import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { resend } from '../../../lib/resend'

type ApplicationData = {
  fullName: string;
  email: string;
  resume: FileList;
};

export default function Applicationform() {
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, formState: { errors } } = useForm<ApplicationData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: ApplicationData) => {
    setIsSubmitting(true);
    console.log(`Application for job ID: ${id}`);
    console.log("Full Name:", data.fullName);
    console.log("Email:", data.email);
    console.log("Uploaded Resume File:", data.resume[0]);

    await new Promise(res => setTimeout(res, 2000));

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div data-testId="job-application" className="p-6 max-w-lg mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      {!submitted ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Apply for Job ID: {id}</h1>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && <p className="text-red-400 text-sm">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <label className="block mb-1 font-medium">Upload Resume</label>
              <input
                className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                type="file"
                accept=".pdf,.doc,.docx"
                {...register("resume", { required: "Resume is required" })}
              />
              {errors.resume && <p className="text-red-400 text-sm">{errors.resume.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 hover:bg-green-700 p-2 rounded font-bold disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </>
      ) : (
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto text-green-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-green-400">Application Submitted!</h2>
          <p className="mt-2 text-gray-300">You will receive a confirmation email shortly.</p>
        </div>
      )}
    </div>
  );
}
