<template>
  <div class="portfolio-container">
    <div class="header-section">
      <h1 class="title">{{ $t('PORTFOLIO') }}</h1>
    </div>

    <div class="portfolio-content">
      <div class="profile-section">
        <div class="profile-image-container">
          <img src="/src/assets/foto1.jpeg" alt="Ikbal Waludi" class="profile-image" @error="handleImageError" />
        </div>
        <div class="profile-info">
          <h2 class="profile-name">{{ $t('PROFILE_NAME') }}</h2>
          <div class="profile-meta">
            <div class="meta-row"><span class="meta-key">{{ $t('DOB_LABEL') }}:</span><span class="meta-val">5 Juli 2001</span></div>
            <div class="meta-row"><span class="meta-key">{{ $t('NATIONALITY_LABEL') }}:</span><span class="meta-val">{{ $t('NATIONALITY_VALUE') }}</span></div>
            <div class="meta-row"><span class="meta-key">{{ $t('ADDRESS_LABEL') }}:</span><span class="meta-val">{{ $t('ADDRESS_VALUE') }}</span></div>
          </div>
        </div>
      </div>

      <div class="portfolio-grid">
        <div class="portfolio-category">
          <h3 class="category-title">{{ $t('EDUCATION') }}</h3>
          <div class="education-item">
            <h4>{{ $t('EDU_DEGREE') }}</h4>
            <p class="school">{{ $t('EDU_DATES') }}</p>
            <p class="details">{{ $t('EDU_OVERVIEW_1') }}</p>
            <p class="details">{{ $t('EDU_OVERVIEW_2') }}</p>
            <p class="details">{{ $t('EDU_OVERVIEW_3') }}</p>
            <div class="edu-meta">
              <div class="meta-row"><span class="meta-key">{{ $t('WEBSITE_LABEL') }}:</span><span class="meta-val"><a href="https://www.ub.ac.id/id/" target="_blank">https://www.ub.ac.id/id/</a></span></div>
              <div class="meta-row"><span class="meta-key">{{ $t('FINAL_GRADE_LABEL') }}:</span><span class="meta-val">{{ $t('FINAL_GRADE_VALUE') }}</span></div>
              <div class="meta-row"><span class="meta-key">{{ $t('EQF_LABEL') }}:</span><span class="meta-val">EQF level 6</span></div>
              <div class="meta-row"><span class="meta-key">{{ $t('THESIS_LABEL') }}:</span><span class="meta-val">{{ $t('THESIS_TITLE') }}</span></div>
              <div class="meta-row"><span class="meta-key">{{ $t('LINK_LABEL') }}:</span><span class="meta-val"><a href="https://drive.google.com/file/d/1NOxTzlML9iPFtUqsSQcu5ovzpnrRplAe/view?usp=sharing" target="_blank">{{ $t('THESIS_LINK_TEXT') }}</a></span></div>
            </div>
          </div>
        </div>

        <div class="portfolio-category">
          <h3 class="category-title">{{ $t('EXPERIENCE') }}</h3>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4>{{ $t('WORK_ROLE_BIZNIZO') }}</h4>
                <p class="company">{{ $t('WORK_DATES_BIZNIZO') }}</p>
                <p class="description">{{ $t('WORK_DESC_1') }}</p>
                <p class="description">{{ $t('WORK_DESC_2') }}</p>
                <p class="description">{{ $t('WORK_DESC_3') }}</p>
                <p class="description">{{ $t('WORK_DESC_4') }}</p>
                <p class="description">{{ $t('WORK_DESC_5') }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Language Proficiency (image only per request) -->
        <div class="portfolio-category">
          <h3 class="category-title">{{ $t('LANGUAGE_PROFICIENCY') }}</h3>
          <div class="certificate-only">
            <a href="https://certs.duolingo.com/yz7kx8gftt0zdl9e" target="_blank" rel="noopener noreferrer">
              <img src="/src/assets/DET.jpeg" alt="Duolingo English Test Certificate" class="cert-image-large" @error="handleImageError" />
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
  name: 'PortfolioPage',
  methods: {
    $t(key) {
      return languageService.t(key);
    },
    handleImageError(event) {
      // Fallback to a default image or placeholder
      event.target.src = '/src/assets/Rojali.png';
    }
  }
}
</script>

