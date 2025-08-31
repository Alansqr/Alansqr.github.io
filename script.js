// 日夜模式切换
const themeToggle = document.getElementById('theme-toggle');
let isDark = false;
themeToggle.addEventListener('click', () => {
	isDark = !isDark;
	document.body.classList.toggle('dark-mode', isDark);
	themeToggle.textContent = isDark ? '🌙' : '☀️';
});

// 平滑过渡样式（建议加到 style.css）
document.body.style.transition = 'background 0.5s, color 0.5s';

// 打字机动态标题
const typewriter = document.getElementById('typewriter');
const texts = [
	'你好，我是宋祺瑞',
	'一名前端开发爱好者',
	'热爱养鱼、养狗、养龟',
	'欢迎访问我的主页！'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
	const current = texts[textIndex];
	let display = current.substring(0, charIndex);
	typewriter.textContent = display;
	if (!isDeleting && charIndex < current.length) {
		charIndex++;
		setTimeout(type, 120);
	} else if (isDeleting && charIndex > 0) {
		charIndex--;
		setTimeout(type, 60);
	} else {
		if (!isDeleting) {
			isDeleting = true;
			setTimeout(type, 1000);
		} else {
			isDeleting = false;
			textIndex = (textIndex + 1) % texts.length;
			setTimeout(type, 500);
		}
	}
}

window.addEventListener('DOMContentLoaded', type);
