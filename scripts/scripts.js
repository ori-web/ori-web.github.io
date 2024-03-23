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
// 获取blog文件夹下所有JSON文件
fetch('blog/')
    .then(response => response.text())
    .then(text => {
        // 解析HTML文本以获取所有JSON文件名
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(text, 'text/html');
        const jsonFiles = Array.from(htmlDoc.links)
            .filter(link => link.href.endsWith('.json'))
            .map(link => link.href);
        jsonFiles.forEach(file => {
            fetch(file)
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
        });
    });

function BlogFrom(){
    const blogContent = document.getElementById('blog');
    blogContent.innerHTML = ''; // 将内容置空
    fetch('blog/')
        .then(response => response.text())
        .then(text => {
            // 解析HTML文本以获取所有JSON文件名
            const parser = new DOMParser();
            const htmlDoc = parser.parseFromString(text, 'text/html');
            const jsonFiles = Array.from(htmlDoc.links)
                .filter(link => link.href.endsWith('.json'))
                .map(link => link.href);
            jsonFiles.forEach(file => {
                fetch(file)
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

                            idAndDate.textContent = `ID: ${item.id} | From: ${file} | Date: ${item.date}`;
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
            });
        });
}
