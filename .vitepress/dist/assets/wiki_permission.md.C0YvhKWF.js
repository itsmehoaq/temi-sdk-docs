import{_ as e,c as t,o as i,ag as a}from"./chunks/framework.DPDPlp3K.js";const k=JSON.parse('{"title":"temi Permission","description":"","frontmatter":{},"headers":[],"relativePath":"wiki/permission.md","filePath":"wiki/permission.md"}'),n={name:"wiki/permission.md"};function r(o,s,h,l,d,p){return i(),t("div",null,s[0]||(s[0]=[a(`<h1 id="temi-permission" tabindex="-1">temi Permission <a class="header-anchor" href="#temi-permission" aria-label="Permalink to &quot;temi Permission&quot;">​</a></h1><p>In order to better protect user privacy and temi&#39;s data security, a permission mechanism came into being. This is a bit like the dynamic permission application mechanism in Android. When you want to access or modify some sensitive information, you need to apply for these permissions dynamically. The permission mechanism is applicable to <strong>0.10.70</strong> and higher versions.</p><br><h2 id="api-overview" tabindex="-1">API Overview <a class="header-anchor" href="#api-overview" aria-label="Permalink to &quot;API Overview&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Return</th><th>Method</th><th>Description</th></tr></thead><tbody><tr><td>int</td><td><a href="#checkSelfPermission">checkSelfPermission(Permission permission)</a></td><td>Check permission</td></tr><tr><td>void</td><td><a href="#requestPermissions">requestPermissions(List&lt;Permission&gt; permissions, int requestCode)</a></td><td>Request permissions</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Interface</th><th>Description</th></tr></thead><tbody><tr><td><a href="#onRequestPermissionResultListener">OnRequestPermissionResultListener</a></td><td>Listener for listening to the result of permission request</td></tr></tbody></table><table tabindex="0"><thead><tr><th>Model</th><th>Description</th></tr></thead><tbody><tr><td><a href="#permission">Permission</a></td><td>The permission</td></tr></tbody></table><br><h2 id="request-skill-permissions" tabindex="-1">Request Skill Permissions <a class="header-anchor" href="#request-skill-permissions" aria-label="Permalink to &quot;Request Skill Permissions&quot;">​</a></h2><h3 id="add-permissions-to-the-manifest" tabindex="-1">Add permissions to the manifest <a class="header-anchor" href="#add-permissions-to-the-manifest" aria-label="Permalink to &quot;Add permissions to the manifest&quot;">​</a></h3><p>Before requesting permissions, to declare that your skill needs permission, put a <code>&lt;meta-data&gt;</code> element in your <strong>AndroidManifest.xml</strong>, as a child of <code>&lt;application&gt;</code> element. For example, skill that needs to modify the system settings would have follow codes in the manifest:</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ···</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta-data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        android:name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@string/metadata_permissions&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        android:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.robotemi.permission.settings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ···</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>If you need to request for multiple permissions, please append and separate them with &quot;,&quot;.</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ···</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta-data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        android:name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;@string/metadata_permissions&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        android:value</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;com.robotemi.permission.settings,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                       com.robotemi.permission.face_recognition&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ···</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">application</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>Check <a href="#currentPermissions">all current permissions</a>.</p><h3 id="check-for-permissions" tabindex="-1">Check for permissions <a class="header-anchor" href="#check-for-permissions" aria-label="Permalink to &quot;Check for permissions&quot;">​</a></h3><p>You must check wheather your skill have that permission every time you perform an operation that requires that permission. Because users can revoke all the permissions from any skill at any time. For example, revoke the permission of face recognition: <em>Settings &gt; Permissions &gt; Face Recognition &gt; Your skill &gt; Turn off the switch</em>.</p><h4 id="determine-whether-your-app-was-already-granted-the-permission" tabindex="-1">Determine whether your app was already granted the permission <a class="header-anchor" href="#determine-whether-your-app-was-already-granted-the-permission" aria-label="Permalink to &quot;Determine whether your app was already granted the permission&quot;">​</a></h4><p>To check if the user has already granted your app a particular permission, pass that permission into the <a href="#checkSelfPermission"><code>Robot.getInstance().checkSelfPermission()</code></a> method. This method returns either <a href="#granted"><code>GRANTED</code></a> or <a href="#denied"><code>DENIED</code></a>, depending on wheather your skill has the permission.</p><h4 id="request-permissions" tabindex="-1">Request permissions <a class="header-anchor" href="#request-permissions" aria-label="Permalink to &quot;Request permissions&quot;">​</a></h4><p>If your skills does not have the relevant permissions, there are two ways to obtain permissions, one is in <em>Settings &gt; Permissions &gt; Click the required permissions &gt; Turn on the switch of your skill</em>; Another way is to request permissions through the temi SDK, and then a dialog box pops up, where user can choose wheather to grant specific permissions to your skill. The second way is mainly introduced in this documentation.</p><p>To invoke <a href="#requestPermissions"><code>Robot.getInstance().requestPermissions()</code></a> method to pop up the permissions request dialog box. Similar to the dynamic <a href="https://developer.android.google.cn/training/permissions/requesting" target="_blank" rel="noreferrer">permission request</a>, you can manage the request code yourself as part of the permission request and include this request code in your <a href="#onRequestPermissionResultListener">permission request callback</a> logic.</p><h4 id="listen-to-the-grant-results" tabindex="-1">Listen to the grant results <a class="header-anchor" href="#listen-to-the-grant-results" aria-label="Permalink to &quot;Listen to the grant results&quot;">​</a></h4><p>You can listen to <a href="#onRequestPermissionResultListener">permission request callback</a> like listen to other listeners. It can be combined with the request code passed in <a href="#requestPermissions">permission request</a>, you can continue the action or workflow in your skill after the permission is granted by user.</p><br><h2 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="checkselfpermission" tabindex="-1">checkSelfPermission() <a class="header-anchor" href="#checkselfpermission" aria-label="Permalink to &quot;checkSelfPermission()&quot;">​</a></h3><p>Use this method to check wheather your skill has the permission.</p><ul><li><p><strong>Parameters</strong></p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>permission</td><td><a href="#permission">Permission</a></td><td>The permission to be checked</td></tr></tbody></table></li><li><p><strong>Return</strong></p><table tabindex="0"><thead><tr><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>int</td><td>Grant result, possible value is <a href="#granted"><code>GRANTED</code></a> or <a href="#denied"><code>DENIED</code></a></td></tr></tbody></table></li><li><p><strong>Prototype</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> checkSelfPermission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Permission permission);</span></span></code></pre></div></li></ul><hr><h3 id="requestpermissions" tabindex="-1">requestPermissions() <a class="header-anchor" href="#requestpermissions" aria-label="Permalink to &quot;requestPermissions()&quot;">​</a></h3><p>Use this method to request the permissions you want.</p><ul><li><p><strong>Parameters</strong></p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>permissions</td><td>List&lt;<a href="#permission">Permission</a>&gt;</td><td>The list holds the permissions you want to request</td></tr><tr><td>requestCode</td><td>int</td><td>Application specific request code to match with a result reported to <a href="#onRequestPermissionResultListener">OnRequestPermissionResultListener</a></td></tr></tbody></table></li><li><p><strong>Prototype</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> requestPermissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(List</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Permission</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> permissions);</span></span></code></pre></div></li></ul><br><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-label="Permalink to &quot;Interfaces&quot;">​</a></h2><h3 id="onrequestpermissionresultlistener" tabindex="-1">OnRequestPermissionResultListener <a class="header-anchor" href="#onrequestpermissionresultlistener" aria-label="Permalink to &quot;OnRequestPermissionResultListener&quot;">​</a></h3><p>You can listen to the results of the grant of the requested permissions. Implement this listener interface in your context, and override the methods in the interface to get the permission request result.</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.robotemi.sdk.permission;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OnRequestPermissionResultListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h4 id="abstract-methods" tabindex="-1">Abstract methods <a class="header-anchor" href="#abstract-methods" aria-label="Permalink to &quot;Abstract methods&quot;">​</a></h4><ul><li><p><strong>Parameters</strong></p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>permission</td><td><a href="#permission">Permission</a></td><td>Pending permissions</td></tr><tr><td>grantResult</td><td>int</td><td>Grant result</td></tr><tr><td>requestCode</td><td>int</td><td>The request code passed in <a href="#requestPermissions">requestPermissions()</a></td></tr></tbody></table></li><li><p><strong>Prototype</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">abstract</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> onRequestPermissionResult</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Permission permission,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> grantResult,</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                                        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> requestCode);</span></span></code></pre></div></li></ul><h4 id="method-for-adding-listener" tabindex="-1">Method for adding listener <a class="header-anchor" href="#method-for-adding-listener" aria-label="Permalink to &quot;Method for adding listener&quot;">​</a></h4><ul><li><p><strong>Parameters</strong></p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>listener</td><td>OnRequestPermissionResultListener</td><td>The object of the class implements this listener interface</td></tr></tbody></table></li><li><p><strong>Prototype</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> addOnRequestPermissionResultListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(OnRequestPermissionResultListener listener);</span></span></code></pre></div></li></ul><h4 id="method-for-removing-listener" tabindex="-1">Method for removing listener <a class="header-anchor" href="#method-for-removing-listener" aria-label="Permalink to &quot;Method for removing listener&quot;">​</a></h4><ul><li><p><strong>Parameters</strong></p><table tabindex="0"><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>listener</td><td>OnRequestPermissionResultListener</td><td>The object of the class implements this listener interface</td></tr></tbody></table></li><li><p><strong>Prototype</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> removeOnRequestPermissionResultListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(OnRequestPermissionResultListener listener);</span></span></code></pre></div></li></ul><br><h2 id="model" tabindex="-1">Model <a class="header-anchor" href="#model" aria-label="Permalink to &quot;Model&quot;">​</a></h2><p>The following is the data model used in the above methods and interfaces.</p><h3 id="permission" tabindex="-1">Permission <a class="header-anchor" href="#permission" aria-label="Permalink to &quot;Permission&quot;">​</a></h3><h4 id="current-permissions" tabindex="-1">Current permissions <a class="header-anchor" href="#current-permissions" aria-label="Permalink to &quot;Current permissions&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Permission</th><th>Enum Value</th><th>Value</th><th style="text-align:center;">Is Kiosk Permission</th></tr></thead><tbody><tr><td>Face Recognition</td><td>FACE_RECOGNITION</td><td>com.robotemi.permission.face_recognition</td><td style="text-align:center;">No</td></tr><tr><td>Map</td><td>MAP</td><td>com.robotemi.permission.map</td><td style="text-align:center;">No</td></tr><tr><td>Settings</td><td>SETTINGS</td><td>com.robotemi.permission.settings</td><td style="text-align:center;">No</td></tr><tr><td>Sequence</td><td>SEQUENCE</td><td>com.robotemi.permission.sequence</td><td style="text-align:center;">No</td></tr><tr><td>Meetings</td><td>MEETINGS</td><td>com.robotemi.permission.meetings</td><td style="text-align:center;">No</td></tr></tbody></table><p><em><strong><s>Note: Only kiosk skills can request kiosk permissions.</s> Since version 0.10.72, all permissions do not need to be requested in Kiosk mode.</strong></em></p><h4 id="prototype" tabindex="-1">Prototype <a class="header-anchor" href="#prototype" aria-label="Permalink to &quot;Prototype&quot;">​</a></h4><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> com.robotemi.sdk.permission;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">enum</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Permission</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    FACE_RECOGNITION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    MAP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SETTINGS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    SEQUENCE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="static-constants" tabindex="-1">Static constants <a class="header-anchor" href="#static-constants" aria-label="Permalink to &quot;Static constants&quot;">​</a></h4><table tabindex="0"><thead><tr><th>Constant</th><th>Type</th><th>Value</th><th>Description</th></tr></thead><tbody><tr><td>GRANTED</td><td>int</td><td>1</td><td>Granted by user</td></tr><tr><td>DENIED</td><td>int</td><td>0</td><td>Denied by user</td></tr></tbody></table>`,55)]))}const m=e(n,[["render",r]]);export{k as __pageData,m as default};