<style scoped>
.portfolio-container {
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

/* Custom Scrollbar for Portfolio */
.portfolio-container::-webkit-scrollbar {
  width: 12px;
}
.portfolio-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.portfolio-container::-webkit-scrollbar-thumb {
  background: linear-gradient(160deg, #ffcc00, #ff6b35);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.portfolio-container::-webkit-scrollbar-thumb:hover {
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

.portfolio-content {
  display: flex;
  flex-direction: column;
  gap: min(4vh, 4vw);
  width: 100%;
  max-width: 1200px;
}

.profile-section {
  display: flex;
  flex-wrap: wrap;
  gap: min(5vh, 5vw);
  background: rgba(255, 255, 255, 0.9);
  border-radius: min(2.5vw, 2.5vh);
  padding: min(4vh, 4vw);
  box-shadow: 0 min(0.8vh, 0.8vw) min(2vh, 2vw) rgba(0, 0, 0, 0.3);
  align-items: center;
}

.profile-image-container {
  flex: 0 0 auto;
}

.profile-image {
  width: min(30vw, 30vh, 320px);
  height: min(30vw, 30vh, 320px);
  border-radius: 50%;
  object-fit: cover;
  object-position: 50% 35%;
  border: min(0.6vw, 0.6vh) solid #ffcc00;
  box-shadow: 0 0 min(2.5vw, 2.5vh) rgba(255, 204, 0, 0.5);
}

.profile-info {
  flex: 1;
  min-width: 300px;
}

.profile-name {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(4.5vw, 4.5vh, 3.6rem);
  color: #4f2c00;
  margin: 0 0 min(1.5vh, 1.5vw) 0;
  text-shadow: min(0.15vw, 0.15vh) min(0.15vw, 0.15vh) 0 rgba(0,0,0,0.1);
}

.profile-title {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(3vw, 3vh, 2.4rem);
  color: #ff6b35;
  margin: 0 0 min(2.5vh, 2.5vw) 0;
  font-weight: normal;
}

.profile-bio {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(2.4vw, 2.4vh, 1.6rem);
  color: #4f2c00;
  margin: 0 0 min(2.5vh, 2.5vw) 0;
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: min(1.5vw, 1.5vh);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: min(5vw, 5vh, 50px);
  height: min(5vw, 5vh, 50px);
  border-radius: 50%;
  background: linear-gradient(160deg, #4a9bff, #1a5a9a);
  color: white;
  font-size: min(2.5vw, 2.5vh, 1.8rem);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(min(-0.3vh, -0.3vw));
  box-shadow: 0 0 min(1vw, 1vh) rgba(74, 155, 255, 0.7);
}

.portfolio-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: min(4vh, 4vw);
}

/* Spacing between paragraphs for readability */
.portfolio-category p,
.portfolio-category .details,
.portfolio-category .description,
.education-item p {
  margin-bottom: min(1.5vh, 1.5vw);
}

/* Education meta styling */
.edu-meta {
  margin-top: min(1vh, 1vw);
  padding: min(1vh, 1vw);
  background: linear-gradient(90deg, rgba(255,255,255,0.95), rgba(255,250,240,0.95));
  border-radius: min(1vw, 1vh);
  box-shadow: 0 min(0.2vh,0.2vw) min(0.6vh,0.6vw) rgba(0,0,0,0.06);
  display: grid;
  gap: min(0.6vh,0.6vw);
}
.meta-row {
  display: flex;
  gap: min(1vw,1vh);
  align-items: flex-start;
}
.meta-key {
  font-weight: 700;
  color: #4f2c00;
  min-width: 140px;
}
.meta-val {
  flex: 1;
  display: block;
}

/* Profile meta (personal details) */
.profile-meta {
  margin-top: min(1vh, 1vw);
  display: grid;
  gap: min(0.6vh, 0.6vw);
}
.profile-meta .meta-row {
  align-items: center;
}
.profile-meta .meta-key {
  min-width: 140px;
  font-weight: 700;
}
.meta-val a {
  color: #1565C0;
  text-decoration: underline;
}

.portfolio-category {
  background: rgba(255, 255, 255, 0.9);
  border-radius: min(1.5vw, 1.5vh);
  padding: min(2.5vh, 2.5vw);
  box-shadow: 0 min(0.3vh, 0.3vw) min(1vh, 1vw) rgba(0, 0, 0, 0.2);
}

.category-title {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(3.2vw, 3.2vh, 2.2rem);
  color: #4f2c00;
  margin: 0 0 min(2vh, 2vw) 0;
  text-align: center;
  border-bottom: min(0.2vw, 0.2vh) solid #ffcc00;
  padding-bottom: min(1vh, 1vw);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: min(2vh, 2vw);
}

.timeline-item {
  display: flex;
  gap: min(1.5vw, 1.5vh);
  position: relative;
}

.timeline-dot {
  width: min(1.5vw, 1.5vh, 15px);
  height: min(1.5vw, 1.5vh, 15px);
  border-radius: 50%;
  background: #ffcc00;
  flex-shrink: 0;
  margin-top: min(0.5vh, 0.5vw);
}

.timeline-content h4 {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(2.4vw, 2.4vh, 1.6rem);
  color: #4f2c00;
  margin: 0 0 min(0.5vh, 0.5vw) 0;
}

.company {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.9vw, 1.9vh, 1.2rem);
  color: #ff6b35;
  margin: 0 0 min(0.3vh, 0.3vw) 0;
  font-weight: bold;
}

.duration {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.3vw, 1.3vh, 1rem);
  color: #666;
  margin: 0 0 min(1vh, 1vw) 0;
  font-style: italic;
}

.description {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.9vw, 1.9vh, 1.1rem);
  color: #4f2c00;
  margin: 0;
  line-height: 1.6;
}

.education-item {
  margin-bottom: min(2vh, 2vw);
}

