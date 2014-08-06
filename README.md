Lazyload
========

## WHY Lazyload?

* When Webpage page scrolling into place, the corresponding position of the picture content is loaded to display, which can significantly reduce the pressure and flow of the server, also can reduce the burden of the browser
* Lazy loading is a manifestation of humanity's program, enhance the user experience, to prevent the disposable loading of large amounts of data, according to user needs to load
* This is a [Demo](http://1.lazyloading.sinaapp.com/Lazy/lazyload.html)


- 当网页页面滚动到相应的地方，对应位置的图片内容才进行加载显示，这样能明显减少了服务器的压力和流量，也能够减小浏览器的负担
- 惰性加载是程序人性化的一种体现，提高用户体验，防止一次性加载大量数据，根据用户需要进行加载
- 这是一个在线的[演示](http://1.lazyloading.sinaapp.com/Lazy/lazyload.html)

## Usage

Support ie5.5+, FF, chrome or other common browser.

Lazyload only needs to follow a simple pattern. Here is an example:

``` html
<script src="lazyload.min.js"></script>
<div id="lazy">
	<img data-src="need lazy-load picture" src="Packing diagramURL" data-time="200" data-range="50"/>
</div>
```

* need lazy-load picture: The picture URL which you want to lazyload
* Packing diagramURL: Transparent drawing a pixel filling (existing in the project directory, you can directly use)
* data-time: Delay of lazyload
* data-range: Advance lazyload distance


- 需要懒加载的图片：你需要懒加载图片的URL
- 填充图：1px的填充图防止布局破环或者出现难看的红叉（在项目文件夹中已经存在，你可以直接使用）
- data-time：懒加载的延迟时间
- data-range：提前懒加载的距离


``` js
var lazyloading = lazyload({       
        id:"lazy",
        lazyTime:200,
        lazyRange:100
      });
```
I always place this at the bottom of the page, externally, to verify the page is ready.

我经常把这段js放在页面底部来确保页面已经加载完毕。

``` css
 #lazy img{
    background: url(loadingPicURL) no-repeat center center;
 }
```
loadingPicURL:the loading effect of Reading pictures (existing in the project directory, you can directly use)

loadingPicURL:读取图片时候的动态效果（在项目文件夹中已经存在，你可以直接使用）

## Config Options

Lazyload can take an optional second parameter– an object of key/value settings:

- **id** String *(default:'')* - id of the img wrap.(Default means that the entire document)
- **lazyTime** Integer *(default:0)* - Delay of lazyload
- **lazyRange** Integer *(default:0)* - Advance lazyload distance(A negative value indicates the distance of not loaded in vision)


Lazyload 可以让你传入一个对象，并且用一些属性来设置懒加载模式：

- **id** String *(默认值:'')* - img包裹的id名称（如果留空则意味着全文档的图片都应用懒加载）
- **lazyTime** Integer *(默认值：0)* - 懒加载延迟（相对于它应该被加载的情况下）
- **lazyRange** Integer *(默认值:0)* - 提前加载的距离，负数表示出现在视野中也不加载的距离。 

