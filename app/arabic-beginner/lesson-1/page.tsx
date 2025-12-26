"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function ArabicLesson1Page() {
  const [quiz1Result, setQuiz1Result] = useState<"correct" | "incorrect" | null>(null)
  const [quiz2Result, setQuiz2Result] = useState<"correct" | "incorrect" | null>(null)

  const progress = ((Number(quiz1Result === "correct") + Number(quiz2Result === "correct")) / 2) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/arabic-beginner"
            className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            العودة إلى الدورة
          </Link>
          <div className="flex items-center gap-4">
            <div className="text-sm font-medium text-gray-500">الدرس 1 من 10</div>
            <div className="w-32">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">التحيات الأساسية</h1>
          <p className="text-gray-600">تعلم التحيات الأساسية في اللغة العربية للمحادثات اليومية</p>
        </div>

        <Card className="mb-8 border-r-4 border-r-indigo-500">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4 text-indigo-700">مقدمة عن التحيات</h2>
            <p className="text-gray-700 leading-relaxed">
              التحيات هي أول الكلمات التي نستخدمها عند لقاء شخص ما. تعلم التحيات المناسبة أمر ضروري لبدء المحادثات
              بالعربية.
            </p>
          </CardContent>
        </Card>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">التحيات الشائعة</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "السلام عليكم / مرحباً",
                desc: "تحيات عالمية يمكن استخدامها في أي وقت من اليوم في المواقف الرسمية وغير الرسمية.",
                example: "السلام عليكم، اسمي أحمد.",
              },
              {
                title: "صباح الخير",
                desc: "يُستخدم من شروق الشمس حتى الظهر. أكثر رسمية من 'مرحباً'.",
                example: "صباح الخير، كيف حالك اليوم؟",
              },
              {
                title: "مساء الخير",
                desc: "يُستخدم من الظهر حتى حوالي 5-6 مساءً. مناسب للمواقف الرسمية وغير الرسمية.",
                example: "مساء الخير، سعيد برؤيتك.",
              },
              {
                title: "مساء الخير (المساء المتأخر)",
                desc: "يُستخدم من حوالي 5-6 مساءً حتى وقت النوم. تحية رسمية أكثر لوقت متأخر من اليوم.",
                example: "مساء الخير، أهلاً بكم في حدثنا.",
              },
              {
                title: "كيف حالك؟",
                desc: "سؤال متابعة شائع بعد التحية لإظهار الاهتمام بأحوال شخص ما.",
                example: "مرحباً سارة، كيف حالك؟",
              },
              {
                title: "تشرفنا",
                desc: "يُستخدم عند مقابلة شخص لأول مرة. يعبر عن سعادتك بمعرفته.",
                example: "مرحباً، أنا داود. تشرفنا.",
              },
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold text-indigo-600 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
                  <div className="bg-indigo-50 p-3 rounded-lg text-sm text-indigo-900 italic">
                    <strong>مثال:</strong> "{item.example}"
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">تمارين التدريب</h2>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4">1. ما هي التحية المناسبة للاستخدام في الساعة 9 صباحاً؟</h3>
              <div className="space-y-3">
                {[
                  { label: "صباح الخير", value: "correct" },
                  { label: "مساء الخير", value: "incorrect" },
                  { label: "تصبح على خير", value: "incorrect" },
                ].map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setQuiz1Result(option.value as any)}
                    className={`w-full text-right p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                      quiz1Result === null
                        ? "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
                        : quiz1Result === "correct" && option.value === "correct"
                          ? "border-green-500 bg-green-50 text-green-700"
                          : "border-gray-200"
                    } ${quiz1Result !== null && option.value === "correct" ? "border-green-500 bg-green-50 text-green-700" : ""}`}
                    disabled={quiz1Result === "correct"}
                  >
                    <span>{option.label}</span>
                    {quiz1Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                  </button>
                ))}
              </div>
              {quiz1Result === "correct" && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                  صحيح! "صباح الخير" يُستخدم قبل الظهر.
                </div>
              )}
              {quiz1Result === "incorrect" && (
                <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-lg text-sm font-medium">
                  غير صحيح. حاول مرة أخرى!
                </div>
              )}
            </CardContent>
          </Card>

          {quiz1Result === "correct" && (
            <Card className="animate-in fade-in slide-in-from-bottom-4">
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">2. أي تحية تستخدمها عند مقابلة شخص لأول مرة؟</h3>
                <div className="space-y-3">
                  {[
                    { label: "تشرفنا", value: "correct" },
                    { label: "أراك لاحقاً", value: "incorrect" },
                    { label: "وداعاً", value: "incorrect" },
                  ].map((option) => (
                    <button
                      key={option.label}
                      onClick={() => setQuiz2Result(option.value as any)}
                      className={`w-full text-right p-4 rounded-lg border-2 transition-all flex items-center justify-between ${
                        quiz2Result === null
                          ? "border-gray-200 hover:border-indigo-200 hover:bg-indigo-50"
                          : quiz2Result === "correct" && option.value === "correct"
                            ? "border-green-500 bg-green-50 text-green-700"
                            : "border-gray-200"
                      } ${quiz2Result !== null && option.value === "correct" ? "border-green-500 bg-green-50 text-green-700" : ""}`}
                      disabled={quiz2Result === "correct"}
                    >
                      <span>{option.label}</span>
                      {quiz2Result === "correct" && option.value === "correct" && <CheckCircle2 size={20} />}
                    </button>
                  ))}
                </div>
                {quiz2Result === "correct" && (
                  <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg text-sm font-medium">
                    ممتاز! "تشرفنا" مثالية للمقدمات الأولى.
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        <div className="flex justify-between items-center pt-8 border-t">
          <Button variant="outline" disabled>
            الدرس السابق
          </Button>
          <Link href="/arabic-beginner/lesson-2">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white" disabled={quiz2Result !== "correct"}>
              الدرس التالي <ArrowLeft className="ml-2 rotate-180" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
