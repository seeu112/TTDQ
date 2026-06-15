// 添加美化样式
function addBeautyStyles() {
  const style = document.createElement('style');
  style.innerHTML = `
    /* === 全局背景 - 奢华暗金质感 === */
    body {
      background: 
        radial-gradient(ellipse at 0% 0%, rgba(139, 90, 43, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 100% 100%, rgba(184, 134, 11, 0.06) 0%, transparent 50%),
        radial-gradient(ellipse at 50% 0%, rgba(218, 165, 32, 0.04) 0%, transparent 40%),
        radial-gradient(circle at 30% 70%, rgba(139, 90, 43, 0.05) 0%, transparent 35%),
        linear-gradient(180deg, #0a0908 0%, #0d0c0b 30%, #0b0a09 70%, #080706 100%);
      background-attachment: fixed;
      min-height: 100vh;
    }

    /* === 页面容器 === */
    .page {
      position: relative;
      overflow-y: auto !important;
      max-height: none !important;
      height: auto !important;
    }

    /* === 修复maxh类导致的滚动问题 === */
    .maxh {
      overflow-y: auto !important;
      max-height: none !important;
      height: auto !important;
    }

    /* === 修复body滚动 === */
    body {
      overflow-y: auto !important;
    }

    /* === 图片卡片 - 奢华质感 === */
    .yi2-item {
      position: relative;
      border-radius: 20px;
      overflow: hidden;
      transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
      background: linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%);
    }

    .yi2-item::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      padding: 1.5px;
      background: linear-gradient(135deg, 
        rgba(218,165,32,0.4) 0%, 
        rgba(255,255,255,0.1) 25%,
        rgba(184,134,11,0.2) 50%,
        rgba(255,255,255,0.05) 75%,
        rgba(139,90,43,0.3) 100%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
      z-index: 3;
      opacity: 0.6;
      transition: opacity 0.4s ease;
    }

    .yi2-item:hover::before {
      opacity: 1;
    }

    .yi2-item::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: conic-gradient(
        from 0deg,
        transparent 0deg,
        rgba(218,165,32,0.08) 60deg,
        transparent 120deg,
        transparent 180deg,
        rgba(184,134,11,0.06) 240deg,
        transparent 300deg,
        transparent 360deg
      );
      animation: rotate 15s linear infinite;
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      z-index: 2;
    }

    .yi2-item:hover::after {
      opacity: 1;
    }

    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .yi2-item img {
      transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
      border-radius: 20px;
      filter: contrast(1.05) saturate(1.08);
    }

    .yi2-item:hover {
      transform: translateY(-12px) scale(1.03);
      box-shadow: 
        0 30px 60px rgba(0,0,0,0.5),
        0 0 80px rgba(218,165,32,0.08),
        inset 0 1px 0 rgba(255,255,255,0.1);
    }

    .yi2-item:hover img {
      transform: scale(1.06);
      filter: contrast(1.1) saturate(1.15) brightness(1.05);
    }

    /* === 视频容器 - 奢华阴影 === */
    .yi-v-box {
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 
        0 30px 60px -15px rgba(0,0,0,0.6),
        0 0 40px rgba(218,165,32,0.05),
        inset 0 1px 0 rgba(255,255,255,0.08);
      border: 1px solid rgba(218,165,32,0.1);
    }

    /* === 按钮 - 奢华水晶 === */
    .btn {
      position: relative;
      border-radius: 14px !important;
      background: linear-gradient(135deg, rgba(218,165,32,0.08) 0%, rgba(139,90,43,0.05) 100%) !important;
      border: 1px solid rgba(218,165,32,0.2) !important;
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) !important;
      overflow: hidden;
      backdrop-filter: blur(20px);
      box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,215,0,0.15), transparent);
      transition: left 0.7s ease;
    }

    .btn::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 50%);
      pointer-events: none;
    }

    .btn:hover {
      border-color: rgba(218,165,32,0.5) !important;
      background: linear-gradient(135deg, rgba(218,165,32,0.12) 0%, rgba(139,90,43,0.08) 100%) !important;
      transform: translateY(-3px);
      box-shadow: 
        0 15px 40px rgba(0,0,0,0.3),
        0 0 30px rgba(218,165,32,0.15),
        inset 0 1px 0 rgba(255,255,255,0.1);
    }

    .btn:hover::before {
      left: 150%;
    }

    /* === 菜单按钮 - 奢华 === */
    .menu-box {
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      padding: 12px 0;
    }

    .menu-box:hover {
      transform: scale(1.08);
    }

    .menu-box .menu-line {
      background: linear-gradient(90deg, #fff 0%, rgba(218,165,32,0.8) 100%);
      border-radius: 2px;
      transition: all 0.3s ease;
      box-shadow: 0 0 0 rgba(218,165,32,0);
    }

    .menu-box:hover .menu-line {
      background: linear-gradient(90deg, #fff 0%, #daa520 100%);
      box-shadow: 0 0 15px rgba(218,165,32,0.5);
    }

    /* === 返回按钮 - 奢华 === */
    .goout {
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
    }

    .goout:hover {
      transform: scale(1.15);
      filter: drop-shadow(0 4px 15px rgba(218,165,32,0.3));
    }

    /* === 导航点 - 奢华 === */
    .breadcrumb .b-item {
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: rgba(218,165,32,0.15);
      transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      border: 1px solid rgba(218,165,32,0.3);
      box-shadow: inset 0 1px 2px rgba(0,0,0,0.3);
    }

    .breadcrumb .b-item:hover {
      transform: scale(1.6);
      background: rgba(218,165,32,0.4);
      border-color: rgba(218,165,32,0.6);
      box-shadow: 0 0 15px rgba(218,165,32,0.3);
    }

    .breadcrumb .b-item.active {
      background: linear-gradient(135deg, #daa520 0%, #b8860b 100%);
      box-shadow: 
        0 0 20px rgba(218,165,32,0.6),
        0 0 40px rgba(218,165,32,0.3),
        inset 0 1px 2px rgba(255,255,255,0.3);
      border-color: transparent;
      animation: pulseGold 2s ease-in-out infinite;
    }

    @keyframes pulseGold {
      0%, 100% { 
        box-shadow: 0 0 20px rgba(218,165,32,0.6), 0 0 40px rgba(218,165,32,0.3);
        transform: scale(1);
      }
      50% { 
        box-shadow: 0 0 30px rgba(218,165,32,0.8), 0 0 60px rgba(218,165,32,0.4);
        transform: scale(1.1);
      }
    }

    /* === 主视频区 - 奢华 === */
    .main-con-box {
      border-radius: 28px;
      overflow: hidden;
      box-shadow: 
        0 30px 60px -15px rgba(0,0,0,0.6),
        0 0 50px rgba(218,165,32,0.06),
        inset 0 1px 0 rgba(255,255,255,0.08);
      border: 1px solid rgba(218,165,32,0.08);
    }

    /* === 视频美化 === */
    video {
      border-radius: 14px;
    }

    /* === 滚动条 - 奢华 === */
    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: rgba(218,165,32,0.03);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, rgba(218,165,32,0.4), rgba(184,134,11,0.2));
      border-radius: 5px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(180deg, rgba(218,165,32,0.6), rgba(184,134,11,0.4));
    }

    /* === 入场动画 === */
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .yi2-item {
      animation: fadeInUp 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards;
      opacity: 0;
    }

    .yi2-item:nth-child(1) { animation-delay: 0.08s; }
    .yi2-item:nth-child(2) { animation-delay: 0.14s; }
    .yi2-item:nth-child(3) { animation-delay: 0.2s; }
    .yi2-item:nth-child(4) { animation-delay: 0.26s; }
    .yi2-item:nth-child(5) { animation-delay: 0.32s; }
    .yi2-item:nth-child(6) { animation-delay: 0.38s; }
    .yi2-item:nth-child(7) { animation-delay: 0.44s; }

    /* === 文字美化 === */
    .wen-btnbox .btn,
    .yi-btn-list .btn {
      font-weight: 500;
      letter-spacing: 2px;
      text-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }

    /* === 装饰性光效 === */
    .page::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 70%;
      height: 1.5px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(218,165,32,0.3) 20%, 
        rgba(255,255,255,0.4) 50%,
        rgba(218,165,32,0.3) 80%,
        transparent 100%);
    }

    /* === 底部装饰线 === */
    .page::after {
      content: '';
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      width: 40%;
      height: 1px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        rgba(218,165,32,0.2) 30%,
        rgba(218,165,32,0.2) 70%,
        transparent 100%);
    }
  `;
  document.head.appendChild(style);
}

