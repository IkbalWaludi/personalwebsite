// src/services/languageService.js
class LanguageService {
  constructor() {
    // Default language is English
    this.currentLanguage = localStorage.getItem('appLanguage') || 'EN';
    this.listeners = [];
  }

  // Get current language
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // Set language and notify listeners
  setLanguage(language) {
    this.currentLanguage = language;
    localStorage.setItem('appLanguage', language);
    this.notifyListeners();
  }

  // Toggle between English and Indonesian
  toggleLanguage() {
    this.setLanguage(this.currentLanguage === 'EN' ? 'ID' : 'EN');
  }

  // Add listener for language changes
  addListener(callback) {
    this.listeners.push(callback);
  }

  // Remove listener
  removeListener(callback) {
    const index = this.listeners.indexOf(callback);
    if (index > -1) {
      this.listeners.splice(index, 1);
    }
  }

  // Notify all listeners of language change
  notifyListeners() {
    this.listeners.forEach(callback => callback(this.currentLanguage));
  }

  // Get translated text based on current language
  t(key) {
    const translations = {
      // Settings page translations

      
      // Home page translations
      'HOME_TITLE': {
        'EN': 'Hideout',
        'ID': 'Markas'
      },
      'PERSONAL_PROFILE': {
        'EN': 'ABOUT ME',
        'ID': 'ABOUT ME'
      },
      'HOBBIES': {
        'EN': 'Interests',
        'ID': 'Minat dan Kegiatan'
      },
      'VIEW_PROJECTS': {
        'EN': 'VIEW PROJECTS',
        'ID': 'LIHAT PROYEK'
      },
      'CONTACT_ME': {
        'EN': 'CONTACT ME',
        'ID': 'HUBUNGI SAYA'
      },
      'START_BATTLE': {
        'EN': 'START BATTLE',
        'ID': 'MULAI PERTARUNGAN'
      },
      'SWITCH_CHARACTER': {
        'EN': 'SWITCH CHARACTER',
        'ID': 'GANTI KARAKTER'
      },

      

      

      


      
      // Navbar translations
      'MARKAS': {
        'EN': 'MARKAS',
        'ID': 'MARKAS'
      },
      'HOME': {
        'EN': 'HOME',
        'ID': 'BERANDA'
      },

      'PROJECTS_TITLE': {
        'EN': 'PROJECT LIST',
        'ID': 'DAFTAR PROYEK'
      },
      'PROJECTS_NAV': {
        'EN': 'PROJECTS',
        'ID': 'PROYEK'
      },
      'CONTACT_NAV': {
        'EN': 'CONTACT',
        'ID': 'KONTAK'
      },
      'PORTFOLIO_NAV': {
        'EN': 'PORTFOLIO',
        'ID': 'PORTOFOLIO'
      },
      'CONTACT_INFO': {
        'EN': 'CONTACT INFORMATION',
        'ID': 'INFORMASI KONTAK'
      },
      'GET_IN_TOUCH': {
        'EN': 'GET IN TOUCH',
        'ID': 'HUBUNGI SAYA'
      },
      'CONTACT_INTRO_TEXT': {
        'EN': 'Feel free to reach out to me for any inquiries, collaborations, or just to say hello!',
        'ID': 'Jangan ragu menghubungi saya untuk pertanyaan, kolaborasi, atau sekadar menyapa!'
      },
      'EMAIL': {
        'EN': 'Email',
        'ID': 'Email'
      },
      'PHONE': {
        'EN': 'Phone',
        'ID': 'Telepon'
      },
      'LOCATION': {
        'EN': 'Location',
        'ID': 'Lokasi'
      },
      'LINKEDIN': {
        'EN': 'LinkedIn',
        'ID': 'LinkedIn'
      },
      'TIKTOK': {
        'EN': 'TikTok',
        'ID': 'TikTok'
      },
      'SEND_MESSAGE': {
        'EN': 'SEND MESSAGE',
        'ID': 'KIRIM PESAN'
      },
      'NAME_LABEL': {
        'EN': 'Name',
        'ID': 'Nama'
      },
      'NAME_PLACEHOLDER': {
        'EN': 'Enter your name',
        'ID': 'Masukkan nama Anda'
      },
      'EMAIL_LABEL': {
        'EN': 'Email',
        'ID': 'Email'
      },
      'EMAIL_PLACEHOLDER': {
        'EN': 'Enter your email',
        'ID': 'Masukkan email Anda'
      },
      'SUBJECT_LABEL': {
        'EN': 'Subject',
        'ID': 'Subjek'
      },
      'SUBJECT_PLACEHOLDER': {
        'EN': 'Enter subject',
        'ID': 'Masukkan subjek'
      },
      'MESSAGE_LABEL': {
        'EN': 'Message',
        'ID': 'Pesan'
      },
      'MESSAGE_PLACEHOLDER': {
        'EN': 'Enter your message...',
        'ID': 'Masukkan pesan Anda...'
      },
      'SEND_BUTTON': {
        'EN': 'Send Message',
        'ID': 'Kirim Pesan'
      },
      'MESSAGE_SENT': {
        'EN': 'Message sent successfully!',
        'ID': 'Pesan berhasil dikirim!'
      },
      'PORTFOLIO': {
        'EN': 'PORTFOLIO',
        'ID': 'PORTOFOLIO'
      },
      'FULL_STACK_DEVELOPER': {
        'EN': 'Full Stack Developer',
        'ID': 'Pengembang Full Stack'
      },
      'PROFILE_BIO': {
        'EN': 'Passionate developer with 5+ years of experience in building scalable web applications and leading development teams.',
        'ID': 'Pengembang yang bersemangat dengan pengalaman lebih dari 5 tahun dalam membangun aplikasi web yang skalabel dan memimpin tim pengembangan.'
      },
      'EXPERIENCE': {
        'EN': 'EXPERIENCE',
        'ID': 'PENGALAMAN'
      },
      'EDUCATION_PORTFOLIO': {
        'EN': 'EDUCATION',
        'ID': 'PENDIDIKAN'
      },
      'SKILLS_PORTFOLIO': {
        'EN': 'SKILLS',
        'ID': 'KEAHLIAN'
      },
      'ACHIEVEMENTS_PORTFOLIO': {
        'EN': 'ACHIEVEMENTS',
        'ID': 'PRESTASI'
      },
      'SENIOR_DEVELOPER': {
        'EN': 'Senior Developer',
        'ID': 'Pengembang Senior'
      },
      'SENIOR_DEV_DESC': {
        'EN': 'Lead development of enterprise-scale applications using Vue.js, Node.js, and cloud technologies.',
        'ID': 'Memimpin pengembangan aplikasi skala perusahaan menggunakan Vue.js, Node.js, dan teknologi cloud.'
      },
      'JUNIOR_DEVELOPER': {
        'EN': 'Junior Developer',
        'ID': 'Pengembang Junior'
      },
      'JUNIOR_DEV_DESC': {
        'EN': 'Developed and maintained web applications with React and Express.js frameworks.',
        'ID': 'Mengembangkan dan memelihara aplikasi web dengan framework React dan Express.js.'
      },
      'MASTERS_CS': {
        'EN': 'Master of Computer Science',
        'ID': 'Magister Ilmu Komputer'
      },
      'MASTERS_DESC': {
        'EN': 'Specialized in Software Engineering and Distributed Systems',
        'ID': 'Spesialisasi dalam Teknik Perangkat Lunak dan Sistem Terdistribusi'
      },
      'BACHELORS_CS': {
        'EN': 'Bachelor of Computer Science',
        'ID': 'Sarjana Ilmu Komputer'
      },
      'BACHELORS_DESC': {
        'EN': 'Focus on Web Development and Database Systems',
        'ID': 'Fokus pada Pengembangan Web dan Sistem Basis Data'
      },
      'FRONTEND_SKILL': {
        'EN': 'Frontend',
        'ID': 'Frontend'
      },
      'BACKEND_SKILL': {
        'EN': 'Backend',
        'ID': 'Backend'
      },
      'DATABASE_SKILL': {
        'EN': 'Database',
        'ID': 'Basis Data'
      },
      'CLOUD_SKILL': {
        'EN': 'Cloud',
        'ID': 'Cloud'
      },
      'MOBILE_SKILL': {
        'EN': 'Mobile',
        'ID': 'Mobile'
      },
      'DEVOPS_SKILL': {
        'EN': 'DevOps',
        'ID': 'DevOps'
      },
      'AWS_CERTIFIED': {
        'EN': 'AWS Certified Solutions Architect',
        'ID': 'Arsitek Solusi Bersertifikat AWS'
      },
      'AWS_CERTIFIED_DESC': {
        'EN': 'Professional certification in cloud architecture and deployment',
        'ID': 'Sertifikasi profesional dalam arsitektur dan deployment cloud'
      },
      'OPEN_SOURCE_CONTRIBUTOR': {
        'EN': 'Open Source Contributor',
        'ID': 'Kontributor Open Source'
      },
      'OPEN_SOURCE_DESC': {
        'EN': 'Active contributor to popular JavaScript frameworks and libraries',
        'ID': 'Kontributor aktif untuk framework dan library JavaScript populer'
      },
      'TEAM_LEAD_AWARD': {
        'EN': 'Outstanding Team Lead Award',
        'ID': 'Penghargaan Ketua Tim Terbaik'
      },
      'TEAM_LEAD_DESC': {
        'EN': 'Recognized for exceptional leadership in software development projects',
        'ID': 'Diakui karena kepemimpinan luar biasa dalam proyek pengembangan perangkat lunak'
      }
      ,
      // Portfolio specific translations
      'PROFILE_NAME': {
        'EN': 'Ikbal Waludi',
        'ID': 'Ikbal Waludi'
      },
      'DOB_LABEL': {
        'EN': 'Date of birth',
        'ID': 'Tanggal lahir'
      },
      'NATIONALITY_LABEL': {
        'EN': 'Nationality',
        'ID': 'Kewarganegaraan'
      },
      'ADDRESS_LABEL': {
        'EN': 'Address',
        'ID': 'Alamat'
      },
      'EDUCATION': {
        'EN': 'Education',
        'ID': 'Pendidikan'
      },
      'EDU_DEGREE': {
        'EN': 'Bachelor of Computer Science — Brawijaya University',
        'ID': 'Sarjana Ilmu Komputer — Universitas Brawijaya'
      },
      'EDU_DATES': {
        'EN': '19 August 2019 – 28 April 2025 • Malang, Indonesia',
        'ID': '19 Agustus 2019 – 28 April 2025 • Malang, Indonesia'
      },
      'EDU_OVERVIEW_1': {
        'EN': 'I earned a Bachelor of Computer Science (Sarjana Komputer) in Information Technology from Universitas Brawijaya. The program provided in-depth training in Software Development, Data Architecture, and Advanced Algorithm Design.',
        'ID': 'Saya meraih gelar Sarjana Ilmu Komputer (Sarjana Komputer) dalam bidang Teknologi Informasi dari Universitas Brawijaya. Program ini memberikan pelatihan mendalam dalam Pengembangan Perangkat Lunak, Arsitektur Data, dan Perancangan Algoritma Lanjutan.'
      },
      'EDU_OVERVIEW_2': {
        'EN': 'For my final research, I focused on Text-to-Speech (TTS) synthesis using the Tacotron 2 deep learning model for Indonesian. The work included high-quality data curation and extensive model training.',
        'ID': 'Untuk penelitian akhir, saya fokus pada sintesis Text-to-Speech (TTS) menggunakan model deep learning Tacotron 2 untuk bahasa Indonesia. Pekerjaan ini mencakup kurasi data berkualitas tinggi dan pelatihan model yang intensif.'
      },
      'EDU_OVERVIEW_3': {
        'EN': 'I validated the system using the Perceptual Evaluation of Speech Quality (PESQ) method, demonstrating analytical rigor and applied knowledge in Deep Learning and Natural Language Processing (NLP).',
        'ID': 'Saya memvalidasi sistem menggunakan metode Perceptual Evaluation of Speech Quality (PESQ), menunjukkan ketelitian analitis dan pengetahuan terapan dalam Deep Learning dan Natural Language Processing (NLP).'
      },
      'WEBSITE_LABEL': {
        'EN': 'Website',
        'ID': 'Situs web'
      },
      'FINAL_GRADE_LABEL': {
        'EN': 'Final grade',
        'ID': 'Nilai akhir'
      },
      'EQF_LABEL': {
        'EN': 'Level in EQF',
        'ID': 'Level dalam EQF'
      },
      'THESIS_LABEL': {
        'EN': 'Thesis',
        'ID': 'Tesis'
      },
      'LINK_LABEL': {
        'EN': 'Link',
        'ID': 'Tautan'
      },
      'WORK_ROLE_BIZNIZO': {
        'EN': 'Web developer – Biznizo',
        'ID': 'Web developer – Biznizo'
      },
      'WORK_DATES_BIZNIZO': {
        'EN': '2 May 2025 – 10 October 2025 • Malang, Indonesia',
        'ID': '2 Mei 2025 – 10 Oktober 2025 • Malang, Indonesia'
      },
      'WORK_DESC_1': {
        'EN': 'Frontend Development & UI/UX Implementation: Developed and maintained responsive user interfaces (UIs) using Vue.js for high-conversion web applications, ensuring optimal cross-browser and cross-device performance.',
        'ID': 'Frontend Development & UI/UX Implementation: Mengembangkan dan memelihara antarmuka pengguna responsif menggunakan Vue.js untuk aplikasi web dengan konversi tinggi, memastikan performa optimal lintas-browser dan perangkat.'
      },
      'WORK_DESC_2': {
        'EN': 'API and Backend Integration: Managed integration of APIs and utilized PHP for core data connection, ensuring seamless data flow between the frontend architecture and backend services.',
        'ID': 'API and Backend Integration: Mengelola integrasi API dan menggunakan PHP untuk koneksi data inti, memastikan aliran data yang mulus antara arsitektur frontend dan layanan backend.'
      },
      'WORK_DESC_3': {
        'EN': 'Workflow Optimization (AI/LLM): Leveraged advanced AI and Large Language Model (LLM) tools (such as Qoder and Cursor) to significantly accelerate coding efficiency, streamlining development workflows by up to 90%.',
        'ID': 'Workflow Optimization (AI/LLM): Memanfaatkan alat AI canggih dan Large Language Model (LLM) (seperti Qoder dan Cursor) untuk mempercepat efisiensi pengkodean secara signifikan, menyederhanakan alur kerja pengembangan hingga 90%.'
      },
      'WORK_DESC_4': {
        'EN': 'App Conversion and Deployment Management: Successfully managed the entire distribution cycle of applications, ensuring compliance and smooth deployment protocols for both the iOS App Store and Google Play.',
        'ID': 'App Conversion and Deployment Management: Berhasil mengelola seluruh siklus distribusi aplikasi, memastikan kepatuhan dan protokol deployment yang lancar untuk App Store iOS dan Google Play.'
      },
      'WORK_DESC_5': {
        'EN': 'Quality Assurance (QA) Oversight: Conducted thorough testing and debugging processes to maintain high standards of application quality and stability prior to public release.',
        'ID': 'Quality Assurance (QA) Oversight: Melakukan pengujian dan debugging menyeluruh untuk menjaga standar kualitas dan stabilitas aplikasi sebelum rilis publik.'
      }
      ,
      'FINAL_GRADE_VALUE': {
        'EN': 'Very Satisfactory',
        'ID': 'Sangat Memuaskan'
      },
      'THESIS_TITLE': {
        'EN': 'Conversion of Prompts to Indonesian-Language Speech using Tacotron 2',
        'ID': 'Konversi Prompt menjadi Ucapan Bahasa Indonesia menggunakan Tacotron 2'
      },
      'THESIS_LINK_TEXT': {
        'EN': 'View thesis',
        'ID': 'Lihat tesis'
      }
      ,
      'NATIONALITY_VALUE': {
        'EN': 'Indonesian',
        'ID': 'Indonesia'
      },
      'ADDRESS_VALUE': {
        'EN': 'Nusa Tenggara Barat, Sumbawa Besar',
        'ID': 'Nusa Tenggara Barat, Sumbawa Besar'
      }
      ,
      'CERTIFICATES': {
        'EN': 'Certificates',
        'ID': 'Sertifikat'
      }
      ,
      'LANGUAGE_PROFICIENCY': {
        'EN': 'Language Proficiency',
        'ID': 'Kemampuan Bahasa'
      },
      'OVERALL_SCORE': {
        'EN': 'Overall Score',
        'ID': 'Skor Keseluruhan'
      },
      'CEFR_LEVEL': {
        'EN': 'CEFR',
        'ID': 'CEFR'
      },
      'SPEAKING': {
        'EN': 'Speaking',
        'ID': 'Berbicara'
      },
      'WRITING': {
        'EN': 'Writing',
        'ID': 'Menulis'
      },
      'READING': {
        'EN': 'Reading',
        'ID': 'Membaca'
      },
      'LISTENING': {
        'EN': 'Listening',
        'ID': 'Mendengarkan'
      },
      'PRODUCTION': {
        'EN': 'Production',
        'ID': 'Produksi'
      },
      'LITERACY': {
        'EN': 'Literacy',
        'ID': 'Literasi'
      },
      'COMPREHENSION': {
        'EN': 'Comprehension',
        'ID': 'Pemahaman'
      },
      'CONVERSATION': {
        'EN': 'Conversation',
        'ID': 'Percakapan'
      }
    };

    const translation = translations[key];
    if (translation) {
      return translation[this.currentLanguage] || translation['EN'];
    }
    return key; // Return the key if no translation found
  }
}

// Create a single instance of the service
const languageService = new LanguageService();

export default languageService;