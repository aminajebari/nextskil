"use client"

import Link from "next/link"

export default function ArabicCoursePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <Link href="/" className="text-3xl font-bold">
            Next<span className="text-secondary">Skill</span>
          </Link>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">تعلم العربية مع NextSkill</h1>
          <p className="text-xl text-slate-600 mb-12">اختر مستواك لبدء رحلة التعلم</p>
        </div>
      </section>

      <section className="pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">اختر مستواك</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-green-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🎯</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">مبتدئ</h3>
                <p className="text-slate-600 text-center mb-6">للمبتدئين من الصفر</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">التقدم</span>
                    <span className="text-sm font-semibold text-green-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> التحيات الأساسية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> المفردات الأساسية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> القواعد البسيطة
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span> 15 درسًا تفاعليًا
                  </li>
                </ul>
                <Link
                  href="/arabic-beginner"
                  className="block w-full text-center bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                >
                  ابدأ المستوى المبتدئ
                </Link>
              </div>
            </div>

            {/* Intermediate Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🚀</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">متوسط</h3>
                <p className="text-slate-600 text-center mb-6">لمن لديهم معرفة أساسية</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">التقدم</span>
                    <span className="text-sm font-semibold text-blue-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> المحادثات اليومية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> الأزمنة الماضية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> مفردات متقدمة
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-blue-500">✓</span> 20 درسًا شاملًا
                  </li>
                </ul>
                <Link
                  href="/arabic-intermediate"
                  className="block w-full text-center bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                >
                  ابدأ المستوى المتوسط
                </Link>
              </div>
            </div>

            {/* Advanced Level */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-t-4 border-purple-500 hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-6xl mb-4 text-center">🏆</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2 text-center">متقدم</h3>
                <p className="text-slate-600 text-center mb-6">لإتقان اللغة</p>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-slate-600">التقدم</span>
                    <span className="text-sm font-semibold text-purple-600">0%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500" style={{ width: "0%" }}></div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> التعبير الكتابي
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> العربية التجارية
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> الثقافة والأدب
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✓</span> 25 درسًا متخصصًا
                  </li>
                </ul>
                <Link
                  href="/arabic-advanced"
                  className="block w-full text-center bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors"
                >
                  ابدأ المستوى المتقدم
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white text-center py-8">
        <p>© 2025 NextSkill. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  )
}
