Compass-Rose-jQuery
===================
Compass Rose jQuery sources

## Required
* [jQueryRotate](http://code.google.com/p/jqueryrotate/)
* [jQuery 1.9.1+](https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js) 

## How to use it
Import jQuery, jQueryRotate and	CompassRoss. First add the next HTML 
<pre><code>&lt;div id="nav"&gt;&lt;/div&gt;
</code></pre>

Then configure the jQuery
<pre lang="jQuery">$('#nav').CompassRose({pos: 45}); </pre> 
where `pos` is the initial position where the arrow points.

## Example
The file `index.html` has a functional example.
