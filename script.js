document.getElementById('thumbnailForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const youtubeUrl = document.getElementById('youtubeUrl').value;
    const videoId = getYoutubeVideoId(youtubeUrl);

    if (videoId) {
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        document.getElementById('thumbnailContainer').innerHTML = `<img src="${thumbnailUrl}" alt="Thumbnail" width="600"
        height="420">`;
        document.getElementById('downloadButton').style.display = 'block';

        // Attach click event listener to the download button
        document.getElementById('downloadButton').addEventListener('click', function () {
            // Trigger the download
            downloadThumbnail(thumbnailUrl);
        });
    } else {
        alert('Invalid YouTube URL. Please enter a valid URL.');
    }
});



function getYoutubeVideoId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    
    return (match && match[2].length === 11) ? match[2] : null;
}

function downloadThumbnail(thumbnailUrl) {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the thumbnail URL
    link.href = thumbnailUrl;
    // Set the download attribute to suggest the name for the downloaded file
    link.download = 'youtube_thumbnail.jpg';
    // Append the link to the document
    document.body.appendChild(link);
    // Trigger a click on the link to start the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
}