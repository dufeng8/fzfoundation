$(document).ready(function() {
	$("li.mulan").on('click', function() {
		$("a.tag-text").text("Mulan Community Center");
		$("a.tag-text").attr("href", "http://www.mulanhuakai.org.cn/html/news/essence/2015-07/22.html");
	});

	$("li.yuhua").on('click', function() {
		$("a.tag-text").text("Yuhua Elementary School");
		$("a.tag-text").attr("href", "http://www.mulanhuakai.org.cn/html/devote/donat/2014-10/7.html");
	});
});

