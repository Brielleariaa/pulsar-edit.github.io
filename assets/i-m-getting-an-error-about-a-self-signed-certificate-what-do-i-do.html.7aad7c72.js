import{_ as e,o as t,c as o,e as n}from"./app.f59d5735.js";const i={},a=n(`<h3 id="i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do" tabindex="-1"><a class="header-anchor" href="#i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do" aria-hidden="true">#</a> I\u2019m getting an error about a \u201Cself-signed certificate\u201D. What do I do?</h3><p>This means that there is a proxy between you and our servers where someone (typically your employer) has installed a &quot;self-signed&quot; security certificate in the proxy. A self-signed certificate is one that isn&#39;t trusted by anyone but the person who created the certificate. Most security certificates are backed by known, trusted and certified companies. So Atom is warning you that your connection to our servers can be snooped and even hacked by whoever created the self-signed certificate. Since it is self-signed, Atom has no way of knowing who that is.</p><p>If you decide that unsecured connections to our servers is acceptable to you, you can use the following instructions.</p><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>\u{1F6A8} <strong>Danger:</strong> If you decide that <strong>unsecured</strong> connections to our servers is acceptable to you, you can use the following command:</p><div class="language-command-line ext-command-line line-numbers-mode"><pre class="language-command-line"><code>apm config set strict-ssl false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>`,4),s=[a];function r(c,d){return t(),o("div",null,s)}const u=e(i,[["render",r],["__file","i-m-getting-an-error-about-a-self-signed-certificate-what-do-i-do.html.vue"]]);export{u as default};
