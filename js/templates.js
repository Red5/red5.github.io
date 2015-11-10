var Handlebars=require("handlebars"),template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["404"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return"<h1>404 page</h1>"},useData:!0}),templates["about-us"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return"<h1>About Us</h1>\n\n<div>\n  \n  <div>mondain (Owner)</div>\n\n  <div>\n    <ul>\n      <li>Design new features, write code and unit tests</li>\n      <li>Package releases from release branches</li>\n      <li>Have fun hacking and learn new stuff!</li>\n      <li>Triage new issues and support requests from end-users</li>\n    </ul>\n  </div>\n\n  <div>daccattato (Owner)</div>\n\n  <div>\n    <ul>\n      <li>Lead by providing a project vision and roadmap</li>\n      <li>Plan the scope of release milestones and track progress</li>\n      <li>Design core libraries, write code and unit tests</li>\n      <li>Design new features, write code and unit tests</li>\n      <li>Document our development process and help new members</li>\n      <li>Write end-user documentation and examples</li>\n    </ul>\n  </div>\n\n  <div>mrchrisallen (Owner)</div>\n\n  <div>\n    <ul>\n      <li>Lead by providing a project vision and roadmap</li>\n    </ul>\n  </div>\n\n  <div>tiago.jacobs (Owner)</div>\n\n  <div>\n    <ol>\n      <li>Design new features, write code and unit tests</li>\n      <li>Review code for security and scalability</li>\n      <li>Translate UI text and documentation to new locales</li>\n    </ol>\n  </div>\n\n  <div>electroteque (Committer)</div>\n\n  <div>\n    <ul>\n      <li>Write end-user documentation and examples</li>\n      <li>Review code for security and scalability</li>\n      <li>Define database schemas and persistence layers</li>\n    </ul>\n  </div>\n\n  <div>art.clarke (Committer)</div>\n\n  <div>\n    <ul>\n      <li>Set up and maintain build tools and test automation</li>\n    </ul>\n  </div>\n\n  <div>Non-Active</div>\n\n  <div>\n    <ul>\n      <li>sybersnake (Committer)</li>\n      <li>joachim.bauch (Committer)</li>\n      <li>steven.gong (Committer)</li>\n      <li>carlsz (Contributor)</li>\n      <li>davi.fol (Contributor)</li>\n      <li>worldofpaper (Contributor)</li>\n      <li>crtmpserver (Contributor)</li>\n      <li>mabrek (Contributor)</li>\n      <li>thijs.triemstra (Contributor)</li>\n      <li>king.selassie (Contributor)</li>\n    </ul>\n  </div>\n\n  <div>neoriley (Contributor)</div>\n\n  <div>\n    <ul>\n      <li>Lead by providing a project vision and roadmap</li>\n    </ul>\n  </div>\n\n</div>"},useData:!0}),templates.downloads=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return"<h1>Downloads</h1>"},useData:!0}),templates.features=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h1>Features</h1>\n\n<p>\n  <span style="font-size: 15.6px;">Here’s a brief description of the features in Red5. The&nbsp;<a href="http://trac.red5.org/wiki/Changelog">Changelog</a> contains a more detailed summary of all new features.</span>\n</p>\n\n<ul>\n  <li>Streaming Audio/Video (FLV and MP3)</li>\n  <li>Recording Client Streams (FLV only)</li>\n  <li>Shared Objects</li>\n  <li>Live Stream Publishing (live h264 supported now)</li>\n  <li>Remoting (<a href="http://livedocs.adobe.com/flex/3/langref/flash/net/ObjectEncoding.html#AMF0"> AMF0</a>/<a href="http://livedocs.adobe.com/flex/3/langref/flash/net/ObjectEncoding.html#AMF3"> AMF3</a>)</li>\n</ul>'},useData:!0}),templates["getting-started"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h1>Getting Started</h1>\n\n<p>To see the rest of these Getting Started Video Series <a href="http://www.youtube.com/dominickaccattato#p/c/9B94807E1D0AF2DE" target="_blank">CLICK HERE!</a></p>\n\n<p>As always, please subscribe/rate and comment on the videos. Thanks!</p>\n\n<p></p>\n\n<div class="lyte" id="fIL3GnAfKkI" style="width:425px;height:344px;">\n  <noscript>&lt;a href="http://youtu.be/fIL3GnAfKkI"&gt;&lt;img src="/web/20141009134130im_/http://img.youtube.com/vi/fIL3GnAfKkI/0.jpg"&gt;&lt;br /&gt;Watch on YouTube&lt;/a&gt;</noscript>\n  <script type="text/javascript"><!--\n    var bU=\'#http://www.red5.org/wp-content/plugins/wp-youtube-lyte/lyte/\';\n    var d=document;\n    if(d.addEventListener){\n      d.addEventListener(\'DOMContentLoaded\', insert, false)\n    } else {\n      window.onload=insert\n    }\n    function insert(){\n      if(!d.getElementById(\'lytescr\')){\n        lytescr=d.createElement(\'script\');\n        lytescr.async=true;\n        lytescr.id=\'lytescr\';\n        lytescr.src=\'http://www.red5.org/wp-content/plugins/wp-youtube-lyte/lyte/lyte-min.js\';\n        h=d.getElementsByTagName(\'script\')[0];\n        h.parentNode.insertBefore(lytescr, h)\n      }\n    }; \n--></script>\n</div>'},useData:!0}),templates.index=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return"<p>Red5 Media Server 1.0 delivers a powerful video streaming and multi-user solution to the &copy;Adobe &copy;Flash Player and other exciting client technologies. Based on Java and some of the most powerful open source frameworks, Red5 stands as a solid solution for business of all sizes including the enterprise.</p>\n\n<p>Red5 includes support for the latest multi-user API's including NetConnection, NetStream and SharedObject's while providing a powerful RTMP / Servlet implementation. In addition to support for the RTMP protocol, the application server has an embedded Tomcat Servlet container for JEE Web Applications. Application development draws additional benefits from the Spring Framework and Scope based event driven services.</p>\n\n<p>By using the Open Source Red5 Media Server, you are developing with a truly open and extensible platform that can be used in Video Conferences, Multi-User Gaming and Enterprise Application Software.</p>\n\n<p>Happy Coding and enjoy our powerful free community server!</p>"},useData:!0}),templates["irc-channel"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h1>IRC Channel</h1>\n\n<p>We created an <a href="http://en.wikipedia.org/wiki/IRC"> IRC</a> channel on the freenode.net network for informal Red5 discussions, asking questions or just hanging out and “socializing”.</p>\n<p>The channel is <a href="irc://irc.freenode.net/red5"> #red5 on irc.freenode.net</a></p>\n<p>Drop by if you are interested in the development of Red5, have a quick  question or just want to get to know the people developing and using it.  If you’re new to IRC, be sure to learn how to <a href="http://www.mikeash.com/getting_answers.html"> get answers</a>.</p>'},useData:!0}),templates["mailing-lists"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h1>Mailing Lists</h1>\n\n<p><strong>Mailing Lists</strong></p>\n<p>Communication, discussion and decision making within the Red5 project is primarily done through mailing lists.</p>\n<hr>\n<h2 id="Users">Users<a title="Link to this section" href="http://trac.red5.org/wiki/MailingLists#Users"></a></h2>\n<p>The main mailing list for the Red5 community. Subscribe to this list if you’re new, need help, or want to know more about Red5.</p>\n<p><a href="http://groups.google.com/group/red5interest">Red5Interest List</a> <a href="http://osflash.org/pipermail/red5_osflash.org">Archives (before 20091117)</a></p>\n<h2 id="Devs">Devs<a title="Link to this section" href="http://trac.red5.org/wiki/MailingLists#Devs"></a></h2>\n<p>The mailing list for the Red5 maintainers. Read only for non project members.</p>\n<p><a href="http://groups.google.com/group/red5developers">Red5Developers List</a> -&nbsp;<a href="http://osflash.org/pipermail/red5devs_osflash.org/"> Archives (before 20091117)</a></p>\n<h2 id="Announce">Announce<a title="Link to this section" href="http://trac.red5.org/wiki/MailingLists#Announce"></a></h2>\n<p>Announce is a very low traffic mailing list for announcements regarding Red5, mostly release notes and important updates. This list is read-only.</p>\n<p><a href="http://osflash.org/mailman/listinfo/red5-announce_osflash.org">Subscribe</a> -&nbsp;<a href="http://osflash.org/pipermail/red5-announce_osflash.org/"> Archives</a></p>\n<h2 id="Commits">Commits<a title="Link to this section" href="http://trac.red5.org/wiki/MailingLists#Commits"></a></h2>\n<p>Commits is a read-only list which is used to disseminate version control check-in messages made to the source code by the Red5 maintainers.</p>\n<p><a href="http://osflash.org/mailman/listinfo/red5commits_osflash.org">Subscribe</a> -&nbsp;<a href="http://osflash.org/pipermail/red5commits_osflash.org/"> Archives</a></p>\n<h2 id="Tickets">Tickets<a title="Link to this section" href="http://trac.red5.org/wiki/MailingLists#Tickets"></a></h2>\n<p>Tickets is a fairly high traffic mailing list for ticket changes. Every time a Red5 ticket is modified a new message is posted on this list. This list is read-only.</p>\n<p><a href="http://groups.google.com/group/red5tickets">Subscribe</a> -&nbsp;<a href="http://groups.google.com/group/red5tickets/topics"> Archives</a></p>\n<h2 id="Builds">Builds<a title="Link to this section" href="http://trac.red5.org/wiki/MailingLists#Builds"></a></h2>\n<p>Builds is a read-only mailing list for reports from our&nbsp;<a href="http://build.theyard.net/"> build farm</a>. Every time Hudson encounters a build failure a new message is posted on this list.</p>\n<p><a href="http://groups.google.com/group/red5-builds">Subscribe</a> -&nbsp;<a href="http://groups.google.com/group/red5-builds/topics"> Archives</a></p>'},useData:!0}),templates.news=template({1:function(e,n,t,i){var a,r;return r=null!=(r=n.content||(null!=e?e.content:e))?r:n.helperMissing,"<div>\n  "+(null!=(a="function"==typeof r?r.call(e,{name:"content",hash:{},data:i}):r)?a:"")+"\n</div>\n"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,n,t,i){var a;return"<h1>News</h1>\n\n"+(null!=(a=n.each.call(e,null!=e?e.posts:e,{name:"each",hash:{},fn:this.program(1,i,0),inverse:this.noop,data:i}))?a:"")},useData:!0}),templates.post=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return"<h1>Post</h1>"},useData:!0}),templates.support=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h1>Support</h1>\n\n<p><strong><a href="#http://www.red5.org/downloads/docs/red5-reference-1.0.pdf">Documentation</a></strong></p>\n<p>Reference Manual</p>\n<p><strong><a href="#http://www.red5.org/forums/forums.php">Forums</a></strong></p>\n<p>Common Questions, &nbsp;discussions, tutorials.</p>\n<p><strong><a href="#http://www.red5.org/mailing-lists/">Mailing Lists</a></strong></p>\n<p>Communication, discussion and decision making within the Red5 project is primarily done through mailing lists.</p>\n<p><a href="#http://www.red5.org/irc-channel/"><strong>IRC</strong></a></p>\n<p>We created an <a href="http://en.wikipedia.org/wiki/IRC"> IRC</a> channel on the freenode.net network for informal Red5 discussions, asking questions or just hanging out and “socializing”.</p>\n<p>The channel is <a href="irc://irc.freenode.net/red5"> #red5 on irc.freenode.net</a></p>\n<p>Drop by if you are interested in the development of Red5, have a quick  question or just want to get to know the people developing and using it.  If you’re new to IRC, be sure to learn how to <a href="http://www.mikeash.com/getting_answers.html"> get answers</a>.</p>\n<p><strong>Professional Services</strong></p>\n<div>\n<div>For commercial support, customization, integration, and additional features beyond the open source project please contact:</div>\n<div>\n<br><br>\n<a href="http://www.infrared5.com/"><img class="alignnone" src="/web/20141126154627im_/http://www.infrared5.com/assets/desktop-header-logo-hd.png" alt="" width="164" height="52"></a></div>\n<div>Infrared5 is a Boston based interactive studio that specializes in Red5 application development.</div>\n<div>Learn More (<a href="www.infrared5.com" target="_blank">www.infrared5.com</a>)</div>\n</div>\n<p><br></p>\n<div><a href="http://www.imdt.com.br/"><img class="alignnone" src="/web/20141126154627im_/https://dl.dropboxusercontent.com/u/9226799/iMDT_logo1.png" alt="" width="102" height="38"></a></div>\n<div>iMDT is a professional services company in Brazil that contribute to development of red5 and has &nbsp;professionals with high-level skills on Red5 technology.</div>\n<div>Learn More (<a href="http://www.imdt.com.br/" target="_blank">http://www.imdt.com.br</a>)</div>'},useData:!0});