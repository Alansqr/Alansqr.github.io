// 导航菜单切换
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 关闭移动端菜单
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
}));

// 滚动时头部样式变化
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        header.classList.toggle('scrolled', window.scrollY > 100);
    }
});

// 表单提交
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('感谢您的消息！我会尽快回复您。');
        contactForm.reset();
    });
}

// 详细联系表单提交
const contactFormDetailed = document.querySelector('.form-detailed');
if (contactFormDetailed) {
    contactFormDetailed.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('感谢您的消息！我会尽快回复您。');
        contactFormDetailed.reset();
    });
}

// 技能进度条动画
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = width;
        }, 300);
    });
}

// 当技能部分进入视口时触发动画
const skillsSection = document.querySelector('.skills-grid');
if (skillsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
}

// 作品集筛选功能
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item-detailed');

if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前点击的按钮添加active类
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// FAQ展开/收起功能
const faqQuestions = document.querySelectorAll('.faq-question');
if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            
            // 关闭其他打开的FAQ
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem && item.classList.contains('active')) {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = '0';
                    item.querySelector('.faq-question i').classList.remove('fa-chevron-up');
                    item.querySelector('.faq-question i').classList.add('fa-chevron-down');
                }
            });
            
            // 切换当前FAQ
            faqItem.classList.toggle('active');
            
            if (faqItem.classList.contains('active')) {
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
                question.querySelector('i').classList.remove('fa-chevron-down');
                question.querySelector('i').classList.add('fa-chevron-up');
            } else {
                faqAnswer.style.maxHeight = '0';
                question.querySelector('i').classList.remove('fa-chevron-up');
                question.querySelector('i').classList.add('fa-chevron-down');
            }
        });
    });
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化FAQ高度
    const faqAnswers = document.querySelectorAll('.faq-answer');
    faqAnswers.forEach(answer => {
        answer.style.maxHeight = '0';
    });
    
    // 初始化AOS动画（如果需要可以添加AOS库）
    // AOS.init();
    
    console.log('网站加载完成！');
});