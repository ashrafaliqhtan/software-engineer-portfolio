import ResumeClientPage from "./ResumeClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "السيرة الذاتية | أشرف - مهندس برمجيات",
  description: "السيرة الذاتية التفاعلية لأشرف - مهندس برمجيات ومحلل بيانات",
}

export default function ResumePage() {
  return <ResumeClientPage />
}
