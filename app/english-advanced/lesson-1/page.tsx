"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Book, Info, Edit3, Layout, Languages, LucideTriangle as ExclamationTriangle, HelpCircle, ClipboardList } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdvancedLesson1() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(Array(7).fill(null))
  const [showResults, setShowResults] = useState(false)

  const quizQuestions = [
    {
      question: "Which of these is a characteristic of academic writing?",
      options: [
        "Use of colloquial expressions",
        "Formal tone and precise language",
        "Emotional and persuasive language"
      ],
      correct: 1,
      explanation: "Academic writing is characterized by a formal tone and precise language, avoiding colloquial expressions and emotional language."
    },
    {
      question: "What is the purpose of hedging language in academic writing?",
      options: [
        "To make writing more emotional",
        "To express caution or uncertainty appropriately",
        "To make sentences longer and more complex"
      ],
      correct: 1,
      explanation: "Hedging language (e.g., 'may,' 'suggests,' 'appears to') is used to express appropriate caution or uncertainty in academic writing."
    },
    {
      question: "Which of these is the most appropriate academic alternative for 'a lot of'?",
      options: [
        "tons of",
        "considerable",
        "loads of"
      ],
      correct: 1,
      explanation: "'Considerable' is a formal academic alternative to the informal 'a lot of.'"
    },
    {
      question: "What should be included in the introduction of an academic paper?",
      options: [
        "Detailed statistical analysis",
        "The thesis statement and background information",
        "Personal opinions about the topic"
      ],
      correct: 1,
      explanation: "The introduction should include the thesis statement, background information, and an outline of the paper's structure."
    },
    {
      question: "When is citation necessary in academic writing?",
      options: [
        "Only for direct quotations",
        "For both direct quotations and paraphrased ideas",
        "Only when using statistics"
      ],
      correct: 1,
      explanation: "Citation is necessary for both direct quotations and paraphrased ideas, as well as for statistics, theories, and concepts developed by others."
    },
    {
      question: "Which sentence demonstrates appropriate academic style?",
      options: [
        "The results totally prove our hypothesis is right.",
        "The results suggest a potential confirmation of the hypothesis.",
        "I think the results show our hypothesis is correct."
      ],
      correct: 1,
      explanation: "The second option uses appropriate academic style with hedging language ('suggest,' 'potential') and avoids informal expressions."
    },
    {
      question: "What is the primary purpose of academic writing?",
      options: [
        "To entertain readers",
        "To express personal opinions forcefully",
        "To communicate complex ideas clearly and precisely"
      ],
      correct: 2,
      explanation: "The primary purpose of academic writing is to communicate complex ideas clearly and precisely to an educated audience."
    }
  ]

  const selectOption = (optionIndex: number) => {
    if (userAnswers[currentQuestion] !== null) return
    
    const newAnswers = [...userAnswers]
    newAnswers[currentQuestion] = optionIndex
    setUserAnswers(newAnswers)
    
    if (optionIndex === quizQuestions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const restartQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setUserAnswers(Array(7).fill(null))
    setShowResults(false)
  }

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        <Card className="overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] text-white p-8">
            <div className="flex items-center gap-2 text-sm mb-4 opacity-90">
              <Link href="/" className="hover:underline">Home</Link>
              <span>&gt;</span>
              <Link href="/english-course" className="hover:underline">English</Link>
              <span>&gt;</span>
              <Link href="/english-advanced" className="hover:underline">Advanced</Link>
              <span>&gt;</span>
              <span>Lesson 1</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">Academic Writing</h1>
            <p className="text-lg opacity-90">Master the skills needed for effective academic writing in English.</p>
            <Link href="/english-advanced">
              <Button variant="secondary" size="sm" className="mt-4">
                Advanced Level
              </Button>
            </Link>
          </div>

          {/* Progress Bar */}
          <div className="bg-muted p-6">
            <div className="h-2 bg-muted-foreground/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-12">
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Introduction to Academic Writing</h2>
              </div>
              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Academic writing is a formal style of writing used in universities and scholarly publications. It follows specific conventions and requires precision, clarity, and a structured approach.
                </p>
                
                <Card className="bg-primary/5 border-l-4 border-primary p-6">
                  <p className="font-semibold">Key Characteristics: Formal tone, precise language, evidence-based arguments, clear structure, and objective perspective.</p>
                </Card>
                
                <p>
                  Unlike casual or creative writing, academic writing prioritizes clarity and precision over stylistic flair. It serves to communicate complex ideas effectively to an educated audience.
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Edit3 className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Key Features of Academic Writing</h2>
              </div>
              <div className="space-y-4 text-lg">
                <p>Academic writing has distinct characteristics that set it apart from other forms of writing:</p>
                
                <div className="grid gap-4">
                  {[
                    {
                      title: "Formal Tone",
                      desc: "Avoids contractions, colloquialisms, and personal pronouns like 'I' or 'you' when possible.",
                      example: '"The research indicates" rather than "I think the research shows"'
                    },
                    {
                      title: "Precise Language",
                      desc: "Uses specific terminology and avoids vague expressions.",
                      example: '"The sample size was insufficient" rather than "There weren\'t enough people in the study"'
                    },
                    {
                      title: "Evidence-Based",
                      desc: "Arguments are supported by evidence from credible sources.",
                      example: '"As Smith (2020) demonstrated, the correlation was statistically significant"'
                    },
                    {
                      title: "Structured Approach",
                      desc: "Follows a clear organizational pattern with introduction, body, and conclusion.",
                      example: "Standard essay structure with thesis statement, supporting paragraphs, and concluding remarks"
                    },
                    {
                      title: "Objective Perspective",
                      desc: "Maintains an impartial tone and avoids emotional language.",
                      example: '"The results suggest" rather than "The amazing results prove"'
                    }
                  ].map((feature, idx) => (
                    <Card key={idx} className="p-6 border-l-4 border-primary">
                      <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                      <p className="mb-2">{feature.desc}</p>
                      <p className="text-sm text-muted-foreground"><strong>Example:</strong> {feature.example}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Structure */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Academic Writing Structure</h2>
              </div>
              <div className="space-y-4 text-lg">
                <p>Most academic papers follow a standard structure that helps organize complex ideas logically:</p>
                
                <div className="grid gap-4">
                  {[
                    {
                      title: "Introduction",
                      points: [
                        "Presents the topic and its significance",
                        "Provides background information",
                        "States the thesis or research question",
                        "Outlines the paper's structure"
                      ]
                    },
                    {
                      title: "Body Paragraphs",
                      points: [
                        "Each paragraph focuses on one main idea",
                        "Begins with a topic sentence",
                        "Provides evidence and examples",
                        "Includes analysis and explanation",
                        "Uses transitions between paragraphs"
                      ]
                    },
                    {
                      title: "Conclusion",
                      points: [
                        "Restates the thesis in different words",
                        "Summarizes main points",
                        "Discusses implications or significance",
                        "Suggests areas for further research",
                        "Avoids introducing new information"
                      ]
                    }
                  ].map((section, idx) => (
                    <Card key={idx} className="p-6 bg-destructive/5 border-l-4 border-destructive">
                      <h3 className="text-xl font-bold mb-3">{section.title}</h3>
                      <ul className="space-y-2">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex gap-2">
                            <span className="text-destructive">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Language & Vocabulary */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Languages className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Academic Language and Vocabulary</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg">Academic writing uses specific vocabulary and grammatical structures:</p>
                
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-primary/10">
                        <th className="border border-border p-3 text-left font-bold">Informal Expression</th>
                        <th className="border border-border p-3 text-left font-bold">Academic Alternative</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["a lot of", "numerous, considerable, substantial"],
                        ["get", "obtain, acquire, receive"],
                        ["good", "beneficial, advantageous, positive"],
                        ["bad", "detrimental, unfavorable, negative"],
                        ["big", "significant, considerable, substantial"],
                        ["small", "minimal, limited, negligible"],
                        ["show", "demonstrate, illustrate, reveal"],
                        ["think", "argue, propose, contend"],
                        ["look at", "examine, analyze, investigate"],
                        ["find out", "determine, ascertain, discover"]
                      ].map(([informal, academic], idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : ""}>
                          <td className="border border-border p-3">{informal}</td>
                          <td className="border border-border p-3">{academic}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <Card className="bg-orange-50 border-l-4 border-orange-500 p-6">
                  <h3 className="font-bold mb-2 text-orange-900">Hedging Language</h3>
                  <p className="mb-2">Academic writing often uses hedging to express caution or uncertainty: "may," "might," "could," "appears to," "seems to," "suggests."</p>
                  <p className="text-sm"><strong>Example:</strong> "The results suggest a possible correlation" rather than "The results prove a correlation"</p>
                </Card>
              </div>
            </section>

            {/* Common Mistakes */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ExclamationTriangle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Common Mistakes to Avoid</h2>
              </div>
              <div className="space-y-4">
                <p className="text-lg">Even advanced writers can make these common academic writing errors:</p>
                
                <div className="grid gap-4">
                  {[
                    {
                      title: "Informal Language",
                      avoid: "The researchers kinda found something interesting.",
                      use: "The researchers identified a noteworthy finding."
                    },
                    {
                      title: "Vague References",
                      avoid: "They say that climate change is real.",
                      use: "The Intergovernmental Panel on Climate Change (2021) confirms that climate change is occurring."
                    },
                    {
                      title: "Overgeneralization",
                      avoid: "Everyone knows that education is important.",
                      use: "Research consistently demonstrates the importance of education (Smith, 2019; Johnson, 2020)."
                    },
                    {
                      title: "Emotional Language",
                      avoid: "The shocking results prove the theory is completely wrong.",
                      use: "The results contradict the theoretical predictions, suggesting a need for revision."
                    }
                  ].map((mistake, idx) => (
                    <Card key={idx} className="p-6 bg-destructive/5 border-l-4 border-destructive">
                      <h3 className="text-xl font-bold mb-3">{mistake.title}</h3>
                      <p className="mb-2"><strong className="text-destructive">Avoid:</strong> "{mistake.avoid}"</p>
                      <p><strong className="text-green-600">Use:</strong> "{mistake.use}"</p>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Quiz */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Practice Quiz</h2>
              </div>
              <p className="text-lg mb-6">Test your understanding of academic writing principles with this quiz.</p>

              <Card className="p-6">
                {!showResults ? (
                  <>
                    <div className="flex justify-between mb-6 font-semibold">
                      <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                      <span>Score: {score}/{quizQuestions.length}</span>
                    </div>

                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
                      
                      <div className="space-y-3">
                        {quizQuestions[currentQuestion].options.map((option, idx) => {
                          const isSelected = userAnswers[currentQuestion] === idx
                          const isCorrect = idx === quizQuestions[currentQuestion].correct
                          const showFeedback = userAnswers[currentQuestion] !== null
                          
                          return (
                            <div
                              key={idx}
                              onClick={() => selectOption(idx)}
                              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                !showFeedback
                                  ? isSelected
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary hover:bg-primary/5"
                                  : isCorrect
                                    ? "border-green-500 bg-green-50"
                                    : isSelected
                                      ? "border-red-500 bg-red-50"
                                      : "border-border"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {showFeedback ? (
                                  isCorrect ? (
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                  ) : isSelected ? (
                                    <XCircle className="w-5 h-5 text-red-600" />
                                  ) : null
                                ) : null}
                                <span>{option}</span>
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      {userAnswers[currentQuestion] !== null && (
                        <Card className={`mt-4 p-4 ${
                          userAnswers[currentQuestion] === quizQuestions[currentQuestion].correct
                            ? "bg-green-50 border-green-500"
                            : "bg-red-50 border-red-500"
                        }`}>
                          <p className="font-semibold">
                            {userAnswers[currentQuestion] === quizQuestions[currentQuestion].correct
                              ? "Correct! "
                              : "Incorrect. "}
                            {quizQuestions[currentQuestion].explanation}
                          </p>
                        </Card>
                      )}
                    </div>

                    <div className="flex justify-between">
                      <Button
                        variant="outline"
                        onClick={prevQuestion}
                        disabled={currentQuestion === 0}
                      >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Previous
                      </Button>
                      <Button
                        onClick={nextQuestion}
                        disabled={userAnswers[currentQuestion] === null}
                      >
                        {currentQuestion === quizQuestions.length - 1 ? "See Results" : "Next"}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <h3 className="text-2xl font-bold mb-4">Quiz Completed!</h3>
                    <p className="text-lg mb-4">You have finished the Academic Writing quiz.</p>
                    <div className="text-4xl font-bold text-primary my-6">
                      Score: {score}/{quizQuestions.length}
                    </div>
                    <p className="text-lg mb-6">
                      {score === quizQuestions.length
                        ? "Excellent! You have mastered the principles of academic writing."
                        : score >= quizQuestions.length * 0.7
                          ? "Very good! You have a solid understanding of academic writing conventions."
                          : score >= quizQuestions.length * 0.5
                            ? "Not bad! Review the key concepts to strengthen your academic writing skills."
                            : "Academic writing has specific conventions. Review the lesson and try again."}
                    </p>
                    <Button onClick={restartQuiz} variant="destructive">
                      Restart Quiz
                    </Button>
                  </div>
                )}
              </Card>
            </section>

            {/* Summary */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <ClipboardList className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-bold">Summary</h2>
              </div>
              <div className="space-y-4 text-lg">
                <p>To excel in academic writing, remember these key principles:</p>
                <ul className="space-y-2 ml-6">
                  {[
                    "Maintain a formal, objective tone throughout your writing",
                    "Use precise vocabulary and avoid colloquial expressions",
                    "Structure your writing with clear introduction, body, and conclusion",
                    "Support your arguments with evidence from credible sources",
                    "Properly cite all sources to avoid plagiarism",
                    "Use hedging language to express appropriate caution",
                    "Revise and edit carefully for clarity and coherence"
                  ].map((point, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                
                <Card className="bg-primary/5 border-l-4 border-primary p-6 mt-6">
                  <p><strong>Tip:</strong> Read published academic papers in your field to internalize the conventions of academic writing. Practice writing regularly and seek feedback from peers or instructors.</p>
                </Card>
              </div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between pt-8 border-t">
              <Link href="/english-intermediate">
                <Button variant="outline">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Intermediate Level
                </Button>
              </Link>
              <Link href="/english-advanced/lesson-2">
                <Button>
                  Next Lesson
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
