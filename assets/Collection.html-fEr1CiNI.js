import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as e,o as t}from"./app-DHpiXQOM.js";const p={};function l(o,a){return t(),s("div",null,a[0]||(a[0]=[e(`<h2 id="_1-配置" tabindex="-1"><a class="header-anchor" href="#_1-配置"><span>1. 配置</span></a></h2><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment">#环境变量</span>
<span class="token key attr-name">springprofiles.active</span> <span class="token punctuation">=</span> <span class="token value attr-value">dev</span>


<span class="token comment">#mysql</span>

<span class="token comment">#驱动类名称</span>
<span class="token key attr-name">spring.datasource.driver-class-name</span><span class="token punctuation">=</span><span class="token value attr-value">com.mysql.cj.jdbc.Driver</span>
<span class="token comment">#数据库连接的url</span>
<span class="token key attr-name">spring.datasource.url</span><span class="token punctuation">=</span><span class="token value attr-value">jdbc:mysql://localhost:3306/mybatis</span>
<span class="token comment">#连接数据库的用户名</span>
<span class="token key attr-name">spring.datasource.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token comment">#连接数据库的密码</span>
<span class="token key attr-name">spring.datasource.password</span><span class="token punctuation">=</span><span class="token value attr-value">1234</span>


<span class="token comment">#mybatis</span>

<span class="token comment">#指定mybatis输出日志的位置, 输出控制台</span>
<span class="token key attr-name">mybatis.configuration.log-impl</span><span class="token punctuation">=</span><span class="token value attr-value">org.apache.ibatis.logging.stdout.StdOutImpl</span>
<span class="token comment"># 开启 mybatis 的驼峰命名</span>
<span class="token key attr-name">mybatis.configuration.map-underscore-to-camel-case</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment">#mybatis-plus</span>



<span class="token comment">#配置单个文件最大上传大小</span>
<span class="token key attr-name">spring.servlet.multipart.max-file-size</span><span class="token punctuation">=</span><span class="token value attr-value">10MB</span>
<span class="token comment">#配置单个请求最大上传大小(一次请求可以上传多个文件)</span>
<span class="token key attr-name">spring.servlet.multipart.max-request-size</span><span class="token punctuation">=</span><span class="token value attr-value">100MB</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-lombok" tabindex="-1"><a class="header-anchor" href="#_2-lombok"><span>2. <strong>lombok</strong></span></a></h2><p>Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须有但显得很臃肿的Java代码。</p><p>通过注解的形式自动生成构造器、getter/setter、equals、hashcode、toString等方法，并可以自动化生成日志变量，简化java开发、提高效率。</p><figure><img src="https://img.picgo.net/2023/11/17/image-202311172347023778abf09bb52abba08.png" alt="image-20231117234702377" tabindex="0" loading="lazy"><figcaption>image-20231117234702377</figcaption></figure><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span><strong>使用</strong></span></a></h3><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token comment">&lt;!-- 在springboot的父工程中，已经集成了lombok并指定了版本号，故当前引入依赖
时不需要指定version --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.projectlombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>lombok<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">Data</span></span><span class="token punctuation">;</span>
<span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Short</span> age<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Short</span> gender<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> phone<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-mybatisx" tabindex="-1"><a class="header-anchor" href="#_2-mybatisx"><span>2. MybatisX</span></a></h2><p>MybatisX是一款基于IDEA的快速开发Mybatis的插件，为效率而生。</p><p>MybatisX的安装：</p><figure><img src="https://img.picgo.net/2023/11/18/image-2023111800133042623d964eef949c590.png" alt="image-20231118001330426" tabindex="0" loading="lazy"><figcaption>image-20231118001330426</figcaption></figure>`,13)]))}const r=n(p,[["render",l],["__file","Collection.html.vue"]]),m=JSON.parse('{"path":"/rear-end/JavaWeb/Collection.html","title":"😤 Javaweb 收集","lang":"zh-CN","frontmatter":{"title":"😤 Javaweb 收集","sticky":98,"tag":["SpringBoot","JavaWeb"],"recommend":0,"description":"1. 配置 2. lombok Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须有但显得很臃肿的Java代码。 通过注解的形式自动生成构造器、getter/setter、equals、hashcode、toString等方法，并可以自动化生成日志变量，简化java开发、提高效率。 image-2023111723470237...","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/rear-end/JavaWeb/Collection.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"😤 Javaweb 收集"}],["meta",{"property":"og:description","content":"1. 配置 2. lombok Lombok是一个实用的Java类库，可以通过简单的注解来简化和消除一些必须有但显得很臃肿的Java代码。 通过注解的形式自动生成构造器、getter/setter、equals、hashcode、toString等方法，并可以自动化生成日志变量，简化java开发、提高效率。 image-2023111723470237..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.picgo.net/2023/11/17/image-202311172347023778abf09bb52abba08.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T17:55:50.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"SpringBoot"}],["meta",{"property":"article:tag","content":"JavaWeb"}],["meta",{"property":"article:modified_time","content":"2024-02-05T17:55:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"😤 Javaweb 收集\\",\\"image\\":[\\"https://img.picgo.net/2023/11/17/image-202311172347023778abf09bb52abba08.png\\",\\"https://img.picgo.net/2023/11/18/image-2023111800133042623d964eef949c590.png\\"],\\"dateModified\\":\\"2024-02-05T17:55:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"1. 配置","slug":"_1-配置","link":"#_1-配置","children":[]},{"level":2,"title":"2. lombok","slug":"_2-lombok","link":"#_2-lombok","children":[{"level":3,"title":"使用","slug":"使用","link":"#使用","children":[]}]},{"level":2,"title":"2. MybatisX","slug":"_2-mybatisx","link":"#_2-mybatisx","children":[]}],"git":{"createdTime":1700316244000,"updatedTime":1707155750000,"contributors":[{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":1.1,"words":331},"filePathRelative":"rear-end/JavaWeb/Collection.md","localizedDate":"2023年11月18日","excerpt":"<h2>1. 配置</h2>\\n<div class=\\"language-properties\\" data-ext=\\"properties\\" data-title=\\"properties\\"><pre class=\\"language-properties\\"><code><span class=\\"token comment\\">#环境变量</span>\\n<span class=\\"token key attr-name\\">springprofiles.active</span> <span class=\\"token punctuation\\">=</span> <span class=\\"token value attr-value\\">dev</span>\\n\\n\\n<span class=\\"token comment\\">#mysql</span>\\n\\n<span class=\\"token comment\\">#驱动类名称</span>\\n<span class=\\"token key attr-name\\">spring.datasource.driver-class-name</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">com.mysql.cj.jdbc.Driver</span>\\n<span class=\\"token comment\\">#数据库连接的url</span>\\n<span class=\\"token key attr-name\\">spring.datasource.url</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">jdbc:mysql://localhost:3306/mybatis</span>\\n<span class=\\"token comment\\">#连接数据库的用户名</span>\\n<span class=\\"token key attr-name\\">spring.datasource.username</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">root</span>\\n<span class=\\"token comment\\">#连接数据库的密码</span>\\n<span class=\\"token key attr-name\\">spring.datasource.password</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">1234</span>\\n\\n\\n<span class=\\"token comment\\">#mybatis</span>\\n\\n<span class=\\"token comment\\">#指定mybatis输出日志的位置, 输出控制台</span>\\n<span class=\\"token key attr-name\\">mybatis.configuration.log-impl</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">org.apache.ibatis.logging.stdout.StdOutImpl</span>\\n<span class=\\"token comment\\"># 开启 mybatis 的驼峰命名</span>\\n<span class=\\"token key attr-name\\">mybatis.configuration.map-underscore-to-camel-case</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">true</span>\\n\\n<span class=\\"token comment\\">#mybatis-plus</span>\\n\\n\\n\\n<span class=\\"token comment\\">#配置单个文件最大上传大小</span>\\n<span class=\\"token key attr-name\\">spring.servlet.multipart.max-file-size</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">10MB</span>\\n<span class=\\"token comment\\">#配置单个请求最大上传大小(一次请求可以上传多个文件)</span>\\n<span class=\\"token key attr-name\\">spring.servlet.multipart.max-request-size</span><span class=\\"token punctuation\\">=</span><span class=\\"token value attr-value\\">100MB</span>\\n</code></pre></div>","autoDesc":true}');export{r as comp,m as data};
