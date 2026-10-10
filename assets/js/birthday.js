// 页面管理器
        const PageManager = {
            init() {
                // 事件委托处理所有交互
                document.body.addEventListener('click', (e) => {
                    const target = e.target;

                    // 处理箭头点击
                    if (target.closest('.nav-arrow')) {
                        this.handleNavigation(target.closest('.nav-arrow'));
                    }

                    // 处理按钮点击
                    if (target.closest('.btn')) {
                        this.handleButton(target.closest('.btn'));
                    }
                });

                // 初始化动画延迟
                this.setupAnimations();
            },

            // 处理导航逻辑
            handleNavigation(arrow) {
                const currentScreen = arrow.closest('.screen');
                const nextScreenId = currentScreen.dataset.newscreen;
                this.jumpToPageId(nextScreenId);
            },

            // 处理按钮点击
            handleButton(button) {
                const nextScreenId = button.dataset.newscreen;
                this.jumpToPageId(nextScreenId);
            },

            // 核心跳转方法
            jumpToPageId(pageId) {
                // 先检查目标，避免无效跳转清空当前页面。
                if (!document.getElementById(pageId)) {
                    console.error('目标页面不存在:', pageId);
                    return;
                }

                // 隐藏所有页面
                document.querySelectorAll('.screen').forEach(screen => {
                    screen.classList.remove('active');
                });

                // 显示目标页面
                const targetPage = document.getElementById(pageId);
                if (targetPage) {
                    targetPage.classList.add('active');
                    // 强制重绘保证动画执行
                    void targetPage.offsetWidth;
                } else {
                    console.error('目标页面不存在:', pageId);
                }
            },

            // 初始化动画配置
            setupAnimations() {
                // 配置各元素动画延迟
                const animationDelays = {
                    '#s6p2': '1s',
                    '#s7p2': '2s',
                    // 其他元素延迟配置...
                };

                // 应用动画延迟
                Object.entries(animationDelays).forEach(([selector, delay]) => {
                    const element = document.querySelector(selector);
                    if (element) {
                        element.style.animationDelay = delay;
                    }
                });
            }
        };

        // 初始化页面管理器
        PageManager.init();

        // 动态加载图片
        function loadDynamicImages() {
            const container = document.querySelector('#screen3 .images');
            const images = [
                { src: 'image1.jpg', delay: '0s' },
                { src: 'image2.jpg', delay: '0.5s' },
                // 更多图片...
            ];

            images.forEach(img => {
                const imgElement = document.createElement('img');
                imgElement.src = img.src;
                imgElement.style.animationDelay = img.delay;
                container.appendChild(imgElement);
            });
        }

        // 页面加载完成后执行
        window.addEventListener('DOMContentLoaded', () => {
            loadDynamicImages();
        });
