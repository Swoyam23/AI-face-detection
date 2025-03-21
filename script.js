const video = document.getElementById('video');
const captureButton = document.getElementById('capture');
const canvas = document.getElementById('canvas');
const resultDiv = document.getElementById('result');

const funnyImages = [
    'funny1.jpg', 'funny2.jpg', 'funny3.jpg', 'funny4.jpg'
];

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => video.srcObject = stream)
    .catch(error => console.error("Camera access denied!", error));

captureButton.addEventListener('click', () => {
    resultDiv.innerHTML = "Scanning... ⏳";
    
    setTimeout(() => {
        const randomImage = funnyImages[Math.floor(Math.random() * funnyImages.length)];
        resultDiv.innerHTML = `<img src="${randomImage}" alt="Your Result" width="250px"><br>
                               <p>Oops! Our AI has detected this as your lookalike! 😂</p>`;
    }, 2000);
});
