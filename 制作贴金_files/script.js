function addAudioButtonStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    .audio-play-btn {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      width: 36px !important;
      height: 36px !important;
      border-radius: 50% !important;
      background: linear-gradient(135deg, #daa520 0%, #b8860b 100%) !important;
      border: 2px solid #fff !important;
      cursor: pointer !important;
      transition: all 0.3s ease !important;
      box-shadow: 
        0 4px 15px rgba(0,0,0,0.5),
        0 0 15px rgba(218,165,32,0.6) !important;
      margin-left: 8px !important;
      margin-top: 5px !important;
      vertical-align: middle !important;
      z-index: 9999 !important;
      position: relative !important;
      flex-shrink: 0 !important;
      outline: none !important;
      padding: 0 !important;
    }

    .audio-play-btn:hover {
      transform: scale(1.15) !important;
      box-shadow: 
        0 6px 25px rgba(0,0,0,0.6),
        0 0 25px rgba(218,165,32,0.8) !important;
    }

    .audio-play-btn:active {
      transform: scale(0.95) !important;
    }

    .audio-play-btn svg {
      width: 16px !important;
      height: 16px !important;
      fill: #fff !important;
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3));
    }

    .audio-play-btn.playing {
      animation: audioPulse 1s ease-in-out infinite;
    }

    @keyframes audioPulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.1); }
    }

    .audio-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      width: 100%;
    }

    .gallery-item {
      padding-bottom: 10px !important;
    }
  `;
  document.head.appendChild(style);
}

let currentAudio = null;

function playAudio(audioPath) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
  
  const audio = new Audio(audioPath);
  currentAudio = audio;
  
  audio.play().catch(function(err) {
    console.error('音频播放失败:', err);
    document.addEventListener('click', function playOnClick() {
      audio.play().catch(function(e) {
        console.error('用户点击后播放仍失败:', e);
      });
      document.removeEventListener('click', playOnClick);
    }, { once: true });
  });
  
  audio.addEventListener('ended', function() {
    currentAudio = null;
  });
  
  return audio;
}

function createAudioButton(infoDiv, mp3FileName) {
  const existingBtn = infoDiv.querySelector('.audio-play-btn');
  if (existingBtn) return;
  
  const wrapper = document.createElement('div');
  wrapper.className = 'audio-wrapper';
  
  const btn = document.createElement('button');
  btn.className = 'audio-play-btn';
  btn.innerHTML = '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
  
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    const audioPath = '制作贴金_files/' + mp3FileName;
    console.log('播放音频:', audioPath);
    
    const audio = playAudio(audioPath);
    btn.classList.add('playing');
    
    audio.addEventListener('ended', function() {
      btn.classList.remove('playing');
    });
    
    audio.addEventListener('pause', function() {
      btn.classList.remove('playing');
    });
    
    audio.addEventListener('error', function() {
      btn.classList.remove('playing');
    });
  });
  
  wrapper.appendChild(btn);
  infoDiv.appendChild(wrapper);
  console.log('已添加音频按钮:', mp3FileName);
}

function initAudioButtons() {
  const mp3Order = ['1.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3', '10.mp3', '11.mp3', '12.mp3', '13.mp3', '14.mp3', '15.mp3', '16.mp3', '17.mp3', '18.mp3', '19.mp3', '20.mp3'];
  
  const galleryItems = document.querySelectorAll('.gallery-item');
  console.log('找到.gallery-item数量:', galleryItems.length);
  
  galleryItems.forEach(function(item, index) {
    if (index < mp3Order.length) {
      const infoDiv = item.querySelector('.gallery-info');
      if (infoDiv) {
        createAudioButton(infoDiv, mp3Order[index]);
      } else {
        createAudioButton(item, mp3Order[index]);
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM加载完成');
  
  addAudioButtonStyles();
  
  setTimeout(initAudioButtons, 500);
  setTimeout(initAudioButtons, 1000);
});