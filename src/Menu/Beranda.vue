<template>
  <div class="beranda-container">
    <!-- Header Section -->
    <div class="header-section">
      <h1 class="title">{{ $t('PERSONAL_PROFILE') }}</h1>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Character Display Area -->
      <div class="profile-section">
        <div class="profile-visual">
          <div class="profile-frame">
            <img 
              :src="personalInfo.image" 
              :alt="personalInfo.name" 
              class="profile-image"
              @error="handleImageError"
            />
          </div>
        </div>
        
        <div class="profile-info">
          <div class="profile-details">
            <div class="profile-name">{{ personalInfo.name }}</div>
            <div class="profile-role">{{ personalInfo.role }}</div>
            <div class="profile-bio">{{ personalInfo.bio }}</div>
          </div>
          
          <div class="contact-info">
            <div class="contact-item">
              <i class="fas fa-envelope"></i> {{ personalInfo.contact.email }}
            </div>
            <div class="contact-item">
              <i class="fas fa-phone"></i> {{ personalInfo.contact.phone }}
            </div>
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i> {{ personalInfo.contact.location }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Hobbies Label and Cards -->
    <div class="hobbies-section">
      <div class="hobbies-label">{{ $t('HOBBIES') }}</div>
      <div class="info-cards">
        <div class="info-card games-card">
          <div class="card-content">
            <i class="card-icon fas fa-gamepad"></i>
            <div class="card-info">
              <div class="card-title">Gaming</div>
              <div class="card-detail">Favorite Games</div>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>
        
        <div class="info-card youtube-card">
          <div class="card-content">
            <i class="card-icon fab fa-youtube"></i>
            <div class="card-info">
              <div class="card-title">YouTube</div>
              <div class="card-detail">Creative Content</div>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>
        
        <div class="info-card coding-card">
          <div class="card-content">
            <i class="card-icon fas fa-code"></i>
            <div class="card-info">
              <div class="card-title">Coding</div>
              <div class="card-detail">Code & Game Dev</div>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>
        
        <div class="info-card art-card">
          <div class="card-content">
            <i class="card-icon fas fa-paint-brush"></i>
            <div class="card-info">
              <div class="card-title">Art & Design</div>
              <div class="card-detail">2D/3D Art & Animation</div>
            </div>
          </div>
          <div class="card-glow"></div>
        </div>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="decoration-corner top-left"></div>
    <div class="decoration-corner top-right"></div>
    <div class="decoration-corner bottom-left"></div>
    <div class="decoration-corner bottom-right"></div>
  </div>
</template>

<script>
import languageService from '@/services/languageService';

export default {
  name: 'BerandaPage',
  data() {
    return {
      personalInfo: {
        name: 'Ikbal Waludi',
        role: 'Game Developer / Animator',
        image: '/src/assets/foto.png', // Your profile photo
        bio: 'Creative generalist passionate about game development, animation, and interactive media',
        contact: {
          email: 'ikbalwwaludi@gmail.com',
          phone: '+6282-339-614-000',
          location: 'Indonesia'
        }
      }
    };
  },
  computed: {

  },
  methods: {
    handleImageError(event) {
      // Fallback to profile photo
      event.target.src = '/src/assets/foto.png';
    },
    $t(key) {
      return languageService.t(key);
    },

  },
  mounted() {
  }
}
</script>

<style scoped>
/* ===================================
      BASE STYLES & RESET
    =================================== */
.beranda-container {
  position: relative;
  height: 100%;
  width: 100%;
  background: linear-gradient(160deg, #ffe27d, #ffa54c, #ff7b2c);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: min(4vh, 4vw);
  box-sizing: border-box;
  overflow-y: auto;
  gap: min(4vh, 4vw);
}

/* ===================================
      HEADER SECTION
    =================================== */
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
  font-size: min(6vw, 6vh, 5.5rem);
  color: white;
  margin: 0;
  font-weight: bold;
  animation: title-glow 3s infinite ease-in-out;
  line-height: 1.2;
}

/* ===================================
      MAIN CONTENT LAYOUT
    =================================== */
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow: hidden;
}

/* ===================================
      PROFILE SECTION
    =================================== */
.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: min(2vh, 2vw);
  width: 100%;
  max-width: min(90vw, 1200px);
  height: min(60vh, 650px);
  max-height: min(70vh, 700px);
  padding: min(4vh, 4vw);
  background: rgba(255, 255, 255, 0.15);
  border-radius: min(2.5vw, 2.5vh);
  box-shadow: 
    0 min(1vh, 1vw) min(2.5vh, 2.5vw) rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(min(1vw, 1vh));
  border: min(0.4vw, 0.4vh) solid rgba(255, 204, 0, 0.4);
  position: relative;
  overflow: hidden;
}

