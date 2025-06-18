// 导航菜单交互
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 移动端菜单切换
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // 动画效果
        const bars = navToggle.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });

    // 点击导航链接关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const bars = navToggle.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // 页面加载动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loading');
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.feature-card, .product-card');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// 产品详情模态框
function showProductDetails(productType) {
    const modal = document.getElementById('productModal');
    const modalContent = document.getElementById('modalContent');
    
    let content = '';
    
    if (productType === 'oct') {
        content = `
            <h2 style="color: #2c5aa0; margin-bottom: 1.5rem;">OCT生物成像分析系统</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <img src="OCT.jpg" alt="OCT系统" style="width: 100%; border-radius: 10px;">
                </div>
                <div>
                    <h3 style="color: #ff6b6b; margin-bottom: 1rem;">设备型号：Sprinter-04C</h3>
                    <p style="line-height: 1.6; margin-bottom: 1rem;">
                        OCT是一种光学成像技术，用于对样品产生实时的二维横截面图像和三维体积图像。
                        这种技术基于从样品内不同材料层的光反向散射产生微米级分辨率和毫米成像深度的图像，
                        从而提供关于样品的结构信息。
                    </p>
                </div>
            </div>
            
            <h3 style="color: #2c5aa0; margin-bottom: 1rem;">产品特性</h3>
            <ul style="list-style: none; margin-bottom: 2rem;">
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    单输入偏振敏感OCT系统，具有独特的探测单元
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    强大的系统装置能够实现高度可重复的测量
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    成像深度4mm，在空气中轴向分辨率18µm（中心波长1310nm）
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    成像深度7.0mm，在空气中轴向分辨率24µm（中心波长1325nm）
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    基础装置可选A-扫描速率高达76kHz或灵敏度高达109dB
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    包含计算机和Humage®OCT软件包
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    提供可自己搭建的系统和预配置的系统
                </li>
            </ul>
            
            <h3 style="color: #2c5aa0; margin-bottom: 1rem;">成像原理</h3>
            <div style="margin-bottom: 2rem;">
                <img src="OCTInfo.png" alt="OCT成像原理" style="width: 100%; border-radius: 10px; margin-bottom: 1rem;">
                <p style="line-height: 1.6; text-align: justify;">
                    现在，高速、高灵敏度、可测量的傅立叶域相干层析成像（FD-OCT）成为主流。FD-OCT基于利用光源的相干特性测量样品中光路长度延迟的低相干干涉法。
                    在OCT中，为了以μm级的分辨率获得截面图像，干涉仪被设定为测量从样品反射的光与参照臂的光路长度之差。
                </p>
                <p style="line-height: 1.6; text-align: justify; margin-top: 1rem;">
                    光分为迈克尔逊干涉仪的样品臂和参考臂。由样品中折射率的变化引起的反射光再次入射到样品臂光路的光纤内，
                    与经过一定光路的传输而返回参考臂中的光结合。结果得到的接口程序（干涉条纹）通过干涉仪的检测臂进行测量。
                </p>
            </div>
            
            <div style="text-align: center;">
                <button onclick="contactUs('OCT生物成像分析系统')" style="background: #ff6b6b; color: white; border: none; padding: 12px 30px; border-radius: 25px; font-size: 1rem; cursor: pointer;">
                    获取详细报价
                </button>
            </div>
        `;
    } else if (productType === 'printer') {
        content = `
            <h2 style="color: #2c5aa0; margin-bottom: 1.5rem;">生物3D打印机</h2>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
                <div>
                    <img src="打印机.png" alt="生物3D打印机" style="width: 100%; border-radius: 10px;">
                </div>
                <div>
                    <h3 style="color: #ff6b6b; margin-bottom: 1rem;">专业生物3D打印解决方案</h3>
                    <p style="line-height: 1.6; margin-bottom: 1rem;">
                        专为生物医学研究设计的高精度3D打印设备，支持多种生物材料打印，
                        为组织工程和再生医学研究提供强大支持。
                    </p>
                </div>
            </div>
            
            <h3 style="color: #2c5aa0; margin-bottom: 1rem;">产品特色</h3>
            <ul style="list-style: none; margin-bottom: 2rem;">
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    高精度生物材料打印，满足细胞研究需求
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    支持多种生物墨水，兼容性强
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    精密温度控制系统，保证细胞活性
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    专业软件支持，操作简便
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    无菌打印环境，符合实验室标准
                </li>
                <li style="padding: 0.5rem 0; position: relative; padding-left: 1.5rem;">
                    <span style="color: #4CAF50; font-weight: bold; position: absolute; left: 0;">✓</span>
                    模块化设计，便于维护和升级
                </li>
            </ul>
            
            <h3 style="color: #2c5aa0; margin-bottom: 1rem;">应用领域</h3>
            <div style="margin-bottom: 2rem;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; text-align: center;">
                        <strong>组织工程</strong><br>
                        <span style="color: #666;">构建复杂组织结构</span>
                    </div>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; text-align: center;">
                        <strong>药物筛选</strong><br>
                        <span style="color: #666;">创建药物测试模型</span>
                    </div>
                    <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; text-align: center;">
                        <strong>再生医学</strong><br>
                        <span style="color: #666;">支持细胞再生研究</span>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center;">
                <button onclick="contactUs('生物3D打印机')" style="background: #ff6b6b; color: white; border: none; padding: 12px 30px; border-radius: 25px; font-size: 1rem; cursor: pointer;">
                    获取详细报价
                </button>
            </div>
        `;
    }
    
    modalContent.innerHTML = content;
    modal.style.display = 'block';
    
    // 添加关闭事件
    const closeBtn = modal.querySelector('.close');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    
    // 点击模态框外部关闭
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// 联系我们功能
function contactUs(productName) {
    // 关闭模态框
    document.getElementById('productModal').style.display = 'none';
    
    // 滚动到联系表单
    document.getElementById('contact').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // 预填产品选择
    setTimeout(() => {
        const selectElement = document.querySelector('select');
        const options = selectElement.options;
        for (let i = 0; i < options.length; i++) {
            if (options[i].text.includes(productName.split('（')[0])) {
                selectElement.selectedIndex = i;
                break;
            }
        }
    }, 1000);
}

// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const product = this.querySelector('select').value;
            const message = this.querySelector('textarea').value;
            
            // 验证表单
            if (!name || !email || !phone || !product) {
                alert('请填写所有必填项');
                return;
            }
            
            // 模拟提交成功
            alert('谢谢您的咨询！我们将在24小时内联系您。');
            
            // 重置表单
            this.reset();
        });
    }
});

// 平滑滚动效果
document.addEventListener('DOMContentLoaded', function() {
    // 为所有锚点链接添加平滑滚动
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// 页面滚动时的视差效果
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// 数字动画效果（如果需要添加统计数据）
function animateNumbers() {
    const numbers = document.querySelectorAll('.animate-number');
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            number.textContent = Math.floor(current);
            
            if (current >= target) {
                number.textContent = target;
                clearInterval(timer);
            }
        }, 20);
    });
}

// 懒加载图片
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}); 