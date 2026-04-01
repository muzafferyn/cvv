const fs = require('fs');
const path = 'c:/Users/monster/Downloads/pörtföy/caglarcakmak.site/tr/index.html';

let content = fs.readFileSync(path, 'utf8');

// 1. Add IDs to HTML
content = content.replace(
    /<div class="relative transition-all duration-300 opacity-100 translate-x-0">/,
    '<div id="testimonial-content-wrapper" class="relative transition-all duration-300 opacity-100 translate-x-0">'
);

content = content.replace(
    /<p class="text-sm text-muted-foreground">Operasyondan Sorumlu Genel Müdür Yardımcısı<span\s+class="mx-2 text-foreground\/20">\/<\/span><span\s+class="group-hover:text-foreground transition-colors duration-300">Popeyes®<\/span>\s+<\/p>/,
    '<p class="text-sm text-muted-foreground"><span id="testimonial-role">Operasyondan Sorumlu Genel Müdür Yardımcısı</span><span id="testimonial-slash" class="mx-2 text-foreground/20">/</span><span id="testimonial-company" class="group-hover:text-foreground transition-colors duration-300">Popeyes®</span></p>'
);

// If the above failed (likely due to space), try a broader approach
if (!content.includes('id="testimonial-role"')) {
    content = content.replace(
        /<p class="text-sm text-muted-foreground">Operasyondan Sorumlu.*?Popeyes®.*?<\/p>/s,
        '<p class="text-sm text-muted-foreground"><span id="testimonial-role">Operasyondan Sorumlu Genel Müdür Yardımcısı</span><span id="testimonial-slash" class="mx-2 text-foreground/20">/</span><span id="testimonial-company" class="group-hover:text-foreground transition-colors duration-300">Popeyes®</span></p>'
    );
}

// 2. Update slides array
const newSlides = `                    {
                        num: "01",
                        text: "Muzaffer ile çalıştığım süre boyunca, kıdemli servis elemanı olarak sorumluluk bilinci ve müşteri ilişkileri konusunda öne çıktı. Görev tanımının ötesine geçerek ekip arkadaşlarına destek olur, yoğun servis saatlerinde sakin ve çözüm odaklı kalmayı başardı.\\n\\nİşe devamı, dakikliği ve iş arkadaşlarıyla uyumlu çalışma tarzı yöneticilerin güvenini kazandı. Kendisine verilen görevleri sorgulamadan tamamladı ve doğru işi doğru yapma konusundaki titizliği takdire değerdi.\\n\\nGelecekte herhangi bir pozisyon için gönderdiğim kimseler arasında yer alabilecek, güvenilir ve çalışkan bir profil. İçtenlikle tavsiye ederim.",
                        name: "Cihan BIÇAK",
                        role: "Operasyondan Sorumlu Genel Müdür Yardımcısı",
                        company: "Popeyes®",
                        date: "23 Ağustos 2023",
                        img: "bicak.jpg"
                    },
                    {
                        num: "02",
                        text: "Muzaffer, Toyzzshop bünyesinde satış danışmanı olarak görev yaptığı dönemde müşteri memnuniyetine verdiği önem ve ürün bilgisiyle dikkat çekti. Hedeflere ulaşma konusundaki kararlılığı ve müşteriyle kurduğu samimi iletişim, onu ekibimizin güvenilir bir parçası hâline getirdi.\\n\\nSatış süreçlerini öğrenme konusundaki isteği ve kendini geliştirmeye olan açıklığı takdire değerdi. Mağaza içi düzene, takım çalışmasına ve kurallara uyum konusunda da titiz bir tutum sergiledi.\\n\\nMuzaffer'i tanıyan biri olarak; çalışkanlığından, dürüstlüğünden ve sorumlu kişiliğinden büyük güven duydum. Farklı bir sektörde kariyer inşa etmekte olduğunu biliyorum ve başarılı olacağına içtenlikle inanıyorum.",
                        name: "TUNA ASLAN",
                        role: "",
                        company: "Toyzzshop® Satış",
                        date: "20 Kasım 2025",
                        img: "aslan.jpg"
                    }`;

