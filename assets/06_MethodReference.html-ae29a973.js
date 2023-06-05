import{_ as n,X as s,Y as a,Z as t}from"./framework-7c2c1cd4.js";const p={},o=t(`<h2 id="一、概述" tabindex="-1"><a class="header-anchor" href="#一、概述" aria-hidden="true">#</a> 一、概述</h2><p>在使用 lambda 时，如果方法体重只有一个方法的调用的话（包括构造方法），可以使用方法引用进一步简化代码。</p><h2 id="二、基本格式" tabindex="-1"><a class="header-anchor" href="#二、基本格式" aria-hidden="true">#</a> 二、基本格式</h2><p>类名或对象名::方法名</p><h2 id="三、语法详解" tabindex="-1"><a class="header-anchor" href="#三、语法详解" aria-hidden="true">#</a> 三、语法详解</h2><h3 id="_3-1、引用类的静态方法" tabindex="-1"><a class="header-anchor" href="#_3-1、引用类的静态方法" aria-hidden="true">#</a> 3.1、引用类的静态方法</h3><p><strong>格式</strong></p><p><code>类名::方法名</code></p><p><strong>使用前提</strong></p><p>方法体中只有一行代码，这行代码调用了某个类的静态方法，并且把要重写的抽象方法中所有的参数按照顺序传入这个传入这个静态方法中。</p><p><strong>举例</strong></p><p>优化前</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>author <span class="token operator">-&gt;</span> author<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>age <span class="token operator">-&gt;</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化后</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>author <span class="token operator">-&gt;</span> author<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token operator">::</span><span class="token function">valueOf</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1、引用对象的实例方法" tabindex="-1"><a class="header-anchor" href="#_3-1、引用对象的实例方法" aria-hidden="true">#</a> 3.1、引用对象的实例方法</h3><p><strong>格式</strong></p><p><code>类名::方法名</code></p><p><strong>使用前提</strong></p><p>方法体重一行方法，这行代码是调用某个对象的成员方法，并且把要重写的抽象方法中所有的参数按照顺序传入这个成员方法中。</p><p><strong>举例</strong></p><p>优化前</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Author</span><span class="token punctuation">&gt;</span></span> authors <span class="token operator">=</span> <span class="token function">getAuthors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">StringBuilder</span> sb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>author <span class="token operator">-&gt;</span> author<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化后</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>author <span class="token operator">-&gt;</span> author<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>sb<span class="token operator">::</span><span class="token function">append</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3、引用类的实例方法" tabindex="-1"><a class="header-anchor" href="#_3-3、引用类的实例方法" aria-hidden="true">#</a> 3.3、引用类的实例方法</h3><p><strong>格式</strong></p><p><code>类名::方法名</code></p><p><strong>使用前提</strong></p><p>方法体重只有一行代码，并且这行代码调用了第一个参数的成员方法，并且把重写的抽象方法中的剩余参数按顺序传入这个成员方法中。</p><p><strong>举例</strong></p><p>优化前</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MethodReference</span> <span class="token punctuation">{</span>
    <span class="token keyword">interface</span> <span class="token class-name">UseString</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Author</span><span class="token punctuation">&gt;</span></span> <span class="token function">getAuthors</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 同上 省略</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">subAuthorName</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token class-name">UseString</span> useString<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> length <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> useString<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> start<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Author</span><span class="token punctuation">&gt;</span></span> authors <span class="token operator">=</span> <span class="token function">getAuthors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">subAuthorName</span><span class="token punctuation">(</span><span class="token string">&quot;太一&quot;</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">UseString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token class-name">String</span> str<span class="token punctuation">,</span> <span class="token keyword">int</span> start<span class="token punctuation">,</span> <span class="token keyword">int</span> length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span> str<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> length<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化后</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Author</span><span class="token punctuation">&gt;</span></span> authors <span class="token operator">=</span> <span class="token function">getAuthors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">subAuthorName</span><span class="token punctuation">(</span><span class="token string">&quot;太一&quot;</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token operator">::</span><span class="token function">substring</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-4、构造器引用" tabindex="-1"><a class="header-anchor" href="#_3-4、构造器引用" aria-hidden="true">#</a> 3.4、构造器引用</h3><p><strong>格式</strong></p><p><code>类名::new</code></p><p><strong>使用前提</strong></p><p>方法体中只有一行代码，这行方法是调用了某个类的构造方法，并且把要冲且的方法中的所有参数按照顺序传入这个构造方法中。</p><p><strong>举例</strong></p><p>优化前</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>author <span class="token operator">-&gt;</span> author<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>name <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">StringBuilder</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>sb <span class="token operator">-&gt;</span> sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;太一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>str <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优化后</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>author <span class="token operator">-&gt;</span> author<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>sb <span class="token operator">-&gt;</span> sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;太一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>str <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再优化</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">Author</span><span class="token operator">::</span><span class="token function">getName</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token class-name">StringBuilder</span><span class="token operator">::</span><span class="token keyword">new</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>sb <span class="token operator">-&gt;</span> sb<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&quot;太一&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、高级用法" tabindex="-1"><a class="header-anchor" href="#四、高级用法" aria-hidden="true">#</a> 四、高级用法</h2><p>JDK 的自定装箱和自动拆箱会有时间损耗，为了针对这部分时间损耗进行优化，Stream 提供了专门针对基本数据类型的方法。</p><p>mapToInt、mapToLong、mapToDouble、flatMapToInt、flatMapToLong、flatMapToDouble</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">mapToInt</span><span class="token punctuation">(</span>author <span class="token operator">-&gt;</span> author<span class="token punctuation">.</span><span class="token function">getAge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),e=[o];function c(u,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","06_MethodReference.html.vue"]]);export{k as default};
