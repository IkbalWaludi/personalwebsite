<template>
  <div class="contact-container">
    <div class="header-section">
      <h1 class="title">{{ $t('CONTACT_INFO') }}</h1>
    </div>

    <div class="contact-content">
      <div class="contact-info-section">
        <h2 class="section-title">{{ $t('GET_IN_TOUCH') }}</h2>
        <p class="contact-intro">{{ $t('CONTACT_INTRO_TEXT') }}</p>

        <div class="contact-details">
          <div class="contact-item">
            <i class="fas fa-envelope contact-icon"></i>
            <div class="contact-text">
              <h3>{{ $t('EMAIL') }}</h3>
              <p><a href="mailto:ikbalwwaludi@gmail.com">ikbalwwaludi@gmail.com</a></p>
            </div>
          </div>

          <div class="contact-item">
            <i class="fas fa-phone contact-icon"></i>
            <div class="contact-text">
              <h3>{{ $t('PHONE') }}</h3>
              <p><a href="tel:+6282339614000">+62 823-3961-4000</a></p>
            </div>
          </div>

          <div class="contact-item">
            <i class="fas fa-map-marker-alt contact-icon"></i>
            <div class="contact-text">
              <h3>{{ $t('LOCATION') }}</h3>
              <p>Nusa Tenggara Barat, Sumbawa Besar</p>
            </div>
          </div>

          <div class="contact-item">
            <i class="fab fa-tiktok contact-icon"></i>
            <div class="contact-text">
              <h3>{{ $t('TIKTOK') }}</h3>
              <p><a href="https://www.tiktok.com/@kebalikstudio" target="_blank" rel="noopener noreferrer">@kebalikstudio</a></p>
            </div>
          </div>

          <!-- Institution entry removed per user request -->

          <!-- LinkedIn and Thesis entries removed as requested -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import languageService from '@/services/languageService';

export default {
  name: 'ContactPage',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.formData);
      alert(this.$t('MESSAGE_SENT'));
      this.resetForm();
    },
    resetForm() {
      this.formData = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    },
    $t(key) {
      return languageService.t(key);
    }
  }
}
</script>

<style scoped>
.contact-container {
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

.contact-content {
  display: flex;
  flex-wrap: wrap;
  gap: min(4vh, 4vw);
  width: 100%;
  max-width: 1200px;
  justify-content: center;
}

/* Custom Scrollbar for Contact */
.contact-container::-webkit-scrollbar {
  width: 12px;
}
.contact-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
}
.contact-container::-webkit-scrollbar-thumb {
  background: linear-gradient(160deg, #ffcc00, #ff6b35);
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.2);
}
.contact-container::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(160deg, #ff6b35, #ffcc00);
}

.contact-info-section {
  flex: 1;
  min-width: 350px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: min(2.5vw, 2.5vh);
  padding: min(4vh, 4vw);
  box-shadow: 0 min(0.8vh, 0.8vw) min(2vh, 2vw) rgba(0, 0, 0, 0.3);
}

.contact-form-section {
  flex: 1;
  min-width: 350px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: min(2.5vw, 2.5vh);
  padding: min(4vh, 4vw);
  box-shadow: 0 min(0.8vh, 0.8vw) min(2vh, 2vw) rgba(0, 0, 0, 0.3);
}

.section-title {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(3.2vw, 3.2vh, 2.4rem);
  color: #4f2c00;
  margin: 0 0 min(2.5vh, 2.5vw) 0;
  text-align: center;
  text-shadow: min(0.15vw, 0.15vh) min(0.15vw, 0.15vh) 0 rgba(0,0,0,0.1);
}

.contact-intro {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.8vw, 1.8vh, 1.3rem);
  color: #4f2c00;
  margin: 0 0 min(3.5vh, 3.5vw) 0;
  text-align: center;
  line-height: 1.6;
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: min(2vh, 2vw);
}

.contact-item {
  display: flex;
  align-items: flex-start;
  gap: min(2vw, 2vh);
  padding: min(2vh, 2vw);
  background: rgba(255, 249, 236, 0.8);
  border-radius: min(1.2vw, 1.2vh);
  transition: transform 0.3s ease;
}

.contact-item:hover {
  transform: translateX(min(0.5vw, 0.5vh));
  background: rgba(255, 240, 200, 0.9);
}

.contact-icon {
  font-size: min(2.5vw, 2.5vh, 1.5rem);
  color: #4f2c00;
  margin-top: min(0.3vh, 0.3vw);
  flex-shrink: 0;
}

.contact-text h3 {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.8vw, 1.8vh, 1.2rem);
  color: #4f2c00;
  margin: 0 0 min(0.5vh, 0.5vw) 0;
}

.contact-text p {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.5vw, 1.5vh, 1rem);
  color: #4f2c00;
  margin: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: min(2vh, 2vw);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: min(0.8vh, 0.8vw);
}

.form-group label {
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.6vw, 1.6vh, 1.1rem);
  color: #4f2c00;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  padding: min(1.2vh, 1.2vw) min(1.5vw, 1.5vh);
  border: min(0.2vw, 0.2vh) solid #ffcc00;
  border-radius: min(0.8vw, 0.8vh);
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: min(1.4vw, 1.4vh, 1rem);
  background: rgba(255, 255, 255, 0.8);
  color: #4f2c00;
  transition: all 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4a9bff;
  box-shadow: 0 0 min(0.8vw, 0.8vh) rgba(74, 155, 255, 0.5);
  background: rgba(255, 255, 255, 1);
}

.submit-button {
  position: relative;
  border: none;
  border-radius: min(3vw, 3vh);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-weight: bold;
  font-size: min(2.4vw, 2.4vh, 1.6rem);
  padding: min(2vh, 2vw) min(2.5vw, 2.5vh);
  background: linear-gradient(160deg, #4CAF50, #2E7D32);
  color: white;
  border: min(0.5vw, 0.5vh) solid #1B5E20;
  box-shadow:
    0 min(0.8vh, 0.8vw) 0 #1B5E20, 
    0 0 min(2.5vw, 2.5vh) #A5D6A7;
  align-self: flex-start;
  margin-top: min(1.5vh, 1.5vw);
}

.submit-button .button-text {
  text-shadow: min(0.25vw, 0.25vh) min(0.25vw, 0.25vh) 0 #1B5E20;
  position: relative;
  z-index: 2;
}

.submit-button .button-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
  background: radial-gradient(circle at center, 
    rgba(165, 214, 167, 0.6) 0%,
    transparent 70%);
}

.submit-button:hover {
  background: linear-gradient(160deg, #66BB6A, #388E3C);
  transform: translateY(min(-0.3vh, -0.3vw));
  box-shadow: 
    0 min(0.8vh, 0.8vw) 0 #1B5E20, 
    0 0 min(3vw, 3vh) rgba(76, 175, 80, 0.9);
}

.submit-button:hover .button-glow {
  opacity: 1;
}

.submit-button:active {
  background: linear-gradient(160deg, #43A047, #1B5E20);
  transform: translateY(min(0.2vh, 0.2vw));
  box-shadow: 
    0 min(0.3vh, 0.3vw) 0 #1B5E20, 
    0 0 min(1.5vw, 1.5vh) rgba(76, 175, 80, 0.6);
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
  .contact-content {
    flex-direction: column;
  }
  
  .contact-info-section,
  .contact-form-section {
    min-width: 100%;
  }
}
</style>