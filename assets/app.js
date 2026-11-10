const outfits = [
 {id:"01",title:"Clean White Shirt",season:"spring",style:"minimal",label:"簡約日常",desc:"以白襯衫搭配深色直筒長褲，利用俐落的輪廓呈現乾淨、成熟的日常造型。",image:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=850&q=85",items:[["上衣","白色襯衫"],["褲子","深灰直筒長褲"],["鞋子","黑色皮鞋或樂福鞋"],["配色","白、深灰、黑"]],tip:"將襯衫自然紮入褲頭，並注意褲長不要堆積在鞋面。"},
 {id:"02",title:"Soft Smart Casual",season:"autumn",style:"smart",label:"斯文休閒",desc:"針織上衣與寬直筒長褲的組合，在休閒與正式之間取得平衡。",image:"https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=850&q=85",items:[["上衣","米色針織衫"],["褲子","深色西裝寬褲"],["鞋子","麂皮休閒鞋"],["配色","米色、深咖、黑"]],tip:"上衣與褲子選擇不同深淺，能讓整體更有層次。"},
 {id:"03",title:"Relaxed Weekend",season:"spring",style:"casual",label:"週末休閒",desc:"以簡單素 T 與牛仔褲打造輕鬆造型，適合日常外出與週末活動。",image:"https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=850&q=85",items:[["上衣","白色素 T"],["褲子","淺藍直筒牛仔褲"],["鞋子","白色休閒球鞋"],["配色","白、淺藍、灰"]],tip:"挑選肩線合適、衣長不過長的素 T，整體比例會更俐落。"},
 {id:"04",title:"Earth Tone Layering",season:"autumn",style:"minimal",label:"大地色系",desc:"利用卡其、咖啡與米白等大地色單品，創造溫暖且協調的秋季穿搭。",image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=850&q=85",items:[["上衣","咖啡色長袖上衣"],["褲子","卡其色長褲"],["鞋子","深棕休閒鞋"],["配色","咖啡、卡其、米白"]],tip:"全身使用相近色系時，可以透過材質差異增加視覺層次。"},
 {id:"05",title:"Modern Monochrome",season:"autumn",style:"smart",label:"黑白層次",desc:"以黑、灰、白三種中性色搭配，透過不同版型讓單色穿搭更有變化。",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=850&q=85",items:[["上衣","灰色合身長袖"],["褲子","黑色寬版長褲"],["鞋子","黑色皮革休閒鞋"],["配色","灰、黑、白"]],tip:"黑白灰穿搭可以利用寬鬆與合身的比例差異，避免整體太單調。"},
 {id:"06",title:"Summer Easy Fit",season:"spring",style:"casual",label:"夏日清爽",desc:"選擇透氣、輕薄的上衣與淺色褲款，讓夏季穿搭保持清爽。",image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=850&q=85",items:[["上衣","淺色短袖襯衫"],["褲子","米白休閒長褲"],["鞋子","帆布鞋"],["配色","淺藍、米白、白"]],tip:"夏天可優先選擇棉、亞麻等較透氣的材質。"}
];
const grid=document.querySelector("#lookGrid");
function render(filter="all"){
 const list=outfits.filter(o=>filter==="all"||o.season===filter||o.style===filter);
 grid.innerHTML=list.map(o=>`<article class="look-card" tabindex="0" role="button" aria-label="查看 ${o.title}" data-id="${o.id}">
 <div class="look-image"><img src="${o.image}" alt="${o.title} 男生穿搭" loading="lazy"><span class="look-number">LOOK / ${o.id}</span></div>
 <div class="look-meta"><span>${o.season==="spring"?"SPRING / SUMMER":"AUTUMN / WINTER"}</span><span>·</span><span>${o.label}</span></div>
 <h3>${o.title}</h3><p>${o.desc}</p><span class="look-more">VIEW OUTFIT ↗</span></article>`).join("");
}
render();
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{document.querySelector(".filter.active").classList.remove("active");btn.classList.add("active");render(btn.dataset.filter)}));
const modal=document.querySelector("#outfitModal");
function openOutfit(id){
 const o=outfits.find(x=>x.id===id);if(!o)return;
 document.querySelector("#modalImage").src=o.image;document.querySelector("#modalImage").alt=o.title;
 document.querySelector("#modalMeta").textContent=`LOOK / ${o.id} · ${o.label}`;
 document.querySelector("#modalTitle").textContent=o.title;document.querySelector("#modalDesc").textContent=o.desc;
 document.querySelector("#modalItems").innerHTML=o.items.map(x=>`<div><strong>${x[0]}</strong><span>${x[1]}</span></div>`).join("");
 document.querySelector("#modalTip").textContent="搭配小技巧："+o.tip;
 modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
grid.addEventListener("click",e=>{const card=e.target.closest(".look-card");if(card)openOutfit(card.dataset.id)});
grid.addEventListener("keydown",e=>{if((e.key==="Enter"||e.key===" ")&&e.target.classList.contains("look-card")){e.preventDefault();openOutfit(e.target.dataset.id)}});
modal.querySelectorAll("[data-close]").forEach(el=>el.addEventListener("click",closeModal));
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
