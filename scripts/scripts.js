//改变标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = '哎呀,网页崩溃了 - ' + OriginTitile;
        clearTimeout(titleTime);
    } else {
        document.title = '(/≧▽≦/)咦!又好了 - ' + OriginTitile;
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 1500);
    }
});


//加载博客集
function LoadBlogList() {
    const blogContent = document.getElementById('blog');
    blogContent.innerHTML = ''; // 清空内容
    fetch("blog/BlogList.json")
        .then(response => response.json())
        .then(blogList => {
            blogList.forEach(blog => {
                const article = document.createElement('article');
                article.classList.add('article');

                const title = document.createElement('h3');
                title.classList.add('title');
                title.textContent = blog.title;

                const count = document.createElement('p');
                count.classList.add('date');
                count.textContent = `${blog.count} Blogs`;

                const content = document.createElement('div');
                content.classList.add('content');

                const link = document.createElement('a');
                link.href = `/blog.html?path=${blog.path}`;
                link.textContent = '查看详情';
                link.style.marginLeft = '10px';
                link.style.color = '#55aaff';

                article.appendChild(count);
                article.appendChild(title);
                article.appendChild(content);

                blog.content.forEach(line => {
                    const p = document.createElement('p');
                    p.textContent = line;
                    content.appendChild(p);
                });
                article.appendChild(link);
                blogContent.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error fetching blog list:', error);
        });
}


// 加载博客
function LoadBlog(path) {
    const blogContent = document.getElementById('blog');
    blogContent.innerHTML = ''; // 将内容置空

    //返回键
    const back = document.createElement('a');
    back.href = `/blog.html`;
    back.textContent = '返回';
    back.style.color = '#55aaff';
    blogContent.appendChild(back);

    fetch(param)
        .then(response => response.json())
        .then(data => {

            const blogContent = document.getElementById('blog');
            data.forEach(item => {
                const article = document.createElement('article');
                article.classList.add('article');

                const title = document.createElement('h3');
                title.classList.add('title');

                const idAndDate = document.createElement('p');
                idAndDate.classList.add('date');

                const content = document.createElement('div');
                content.classList.add('content');

                idAndDate.textContent = `${item.date}`;
                title.textContent = item.title;

                article.appendChild(idAndDate);
                article.appendChild(title);
                article.appendChild(content);

                item.content.forEach(line => {
                    const p = document.createElement('p');
                    p.textContent = line;
                    content.appendChild(p);
                });

                blogContent.appendChild(article);
            });
        })
        .catch(error => {
            console.error('Error fetching blog data:', error);
        });
}

function blog(){
    const pathParams = new URLSearchParams(window.location.search);
    const param = pathParams.get('path');
    if (param) {
        LoadBlog(param);
    } else {
        LoadBlogList();
    }
}

// 彩蛋:点击20次分割线后显示成就
const fgxElement = document.querySelector('#fgx');

// 定义点击计数器
let clickCount = 0;

// 添加点击事件监听器
fgxElement.addEventListener('click', () => {
    // 每次点击计数器加1
    clickCount++;
    
    // 如果点击次数达到20次，则跳转
    if (clickCount === 20) {
        // 构造跳转链接
        const url = '/message.html?title=-达成成就-&content=闲&subcontent=触发原因:连续点击20次分割线';
        
        // 页面跳转
        window.location.href = url;
    }
});