/* Layout otomatis responsive berdasarkan lebar container */
@media (orientation: landscape) and (min-height: 400px) {
  .profile-section {
    flex-direction: row;
  }
}

.profile-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(255, 204, 0, 0.1) 0%,
    rgba(255, 165, 0, 0.1) 50%,
    rgba(255, 204, 0, 0.1) 100%);
  z-index: -1;
  border-radius: inherit;
}

/* ===================================
      PROFILE VISUAL
    =================================== */
.profile-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: min(0.5vh, 0.5vw);
  height: 100%;
  flex: 1;
  min-width: 0;
}

.profile-frame {
  position: relative;
  width: 100%;
  max-width: min(35vw, 35vh, 350px);
  aspect-ratio: 1;
  border-radius: min(2.5vw, 2.5vh);
  background: linear-gradient(145deg, 
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 0.2) 100%);
  padding: min(1.2vw, 1.2vh);
  box-shadow: 
    0 min(0.8vh, 0.8vw) min(2vh, 2vw) rgba(0, 0, 0, 0.3),
    inset 0 0 min(0.8vw, 0.8vh) rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border: min(0.5vw, 0.5vh) solid #4f0000;
  border-radius: min(1.5vw, 1.5vh);
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 0 min(2.5vw, 2.5vh) rgba(255, 140, 140, 0.8),
    inset 0 0 min(1vw, 1vh) rgba(255, 255, 255, 0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  display: block;
}

.profile-image:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 
    0 0 min(3.5vw, 3.5vh) rgba(255, 140, 140, 1),
    inset 0 0 min(1.5vw, 1.5vh) rgba(255, 255, 255, 0.6);
}



/* ===================================
      PROFILE INFO
    =================================== */
.profile-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: min(2vh, 2vw);
  padding: min(0.5vh, 0.5vw) min(1vw, 1vh);
  height: 100%;
  flex: 1;
  min-width: 0;
  width: 100%;
}

.profile-details {
  text-align: left;
  width: 100%;
}

.profile-name {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(6vw, 6vh, 5rem);
  color: #fff;
  text-shadow: min(0.3vw, 0.3vh) min(0.3vw, 0.3vh) 0 #4f0000;
  background: rgba(79, 0, 0, 0.7);
  padding: min(2vh, 2vw) min(3vw, 3vh);
  border-radius: min(1.5vw, 1.5vh);
  font-weight: bold;
  letter-spacing: min(0.15vw, 0.15vh);
  box-shadow: 
    0 min(0.5vw, 0.5vh) min(1vw, 1vh) rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  margin-bottom: min(1.5vh, 1.5vw);
  display: inline-block;
  margin: 0;
}

.profile-role {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(3.5vw, 3.5vh, 2.8rem);
  color: #fff8e1;
  text-shadow: min(0.15vw, 0.15vh) min(0.15vw, 0.15vh) 0 #4f0000;
  opacity: 0.9;
  margin-bottom: min(1vh, 1vw);
}

.profile-bio {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(2vw, 2vh, 1.6rem);
  color: #ffffff;
  text-shadow: min(0.1vw, 0.1vh) min(0.1vw, 0.1vh) 0 #4f0000;
  max-width: 100%;
  line-height: 1.4;
  text-align: left;
  margin: 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: min(1vh, 1vw);
  width: 100%;
  max-width: 100%;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: min(1vw, 1vh);
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.8vw, 1.8vh, 1.3rem);
  color: #fff;
  text-shadow: min(0.1vw, 0.1vh) min(0.1vw, 0.1vh) 0 #4f0000;
  padding: min(0.8vh, 0.8vw);
  background: rgba(79, 0, 0, 0.5);
  border-radius: min(0.8vw, 0.8vh);
}

/* ===================================
      HOBBIES SECTION
    =================================== */
.hobbies-section {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: min(95vw, 1000px);
  gap: min(2vw, 2vh);
}

