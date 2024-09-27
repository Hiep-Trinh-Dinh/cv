// Lấy phần tử hình ảnh bằng class "profile-img"
const profileImg = document.querySelector('.profile-img');

// Thêm sự kiện lắng nghe khi nhấn vào hình ảnh
profileImg.addEventListener('click', function() {
    alert('Xin chào, tôi là Hiệp');
});