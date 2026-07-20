import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Remove the products-catalogue-section completely and replace it back with the comment
html = re.sub(r'<section class="products-catalogue-section" id="products-catalogue">.*?</section>', '<!-- Products moved to products.html -- only a CTA link shown here -->', html, flags=re.DOTALL)

# 2. Restore the href
html = html.replace('href="#products-catalogue"', 'href="products.html"')

# 3. Restore the onclicks
html = html.replace("document.getElementById('btnFilterTreadmill').click(); document.getElementById('products-catalogue').scrollIntoView({behavior: 'smooth'})", "window.location='products.html?cat=treadmill'")
html = html.replace("document.getElementById('btnFilterHomeGym').click(); document.getElementById('products-catalogue').scrollIntoView({behavior: 'smooth'})", "window.location='products.html?cat=home-gym'")
html = html.replace("document.getElementById('btnFilterUprightBike').click(); document.getElementById('products-catalogue').scrollIntoView({behavior: 'smooth'})", "window.location='products.html?cat=upright-bike'")
html = html.replace("document.getElementById('btnFilterAccessories').click(); document.getElementById('products-catalogue').scrollIntoView({behavior: 'smooth'})", "window.location='products.html?cat=accessories'")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Reverted index.html successfully.")
