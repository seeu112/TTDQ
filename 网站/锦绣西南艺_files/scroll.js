// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
  // 获取所有的.yi2-item元素
  const yi2Items = document.querySelectorAll('.yi2-item');
  
  // 检查是否有至少3个.yi2-item元素
  if (yi2Items.length >= 3) {
    // 获取前三个.yi2-item元素
    const item1 = yi2Items[0];
    const item2 = yi2Items[1];
    const item3 = yi2Items[2];
    
    // 获取它们的初始位置
    const item1Rect = item1.getBoundingClientRect();
    const item2Rect = item2.getBoundingClientRect();
    const item3Rect = item3.getBoundingClientRect();
    
    // 计算初始偏移量
    const initialOffset1 = item1Rect.top;
    const initialOffset2 = item2Rect.top;
    const initialOffset3 = item3Rect.top;
    
    // 监听滚动事件
    window.addEventListener('scroll', function() {
      // 获取当前滚动位置
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      // 计算新的位置
      const newTop1 = initialOffset1 - scrollTop;
      const newTop2 = initialOffset2 - scrollTop;
      const newTop3 = initialOffset3 - scrollTop;
      
      // 当滚动到一定位置时，调整图片位置
      if (scrollTop > initialOffset1) {
        // 让item2和item3跟随滚动
        item2.style.transform = `translateY(${scrollTop - initialOffset1}px)`;
        item3.style.transform = `translateY(${scrollTop - initialOffset1}px)`;
      } else {
        // 恢复初始位置
        item2.style.transform = 'translateY(0)';
        item3.style.transform = 'translateY(0)';
      }
    });
  }
});