import { cleanCourseId, cleanCourseTitle } from "@/utils/course-namer"
import RequirementsListing from "../Requirement/RequirementsListing"
import TermPills from "./TermPill"
import Link from "next/link"
import { TermsOfferedType } from "@/types/CoursesDataType"
import rmpRatings from "@/data/rmp-ratings.json"

interface CourseRequirements {
  [key: string]: {
    requirementsString: string
    prereq?: string[] | { or: string[] }
    coreq?: string[]
  }
}

const COURSE_REQUIREMENTS: CourseRequirements = require("@/data/requirements.json")

type CourseQuickViewContentProps = {
  id: string
  description?: string
  title?: string
  terms_offered?: TermsOfferedType
  instructors?: string[]
}

const CourseQuickViewContent = ({
  id,
  description,
  title,
  terms_offered,
  instructors,
}: CourseQuickViewContentProps) => {
  return (
    <>
      <h1 className="mb-2">{cleanCourseId(id)}</h1>
      <h2 className="mb-2">{cleanCourseTitle(title ? title : "")}</h2>
      {instructors && instructors.length > 0 && (
        <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
          <span className="font-semibold">Current Professor:</span>{" "}
          {instructors.map((instructor, i) => {
            const rating = (rmpRatings as any)[instructor]

            let colorClass =
              "hover:underline hover:text-[#243e8b] dark:hover:text-[#ffb81c] transition-colors"
            if (rating) {
              if (rating.avgRating >= 4.0) {
                colorClass =
                  "text-green-600 dark:text-green-400 hover:underline font-bold"
              } else if (rating.avgRating >= 3.0) {
                colorClass =
                  "text-yellow-600 dark:text-yellow-400 hover:underline font-bold"
              } else {
                colorClass =
                  "text-red-600 dark:text-red-400 hover:underline font-bold"
              }
            }

            return (
              <span key={instructor}>
                {i > 0 && ", "}
                {rating ? (
                  <a
                    href={`https://www.ratemyprofessors.com/professor/${rating.legacyId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={colorClass}
                    title={`${rating.numRatings} ratings`}
                  >
                    {instructor} ({rating.avgRating})
                  </a>
                ) : (
                  instructor
                )}
              </span>
            )
          })}
        </p>
      )}
      {terms_offered && <TermPills termsMap={terms_offered} />}
      <div className="mt-4 mb-2">
        <RequirementsListing requirements={COURSE_REQUIREMENTS[id]} />
      </div>
      <p className="text-xs overflow-auto text-gray-700 dark:text-gray-300">
        {description && description.length > 850
          ? description?.substring(0, 800) + "…"
          : description}
      </p>
    </>
  )
}

export default CourseQuickViewContent