.hobbies-label {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(3vw, 3vh, 2.2rem);
  color: #fff;
  text-shadow: min(0.2vw, 0.2vh) min(0.2vh, 0.2vw) 0 #4f0000;
  white-space: nowrap;
  flex-shrink: 0;
  background: rgba(79, 0, 0, 0.7);
  padding: min(1vh, 1vw) min(1.5vw, 1.5vh);
  border-radius: min(1vw, 1vh);
  font-weight: bold;
  letter-spacing: min(0.1vw, 0.1vh);
  box-shadow: 
    0 min(0.3vw, 0.3vh) min(0.6vw, 0.6vh) rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* ===================================
      INFO CARDS BASE STYLES
    =================================== */
.info-cards {
  display: flex;
  gap: min(1.5vw, 1.5vh);
  justify-content: center;
  flex-wrap: nowrap;
  width: 100%;
  max-width: min(95vw, 1000px);
  overflow-x: visible;
  padding: min(1vh, 1vw) 0;
  flex: 1;
}

.info-card {
  position: relative;
  border-radius: min(2.5vw, 2.5vh);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-weight: bold;
  animation: button-float 2s infinite ease-in-out;
  transform: translateY(0);
  flex-shrink: 0;
  width: min(20vw, 20vh, 220px);
  height: min(7vh, 7vw, 65px);
  min-width: 180px;
}

.card-content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  color: white;
  letter-spacing: min(0.1vw, 0.1vh);
  gap: min(1.5vw, 1.5vh);
}

.card-icon {
  font-size: min(2vw, 2vh, 1.5rem);
  transition: transform 0.3s ease;
}

.card-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-shadow: inherit;
  min-width: 0;
}

.card-title {
  font-size: min(2vw, 2vh, 1.4rem);
  font-weight: bold;
  margin-bottom: min(0.3vh, 0.3vw);
}

.card-detail {
  font-size: min(1.5vw, 1.5vh, 1.1rem);
  opacity: 0.9;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
}

.card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  opacity: 0.3;
  transition: opacity 0.3s ease;
  z-index: 1;
}

/* ===================================
      GAMES CARD
    =================================== */
