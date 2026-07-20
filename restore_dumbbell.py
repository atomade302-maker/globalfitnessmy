import re

# Update HTML
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'<svg class="dumbbell".*?</svg>', '<i class="fa-solid fa-dumbbell dumbbell"></i>', html, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Update CSS
with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# Replace the .dumbbell CSS block to work with font-awesome (using font-size)
new_css = """.dumbbell{
    font-size: 85px;
    color:#000;
    flex-shrink:0;
}"""

css = re.sub(r'\.dumbbell\s*\{.*?\}', new_css, css, flags=re.DOTALL)

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("Restored original dumbbell!")
