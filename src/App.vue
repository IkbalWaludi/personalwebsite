<template>
  <div class="app-container">
    <PhoneMockup v-if="showMockup">
      <router-view :key="forceRerender" />
    </PhoneMockup>
    
    <div v-else class="full-screen-content">
      <router-view :key="forceRerender" />
    </div>
    
    <!-- Container for both toggle buttons -->
    <div class="toggle-container">
      <!-- Language toggle button -->
      <button 
        class="toggle-btn lang-btn"
        @click="toggleLanguage()"
        :title="currentLanguage === 'EN' ? 'Switch to Indonesian' : 'Switch to English'"
      >
        <img
          :src="currentLanguage === 'EN' ? engFlag : indFlag"
          :alt="currentLanguage === 'EN' ? 'English' : 'Indonesian'"
          class="flag-icon"
        />
      </button>
      
      <!-- Small phone icon toggle in bottom left corner -->
      <div @click="toggleMockup" class="toggle-btn mockup-toggle">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12" y2="18"></line>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import PhoneMockup from "@/components/PhoneMockup.vue";
import languageService from '@/services/languageService';
import engFlag from '@/assets/eng.png'
import indFlag from '@/assets/ind.png'

const showMockup = ref(true);
const currentLanguage = ref(languageService.getCurrentLanguage());
const forceRerender = ref(0);

const toggleMockup = () => {
  showMockup.value = !showMockup.value;
};

const toggleLanguage = () => {
  const newLang = currentLanguage.value === 'EN' ? 'ID' : 'EN';
  languageService.setLanguage(newLang);
  // The languageService already notifies listeners which should update the currentLanguage
};

onMounted(() => {
  // Listen for language changes
  const handleLanguageChange = (newLang) => {
    currentLanguage.value = newLang;
    // Force re-render of child components to update translations
    forceRerender.value += 1;
  };
  
  languageService.addListener(handleLanguageChange);
  
  // Cleanup listener on component unmount
  onUnmounted(() => {
    languageService.removeListener(handleLanguageChange);
  });
});
</script>

<style scoped>
.app-container {
  height: 100vh;
  width: 100%;
}

.toggle-container {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: flex-end;
}

.toggle-btn {
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.lang-btn {
  background: rgba(79, 0, 0, 0.7);
  color: white;
  font-family: sans-serif;
  font-size: 12px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.lang-btn:hover {
  background: rgba(79, 0, 0, 0.9);
  transform: scale(1.1);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.4);
}

.flag-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0;
}

.mockup-toggle {
  background-color: rgba(0, 0, 0, 0.7);
}

.mockup-toggle:hover {
  background-color: rgba(0, 0, 0, 0.9);
  transform: scale(1.1);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.4);
}

.mockup-toggle svg {
  color: white;
}

.mockup-toggle svg {
  color: white;
}

.full-screen-content {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>