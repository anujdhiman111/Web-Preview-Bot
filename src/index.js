const linkPreview = require('link-preview-js');

async function getPreviewData(link, userAgent) {
    try {
    const previewData = await linkPreview.getLinkPreview(link, {
        userAgent: userAgent,
        followRedirects: true,
    });

    console.log(previewData);
    } catch (error) {
    console.error('Error:', error.message);
    }
}

getPreviewData('https://www.geeksforgeeks.org/', 'Twitterbot/1.0');
getPreviewData('https://www.youtube.com/', 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/W.X.Y.Z Safari/537.36');
