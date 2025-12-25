import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, BookOpen, Users, Clock, Zap } from 'lucide-react';
import { Link } from 'wouter';

export default function BlocklyClass() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <a className="inline-flex items-center gap-2 mb-6 hover:opacity-80 transition">
              <ArrowLeft size={20} />
              {language === 'en' ? 'Back to Home' : '返回首頁'}
            </a>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('blockly.title')}</h1>
          <p className="text-xl opacity-90">{t('blockly.desc')}</p>
        </div>
      </header>

      {/* Hero Image Placeholder */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-purple-100 rounded-lg h-64 md:h-96 flex items-center justify-center border-2 border-purple-200">
            <div className="text-center">
              <Zap size={64} className="text-purple-400 mx-auto mb-4" />
              <p className="text-purple-600 font-semibold">
                {language === 'en' ? 'Google Blockly Course Image' : 'Google Blockly 課程圖片'}
              </p>
              <p className="text-purple-500 text-sm mt-2">
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
            <Card className="p-6 bg-purple-50 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-purple-600" size={24} />
                <h3 className="font-semibold">{t('class.level')}</h3>
              </div>
              <p className="text-gray-700">P4 - P6</p>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Primary 4 to 6' : '小四至小六'}
              </p>
            </Card>

            <Card className="p-6 bg-purple-50 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-purple-600" size={24} />
                <h3 className="font-semibold">{t('class.maxstudents')}</h3>
              </div>
              <p className="text-gray-700">8 {language === 'en' ? 'students' : '名學生'}</p>
              <p className="text-sm text-gray-600 mt-2">
                {language === 'en' ? 'Small group learning' : '小班教學'}
              </p>
            </Card>

            <Card className="p-6 bg-purple-50 border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-purple-600" size={24} />
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
                <Card key={num} className="p-6 border-l-4 border-l-purple-600">
                  <p className="text-gray-700">{t(`blockly.obj${num}`)}</p>
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
                    <div className="bg-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                      {num}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {t(`blockly.module${num}`)}
                      </h3>
                      <p className="text-gray-600">{t(`blockly.module${num}.desc`)}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Class Structure */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('class.structure')}</h2>
            <Card className="p-8 bg-gradient-to-r from-purple-50 to-purple-100">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <BookOpen className="text-purple-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'en' ? 'Welcome & Icebreaker' : '歡迎與破冰'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? '5 minutes: Fun warm-up activity to get everyone excited'
                        : '5 分鐘：有趣的熱身活動讓每個人都興奮'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Zap className="text-purple-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'en' ? 'Concept Introduction' : '概念介紹'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? '15 minutes: Visual demonstrations with Blockly blocks and real examples'
                        : '15 分鐘：使用 Blockly 積木和實際示例進行視覺演示'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Users className="text-purple-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'en' ? 'Interactive Coding' : '互動編碼'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? '25 minutes: Students create and experiment with blocks, with instructor guidance'
                        : '25 分鐘：學生在導師指導下創建和試驗積木'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="text-purple-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      {language === 'en' ? 'Showcase & Celebration' : '展示與慶祝'}
                    </h3>
                    <p className="text-gray-700">
                      {language === 'en'
                        ? '10 minutes: Students share their creations and celebrate achievements'
                        : '10 分鐘：學生分享他們的創作並慶祝成就'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Why Blockly? */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {language === 'en' ? 'Why Google Blockly?' : '為什麼選擇 Google Blockly？'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-purple-600">
                  {language === 'en' ? 'Visual & Intuitive' : '視覺化與直觀'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Drag-and-drop blocks make programming easy and fun for beginners. No complex syntax to memorize!'
                    : '拖放積木使初學者輕鬆有趣地進行編程。無需記住複雜的語法！'}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-purple-600">
                  {language === 'en' ? 'Builds Real Skills' : '培養真實技能'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Learn fundamental programming concepts like loops, conditions, and variables through visual blocks.'
                    : '通過視覺積木學習循環、條件和變量等基本編程概念。'}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-purple-600">
                  {language === 'en' ? 'Instant Feedback' : '即時反饋'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'See your code run immediately and get instant feedback on what works and what needs fixing.'
                    : '立即查看代碼運行並獲得有關什麼有效以及什麼需要修復的即時反饋。'}
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4 text-purple-600">
                  {language === 'en' ? 'Creative Freedom' : '創意自由'}
                </h3>
                <p className="text-gray-700">
                  {language === 'en'
                    ? 'Create games, animations, and interactive stories. Express your creativity while learning!'
                    : '創建遊戲、動畫和互動故事。在學習的同時表達你的創意！'}
                </p>
              </Card>
            </div>
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
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>{t('class.computer')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>{t('class.browser')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>
                      {language === 'en' ? 'Google account (free)' : 'Google 帳戶（免費）'}
                    </span>
                  </li>
                </ul>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-lg mb-4">
                  {language === 'en' ? 'Personal Requirements' : '個人要求'}
                </h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>{t('class.enthusiasm')}</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>
                      {language === 'en'
                        ? 'No prior coding experience needed'
                        : '無需先前編碼經驗'}
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-purple-600 font-bold">✓</span>
                    <span>
                      {language === 'en'
                        ? 'Imagination and creativity'
                        : '想像力和創意'}
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
                <div className="text-4xl mb-4">👩‍💻</div>
                <h3 className="font-semibold mb-2">{t('class.mentorship')}</h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en'
                    ? 'Get help from our friendly instructors anytime during class'
                    : '在課堂中隨時獲得我們友好導師的幫助'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Fun Projects' : '有趣的項目'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en'
                    ? 'Create games and animations you can share with friends'
                    : '創建可與朋友分享的遊戲和動畫'}
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-semibold mb-2">
                  {language === 'en' ? 'Certificates' : '證書'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language === 'en'
                    ? 'Earn a certificate upon course completion'
                    : '課程完成後獲得證書'}
                </p>
              </Card>
            </div>
          </div>

          {/* Schedule Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">{t('class.schedule')}</h2>
            <Card className="p-8 bg-purple-50 border-2 border-purple-200">
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Perfect for busy students! Choose what works best for you:'
                  : '非常適合忙碌的學生！選擇最適合你的時間：'}
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>
                    {language === 'en'
                      ? 'After-school sessions (4:00 PM - 5:00 PM)'
                      : '放學後課程（下午 4:00 - 5:00）'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>
                    {language === 'en'
                      ? 'Weekend classes (Saturday & Sunday)'
                      : '週末課程（星期六和星期日）'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>
                    {language === 'en'
                      ? 'Holiday intensive programs'
                      : '假期密集課程'}
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>
                    {language === 'en'
                      ? 'Flexible one-on-one sessions'
                      : '靈活的一對一課程'}
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 text-sm italic">
                {language === 'en'
                  ? 'Contact us to find the perfect time for your schedule!'
                  : '聯絡我們找到最適合你的時間！'}
              </p>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              {language === 'en'
                ? 'Ready to Create Your First Game?'
                : '準備好創建你的第一個遊戲嗎？'}
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Join thousands of young programmers who are learning and creating amazing projects with Blockly. Start your adventure today!'
                : '加入數千名正在使用 Blockly 學習和創建令人驚嘆項目的年輕程序員。今天就開始你的冒險！'}
            </p>
            <Link href="/">
              <a>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white font-bold">
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
