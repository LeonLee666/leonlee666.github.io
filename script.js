// 导航栏功能
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.research': 'Research',
        'nav.publications': 'Publications',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.title': 'Ph.D. in Computer Science',
        'hero.affiliation': 'Researcher, Cloud Computing Research Institute, China Telecom',
        'hero.interests': 'Research Interests',
        'hero.btnPublications': 'View Publications',
        'hero.btnContact': 'Contact Me',
        'about.title': 'About Me',
        'about.p1': 'I am currently a Researcher at the Cloud Computing Research Institute of China Telecom, focusing on vector database research. My work centers on developing high-performance, scalable vector database systems for AI and machine learning applications.',
        'about.p2': 'Before joining China Telecom, I worked at ByteDance in 2024 on the development of VeDB, a cloud-native database system. From 2020 to 2023, I was at Huawei Cloud working on GaussDB, a distributed relational database system. These experiences have given me extensive expertise in database internals, distributed systems, and cloud-native architectures.',
        'about.p3': 'I received my Ph.D. and B.S. degrees in Computer Science from Northeastern University, China. I am passionate about building robust and efficient database systems that power modern data-intensive applications.',
        'about.education': 'Education',
        'about.phd': 'Ph.D. in Computer Science',
        'about.bs': 'B.S. in Computer Science',
        'about.neu': 'Northeastern University, China',
        'about.experience': 'Work Experience',
        'about.work1Title': 'Researcher',
        'about.work1Company': 'Cloud Computing Research Institute, China Telecom',
        'about.work2Title': 'Database Engineer',
        'about.work2Company': 'ByteDance (VeDB)',
        'about.work3Title': 'Database Engineer',
        'about.work3Company': 'Huawei Cloud (GaussDB)',
        'research.title': 'Research Interests',
        'research.vectorTitle': 'Vector Database',
        'research.vectorDesc': 'High-dimensional vector indexing, approximate nearest neighbor search, vector query optimization, and vector database system architecture for AI applications.',
        'research.cloudTitle': 'Cloud-Native Database',
        'research.cloudDesc': 'Database disaggregation, storage-compute separation, distributed transaction processing, and cloud-native database architecture design.',
        'research.memoryTitle': 'In-Memory Database',
        'research.memoryDesc': 'Main-memory database systems, in-memory indexing structures, transaction processing optimization, and real-time data analytics.',
        'research.hardwareTitle': 'Hardware-Software Codesign',
        'research.hardwareDesc': 'FPGA and GPU acceleration for databases, hardware-aware query processing, and co-design of database systems with modern hardware architectures.',
        'publications.title': 'Publications',
        'publications.statsTotal': 'Total',
        'publications.all': 'All',
        'publications.conference': 'Conference',
        'publications.journal': 'Journal',
        'publications.viewAll': 'View All Publications',
        'projects.title': 'Projects',
        'projects.vectorTitle': 'Vector Database System',
        'projects.vectorDesc': 'Developing a high-performance vector database system at China Telecom, supporting billion-scale vector indexing and real-time similarity search for AI applications.',
        'projects.tagVectorSearch': 'Vector Search',
        'projects.tagANN': 'ANN Index',
        'projects.tagDistributed': 'Distributed',
        'projects.vedbTitle': 'VeDB - Cloud-Native Database',
        'projects.vedbDesc': 'Contributed to VeDB development at ByteDance, a cloud-native database with storage-compute separation architecture for high scalability and availability.',
        'projects.tagCloudNative': 'Cloud-Native',
        'projects.tagDisaggregation': 'Disaggregation',
        'projects.gaussdbTitle': 'GaussDB - Distributed RDBMS',
        'projects.gaussdbDesc': 'Worked on Huawei Cloud GaussDB, a distributed relational database with focus on query optimization, transaction processing, and distributed storage engine.',
        'projects.tagDistributedDB': 'Distributed DB',
        'projects.tagQueryOptimizer': 'Query Optimizer',
        'contact.title': 'Contact',
        'contact.email': 'Email',
        'contact.address': 'Address',
        'contact.addressDetail': 'Cloud Computing Research Institute<br>China Telecom, Beijing, China',
        'contact.links': 'Academic Links',
        'contact.formName': 'Your Name',
        'contact.formEmail': 'Your Email',
        'contact.formSubject': 'Subject',
        'contact.formMessage': 'Message',
        'contact.formSubmit': 'Send Message'
    },
    zh: {
        'nav.home': '首页',
        'nav.about': '关于我',
        'nav.research': '研究方向',
        'nav.publications': '发表论文',
        'nav.projects': '项目经历',
        'nav.contact': '联系方式',
        'hero.title': '计算机科学博士',
        'hero.affiliation': '中国电信云计算研究院 研究员',
        'hero.interests': '研究方向',
        'hero.btnPublications': '查看论文',
        'hero.btnContact': '联系我',
        'about.title': '关于我',
        'about.p1': '我目前是中国电信云计算研究院的研究员，专注于向量数据库研究。我的工作重点是开发面向AI和机器学习应用的高性能、可扩展向量数据库系统。',
        'about.p2': '在加入中国电信之前，我于2024年在字节跳动参与VeDB云原生数据库系统的开发。2020年至2023年，我在华为云从事GaussDB分布式关系数据库系统的工作。这些经历使我在数据库内核、分布式系统和云原生架构方面积累了丰富的专业知识。',
        'about.p3': '我于东北大学获得计算机科学博士学位和学士学位。我热衷于构建稳健高效的数据库系统，为现代数据密集型应用提供支持。',
        'about.education': '教育经历',
        'about.phd': '计算机科学博士',
        'about.bs': '计算机科学学士',
        'about.neu': '东北大学，中国',
        'about.experience': '工作经历',
        'about.work1Title': '研究员',
        'about.work1Company': '中国电信云计算研究院',
        'about.work2Title': '数据库工程师',
        'about.work2Company': '字节跳动 (VeDB)',
        'about.work3Title': '数据库工程师',
        'about.work3Company': '华为云 (GaussDB)',
        'research.title': '研究方向',
        'research.vectorTitle': '向量数据库',
        'research.vectorDesc': '高维向量索引、近似最近邻搜索、向量查询优化，以及面向AI应用的向量数据库系统架构。',
        'research.cloudTitle': '云原生数据库',
        'research.cloudDesc': '数据库解耦、存算分离、分布式事务处理，以及云原生数据库架构设计。',
        'research.memoryTitle': '内存数据库',
        'research.memoryDesc': '主内存数据库系统、内存索引结构、事务处理优化，以及实时数据分析。',
        'research.hardwareTitle': '软硬件协同设计',
        'research.hardwareDesc': 'FPGA和GPU数据库加速、硬件感知查询处理，以及现代硬件架构与数据库系统的协同设计。',
        'publications.title': '发表论文',
        'publications.statsTotal': '共计',
        'publications.all': '全部',
        'publications.conference': '会议',
        'publications.journal': '期刊',
        'publications.viewAll': '查看全部论文',
        'projects.title': '项目经历',
        'projects.vectorTitle': '向量数据库系统',
        'projects.vectorDesc': '在中国电信开发高性能向量数据库系统，支持十亿级向量索引和AI应用的实时相似性搜索。',
        'projects.tagVectorSearch': '向量搜索',
        'projects.tagANN': 'ANN索引',
        'projects.tagDistributed': '分布式',
        'projects.vedbTitle': 'VeDB - 云原生数据库',
        'projects.vedbDesc': '在字节跳动参与VeDB开发，这是一款具有存算分离架构的云原生数据库，具备高可扩展性和高可用性。',
        'projects.tagCloudNative': '云原生',
        'projects.tagDisaggregation': '存算分离',
        'projects.gaussdbTitle': 'GaussDB - 分布式关系数据库',
        'projects.gaussdbDesc': '在华为云从事GaussDB工作，这是一款分布式关系数据库，重点关注查询优化、事务处理和分布式存储引擎。',
        'projects.tagDistributedDB': '分布式数据库',
        'projects.tagQueryOptimizer': '查询优化器',
        'contact.title': '联系方式',
        'contact.email': '邮箱',
        'contact.address': '地址',
        'contact.addressDetail': '中国电信云计算研究院<br>中国，北京',
        'contact.links': '学术链接',
        'contact.formName': '您的姓名',
        'contact.formEmail': '您的邮箱',
        'contact.formSubject': '主题',
        'contact.formMessage': '留言内容',
        'contact.formSubmit': '发送消息'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.textContent = lang === 'en' ? '中文' : 'English';
    }
    
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

