<template>
  <div class="projects-container">
    <div class="header-section">
      <h1 class="title">{{ $t('PROJECTS_TITLE') }}</h1>
    </div>

    <div class="projects-grid">
      <div class="project-card" v-for="project in projects" :key="project.id">
        <div class="project-image-container">
          <iframe 
            v-if="project.id === 1 && project.youtubeUrl" 
            :src="getYoutubeEmbedUrl(project.youtubeUrl)" 
            class="video-embed" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
          <iframe 
            v-else-if="project.id === 2 && project.driveUrl" 
            :src="getDriveEmbedUrl(project.driveUrl)" 
            class="video-embed" 
            frameborder="0" 
            allow="autoplay" 
            allowfullscreen>
          </iframe>
          <iframe 
            v-else-if="project.id === 3 && project.youtubeUrl" 
            :src="getYoutubeEmbedUrl(project.youtubeUrl)" 
            class="video-embed" 
            frameborder="0" 
            allowfullscreen>
          </iframe>
          <img 
            v-else 
            :src="project.image" 
            :alt="project.title" 
            class="project-image" 
            @error="handleProjectImageError" 
          />
        </div>
        <div class="project-content">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description[currentLanguage] }}</p>
          <div class="project-tech-stack">
            <span class="tech-tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
          <div class="project-links">
            <a :href="project.demo" target="_blank" class="project-link demo-link" v-if="project.demo">
              <i class="fas fa-external-link-alt"></i> Link
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languageService from '@/services/languageService';

