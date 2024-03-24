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

//加载博客
const blogContent = document.getElementById('blog');
blogContent.innerHTML = ''; // 将内容置空
fetch("blog/blog.json")
    .then(response => response.json())
    .then(data => {
        const blogContent = document.getElementById('blog');
        data.forEach(item => {
            const article = document.createElement('article');
            article.classList.add('article');

            const title = document.createElement('h3');
            title.classList.add('title');

            const idAndDate = document.createElement('p');
            idAndDate.classList.add('id-date');

            const content = document.createElement('div');
            content.classList.add('content');

            idAndDate.textContent = `ID: ${item.id} | Date: ${item.date}`;
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

//console.log("[scripts.js] Latest Update Time:2024-3-24 22:08:11")
