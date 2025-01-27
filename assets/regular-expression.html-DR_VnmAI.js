import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as o,o as r}from"./app-DHpiXQOM.js";const c={};function a(n,t){return r(),e("div",null,t[0]||(t[0]=[o('<div align="center"><img width="200px" height="200px" src="https://www.z4a.net/images/2023/09/12/logo.png"><h1><a href="https://github.com/NightSquirrl/ant-unocss-ts-vite-react" target="_blank">正则表达式</a></h1></div><br><br><h1 id="正则表达式" tabindex="-1"><a class="header-anchor" href="#正则表达式"><span>正则表达式</span></a></h1><h2 id="基础正则表达式速查表" tabindex="-1"><a class="header-anchor" href="#基础正则表达式速查表"><span>基础正则表达式速查表</span></a></h2><h3 id="字符" tabindex="-1"><a class="header-anchor" href="#字符"><span>字符</span></a></h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>[abc]</code></td><td>字符集。匹配集合中所含的任一字符。</td></tr><tr><td><code>[^abc]</code></td><td>否定字符集。匹配任何不在集合中的字符。</td></tr><tr><td><code>[a-z]</code></td><td>字符范围。匹配指定范围内的任意字符。</td></tr><tr><td><code>.</code></td><td>匹配除换行符以外的任何单个字符。</td></tr><tr><td><code>\\\\</code></td><td>转义字符。</td></tr><tr><td><code>\\w</code></td><td>匹配任何字母数字，包括下划线（等价于<code>[A-Za-z0-9_]</code>）。</td></tr><tr><td><code>\\W</code></td><td>匹配任何非字母数字（等价于<code>[^A-Za-z0-9_]</code>）。</td></tr><tr><td><code>\\d</code></td><td>数字。匹配任何数字。</td></tr><tr><td><code>\\D</code></td><td>非数字。匹配任何非数字字符。</td></tr><tr><td><code>\\s</code></td><td>空白。匹配任何空白字符，包括空格、制表符等。</td></tr><tr><td><code>\\S</code></td><td>非空白。匹配任何非空白字符。</td></tr></tbody></table><h3 id="分组和引用" tabindex="-1"><a class="header-anchor" href="#分组和引用"><span>分组和引用</span></a></h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>(expression)</code></td><td>分组。匹配括号里的整个表达式。</td></tr><tr><td><code>(?:expression)</code></td><td>非捕获分组。匹配括号里的整个字符串但不获取匹配结果，拿不到分组引用。</td></tr><tr><td><code>\\num</code></td><td>对前面所匹配分组的引用。比如<code>(\\d)\\1</code>可以匹配两个相同的数字，<code>(Code)(Sheep)\\1\\2</code>则可以匹配<code>CodeSheepCodeSheep</code>。</td></tr></tbody></table><h3 id="锚点边界" tabindex="-1"><a class="header-anchor" href="#锚点边界"><span>锚点边界</span></a></h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>^</code></td><td>匹配字符串或行开头。</td></tr><tr><td><code>$</code></td><td>匹配字符串或行结尾。</td></tr><tr><td><code>\\b</code></td><td>匹配单词边界。比如<code>Sheep\\b</code>可以匹配<code>CodeSheep</code>末尾的<code>Sheep</code>，不能匹配<code>CodeSheepCode</code>中的<code>Sheep</code></td></tr><tr><td><code>\\B</code></td><td>匹配非单词边界。比如<code>Code\\B</code>可以匹配<code>HelloCodeSheep</code>中的<code>Code</code>，不能匹配<code>HelloCode</code>中的<code>Code</code>。</td></tr></tbody></table><h3 id="数量表达式" tabindex="-1"><a class="header-anchor" href="#数量表达式"><span>数量表达式</span></a></h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>?</code></td><td>匹配前面的表达式0个或1个。即表示可选项。</td></tr><tr><td><code>+</code></td><td>匹配前面的表达式至少1个。</td></tr><tr><td><code>*</code></td><td>匹配前面的表达式0个或多个。</td></tr><tr><td><code>|</code></td><td>或运算符。并集，可以匹配符号前后的表达式。</td></tr><tr><td><code>{m}</code></td><td>匹配前面的表达式m个。</td></tr><tr><td><code>{m,}</code></td><td>匹配前面的表达式最少m个。</td></tr><tr><td><code>{m,n}</code></td><td>匹配前面的表达式最少m个，最多n个。</td></tr></tbody></table><h3 id="预查断言" tabindex="-1"><a class="header-anchor" href="#预查断言"><span>预查断言</span></a></h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>(?=)</code></td><td>正向预查。比如<code>Code(?=Sheep)</code>能匹配<code>CodeSheep</code>中的<code>Code</code>，但不能匹配<code>CodePig</code>中的<code>Code</code>。</td></tr><tr><td><code>(?!)</code></td><td>正向否定预查。比如<code>Code(?!Sheep)</code>不能匹配<code>CodeSheep</code>中的<code>Code</code>，但能匹配<code>CodePig</code>中的<code>Code</code>。</td></tr><tr><td><code>(?&lt;=)</code></td><td>反向预查。比如<code>(?&lt;=Code)Sheep</code>能匹配<code>CodeSheep</code>中的<code>Sheep</code>，但不能匹配<code>ReadSheep</code>中的<code>Sheep</code>。</td></tr><tr><td><code>(?&lt;!)</code></td><td>反向否定预查。比如<code>(?&lt;!Code)Sheep</code>不能匹配<code>CodeSheep</code>中的<code>Sheep</code>，但能匹配<code>ReadSheep</code>中的<code>Sheep</code>。</td></tr></tbody></table><h3 id="特殊标志" tabindex="-1"><a class="header-anchor" href="#特殊标志"><span>特殊标志</span></a></h3><table><thead><tr><th><strong>表达式</strong></th><th><strong>描述</strong></th></tr></thead><tbody><tr><td><code>/.../i</code></td><td>忽略大小写。</td></tr><tr><td><code>/.../g</code></td><td>全局匹配。</td></tr><tr><td><code>/.../m</code></td><td>多行修饰符。用于多行匹配。</td></tr></tbody></table><h2 id="常用正则表达式示例" tabindex="-1"><a class="header-anchor" href="#常用正则表达式示例"><span>常用正则表达式示例</span></a></h2><ul><li><strong>数字校验</strong></li></ul><table><thead><tr><th><strong>描述</strong></th><th><strong>正则表达式</strong></th><th><strong>备注</strong></th></tr></thead><tbody><tr><td>数字</td><td><code>^[0-9]*$</code></td><td></td></tr><tr><td>n位数字</td><td><code>^\\d{n}$</code></td><td></td></tr><tr><td>至少n位数字</td><td><code>^\\d{n,}$</code></td><td></td></tr><tr><td>m~n位数字</td><td><code>^\\d{m,n}$</code></td><td></td></tr><tr><td>整数</td><td><code>^(-?[1-9]\\d*)$</code></td><td>非0开头，包括正整数和负整数</td></tr><tr><td>正整数</td><td><code>^[1-9]\\d*$</code></td><td></td></tr><tr><td>负整数</td><td><code>^-[1-9]\\d*$</code></td><td></td></tr><tr><td>非负整数</td><td><code>^(([1-9]\\d*)|0)$</code></td><td></td></tr><tr><td>非正整数</td><td><code>^((-[1-9]\\d*)|0)$</code></td><td></td></tr><tr><td>浮点数</td><td><code>^-?(?:[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0\\.0+|0)$</code></td><td>包括正浮点数和负浮点数</td></tr><tr><td>正浮点数</td><td><code>^(?:[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$</code></td><td></td></tr><tr><td>负浮点数</td><td><code>^-(?:[1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*)$</code></td><td></td></tr><tr><td>非正浮点数</td><td><code>^(?:-(?:[1-9]\\d*\\.\\d+|0\\.\\d*[1-9]\\d*)|0\\.0+|0)$</code></td><td>包含0</td></tr><tr><td>非负浮点数</td><td><code>^(?:[1-9]\\d*\\.\\d+|0\\.\\d+|0\\.0+|0)$</code></td><td>包含0</td></tr><tr><td>仅一位小数</td><td><code>^-?(?:0|[1-9][0-9]*)\\.[0-9]{1}$</code></td><td></td></tr><tr><td>最少一位小数</td><td><code>^-?(?:0|[1-9][0-9]*)\\.[0-9]{1,}$</code></td><td></td></tr><tr><td>最多两位小数</td><td><code>^-?(?:0|[1-9][0-9]*)\\.[0-9]{1,2}$</code></td><td></td></tr><tr><td>连续重复的数字</td><td><code>^(\\d)\\1+$</code></td><td>例如：<code>111</code>，<code>222</code></td></tr></tbody></table><hr><ul><li><strong>字符校验</strong></li></ul><table><thead><tr><th><strong>描述</strong></th><th><strong>正则表达式</strong></th><th><strong>备注</strong></th></tr></thead><tbody><tr><td>中文</td><td><code>^[\\u4E00-\\u9FA5]+$</code></td><td></td></tr><tr><td>全角字符</td><td><code>^[\\uFF00-\\uFFFF]+$</code></td><td></td></tr><tr><td>半角字符</td><td><code>^[\\u0000-\\u00FF]+$</code></td><td></td></tr><tr><td>英文字符串（大写）</td><td><code>^[A-Z]+$</code></td><td></td></tr><tr><td>英文字符串（小写）</td><td><code>^[a-z]+$</code></td><td></td></tr><tr><td>英文字符串（不区分大小写）</td><td><code>^[A-Za-z]+$</code></td><td></td></tr><tr><td>中文和数字</td><td><code>^(?:[\\u4E00-\\u9FA5]{0,}|\\d)+$</code></td><td></td></tr><tr><td>英文和数字</td><td><code>^[A-Za-z0-9]+$</code></td><td></td></tr><tr><td>数字、英文字母或者下划线组成的字符串</td><td><code>^\\w+$</code></td><td></td></tr><tr><td>中文、英文、数字包括下划线</td><td><code>^[\\u4E00-\\u9FA5\\w]+$</code></td><td></td></tr><tr><td>不含字母的字符串</td><td><code>^[^A-Za-z]*$</code></td><td></td></tr><tr><td>连续重复的字符串</td><td><code>^(.)\\1+$</code></td><td>例如：<code>aa</code>，<code>bb</code></td></tr><tr><td>长度为n的字符串</td><td><code>^.{n}$</code></td><td></td></tr><tr><td>ASCII</td><td><code>^[ -~]$</code></td><td></td></tr></tbody></table><hr><ul><li><strong>日期和时间校验</strong></li></ul><table><thead><tr><th><strong>描述</strong></th><th><strong>正则表达式</strong></th><th><strong>备注</strong></th></tr></thead><tbody><tr><td>日期</td><td><code>^\\d{1,4}-(?:1[0-2]|0?[1-9])-(?:0?[1-9]|[1-2]\\d|30|31)$</code></td><td>弱校验，例如：<code>2022-06-12</code></td></tr><tr><td>日期</td><td><code>^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$</code></td><td>严格校验，考虑平闰年</td></tr><tr><td>时间</td><td><code>^(?:1[0-2]|0?[1-9]):[0-5]\\d:[0-5]\\d$</code></td><td>12小时制，例如：<code>11:21:31</code></td></tr><tr><td>时间</td><td><code>^(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$</code></td><td>24小时制，例如：<code>23:21:31</code></td></tr><tr><td>日期+时间</td><td><code>^(\\d{1,4}-(?:1[0-2]|0?[1-9])-(?:0?[1-9]|[1-2]\\d|30|31)) ((?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d)$</code></td><td>例如：<code>2000-11-11 23:20:21</code></td></tr></tbody></table><hr><ul><li><strong>日常生活相关</strong></li></ul><table><thead><tr><th><strong>描述</strong></th><th><strong>正则表达式</strong></th><th><strong>备注</strong></th></tr></thead><tbody><tr><td>中文名</td><td><code>^[\\u4E00-\\u9FA5·]{2,16}$</code></td><td></td></tr><tr><td>英文名</td><td><code>^[a-zA-Z][a-zA-Z\\s]{0,20}[a-zA-Z]$</code></td><td></td></tr><tr><td>车牌号</td><td><code>^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]$</code></td><td>不含新能源</td></tr><tr><td>车牌号</td><td>`^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z](?😦?:[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳])</td><td>(?😦?:\\d{5}[A-HJK])</td></tr><tr><td>火车车次</td><td><code>^[GCDZTSPKXLY1-9]\\d{1,4}$</code></td><td>例如：<code>G1234</code></td></tr><tr><td>手机号</td><td><code>^(?:(?:\\+|00)86)?1[3-9]\\d{9}$</code></td><td>弱匹配</td></tr><tr><td>手机号</td><td><code>^(?:(?:\\+|00)86)?1(?:(?:3[\\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\\d])|(?:9[189]))\\d{8}$</code></td><td>严格匹配</td></tr><tr><td>固话号码</td><td><code>^(?:(?:\\d{3}-)?\\d{8}|^(?:\\d{4}-)?\\d{7,8})(?:-\\d+)?$</code></td><td></td></tr><tr><td>手机IMEI码</td><td><code>^\\d{15,17}$</code></td><td>一般是15位</td></tr><tr><td>邮编</td><td><code>^(?:0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\\d{4}$</code></td><td>例如：<code>211100</code></td></tr><tr><td>统一社会信用代码</td><td><code>^[0-9A-HJ-NPQRTUWXY]{2}\\d{6}[0-9A-HJ-NPQRTUWXY]{10}$</code></td><td></td></tr><tr><td>身份证号码(1代)</td><td><code>^[1-9]\\d{7}(?:0\\d|10|11|12)(?:0[1-9]|[1-2][\\d]|30|31)\\d{3}$</code></td><td>15位数字</td></tr><tr><td>身份证号码(2代)</td><td><code>^[1-9]\\d{5}(?:18|19|20)\\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\\d|30|31)\\d{3}[0-9Xx]$</code></td><td>18位数字</td></tr><tr><td>QQ号</td><td><code>^[1-9][0-9]{4,}$</code></td><td>一般是5到10位</td></tr><tr><td>微信号</td><td><code>^[a-zA-Z][-_a-zA-Z0-9]{5,19}$</code></td><td>一般6~20位，字母开头，可包含字母、数字、-、_，不含特殊字符</td></tr><tr><td>股票代码</td><td><code>^(s[hz]|S[HZ])(000[\\d]{3}|002[\\d]{3}|300[\\d]{3}|600[\\d]{3}|60[\\d]{4})$</code></td><td>A股，例如：<code>600519</code></td></tr><tr><td>银行卡卡号</td><td><code>^[1-9]{1}(?:\\d{15}|\\d{18})$</code></td><td>一般为19位</td></tr></tbody></table><hr><ul><li><strong>互联网相关</strong></li></ul><table><thead><tr><th><strong>描述</strong></th><th><strong>正则表达式</strong></th><th><strong>备注</strong></th></tr></thead><tbody><tr><td>域名</td><td><code>^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$</code></td><td>例如：<code>r2coding.com</code></td></tr><tr><td>网址</td><td><code>^(?:https?:\\/\\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$</code></td><td>例如：<code>https://www.r2coding.com/</code></td></tr><tr><td>带端口号的网址(或IP)</td><td><code>^(?:https?:\\/\\/)?[\\w-]+(?:\\.[\\w-]+)+:\\d{1,5}\\/?$</code></td><td>例如：<code>http://127.0.0.1:8888/</code></td></tr><tr><td>URL</td><td><code>^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()!@:%_\\+.~#?&amp;\\/\\/=]*)$</code></td><td>例如：<code>https://www.r2coding.com/#/README?id=1</code></td></tr><tr><td>邮箱email</td><td><code>^[A-Za-z0-9\\u4e00-\\u9fa5]+@[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$</code></td><td>支持中文，例如：<code>codesheep@cs.com</code></td></tr><tr><td>用户名</td><td><code>^[a-zA-Z0-9_-]{4,20}$</code></td><td>4到20位</td></tr><tr><td>弱密码</td><td><code>^[\\w]{6,16}$</code></td><td>6~16位，包含大小写字母和数字的组合</td></tr><tr><td>强密码</td><td><code>^.*(?=.{6,})(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@\\.#$%^&amp;*? ]).*$</code></td><td>至少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符</td></tr><tr><td>端口号</td><td><code>^(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$</code></td><td>例如：<code>65535</code></td></tr><tr><td>IPv4地址</td><td><code>^(?:(?:\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(?:\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])$</code></td><td>例如：<code>192.168.31.1</code></td></tr><tr><td>IPv4地址+端口</td><td><code>^(?:(?:\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])\\.){3}(?:\\d|[1-9]\\d|1\\d\\d|2[0-4]\\d|25[0-5])(?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$</code></td><td>例如：<code>192.168.31.1:8080</code></td></tr><tr><td>IPv6地址</td><td><code>^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$</code></td><td>例如：<code>CDCD:910A:2222:5498:8475:1111:3900:2020</code></td></tr><tr><td>IPv6地址+端口</td><td><code>^\\[(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\\](?::(?:[0-9]|[1-9][0-9]{1,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5]))?$</code></td><td>例如：<code>[CDCD:910A:2222:5498:8475:1111:3900:2020]:9800</code></td></tr><tr><td>子网掩码</td><td><code>^(?:254|252|248|240|224|192|128)\\.0\\.0\\.0|255\\.(?:254|252|248|240|224|192|128|0)\\.0\\.0|255\\.255\\.(?:254|252|248|240|224|192|128|0)\\.0|255\\.255\\.255\\.(?:255|254|252|248|240|224|192|128|0)$</code></td><td>例如：<code>255.255.255.0</code></td></tr><tr><td>MAC地址</td><td><code>^(?:(?:[a-f0-9A-F]{2}:){5}|(?:[a-f0-9A-F]{2}-){5})[a-f0-9A-F]{2}$</code></td><td></td></tr><tr><td>Version版本号</td><td><code>^\\d+(?:\\.\\d+){2}$</code></td><td>例如：<code>12.1.1</code></td></tr><tr><td>图片后缀</td><td><code>\\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)+</code></td><td>可按需增删扩展名集合</td></tr><tr><td>视频后缀</td><td><code>\\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)+</code></td><td>可按需增删扩展名集合</td></tr><tr><td>图片链接</td><td><code>(?:https?:\\/\\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.+\\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)</code></td><td>可按需增删扩展名集合</td></tr><tr><td>视频链接</td><td><code>(?:https?:\\/\\/)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(?:\\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+.+\\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)</code></td><td>可按需增删扩展名集合</td></tr><tr><td>迅雷链接</td><td><code>thunderx?:\\/\\/[a-zA-Z\\d]+=</code></td><td></td></tr><tr><td>ed2k链接</td><td><code>ed2k:\\/\\/|file|.+|\\/</code></td><td></td></tr><tr><td>磁力链接</td><td><code>magnet:\\?xt=urn:btih:[0-9a-fA-F]{40,}.*</code></td><td></td></tr></tbody></table><hr><ul><li><strong>其他</strong></li></ul><table><thead><tr><th><strong>描述</strong></th><th><strong>正则表达式</strong></th><th><strong>备注</strong></th></tr></thead><tbody><tr><td>MD5格式</td><td><code>^(?:[a-f\\d]{32}|[A-F\\d]{32})$</code></td><td>32位MD5，例如：<code>7552E7071B118CBFFEC8C930455B4297</code></td></tr><tr><td>BASE64格式</td><td><code>^\\s*data:(?:[a-z]+\\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&amp;&#39;,()*+;=\\-._~:@/?%\\s]*?)\\s*$</code></td><td>例如：<code>data:image/jpeg;base64,xxxx==</code></td></tr><tr><td>UUID</td><td><code>^[a-f\\d]{4}(?:[a-f\\d]{4}-){4}[a-f\\d]{12}$</code></td><td>例如：<code>94f9d45a-71b0-4b3c-b69d-20c4bc9c8fdd</code></td></tr><tr><td>16进制</td><td><code>^[A-Fa-f0-9]+$</code></td><td>例如：<code>FFFFFF</code></td></tr><tr><td>16进制颜色</td><td><code>^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$</code></td><td>例如：<code>#FFFFFF</code></td></tr><tr><td>SQL语句</td><td><code>^(?:select|drop|delete|create|update|insert).*$</code></td><td></td></tr><tr><td>Java包名</td><td><code>^(?:[a-zA-Z_]\\w*)+(?:[.][a-zA-Z_]\\w*)+$</code></td><td>例如：<code>com.r2coding.controller</code></td></tr><tr><td>文件扩展名</td><td><code>\\.(?:doc|pdf|txt)</code></td><td>可按需增删扩展名集合</td></tr><tr><td>Windows文件路径</td><td><code>^[a-zA-Z]:(?:\\\\[\\w\\u4E00-\\u9FA5\\s]+)+[.\\w\\u4E00-\\u9FA5\\s]+$</code></td><td>例如：<code>C:\\Users\\Administrator\\Desktop\\a.txt</code></td></tr><tr><td>Windows文件夹路径</td><td><code>^[a-zA-Z]:(?:\\\\[\\w\\u4E00-\\u9FA5\\s]+)+$</code></td><td>例如：<code>C:\\Users\\Administrator\\Desktop</code></td></tr><tr><td>Linux文件路径</td><td><code>^\\/(?:[^/]+\\/)*[^/]+$</code></td><td>例如：<code>/root/library/a.txt</code></td></tr><tr><td>Linux文件夹路径</td><td><code>^\\/(?:[^/]+\\/)*$</code></td><td>例如：<code>/root/library/</code></td></tr></tbody></table>',35)]))}const l=d(c,[["render",a],["__file","regular-expression.html.vue"]]),i=JSON.parse('{"path":"/web/package/regular-expression.html","title":"🍕 正则表达式使用手册","lang":"zh-CN","frontmatter":{"sticky":true,"title":"🍕 正则表达式使用手册","tag":["正则表达式","工具"],"top":100,"sidebar":true,"description":"正则表达式 正则表达式 基础正则表达式速查表 字符 分组和引用 锚点边界 数量表达式 预查断言 特殊标志 常用正则表达式示例 数字校验 字符校验 日期和时间校验 日常生活相关 互联网相关 其他","head":[["meta",{"property":"og:url","content":"https://soft-vault.com/web/package/regular-expression.html"}],["meta",{"property":"og:site_name","content":"Night.Soul"}],["meta",{"property":"og:title","content":"🍕 正则表达式使用手册"}],["meta",{"property":"og:description","content":"正则表达式 正则表达式 基础正则表达式速查表 字符 分组和引用 锚点边界 数量表达式 预查断言 特殊标志 常用正则表达式示例 数字校验 字符校验 日期和时间校验 日常生活相关 互联网相关 其他"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-05T17:55:50.000Z"}],["meta",{"property":"article:author","content":"Night.Soul"}],["meta",{"property":"article:tag","content":"正则表达式"}],["meta",{"property":"article:tag","content":"工具"}],["meta",{"property":"article:modified_time","content":"2024-02-05T17:55:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"🍕 正则表达式使用手册\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-05T17:55:50.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Night.Soul\\",\\"url\\":\\"https://github.com/NightSquirrl\\"}]}"]]},"headers":[{"level":2,"title":"基础正则表达式速查表","slug":"基础正则表达式速查表","link":"#基础正则表达式速查表","children":[{"level":3,"title":"字符","slug":"字符","link":"#字符","children":[]},{"level":3,"title":"分组和引用","slug":"分组和引用","link":"#分组和引用","children":[]},{"level":3,"title":"锚点边界","slug":"锚点边界","link":"#锚点边界","children":[]},{"level":3,"title":"数量表达式","slug":"数量表达式","link":"#数量表达式","children":[]},{"level":3,"title":"预查断言","slug":"预查断言","link":"#预查断言","children":[]},{"level":3,"title":"特殊标志","slug":"特殊标志","link":"#特殊标志","children":[]}]},{"level":2,"title":"常用正则表达式示例","slug":"常用正则表达式示例","link":"#常用正则表达式示例","children":[]}],"git":{"createdTime":1699094106000,"updatedTime":1707155750000,"contributors":[{"name":"zeroeldath","email":"zeroeldath@Mac-Pro.local","commits":1}]},"readingTime":{"minutes":10.4,"words":3121},"filePathRelative":"web/package/regular-expression.md","localizedDate":"2023年11月4日","excerpt":"<div align=\\"center\\">\\n    <img width=\\"200px\\" height=\\"200px\\" src=\\"https://www.z4a.net/images/2023/09/12/logo.png\\">\\n    <h1>\\n\\t\\t<a href=\\"https://github.com/NightSquirrl/ant-unocss-ts-vite-react\\" target=\\"_blank\\">正则表达式</a>\\n\\t</h1>\\n</div>\\n<br>\\n<br>\\n<h1>正则表达式</h1>\\n<h2>基础正则表达式速查表</h2>\\n<h3>字符</h3>\\n<table>\\n<thead>\\n<tr>\\n<th><strong>表达式</strong></th>\\n<th><strong>描述</strong></th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>[abc]</code></td>\\n<td>字符集。匹配集合中所含的任一字符。</td>\\n</tr>\\n<tr>\\n<td><code>[^abc]</code></td>\\n<td>否定字符集。匹配任何不在集合中的字符。</td>\\n</tr>\\n<tr>\\n<td><code>[a-z]</code></td>\\n<td>字符范围。匹配指定范围内的任意字符。</td>\\n</tr>\\n<tr>\\n<td><code>.</code></td>\\n<td>匹配除换行符以外的任何单个字符。</td>\\n</tr>\\n<tr>\\n<td><code>\\\\\\\\</code></td>\\n<td>转义字符。</td>\\n</tr>\\n<tr>\\n<td><code>\\\\w</code></td>\\n<td>匹配任何字母数字，包括下划线（等价于<code>[A-Za-z0-9_]</code>）。</td>\\n</tr>\\n<tr>\\n<td><code>\\\\W</code></td>\\n<td>匹配任何非字母数字（等价于<code>[^A-Za-z0-9_]</code>）。</td>\\n</tr>\\n<tr>\\n<td><code>\\\\d</code></td>\\n<td>数字。匹配任何数字。</td>\\n</tr>\\n<tr>\\n<td><code>\\\\D</code></td>\\n<td>非数字。匹配任何非数字字符。</td>\\n</tr>\\n<tr>\\n<td><code>\\\\s</code></td>\\n<td>空白。匹配任何空白字符，包括空格、制表符等。</td>\\n</tr>\\n<tr>\\n<td><code>\\\\S</code></td>\\n<td>非空白。匹配任何非空白字符。</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{l as comp,i as data};
