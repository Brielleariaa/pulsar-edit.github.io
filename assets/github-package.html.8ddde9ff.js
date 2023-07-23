import{_ as i,a as s,b as r,c as n,d as l,e as c,f as h,g as u,h as m,i as p,j as d,k as g,l as b,m as f,n as k,o as w,p as q,q as v,r as y,s as _,t as C,u as R,v as P,w as I,x,y as G}from"./github-review-reply.620637fa.js";import{_ as T,o as H,c as O,a as t,b as e,d as A,e as o,r as S}from"./app.f59d5735.js";const N={},V=o('<h2 id="github-package" tabindex="-1"><a class="header-anchor" href="#github-package" aria-hidden="true">#</a> GitHub package</h2><p>The GitHub package brings Git and GitHub integration right inside Pulsar.</p><ul><li><a href="#initialize-repositories">Initialize</a></li><li><a href="#clone-repositories">Clone</a></li><li><a href="#branch">Branch</a></li><li><a href="#stage">Stage</a></li><li><a href="#discard-changes">Discard</a></li><li><a href="#commit">Commit</a></li><li><a href="#amend-and-undo">Amend and undo</a></li><li><a href="#publish-and-push">Publish and push</a></li><li><a href="#fetch-and-pull">Fetch and pull</a></li><li><a href="#resolve-conflicts">Resolve conflicts</a></li><li><a href="#create-a-pull-request">Create a Pull Request</a></li><li><a href="#view-pull-requests">View Pull Requests</a></li><li><a href="#checkout-a-pull-request">Checkout a Pull Request</a></li><li><a href="#open-any-issue-or-pull-request">Open any Issue or Pull Request</a></li><li><a href="#view-pull-request-review-comments">View Pull Request review comments</a></li><li><a href="#navigate-pull-request-review-comments">Navigate Pull Request review comments</a></li><li><a href="#respond-to-a-pull-request-review-comment">Respond to a Pull Request review comment</a></li></ul><p>Most of the functionality lives within the Git and GitHub dock items.</p><p><img src="'+i+'" alt="The Git and GitHub panels" title="The Git and GitHub panels"></p><p>There are different ways to access them, probably the most common way is through their keybindings:</p><ul><li>Open the <strong>Git</strong> panel: <kbd>Ctrl+9</kbd></li><li>Open the <strong>GitHub</strong> panel: <kbd>Ctrl+8</kbd></li></ul><p>Another way is from the menu: <code>Packages -&gt; GitHub -&gt; Toggle Git Tab and Toggle GitHub Tab</code></p><p>Or you can also toggle the Git panel from the Status Bar by clicking on the changed files icon:</p><p><img src="'+s+'" alt="Open Git panel" title="Open Git panel"></p><hr><h3 id="initialize-repositories" tabindex="-1"><a class="header-anchor" href="#initialize-repositories" aria-hidden="true">#</a> Initialize repositories</h3><p>In case a project doesn&#39;t have a Git repository yet, you can create one from the Git panel.</p><p><img src="'+r+'" alt="Initialize repositories" title="Initialize repositories"></p><h3 id="clone-repositories" tabindex="-1"><a class="header-anchor" href="#clone-repositories" aria-hidden="true">#</a> Clone repositories</h3><p>To clone a repository, open the GitHub panel while you have no project folders open in Pulsar and click &quot;Clone an existing GitHub repository&quot;. In the dialog, paste the URL of a repository and click &quot;Clone&quot;. The new project will be added to the Tree View.</p><p><img src="'+n+'" alt="GitHub panel" title="GitHub panel without projects"></p><p><img src="'+l+'" alt="Clone dialog" title="Clone repositories"></p><p>Alternately, run the <code>GitHub: Clone</code> command to open the Clone dialog any time.</p><h3 id="branch" tabindex="-1"><a class="header-anchor" href="#branch" aria-hidden="true">#</a> Branch</h3><p>To open the branch tooltip, click the branch icon in the Status Bar. From there you can <strong>create</strong> or <strong>switch</strong> branches.</p><p><img src="'+c+'" alt="Create or switch branches" title="Create or switch branches"></p><h3 id="stage" tabindex="-1"><a class="header-anchor" href="#stage" aria-hidden="true">#</a> Stage</h3><p>After making some changes, <strong>stage</strong> anything you want to be part of the next commit. Choose between staging...</p><ul><li><strong>All changes</strong>: Click the &quot;Stage All&quot; button in the &quot;Unstaged Changes&quot; bar.</li><li><strong>Files</strong>: Double-click a file or select a file and press <kbd>Enter</kbd>.</li><li><strong>Hunk</strong>: Click on the &quot;Stage Hunk&quot; button or select a hunk and press <kbd>Enter</kbd>.</li><li><strong>Lines</strong>: Click on a line (or drag on multiple lines) to select, then click on the &quot;Stage Selection&quot; button. Or use the <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl+/</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd-/</kbd> key to toggle from hunk mode to line mode, then press <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl-Enter</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd-Enter</kbd> to stage just a single line.</li></ul><p>Use the <strong><em>LNX/WIN</em></strong>: <kbd>Cmd-Left</kbd> - <strong><em>MAC</em></strong>: <kbd>Ctrl-Left</kbd> or <strong><em>LNX/WIN</em></strong>: <kbd>Ctrl-Right</kbd> - <strong><em>MAC</em></strong>: <kbd>Cmd-Right</kbd> arrow key to switch between file list and the diff view. Unstaging can be done in the same way.</p><p><img src="'+h+'" alt="Stage changes" title="Stage changes"></p><h3 id="discard-changes" tabindex="-1"><a class="header-anchor" href="#discard-changes" aria-hidden="true">#</a> Discard changes</h3><p>If you no longer want to keep some changes, you can discard them. It&#39;s similar to staging, but accessible behind a context menu.</p><ul><li><strong>All changes</strong>: Click the <kbd>...</kbd> menu in the &quot;Unstaged Changes&quot; header and choose &quot;Discard All Changes&quot;.</li><li><strong>Files</strong>: Right-click a file (or multiple) and choose &quot;Discard Changes&quot;.</li><li><strong>Hunk</strong>: Click on the trash icon in the top bar of a hunk.</li><li><strong>Lines</strong>: Right-click on a line (or multiple) and choose &quot;Discard Selection&quot;.</li></ul><p><img src="'+u+'" alt="Discard changes" title="Discard changes"></p><h3 id="commit-preview" tabindex="-1"><a class="header-anchor" href="#commit-preview" aria-hidden="true">#</a> Commit Preview</h3><p>To double check <strong>all changes</strong> that are going into your next commit, click the &quot;<strong>See All Staged Changes</strong>&quot; button above the commit message box. It lets you see all of your staged changes in a single pane. This &quot;commit preview&quot; can also serve as an inspiration for writing the commit message.</p><p><img src="'+m+'" alt="Commit Preview" title="Commit Preview"></p><h3 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h3><p>Once you&#39;ve staged your changes, enter a commit <strong>message</strong>. Feel free to describe the commit in more detail after leaving an empty line. Finalize by clicking the <strong>Commit</strong> button. If you need more space, click the expand icon at the bottom right. It will open a commit editor in the center.</p><p><img src="'+p+'" alt="Commit changes" title="Commit changes"></p><p>To add multiple <strong>co-authors</strong> to a commit, click the &quot;\u{1F464}\u2795&quot; icon in the bottom left corner of the commit message editor. Now you can search by name, email or GitHub username to give credit to a co-author.</p><p><img src="'+d+'" alt="Commit with co-authors" title="Commit with co-authors"></p><h3 id="amend-and-undo" tabindex="-1"><a class="header-anchor" href="#amend-and-undo" aria-hidden="true">#</a> Amend and undo</h3><p>In case you forgot to commit a change and would like to add it to your previous commit, right-click on the last commit, then choose &quot;Amend&quot; from the context menu.</p><p><img src="'+g+'" alt="Amend previous commit" title="Amend previous commit"></p><p>If you want to edit the commit message of your last commit, or add/remove changes, click on the &quot;Undo&quot; button. It will roll back to the state just before you clicked on the commit button.</p><p><img src="'+b+'" alt="Undo previous commit" title="Undo previous commit"></p><h3 id="view-commits" tabindex="-1"><a class="header-anchor" href="#view-commits" aria-hidden="true">#</a> View commits</h3><p>Once you&#39;ve made some commits, click on a commit message in the recent commit list to see the full diff and commit message associated with each:</p><p><img src="'+f+'" alt="View commit detai" title="View commit detai"></p><h3 id="publish-and-push" tabindex="-1"><a class="header-anchor" href="#publish-and-push" aria-hidden="true">#</a> Publish and push</h3><p>When you&#39;re ready to share your changes with your team members, click the <strong>Publish</strong> button in the Status Bar. It will push your local branch to the remote repository. After making more commits, you can <strong>Push</strong> them as well from the Status Bar.</p><p><img src="'+k+'" alt="Publish and push commits" title="Publish and push commits"></p><h3 id="fetch-and-pull" tabindex="-1"><a class="header-anchor" href="#fetch-and-pull" aria-hidden="true">#</a> Fetch and pull</h3><p>From time to time it&#39;s a good idea to click on the <strong>Fetch</strong> button to see if any other team member pushed changes. If so, click on <strong>Pull</strong> to merge the changes into your local branch.</p><p><img src="'+w+`" alt="Fetch and pull commits" title="Fetch and pull commits"></p><p>If you prefer to <strong>rebase</strong> when pulling, you can configure Git to make it the default behavior:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--bool</span> pull.rebase <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,55),F={href:"https://mislav.net/2013/02/merge-vs-rebase/",target:"_blank",rel:"noopener noreferrer"},L=o('<h3 id="resolve-conflicts" tabindex="-1"><a class="header-anchor" href="#resolve-conflicts" aria-hidden="true">#</a> Resolve conflicts</h3><p>Sometimes there can be conflicts when trying to merge. Files that have merge conflicts will show up in the &quot;Merge Conflicts&quot; list. Click on a file to open the editor. There you can <strong>resolve</strong> the conflict by picking a version or make further edits. Once done, stage the file and commit.</p><p><img src="'+q+'" alt="Resolve conflicts" title="Resolve conflicts"></p><h3 id="create-a-pull-request" tabindex="-1"><a class="header-anchor" href="#create-a-pull-request" aria-hidden="true">#</a> Create a Pull Request</h3><p>When your changes are ready to be reviewed by your team members, open the &quot;GitHub&quot; panel <kbd>Ctrl+8</kbd> and click on <strong>Open new pull request</strong>. It will open the browser where you can continue creating a pull request. If commits haven&#39;t been pushed or the branch isn&#39;t published yet, the GitHub package will do that automatically for you.</p><p><img src="'+v+'" alt="Create a Pull Request" title="Create a Pull Request"></p><h3 id="view-pull-requests" tabindex="-1"><a class="header-anchor" href="#view-pull-requests" aria-hidden="true">#</a> View Pull Requests</h3><p>Once the pull request is created, it will appear under <strong>Current pull request</strong> at the top of the panel. Underneath is a list of <strong>Open pull requests</strong>. It lets you quickly find a pull request by avatar, title or PR number. It also lets you keep an eye on the CI status. Clicking on a pull request in the list opens a center pane with more details, the timeline and conversations.</p><p><img src="'+y+'" alt="View Pull Requests" title="View Pull Requests"></p><h3 id="open-any-issue-or-pull-request" tabindex="-1"><a class="header-anchor" href="#open-any-issue-or-pull-request" aria-hidden="true">#</a> Open any Issue or Pull Request</h3><p>You can open issues or pull requests from any repo on GitHub. To do so, run the <code>GitHub: Open Issue Or Pull Request</code> command and paste the URL from an issue or pull request. Then press the <strong>Open Issue or Pull Request</strong> button and it will open a center pane. This lets you keep an issue or pull request as a reference, when working in another repo.</p><p><img src="'+_+'" alt="Open Issue or Pull Request" title="Open Issue or Pull Request"></p><h3 id="checkout-a-pull-request" tabindex="-1"><a class="header-anchor" href="#checkout-a-pull-request" aria-hidden="true">#</a> Checkout a Pull Request</h3><p>To test a pull request locally, open it in the workspace center by clicking on the pull request in the &quot;open pull requests&quot; list from the GitHub tab, then click on the <strong>Checkout</strong> button. It will automatically create a local branch and pull all the changes. If you would like to contribute to that pull request, start making changes, commit and push. Your contribution is now part of that pull request.</p><p><img src="'+C+'" alt="Checkout a pull request" title="Checkout a pull request"></p><h3 id="view-pull-request-review-comments" tabindex="-1"><a class="header-anchor" href="#view-pull-request-review-comments" aria-hidden="true">#</a> View Pull Request review comments</h3><p>To view review comments on a Pull Request, open the Reviews Tab from the <strong>See Reviews</strong> button from the footer of a Pull Request Pane. Alternatively, if the pull request has already been checked out, Reviews Tab can also be open from the same button on GitHub Tab.</p><p><img src="'+R+'" alt="Open review tab from footer" title="Open review tab from footer"></p><h3 id="navigate-pull-request-review-comments" tabindex="-1"><a class="header-anchor" href="#navigate-pull-request-review-comments" aria-hidden="true">#</a> Navigate Pull Request review comments</h3><p>You can see all the review summaries and comments of a pull request in the Reviews Tab. The comment section has a progress bar to help you keep track of how close are you to finish addressing the Pull Request comments (i.e. marking all comment threads on a Pull Request as &quot;resolved&quot;). Comment threads are greyed out after they have been resolved.</p><p><img src="'+P+'" alt="Review tab" title="Review tab"></p><p>After the pull request branch has been checked out, you can click <strong>Jump To File</strong> to open the commented on file and make changes as per the review comment right in the editor. If you would like to get the full context of the review comment, click <strong>Open Diff</strong> to open the diff view with line highlighting.</p><p><img src="'+I+'" alt="Jump to file from review tab" title="Jump to file from review tab"></p><p>Conversely, in-editor comments are indicated by the comment icon in the gutter. Clicking the icon, either from within the editor or the diff view, will take you back to the Reviews Tab.</p><p><img src="'+x+'" alt="Open review tab from diff" title="Open review tab from diff"></p><h3 id="respond-to-a-pull-request-review-comment" tabindex="-1"><a class="header-anchor" href="#respond-to-a-pull-request-review-comment" aria-hidden="true">#</a> Respond to a Pull Request review comment</h3><p>To respond to a Pull Request review comment, type your message and click <strong>Comment</strong>; a single line comment will be created in the same thread as the comment you responded to. After addressing a Pull Request review comment, click <strong>Resolve conversation</strong> to mark the whole thread as &quot;resolved&quot;. The progress bar in the &quot;Comments&quot; section will update accordingly.</p><p><img src="'+G+'" alt="Respond to a Pull Request review comment" title="Respond to a Pull Request review comment"></p>',28);function U(B,D){const a=S("ExternalLinkIcon");return H(),O("div",null,[V,t("p",null,[e("Learn more about "),t("a",F,[e("merge vs. rebase"),A(a)]),e(".")]),L])}const E=T(N,[["render",U],["__file","github-package.html.vue"]]);export{E as default};
