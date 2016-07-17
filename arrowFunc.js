function TagComponent(target, url){
    this.targetElement = target;
    this.urlPath = url;
}
TagComponent.prototype.render = function(){
    setTimeout(function() {
        console.log(this.targetElement);
    }, 500);
}
var tag = new TagComponent("Page", "http://localhost/");
tag.render();