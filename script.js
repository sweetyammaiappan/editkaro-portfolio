/* script.js */
function filterVideos(category) {
    const videos = document.querySelectorAll('.video');
    videos.forEach(video => {
        if (category === 'all' || video.dataset.category === category) {
            video.style.display = 'block';
            video.classList.add('fade-in');
        } else {
            video.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});