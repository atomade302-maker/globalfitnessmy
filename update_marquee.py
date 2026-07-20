import re

# 1. Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Insert font if not exists
if 'family=Anton' not in html:
    html = html.replace('<!-- FontAwesome for icons -->', '<link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">\n    <!-- FontAwesome for icons -->')

# Replace ticker HTML
old_ticker_pattern = r'<!-- Moving Text Banner Section -->.*?</section>'
new_ticker_html = """<!-- Moving Text Banner Section -->
    <section class="marquee">
        <div class="track">
            <div class="item">
                <span class="text">TRAIN WITH PURPOSE</span>
                <svg class="dumbbell" viewBox="0 0 64 24" fill="none">
                    <rect x="0" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                    <rect x="6" y="1" width="4" height="22" rx="1" fill="currentColor"/>
                    <rect x="14" y="7" width="18" height="10" rx="2" fill="currentColor"/>
                    <rect x="32" y="7" width="18" height="10" rx="2" fill="currentColor"/>
                    <rect x="54" y="1" width="4" height="22" rx="1" fill="currentColor"/>
                    <rect x="60" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                </svg>
            </div>
            <div class="item">
                <span class="text">TRAIN WITH PURPOSE</span>
                <svg class="dumbbell" viewBox="0 0 64 24" fill="none">
                    <rect x="0" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                    <rect x="6" y="1" width="4" height="22" rx="1" fill="currentColor"/>
                    <rect x="14" y="7" width="18" height="10" rx="2" fill="currentColor"/>
                    <rect x="32" y="7" width="18" height="10" rx="2" fill="currentColor"/>
                    <rect x="54" y="1" width="4" height="22" rx="1" fill="currentColor"/>
                    <rect x="60" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                </svg>
            </div>
            <div class="item">
                <span class="text">TRAIN WITH PURPOSE</span>
                <svg class="dumbbell" viewBox="0 0 64 24" fill="none">
                    <rect x="0" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                    <rect x="6" y="1" width="4" height="22" rx="1" fill="currentColor"/>
                    <rect x="14" y="7" width="18" height="10" rx="2" fill="currentColor"/>
                    <rect x="32" y="7" width="18" height="10" rx="2" fill="currentColor"/>
                    <rect x="54" y="1" width="4" height="22" rx="1" fill="currentColor"/>
                    <rect x="60" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                </svg>
            </div>
            <div class="item">
                <span class="text">TRAIN WITH PURPOSE</span>
                <svg class="dumbbell" viewBox="0 0 64 24" fill="none">
                    <rect x="0" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                    <rect x="6" y="1" width="4" height="22" rx="1" fill="currentColor"/>
                    <rect x="14" y="7" width="18" height="10" rx="2" fill="currentColor"/>
                    <rect x="32" y="7" width="18" height="10" rx="2" fill="currentColor"/>
                    <rect x="54" y="1" width="4" height="22" rx="1" fill="currentColor"/>
                    <rect x="60" y="4" width="4" height="16" rx="1" fill="currentColor"/>
                </svg>
            </div>
        </div>
    </section>"""
html = re.sub(old_ticker_pattern, new_ticker_html, html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# 2. Update style.css
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

old_css_pattern = r'/\* Horizontal Ticker/Marquee Section \*/.*?@keyframes ticker-loop.*?\}'
new_css = """/* Horizontal Ticker/Marquee Section */
.marquee{
    width:100%;
    overflow:hidden;
    white-space:nowrap;
    padding:40px 0;
    background:#fff;
}

.track{
    display:flex;
    width:max-content;
    animation:scroll 20s linear infinite;
}

.item{
    display:flex;
    align-items:center;
    gap:40px;
    margin-right:60px;
}

.text{
    font-family:'Anton', sans-serif;
    font-size:120px;
    font-weight:400;
    line-height:1;
    color:#000;
    text-transform:uppercase;
}

.dumbbell{
    width:120px;
    height:50px;
    color:#000;
    flex-shrink:0;
}

@keyframes scroll{
    from{
        transform:translateX(0);
    }
    to{
        transform:translateX(-50%);
    }
}"""
# The regex above might fail if @keyframes ticker-loop is too far. Let's be safer and replace from `/* Horizontal Ticker/Marquee Section */` to `/* --- VISUAL ADJUSTER PANEL --- */`
old_css_pattern_safe = r'/\* Horizontal Ticker/Marquee Section \*/.*?/\* --- VISUAL ADJUSTER PANEL --- \*/'
new_css_safe = new_css + "\n\n/* --- VISUAL ADJUSTER PANEL --- */"
css = re.sub(old_css_pattern_safe, new_css_safe, css, flags=re.DOTALL)

# Also remove mobile overrides for old ticker if any
css = re.sub(r'\.ticker-banner-section\s*\{.*?\}.*?\.ticker-content\s*span\s*\{.*?\}.*?\.ticker-divider\s*\{.*?\}', '', css, flags=re.DOTALL)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)
print("Updated HTML and CSS.")
