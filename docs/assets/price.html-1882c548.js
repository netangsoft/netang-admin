import{_ as t,M as i,p as o,q as c,R as n,t as s,N as a,a1 as l}from"./framework-204010b2.js";const r={},p=n("h1",{id:"price-换算金额",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#price-换算金额","aria-hidden":"true"},"#"),s(" price 换算金额")],-1),d={class:"custom-container tip"},u=n("p",{class:"custom-container-title"},"TIP",-1),m=n("code",null,"@netang/quasar/utils/price.js",-1),v={href:"https://github.com/netangsoft/netang-quasar/blob/main/utils/price.js",target:"_blank",rel:"noopener noreferrer"},b={href:"https://gitee.com/jinmarcus/netang-quasar/blob/main/utils/price.js",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"@netang/utils/decimal.js",-1),h={href:"https://github.com/netangsoft/netang-utils/blob/main/decimal.js",target:"_blank",rel:"noopener noreferrer"},_={href:"https://gitee.com/jinmarcus/netang-utils/blob/main/decimal.js",target:"_blank",rel:"noopener noreferrer"},g=l(`<ul><li>换算金额设置</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> settings <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@netang/quasar/utils/config&#39;</span>

<span class="token doc-comment comment">/**
 * 配置设置
 */</span>
<span class="token function">settings</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token comment">// 用户配置</span>
    <span class="token literal-property property">userConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 是否设置金额由热门民币的[分]转为[元]</span>
        <span class="token comment">// true: 默认金额单位为：分</span>
        <span class="token comment">// false: 默认金额单位为：元</span>
        <span class="token literal-property property">priceCentToYuan</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>示例</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">price</span><span class="token punctuation">(</span><span class="token number">123.45678</span><span class="token punctuation">)</span>
<span class="token comment">// 如果 priceCentToYuan 为 true 返回 123.45</span>
<span class="token comment">// 如果 priceCentToYuan 为 false 返回 1.23</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>类型</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">price</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>参数名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>金额值</td><td><code>Number</code></td><td>-</td></tr><tr><td>options</td><td>参数</td><td><code>Object</code></td><td>-</td></tr></tbody></table>`,7);function f(j,x){const e=i("ExternalLinkIcon");return o(),c("div",null,[p,n("div",d,[u,n("p",null,[m,s(),n("a",v,[s("Github"),a(e)]),s(),n("a",b,[s("Gitee"),a(e)])]),n("p",null,[s("继承 "),k,s(" 所有特性 "),n("a",h,[s("Github"),a(e)]),s(),n("a",_,[s("Gitee"),a(e)])])]),g])}const N=t(r,[["render",f],["__file","price.html.vue"]]);export{N as default};