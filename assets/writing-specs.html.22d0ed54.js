import{_ as o,o as p,c,a as s,b as n,d as t,e,r as i}from"./app.f59d5735.js";const u={},l=s("h2",{id:"writing-specs",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#writing-specs","aria-hidden":"true"},"#"),n(" Writing Specs")],-1),r=s("p",null,"We've looked at and written a few specs through the examples already. Now it's time to take a closer look at the spec framework itself. How exactly do you write tests in Pulsar?",-1),d={href:"https://jasmine.github.io/archives/1.3/introduction",target:"_blank",rel:"noopener noreferrer"},k=s("h3",{id:"create-a-new-spec",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#create-a-new-spec","aria-hidden":"true"},"#"),n(" Create a New Spec")],-1),h={href:"https://github.com/pulsar-edit/pulsar/tree/master/spec",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/pulsar-edit/markdown-preview/tree/master/spec",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"spec",-1),f=e(`<h4 id="create-a-spec-file" tabindex="-1"><a class="header-anchor" href="#create-a-spec-file" aria-hidden="true">#</a> Create a Spec File</h4><p>Spec files <strong>must</strong> end with <code>-spec</code> so add <code>sample-spec.js</code> to the <code>spec</code> directory.</p><h4 id="add-one-or-more-describe-methods" tabindex="-1"><a class="header-anchor" href="#add-one-or-more-describe-methods" aria-hidden="true">#</a> Add One or More <code>describe</code> Methods</h4><p>The <code>describe</code> method takes two arguments, a description and a function. If the description explains a behavior it typically begins with <code>when</code>; if it is more like a unit test it begins with the method name.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;when a test is written&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// contents</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;Editor::moveUp&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// contents</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="add-one-or-more-it-methods" tabindex="-1"><a class="header-anchor" href="#add-one-or-more-it-methods" aria-hidden="true">#</a> Add One or More <code>it</code> Methods</h4><p>The <code>it</code> method also takes two arguments, a description and a function. Try and make the description flow with the <code>it</code> method. For example, a description of &quot;this should work&quot; doesn&#39;t read well as &quot;it this should work&quot;. But a description of &quot;should work&quot; sounds great as &quot;it should work&quot;.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;when a test is written&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;has some expectations that should pass&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// Expectations</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="add-one-or-more-expectations" tabindex="-1"><a class="header-anchor" href="#add-one-or-more-expectations" aria-hidden="true">#</a> Add One or More Expectations</h4>`,11),b={href:"https://jasmine.github.io/archives/1.3/introduction#section-Expectations",target:"_blank",rel:"noopener noreferrer"},g=e(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;when a test is written&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;has some expectations that should pass&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;apples&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&quot;apples&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;oranges&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&quot;apples&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="custom-matchers" tabindex="-1"><a class="header-anchor" href="#custom-matchers" aria-hidden="true">#</a> Custom Matchers</h5><p>In addition to the Jasmine&#39;s built-in matchers, Pulsar includes the following:</p>`,3),w={href:"https://github.com/velesin/jasmine-jquery",target:"_blank",rel:"noopener noreferrer"},y=e("<li>The <code>toBeInstanceOf</code> matcher is for the <code>instanceof</code> operator</li><li>The <code>toHaveLength</code> matcher compares against the <code>.length</code> property</li><li>The <code>toExistOnDisk</code> matcher checks if the file exists in the filesystem</li><li>The <code>toHaveFocus</code> matcher checks if the element currently has focus</li><li>The <code>toShow</code> matcher tests if the element is visible in the dom</li>",5),q={href:"https://github.com/pulsar-edit/pulsar/blob/master/spec/spec-helper.js",target:"_blank",rel:"noopener noreferrer"},x=e(`<h3 id="asynchronous-specs" tabindex="-1"><a class="header-anchor" href="#asynchronous-specs" aria-hidden="true">#</a> Asynchronous Specs</h3><p>Writing Asynchronous specs can be tricky at first. Some examples.</p><h4 id="promises" tabindex="-1"><a class="header-anchor" href="#promises" aria-hidden="true">#</a> Promises</h4><p>Working with promises is rather easy in Pulsar. You can use our <code>waitsForPromise</code> function.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;when we open a file&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;should be opened in an editor&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">waitsForPromise</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			atom<span class="token punctuation">.</span>workspace
				<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;c.coffee&quot;</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">expect</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">&quot;c.coffee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This method can be used in the <code>describe</code>, <code>it</code>, <code>beforeEach</code> and <code>afterEach</code> functions.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;when we open a file&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">waitsForPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;c.coffee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;should be opened in an editor&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">expect</span><span class="token punctuation">(</span>atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">getActiveTextEditor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span>
			<span class="token string">&quot;c.coffee&quot;</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you need to wait for multiple promises use a new <code>waitsForPromise</code> function for each promise. (Caution: Without <code>beforeEach</code> this example will fail!)</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;waiting for the packages to load&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">waitsForPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> atom<span class="token punctuation">.</span>workspace<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;sample.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token function">waitsForPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> atom<span class="token punctuation">.</span>packages<span class="token punctuation">.</span><span class="token function">activatePackage</span><span class="token punctuation">(</span><span class="token string">&quot;tabs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token function">waitsForPromise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> atom<span class="token punctuation">.</span>packages<span class="token punctuation">.</span><span class="token function">activatePackage</span><span class="token punctuation">(</span><span class="token string">&quot;tree-view&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;should have waited long enough&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">expect</span><span class="token punctuation">(</span>atom<span class="token punctuation">.</span>packages<span class="token punctuation">.</span><span class="token function">isPackageActive</span><span class="token punctuation">(</span><span class="token string">&quot;tabs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">expect</span><span class="token punctuation">(</span>atom<span class="token punctuation">.</span>packages<span class="token punctuation">.</span><span class="token function">isPackageActive</span><span class="token punctuation">(</span><span class="token string">&quot;tree-view&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toBe</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>waitsForPromise</code> can take an additional object argument before the function. The object can have the following properties:</p><ul><li><code>shouldReject</code> Whether the promise should reject or resolve (default: <code>false</code>)</li><li><code>timeout</code> The amount of time (in ms) to wait for the promise to be resolved or rejected (default: <code>p<wbr>rocess.env.CI ? 60000 : 5000</code>)</li><li><code>label</code> The label to display if promise times out (default: <code>&#39;promise to be resolved or rejected&#39;</code>)</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;when we open a file&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;should be opened in an editor&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">waitsForPromise</span><span class="token punctuation">(</span>
			<span class="token punctuation">{</span>
				<span class="token literal-property property">shouldReject</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
				<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
				<span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&quot;promise to be resolved or rejected&quot;</span><span class="token punctuation">,</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
			<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
				atom<span class="token punctuation">.</span>workspace
					<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;c.coffee&quot;</span><span class="token punctuation">)</span>
					<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">editor</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">expect</span><span class="token punctuation">(</span>editor<span class="token punctuation">.</span><span class="token function">getPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toContain</span><span class="token punctuation">(</span><span class="token string">&quot;c.coffee&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="asynchronous-functions-with-callbacks" tabindex="-1"><a class="header-anchor" href="#asynchronous-functions-with-callbacks" aria-hidden="true">#</a> Asynchronous Functions with Callbacks</h4><p>Specs for asynchronous functions can be done using the <code>waitsFor</code> and <code>runs</code> functions. A simple example.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;fs.readdir(path, cb)&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">&quot;is async&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> spy <span class="token operator">=</span> jasmine<span class="token punctuation">.</span><span class="token function">createSpy</span><span class="token punctuation">(</span><span class="token string">&quot;fs.readdirSpy&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		fs<span class="token punctuation">.</span><span class="token function">readdir</span><span class="token punctuation">(</span><span class="token string">&quot;/tmp/example&quot;</span><span class="token punctuation">,</span> spy<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token function">waitsFor</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> spy<span class="token punctuation">.</span>callCount <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token function">runs</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> exp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;example.coffee&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token function">expect</span><span class="token punctuation">(</span>spy<span class="token punctuation">.</span>mostRecentCall<span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span>exp<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">expect</span><span class="token punctuation">(</span>spy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toHaveBeenCalledWith</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&quot;example.coffee&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),_={href:"https://jasmine.github.io/archives/1.3/introduction#section-Asynchronous_Support",target:"_blank",rel:"noopener noreferrer"},j=e(`<h3 id="running-specs" tabindex="-1"><a class="header-anchor" href="#running-specs" aria-hidden="true">#</a> Running Specs</h3><p>Most of the time you&#39;ll want to run specs by triggering the <code>window:run-package-specs</code> command. This command is not only to run package specs, it can also be used to run Pulsar core specs when working on Pulsar itself. This will run all the specs in the current project&#39;s <code>spec</code> directory.</p><p>To run a limited subset of specs use the <code>fdescribe</code> or <code>fit</code> methods. You can use those to focus a single spec or several specs. Modified from the example above, focusing an individual spec looks like this:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">describe</span><span class="token punctuation">(</span><span class="token string">&quot;when a test is written&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">fit</span><span class="token punctuation">(</span><span class="token string">&quot;has some expectations that should pass&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;apples&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&quot;apples&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">expect</span><span class="token punctuation">(</span><span class="token string">&quot;oranges&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token string">&quot;apples&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="running-on-ci" tabindex="-1"><a class="header-anchor" href="#running-on-ci" aria-hidden="true">#</a> Running on CI</h4>`,5),P={href:"https://blog.atom.io/2014/04/25/ci-for-your-packages.html",target:"_blank",rel:"noopener noreferrer"},A={href:"http://blog.atom.io/2014/07/28/windows-ci-for-your-packages.html",target:"_blank",rel:"noopener noreferrer"},T=e(`<h4 id="running-via-the-command-line" tabindex="-1"><a class="header-anchor" href="#running-via-the-command-line" aria-hidden="true">#</a> Running via the Command Line</h4><p>To run tests on the command line, run Pulsar with the <code>--test</code> flag followed by one or more paths to test files or directories. You can also specify a <code>--timeout</code> option, which will force-terminate your tests after a certain number of seconds have passed.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pulsar <span class="token parameter variable">--test</span> <span class="token parameter variable">--timeout</span> <span class="token number">60</span> ./test/test-1.js ./test/test-2.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="customizing-your-test-runner" tabindex="-1"><a class="header-anchor" href="#customizing-your-test-runner" aria-hidden="true">#</a> Customizing your test runner</h3><p>By default, package tests are run with Jasmine 1.3, which is outdated but can&#39;t be changed for compatibility reasons. You can specify your own custom test runner by including an <code>atomTestRunner</code> field in your <code>package.json</code>. Pulsar will require whatever module you specify in this field, so you can use a relative path or the name of a module in your package&#39;s dependencies.</p><p>Your test runner module must export a single function, which Pulsar will call within a new window to run your package&#39;s tests. Your function will be called with the following parameters:</p><ul><li><code>testPaths</code> An array of paths to tests to run. Could be paths to files or directories.</li><li><code>buildAtomEnvironment</code> A function that can be called to construct an instance of the <code>atom</code> global. No <code>atom</code> global will be explicitly assigned, but you can assign one in your runner if desired. This function should be called with the following parameters: <ul><li><code>applicationDelegate</code> An object responsible for Pulsar&#39;s interaction with the browser process and host OS. Use <code>buildDefaultApplicationDelegate</code> for a default instance. You can override specific methods on this object to prevent or test these interactions.</li><li><code>window</code> A window global.</li><li><code>document</code> A document global.</li><li><code>configDirPath</code> A path to the configuration directory (usually <code>~/.pulsar</code>).</li><li><code>enablePersistence</code> A boolean indicating whether the Pulsar environment should save or load state from the file system. You probably want this to be <code>false</code>.</li></ul></li><li><code>buildDefaultApplicationDelegate</code> A function that builds a default instance of the application delegate, suitable to be passed as the <code>applicationDelegate</code> parameter to <code>buildAtomEnvironment</code>.</li><li><code>logFile</code> An optional path to a log file to which test output should be logged.</li><li><code>headless</code> A boolean indicating whether or not the tests are being run from the command line via <code>pulsar --test</code>.</li><li><code>legacyTestRunner</code> This function can be invoked to run the legacy Jasmine runner, giving your package a chance to transition to a new test runner while maintaining a subset of its tests in the old environment.</li></ul><p>Your function should return a promise that resolves to an exit code when your tests are finished running. This exit code will be returned when running your tests via the command line.</p>`,8);function E(C,F){const a=i("ExternalLinkIcon");return p(),c("div",null,[l,r,s("p",null,[n("Pulsar uses "),s("a",d,[n("Jasmine"),t(a)]),n(" as its spec framework. Any new functionality should have specs to guard against regressions.")]),k,s("p",null,[s("a",h,[n("Pulsar specs"),t(a)]),n(" and "),s("a",m,[n("package specs"),t(a)]),n(" are added to their respective "),v,n(" directory. The example below creates a spec for Pulsar core.")]),f,s("p",null,[n("The best way to learn about expectations is to read the "),s("a",b,[n("Jasmine documentation"),t(a)]),n(" about them. Below is a simple example.")]),g,s("ul",null,[s("li",null,[s("a",w,[n("jasmine-jquery"),t(a)])]),y]),s("p",null,[n("These are defined in "),s("a",q,[n("spec/spec-helper.js"),t(a)]),n(".")]),x,s("p",null,[n("For a more detailed documentation on asynchronous tests please visit the "),s("a",_,[n("Jasmine documentation"),t(a)]),n(".")]),j,s("p",null,[n("It is now easy to run the specs in a CI environment like Travis and AppVeyor. See the "),s("a",P,[n("Travis CI For Your Packages"),t(a)]),n(" and "),s("a",A,[n("AppVeyor CI For Your Packages"),t(a)]),n(" posts for more details.")]),T])}const I=o(u,[["render",E],["__file","writing-specs.html.vue"]]);export{I as default};
