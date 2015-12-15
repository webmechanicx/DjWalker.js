/* MIT License Non-Commercial and Commercial use, You can use this code anywhere including any number projects you may require. You can give my name as reference only if you wish.
   Author: Farhadur Rahim Email: webmechanicx@gmail.com
*/

var dj_walker = function djwalker(node, examine) {
    examine(node);
    node = node.firstChild;
    while (node) {
        djwalker(node, examine);
        node = node.nextSibling;
    }
};

// document.body pass as a selector
dj_walker(document.body, function(node){
    if(node.nodeType == 1){
      tagcast = tagcast + "<br/>" + node.tagName.toLowerCase();
    }
});
