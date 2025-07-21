const square = document.getElementById('square');
const gameContainer = document.getElementById('game-container');

let squarePositionX = gameContainer.offsetWidth / 2 - square.offsetWidth / 2; // بدء المربع في المنتصف
let squarePositionY = gameContainer.offsetHeight - square.offsetHeight; // المربع يبدأ في أسفل الشاشة

// تحديث موقع المربع
function updateSquarePosition() {
    square.style.left = `${squarePositionX}px`;
    square.style.bottom = `${squarePositionY}px`;
}

// معالجة القفز
function jump() {
    let jumpHeight = 150; // ارتفاع القفز
    let jumpDuration = 300; // مدة القفز (بالميلي ثانية)

    square.style.transition = `all ${jumpDuration / 1000}s ease-in-out`;
    squarePositionY += jumpHeight;
    updateSquarePosition();

    // العودة إلى الأسفل بعد القفز
    setTimeout(() => {
        squarePositionY -= jumpHeight;
        updateSquarePosition();
    }, jumpDuration);
}

// الاستماع لمفاتيح لوحة المفاتيح
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        // حركة لليسار
        if (squarePositionX > 0) {
            squarePositionX -= 10;
            updateSquarePosition();
        }
    } else if (event.key === 'ArrowRight') {
        // حركة لليمين
        if (squarePositionX < gameContainer.offsetWidth - square.offsetWidth) {
            squarePositionX += 10;
            updateSquarePosition();
        }
    } else if (event.key === 'ArrowUp') {
        // قفز للأعلى
        jump();
    }
});

updateSquarePosition();