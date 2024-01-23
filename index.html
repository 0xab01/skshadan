<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="unnamed.png" type="image/x-icon">
    <title>Certificate Generator</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            text-align: center;
            background-image: url('bg.jpg');
            background-size: cover;
            background-repeat: no-repeat;
            color: white;
            font-size: x-large;
            margin: 0;
        }

        #certificateCanvas {
            max-width: 100%;
            height: auto;
            margin-top: 20px;
        }

        #downloadButton {
            margin-top: 20px;
            padding: 10px;
            background-color: #ffffff;
            color: black;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #certificateForm {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
        }

        label {
            margin-bottom: 5px;
            color: #ffffff;
        }

        input {
            padding: 8px;
            margin-bottom: 15px;
            width: 200px;
            border: 1px solid #ffffff;
            border-radius: 3px;
            box-sizing: border-box;
        }

        button {
            padding: 10px;
            background-color: #ffffff;
            color: black;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        @media (max-width: 600px) {
            body {
                font-size: medium;
            }

            input {
                width: 100%;
            }
        }
    </style>
</head>
<body>
    <h1>Certificate Generator</h1>
    <form id="certificateForm">
        <label for="name">Name:</label>
        <input type="text" id="name" required>

        <label for="class">Class:</label>
        <input type="text" id="class" required>

        <button type="button" onclick="generateCertificate()">Generate Certificate</button>
    </form>

    <canvas id="certificateCanvas" style="display: none;"></canvas>

    <button id="downloadButton" onclick="downloadCertificate()" disabled>Download Certificate</button>

    <!-- Load jsPDF library from a CDN with the defer attribute -->
    <script defer src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

    <script>
        function calculateOptimalFontSize(text, maxWidth) {
            let fontSize = 50;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            do {
                ctx.font = `bold ${fontSize}px "Arial"`;
                const textWidth = ctx.measureText(text).width;

                if (textWidth <= maxWidth) {
                    break;
                }

                fontSize--;
            } while (fontSize > 0);

            return fontSize;
        }

        function generateCertificate() {
            const name = document.getElementById('name').value;
            const className = document.getElementById('class').value;

            const certificateImage = new Image();
            certificateImage.onload = function () {
                const canvas = document.getElementById('certificateCanvas');
                const ctx = canvas.getContext('2d');

                canvas.width = certificateImage.width;
                canvas.height = certificateImage.height;

                ctx.drawImage(certificateImage, 0, 0);

                ctx.fillStyle = '#d6d6ff';

                const optimalFontSize = calculateOptimalFontSize(name, 200);
                ctx.font = `bold ${optimalFontSize}px "Arial"`;

                ctx.fillText(name, 730, 550);
                ctx.fillText(className, 780, 700);

                // Center the canvas
                const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                const canvasLeft = (screenWidth - canvas.width) / 2;
                canvas.style.marginLeft = `${canvasLeft}px`;

                canvas.style.display = 'block';
                document.getElementById('downloadButton').disabled = false;
            };

            certificateImage.src = 'png.jpeg';
        }

        function downloadCertificate() {
            const canvas = document.getElementById('certificateCanvas');
            const downloadButton = document.getElementById('downloadButton');

            if (typeof jsPDF !== 'undefined') {
                const pdf = new jsPDF('landscape');

                const dataUrl = canvas.toDataURL('image/png');

                pdf.addImage(dataUrl, 'PNG', 0, 0, pdf.internal.pageSize.width, pdf.internal.pageSize.height);

                pdf.save('certificate_generated.pdf');

                canvas.style.display = 'none';
                downloadButton.disabled = true;
            } else {
                console.error('jsPDF library not loaded.');
            }
        }
    </script>
</body>
</html>
