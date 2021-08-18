let topTextInput, topTextSizeInput, imageInput, generateBtn, canvas, ctx;

function generateMeme (img, topText, topTextSize) {
    let fontSize;

    // Size canvas to image
    canvas.width = img.width;
    canvas.height = img.height;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Draw main image
    ctx.drawImage(img, 0, 0);

    // Text style: white with black borders
    ctx.fillStyle = '#000080';
    ctx.strokeStyle = 'white';
    ctx.textAlign = 'center';

    // Top text font size
    fontSize = canvas.width * topTextSize;
    ctx.font = fontSize + 'px Slackey';
    ctx.lineWidth = fontSize / 40;

    // Draw top text
    ctx.textBaseline = 'top';
    topText.split('\n').forEach(function (t, i) {
        ctx.fillText(t, canvas.width / 2, (canvas.height / 2) + ((i-1) * fontSize), canvas.width);
        ctx.strokeText(t, canvas.width / 2, (canvas.height / 2) + ((i-1) * fontSize), canvas.width);
    });
}

function init () {
    // Initialize variables
    topTextInput = document.getElementById('top-text');
    topTextSizeInput = document.getElementById('top-text-size-input');
    imageInput = document.getElementById('image-input');
    generateBtn = document.getElementById('generate-btn');
    canvas = document.getElementById('meme-canvas');
    
    ctx = canvas.getContext('2d');

    canvas.width = canvas.height = 0;

    // Default text
    topTextInput.value = 'One eternity\nlater';

    // Generate button click listener
    generateBtn.addEventListener('click', function () {
        // Read image as DataURL using the FileReader API
        let reader = new FileReader();
        reader.onload = function () {
            let img = new Image;
            img.src = reader.result;
            generateMeme(img, topTextInput.value, topTextSizeInput.value);
        };
        reader.readAsDataURL(imageInput.files[0]);
    });
}

init();