// 创建右侧宣传片视频
function createSideVideo() {
  console.log('开始创建宣传片视频');
  
  // 找到.yi-v-box容器中的主视频
  const yiVBox = document.querySelector('.yi-v-box');
  const mainVideo = yiVBox ? yiVBox.querySelector('.yi-video:not(.yi-v-item)') : null;
  
  if (mainVideo && yiVBox) {
    console.log('找到现有的主视频元素');
    
    // 调整容器位置，将视频往上移
    yiVBox.style.paddingTop = '0';
    yiVBox.style.marginTop = '-160px';
    
    // 修改视频源
    const source = mainVideo.querySelector('source');
    if (source) {
      source.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/宣传片.MP4.mp4';
    } else {
      // 如果没有source元素，直接设置video的src
      mainVideo.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/宣传片.MP4.mp4';
    }
    
    // 设置视频属性
    mainVideo.muted = true;
    mainVideo.loop = true;
    mainVideo.autoplay = true;
    mainVideo.playsInline = true;
    mainVideo.preload = 'auto';
    mainVideo.style.width = '100%';
    mainVideo.style.height = '100%';
    mainVideo.style.objectFit = 'contain';
    mainVideo.style.background = '#000';
    
    // 添加错误处理
    mainVideo.addEventListener('error', function(e) {
      console.error('视频加载错误:', e);
      console.error('错误码:', mainVideo.error ? mainVideo.error.code : '未知');
      console.error('错误信息:', mainVideo.error ? mainVideo.error.message : '未知');
      // 如果现有视频出错，创建新视频
      createNewVideoInBox(yiVBox);
    });
    
    // 添加加载完成处理
    mainVideo.addEventListener('loadedmetadata', function() {
      console.log('视频元数据加载完成');
      console.log('视频时长:', mainVideo.duration);
    });
    
    // 添加播放事件
    mainVideo.addEventListener('play', function() {
      console.log('视频开始播放');
    });
    
    // 重新加载并播放
    mainVideo.load();
    mainVideo.play().then(function() {
      console.log('视频播放成功');
    }).catch(function(err) {
      console.error('视频播放失败:', err);
      // 如果自动播放失败，尝试用户交互后播放
      document.addEventListener('click', function playOnClick() {
        mainVideo.play().then(function() {
          console.log('用户点击后视频播放成功');
        }).catch(function(e) {
          console.error('用户点击后播放仍失败:', e);
          createNewVideoInBox(yiVBox);
        });
        document.removeEventListener('click', playOnClick);
      }, { once: true });
    });
    
    console.log('宣传片视频已放入右侧框中');
    
  } else {
    console.log('未找到目标容器或主视频，使用备用方案');
    // 创建视频容器
    const videoContainer = document.createElement('div');
    videoContainer.className = 'yi-v-box';
    videoContainer.style.position = 'fixed';
    videoContainer.style.right = '80px';
    videoContainer.style.top = '-30px';
    videoContainer.style.bottom = '150px';
    videoContainer.style.width = 'calc(55% - 100px)';
    videoContainer.style.borderRadius = '20px';
    videoContainer.style.overflow = 'hidden';
    videoContainer.style.boxShadow = '0 15px 50px rgba(0,0,0,0.6), 0 0 40px rgba(218,165,32,0.08)';
    videoContainer.style.zIndex = '50';
    videoContainer.style.border = '1px solid rgba(218,165,32,0.15)';
    videoContainer.style.background = '#000';
    
    // 创建视频元素
    const video = document.createElement('video');
    video.className = 'yi-video';
    video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/宣传片.MP4.mp4';
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'contain';
    video.style.background = '#000';
    
    videoContainer.appendChild(video);
    document.body.appendChild(videoContainer);
    
    console.log('备用方案：宣传片视频已创建');
    
    // 尝试播放视频
    video.play().then(function() {
      console.log('视频播放成功');
    }).catch(function(err) {
      console.error('视频播放失败:', err);
      document.addEventListener('click', function playOnClick() {
        video.play().then(function() {
          console.log('用户点击后视频播放成功');
        }).catch(function(e) {
          console.error('用户点击后播放仍失败:', e);
        });
        document.removeEventListener('click', playOnClick);
      }, { once: true });
    });
  }
}