content = content.replace(/const slides = \[.*?\];/s, `const slides = [\n${newSlides}\n                ];`);

// 3. Update updateSlide function and selection
const newUpdateLogic = `
                let currentActive = 0;
                let isAnimating = false;

                const bigNum = section.querySelector("span[style*='tnum']");
                const quote = section.querySelector("blockquote");
                const img = section.querySelector(".mt-6 img");
                const infoContainer = section.querySelector(".group.cursor-default");
                if (!quote || !infoContainer) return;

                const nameEl = infoContainer.querySelector("p.font-medium");
                const roleEl = document.getElementById("testimonial-role");
                const companyEl = document.getElementById("testimonial-company");
                const slashEl = document.getElementById("testimonial-slash");
                const dateEl = infoContainer.querySelector("p.text-xs");
                const contentWrapper = document.getElementById("testimonial-content-wrapper");

                const prevBtn = section.querySelector(".lucide-chevron-left")?.closest("button");
                const nextBtn = section.querySelector(".lucide-chevron-right")?.closest("button");
                const counterEl = section.querySelector("span.tracking-widest.uppercase");

                function updateSlide(index) {
                    if (isAnimating) return;
                    isAnimating = true;

                    if (contentWrapper) {
                        contentWrapper.style.opacity = "0";
                        contentWrapper.style.transform = "translateY(10px)";
                    }

                    setTimeout(() => {
                        currentActive = index;
                        const s = slides[index];
                        if (bigNum) bigNum.textContent = s.num;
                        quote.textContent = s.text;
                        if (nameEl) nameEl.textContent = s.name;
                        
                        if (roleEl) roleEl.textContent = s.role;
                        if (companyEl) companyEl.textContent = s.company;
                        if (slashEl) slashEl.style.display = (s.role && s.company) ? "inline" : "none";
                        
                        if (dateEl) dateEl.textContent = s.date;
                        if (img) {
                             img.src = s.img || "";
                             img.alt = s.name;
                        }
                        if (counterEl) counterEl.innerHTML = \`0\${index + 1} <!-- -->/<!-- --> <!-- -->02\`;

                        const tc = document.getElementById("testimonial-container");
                        const tg = document.getElementById("testimonial-gradient");
                        if (tc && tg) {
                            tc.classList.add("overflow-hidden");
                            tc.classList.remove("overflow-y-auto", "testimonial-scroll", "pr-3", "pr-4");
                            tc.style.maxHeight = "140px";
                            tc.scrollTop = 0;
                            tg.style.opacity = "1";
                            tg.style.pointerEvents = "auto";
                        }
                        
                        // Dots logic
                        const dotsContainer = section.querySelector(".flex.items-center.gap-3");
                        if (dotsContainer) {
                          const dots = dotsContainer.querySelectorAll("button");
                          dots.forEach((dot, i) => {
                             const span = dot.querySelector("span");
                             if (span) {
                               span.className = i === index ? "block h-px transition-all duration-500 ease-out w-12 bg-foreground" : "block h-px transition-all duration-500 ease-out w-6 bg-foreground/20 group-hover:w-8 group-hover:bg-foreground/40";
                             }
                          });
                        }

                        if (contentWrapper) {
                            setTimeout(() => {
                                contentWrapper.style.opacity = "1";
                                contentWrapper.style.transform = "translateY(0)";
                                isAnimating = false;
                            }, 50);
                        } else {
                            isAnimating = false;
                        }
                    }, 300);
                }
`;

// Replace the old variables and function
content = content.replace(/let currentActive = 0;.*?function updateSlide\(index\) \{.*?\}/s, newUpdateLogic);

fs.writeFileSync(path, content, 'utf8');
console.log('Update complete!');