function toggleLanguage() {
    setLanguage(currentLang === 'en' ? 'zh' : 'en');
}

function updatePubStats() {
    const publications = document.querySelectorAll('.publication-item');
    const total = publications.length;
    let ccfA = 0, ccfB = 0, ccfC = 0;
    
    publications.forEach(pub => {
        if (pub.querySelector('.ccf-a')) ccfA++;
        else if (pub.querySelector('.ccf-b')) ccfB++;
        else if (pub.querySelector('.ccf-c')) ccfC++;
    });
    
    const totalEl = document.getElementById('pub-total');
    const ccfAEl = document.getElementById('pub-ccf-a');
    const ccfBEl = document.getElementById('pub-ccf-b');
    const ccfCEl = document.getElementById('pub-ccf-c');
    
    if (totalEl) totalEl.textContent = total;
    if (ccfAEl) ccfAEl.textContent = ccfA;
    if (ccfBEl) ccfBEl.textContent = ccfB;
    if (ccfCEl) ccfCEl.textContent = ccfC;
}

document.addEventListener('DOMContentLoaded', function() {
    updatePubStats();
    
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
        currentLang = savedLang;
        setLanguage(savedLang);
    }
    
    const langSwitch = document.getElementById('langSwitch');
    if (langSwitch) {
        langSwitch.addEventListener('click', toggleLanguage);
    }
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 汉堡菜单切换
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 点击导航链接后关闭菜单
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // 导航栏滚动效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 论文筛选功能
    const filterBtns = document.querySelectorAll('.filter-btn');
    const pubItems = document.querySelectorAll('.publication-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // 移除所有按钮的active类
            filterBtns.forEach(b => b.classList.remove('active'));
            // 给当前按钮添加active类
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            pubItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-type') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animateElements = document.querySelectorAll(
        '.research-card, .publication-item, .project-card, .timeline-item, .contact-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // 添加动画类样式
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // 表单提交处理
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = currentLang === 'zh' ? '发送中...' : 'Sending...';
            
            fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert(currentLang === 'zh' ? '感谢您的留言！我会尽快回复您。' : 'Thank you for your message! I will get back to you soon.');
                    this.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            }).catch(error => {
                alert(currentLang === 'zh' ? '发送失败，请稍后重试或直接发送邮件至 liangneu@yeah.net' : 'Failed to send. Please try again later or email directly to liangneu@yeah.net');
            }).finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            });
        });
    }
    
    // 检查 URL 参数是否包含成功标记
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        alert(currentLang === 'zh' ? '感谢您的留言！我会尽快回复您。' : 'Thank you for your message! I will get back to you soon.');
        window.history.replaceState({}, document.title, window.location.pathname);
    }
    
    // 打字机效果（可选）
    const heroTitle = document.querySelector('.hero-text h1');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 150);
            }
        }
        
        // 延迟开始打字效果
        setTimeout(typeWriter, 500);
    }
    
    // 当前导航高亮
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
});

// 添加CSS变量支持检测
if (!CSS.supports('color', 'var(--test)')) {
    // 为不支持CSS变量的浏览器提供回退
    console.log('浏览器不支持CSS变量，使用回退样式');
}