// 在容器中创建新视频
function createNewVideoInBox(container) {
  console.log('创建新视频元素');
  
  // 创建视频元素
  const video = document.createElement('video');
  video.className = 'yi-video';
  video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/宣传片.MP4.mp4';
  video.muted = true;
  video.loop = true;
  video.autoplay = true;
  video.playsInline = true;
  video.preload = 'auto';
  video.style.width = '100%';
  video.style.height = '100%';
  video.style.objectFit = 'contain';
  video.style.background = '#000';
  
  // 清空容器并添加新视频
  container.innerHTML = '';
  container.appendChild(video);
  
  // 尝试播放
  video.play().catch(function(err) {
    console.error('新视频播放失败:', err);
    document.addEventListener('click', function playOnClick() {
      video.play();
      document.removeEventListener('click', playOnClick);
    }, { once: true });
  });
}

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM加载完成');
  
  // 调用美化函数
  addBeautyStyles();
  
  // 创建右侧宣传片视频
  createSideVideo();
  
  // 等待Vue组件渲染完成
  setTimeout(function() {
    console.log('开始查找.yi2-item元素');
    
    // 找到所有的.yi2-item元素
    const yi2Items = document.querySelectorAll('.yi2-item');
    console.log('找到.yi2-item元素数量:', yi2Items.length);
    
    // 遍历所有的.yi2-item元素
    yi2Items.forEach(function(item) {
      // 找到其中的图片元素
      const img = item.querySelector('img');
      if (img) {
        console.log('找到图片:', img.src);
      }
    });
  }, 1000);
  
  // 使用事件委托，监听所有图片元素的点击事件
  document.addEventListener('click', function(event) {
    const img = event.target.closest('img');
    if (img) {
      // 检查图片是否是yi2.4173006e.jpg
      if (img.src.includes('yi2.4173006e')) {
        console.log('点击了yi2.4173006e图片');
        
        // 隐藏所有视频
        document.querySelectorAll('video').forEach(video => {
          video.classList.add('hide');
          video.pause();
          video.currentTime = 0;
        });
        
        // 找到图片对应的.yi2-item元素
        const yiItem = img.closest('.yi2-item');
        if (yiItem) {
          // 确保.yi2-item元素有相对定位
          yiItem.style.position = 'relative';
          
          // 创建一个新的视频元素
          const video = document.createElement('video');
          video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/步骤2.MP4.mp4';
          video.autoplay = true;
          video.muted = true;
          video.style.position = 'absolute';
          video.style.top = '0';
          video.style.left = '0';
          video.style.right = '0';
          video.style.bottom = '0';
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          video.style.zIndex = '999';
          video.style.background = 'black';
          video.style.borderRadius = '20px';
          
          console.log('创建视频元素:', video);
          
          // 监听视频加载错误事件
          video.addEventListener('error', function() {
            console.log('视频加载失败，移除视频元素');
            video.remove();
          });
          
          // 监听视频播放结束事件
          video.addEventListener('ended', function() {
            console.log('视频播放结束，移除视频元素');
            // 移除视频元素，恢复原来的图片显示
            video.remove();
          });
          
          // 将视频添加到.yi2-item元素中
          yiItem.appendChild(video);
          console.log('视频已添加到DOM');
        }
      }
      
      // 检查图片是否是yi1.2c92c805.jpg
      if (img.src.includes('yi1.2c92c805')) {
        console.log('点击了yi1.2c92c805图片');
        
        // 隐藏所有视频
        document.querySelectorAll('video').forEach(video => {
          video.classList.add('hide');
          video.pause();
          video.currentTime = 0;
        });
        
        // 找到图片对应的.yi2-item元素
        const yiItem = img.closest('.yi2-item');
        if (yiItem) {
          // 确保.yi2-item元素有相对定位
          yiItem.style.position = 'relative';
          
          // 创建一个新的视频元素
          const video = document.createElement('video');
          video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/步骤1.MP4.mp4';
          video.autoplay = true;
          video.muted = true;
          video.style.position = 'absolute';
          video.style.top = '0';
          video.style.left = '0';
          video.style.right = '0';
          video.style.bottom = '0';
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          video.style.zIndex = '999';
          video.style.background = 'black';
          video.style.borderRadius = '20px';
          
          console.log('创建视频元素:', video);
          
          // 监听视频加载错误事件
          video.addEventListener('error', function() {
            console.log('视频加载失败，移除视频元素');
            video.remove();
          });
          
          // 监听视频播放结束事件
          video.addEventListener('ended', function() {
            console.log('视频播放结束，移除视频元素');
            // 移除视频元素，恢复原来的图片显示
            video.remove();
          });
          
          // 将视频添加到.yi2-item元素中
          yiItem.appendChild(video);
          console.log('视频已添加到DOM');
        }
      }
      
      // 检查图片是否是yi5.cf795bcb.jpg
      if (img.src.includes('yi5.cf795bcb')) {
        console.log('点击了yi5.cf795bcb图片');
        
        // 隐藏所有视频
        document.querySelectorAll('video').forEach(video => {
          video.classList.add('hide');
          video.pause();
          video.currentTime = 0;
        });
        
        // 找到图片对应的.yi2-item元素
        const yiItem = img.closest('.yi2-item');
        if (yiItem) {
          // 确保.yi2-item元素有相对定位
          yiItem.style.position = 'relative';
          
          // 创建一个新的视频元素
          const video = document.createElement('video');
          video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/步骤5.MP4.mp4';
          video.autoplay = true;
          video.muted = true;
          video.style.position = 'absolute';
          video.style.top = '0';
          video.style.left = '0';
          video.style.right = '0';
          video.style.bottom = '0';
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          video.style.zIndex = '999';
          video.style.background = 'black';
          video.style.borderRadius = '20px';
          
          console.log('创建视频元素:', video);
          
          // 监听视频加载错误事件
          video.addEventListener('error', function() {
            console.log('视频加载失败，移除视频元素');
            video.remove();
          });
          
          // 监听视频播放结束事件
          video.addEventListener('ended', function() {
            console.log('视频播放结束，移除视频元素');
            // 移除视频元素，恢复原来的图片显示
            video.remove();
          });
          
          // 将视频添加到.yi2-item元素中
          yiItem.appendChild(video);
          console.log('视频已添加到DOM');
        }
      }
      
      // 检查图片是否是yi6.22cc9139.jpg
      if (img.src.includes('yi6.22cc9139')) {
        console.log('点击了yi6.22cc9139图片');
        
        // 隐藏所有视频
        document.querySelectorAll('video').forEach(video => {
          video.classList.add('hide');
          video.pause();
          video.currentTime = 0;
        });
        
        // 找到图片对应的.yi2-item元素
        const yiItem = img.closest('.yi2-item');
        if (yiItem) {
          // 确保.yi2-item元素有相对定位
          yiItem.style.position = 'relative';
          
          // 创建一个新的视频元素
          const video = document.createElement('video');
          video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/步骤6.MP4.mp4';
          video.autoplay = true;
          video.muted = true;
          video.style.position = 'absolute';
          video.style.top = '0';
          video.style.left = '0';
          video.style.right = '0';
          video.style.bottom = '0';
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          video.style.zIndex = '999';
          video.style.background = 'black';
          video.style.borderRadius = '20px';
          
          console.log('创建视频元素:', video);
          
          // 监听视频加载错误事件
          video.addEventListener('error', function() {
            console.log('视频加载失败，移除视频元素');
            video.remove();
          });
          
          // 监听视频播放结束事件
          video.addEventListener('ended', function() {
            console.log('视频播放结束，移除视频元素');
            // 移除视频元素，恢复原来的图片显示
            video.remove();
          });
          
          // 将视频添加到.yi2-item元素中
          yiItem.appendChild(video);
          console.log('视频已添加到DOM');
        }
      }
      
      // 检查图片是否是yi7.7de2c45c.jpg
      if (img.src.includes('yi7.7de2c45c')) {
        console.log('点击了yi7.7de2c45c图片');
        
        // 隐藏所有视频
        document.querySelectorAll('video').forEach(video => {
          video.classList.add('hide');
          video.pause();
          video.currentTime = 0;
        });
        
        // 找到图片对应的.yi2-item元素
        const yiItem = img.closest('.yi2-item');
        if (yiItem) {
          // 确保.yi2-item元素有相对定位
          yiItem.style.position = 'relative';
          
          // 创建一个新的视频元素
          const video = document.createElement('video');
          video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/步骤7.MP4.mp4';
          video.autoplay = true;
          video.muted = true;
          video.style.position = 'absolute';
          video.style.top = '0';
          video.style.left = '0';
          video.style.right = '0';
          video.style.bottom = '0';
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          video.style.zIndex = '999';
          video.style.background = 'black';
          video.style.borderRadius = '20px';
          
          console.log('创建视频元素:', video);
          
          // 监听视频加载错误事件
          video.addEventListener('error', function() {
            console.log('视频加载失败，移除视频元素');
            video.remove();
          });
          
          // 监听视频播放结束事件
          video.addEventListener('ended', function() {
            console.log('视频播放结束，移除视频元素');
            // 移除视频元素，恢复原来的图片显示
            video.remove();
          });
          
          // 将视频添加到.yi2-item元素中
          yiItem.appendChild(video);
          console.log('视频已添加到DOM');
        }
      }
      
      // 检查图片是否是yi4.6c86cfaf.jpg
      if (img.src.includes('yi4.6c86cfaf')) {
        console.log('点击了yi4.6c86cfaf图片');
        
        // 隐藏所有视频
        document.querySelectorAll('video').forEach(video => {
          video.classList.add('hide');
          video.pause();
          video.currentTime = 0;
        });
        
        // 找到图片对应的.yi2-item元素
        const yiItem = img.closest('.yi2-item');
        if (yiItem) {
          // 确保.yi2-item元素有相对定位
          yiItem.style.position = 'relative';
          
          // 创建一个新的视频元素
          const video = document.createElement('video');
          video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/步骤4.MP4.mp4';
          video.autoplay = true;
          video.muted = true;
          video.style.position = 'absolute';
          video.style.top = '0';
          video.style.left = '0';
          video.style.right = '0';
          video.style.bottom = '0';
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          video.style.zIndex = '999';
          video.style.background = 'black';
          video.style.borderRadius = '20px';
          
          console.log('创建视频元素:', video);
          
          // 监听视频加载错误事件
          video.addEventListener('error', function() {
            console.log('视频加载失败，移除视频元素');
            video.remove();
          });
          
          // 监听视频播放结束事件
          video.addEventListener('ended', function() {
            console.log('视频播放结束，移除视频元素');
            // 移除视频元素，恢复原来的图片显示
            video.remove();
          });
          
          // 将视频添加到.yi2-item元素中
          yiItem.appendChild(video);
          console.log('视频已添加到DOM');
        }
      }
      
      // 检查图片是否是yi3.ccc3a37d.jpg
      if (img.src.includes('yi3.ccc3a37d')) {
        console.log('点击了yi3.ccc3a37d图片');
        
        // 隐藏所有视频
        document.querySelectorAll('video').forEach(video => {
          video.classList.add('hide');
          video.pause();
          video.currentTime = 0;
        });
        
        // 找到图片对应的.yi2-item元素
        const yiItem = img.closest('.yi2-item');
        if (yiItem) {
          // 确保.yi2-item元素有相对定位
          yiItem.style.position = 'relative';
          
          // 创建一个新的视频元素
          const video = document.createElement('video');
          video.src = 'c:/Users/XXUZ/Desktop/锦绣西南艺_files/步骤3.MP4.mp4';
          video.autoplay = true;
          video.muted = true;
          video.style.position = 'absolute';
          video.style.top = '0';
          video.style.left = '0';
          video.style.right = '0';
          video.style.bottom = '0';
          video.style.width = '100%';
          video.style.height = '100%';
          video.style.objectFit = 'cover';
          video.style.zIndex = '999';
          video.style.background = 'black';
          video.style.borderRadius = '20px';
          
          console.log('创建视频元素:', video);
          
          // 监听视频加载错误事件
          video.addEventListener('error', function() {
            console.log('视频加载失败，移除视频元素');
            video.remove();
          });
          
          // 监听视频播放结束事件
          video.addEventListener('ended', function() {
            console.log('视频播放结束，移除视频元素');
            // 移除视频元素，恢复原来的图片显示
            video.remove();
          });
          
          // 将视频添加到.yi2-item元素中
          yiItem.appendChild(video);
          console.log('视频已添加到DOM');
        }
      }
    }
  });
  
  // 将"篙筒"替换为"裱布"，"综杆"替换为"刮灰"，"花筒"替换为"髹漆"
  setTimeout(function() {
    console.log('开始替换按钮文本');
    const buttons = document.querySelectorAll('button, span');
    buttons.forEach(function(btn) {
      if (btn.textContent) {
        if (btn.textContent.includes('篙筒')) {
          btn.textContent = btn.textContent.replace('篙筒', '裱布');
          console.log('已替换篙筒->裱布');
        }
        if (btn.textContent.includes('综杆')) {
          btn.textContent = btn.textContent.replace('综杆', '刮灰');
          console.log('已替换综杆->刮灰');
        }
        if (btn.textContent.includes('花筒')) {
          btn.textContent = btn.textContent.replace('花筒', '髹漆');
          console.log('已替换花筒->髹漆');
        }
      }
    });
  }, 1500);
});