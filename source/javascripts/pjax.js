document.addEventListener('DOMContentLoaded', function () {
    // 监听所有链接点击事件
    document.body.addEventListener('click', function (event) {
        if (event.target.tagName === 'A' && event.target.href) {
            event.preventDefault();
            showLoading();
            loadPage(event.target.href);
        }
    });

    // 显示loading状态
    function showLoading() {
        var loading = document.querySelector('#loading');
        if (loading) {
            loading.style.display = 'block';
        }
    }

    // 隐藏loading状态
    function hideLoading() {
        var loading = document.querySelector('#loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }

    // 使用AJAX加载新页面内容
    function loadPage(url) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader('X-PJAX', 'true');
        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 400) {
                var parser = new DOMParser();
                var doc = parser.parseFromString(xhr.responseText, 'text/html');
                var newContent = doc.querySelector('#content'); // 假设内容区域的id为content

                // 添加淡出动画
                var content = document.querySelector('#content');
                content.classList.add('fade-out');

                setTimeout(function () {
                    content.innerHTML = newContent.innerHTML;
                    content.classList.remove('fade-out');
                    content.classList.add('fade-in'); // 添加淡入动画

                    setTimeout(function () {
                        content.classList.remove('fade-in');
                        hideLoading(); // 隐藏loading状态
                    }, 250); // 动画持续时间500ms

                }, 200); // 动画持续时间500ms

                history.pushState(null, '', url);
            } else {
                hideLoading(); // 如果加载失败，隐藏loading状态
            }
        };
        xhr.onerror = function () {
            hideLoading(); // 如果加载失败，隐藏loading状态
        };
        xhr.send();
    }

    // 处理浏览器后退和前进事件
    window.addEventListener('popstate', function () {
        showLoading();
        loadPage(location.href);
    });
});
