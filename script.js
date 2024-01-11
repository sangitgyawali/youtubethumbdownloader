document.getElementById('thumbnailForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const videoId = getYoutubeVideoId(youtubeUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById('thumbnailContainer').innerHTML = `<img src="${thumbnailUrl}" alt="Thumbnail" width="600"
        height="420">`;
        document.getElementById('downloadButton').setAttribute('onclick', `window.open('${thumbnailUrl}')`);
    } else {
        alert('Invalid YouTube URL. Please enter a valid URL.');
    }
});

window.onload = function() {
    const downloadButton = document.createElement('button');
    downloadButton.innerHTML = 'Download';
    downloadButton.setAttribute('id', 'downloadButton');
    downloadButton.setAttribute('class', 'btn btn-primary');
    downloadButton.setAttribute('style', 'margin-top: 10px;');
    document.getElementById('thumbnailContainer').appendChild(downloadButton);
}

function getYoutubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
}