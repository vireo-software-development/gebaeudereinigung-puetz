import Bewerbungsformular from "@/components/bewerbungsformular"
import { notFound } from "next/navigation"

const jobs = [
  {
    id: 1,
    title: "Reinigungskraft (m/w/d) - Aachen",
  },
  {
    id: 2,
    title: "Reinigungskraft (m/w/d) - Düren",
  },
  {
    id: 3,
    title: "Reinigungskraft (m/w/d) - Eschweiler",
  },
]

export default function BewerbenJobPage({ params }: { params: { jobId: string } }) {
  const job = jobs.find(j => j.id.toString() === params.jobId)
  if (!job) return notFound()
  return <Bewerbungsformular jobTitle={job.title} />
} 