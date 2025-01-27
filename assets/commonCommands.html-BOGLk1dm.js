import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as n,o as t}from"./app-DHpiXQOM.js";const i={};function l(o,a){return t(),e("div",null,a[0]||(a[0]=[n(`<h2 id="分支相关" tabindex="-1"><a class="header-anchor" href="#分支相关"><span>分支相关</span></a></h2><blockquote><p>查看本地和远程所有分支</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> br <span class="token parameter variable">-a</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>查看本地所有分支</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> branch 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>切换本地指定分支</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>新建分支</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> checkout <span class="token parameter variable">-b</span> new-branch
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>删除本地分支</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> branch <span class="token parameter variable">-d</span> branch-name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="提交代码" tabindex="-1"><a class="header-anchor" href="#提交代码"><span>提交代码</span></a></h2><blockquote><p>将本地 a 的代码提交到远程 b 分支</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> push origin a:b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="代码回退" tabindex="-1"><a class="header-anchor" href="#代码回退"><span>代码回退</span></a></h2><blockquote><p>回退到上一个提交</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment">#保留工作目录中的更改</span>
<span class="token function">git</span> reset HEAD^
<span class="token comment">#丢弃所有未提交的更改</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>回退到指定的提交</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> reset <span class="token operator">&lt;</span>commit-hash<span class="token operator">&gt;</span>

<span class="token comment"># &lt;commit-hash&gt; 替换为你想要回退到的提交的哈希值</span>
<span class="token function">git</span> reset <span class="token parameter variable">--hard</span> <span class="token operator">&lt;</span>commit-hash<span class="token operator">&gt;</span>
<span class="token comment"># 获取 hash</span>
<span class="token function">git</span> log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码合并" tabindex="-1"><a class="header-anchor" href="#代码合并"><span>代码合并</span></a></h2><blockquote><p>分支合并</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># git checkout 命令切换到目标分支</span>
<span class="token function">git</span> merge <span class="token operator">&lt;</span>branch-name<span class="token operator">&gt;</span> 命令，将指定分支的更改合并到当前分支。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>commit id 合并</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 查看提交日志：使用 命令查看提交的日志，找到想要合并的那个 commit 的 ID（简略 ID，即前8位数）。</span>
<span class="token function">git</span> log 
<span class="token comment"># 切换分支：使用&lt;&gt; 命令切换到你想要合并到的目标分支。</span>
<span class="token function">git</span> checkout 
<span class="token comment"># 应用 commit：使用 git cherry-pick 命令加上之前复制的 commit ID，将该 commit 应用到当前分支。</span>
<span class="token function">git</span> cherry-pick
推送更改：如果需要将更改推送到远程仓库，可以使用 <span class="token function">git</span> push 命令。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h2><blockquote><p>查看本地提交log</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> reflog master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>添加远程仓库地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> origin git@e.coding.net:xxx/xxx.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>查看远程的仓库地址</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>git stash</strong></p></blockquote><p>临时保存工作目录中已跟踪文件和暂存区的修改，不受分支限制。后续可切换回当前分支继续使用 - git stash save &quot;本次暂存tag&quot; 储藏工作目录中已跟踪文件和暂存区的修改 - git stash list 查看临时保存记录 - git stash pop 恢复最近一次的临时保存</p><ol><li><strong>git stash</strong>: 将修改保存到一个新的stash中，并清空工作目录和暂存区。</li><li><strong>git stash save &quot;message&quot;</strong>: 创建一个新的stash，并添加描述信息，便于之后查找对应的stash。</li><li><strong>git stash list</strong>: 列出所有已经保存的stash，可以查看每个stash的描述信息和ID。</li><li><strong>git stash apply stash@{id}</strong>: 应用特定ID的stash到工作目录，但不从列表中移除它。</li><li><strong>git stash pop</strong>: 应用最近创建的stash到工作目录，并从列表中移除它。</li><li><strong>git stash show stash@{id}</strong>: 显示特定ID的stash做出的更改，方便查看保存了哪些改动。</li><li><strong>git stash drop stash@{id}</strong>: 删除特定ID的stash，从列表中移除。</li><li><strong>git stash branch</strong> : 基于最新的stash创建一个新的分支，并切换到该分支开始工作。</li><li><strong>git stash clear</strong>: 删除所有的stash，清空列表。</li></ol>`,34)]))}const d=s(i,[["render",l],["__file","commonCommands.html.vue"]]),p=JSON.parse('{"path":"/server/git/commonCommands.html","title":"🥹 git 常用命令","lang":"zh-CN","frontmatter":{"title":"🥹 git 常用命令","tag":["git"],"star":true,"description":"分支相关 查看本地和远程所有分支 查看本地所有分支 切换本地指定分支 新建分支 删除本地分支 提交代码 将本地 a 的代码提交到远程 b 分支 代码回退 回退到上一个提交 回退到指定的提交 代码合并 分支合并 commit id 合并 其他 查看本地提交log 添加远程仓库地址 查看远程的仓库地址 git stash 临时保存工作目录中已跟踪文件和暂存...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/server/git/commonCommands.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🥹 git 常用命令"}],["meta",{"property":"og:description","content":"分支相关 查看本地和远程所有分支 查看本地所有分支 切换本地指定分支 新建分支 删除本地分支 提交代码 将本地 a 的代码提交到远程 b 分支 代码回退 回退到上一个提交 回退到指定的提交 代码合并 分支合并 commit id 合并 其他 查看本地提交log 添加远程仓库地址 查看远程的仓库地址 git stash 临时保存工作目录中已跟踪文件和暂存..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-11T16:41:41.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"git"}],["meta",{"property":"article:modified_time","content":"2024-05-11T16:41:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🥹 git 常用命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-11T16:41:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"分支相关","slug":"分支相关","link":"#分支相关","children":[]},{"level":2,"title":"提交代码","slug":"提交代码","link":"#提交代码","children":[]},{"level":2,"title":"代码回退","slug":"代码回退","link":"#代码回退","children":[]},{"level":2,"title":"代码合并","slug":"代码合并","link":"#代码合并","children":[]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[]}],"git":{"createdTime":1709391746000,"updatedTime":1715445701000,"contributors":[{"name":"nightsoul","email":"w1083670160@163.com","commits":1}]},"readingTime":{"minutes":2.36,"words":709},"filePathRelative":"server/git/commonCommands.md","localizedDate":"2024年3月2日","excerpt":"<h2>分支相关</h2>\\n<blockquote>\\n<p>查看本地和远程所有分支</p>\\n</blockquote>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">git</span> br <span class=\\"token parameter variable\\">-a</span> \\n</code></pre></div><blockquote>\\n<p>查看本地所有分支</p>\\n</blockquote>","autoDesc":true}');export{d as comp,p as data};
