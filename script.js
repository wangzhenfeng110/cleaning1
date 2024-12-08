document.addEventListener('DOMContentLoaded', function() {
    // 获取所有tab链接
    const tabLinks = document.querySelectorAll('.tab-link');
    
    // 设置点击Tab时更改背景
    tabLinks.forEach(link => {
        link.addEventListener('click', function() {
            const backgroundUrl = this.getAttribute('data-background');
        })
    })
})