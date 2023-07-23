import{_ as c}from"./markup.980ca430.js";import{_ as p,o as i,c as r,a as s,d as a,b as n,f as t,e as o,r as l}from"./app.f59d5735.js";const u={},d=o(`<h2 id="scoped-settings-scopes-and-scope-descriptors" tabindex="-1"><a class="header-anchor" href="#scoped-settings-scopes-and-scope-descriptors" aria-hidden="true">#</a> Scoped Settings, Scopes and Scope Descriptors</h2><p>Pulsar supports language-specific settings. You can soft wrap only Markdown files, or set the tab length to 4 in Python files.</p><p>Language-specific settings are a subset of something more general we call &quot;scoped settings&quot;. Scoped settings allow targeting down to a specific syntax token type. For example, you could conceivably set a setting to target only Ruby comments, only code inside Markdown files, or even only JavaScript function names.</p><h3 id="scope-names-in-syntax-tokens" tabindex="-1"><a class="header-anchor" href="#scope-names-in-syntax-tokens" aria-hidden="true">#</a> Scope Names in Syntax Tokens</h3><p>Each token in the editor has a collection of scope names. For example, the aforementioned JavaScript function name might have the scope names <code>function</code> and <code>name</code>. An open paren might have the scope names <code>punctuation</code>, <code>parameters</code>, <code>begin</code>.</p><p>Scope names work just like CSS classes. In fact, in the editor, scope names are attached to a token&#39;s DOM node as CSS classes.</p><p>Take this piece of JavaScript:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">functionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Log it out&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the dev tools, the first line&#39;s markup looks like this.</p><p><img src="`+c+`" alt="Markup"></p><p>All the class names on the spans are scope names. Any scope name can be used to target a setting&#39;s value.</p><h3 id="scope-selectors" tabindex="-1"><a class="header-anchor" href="#scope-selectors" aria-hidden="true">#</a> Scope Selectors</h3><p>Scope selectors allow you to target specific tokens just like a CSS selector targets specific nodes in the DOM. Some examples:</p><div class="language-coffee ext-coffee line-numbers-mode"><pre class="language-coffee"><code><span class="token string">&#39;.source.js&#39;</span> <span class="token comment"># selects all javascript tokens</span>
<span class="token string">&#39;.source.js .function.name&#39;</span> <span class="token comment"># selects all javascript function names</span>
<span class="token string">&#39;.function.name&#39;</span> <span class="token comment"># selects all function names in any language</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),k={href:"https://atom.io/docs/api/latest/Config#instance-set",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"Config::set",-1),g=s("code",null,"scopeSelector",-1),h=s("code",null,"scopeSelector",-1),v=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>atom<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;my-package.my-setting&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;special value&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">scopeSelector</span><span class="token operator">:</span> <span class="token string">&quot;.source.js .function.name&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scope-descriptors" tabindex="-1"><a class="header-anchor" href="#scope-descriptors" aria-hidden="true">#</a> Scope Descriptors</h3>`,2),f={href:"https://atom.io/docs/api/latest/ScopeDescriptor",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"Array",-1),_=s("code",null,"String",-1),y=s("em",null,"all",-1),S=o(`<p>In our JavaScript example above, a scope descriptor for the function name token would be:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token string">&quot;source.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;meta.function.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;entity.name.function.js&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),j={href:"https://atom.io/docs/api/latest/Config#instance-get",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"Config::get",-1),q=s("code",null,"scopeDescriptor",-1),D=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> scopeDescriptor <span class="token operator">=</span> <span class="token punctuation">[</span>
	<span class="token string">&quot;source.js&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;meta.function.js&quot;</span><span class="token punctuation">,</span>
	<span class="token string">&quot;entity.name.function.js&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> value <span class="token operator">=</span> atom<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;my-package.my-setting&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">scope</span><span class="token operator">:</span> scopeDescriptor<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>But, you do not need to generate scope descriptors by hand. There are a couple methods available to get the scope descriptor from the editor:</p>`,2),w={href:"https://atom.io/docs/api/latest/TextEditor#instance-getRootScopeDescriptor",target:"_blank",rel:"noopener noreferrer"},T=s("code",null,"Editor::getRootScopeDescriptor",-1),P=s("code",null,'[".source.js"]',-1),A={href:"https://atom.io/docs/api/latest/TextEditor#instance-scopeDescriptorForBufferPosition",target:"_blank",rel:"noopener noreferrer"},O=s("code",null,"Editor::scopeDescriptorForBufferPosition",-1),C={href:"https://atom.io/docs/api/latest/Cursor#instance-getScopeDescriptor",target:"_blank",rel:"noopener noreferrer"},I=s("code",null,"Cursor::getScopeDescriptor",-1),E=s("code",null,'["source.js", "meta.function.js", "entity.name.function.js"]',-1),J=o(`<p>Let&#39;s revisit our example using these methods:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> editor <span class="token operator">=</span> atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">getActiveTextEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> cursor <span class="token operator">=</span> editor<span class="token punctuation">.</span><span class="token function">getLastCursor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> valueAtCursor <span class="token operator">=</span> atom<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;my-package.my-setting&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">scope</span><span class="token operator">:</span> cursor<span class="token punctuation">.</span><span class="token function">getScopeDescriptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> valueForLanguage <span class="token operator">=</span> atom<span class="token punctuation">.</span>config<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;my-package.my-setting&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">scope</span><span class="token operator">:</span> editor<span class="token punctuation">.</span><span class="token function">getRootScopeDescriptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function L(N,B){const e=l("ExternalLinkIcon");return i(),r("div",null,[d,s("p",null,[s("a",k,[m,a(e)]),n(" accepts a "),t("TODO: There is currently no Pulsar API doc so this is being left for the time being"),g,n(". If you'd like to set a setting for JavaScript function names, you can give it the JavaScript function name "),h,n(":")]),v,s("p",null,[n("A scope descriptor is an "),s("a",f,[n("Object"),a(e)]),t("TODO: There is currently no Pulsar API doc so this is being left for the time being"),n(" that wraps an "),b,n(" of "),_,n("s. The Array describes a path from the root of the syntax tree to a token including "),y,n(" scope names for the entire path.")]),S,s("p",null,[s("a",j,[x,a(e)]),n(" accepts a "),t("TODO: There is currently no Pulsar API doc so this is being left for the time being"),q,n(". You can get the value for your setting scoped to JavaScript function names via:")]),D,s("ul",null,[s("li",null,[s("a",w,[T,a(e)]),t("TODO: There is currently no Pulsar API doc so this is being left for the time being"),n(" to get the language's descriptor. For example: "),P]),s("li",null,[s("a",A,[O,a(e)]),t("TODO: There is currently no Pulsar API doc so this is being left for the time being"),n(" to get the descriptor at a specific position in the buffer.")]),s("li",null,[s("a",C,[I,a(e)]),t("TODO: There is currently no Pulsar API doc so this is being left for the time being"),n(" to get a cursor's descriptor based on position. eg. if the cursor were in the name of the method in our example it would return "),E])]),J])}const V=p(u,[["render",L],["__file","scoped-settings-scopes-and-scope-descriptors.html.vue"]]);export{V as default};
