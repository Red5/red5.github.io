var Handlebars=require("handlebars"),template=Handlebars.template,templates=Handlebars.templates=Handlebars.templates||{};templates["2010-12-31T00:00:00.000Z-Red5-Teams-Releases-1.0-RC-Build"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="Red5 Teams Releases 1.0 RC Build" class="news--link">Red5 Teams Releases 1.0 RC Build</a>\n</h2>\n\n<p class="post-meta">\n  <span>December 31, 2010 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<p>\n  Freshly into Q1 of 2011, the Red5 team has dropped a release candidate for the impending 1.0 release. A major effort has been placed on fixing bugs for this release and working on solidifying some performance issues with streaming in general. We’re pretty excited to announce that we feel pretty comfortable with what’s been done and were now hoping that users can begin testing their applications and report feedback.\n</p>\n\n<p>\n  A few modifications that are worth noting are:\n</p>\n\n<ul>\n  <li>Fixed War Build</li>\n  <li>Several Fixes to RTMPT and RTMPe</li>\n  <li>Seeking for MP4 Files</li>\n  <li>Serialization Fixes</li>\n  <li>Native Bandwidth Detection Up/Down</li>\n  <li>many more&hellip;</li>\n</ul>\n\n<p>If your interested in a listing of all the fixes, please consult the source changes list (<a href="http://code.google.com/p/red5/source/list" rel="external">http://code.google.com/p/red5/source/list</a>)</p>\n'},useData:!0}),templates["2012-01-22T00:00:00.000Z-Red5-New-License---Apache-Software-License-2.0"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="Red5 New License - Apache Software License 2.0" class="news--link">Red5 New License - Apache Software License 2.0</a>\n</h2>\n\n<p class="post-meta">\n  <span>January 22, 2012 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<div>\n  The Red5 Open Source Media Server has adopted a new license, Apache Software License 2.0. Rather than try and explain our reasoning, I’ve copied my exact email request that I had sent to the team. After a short period, the votes were counted and we had made our decision. Please read the below for more context on why we decided to go with Apache Software License 2.0 (ASL 2.0).\n</div>\n\n<div>The license change is reflected in r4309 (<a href="http://code.google.com/p/red5/source/detail?r=4309#" target="_blank" rel="external">http://code.google.com/p/red5/source/detail?r=4309#</a>)</div>\n\n<p><br></p>\n\n<div>Team:</div>\n\n<div>\n\n  <p>\n    <span style="font-family: arial, helvetica, sans-serif;">I hope all of you are doing well and living your lives to the fullest. As many of you know, we as a project are maturing as we gather momentum towards our 1.0 Release. It’s hard to believe that we started the project over 6 years ago around September of 2005 (<a href="http://code.google.com/p/red5/source/list?num=25&amp;start=25" target="_blank" rel="external">http://code.google.com/p/red5/source/list?num=25&amp;start=25</a>). The motivation behind this email is to ask for your support and approval of a licensing change to the Red5 Project, its’ source code and all accompanying material. I will provide some context and reasoning behind the decision. As some of you are aware, we originally chose LGPLv3 license because it allowed the server to remain open, yet allow for adoption in the industry by groups that could not release their own source code. Generally, we tried to think of Red5 in the same regard as Tomcat. Our goal was to remain open without restricting proliferation among the industry. GPL would have required any code that statically or dynamically linked to the project source be open sourced. This was too restrictive for wide spread use. This then brought us back to LGPLv3 which is where the current codebase stands. It’s been recently brought to my attention that LGPLv3 may be too restrictive for certain use cases that are becoming prevalent in our industry.</span>\n  </p>\n\n  <p>\n    I will explain in simplified terms what consequences our license has on an entire industry today.<br>\n  May I point to Android as the use case involved with this discussion. At the moment, LGPL allows for linking either statically or dynamically to proprietary code. LGPL also ensures that the user of a library has the right to reverse engineer and modifiy the LGPL library in any way they see fit. So for instance, if someone packaged up a web application inside of Red5 and created an installer, the end user could replace the red5.jar with a new version if they so please. &nbsp;However, with Android, an applicaiton is packaged up as a DEX file which is one file that has many libraries compiled into it. Taken directly from android’s open source page:\n  </p>\n\n  <blockquote>\n    <p>\n      <span style="font-family: arial, helvetica, sans-serif;">Here are some of our specific concerns:</span>\n    </p>\n\n    <ul>\n      <li>\n        <span style="font-family: arial, helvetica, sans-serif;">LGPL (in simplified terms) requires either: shipping of source to the application; a written offer for source; or linking the LGPL-ed library dynamically and allowing users to manually upgrade or replace the library. Since Android software is typically shipped in the form of a static system image, complying with these requirements ends up restricting OEMs’ designs. (For instance, it’s difficult for a user to replace a library on read-only flash storage.)</span>\n      </li>\n    </ul>\n    <ul>\n      <li>\n        <span style="font-family: arial, helvetica, sans-serif;">LGPL requires allowance of customer modification and reverse engineering for debugging those modifications. Most device makers do not want to have to be bound by these terms, so to minimize the burden on these companies we minimize usage of LGPL software in userspace.</span>\n      </li>\n    </ul>\n    <ul>\n      <li>\n        <span style="font-family: arial, helvetica, sans-serif;">Historically, LGPL libraries have been the source of a large number of compliance problems for downstream device makers and application developers. Educating engineers on these issues is difficult and slow-going, unfortunately. It’s critical to Android’s success that it be as easy as possible for device makers to comply with the licenses. Given the difficulties with complying with LGPL in the past, it is most prudent to simply not use LGPL libraries if we can avoid it.</span>\n      </li>\n    </ul>\n  </blockquote>\n\n  <p>\n    <span style="font-family: arial, helvetica, sans-serif;">For these reasons, LGPLv3 is not suggested. We had not foreseen these restrictions and use cases when the project first started. Android as well as other platforms would be severely restricted and proliferation efforts would be limited. Exposure to these platforms increases visibility of the project and pushes us into uncharted area. We can remain confident that our service to the community will continue and that the project may find new and interesting uses.</span>\n  </p>\n\n  <p>\n    Given that these conditions and restrictions do exist as stated above, we should identify what licenses could suit our needs. I propose that we evolve our license to a less restrictive license such as Apache Software License 2.0. This license allows for such use cases as stated above while allowing us to remain true to our original intentions. It should be noted that the Apache Software License is used by complimentary projects such as Tomcat which as you know is our default embedded servlet container. Taken directly from the Apache Foundation site:\n  </p>\n\n</div>\n\n<div>\n  <blockquote>\n    <p>\n      <span style="font-family: arial, helvetica, sans-serif;">Apache License, Version 2.0 (current)<br></span>\n      <span style="font-family: arial, helvetica, sans-serif;"><a href="http://www.apache.org/licenses/LICENSE-2.0" target="_blank">http://www.apache.org/licenses/LICENSE-2.0</a> ( <a href="http://www.apache.org/licenses/LICENSE-2.0.txt" target="_blank" rel="external">TXT</a> or <a href="http://www.apache.org/licenses/LICENSE-2.0.html" target="_blank">HTML</a> )<br></span>\n      <span style="font-family: arial, helvetica, sans-serif;">The 2.0 version of the Apache License was approved by the ASF in 2004. The goals of this license revision have been to reduce the number of frequently asked questions, to allow the license to be reusable without modification by any project (including non-ASF projects), to allow the license to be included by reference instead of listed in every file, to clarify the license on submission of contributions, to require a patent license on contributions that necessarily infringe the contributor’s own patents, and to move comments regarding Apache and other inherited attribution notices to a location outside the license terms (the<a href="http://www.apache.org/licenses/example-NOTICE.txt" target="_blank" rel="external">NOTICE file</a> ).<br></span>\n      <span style="font-family: arial, helvetica, sans-serif;">The result is a license that is supposed to be compatible with other open source licenses, while remaining true to the original goals of the Apache Group and supportive of collaborative development across both nonprofit and commercial organizations. The Apache Software Foundation is still trying to determine if this version of the Apache License is <a href="http://www.apache.org/licenses/GPL-compatibility.html" target="_blank" rel="external">compatible with the GPL</a>.<br></span>\n      <span style="font-family: arial, helvetica, sans-serif;">All packages produced by the ASF are implicitly licensed under the Apache License, Version 2.0, unless otherwise explicitly stated. More developer documentation on how to apply the Apache License to your work can be found in * <a href="http://www.apache.org/dev/apply-license.html" target="_blank" rel="external">Applying the Apache License, Version 2.0</a> *.</span>\n    </p>\n  </blockquote>\n\n  <p>\n    <span style="font-family: arial, helvetica, sans-serif;">If you support and approve of the license change, please respond with your approval. If you would like to discuss the ramifications before voting, you may contact out of band and I would be happy to go over these changes. Below are several links which provide useful information and add to the discussion. Please respond as soon as you can. We are looking here for a unanimous vote. If users are unavailable, we will move forward with the majorty vote and continually try to contact previous contributors.</span>\n  </p>\n\n  <p>\n    Last, I want to thank you all for all of your hard work. Your contributions are appreciated. You should be proud of these accomplishments. May you continue living your life to the fullest. &nbsp;Thank you.\n  </p>\n\n  <p>\n    Dominick Accattato<br>\n    Red5 Co-Project Manager &amp; Engineer<br>\n    —<br>\n    <a href="http://gregoire.org/" target="_blank">http://</a><a href="#http://www.infrared5.com/" target="_blank" rel="external">www.infrared5.com/</a><br>\n    <a href="http://code.google.com/p/red5/" target="_blank" rel="external">http://code.google.com/p/red5/</a><br>\n    <a href="http://code.google.com/p/blue5/" target="_blank" rel="external">http://code.google.com/p/jedai/</a>\n  </p>\n\n  <p>\n    <strong>ADDITIONAL INFORMATION</strong>\n  </p>\n</div>\n\n<div>\n  <p>\n    <span style="font-family: arial, helvetica, sans-serif;">Apache Software License 2.0 looks nice too (ASL)</span>\n  </p>\n\n  <p>\n    The best explanation as to why LGPLv3 doesn’t work with Android<br>\n    <a href="http://source.android.com/source/licenses.html" target="_blank" rel="external">http://source.android.com/source/licenses.html</a><br>\n    <a href="http://source.android.com/source/licenses.html" target="_blank" rel="external"></a><br>\n    outlining a simplified explanation of dynamic linking code with LGPLv3<br>\n    <a href="http://www.gnu.org/licenses/lgpl-java.html" target="_blank" rel="external">http://www.gnu.org/licenses/lgpl-java.html</a><br>\n    <a href="http://www.gnu.org/licenses/lgpl-java.html" target="_blank" rel="external"></a><br>\n    how VideoLAN changed their license<br>\n    <a href="http://www.videolan.org/press/lgpl.html" target="_blank" rel="external">http://www.videolan.org/press/lgpl.html</a><br>\n    <a href="http://www.videolan.org/press/lgpl.html" target="_blank" rel="external"></a><br>\n    GNU’s take on who would need to sign off on a license change<br>\n    <a href="http://www.gnu.org/licenses/gpl-faq.html#LGPLJava" target="_blank" rel="external">http://www.gnu.org/licenses/gpl-faq.html#LGPLJava</a><br>\n    <a href="http://www.gnu.org/licenses/gpl-faq.html#LGPLJava" target="_blank" rel="external"></a><br>\n    for context, our license<br>\n    <a href="http://www.gnu.org/licenses/lgpl.html" target="_blank" rel="external">http://www.gnu.org/licenses/lgpl.html</a>\n  </p>\n</div>\n'},useData:!0}),templates["2012-12-10T00:00:00.000Z-Red5-1.0-Final-Released"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="Red5 1.0 Final Released" class="news--link">Red5 1.0 Final Released</a>\n</h1>\n\n<p class="post-meta">\n  <span>December 10, 2012 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<p>\n  We have some exciting news about Red5. On December 3rd, Paul packaged up the official Red5 1.0 Final distributions. These come in Windows, ZIP and Tarball (<a href="https://code.google.com/p/red5/">https://code.google.com/p/red5/</a>). If you’ve followed the project from its early days, you know just how long the road has been. If you are new to the server, then you should be aware that development started around September 20th 2005. Yes you’ve read that correctly. The server was started in 2005 and it is now 2012 and we are releasing 1.0! What this means is that although we are only just reaching our 1.0 milestone, Red5 is being used in production on a large range of applications and has been for several years. The codebase is solid and the API has lasted the test of time to a large degree.\n</p>\n\n<p>\n  Now we are starting to talk about what direction to take the server. Hopefully, we’ll be able to put some of our ideas past the community over the next few months. Mostly, we are interested in adding support to several of the streaming technologies out there and scaling the server in a conventionally accepted way as compared to the ad-hoc way that this is done today. So to the community, we want to thank you for your support. To all of the developers who have contributed, we are forever in your debt. Last, we’re excited to hear what you build with Red5!\n</p>\n\n<p>\n  Finally, you can grab the latest bits on our downloads page (<a href="/red5-server" rel="external">http://www.red5.org/red5-server/</a>).\n</p>'},useData:!0}),templates["2014-12-26T00:00:00.000Z-Red5-1.0.4-Released"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="Red5 1.0.4 Released" class="news--link">Red5 1.0.4 Released</a>\n</h2>\n\n<p class="post-meta">\n  <span>December 26, 2014 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<p>\n  Several fixes are in this version as well as some restructuring of the project components themselves. This version series is also now available on the Sonatype repositories.\n</p>\n\n<p>\n  Fixes to issues of note: \n</p>\n\n<ul>\n  <li>\n    <a href="https://github.com/Red5/red5-server/issues/36" rel="external">#36</a> appShutdown not triggered\n  </li>\n  <li>\n    <a href="https://github.com/Red5/red5-server/issues/38" rel="external">#38</a> FileConsumer queued write broken\n  </li>\n  <li>\n    <a href="https://github.com/Red5/red5-server/issues/39" rel="external">#39</a> Red5.getConnectionLocal returns wrong connection\n  </li>\n  <li>\n    <a href="https://github.com/Red5/red5-server/issues/40" rel="external">#40</a> Memory leak\n  </li>\n</ul>\n\n<p>\n  Demos are also now included in the tarball/zip as well as the project repository source\n</p>\n\n<p>\n  This release can be found <a href="https://github.com/Red5/red5-server/releases/tag/v1.0.4-RELEASE" rel="external">here.</a>\n</p>\n'},useData:!0}),templates["2015-02-07T00:00:00.000Z-Red5-1.0.5-Released"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="Red5 1.0.5 Released" class="news--link">Red5 1.0.5 Released</a>\n</h2>\n\n<p class="post-meta">\n  <span>February 7, 2015 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<p>\n  This release contains a few fixes and modifications found after the 1.0.4 release. Tomcat plugin logging uses a new jar to push its log events to slf4j; also updated is the websocket plugin to version 1.1.\n</p>\n\n<h4>\n  Alert\n</h4>\n<p>\nThese artifacts were compiled with jdk8, but had the target set for jdk7 (1.7). This means they will operate correctly only on java 8 / jdk8; in java 6 or 7 you will get a keySet error due to linked jdk8 methods. The sonatype repositories will be updated with proper jdk7 builds today (2/10/14).\n</p>\n\n<p>\n  This release can be found <a href="https://github.com/Red5/red5-server/releases/tag/v1.0.5-RELEASE" rel="external">here.</a>\n</p>\n'},useData:!0}),templates["2015-09-08T00:00:00.000Z-Red5-1.0.6-Released"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="Red5 1.0.6 Released" class="news--link">Red5 1.0.6 Released</a>\n</h2>\n\n<p class="post-meta">\n  <span>September 8, 2015 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<p>\n  This release contains memory leak and threading fixes over previous 1.x versions. Tomcat has been updated to version 8.0.26 and the websocket plugin to version 1.2.\n</p>\n\n<p>\n  The build artifacts have been compiled with JDK7.\n</p>\n\n<p>\n  Releasing information will be posted <a href="https://github.com/Red5/red5-server/wiki/Release-Information" rel="external">on the wiki</a> for reference.\n</p>\n\n<p>\n  This release can be found <a href="https://github.com/Red5/red5-server/releases/tag/v1.0.6-RELEASE" rel="external">here.</a>\n</p>\n'},useData:!0}),templates["2015-09-16T00:00:00.000Z-Red5-1.0.7-Pre-Release"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="Red5 1.0.7 Pre-Release" class="news--link">Red5 1.0.7 Pre-Release</a>\n</h2>\n\n<p class="post-meta">\n  <span>September 16, 2015 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<p>\nThis "snapshot" is not a standard "release" and will be updated until 1.0.7 is released.\n</p>\n\n<h4>\n  Updates:\n</h4>\n\n<ul>\n  <li>\n    9/17: Fixed circular dependency in jee-container.xml file\n  </li>\n  <li>\n    9/18: Added RTMP connection modifications to support lower level concurrency control\n  </li>\n  <li>\n    10/7: Updated to include connection concurrency and deadlock fixes\n  </li>\n  <li>\n    10/12: Fixed interoperabilty with AMS and switched stream ids to use double type\n  </li>\n</ul>\n\n<p>\n  The latest release can be found <a href="https://github.com/Red5/red5-server/releases" rel="external">here.</a>\n</p>\n'},useData:!0}),templates["2015-11-04T00:00:00.000Z-What-Weve-Been-Working-On-Red5-Pro"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="What We\'ve Been Working On: Red5 Pro" class="news--link">What We’ve Quietly Been Working On: Red5 Pro - Going Back to Our Roots</a>\n</h2>\n\n<p class="post-meta">\n  <span>November 4, 2015 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<div>\n  <a href="https://blog.red5pro.com/what-weve-quietly-been-working-on-red5-pro-going-back-to-our-roots/" rel="external">\n    <img src="https://d1inz2xpofm0ao.cloudfront.net/2016/Jan/red5pro_live_broadcast_2-1453394325551.jpg">\n  </a>\n</div>\n\n<h4>\n  The Times They Are A Changin’\n</h4>\n\n<p>\n  As you might have noticed, we recently updated our website to better reflect our new direction at Infrared5. We are now focused on the <a href="http://red5pro.com" rel="external">Red5 Pro Server and SDKs</a> for iOS and Android that enable developers to build experiences like <a href="https://en.wikipedia.org/wiki/Meerkat_(app)" rel="external">Meerkat</a> or FaceTime in a matter of minutes. Yes, you read that correctly – the ability to create mobile streaming applications in minutes. We originally started this company because of the tremendous reception and interest in the <a href="https://github.com/Red5/red5-server" rel="external">Red5 Open Source Media Server</a>. For those that aren’t familiar with the project, our initial <a href="http://www.infrared5.com/about/team/" rel="external">team</a>, composed of John Grden, Paul Gregoire, Dominick Accattato and myself, worked with other developers around the world to reverse engineer the RTMP protocol and create an open source alternative to Macromedia’s Flash Communication Server. This project eventually became Red5. Two years later as the project grew, we noticed strong demand from developers who needed custom work and consulting on Red5 – so much so that we decided to quit our day jobs and start Infrared5. Over the years though, our focus drifted away from exclusively building live streaming solutions with Red5.\n</p>\n\n<h4>\n  Games and Brass Monkey\n</h4>\n\n<p>\n  Our developers at Infrared5 have always been interested in disrupting the present and pushing the boundaries with new technologies. One of these instances was the Unity game engine. Andy Zupko and John Grden really pushed us in this direction as early adopters of the platform. We built many great games on Unity including the <a href="http://starwars.wikia.com/wiki/Star_Wars:_Trench_Run" rel="external">Star Wars Trench Run</a>, <a href="https://www.youtube.com/watch?v=xQpS3V3MAPI" rel="external">Hasbro’s Game of Life Zapped Edition</a>, and most recently the augmented reality Force Trainer feature in the official <a href="http://www.starwars.com/games-apps/star-wars-app" rel="external">Star Wars app</a>. Even though we are no longer focused on games, our passion for game design and the unique experiences they enable really influence our product design. We want to make using Red5 Pro fun and enjoyable for developers, which in many respects isn’t far off from the goal of a good game.\n</p>\n\n<p>\n  <img src="https://d1inz2xpofm0ao.cloudfront.net/2016/Jan/b_pre_connect-1453394284466.png" alt="Brass Monkey">\n</p>\n\n<p>\n  During this time Rebecca led Infrared5 not just in games projects, but also on IoT and streaming projects that leveraged the open source Red5. Another project that Infrared5 invented and spun off was our smartphone-as-a-game (SAAG?) controller product, Brass Monkey. I moved over to lead that company as CEO in 2010, but eventually I came back to Infrared5 full time, as we weren’t able to effectively convince people to pay for smartphone controlled, browser-based games. Note though, we kept the technology, and it’s now part of Red5 Pro as the <a href="http://red5pro.com/docs/secondscreen/overview/" title="Red5 Pro Second Screen SDK" rel="external">Second Screen SDK</a>.\n</p>\n\n<h4>\n  Going Back To Our Roots\n</h4>\n\n<p>\n  After Steve Jobs announced the demise of <a href="http://www.apple.com/hotnews/thoughts-on-flash/" rel="external">Flash</a> with the lack of support in iOS, and the eventual decay of support for Android, we came to the conclusion that we would solve the “Get off of Flash Problem” for live streaming mobile apps. We heard from a lot of our consulting clients that they wanted this, and instead of trying to build custom solutions over and over again, we decided Red5 needed an upgrade. Mobile SDKs for RTMP are mostly fragmented, hard to use, clunky and generally just a mess. We have now made it our mission to make building a live streaming app for iOS and Android efficient and intuitive. Whether it’s a one-to-many live broadcasting app like Periscope, a many-to-many conferencing app, or a one-to-one video chat application, we want to make it so incredibly simple that any developer can do it.\n</p>\n\n<h4>\n  The Future: WebRTC, Second Screen, IoT\n</h4>\n\n<p>\n  While migrating existing live streaming Flash apps to our new platform is super helpful, what we are most excited about is our vision for the myriad applications of the Red5 Pro technology.\n</p>\n\n<p>\n  An ever-increasing number of browsers are adding support for WebRTC; heck, even <a href="https://webrtchacks.com/ortc-edge-microsoft-qa/" rel="external">Microsoft Edge </a>is getting there! We think this is clearly the future for in-browser streaming, and we are currently working on making Red5 Pro speak this protocol. We see the Red Pro Server as the underlying hub that is able to talk to all different streaming mobile apps and browser apps with minimal latency and outstanding performance.\n</p>\n\n<p>\n  However, the phones we carry in our pockets, the laptops sitting on our desks, and the tablets we browse while sitting on the couch are truly just the beginning. Other devices with cameras that can connect to the internet are the next big thing in live streaming. We are thrilled to make Red5 Pro integrate with all of these Internet of Things devices. The possibilities are endless: imagine fully immersing yourself in a live concert via your VR headset streamed live from a 3D camera at the venue, or enabling live video streaming among military troops over mesh networks going to their AR headsets. There are countless things for developers to build in this space, and we’re excited to see how we can power them through Red5 Pro.\n</p>\n\n<p>\n  Finally, we think that the second screen experiences like what we started with Brass Monkey have huge potential for changing the way people interact with technology. Not only can you as a developer turn phones into game controllers, but you can also create new banking software that enables your phone to interact with and take away information from a screen in bank branches of the future.\n</p>\n\n<p>\n  <img src="http://blog.infrared5.com/wp-content/plugins/directory/2015/11/red5pro_secondscreen.png" alt="red5pro_secondscreen" title="">\n</p>\n\n<h4>\n  …And There’s More!\n</h4>\n\n<p>\n  Of course we can only think of so many scenarios of how our tech can be applied. The true innovation will be done by what you as a developer create with it. What would you build with Red5 Pro? Let us know in the comments. Much more coming your way soon!\n</p>'},useData:!0}),templates["2015-11-10T00:00:00.000Z-Hes-Baaaaaaack"]=template({compiler:[6,">= 2.0.0-beta.1"],main:function(){return'<h2>\n  <a href="#" rel="bookmark" title="He’s BAAAaaaack!" class="news--link">He’s BAAAaaaack!</a>\n</h2>\n\n<p class="post-meta">\n  <span>November 10, 2015 in <a href="/news" title="View all posts in News" rel="category tag">News</a></span>\n</p>\n\n<p>\n  <a href="https://blog.red5pro.com/hes-baaaaaaack/" rel="external">\n    <img src="https://d1inz2xpofm0ao.cloudfront.net/2016/Jan/http___blog_infrared5_com_wp_content_plugins_directory_2015_11_Screen_Shot_2015_11_10_at_4_11_15_PM1-1453395096612.png">\n  </a>\n</p>\n\n<p>\n  Why on earth would anyone choose to rejoin a company where they previously worked? In retrospect, the answer seems quite simple, though of course, taking the plunge is always a daunting task. I assume the statistics do not favor a return to a previous workplace after an extended hiatus, but I could certainly provide a plethora of reasons why I returned to Infrared5 when presented with the opportunity to do so. For me, and in any and all endeavors, the work has to be both intellectually stimulating and challenging. Software development can often be repetitive and monotonous, but fortunately that never was (and still isn’t) the case at Infrared5. Of near equal importance are the workmates that surround me; without a high quality, collaborative and generally pleasant team, even the most stimulating work can lose its shine.\n</p>\n\n<p>\n  So to that end, here is a short checklist I used when making the decision:\n</p>\n\n<ul>\n  <li>\n    Do I enjoy my interactions with my teammates? Check!\n  </li>\n  <li>\n    Do I have respect for them and their abilities? Check!\n  </li>\n  <li>\n    Lastly, Infrared5 wanted to pay me to write code all day and work on Red5! Well that’s a no brainer–count me in!\n  </li>\n</ul>\n\n<p>\n  While working for another company, I had joined the Red5 Pro beta just after it was announced on Twitter. A “Pro” version or Red5 was something Dominick and I had chatted about on a few occasions back in the day–there may or may not have been beer involved. Despite the casual conversations, we both thought there could be immense long-term value in providing the Red5 community with what they were always asking for and talking about on the users list and social media. Providing the ability to stream from any device to any device has always interested me. Alas, I had the desire to turn intrigue into application by helping to create a software which could do just this. Red5 Pro offers Flash streaming, HLS streaming, and RTSP streaming; these technologies are still in-demand and are not interoperable on existing platforms, except on Red5 Pro.\n</p>\n\n<p>\n  In the near future, the public can expect some major disruption on the streaming media front from Red5 Pro. It should come as no surprise to the community that we’re adding the new hotness of technology, WebRTC, to our existing stack. If this addition isn’t “For the Win,” I don’t know what is. I have no qualms about saying that the suite of tools which comprise Red5 Pro will help shape the future of the streaming market–and I couldn’t be happier with my decision to return.\n</p>\n\n<p>\n  -Paul\n</p>\n'},useData:!0});