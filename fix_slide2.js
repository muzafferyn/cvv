const fs = require('fs');
const path = 'c:/Users/monster/Downloads/pörtföy/caglarcakmak.site/tr/index.html';

let content = fs.readFileSync(path, 'utf8');

const oldSlide = `                    {
                        num: "02",
                        text: "I worked with Muzaffer on frontend development projects where he demonstrated strong skills in JavaScript, TypeScript, React/Next.js, and Vue.js. Despite being early in his career, he consistently delivered quality code and took ownership of his tasks.\\\\n\\\\nMuzaffer built responsive interfaces using Ant Design and TailwindCSS that helped improve our user engagement metrics. He adapted well between different frameworks and actively participated in code reviews, always eager to learn and implement feedback. His contributions to improving our development workflows showed great initiative for a junior developer.\\\\n\\\\nHaving studied with Muzaffer at Ege University, I know him as a hard-working and dedicated person. He brings this same commitment to his professional work. His technical abilities combined with his positive attitude and willingness to learn made him a valuable team member.\\\\n\\\\nI recommend Muzaffer for any frontend developer role. He's a motivated developer with solid skills across multiple frameworks who will continue to grow and contribute effectively to any team.",
                        name: "Ege Tuzun",
                        role: "Yazılım Mühendisi",
                        company: "dev.tools",
                        date: "29 Temmuz 2025",
                        img: ""
                    }`;

const newSlide = `                    {
                        num: "02",
                        text: "Muzaffer, Toyzzshop bünyesinde satış danışmanı olarak görev yaptığı dönemde müşteri memnuniyetine verdiği önem ve ürün bilgisiyle dikkat çekti. Hedeflere ulaşma konusundaki kararlılığı ve müşteriyle kurduğu samimi iletişim, onu ekibimizin güvenilir bir parçası hâline getirdi.\\n\\nSatış süreçlerini öğrenme konusundaki isteği ve kendini geliştirmeye olan açıklığı takdire değerdi. Mağaza içi düzene, takım çalışmasına ve kurallara uyum konusunda da titiz bir tutum sergiledi.\\n\\nMuzaffer'i tanıyan biri olarak; çalışkanlığından, dürüstlüğünden ve sorumlu kişiliğinden büyük güven duydum. Farklı bir sektörde kariyer inşa etmekte olduğunu biliyorum ve başarılı olacağına içtenlikle inanıyorum.",
                        name: "TUNA ASLAN",
                        role: "Kıdemli Bölge Satış Müdürü",
                        company: "Toyzzshop®",
                        date: "14 Mart 2024",
                        img: "aslan.jpg"
                    }`;

// Try exact match first, then regex approach
if (content.includes('"Ege Tuzun"')) {
    // Replace just the name/role/company/date/img fields and the text field
    content = content.replace(/"Ege Tuzun"/, '"TUNA ASLAN"');
    content = content.replace(/"Yazılım Mühendisi"/, '"Kıdemli Bölge Satış Müdürü"');
    content = content.replace(/"dev\.tools"/, '"Toyzzshop®"');
    content = content.replace(/"29 Temmuz 2025"/, '"14 Mart 2024"');
    // Replace the English text with Turkish text
    content = content.replace(
        /text: "I worked with Muzaffer on frontend development projects.*?I recommend Muzaffer for any frontend developer role\. He's a motivated developer with solid skills across multiple frameworks who will continue to grow and contribute effectively to any team\."/s,
        `text: "Muzaffer, Toyzzshop bünyesinde satış danışmanı olarak görev yaptığı dönemde müşteri memnuniyetine verdiği önem ve ürün bilgisiyle dikkat çekti. Hedeflere ulaşma konusundaki kararlılığı ve müşteriyle kurduğu samimi iletişim, onu ekibimizin güvenilir bir parçası hâline getirdi.\\n\\nSatış süreçlerini öğrenme konusundaki isteği ve kendini geliştirmeye olan açıklığı takdire değerdi. Mağaza içi düzene, takım çalışmasına ve kurallara uyum konusunda da titiz bir tutum sergiledi.\\n\\nMuzaffer'i tanıyan biri olarak; çalışkanlığından, dürüstlüğünden ve sorumlu kişiliğinden büyük güven duydum. Farklı bir sektörde kariyer inşa etmekte olduğunu biliyorum ve başarılı olacağına içtenlikle inanıyorum."`
    );
    // Update img
    const imgRegex = /(name: "TUNA ASLAN".*?img: )""/s;
    content = content.replace(imgRegex, '$1"aslan.jpg"');
    
    fs.writeFileSync(path, content, 'utf8');
    console.log('Başarıyla güncellendi!');
} else {
    console.log('Ege Tuzun bulunamadı!');
    // Show what's around slide 02
    const idx = content.indexOf('num: "02"');
    if (idx > -1) {
        console.log(content.substring(idx, idx + 500));
    }
}
