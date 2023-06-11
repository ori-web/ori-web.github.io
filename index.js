function showRandomInfo() {
    // 随机生成一个数字
    const randomNumber = Math.floor(Math.random() * 10);
    // 根据数字生成不同的信息
    let randomInfoText;
    switch (randomNumber) {
        case 0:
            randomInfoText = "今天的天气真好?";
            break;
        case 1:
            randomInfoText = "你知道吗？人类的大脑有1000亿个神经元！";
            break;
        case 2:
            randomInfoText = "每次打开电脑，我都相信这次会发生奇迹。";
            break;
        case 3:
            randomInfoText = "心情不好？去皮卡丘那里找个电疗吧!";
            break;
        case 4:
            randomInfoText = "生活不止眼前的苟且，还有长长的 OPS 和支付宝。";
            break;
        case 5:
            randomInfoText = "我站在钞票上，看热闹的人在下面看我。";
            break;
        case 6:
            randomInfoText = "要想瘦成一道闪电，也得先胖成一团。";
            break;
        case 7:
            randomInfoText = "天生我材必有用，前提是家里有 WiFi。";
            break;
        case 8:
            randomInfoText = "人生没有过不去的坎，只有过不去的心理。";
            break;
        case 9:
            randomInfoText = "我这个人脾气超好，只要没有人比我脾气更好就行了。";
            break;
        default:
            randomInfoText = "糟糕，程序出错了！";
            break;
    }
    // 将生成的信息显示在页面上
    const randomInfoElement = document.getElementById("randomInfo");
    randomInfoElement.innerHTML = randomInfoText;
}
