<template>
  <div class="sidebar">
    <router-link to="/beranda" class="nav-btn game-3d-button" active-class="active">
      <i class="icon fas fa-home"></i>
      <span class="btn-label">{{ $t('HOME') }}</span>
    </router-link>
    
    <router-link to="/projects" class="nav-btn game-3d-button" active-class="active">
      <i class="icon fas fa-folder-open"></i>
      <span class="btn-label">{{ $t('PROJECTS_NAV') }}</span>
    </router-link>
    
    <router-link to="/portfolio" class="nav-btn game-3d-button" active-class="active">
      <i class="icon fas fa-user"></i>
      <span class="btn-label">{{ $t('PORTFOLIO_NAV') }}</span>
    </router-link>
    
    <router-link to="/contact" class="nav-btn game-3d-button" active-class="active">
      <i class="icon fas fa-envelope"></i>
      <span class="btn-label">{{ $t('CONTACT_NAV') }}</span>
    </router-link>
  </div>
</template>

<script>
import languageService from '@/services/languageService';

export default {
  name: 'Navbar',
  methods: {
    $t(key) {
      return languageService.t(key);
    }
  }
}
</script>

<style scoped>
/* --- NAVBAR KIRI (VERTIKAL) --- */
.sidebar {
  width: 7.5vw;
  background: rgba(20, 20, 20, 0.85);
  backdrop-filter: blur(6px);
  border-right: 2px solid #2c2c2c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  height: 100%;
  justify-content: center;
  gap: 2vh;
}

/* --- CSS Tombol Game: Logam Emas Persegi --- */
.game-3d-button {
  /* Desain Ukuran dan Layout */
  position: relative;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  width: 4.5vw; 
  height: 4.5vw; 
  
  /* Warna dan Gradien Logam */
  background: linear-gradient(180deg, #ffcc00 0%, #b8860b 100%); 
  color: #4f2c00; /* Warna teks gelap */
  
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  font-size: 0.7vw; 
  font-weight: 900;
  line-height: 1.05; 
  letter-spacing: 0.2px; 
  padding: 0 5px; 

  border: 3px solid #ffaa00; 
  border-radius: 10px; 
  cursor: pointer;
  outline: none;
  
  text-shadow: 
      0 -1px 0 #ffd700, 
      0 1px 0 #8b4513; 
  
  transition: transform 0.1s, box-shadow 0.1s;
  
  /* Efek 3D */
  box-shadow: 
      inset 0 2px 5px rgba(255, 255, 255, 0.4), 
      0 6px 0 0 #a0522d, 
      0 8px 15px rgba(0, 0, 0, 0.6); 
  transform: translateY(0);
  
  text-decoration: none;
}

.game-3d-button:hover {
  background: linear-gradient(180deg, #ffdd33 0%, #daa520 100%);
  border-color: #ffffff;
  box-shadow: 
      inset 0 2px 5px rgba(255, 255, 255, 0.6),
      0 7px 0 0 #8b4513, 
      0 10px 20px rgba(0, 0, 0, 0.8);
  transform: translateY(-1px);
}

.game-3d-button:active {
  background: linear-gradient(180deg, #b8860b 0%, #ffcc00 100%); 
  border-color: #ffaa00;
  box-shadow: 
      inset 0 0 10px rgba(0, 0, 0, 0.5), 
      0 1px 0 0 #a0522d, 
      0 2px 5px rgba(0, 0, 0, 0.4); 
  transform: translateY(6px); 
}

.game-3d-button.active {
  background: linear-gradient(180deg, #ffdd33 0%, #daa520 100%);
  border-color: #ffffff;
  box-shadow: 
      inset 0 2px 5px rgba(255, 255, 255, 0.6),
      0 7px 0 0 #8b4513, 
      0 10px 20px rgba(0, 0, 0, 0.8);
  transform: translateY(-1px);
}

/* Icon styles */
.game-3d-button .icon {
  /* Perubahan Fokus: Membuat Ikon Sangat Kontras */
  margin-bottom: 3px; 
  font-size: 2vw; 
  
  /* 1. Warna Ikon Putih Murni untuk Kontras Maksimal */
  color: #ffffff; 
  
  /* 2. Shadow Ganda untuk Efek 3D dan Glow */
  text-shadow: 
      0 0 4px #000000, /* Bayangan gelap di bawah (membuatnya 'pop') */
      0 0 10px #ffffff; /* Glow putih yang kuat */
}

/* Button label styles */
.btn-label {
  word-wrap: break-word;
  text-align: center;
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
}
</style>Q