const templatePageLoad = () => {
  const divContainer = document.querySelector('.home__Preloading-Screen');
  const template = `
  <div class="loader-wrap">
    <div class="loader-container">
        <img class="loader-img" src="/themes/Gatenhjelmska/assets/images/Gathenhielmska_huset.jpg" alt="img" />
          <div class="animation-container">
        <img class="loader-logo" src="/themes/Gatenhjelmska/assets/images/gatenhielmska-loader-logo.png" alt="img" />
      </div>
    </div>
  </div>
  `;
  divContainer.innerHTML = template;
};

const onLoadWrap = () => {
  const wrap = document.querySelector('.loader-wrap');
  const loaderContainer = document.querySelector('.loader-container');
  const animationContainer = document.querySelector('.animation-container');
  const logo = document.querySelector('.loader-logo');
  const headerImg = document.querySelector('.loader-img');

  wrap.classList.add('hidden');
  loaderContainer.classList.add('hidden');
  animationContainer.classList.add('hidden');
  logo.classList.add('hidden');
  headerImg.classList.add('hidden');
};

export default { templatePageLoad, onLoadWrap };