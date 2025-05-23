import Link from "next/link"

interface Job {
  id: number
  title: string
  location: string
  type: string
  description: string
  requirements: string[]
}

interface JobListingProps {
  job: Job
}

export function JobListing({ job }: JobListingProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold">{job.title}</h3>
        <div className="flex space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
            {job.location}
          </span>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            {job.type}
          </span>
        </div>
      </div>

      <p className="text-muted-foreground mb-4">{job.description}</p>

      <div className="mb-6">
        <h4 className="font-medium mb-2">Anforderungen:</h4>
        <ul className="space-y-1">
          {job.requirements.map((requirement, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{requirement}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end">
        <Link href={`/karriere/bewerben/${job.id}`} className="btn-primary">
          Jetzt bewerben
        </Link>
      </div>
    </div>
  )
}

