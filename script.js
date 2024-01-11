document.getElementById('thumbnailForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const youtubeUrl = document.getElementById('youtubeUrl').value;

    if (isValidYoutubeUrl(youtubeUrl)) {
        const videoId = getYoutubeVideoId(youtubeUrl);

        if (videoId) {
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
            document.getElementById('thumbnailContainer').innerHTML = `<img src="${thumbnailUrl}" alt="Thumbnail">`;
            downloadthumbail(thumbnailUrl);
        } else {
            alert('Invalid YouTube URL. Please enter a valid URL.');
        }
    } else {
        alert('Invalid YouTube URL format. Please enter a valid YouTube URL.');
    }
});


function downloadthumbail(url){
    var link = document.createElement('a');
    link.href = url;
    link.download = 'thumbnail.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

}
function isValidYoutubeUrl(url) {
    const regExp = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=[\w-]{11}$/;
    return regExp.test(url);
}

function getYoutubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
}