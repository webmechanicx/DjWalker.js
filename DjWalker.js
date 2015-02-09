/* MIT License Non-Commercial and Commercial use, You can use this code anywhere including any number projects you may require. Just put my name as reference.
Author: Farhadur Rahim
Email: webmechanicx@gmail.com
*/

var dj_walker = function djwalker(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        djwalker(node, func);
        node = node.nextSibling;
    }
};

dj_walker(document.body, function(node){
    if(node.nodeType == 1){
      tagcast = tagcast + "<br/>" + node.tagName.toLowerCase();
    }
});
