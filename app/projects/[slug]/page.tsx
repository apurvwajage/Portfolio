import { projects } from "@/lib/data"
import type { Metadata } from "next"
import ProjectDetailPageClient from "./ProjectDetailPageClient"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export const metadata: Metadata = {
  title: "Project Details",
  description: "Details of a specific project.",
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetailPageClient params={params} />
}
