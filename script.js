document.getElementById('thumbnailForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const videoId = getYoutubeVideoId(youtubeUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById('thumbnailContainer').innerHTML = `<img src="${thumbnailUrl}" alt="Thumbnail" width="640"
        height="426">`;
    } else {
        alert('Invalid YouTube URL. Please enter a valid URL.');
    }
});

function downloadThumbnail() {
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const videoId = getYoutubeVideoId(youtubeUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        window.open(thumbnailUrl);
    } else {
        alert('Invalid YouTube URL. Please enter a valid URL.');
    }
}

function getYoutubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
}