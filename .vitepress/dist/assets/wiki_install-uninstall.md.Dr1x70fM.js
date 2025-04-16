import{_ as n,c as i,o as a,ag as e}from"./chunks/framework.DPDPlp3K.js";const u=JSON.parse('{"title":"Installing & Uninstalling","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/install-uninstall.md","filePath":"wiki/install-uninstall.md"}'),s={name:"wiki/install-uninstall.md"};function o(l,t,p,r,h,c){return a(),i("div",null,t[0]||(t[0]=[e('<h1 id="installing-uninstalling" tabindex="-1">Installing &amp; Uninstalling <a class="header-anchor" href="#installing-uninstalling" aria-label="Permalink to &quot;Installing &amp; Uninstalling&quot;">​</a></h1><p>You can begin by downloading ADB (Android Debug Bridge) on the computer you wish to develop for temi. Please follow <a href="https://www.xda-developers.com/install-adb-windows-macos-linux/" target="_blank" rel="noreferrer">this</a> tutorial on how to download and set up ADB on your computer.</p><h2 id="connect-computer-to-robot" tabindex="-1">Connect Computer to Robot <a class="header-anchor" href="#connect-computer-to-robot" aria-label="Permalink to &quot;Connect Computer to Robot&quot;">​</a></h2><p>Once you have ADB set up on your computer, you can run your code on temi by:</p><p><strong>Step 1</strong>: Make sure you are connected to the same WiFi network as your robot.</p><p><strong>Step 2</strong>: On temi - go to Settings -&gt; temi Developer Tools -&gt; tap on ADB Port Opening.</p><p><strong>Step 3</strong>: On computer - Using the IP address on the top right of temi’s screen you can connect to the robot and test your code. In order to establish a connection with the robot, type following command in Terminal on Mac or Command Prompt on Windows.</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">IP_ADDRES</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">S</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:5555</span></span></code></pre></div><h2 id="installing-applications" tabindex="-1">Installing Applications <a class="header-anchor" href="#installing-applications" aria-label="Permalink to &quot;Installing Applications&quot;">​</a></h2><p>Once you have established a connection between your computer and temi, you can install your app using two methods:</p><ol><li><p>Directly through Android Studio by selecting the &quot;rockchip rk****&quot; and selecting Run.</p></li><li><p>By typing the following in the command line:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [option] PATH_OF_APK</span></span></code></pre></div></li></ol><h2 id="uninstalling-applications" tabindex="-1">Uninstalling Applications <a class="header-anchor" href="#uninstalling-applications" aria-label="Permalink to &quot;Uninstalling Applications&quot;">​</a></h2><p>Once you have established a connection between your computer and temi, you can uninstall your app on temi by typing following command in the terminal:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">adb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [option] PACKAGE_NAME</span></span></code></pre></div><p>If you are not sure what your package name is, you can check from within your Android Project.</p><p>More ADB related content please refer to <a href="https://developer.android.com/studio/command-line/adb" target="_blank" rel="noreferrer">Android Developers</a>.</p>',16)]))}const g=n(s,[["render",o]]);export{u as __pageData,g as default};