export default {
  name: 'ProjectsPage',
  data() {
    return {
      currentLanguage: languageService.getCurrentLanguage(),
      projects: [
        {
          id: 1,
          title: 'Flashinobi',
          description: {
            EN: 'Successfully developed and solo-released the Flashinobi mobile game, an intense 2D action-arcade title featuring a unique teleportation combat mechanic, publicly maintained on the Google Play Store for Android. This project showcases comprehensive expertise in full-stack game development using Unity (C#) for core logic, combo systems, and intricate Tween Animation.',
            ID: 'Berhasil mengembangkan dan merilis sendiri game mobile Flashinobi — game aksi-arcade 2D yang intens dengan mekanik teleportasi yang unik. Game ini dipublikasikan di Google Play Store untuk Android dan menampilkan kemampuan mendalam saya dalam pengembangan game full-stack menggunakan Unity (C#), termasuk logika inti, sistem combo, dan Tween Animation yang rumit.'
          },
          tech: ['Unity', 'C#', 'Tween Animation', 'Google Play Store'],
          youtubeUrl: 'https://www.youtube.com/watch?v=L-Dk8XjWezc',
          demo: 'https://play.google.com/store/apps/details?id=com.kebalikstudio.flashinobi'
        },
        {
          id: 2,
          title: 'AL HIDAYAH UE5 MODEL',
          description: {
            EN: 'Completed an advanced, self-taught project centered on 3D Architectural Environment Modeling and Real-Time Visualization (Mosque Project). This complex endeavor involved creating and managing high-detail architectural assets, leveraging the full capabilities of Unreal Engine 5 for seamless asset integration, realistic lighting setup, material creation, and final rendering. The project successfully validates my proficiency in AAA engine workflow management, expertise in creating high-fidelity visual assets, and comprehensive mastery of the real-time visualization pipeline within Unreal Engine 5.',
            ID: 'Menyelesaikan proyek tingkat lanjut yang saya pelajari otodidak, berfokus pada pemodelan lingkungan arsitektur 3D dan visualisasi real-time (Proyek Masjid). Proyek ini melibatkan pembuatan dan pengelolaan aset arsitektur beresolusi tinggi, pemakaian penuh Unreal Engine 5 untuk integrasi aset, pengaturan pencahayaan realistis, pembuatan material, dan rendering akhir.'
          },
          tech: ['Unreal Engine 5', '3D Modeling', 'Architectural Visualization', 'Real-time Rendering'],
          driveUrl: 'https://drive.google.com/file/d/1kMAHVioRd77azNdZWvlR0xR1B6gVwOwy/view',
          demo: '#'
        },
        {
          id: 3,
          title: 'HERO DESIGN CONTEST (Winner)',
          description: {
            EN: 'Participated in the One Punch Man World Hero Design Contest, where I secured 1st Place. The contest only asked for skill designs, but I went above and beyond by using free community assets in Garry\'s Mod and manually creating frame-by-frame animations to demonstrate my ideas. This extra effort showcased my ability to leverage available resources to create high-quality presentations and validate my creativity and dedication to excellence.',
            ID: 'Ikut One Punch Man World Hero Design Contest dan meraih Juara 1. Meski kontes hanya meminta desain skill, saya berinisiatif pakai aset komunitas gratis di Garry\'s Mod dan membuat animasi frame-by-frame manual untuk mendemokan ide saya.'
          },
          tech: ['Garry\'s Mod', 'Animation', 'Game Design', 'Creative Presentation'],
          youtubeUrl: 'https://www.youtube.com/watch?v=Az5wxjD6XSA',
          demo: '#'
        },
        {
          id: 4,
          title: 'Game Prototypes and Animation',
          description: {
            EN: 'Maintained a public digital portfolio on TikTok dedicated to Creative Works and Rapid Prototyping, utilizing my skills in 2D/3D Animation and quick game development. This platform serves as a showcase for various game prototypes and animations, demonstrating strong visual storytelling ability and production quality. Successfully managed to build an organic audience of over 8,000 followers and generate significant content reach, with several posts achieving views in the millions, validating my expertise in content creation, audience engagement, and digital virality.',
            ID: 'Menjaga portofolio publik di TikTok yang fokus pada karya kreatif dan rapid prototyping, memanfaatkan keahlian saya di animasi 2D/3D dan pengembangan game cepat. Platform ini menampilkan berbagai prototipe game dan animasi serta membuktikan kemampuan storytelling visual dan kualitas produksi saya.'
          },
          tech: ['TikTok', '2D/3D Animation', 'Game Prototyping', 'Content Creation'],
          image: '/src/assets/tiktok.png',
          demo: 'https://www.tiktok.com/@kebalikstudio'
        }
      ]
    };
  },
  mounted() {
    // Register language change listener
    this._languageHandler = (newLang) => {
      this.currentLanguage = newLang;
    };
    languageService.addListener(this._languageHandler);
  },
  beforeUnmount() {
    // Cleanup language listener
    if (this._languageHandler) {
      languageService.removeListener(this._languageHandler);
    }
  },
  methods: {
    $t(key) {
      return languageService.t(key);
    },
    handleProjectImageError(event) {
      // Fallback to a default image
      event.target.src = '/src/assets/Rojali.png';
    },
    getYoutubeEmbedUrl(url) {
      // Convert YouTube watch URL to embed URL
      let embedUrl;
      if (url.includes('watch?v=')) {
        embedUrl = url.replace('watch?v=', 'embed/');
      } else if (url.includes('youtu.be/')) {
        embedUrl = url.replace('youtu.be/', 'youtube.com/embed/');
      } else {
        embedUrl = url;
      }
      
      // Add autoplay and other parameters
      const separator = embedUrl.includes('?') ? '&' : '?';
      return `${embedUrl}${separator}autoplay=1&mute=1`;
    },
    getDriveEmbedUrl(url) {
      // Extract file ID from Google Drive URL
      const regex = new RegExp('/file/d/([^/]+)/');
      const fileIdMatch = url.match(regex);
      if (fileIdMatch && fileIdMatch[1]) {
        // Return Google Drive embed URL - note that Google Drive may restrict embedding
        // depending on the file's sharing settings
        return `https://drive.google.com/file/d/${fileIdMatch[1]}/preview`;
      }
      return url;
    }
  },
}
</script>

<style scoped>
.projects-container {
  position: relative;
  height: 100%;
  width: 100%;
  background: linear-gradient(160deg, #ffe27d, #ffa54c, #ff7b2c);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: min(4vh, 4vw);
  box-sizing: border-box;
  overflow-y: auto;
  gap: min(4vh, 4vw);
}

/* Custom Scrollbar */
.projects-container::-webkit-scrollbar {
  width: 12px;
}

.projects-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}

