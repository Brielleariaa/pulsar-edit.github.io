import{_ as r,a as d,b as c}from"./theme-side-by-side.3e7f6354.js";import{_ as h}from"./dev-tools.e3a85a30.js";import{_ as p,o as u,c as m,a as t,b as e,d as o,w as i,e as s,r as l}from"./app.f59d5735.js";const g={},f=t("h3",{id:"creating-a-theme",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#creating-a-theme","aria-hidden":"true"},"#"),e(" Creating a Theme")],-1),b={href:"http://lesscss.org/",target:"_blank",rel:"noopener noreferrer"},y=s('<p>Atom supports two types of themes: <em>UI</em> and <em>Syntax</em>. UI themes style elements such as the tree view, the tabs, drop-down lists, and the status bar. Syntax themes style the code, gutter and other elements inside the editor view.</p><p><img src="'+r+'" alt="Theme boundary"></p><p>Themes can be installed and changed from the Settings View which you can open by selecting the <span class="platform-mac"><em>Atom &gt; Preferences</em></span><span class="platform-windows"><em>File &gt; Preferences</em></span><span class="platform-linux"><em>Edit &gt; Preferences</em></span> menu, and clicking the &quot;Install&quot; or &quot;Themes&quot; tab on the left hand navigation.</p><h4 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h4><p>Themes are pretty straightforward but it&#39;s still helpful to be familiar with a few things before starting:</p>',5),k={href:"https://speakerdeck.com/danmatthews/less-css",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"package.json",-1),w=t("code",null,"package.json",-1),_=t("li",null,[e("Your theme's "),t("code",null,"package.json"),e(" must contain a "),t("code",null,"theme"),e(" key with a value of "),t("code",null,"ui"),e(" or "),t("code",null,"syntax"),e(" for Atom to recognize and load it as a theme.")],-1),x={href:"https://atom.io/themes",target:"_blank",rel:"noopener noreferrer"},T=s('<h4 id="creating-a-syntax-theme" tabindex="-1"><a class="header-anchor" href="#creating-a-syntax-theme" aria-hidden="true">#</a> Creating a Syntax Theme</h4><p>Let&#39;s create your first theme.</p><p>To get started, press <kbd class="platform-mac">Cmd+Shift+P</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+P</kbd> and start typing &quot;Generate Syntax Theme&quot; to generate a new theme package. Select &quot;Generate Syntax Theme,&quot; and you&#39;ll be asked for the path where your theme will be created. Let&#39;s call ours <code>motif-syntax</code>.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Tip:</strong> Syntax themes should end with <em>-syntax</em> and UI themes should end with <em>-ui</em>.</p></div><p>Atom will display a new window, showing the motif-syntax theme, with a default set of folders and files created for us. If you open the Settings View with <kbd class="platform-mac">Cmd+,</kbd><kbd class="platform-windows platform-linux">Ctrl+,</kbd> and click the &quot;Themes&quot; tab on the left, you&#39;ll see the &quot;Motif&quot; theme listed in the &quot;Syntax Theme&quot; drop-down. Select it from the menu to activate it, now when you open an editor you should see your new motif-syntax theme in action.</p><p>Open up <code>styles/colors.less</code> to change the various color variables which have already been defined. For example, turn <code>@red</code> into <code>#f4c2c1</code>.</p><p>Then open <code>styles/base.less</code> and modify the various selectors that have already been defined. These selectors style different parts of code in the editor such as comments, strings and the line numbers in the gutter.</p><p>As an example, let&#39;s make the <code>.gutter</code> <code>background-color</code> into <code>@red</code>.</p><p>Reload Atom by pressing <kbd class="platform-mac">Alt+Cmd+Ctrl+L</kbd><kbd class="platform-windows platform-linux">Alt+Ctrl+R</kbd> to see the changes you made reflected in your Atom window. Pretty neat!</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Tip:</strong> You can avoid reloading to see changes you make by opening an Atom window in Dev Mode. To open a Dev Mode Atom window run <code>atom --dev .</code> in the terminal, or use the <em>View &gt; Developer &gt; Open in Dev Mode</em> menu. When you edit your theme, changes will instantly be reflected!</p></div><div class="custom-container note"><p class="custom-container-title">Note</p><p><strong>Note:</strong> It&#39;s advised to <em>not</em> specify a <code>font-family</code> in your syntax theme because it will override the Font Family field in Atom&#39;s settings. If you still like to recommend a font that goes well with your theme, we suggest you do so in your README.</p></div><h4 id="creating-a-ui-theme" tabindex="-1"><a class="header-anchor" href="#creating-a-ui-theme" aria-hidden="true">#</a> Creating a UI Theme</h4><p>To create a UI theme, do the following:</p>',13),A={href:"https://github.com/atom-community/ui-theme-template",target:"_blank",rel:"noopener noreferrer"},C=s('<li>Clone the forked repository to the local filesystem</li><li>Open a terminal in the forked theme&#39;s directory</li><li>Open your new theme in a Dev Mode Atom window run <code>atom --dev .</code> in the terminal or use the <em>View &gt; Developer &gt; Open in Dev Mode</em> menu</li><li>Change the name of the theme in the theme&#39;s <code>package.json</code> file</li><li>Name your theme end with a <code>-ui</code>, for example <code>super-white-ui</code></li><li>Run <code>apm link --dev</code> to symlink your repository to <code>~/.atom/dev/packages</code></li><li>Reload Atom using <kbd class="platform-mac">Alt+Cmd+Ctrl+L</kbd><kbd class="platform-windows platform-linux">Alt+Ctrl+R</kbd></li><li>Enable the theme via the &quot;UI Theme&quot; drop-down in the &quot;Themes&quot; tab of the Settings View</li><li>Make changes! Since you opened the theme in a Dev Mode window, changes will be instantly reflected in the editor without having to reload.</li>',9),S=s('<div class="custom-container tip"><p class="custom-container-title">Tip</p><p><strong>Tip:</strong> Because we used <code>apm link --dev</code> in the above instructions, if you break anything you can always close Atom and launch Atom normally to force Atom to the default theme. This allows you to continue working on your theme even if something goes catastrophically wrong.</p></div><h4 id="theme-variables" tabindex="-1"><a class="header-anchor" href="#theme-variables" aria-hidden="true">#</a> Theme Variables</h4><p>UI themes <strong>must</strong> provide a <code>ui-variables.less</code> and Syntax themes a <code>syntax-variables.less</code> file. It contains predefined variables that packages use to make sure the look and feel matches.</p><p>Here the variables with the default values:</p>',4),q={href:"https://github.com/atom/atom/blob/master/static/variables/ui-variables.less",target:"_blank",rel:"noopener noreferrer"},D={href:"https://github.com/atom/atom/blob/master/static/variables/syntax-variables.less",target:"_blank",rel:"noopener noreferrer"},I=t("p",null,"These default values will be used as a fallback in case a theme doesn't define its own variables.",-1),M=t("h5",{id:"use-in-packages",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#use-in-packages","aria-hidden":"true"},"#"),e(" Use in Packages")],-1),L=t("p",null,[e("In any of your package's "),t("code",null,".less"),e(" files, you can access the theme variables by importing the "),t("code",null,"ui-variables"),e(" or "),t("code",null,"syntax-variables"),e(" file from Atom.")],-1),R={href:"https://github.com/atom/styleguide",target:"_blank",rel:"noopener noreferrer"},V=s(`<p>Here&#39;s an example <code>.less</code> file that a package can define using theme variables:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;ui-variables&quot;</span><span class="token punctuation">;</span></span>

<span class="token selector">.my-selector</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@base-background-color</span><span class="token punctuation">;</span></span>
	<span class="token property">padding</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@component-padding</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token string">&quot;syntax-variables&quot;</span><span class="token punctuation">;</span></span>

<span class="token selector">.my-selector</span> <span class="token punctuation">{</span>
	<span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token atrule"><span class="token rule">@syntax-background-color</span><span class="token punctuation">;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="development-workflow" tabindex="-1"><a class="header-anchor" href="#development-workflow" aria-hidden="true">#</a> Development workflow</h4><p>There are a few tools to help make theme development faster and easier.</p><h5 id="live-reload" tabindex="-1"><a class="header-anchor" href="#live-reload" aria-hidden="true">#</a> Live Reload</h5>`,6),P=t("kbd",{class:"platform-mac"},"Alt+Cmd+Ctrl+L",-1),O=t("kbd",{class:"platform-windows platform-linux"},"Alt+Ctrl+R",-1),U={href:"https://github.com/atom/dev-live-reload",target:"_blank",rel:"noopener noreferrer"},E=s('<p>To launch a Dev Mode window:</p><ul><li>Open your theme directory in a dev window by selecting the <em>View &gt; Developer &gt; Open in Dev Mode</em> menu item</li><li>Or launch Atom from the terminal with <code>atom --dev</code></li></ul><p>If you&#39;d like to reload all the styles at any time, you can use the shortcut <kbd class="platform-mac">Alt+Cmd+Ctrl+L</kbd><kbd class="platform-windows platform-linux">Alt+Ctrl+R</kbd>.</p><h5 id="developer-tools" tabindex="-1"><a class="header-anchor" href="#developer-tools" aria-hidden="true">#</a> Developer Tools</h5><p>Atom is based on the Chrome browser, and supports Chrome&#39;s Developer Tools. You can open them by selecting the <em>View &gt; Developer &gt; Toggle Developer Tools</em> menu, or by using the <kbd class="platform-mac">Alt+Cmd+I</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+I</kbd> shortcut.</p><p>The dev tools allow you to inspect elements and take a look at their CSS properties.</p><p><img src="'+h+'" alt="Developer Tools"></p>',7),N={href:"https://developer.chrome.com/devtools/docs/dom-and-styles",target:"_blank",rel:"noopener noreferrer"},Y=t("h5",{id:"atom-styleguide",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#atom-styleguide","aria-hidden":"true"},"#"),e(" Atom Styleguide")],-1),G={href:"https://github.com/atom/styleguide",target:"_blank",rel:"noopener noreferrer"},j=s('<p>To open the Styleguide, open the command palette with <kbd class="platform-mac">Cmd+Shift+P</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+P</kbd> and search for &quot;styleguide&quot;, or use the shortcut <kbd class="platform-mac">Cmd+Ctrl+Shift+G</kbd><kbd class="platform-windows platform-linux">Ctrl+Shift+G</kbd>.</p><p><img src="'+d+'" alt="Style Guide"></p><h5 id="side-by-side" tabindex="-1"><a class="header-anchor" href="#side-by-side" aria-hidden="true">#</a> Side by side</h5><p>Sometimes when creating a theme (or package) things can go wrong and the editor becomes un-usable. E.g. if the text and background have the same color or something gets pushed out of sight. To avoid having to open Atom in &quot;normal&quot; mode to fix the issue, it&#39;s advised to open <strong>two</strong> Atom windows. One for making changes and one in Dev Mode to see the changes getting applied.</p><p><img src="'+c+'" alt="Side by side screenshot"></p><blockquote><p>Make changes on the <strong>left</strong>, see the changes getting applied in &quot;Dev Mode&quot; on the <strong>right</strong>.</p></blockquote><p>Now if you mess up something, only the window in &quot;Dev Mode&quot; will be affected and you can easily correct the mistake in your &quot;normal&quot; window.</p><h4 id="publish-your-theme" tabindex="-1"><a class="header-anchor" href="#publish-your-theme" aria-hidden="true">#</a> Publish your theme</h4><p>Once you&#39;re happy with your theme and would like to share it with other Atom users, it&#39;s time to publish it. \u{1F389}</p>',9);function F(B,z){const a=l("ExternalLinkIcon"),n=l("RouterLink");return u(),m("div",null,[f,t("p",null,[e("Atom's interface is rendered using HTML, and it's styled via "),t("a",b,[e("Less"),o(a)]),e(" which is a superset of CSS. Don't worry if you haven't heard of Less before; it's just like CSS, but with a few handy extensions.")]),y,t("ul",null,[t("li",null,[e("Less is a superset of CSS, but it has some really handy features like variables. If you aren't familiar with its syntax, take a few minutes to "),t("a",k,[e("familiarize yourself"),o(a)]),e(".")]),t("li",null,[e("You may also want to review the concept of a "),v,e(" (as covered in "),o(n,{to:"/hacking-atom/sections/package-word-count/#packagejson"},{default:i(()=>[e("Atom "),w]),_:1}),e("). This file is used to help distribute your theme to Atom users.")]),_,t("li",null,[e("You can find existing themes to install or fork in "),t("a",x,[e("the atom.io themes registry"),o(a)]),e(".")])]),T,t("ol",null,[t("li",null,[e("Fork the "),t("a",A,[e("ui-theme-template"),o(a)])]),C]),S,t("ul",null,[t("li",null,[t("a",q,[e("ui-variables.less"),o(a)])]),t("li",null,[t("a",D,[e("syntax-variables.less"),o(a)])])]),I,M,L,t("p",null,[e("Your package should generally only specify structural styling, and these should come from "),t("a",R,[e("the style guide"),o(a)]),e(". Your package shouldn't specify colors, padding sizes, or anything in absolute pixels. You should instead use the theme variables. If you follow this guideline, your package will look good out of the box with any theme!")]),V,t("p",null,[e("Reloading by pressing "),P,O,e(" after you make changes to your theme is less than ideal. Atom supports "),t("a",U,[e("live updating"),o(a)]),e(" of styles on Atom windows in Dev Mode.")]),E,t("p",null,[e("Check out Google's "),t("a",N,[e("extensive tutorial"),o(a)]),e(" for a short introduction.")]),Y,t("p",null,[e("If you are creating an UI theme, you'll want a way to see how your theme changes affect all the components in the system. The "),t("a",G,[e("Styleguide"),o(a)]),e(" is a page that renders every component Atom supports.")]),j,t("p",null,[e("Follow the steps on the "),o(n,{to:"/docs/atom-archive/hacking-atom/publishing/"},{default:i(()=>[e("Publishing")]),_:1}),e(" page. The example used is for the Word Count package, but publishing a theme works exactly the same.")])])}const K=p(g,[["render",F],["__file","creating-a-theme.html.vue"]]);export{K as default};
