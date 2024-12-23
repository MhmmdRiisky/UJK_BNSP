export function drawOnCanvas(canvas) {
       const ctx = canvas.getContext('2d');
       
       // Draw a blue rectangle on the canvas
       ctx.fillStyle = 'blue';
       ctx.fillRect(50, 50, 150, 100);
     }
     