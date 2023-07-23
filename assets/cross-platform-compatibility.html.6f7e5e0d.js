import{_ as i,o as s,c as r,a,b as e,d as n,e as t,r as d}from"./app.f59d5735.js";const l={},c=t('<h3 id="cross-platform-compatibility" tabindex="-1"><a class="header-anchor" href="#cross-platform-compatibility" aria-hidden="true">#</a> Cross-Platform Compatibility</h3><p>Atom runs on a number of platforms and while Electron and Node take care of many of the details there are still some considerations to ensure your package works on other operating systems.</p><h4 id="symlinks" tabindex="-1"><a class="header-anchor" href="#symlinks" aria-hidden="true">#</a> Symlinks</h4><p>File symlinks can be used on Windows by non-Administrators by specifying &#39;junction&#39; as the type (this argument is ignored on macOS &amp; Linux).</p><p>Also consider:</p><ul><li><em>Symlinks committed to Git</em> will not checkout correctly on Windows - <em>dynamically create what you need with <code>fs.symlink</code> instead</em></li><li><em>Symlinked directories</em> are only available to Administrators on Windows - <em>avoid a dependency on them</em></li></ul><h4 id="filenames" tabindex="-1"><a class="header-anchor" href="#filenames" aria-hidden="true">#</a> Filenames</h4><ul><li><em>Reserved filenames</em> on Windows are <code>com1</code>-<code>com9</code>, <code>lpt1</code>-<code>lpt9</code>, <code>con</code>, <code>nul</code>, <code>aux</code> and <code>prn</code> (regardless of extension, e.g. <code>prn.txt</code> is disallowed)</li><li><em>Reserved characters</em> on Windows are ? \\ / &lt; &gt; ? % | : &quot; <em>so avoid where possible</em></li><li><em>Names with spaces</em> when passed to the command line; <ul><li>Windows requires you <em>surround the path with double quotes</em> e.g. <code>&quot;c:\\my test&quot;</code></li><li>macOS and Linux require <em>a backslash before each space</em> e.g. <code>/my\\ test</code></li></ul></li></ul><h4 id="file-paths" tabindex="-1"><a class="header-anchor" href="#file-paths" aria-hidden="true">#</a> File paths</h4><ul><li>Windows uses <code>\\</code> although some tools and PowerShell allow <code>/</code> too</li><li>macOS and Linux use <code>/</code></li></ul><p>You can dynamically find out what your platform uses with <code>path.sep</code> or better yet <em>use the node path library functions</em> such as <code>join</code> and <code>normalize</code> which automatically take care of this.</p><p>Windows supports up to <em>250 characters</em> for a path - <em>avoid deeply nested directory structures</em></p><h4 id="paths-are-not-urls" tabindex="-1"><a class="header-anchor" href="#paths-are-not-urls" aria-hidden="true">#</a> Paths are not URLs</h4><p>URL parsing routines should not be used on file paths. While they initially look like a relative path it will fail in a number of scenarios on all platforms.</p><ul><li>Various characters are misinterpreted, e.g. <code>?</code> as query string, <code>#</code> as a fragment identifier</li><li><strong>Windows</strong> drive specifiers are incorrectly parsed as a protocol</li></ul><p>If you need to use a path for a URL use the file: protocol with an absolute path instead to ensure drive letters and slashes are appropriately addressed, e.g. <code>file:///c|/test/pic.png</code></p><h4 id="fs-stat-on-directories" tabindex="-1"><a class="header-anchor" href="#fs-stat-on-directories" aria-hidden="true">#</a> <code>fs.stat</code> on directories</h4><p>The <code>fs.stat</code> function does not return the size of the contents of a directory but rather the allocation size of the directory itself. This returns 0 on Windows and 1024 on macOS and so should not be relied upon.</p><h4 id="path-relative-can-t-traverse-drives" tabindex="-1"><a class="header-anchor" href="#path-relative-can-t-traverse-drives" aria-hidden="true">#</a> <code>path.relative</code> can&#39;t traverse drives</h4><ul><li>On a macOS or Linux system <code>path.relative</code> can be used to calculate a relative path to traverse between any two given paths.</li><li>On Windows this is not always possible as it can contain multiple absolute roots, e.g. <code>c:\\</code> and <code>d:\\</code></li></ul><h4 id="rapid-file-operations" tabindex="-1"><a class="header-anchor" href="#rapid-file-operations" aria-hidden="true">#</a> Rapid file operations</h4>',21),h={href:"https://www.npmjs.com/package/rimraf",target:"_blank",rel:"noopener noreferrer"},u=t(`<h4 id="line-endings" tabindex="-1"><a class="header-anchor" href="#line-endings" aria-hidden="true">#</a> Line endings</h4><ul><li>Windows uses <code>CRLF</code></li><li>macOS and Linux use <code>LF</code></li><li>Git on Windows often has <code>autocrlf</code> set which automatically converts between the two</li></ul><p>If you are writing specs that use text file fixtures consider that this will interfere with file lengths, hash codes and direct text comparisons. It will also change the Atom selection length by 1 character per line.</p><p>If you have spec fixtures that are text files you may want to tell Git to force LF, CRLF or not convert them by specifying the paths in <code>.gitattributes</code> e.g.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>spec/fixtures/always-crlf.txt eol=crlf
spec/fixtures/always-lf.txt eol=lf
spec/fixtures/leave-as-is.txt -text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function m(p,f){const o=d("ExternalLinkIcon");return s(),r("div",null,[c,a("p",null,[e("Creation and deletion operations may take a few milliseconds to complete. If you need to remove many files and folders consider "),a("a",h,[e("RimRAF"),n(o)]),e(" which has built-in retry logic for this.")]),u])}const w=i(l,[["render",m],["__file","cross-platform-compatibility.html.vue"]]);export{w as default};