.education-item:last-child {
  margin-bottom: 0;
}

.education-item h4 {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(2.4vw, 2.4vh, 1.6rem);
  color: #4f2c00;
  margin: 0 0 min(0.5vh, 0.5vw) 0;
}

.school {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.5vw, 1.5vh, 1.1rem);
  color: #ff6b35;
  margin: 0 0 min(0.3vh, 0.3vw) 0;
  font-weight: bold;
}

.year {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.3vw, 1.3vh, 1rem);
  color: #666;
  margin: 0 0 min(1vh, 1vw) 0;
  font-style: italic;
}

.details {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.9vw, 1.9vh, 1.1rem);
  color: #4f2c00;
  margin: 0;
  line-height: 1.6;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: min(1vw, 1vh);
  justify-content: center;
}

.skill-badge {
  padding: min(1vh, 1vw) min(1.8vw, 1.8vh);
  border-radius: min(1vw, 1vh);
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.8vw, 1.8vh, 1.2rem);
  font-weight: bold;
  color: white;
  box-shadow: 0 min(0.2vh, 0.2vw) min(0.5vh, 0.5vw) rgba(0, 0, 0, 0.2);
}

.skill-badge.frontend {
  background: linear-gradient(160deg, #4CAF50, #2E7D32);
}

.skill-badge.backend {
  background: linear-gradient(160deg, #2196F3, #1565C0);
}

.skill-badge.database {
  background: linear-gradient(160deg, #FF9800, #EF6C00);
}

.skill-badge.cloud {
  background: linear-gradient(160deg, #9C27B0, #6A1B9A);
}

.skill-badge.mobile {
  background: linear-gradient(160deg, #E91E63, #AD1457);
}

.skill-badge.devops {
  background: linear-gradient(160deg, #607D8B, #37474F);
}

/* Certificate display */
.certificate-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(1vh, 1vw);
}
.cert-image {
  max-width: 320px;
  width: 80%;
  height: auto;
  border-radius: min(1vw, 1vh);
  box-shadow: 0 6px 20px rgba(0,0,0,0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.cert-image:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 10px 30px rgba(0,0,0,0.22);
}
.cert-caption {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.4vw, 1.6vh, 1rem);
  color: #4f2c00;
}

/* Certificate-only layout */
.certificate-only { display:flex; justify-content:center; }
.cert-image-large { max-width:520px; width:100%; height:auto; border-radius:8px; box-shadow:0 10px 30px rgba(0,0,0,0.15); transition:transform .25s ease; }
.cert-image-large:hover { transform: translateY(-6px) scale(1.01); }

/* Language proficiency card styles */
.proficiency-card {
  display: flex;
  gap: min(3vw, 3vh);
  align-items: flex-start;
  padding: min(2vh, 2vw);
  background: linear-gradient(180deg, rgba(255,255,255,0.98), rgba(255,250,240,0.98));
  border-radius: min(1vw, 1vh);
}
.score-column {
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: min(1vh,1vw);
}
.score-circle {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #e8fff0, #ffffff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
}
.score-value { font-size: 2.6rem; color: #2e7d32; font-weight: 800; }
.score-max { font-size: 0.9rem; color: #666; }
.cefr { color: #4f2c00; font-weight: 700; }
.cert-link { font-size: 0.9rem; color: #1565C0; text-decoration: underline; }
.subscores-column { flex: 1; }
.subscores-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
.subscore { display:flex; justify-content:space-between; padding:8px 12px; background: rgba(250,250,250,0.9); border-radius:8px; align-items:center; }
.subscore.small { font-size: 0.95rem; }
.subscore .label { color: #666; }
.subscore .val { font-weight:700; color: #4f2c00; }

@media (max-width: 768px) {
  .proficiency-card { flex-direction: column; align-items: center; }
  .score-column { width: 100%; }
  .subscores-grid { grid-template-columns: 1fr 1fr; width: 100%; }
}

.achievement-list {
  display: flex;
  flex-direction: column;
  gap: min(1.5vh, 1.5vw);
}

.achievement-item {
  display: flex;
  gap: min(1.5vw, 1.5vh);
  align-items: flex-start;
}

.achievement-icon {
  font-size: min(2vw, 2vh, 1.5rem);
  color: #ffcc00;
  flex-shrink: 0;
  margin-top: min(0.3vh, 0.3vw);
}

.achievement-content h4 {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.6vw, 1.6vh, 1.2rem);
  color: #4f2c00;
  margin: 0 0 min(0.5vh, 0.5vw) 0;
}

.achievement-content p {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.3vw, 1.3vh, 1rem);
  color: #4f2c00;
  margin: 0;
  line-height: 1.4;
}

/* Justify body text for a neat left-right alignment */
.profile-bio,
.portfolio-category .details,
.portfolio-category .description,
.portfolio-category p,
.timeline-content p,
.education-item p,
.achievement-content p {
  text-align: justify;
  text-justify: inter-word;
  hyphens: auto;
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
  .profile-section {
    flex-direction: column;
    text-align: center;
  }
  
  .profile-info {
    min-width: 100%;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>