.projects-container::-webkit-scrollbar-thumb {
  background: linear-gradient(160deg, #ffcc00, #ff6b35);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

.projects-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(160deg, #ff6b35, #ffcc00);
}

.header-section {
  width: 100%;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: min(7vh, 15vw);
}

.title {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  letter-spacing: min(0.3vw, 0.3vh);
  text-shadow: min(0.3vw, 0.3vh) min(0.3vw, 0.3vh) 0 #000000, 0 0 min(1.5vw, 1.5vh) #ffcc00;
  font-size: min(5vw, 5vh, 4.5rem);
  color: white;
  margin: 0;
  font-weight: bold;
  animation: title-glow 3s infinite ease-in-out;
  line-height: 1.2;
}

.projects-grid {
  display: flex;
  flex-direction: column;
  gap: min(3vh, 3vw);
  width: 100%;
  padding: min(2vh, 2vw);
  box-sizing: border-box;
}

.project-card {
  background: rgba(255, 255, 255, 0.9);
  border-radius: min(2.5vw, 2.5vh);
  overflow: hidden;
  box-shadow: 0 min(0.8vh, 0.8vw) min(2vh, 2vw) rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: min(70vh, 600px);
  width: 100%;
}

.project-card:hover {
  transform: translateY(min(-0.5vh, -0.5vw));
  box-shadow: 0 min(1vh, 1vw) min(2vh, 2vw) rgba(0, 0, 0, 0.4);
}

.project-image-container {
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  background-color: #000000; /* Black background to fill space around the image */
}

.video-embed {
  width: 100%;
  height: 100%;
  border: none;
}

.project-card:hover .project-image {
  transform: scale(1.05);
}

.project-content {
  padding: min(2vh, 2vw);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.project-title {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(3vw, 3vh, 2.2rem);
  color: #4f2c00;
  margin: 0 0 min(1.5vh, 1.5vw) 0;
  text-shadow: min(0.15vw, 0.15vh) min(0.15vw, 0.15vh) 0 rgba(0,0,0,0.1);
}

.project-description {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.8vw, 1.8vh, 1.2rem);
  color: #4f2c00;
  margin: 0 0 min(2vh, 2vw) 0;
  line-height: 1.5;
  flex-grow: 1;
}

.project-tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: min(0.8vw, 0.8vh);
  margin-bottom: min(1.5vh, 1.5vw);
}

.tech-tag {
  background: linear-gradient(160deg, #4a9bff, #1a5a9a);
  color: white;
  padding: min(0.8vh, 0.8vw) min(1.5vw, 1.5vh);
  border-radius: min(1.2vw, 1.2vh);
  font-size: min(1.4vw, 1.4vh, 1.1rem);
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
}

.project-links {
  display: flex;
  gap: min(1vw, 1vh);
}

.project-link {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.6vw, 1.6vh, 1.2rem);
  padding: min(1.2vh, 1.2vw) min(2vw, 2vh);
  border-radius: min(1.2vw, 1.2vh);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: min(0.8vw, 0.8vh);
  transition: all 0.3s ease;
}

.github-link {
  background: linear-gradient(160deg, #333, #000);
  color: white;
}

.github-link:hover {
  background: linear-gradient(160deg, #444, #222);
  transform: translateY(min(-0.2vh, -0.2vw));
}

.demo-link {
  background: linear-gradient(160deg, #4CAF50, #2E7D32);
  color: white;
}

.demo-link:hover {
  background: linear-gradient(160deg, #66BB6A, #388E3C);
  transform: translateY(min(-0.2vh, -0.2vw));
}

@keyframes title-glow {
  0%, 100% {
    text-shadow: min(0.3vw, 0.3vh) min(0.3vw, 0.3vh) 0 #000000, 0 0 min(1.5vw, 1.5vh) #ffcc00;
  }
  50% {
    text-shadow: min(0.3vw, 0.3vh) min(0.3vw, 0.3vh) 0 #000000, 0 0 min(2.5vw, 2.5vh) #ffcc00, 0 0 min(3.5vw, 3.5vh) #ffcc00;
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .project-image-container {
    height: 300px;
  }
  
  .project-card {
    min-height: auto;
  }
}
</style>