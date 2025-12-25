import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
  // Navigation
  'nav.home': { en: 'Home', zh: '首頁' },
  'nav.courses': { en: 'Courses', zh: '課程' },
  'nav.about': { en: 'About Us', zh: '關於我們' },
  'nav.contact': { en: 'Contact', zh: '聯絡我們' },
  
  // Company Info
  'company.name': { en: 'Code Adventures', zh: 'Code Adventures' },
  'company.location': { en: 'Hong Kong', zh: '香港' },
  
  // Hero Section
  'hero.title': { en: 'Inspire the Next Generation of Innovators', zh: '啟發下一代創新者' },
  'hero.subtitle': { en: 'High-quality online STEM education for Hong Kong students', zh: '為香港學生提供高質素的線上STEM教育' },
  'hero.cta': { en: 'Explore Courses', zh: '探索課程' },
  
  // Company Overview
  'company.title': { en: 'Company Overview', zh: '公司簡介' },
  'company.description.en': { en: 'Our company is dedicated to providing high-quality online STEM education to primary and junior secondary students in Hong Kong. We focus on interactive, real-time programming classes that inspire creativity, logical thinking, and problem-solving skills. Our curriculum is designed to make coding fun and accessible for every child — from Blockly for beginners (P3–P6) to Python for young developers (S1–S3).', zh: '本公司專注為香港的小學及初中學生提供高質素的線上STEM教育。我們以互動、即時的編程課堂為核心，培養學生的創意、邏輯思維及解難能力。課程設計以趣味與實踐並重，從適合初學者的Blockly（小三至小六）到入門程式語言Python（中一至中三），讓學生循序漸進地愛上編程。' },
  
  // Mission
  'mission.title': { en: 'Our Mission', zh: '我們的宗旨' },
  'mission.point1': { en: 'Build students\' confidence in technology and coding', zh: '建立學生對科技與編程的信心' },
  'mission.point2': { en: 'Encourage problem-solving through hands-on learning', zh: '透過實作學習提升解難能力' },
  'mission.point3': { en: 'Provide a bilingual (English & Cantonese) learning environment', zh: '提供英語及廣東話雙語教學環境' },
  'mission.point4': { en: 'Make quality STEM education accessible from home', zh: '讓學生在家中也能享有優質STEM教育' },
  
  // Courses Section
  'courses.title': { en: 'Our Courses', zh: '我們的課程' },
  'courses.python.title': { en: 'Python Programming', zh: 'Python 編程' },
  'courses.python.level': { en: 'For S1-S3 Students', zh: '適合中一至中三學生' },
  'courses.python.desc': { en: 'Learn the fundamentals of Python programming with hands-on projects. Build games, applications, and develop computational thinking skills.', zh: '學習Python編程基礎，透過實作項目開發遊戲和應用程式，培養運算思維能力。' },
  'courses.blockly.title': { en: 'Google Blockly', zh: 'Google Blockly' },
  'courses.blockly.level': { en: 'For P4-P6 Students', zh: '適合小四至小六學生' },
  'courses.blockly.desc': { en: 'Start your coding journey with visual block-based programming. Perfect for beginners to understand logic and algorithms through fun, interactive lessons.', zh: '透過視覺化積木編程開始編碼之旅。適合初學者透過有趣的互動課程理解邏輯和算法。' },
  
  // Why Us Section
  'whyus.title': { en: 'Why Choose Us?', zh: '為什麼選擇我們？' },
  'whyus.founder.title': { en: 'Founder Story', zh: '創辦人故事' },
  'whyus.founder.desc': { en: 'We started this journey because we believe coding should be creative, fun, and relevant to every student\'s future. As young developers ourselves, we understand how to make programming engaging and meaningful. Our energy, combined with the guidance of experienced programmers, helps us design lessons that truly connect with students.', zh: '我們創辦這個平台，是因為我們相信「編程應該是有趣、創意並與未來息息相關」。身為年輕的程式開發者，我們比任何人更了解學生的想法，知道如何令他們投入學習。配合專業程式設計師的指導，我們的課程既專業又貼近學生。' },
  
  'whyus.strengths.title': { en: 'Our Strengths', zh: '我們的優勢' },
  'whyus.strengths.bilingual': { en: 'Bilingual Learning: English and Cantonese teaching to suit Hong Kong students.', zh: '雙語教學：提供英語及廣東話教學，配合香港學生需要。' },
  'whyus.strengths.youth': { en: 'Youth-Led Design: Lessons created by young coders who know what\'s fun and relevant.', zh: '年輕團隊設計：由年輕程式導師主導課程，更懂學生興趣與節奏。' },
  'whyus.strengths.professional': { en: 'Professional Support: Experienced programmers ensure the curriculum is solid and progressive.', zh: '專業顧問支援：經驗豐富的程式員協助課程設計，確保學習系統化。' },
  'whyus.strengths.interactive': { en: 'Interactive & Real-Time: Every class is live — no boring recordings. Students can ask, share, and create together.', zh: '互動即時教學：每堂皆為實時互動，學生可即時發問、分享與創作。' },
  
  'whyus.philosophy.title': { en: 'Teaching Philosophy', zh: '教學理念' },
  'whyus.philosophy.desc': { en: 'We believe learning to code is not just about syntax — it\'s about thinking logically, solving problems, and expressing creativity through technology. Our teaching method focuses on doing, not memorizing, so students learn by building games, animations, and mini-projects they\'re proud of.', zh: '我們相信學習編程不只是記語法，更是培養邏輯思維、解難能力與創意思考的過程。我們的教學以「動手做」為核心，讓學生透過製作遊戲、動畫及小項目，在實踐中建立信心與成就感。' },
  
  'whyus.vision.title': { en: 'Our Vision', zh: '我們的願景' },
  'whyus.vision.desc': { en: 'Our vision is to become Hong Kong\'s leading youth-driven STEM education platform — where creativity meets technology. We aim to empower more students to see coding not as homework, but as a tool to change the world.', zh: '我們的願景是成為香港最具創意的青少年STEM教育平台，讓科技成為孩子發揮創意與影響力的工具。我們希望每位學生都能從編程中發現自信與無限可能。' },
  
  // Testimonials
  'testimonials.title': { en: 'Student Testimonials', zh: '學生評價' },
  'testimonials.student1': { en: 'The classes are so engaging! I never thought coding could be this fun. I\'ve already built my own game!', zh: '課堂非常有趣！我從未想過編程可以這麼有趣。我已經製作了自己的遊戲！' },
  'testimonials.student1.name': { en: 'Alex, S2', zh: '阿浩，中二' },
  'testimonials.student2': { en: 'The teachers really understand how to explain things. I feel confident with coding now!', zh: '老師真的很懂得如何解釋。我現在對編程充滿信心！' },
  'testimonials.student2.name': { en: 'Emma, P5', zh: '艾瑪，小五' },
  'testimonials.student3': { en: 'Best decision ever! My child is so excited about every class. The bilingual teaching is perfect!', zh: '最好的決定！我的孩子對每堂課都很興奮。雙語教學非常完美！' },
  'testimonials.student3.name': { en: 'Parent of Maya', zh: '瑪雅的家長' },
  
  // Contact
  'contact.title': { en: 'Get in Touch', zh: '聯絡我們' },
  'contact.email': { en: 'Email', zh: '電郵' },
  'contact.phone': { en: 'Phone', zh: '電話' },
  'contact.message': { en: 'Message', zh: '訊息' },
  'contact.submit': { en: 'Send Message', zh: '發送訊息' },
  'contact.address': { en: 'Address', zh: '地址' },
  'footer.address': { en: 'Hong Kong', zh: '香港' },
  
  // Class Pages
  'class.curriculum': { en: 'Curriculum Overview', zh: '課程概覽' },
  'class.objectives': { en: 'Learning Objectives', zh: '學習目標' },
  'class.structure': { en: 'Class Structure', zh: '課堂結構' },
  'class.schedule': { en: 'Flexible Schedule', zh: '靈活時間表' },
  'class.enrollment': { en: 'Enroll Now', zh: '立即報名' },
  'class.level': { en: 'Level', zh: '級別' },
  'class.maxstudents': { en: 'Max Students', zh: '最多學生人數' },
  'class.format': { en: 'Format', zh: '教學形式' },
  'class.language': { en: 'Language', zh: '教學語言' },
  'class.online': { en: 'Online (Live)', zh: '線上（實時）' },
  'class.bilingual': { en: 'English & Cantonese', zh: '英語及廣東話' },
  'class.requirements': { en: 'Requirements', zh: '要求' },
  'class.computer': { en: 'Computer with internet connection', zh: '配有互聯網連接的電腦' },
  'class.python': { en: 'Python 3.x installed', zh: '已安裝 Python 3.x' },
  'class.browser': { en: 'Modern web browser', zh: '現代網絡瀏覽器' },
  'class.enthusiasm': { en: 'Enthusiasm to learn', zh: '學習熱情' },
  'class.projects': { en: 'Projects & Activities', zh: '項目與活動' },
  'class.support': { en: 'Support', zh: '支持' },
  'class.mentorship': { en: 'One-on-one mentorship available', zh: '提供一對一指導' },
  'class.community': { en: 'Community forum access', zh: '社區論壇訪問' },
  'class.resources': { en: 'Learning resources & materials', zh: '學習資源和材料' },
  
  // Python Class
  'python.title': { en: 'Python Programming for S1-S3', zh: '中一至中三 Python 編程' },
  'python.desc': { en: 'Learn professional programming with Python, the most popular language for beginners and professionals alike.', zh: '使用 Python 學習專業編程，這是初學者和專業人士最受歡迎的語言。' },
  'python.obj1': { en: 'Master Python fundamentals and syntax', zh: '掌握 Python 基礎和語法' },
  'python.obj2': { en: 'Build real-world applications and games', zh: '構建真實應用程序和遊戲' },
  'python.obj3': { en: 'Develop problem-solving and computational thinking skills', zh: '培養解決問題和運算思維能力' },
  'python.obj4': { en: 'Collaborate and present your projects', zh: '協作和展示你的項目' },
  'python.module1': { en: 'Module 1: Python Basics', zh: '模塊 1：Python 基礎' },
  'python.module1.desc': { en: 'Variables, data types, operators, and basic control flow', zh: '變量、數據類型、運算符和基本控制流' },
  'python.module2': { en: 'Module 2: Functions & Logic', zh: '模塊 2：函數和邏輯' },
  'python.module2.desc': { en: 'Writing functions, conditional statements, and loops', zh: '編寫函數、條件語句和循環' },
  'python.module3': { en: 'Module 3: Data Structures', zh: '模塊 3：數據結構' },
  'python.module3.desc': { en: 'Lists, dictionaries, tuples, and file handling', zh: '列表、字典、元組和文件處理' },
  'python.module4': { en: 'Module 4: Projects & Applications', zh: '模塊 4：項目和應用程序' },
  'python.module4.desc': { en: 'Build games, web scrapers, and real-world applications', zh: '構建遊戲、網絡爬蟲和真實應用程序' },
  
  // Blockly Class
  'blockly.title': { en: 'Google Blockly for P4-P6', zh: '小四至小六 Google Blockly' },
  'blockly.desc': { en: 'Start your coding journey with visual block-based programming. No prior experience needed!', zh: '透過視覺化積木編程開始編碼之旅。無需先前經驗！' },
  'blockly.obj1': { en: 'Understand fundamental programming concepts through visual blocks', zh: '通過視覺積木理解基本編程概念' },
  'blockly.obj2': { en: 'Create interactive games and animations', zh: '創建互動遊戲和動畫' },
  'blockly.obj3': { en: 'Develop logical thinking and problem-solving abilities', zh: '培養邏輯思維和解決問題的能力' },
  'blockly.obj4': { en: 'Build confidence in technology and coding', zh: '建立對技術和編程的信心' },
  'blockly.module1': { en: 'Module 1: Introduction to Blocks', zh: '模塊 1：積木介紹' },
  'blockly.module1.desc': { en: 'Understanding the Blockly interface and basic blocks', zh: '了解 Blockly 界面和基本積木' },
  'blockly.module2': { en: 'Module 2: Logic & Loops', zh: '模塊 2：邏輯和循環' },
  'blockly.module2.desc': { en: 'Conditional statements and repetition with loops', zh: '條件語句和循環重複' },
  'blockly.module3': { en: 'Module 3: Variables & Lists', zh: '模塊 3：變量和列表' },
  'blockly.module3.desc': { en: 'Storing and managing data with variables and lists', zh: '使用變量和列表存儲和管理數據' },
  'blockly.module4': { en: 'Module 4: Create Your Game', zh: '模塊 4：創建你的遊戲' },
  'blockly.module4.desc': { en: 'Design and build your own interactive game project', zh: '設計和構建你自己的互動遊戲項目' },
  
  // Footer
  'footer.copyright': { en: '© 2024 Code Adventures, Hong Kong. All rights reserved.', zh: '© 2024 Code Adventures，香港。版權所有。' },
  'footer.followus': { en: 'Follow Us', zh: '追蹤我們' },
  'footer.privacy': { en: 'Privacy Policy', zh: '隱私政策' },
  'footer.terms': { en: 'Terms of Service', zh: '服務條款' },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
