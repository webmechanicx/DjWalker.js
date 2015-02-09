# DjWalker.js
Walking Through Dom Tree. I named it DjWalker. Small Function to Depth First Each Parent and Child Nodes
<pre>
<code>
var dj_walker = function djwalker(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        djwalker(node, func);
        node = node.nextSibling;
    }
};
</code>
</pre>

<pre>
<code>
 
var nanm;

dj_walker(document.body, function(node) {
    if(node.nodeType == 1){
        nanm= nanm + "<br/>" + node.tagName.toLowerCase ();
    //Possible Values You Can Get Through:
    // node.nodeName -> Name of Node e.g. div,p,span, a, ul, li etc
    // node.tagName -> Work Same as node.nodeName    
    // node.id -> Node numeric nth-position
    }
});

// This Variable Assigned Only for Testing Purpose
document.getElementById("render").innerHTML = nanm;
</code>
</pre>

<p>Include this link of js file in your html document for initial testing.
<strong>MUST REMEMBER TO HAVE BODY TAG IN SIDE THE DOCUMENT WHERE YOU GOING TO ADD LINK.</strong></p> OR <p> You can change the first parameter in the function call <strong>dj_walker<strong>  e.g. document.body 
</p>
