import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Menu, X, Globe } from 'lucide-react';

export default function Home() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              CA
            </div>
            <span className="font-bold text-xl hidden sm:inline">{t('company.name')}</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="hover:text-blue-600 transition">
              {t('nav.courses')}
            </a>
            <a href="#about" className="hover:text-blue-600 transition">
              {t('nav.about')}
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              {t('nav.contact')}
            </a>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition"
            >
              <Globe size={20} />
              <span className="font-semibold">{language === 'en' ? '中文' : 'EN'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-50 px-4 py-4 space-y-2">
            <a
              href="#courses"
              className="block py-2 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.courses')}
            </a>
            <a
              href="#about"
              className="block py-2 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a
              href="#contact"
              className="block py-2 hover:text-blue-600 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('hero.title')}</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">{t('hero.subtitle')}</p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-bold"
            onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('hero.cta')}
          </Button>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">{t('company.title')}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {t('company.description.en')}
          </p>

          {/* Mission Points */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('mission.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((num) => (
                <Card key={num} className="p-6 bg-white shadow-sm hover:shadow-md transition">
                  <p className="text-gray-700">{t(`mission.point${num}`)}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('courses.title')}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Python Course */}
            <a href="/python-class" className="block">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer h-full">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-8">
                  <h3 className="text-2xl font-bold mb-2">{t('courses.python.title')}</h3>
                  <p className="text-blue-100">{t('courses.python.level')}</p>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6">{t('courses.python.desc')}</p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">📚 {language === 'en' ? 'Topics:' : '主題：'}</span> Variables, Functions, Loops, Data Structures
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">👥 {language === 'en' ? 'Class Size:' : '班級人數：'}</span> {language === 'en' ? 'Max 8 students' : '最多8名學生'}
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    {language === 'en' ? 'Learn More' : '了解更多'}
                  </Button>
                </div>
              </Card>
            </a>

            {/* Blockly Course */}
            <a href="/blockly-class" className="block">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer h-full">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-8">
                  <h3 className="text-2xl font-bold mb-2">{t('courses.blockly.title')}</h3>
                  <p className="text-purple-100">{t('courses.blockly.level')}</p>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 mb-6">{t('courses.blockly.desc')}</p>
                  <div className="space-y-3 mb-6">
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">📚 {language === 'en' ? 'Topics:' : '主題：'}</span> Logic, Algorithms, Problem-Solving
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-semibold">👥 {language === 'en' ? 'Class Size:' : '班級人數：'}</span> {language === 'en' ? 'Max 8 students' : '最多8名學生'}
                    </p>
                  </div>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    {language === 'en' ? 'Learn More' : '了解更多'}
                  </Button>
                </div>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('whyus.title')}</h2>

          {/* Founder Story */}
          <div className="mb-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{t('whyus.founder.title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyus.founder.desc')}</p>
            </Card>
          </div>

          {/* Strengths */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('whyus.strengths.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'bilingual',
                'youth',
                'professional',
                'interactive',
              ].map((strength) => (
                <Card key={strength} className="p-6 bg-white">
                  <p className="text-gray-700">{t(`whyus.strengths.${strength}`)}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Teaching Philosophy */}
          <div className="mb-12">
            <Card className="p-8 bg-white">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">
                {t('whyus.philosophy.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed">{t('whyus.philosophy.desc')}</p>
            </Card>
          </div>

          {/* Vision */}
          <div>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">{t('whyus.vision.title')}</h3>
              <p className="text-gray-700 leading-relaxed">{t('whyus.vision.desc')}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('testimonials.title')}</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <Card key={num} className="p-6 bg-white shadow-md hover:shadow-lg transition">
                <div className="mb-4">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{t(`testimonials.student${num}`)}"
                  </p>
                  <p className="font-semibold text-gray-800">{t(`testimonials.student${num}.name`)}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">{t('contact.title')}</h2>

          <Card className="p-8 bg-white">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {language === 'en' ? 'Your Name' : '你的名字'}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={language === 'en' ? 'Enter your name' : '輸入你的名字'}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={language === 'en' ? 'Your message here...' : '你的訊息...'}
                />
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2">
                {t('contact.submit')}
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-semibold text-gray-800 mb-2">{t('contact.email')}</p>
                  <p className="text-gray-600">hello@stemtutorial.hk</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 mb-2">{t('contact.address')}</p>
                  <p className="text-gray-600">{t('footer.address')}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">{language === 'en' ? 'About Us' : '關於我們'}</h4>
              <p className="text-gray-400 text-sm">
                {language === 'en'
                  ? 'Code Adventures - Leading STEM education provider for Hong Kong students'
                  : 'Code Adventures - 香港領先的STEM教育提供者'}
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">{language === 'en' ? 'Quick Links' : '快速連結'}</h4>
              <ul className="text-gray-400 text-sm space-y-2">
                <li>
                  <a href="#courses" className="hover:text-white transition">
                    {t('nav.courses')}
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition">
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">{t('footer.followus')}</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Instagram
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
