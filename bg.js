const bg = (function() {
  const body = document.querySelector('body');
  const imgList = [
    'https://images.unsplash.com/photo-1541451149767-966f1e997688?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=389c0b9c697b959cce1f9e27d11f54c3&auto=format&fit=crop&w=1650&q=80',
    'https://images.unsplash.com/photo-1541474163580-571e2f595ec7?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fbb7009b813ebd8eba2c18565f18163c&auto=format&fit=crop&w=1650&q=80',
    'https://images.unsplash.com/photo-1541442510208-33bf9a34886f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=89630c715c8fd1d66c7855d60f36ae76&auto=format&fit=crop&w=1650&q=80',
  ];

  function handleImgLoad() {
  }

  function paintImage(number) {
    const image = new Image();
    image.src = imgList[number];
    image.classList.add('bgImage');
    body.appendChild(image);
    // image.addEventListener('loadend', handleImgLoad);
  }

  function genRandom() {
    return Math.floor(Math.random() * imgList.length);
  }

  return {
    init() {
      const randomNumber = genRandom();
      paintImage(randomNumber);
    }
  }
})();

bg.init();
