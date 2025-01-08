const fileName = window.location.pathname.split('/').pop();

    // 色の決定
    let particleColor;
    switch (fileName) {
      case 'asela.html':
        particleColor = 'rgb(175, 105, 255)';
        break;
      case 'mao.html':
        particleColor = 'rgb(255, 0, 221)';
        break;
      case 'diva.html':
        particleColor = 'rgb(27, 238, 245)'; 
        break;
      case 'emilia.html':
        particleColor = 'lightgrey'; 
        break;
      case 'miho.html':
        particleColor = 'rgb(0, 255, 85)'; 
        break;
      default:
        particleColor = 'white'; 
    }

document.addEventListener('click', (event) => {
    const particleCount = 7; // 粒の数

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // ランダムな方向に飛ばす
      const angle = Math.random() * 2 * Math.PI; // 0～360度の角度
      const distance = Math.random() * 100 -20; // -20～80pxの距離
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      // 粒のスタイル設定
      particle.style.left = `${event.pageX}px`;
      particle.style.top = `${event.pageY}px`;
      particle.style.setProperty('--dx', `${dx}px`);
      particle.style.setProperty('--dy', `${dy}px`);
      particle.style.background = particleColor;

      // エフェクト要素を追加
      document.body.appendChild(particle);

      // アニメーション終了後に削除
      particle.addEventListener('animationend', () => {
        particle.remove();
      });
    }
  });