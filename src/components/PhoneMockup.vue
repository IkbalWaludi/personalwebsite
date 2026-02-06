<template>
  <div class="app-body">
    <div class="phone-mockup">
      <div class="screen-area">
        <div class="content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* BACKGROUND HALAMAN */
.app-body {
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  height: 100vh;
  width: 100%;
  margin: 0;
  font-family: 'Patrick Hand', 'Handlee', cursive, sans-serif;
  overflow: hidden;
  perspective: 1000px;
  position: relative;
}

/* MOCKUP PONSEL */
.phone-mockup {
  height: 80vh;
  width: calc(80vh * 19/9);
  max-height: 80vh;
  max-width: calc(80vh * 19/9);

  background: linear-gradient(145deg, #1a1a1a, #444);
  border-radius: 4vw;

  box-shadow:
    0 2.5vh 5vh rgba(0, 0, 0, 0.7),
    inset 0 0 1.5vh rgba(255, 255, 255, 0.1);

  padding: 2vh;
  box-sizing: border-box;

  /* === PERGESERAN 10% KE KIRI & 10% KE ATAS === */
  transform: translate(-5%, -5%) rotateX(5deg) rotateY(-5deg);

  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.phone-mockup:hover {
  transform: translate(-5%, -5%) rotateX(0deg) rotateY(0deg);
}

/* AREA LAYAR */
.screen-area {
  width: 100%;
  height: 100%;
  border-radius: 4vw;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

/* KONTEN DI DALAM LAYAR */
.content {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>