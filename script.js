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
            display: none;
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
            }}
    </style>

    <!-- Include jsPDF library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>

    <script>
        function generateCertificate() {
            const name = document.getElementById('name').value;
            const className = document.getElementById('class').value;

            const certificateImage = new Image();

            certificateImage.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Adjust canvas size based on the image size
                canvas.width = certificateImage.width;
                canvas.height = certificateImage.height;

                ctx.drawImage(certificateImage, 0, 0);

                // Draw your certificate content on the canvas
                ctx.fillStyle = '#d6d6ff';
                ctx.font = 'bold 40px Arial';
                ctx.fillText(name, 100, 200);
                ctx.fillText(className, 100, 300);

                // Convert canvas to data URL
                const imageDataUrl = canvas.toDataURL('image/png'); // Use PNG format

                // Create a PDF document
                const pdfDoc = new window.jspdf.jsPDF(); // Use the global jsPDF object
                pdfDoc.addImage(imageDataUrl, 'JPEG', 0, 0, 210, 297);
                pdfDoc.save('Certificate.pdf');
            };

            certificateImage.src = 'png.jpeg'; // Adjust the image source
        }
    </script>
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
</body>

</html>
