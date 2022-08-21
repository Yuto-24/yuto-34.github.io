// <!-- 共通部分の読み込み -->
$(function() {
    // header.htmlをclass属性「header」という名前で読み込むように指定する
    $(".header").load("https://yuto-34.github.io/01_test/import/header.html");
    $(".footer").load("https://yuto-34.github.io/01_test/import/footer.html");
});

// リンクのスムーズスクロール
$(function() {
    // #で始まるリンクをクリックしたら実行されます
    $('a[href^="#"]').click(function() {
        // スクロールの速度
        var speed = 400; // ミリ秒で記述
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false;
    });
});