const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const kfcBlock = \<div class=\"flex justify-start pt-10 md:pt-40 md:gap-10 kfc-block\">\ +
\<div class=\"sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full\">\ +
\<div class=\"h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center\">\ +
\<div class=\"h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2\"></div>\ +
\</div>\ +
\<h3 class=\"hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 \">Oca 2025 - Mar 2025</h3>\ +
\</div>\ +
\<div class=\"relative pl-20 pr-4 md:pl-4 w-full\">\ +
\<h3 class=\"md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500\">Oca 2025 - Mar 2025</h3>\ +
\<div>\ +
\<h3 class=\"text-lg font-bold text-neutral-900 dark:text-white mb-2\">Restoran Ekip Üyesi @ HD Holding (KFC)</h3>\ +
\<p class=\"text-neutral-800 dark:text-neutral-200 text-sm font-normal mb-4\">HD Holding bünyesindeki KFC restoranýnda yaklaþýk 2 ay boyunca ekip üyesi olarak görev aldým. Gýda güvenliði ve hijyen kurallarýna titizlikle uyarak misafirlere en yüksek standartta hizmet sundum. Yoðun iþ temposunda takým arkadaþlarýmla uyum içinde çalýþýp hýzlý ve eksiksiz sipariþ hazýrlama süreçlerini baþarýyla yürüttüm. Pozitif ve çözüm odaklý iletiþim becerilerimle misafir memnuniyetine deðer kattým.</p>\ +
\<div class=\"mb-6\"><img alt=\"HD Holding KFC\" loading=\"lazy\" width=\"500\" height=\"300\" decoding=\"async\" class=\"rounded-lg object-cover shadow-md border border-neutral-200 dark:border-neutral-800\" src=\"hdholding.png\"></div>\ +
\<div class=\"flex flex-wrap gap-2 mt-4\">\ +
\<span class=\"px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs\">Gýda Hijyeni</span>\ +
\<span class=\"px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs\">Ekip Çalýþmasý</span>\ +
\<span class=\"px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs\">Müþteri Odaklýlýk</span>\ +
\<span class=\"px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-xs\">Hýzlý Servis</span>\ +
\</div></div></div></div>\;

const scriptBlock = \
<script id=\"kfc-injector\">
  document.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        if(document.querySelector('.kfc-block')) return;
        const toyzz = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('Toyzz Shop'));
        if(toyzz) {
            const toyzzBlock = toyzz.closest('div.flex.justify-start.pt-10');
            if(toyzzBlock) {
                toyzzBlock.insertAdjacentHTML('afterend', \ \ \);
            }
        }
    }, 500);
  });
</script>\;

if(!html.includes('kfc-injector')) {
   html += scriptBlock;
   fs.writeFileSync('index.html', html);
}
console.log('done');

