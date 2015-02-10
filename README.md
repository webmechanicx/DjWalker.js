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
 
var nanm; // A Test Variable

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

</pre>

<p>Include this link of js file in your html document for initial testing.
<strong>MUST REMEMBER TO HAVE BODY TAG IN SIDE THE DOCUMENT WHERE YOU GOING TO ADD LINK.</strong></p> OR <p> You can change the first parameter in the function call <strong>dj_walker<strong>  e.g. document.body 
just use this as an example:</p>
<br/>
<pre>&lt;!doctype html&gt;
&lt;html&gt;
    &lt;body&gt;
        &lt;div id="nav"&gt;
            &lt;p&gt;&lt;a href="#fragment"&gt;Content&lt;/a&gt;&lt;/p&gt;
        &lt;/div&gt;
        &lt;div id="fragment"&gt;
            &lt;p&gt;Footer&lt;/p&gt;
        &lt;/div&gt;
    &lt;/body&gt;
&lt;/html&gt;</pre>

