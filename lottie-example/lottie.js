var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'), // Required
    path: 'data.json', // Required
    renderer: 'svg', // Required
    loop: true, // Optional
    autoplay: true // Optional
});