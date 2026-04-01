import os, re

target_file = r'c:\Users\monster\Downloads\pörtföy\caglarcakmak.site\tr\index.html'
fresh_file = r'c:\Users\monster\Downloads\pörtföy\caglarcakmak.site\tr\index_fresh.html'

with open(target_file, 'r', encoding='utf-8') as f:
    content = f.read()
    
with open(fresh_file, 'r', encoding='utf-8') as f:
    fresh = f.read()

# 1. Replace the SVG
match = re.search(r'<div class="relative h-\[180px\] w-full overflow-hidden">\s*(<svg.*?</svg>)\s*</div>', fresh, flags=re.DOTALL)
if match:
    good_svg = match.group(1)
    good_svg = good_svg.replace('href="/ben.jpeg"', 'href="ben2.jpg"')
    content = re.sub(r'(<div class="relative h-\[180px\] w-full overflow-hidden">\s*)<svg.*?</svg>(\s*</div>)', r'\1' + good_svg.replace('\\', '\\\\') + r'\2', content, flags=re.DOTALL)
    print("SVG successfully migrated.")
else:
    print("Couldn't find fresh SVG.")

# 2. Fix the hydration JSON data
old_desc = r'"profileDescription":"React.js, Vue.js, Node.js ,Workcube ve Odoo Framework\'te 3\+ yıl deneyimli 07-03-2007"'
new_desc = r'"profileDescription":"React, Vue.js, Node.js, Python, Odoo ERP ve Computer Vision uzmanlığına sahip Teknik İş Analisti \\u0026 Yazılım Geliştirici. Mühendislik ekipleri ile iş hedefleri arasında köprü kuruyor."'
content = re.sub(old_desc, new_desc, content)

# 3. Also fix "name":"Muzaffer Yorgun" -> "name":"Çağlar Çakmak" just in case it exists in hydration
content = re.sub(r'"name":"Muzaffer Yorgun"', r'"name":"Çağlar Çakmak"', content)

with open(target_file, 'w', encoding='utf-8') as f:
    f.write(content)
print("Saved modifications.")
