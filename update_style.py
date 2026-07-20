with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace desktop marquee styles
old_marquee_css = """/* Horizontal Ticker/Marquee Section */
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
    gap:15px;
    margin-right:25px;
}

.text{
    font-family: 'Outfit', sans-serif;
    font-size: 65px;
    font-weight: 500;
    line-height:1;
    color:#000;
    text-transform:uppercase;
}

.dumbbell{
    font-size: 50px;
    color:#000;
    flex-shrink:0;
}"""

new_marquee_css = """/* Horizontal Ticker/Marquee Section */
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
    gap:20px;
    margin-right:35px;
}

.text{
    font-family: 'Outfit', sans-serif;
    font-size: 90px;
    font-weight: 500;
    line-height: 1.2;
    color:#000;
    text-transform:uppercase;
}

.dumbbell{
    font-size: 70px;
    color:#000;
    flex-shrink:0;
    display:inline-flex;
    align-items:center;
}"""

css = css.replace(old_marquee_css, new_marquee_css)

# Append mobile media query for the marquee at the end of the file
mobile_marquee_css = """

/* Mobile responsive adjustments for the Marquee */
@media (max-width: 768px) {
    .marquee {
        padding: 20px 0;
    }
    .text {
        font-size: 40px;
        line-height: 1.2;
    }
    .dumbbell {
        font-size: 32px;
    }
    .item {
        gap: 10px;
        margin-right: 15px;
    }
}
"""

if mobile_marquee_css.strip() not in css:
    css += mobile_marquee_css

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Updated marquee styling and added mobile responsive overrides.")
