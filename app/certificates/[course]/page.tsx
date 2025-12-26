import { notFound, redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import CertificateDisplay from "@/components/certificate-display"

const certificateData: Record<
  string,
  {
    title: string
    level: string
    description: string
    modules: number
    color: string
  }
> = {
  // Language Certificates
  "english-a2": {
    title: "English A2 Elementary",
    level: "A2",
    description: "Basic English communication skills",
    modules: 10,
    color: "indigo",
  },
  "english-b1": {
    title: "English B1 Intermediate",
    level: "B1",
    description: "Independent English user",
    modules: 12,
    color: "indigo",
  },
  "english-b2": {
    title: "English B2 Upper Intermediate",
    level: "B2",
    description: "Effective operational proficiency",
    modules: 14,
    color: "indigo",
  },
  "english-c1": {
    title: "English C1 Advanced",
    level: "C1",
    description: "Proficient English user",
    modules: 16,
    color: "indigo",
  },

  "french-a2": {
    title: "French A2 Elementary",
    level: "A2",
    description: "Basic French communication skills",
    modules: 10,
    color: "blue",
  },
  "french-b1": {
    title: "French B1 Intermediate",
    level: "B1",
    description: "Independent French user",
    modules: 12,
    color: "blue",
  },
  "french-b2": {
    title: "French B2 Upper Intermediate",
    level: "B2",
    description: "Effective operational proficiency",
    modules: 14,
    color: "blue",
  },
  "french-c1": {
    title: "French C1 Advanced",
    level: "C1",
    description: "Proficient French user",
    modules: 16,
    color: "blue",
  },

  "arabic-a2": {
    title: "Arabic A2 Elementary",
    level: "A2",
    description: "Basic Arabic communication skills",
    modules: 10,
    color: "emerald",
  },
  "arabic-b1": {
    title: "Arabic B1 Intermediate",
    level: "B1",
    description: "Independent Arabic user",
    modules: 12,
    color: "emerald",
  },
  "arabic-b2": {
    title: "Arabic B2 Upper Intermediate",
    level: "B2",
    description: "Effective operational proficiency",
    modules: 14,
    color: "emerald",
  },
  "arabic-c1": {
    title: "Arabic C1 Advanced",
    level: "C1",
    description: "Proficient Arabic user",
    modules: 16,
    color: "emerald",
  },

  "german-a2": {
    title: "German A2 Elementary",
    level: "A2",
    description: "Basic German communication skills",
    modules: 10,
    color: "red",
  },
  "german-b1": {
    title: "German B1 Intermediate",
    level: "B1",
    description: "Independent German user",
    modules: 12,
    color: "red",
  },
  "german-b2": {
    title: "German B2 Upper Intermediate",
    level: "B2",
    description: "Effective operational proficiency",
    modules: 14,
    color: "red",
  },
  "german-c1": {
    title: "German C1 Advanced",
    level: "C1",
    description: "Proficient German user",
    modules: 16,
    color: "red",
  },

  "italian-a2": {
    title: "Italian A2 Elementary",
    level: "A2",
    description: "Basic Italian communication skills",
    modules: 10,
    color: "green",
  },
  "italian-b1": {
    title: "Italian B1 Intermediate",
    level: "B1",
    description: "Independent Italian user",
    modules: 12,
    color: "green",
  },
  "italian-b2": {
    title: "Italian B2 Upper Intermediate",
    level: "B2",
    description: "Effective operational proficiency",
    modules: 14,
    color: "green",
  },
  "italian-c1": {
    title: "Italian C1 Advanced",
    level: "C1",
    description: "Proficient Italian user",
    modules: 16,
    color: "green",
  },

  "spanish-a2": {
    title: "Spanish A2 Elementary",
    level: "A2",
    description: "Basic Spanish communication skills",
    modules: 10,
    color: "orange",
  },
  "spanish-b1": {
    title: "Spanish B1 Intermediate",
    level: "B1",
    description: "Independent Spanish user",
    modules: 12,
    color: "orange",
  },
  "spanish-b2": {
    title: "Spanish B2 Upper Intermediate",
    level: "B2",
    description: "Effective operational proficiency",
    modules: 14,
    color: "orange",
  },
  "spanish-c1": {
    title: "Spanish C1 Advanced",
    level: "C1",
    description: "Proficient Spanish user",
    modules: 16,
    color: "orange",
  },

  // Technical Certificates
  "html-beginner": {
    title: "HTML Beginner",
    level: "Beginner",
    description: "HTML fundamentals and basic page structure",
    modules: 8,
    color: "orange",
  },
  "html-intermediate": {
    title: "HTML Intermediate",
    level: "Intermediate",
    description: "Advanced HTML5 features and semantics",
    modules: 10,
    color: "orange",
  },
  "html-master": {
    title: "HTML Master",
    level: "Master",
    description: "Expert-level HTML development",
    modules: 12,
    color: "orange",
  },

  "css-beginner": {
    title: "CSS Beginner",
    level: "Beginner",
    description: "CSS fundamentals and styling basics",
    modules: 8,
    color: "blue",
  },
  "css-intermediate": {
    title: "CSS Intermediate",
    level: "Intermediate",
    description: "Advanced CSS layouts and animations",
    modules: 10,
    color: "blue",
  },
  "css-master": {
    title: "CSS Master",
    level: "Master",
    description: "Expert-level CSS architecture",
    modules: 12,
    color: "blue",
  },

  "javascript-beginner": {
    title: "JavaScript Beginner",
    level: "Beginner",
    description: "JavaScript fundamentals and syntax",
    modules: 10,
    color: "yellow",
  },
  "javascript-intermediate": {
    title: "JavaScript Intermediate",
    level: "Intermediate",
    description: "Advanced JavaScript and async programming",
    modules: 12,
    color: "yellow",
  },
  "javascript-master": {
    title: "JavaScript Master",
    level: "Master",
    description: "Expert JavaScript development",
    modules: 14,
    color: "yellow",
  },

  "cpp-beginner": {
    title: "C++ Beginner",
    level: "Beginner",
    description: "C++ syntax and basic programming",
    modules: 8,
    color: "indigo",
  },
  "cpp-intermediate": {
    title: "C++ Intermediate",
    level: "Intermediate",
    description: "Object-oriented programming in C++",
    modules: 10,
    color: "indigo",
  },
  "cpp-master": {
    title: "C++ Master",
    level: "Master",
    description: "Advanced C++ and system programming",
    modules: 12,
    color: "indigo",
  },

  "java-beginner": {
    title: "Java Beginner",
    level: "Beginner",
    description: "Java fundamentals and OOP basics",
    modules: 10,
    color: "red",
  },
  "java-intermediate": {
    title: "Java Intermediate",
    level: "Intermediate",
    description: "Advanced Java and frameworks",
    modules: 12,
    color: "red",
  },
  "java-master": {
    title: "Java Master",
    level: "Master",
    description: "Enterprise Java development",
    modules: 14,
    color: "red",
  },

  "csharp-beginner": {
    title: "C# Beginner",
    level: "Beginner",
    description: "C# basics and .NET introduction",
    modules: 8,
    color: "purple",
  },
  "csharp-intermediate": {
    title: "C# Intermediate",
    level: "Intermediate",
    description: "Advanced C# and .NET development",
    modules: 10,
    color: "purple",
  },
  "csharp-master": {
    title: "C# Master",
    level: "Master",
    description: "Expert C# and enterprise solutions",
    modules: 12,
    color: "purple",
  },

  "python-beginner": {
    title: "Python Beginner",
    level: "Beginner",
    description: "Python fundamentals and syntax",
    modules: 8,
    color: "blue",
  },
  "python-intermediate": {
    title: "Python Intermediate",
    level: "Intermediate",
    description: "Advanced Python and data structures",
    modules: 10,
    color: "blue",
  },
  "python-master": {
    title: "Python Master",
    level: "Master",
    description: "Expert Python development",
    modules: 12,
    color: "blue",
  },

  "react-beginner": {
    title: "React Beginner",
    level: "Beginner",
    description: "React fundamentals and JSX basics",
    modules: 8,
    color: "cyan",
  },
  "react-intermediate": {
    title: "React Intermediate",
    level: "Intermediate",
    description: "Advanced React hooks and patterns",
    modules: 10,
    color: "cyan",
  },
  "react-master": {
    title: "React Master",
    level: "Master",
    description: "Expert React performance",
    modules: 12,
    color: "cyan",
  },
}

export default async function CertificatePage({
  params,
  searchParams,
}: {
  params: Promise<{ course: string }>
  searchParams: Promise<{ justPassed?: string; score?: string }>
}) {
  const { course } = await params
  const { justPassed, score } = await searchParams

  const supabase = await createClient()

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    redirect("/auth/signin")
  }

  const certificate = certificateData[course]

  if (!certificate) {
    notFound()
  }

  if (justPassed === "true") {
    const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle()

    const userName = profile?.full_name || user.email?.split("@")[0] || "Student Name"
    const currentDate = new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    const certificateId = course.toUpperCase() + "-" + user.id.substring(0, 8).toUpperCase()
    const examScore = Number.parseInt(score || "100")

    return (
      <CertificateDisplay
        certificate={certificate}
        userName={userName}
        currentDate={currentDate}
        certificateId={certificateId}
        examScore={examScore}
        courseId={course}
      />
    )
  }

  const { data: courseProgress } = await supabase
    .from("user_course_progress")
    .select("*")
    .eq("user_id", user.id)
    .eq("course_id", course)
    .maybeSingle()

  const hasCertificate = courseProgress?.certificate_earned === true && courseProgress?.exam_passed === true

  if (!hasCertificate) {
    redirect(`/certificates/${course}/exam`)
  }

  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user.id).maybeSingle()

  const userName = profile?.full_name || user.email?.split("@")[0] || "Student Name"
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  const certificateId = course.toUpperCase() + "-" + user.id.substring(0, 8).toUpperCase()
  const examScore = courseProgress?.exam_score || 100

  return (
    <CertificateDisplay
      certificate={certificate}
      userName={userName}
      currentDate={currentDate}
      certificateId={certificateId}
      examScore={examScore}
      courseId={course}
    />
  )
}