.games-card {
  background: linear-gradient(160deg, #4a9bff, #1a5a9a);
  border: min(0.4vw, 0.4vh) solid #1a3a6a;
  box-shadow:
    0 min(0.6vh, 0.6vw) 0 #1a3a6a, 
    0 0 min(2vw, 2vh) #8cbaff;
}

.games-card .card-content {
  text-shadow: min(0.25vw, 0.25vh) min(0.25vw, 0.25vh) 0 #1a3a6a;
}

.games-card .card-icon {
  font-size: min(2vw, 2vh, 1.5rem);
}

.games-card .card-glow {
  background: radial-gradient(circle at center, 
    rgba(140, 186, 255, 0.6) 0%,
    transparent 70%);
}

.games-card:hover {
  background: linear-gradient(160deg, #5aafff, #2a6aaa);
  transform: translateY(min(-0.3vh, -0.3vw));
  box-shadow: 
    0 min(0.8vh, 0.8vw) 0 #1a3a6a, 
    0 0 min(3vw, 3vh) #8cbaff;
}

.games-card:hover .card-icon {
  transform: scale(1.1);
}

.games-card:hover .card-glow {
  opacity: 0.5;
}

/* ===================================
      YOUTUBE CARD
    =================================== */
.youtube-card {
  background: linear-gradient(160deg, #ff3232, #cc2222);
  border: min(0.6vw, 0.6vh) solid #4f0000;
  box-shadow:
    0 min(0.8vh, 0.8vw) 0 #af0000,
    0 0 min(3.5vw, 3.5vh) #ff8c8c;
}

.youtube-card .card-content {
  text-shadow: min(0.3vw, 0.3vh) min(0.3vw, 0.3vh) 0 #4f0000;
}

.youtube-card .card-icon {
  font-size: min(2vw, 2vh, 1.5rem);
}

.youtube-card .card-glow {
  background: radial-gradient(circle at center, 
    rgba(255, 140, 140, 0.6) 0%,
    transparent 70%);
}

.youtube-card:hover {
  background: linear-gradient(160deg, #ff4242, #dd3232);
  transform: translateY(min(-0.3vh, -0.3vw));
  box-shadow: 
    0 min(0.8vh, 0.8vw) 0 #cc5555, 
    0 0 min(4vw, 4vh) rgba(255, 107, 107, 0.9);
}

.youtube-card:hover .card-icon {
  transform: scale(1.1);
}

.youtube-card:hover .card-glow {
  opacity: 0.5;
}

/* ===================================
      CODING CARD
    =================================== */
.coding-card {
  background: linear-gradient(160deg, #4CAF50, #2E7D32);
  border: min(0.4vw, 0.4vh) solid #1B5E20;
  box-shadow:
    0 min(0.6vh, 0.6vw) 0 #1B5E20,
    0 0 min(2vw, 2vh) #A5D6A7;
}

.coding-card .card-content {
  text-shadow: min(0.25vw, 0.25vh) min(0.25vw, 0.25vh) 0 #1B5E20;
}

.coding-card .card-icon {
  font-size: min(2vw, 2vh, 1.5rem);
}

.coding-card .card-glow {
  background: radial-gradient(circle at center, 
    rgba(165, 214, 167, 0.6) 0%,
    transparent 70%);
}

.coding-card:hover {
  background: linear-gradient(160deg, #66BB6A, #388E3C);
  transform: translateY(min(-0.3vh, -0.3vw));
  box-shadow: 
    0 min(0.8vh, 0.8vw) 0 #1B5E20, 
    0 0 min(3vw, 3vh) rgba(76, 175, 80, 0.9);
}

.coding-card:hover .card-icon {
  transform: scale(1.1);
}

.coding-card:hover .card-glow {
  opacity: 0.5;
}

/* ===================================
      ART CARD
    =================================== */
.art-card {
  background: linear-gradient(160deg, #9c27b0, #6a1b9a);
  border: min(0.4vw, 0.4vh) solid #4a148c;
  box-shadow:
    0 min(0.6vh, 0.6vw) 0 #4a148c,
    0 0 min(2vw, 2vh) #ce93d8;
}

.art-card .card-content {
  text-shadow: min(0.25vw, 0.25vh) min(0.25vw, 0.25vh) 0 #4a148c;
}

.art-card .card-icon {
  font-size: min(2vw, 2vh, 1.5rem);
}

.art-card .card-glow {
  background: radial-gradient(circle at center, 
    rgba(206, 147, 216, 0.6) 0%,
    transparent 70%);
}

.art-card:hover {
  background: linear-gradient(160deg, #ab47bc, #7b1fa2);
  transform: translateY(min(-0.3vh, -0.3vw));
  box-shadow: 
    0 min(0.8vh, 0.8vw) 0 #4a148c,
    0 0 min(3vw, 3vh) rgba(156, 39, 176, 0.9);
}

.art-card:hover .card-icon {
  transform: scale(1.1);
}

.art-card:hover .card-glow {
  opacity: 0.5;
}



/* ===================================
      DECORATIVE ELEMENTS
    =================================== */
.decoration-corner {
  position: absolute;
  width: min(15vw, 15vh, 200px);
  height: min(15vw, 15vh, 200px);
  opacity: 0.1;
  background: linear-gradient(45deg, transparent 40%, #ffcc00 50%, transparent 60%);
  pointer-events: none;
}

.top-left {
  top: 0;
  left: 0;
  border-bottom-right-radius: 100%;
}

.top-right {
  top: 0;
  right: 0;
  border-bottom-left-radius: 100%;
}

.bottom-left {
  bottom: 0;
  left: 0;
  border-top-right-radius: 100%;
}

.bottom-right {
  bottom: 0;
  right: 0;
  border-top-left-radius: 100%;
}

/* ===================================
      ANIMATIONS
    =================================== */
@keyframes title-glow {
  0%, 100% {
    text-shadow: min(0.3vw, 0.3vh) min(0.3vw, 0.3vh) 0 #000000, 0 0 min(1.5vw, 1.5vh) #ffcc00;
  }
  50% {
    text-shadow: min(0.3vw, 0.3vh) min(0.3vw, 0.3vh) 0 #000000, 0 0 min(2.5vw, 2.5vh) #ffcc00, 0 0 min(3.5vw, 3.5vh) #ffcc00;
  }
}

/* Custom Scrollbar for Beranda */
.beranda-container::-webkit-scrollbar {
  width: 12px;
}
.beranda-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.beranda-container::-webkit-scrollbar-thumb {
  background: linear-gradient(160deg, #ffcc00, #ff6b35);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.beranda-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(160deg, #ff6b35, #ffcc00);
}

@keyframes button-float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(min(-0.5vh, -0.5vw));
  }
}

@keyframes sparkle-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* ===================================
      ORIENTATION-BASED LAYOUT
    =================================== */
/* Hanya satu media query untuk layout landscape */
@media (orientation: landscape) and (min-height: 400px) {
  .profile-section {
    flex-direction: row;
  }
  
  .profile-visual {
    flex: 1;
  }
  
  .profile-info {
    flex: 1;
  }
}
</style>