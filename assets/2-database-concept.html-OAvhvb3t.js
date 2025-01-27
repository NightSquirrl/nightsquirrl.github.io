import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as n,o as s}from"./app-DHpiXQOM.js";const r={};function l(d,t){return s(),a("div",null,t[0]||(t[0]=[n(`<table><thead><tr><th>名称</th><th>全程</th><th>简称</th></tr></thead><tbody><tr><td>数据库</td><td>存储数据的仓库，数据是有组织的进行存储</td><td>DataBase（DB）</td></tr><tr><td>数据库管理系统</td><td>操纵和管理数据库的大型软件</td><td>DataBase Management System (DBMS)</td></tr><tr><td>SQL</td><td>操作关系型数据库的编程语言，定义了一套操作</td><td>Structured Query<br>Language (SQL)</td></tr></tbody></table><h2 id="_1-命令行连接数据库" tabindex="-1"><a class="header-anchor" href="#_1-命令行连接数据库"><span>1. 命令行连接数据库</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>mysql <span class="token punctuation">[</span>-h <span class="token number">127.0</span>.0.1<span class="token punctuation">]</span> <span class="token punctuation">[</span>-P <span class="token number">3306</span><span class="token punctuation">]</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-p</span>

   参数：
       <span class="token parameter variable">-h</span> <span class="token builtin class-name">:</span> MySQL服务所在的主机IP
       <span class="token parameter variable">-P</span> <span class="token builtin class-name">:</span> MySQL服务端口号，    默认3306
       <span class="token parameter variable">-u</span> <span class="token builtin class-name">:</span> MySQL数据库用户名
       <span class="token parameter variable">-p</span> ：    MySQL数据库用户名对应的密码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-数据模型" tabindex="-1"><a class="header-anchor" href="#_2-数据模型"><span>2. 数据模型</span></a></h2><h3 id="_2-1-关系型数据库-rdbms" tabindex="-1"><a class="header-anchor" href="#_2-1-关系型数据库-rdbms"><span>2.1 关系型数据库（RDBMS）</span></a></h3><h4 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念：</span></a></h4><p>建立在关系模型基础上，由多张相互连接的二维表组成的数据库。 而所谓二维表，指的是由行和列组成的表，如下图（就类似于Excel表格数据，有表头、有列、有行， 还可以通过一列关联另外一个表格中的某一列数据）。我们之前提到的MySQL、Oracle、DB2、 SQLServer这些都是属于关系型数据库，里面都是基于二维表存储数据的。简单说，基于二维表存储 数据的数据库就成为关系型数据库，不是基于二维表存储数据的数据库，就是非关系型数据库。<img src="https://img.picgo.net/2023/11/16/Image-From-MySQL-a7948ef058c67d3f.png" alt="Image From MySQL-基础篇" loading="lazy"></p><h4 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点：</span></a></h4><p>A. 使用表存储数据，格式统一，便于维护。</p><p>B. 使用SQL语言操作，标准统一，使用方便。</p><h4 id="数据模型" tabindex="-1"><a class="header-anchor" href="#数据模型"><span>数据模型</span></a></h4><p>MySQL是关系型数据库，是基于二维表进行数据存储的，具体的结构图下:</p><p>![Image From MySQL-基础篇](/Users/zeroeldath/Pictures/Image From MySQL-基础篇.png)</p><p>我们可以通过MySQL客户端连接数据库管理系统DBMS，然后通过DBMS操作数据库。可以使用SQL语句，通过数据库管理系统操作数据库，以及操作数据库中的表结构及数据。 一个数据库服务器中可以创建多个数据库，一个数据库中也可以包含多张表，而一张表中又可以包 含多行记录。</p><h2 id="_3-sql" tabindex="-1"><a class="header-anchor" href="#_3-sql"><span>3. SQL</span></a></h2><p>全称 Structured Query Language，结构化查询语言。操作关系型数据库的编程语言，定义了 一套操作关系型数据库统一 标准 。</p><h3 id="_3-1-sql通用语法" tabindex="-1"><a class="header-anchor" href="#_3-1-sql通用语法"><span>3.1 SQL通用语法</span></a></h3><p>在学习具体的SQL语句之前，先来了解一下SQL语言的同于语法。</p><ul><li><p>SQL语句可以单行或多行书写，以分号结尾。</p></li><li><p>SQL语句可以使用空格/缩进来增强语句的可读性。</p></li><li><p>MySQL数据库的SQL语句不区分大小写，关键字建议使用大写。</p></li><li><p>注释：</p></li></ul><p>​ 单行注释：-- 注释内容 或 # 注释内容</p><p>​ 多行注释：/* 注释内容 */</p><h3 id="_3-2-sql分类" tabindex="-1"><a class="header-anchor" href="#_3-2-sql分类"><span>3.2 SQL分类</span></a></h3><p>SQL语句，根据其功能，主要分为四类：DDL、DML、DQL、DCL。</p><table><thead><tr><th>分类</th><th>全程</th><th>说明</th></tr></thead><tbody><tr><td>DDL</td><td>Data Definition <br>Language</td><td>数据定义语言，用来定义数据库对象(数据库，表， <br>字段)</td></tr><tr><td>DML</td><td>Data Manipulation <br>Language</td><td>数据操作语言，用来对数据库表中的数据进行增删改</td></tr><tr><td>DQL</td><td>Data Query Language</td><td>数据查询语言，用来查询数据库中表的记录</td></tr><tr><td>DCL</td><td>Data Control Language</td><td>数据控制语言，用来创建数据库用户、控制数据库的 <br>访问权限</td></tr></tbody></table>`,24)]))}const o=e(r,[["render",l],["__file","2-database-concept.html.vue"]]),c=JSON.parse('{"path":"/server/mysql/2-database-concept.html","title":"🧐 2. 数据库的概念","lang":"zh-CN","frontmatter":{"title":"🧐 2. 数据库的概念","tag":["MySql"],"recommend":2,"description":"1. 命令行连接数据库 2. 数据模型 2.1 关系型数据库（RDBMS） 概念： 建立在关系模型基础上，由多张相互连接的二维表组成的数据库。 而所谓二维表，指的是由行和列组成的表，如下图（就类似于Excel表格数据，有表头、有列、有行， 还可以通过一列关联另外一个表格中的某一列数据）。我们之前提到的MySQL、Oracle、DB2、 SQLServe...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/server/mysql/2-database-concept.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🧐 2. 数据库的概念"}],["meta",{"property":"og:description","content":"1. 命令行连接数据库 2. 数据模型 2.1 关系型数据库（RDBMS） 概念： 建立在关系模型基础上，由多张相互连接的二维表组成的数据库。 而所谓二维表，指的是由行和列组成的表，如下图（就类似于Excel表格数据，有表头、有列、有行， 还可以通过一列关联另外一个表格中的某一列数据）。我们之前提到的MySQL、Oracle、DB2、 SQLServe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.picgo.net/2023/11/16/Image-From-MySQL-a7948ef058c67d3f.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T17:55:50.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"MySql"}],["meta",{"property":"article:modified_time","content":"2024-02-05T17:55:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🧐 2. 数据库的概念\\",\\"image\\":[\\"https://img.picgo.net/2023/11/16/Image-From-MySQL-a7948ef058c67d3f.png\\",\\"https://soft-vault.com/Users/zeroeldath/Pictures/Image From MySQL-基础篇.png\\"],\\"dateModified\\":\\"2024-02-05T17:55:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"1. 命令行连接数据库","slug":"_1-命令行连接数据库","link":"#_1-命令行连接数据库","children":[]},{"level":2,"title":"2. 数据模型","slug":"_2-数据模型","link":"#_2-数据模型","children":[{"level":3,"title":"2.1 关系型数据库（RDBMS）","slug":"_2-1-关系型数据库-rdbms","link":"#_2-1-关系型数据库-rdbms","children":[]}]},{"level":2,"title":"3. SQL","slug":"_3-sql","link":"#_3-sql","children":[{"level":3,"title":"3.1 SQL通用语法","slug":"_3-1-sql通用语法","link":"#_3-1-sql通用语法","children":[]},{"level":3,"title":"3.2 SQL分类","slug":"_3-2-sql分类","link":"#_3-2-sql分类","children":[]}]}],"git":{"createdTime":1700154209000,"updatedTime":1707155750000,"contributors":[{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":2.79,"words":836},"filePathRelative":"server/mysql/2-database-concept.md","localizedDate":"2023年11月16日","excerpt":"<table>\\n<thead>\\n<tr>\\n<th>名称</th>\\n<th>全程</th>\\n<th>简称</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>数据库</td>\\n<td>存储数据的仓库，数据是有组织的进行存储</td>\\n<td>DataBase（DB）</td>\\n</tr>\\n<tr>\\n<td>数据库管理系统</td>\\n<td>操纵和管理数据库的大型软件</td>\\n<td>DataBase Management System (DBMS)</td>\\n</tr>\\n<tr>\\n<td>SQL</td>\\n<td>操作关系型数据库的编程语言，定义了一套操作</td>\\n<td>Structured Query<br>Language (SQL)</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{o as comp,c as data};
