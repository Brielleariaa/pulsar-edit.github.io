import{_ as l,o as p,c as r,a as e,b as n,d as a,w as o,e as c,r as i}from"./app.f59d5735.js";const d={},u=e("h3",{id:"the-init-file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-init-file","aria-hidden":"true"},"#"),n(" The Init File")],-1),m=e("code",null,"init.coffee",-1),f=e("span",{class:"platform-mac platform-linux"},[e("code",null,"~/.atom")],-1),k=e("span",{class:"platform-windows"},[e("code",null,"%USERPROFILE%\\.atom")],-1),h={href:"https://atom.io/docs/api/latest",target:"_blank",rel:"noopener noreferrer"},g=e("a",{href:"../package-word-count"},"Package: Word Count",-1),_=c(`<p>You can open the <code>init.coffee</code> file in an editor from the <span class="platform-mac"><em>Atom &gt; Init Script</em></span><span class="platform-windows"><em>File &gt; Init Script</em></span><span class="platform-linux"><em>Edit &gt; Init Script</em></span> menu. This file can also be named <code>init.js</code> and contain JavaScript code.</p><p>For example, if you have the Audio Beep configuration setting enabled, you could add the following code to your <code>init.coffee</code> file to have Atom greet you with an audio beep every time it loads:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code>atom<span class="token punctuation">.</span><span class="token function">beep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),v=e("code",null,"init.coffee",-1),b={href:"https://atom.io/docs/api/latest/Selection",target:"_blank",rel:"noopener noreferrer"},w={href:"https://atom.io/docs/api/latest/Clipboard",target:"_blank",rel:"noopener noreferrer"},x=c(`<div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code>atom<span class="token punctuation">.</span>commands<span class="token punctuation">.</span>add <span class="token string">&#39;atom-text-editor&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;markdown:paste-as-link&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token operator">&gt;</span>
  <span class="token keyword">return</span> <span class="token keyword">unless</span> editor <span class="token operator">=</span> atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">getActiveTextEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  selection <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getLastSelection</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  clipboardText <span class="token operator">=</span> atom<span class="token punctuation">.</span>clipboard<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  selection<span class="token punctuation">.</span><span class="token function">insertText</span><span class="token punctuation">(</span><span class="token string">&quot;[<span class="token interpolation variable">#{selection.getText()}</span>](<span class="token interpolation variable">#{clipboardText}</span>)&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function y(A,I){const t=i("ExternalLinkIcon"),s=i("RouterLink");return p(),r("div",null,[u,e("p",null,[n("When Atom finishes loading, it will evaluate "),m,n(" in your "),f,k,n(" directory, giving you a chance to run CoffeeScript code to make customizations. Code in this file has full access to "),e("a",h,[n("Atom's API"),a(t)]),n(". If customizations become extensive, consider creating a package, which we will cover in "),g,n(".")]),_,e("p",null,[n("Because "),v,n(" provides access to Atom's API, you can use it to implement useful commands without creating a new package or extending an existing one. Here's a command which uses the "),e("a",b,[n("Selection API"),a(t)]),n(" and "),e("a",w,[n("Clipboard API"),a(t)]),n(" to construct a Markdown link from the selected text and the clipboard contents as the URL:")]),x,e("p",null,[n("Now, reload Atom and use the "),a(s,{to:"/getting-started/sections/atom-basics/#command-palette"},{default:o(()=>[n("Command Palette")]),_:1}),n(` to execute the new command, "Markdown: Paste As Link", by name. And if you'd like to trigger the command via a keyboard shortcut, you can define a `),a(s,{to:"/using-atom/sections/basic-customization/#customizing-keybindings"},{default:o(()=>[n("keybinding for the command")]),_:1}),n(".")])])}const C=l(d,[["render",y],["__file","the-init-file.html.vue"]]);export{C as default};
