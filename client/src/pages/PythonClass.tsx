import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Users, Clock, Code } from 'lucide-react';
import { Link } from 'wouter';

export default function PythonClass() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <a className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition">
              <ArrowLeft size={20} />
              {language === 'en' ? 'Back to Home' : '返回首頁'}
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('python.title')}</h1>
          <p className="text-xl opacity-90">{t('python.desc')}</p>
        </div>
      </header>

      {/* Hero Image Placeholder */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-blue-100 rounded-lg h-64 md:h-96 flex items-center justify-center border-2 border-blue-200">
            <div className="text-center">
              <Code size={64} className="text-blue-400 mx-auto mb-4" />
              <p className="text-blue-600 font-semibold">
                {language === 'en' ? 'Python Programming Course Image' : 'Python 編程課程圖片'}
              </p>
              <p className="text-blue-500 text-sm mt-2">
                {language === 'en' ? '(Replace with your course image)' : '（用你的課程圖片替換）'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-blue-600" size={24} />
                <h3 className="font-semibold">{t('class.level')}</h3>
              </div>
              <p className="text-gray-700">S1 - S3</p>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Secondary 1 to 3' : '中一至中三'}
              </p>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-blue-600" size={24} />
                <h3 className="font-semibold">{t('class.maxstudents')}</h3>
              </div>
              <p className="text-gray-700">8 {language === 'en' ? 'students' : '名學生'}</p>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Small group learning' : '小班教學'}
              </p>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-blue-600" size={24} />
                <h3 className="font-semibold">{t('class.format')}</h3>
              </div>
              <p className="text-gray-700">{t('class.online')}</p>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Real-time interactive' : '實時互動'}
              </p>
            </Card>
          </div>

          {/* Learning Objectives */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('class.objectives')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <Card key={num} className="p-6 border-l-4 border-l-blue-600">
                  <p className="text-gray-700">{t(`python.obj${num}`)}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('class.curriculum')}</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((num) => (
                <Card key={num} className="p-6 hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {t(`python.module${num}`)}
                      </h3>
                      <p className="text-gray-600">{t(`python.module${num}.desc`)}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Class Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('class.structure')}</h2>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-blue-100">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <BookOpen className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'en' ? 'Warm-up & Review' : '熱身與複習'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? '5-10 minutes: Quick review of previous concepts and warm-up exercises'
                        : '5-10 分鐘：快速複習之前的概念和熱身練習'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Code className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'en' ? 'New Concepts' : '新概念'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? '20-25 minutes: Interactive teaching with live coding demonstrations'
                        : '20-25 分鐘：互動教學和實時編碼演示'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'en' ? 'Hands-on Practice' : '實踐練習'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? '20-25 minutes: Students code along with instructor guidance and peer collaboration'
                        : '20-25 分鐘：學生在導師指導下編碼和同儕協作'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'en' ? 'Wrap-up & Q&A' : '總結與問答'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? '5-10 minutes: Review key concepts and answer questions'
                        : '5-10 分鐘：複習關鍵概念並回答問題'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Requirements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('class.requirements')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">
                  {language === 'en' ? 'Technical Requirements' : '技術要求'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{t('class.computer')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{t('class.python')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{t('class.browser')}</span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">
                  {language === 'en' ? 'Personal Requirements' : '個人要求'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{t('class.enthusiasm')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      {language === 'en' ? 'Willingness to collaborate' : '願意合作'}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>
                      {language === 'en'
                        ? 'Curiosity and problem-solving mindset'
                        : '好奇心和解決問題的心態'}
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Support */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('class.support')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">👨‍🏫</div>
                <h3 className="font-semibold mb-2">{t('class.mentorship')}</h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en'
                    ? 'Get personalized guidance from experienced instructors'
                    : '獲得經驗豐富的導師的個性化指導'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-semibold mb-2">{t('class.community')}</h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en'
                    ? 'Connect with other students and share ideas'
                    : '與其他學生聯繫並分享想法'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-semibold mb-2">{t('class.resources')}</h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en'
                    ? 'Access course materials and coding resources'
                    : '訪問課程材料和編碼資源'}
                </p>
              </Card>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('class.schedule')}</h2>
            <Card className="p-8 bg-blue-50 border-2 border-blue-200">
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'We offer flexible scheduling to accommodate your needs. Classes can be arranged:'
                  : '我們提供靈活的時間安排以滿足您的需求。課程可以安排在：'}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    {language === 'en'
                      ? 'Weekday evenings (after school)'
                      : '平日晚上（放學後）'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    {language === 'en' ? 'Weekend mornings or afternoons' : '週末上午或下午'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    {language === 'en' ? 'School holidays' : '學校假期'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>
                    {language === 'en'
                      ? 'Customized schedules for groups'
                      : '為小組定制時間表'}
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                {language === 'en'
                  ? 'Contact us to discuss the best schedule for you!'
                  : '聯絡我們討論最適合你的時間表！'}
              </p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'en'
                ? 'Ready to Start Your Python Journey?'
                : '準備好開始你的 Python 之旅嗎？'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Join us and learn professional programming skills in a fun, supportive environment. Limited spots available!'
                : '加入我們，在有趣且支持的環境中學習專業編程技能。名額有限！'}
            </p>
            <Link href="/">
              <a>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
                  {t('class.enrollment')}
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
