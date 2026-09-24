/* Food is built as a small ingredient stage. Every option changes the visible
   components immediately; there is no separate animation control. */
const FoodExperience = (() => {
  const art = {
    chili: '<path d="M17 18c15-10 29-10 40-2 11 9 22 8 45 2-7 16-21 30-43 28C37 44 24 35 17 18Z" fill="#dd3426" stroke="#92251d" stroke-width="3"/><path d="M22 19c23-8 29 2 40 7" fill="none" stroke="#ff8b69" stroke-width="5" stroke-linecap="round"/><path d="M15 18c-5-2-7-6-8-11M16 18c-3 1-8 1-11-2" fill="none" stroke="#4d783b" stroke-width="5" stroke-linecap="round"/>',
    beef: '<path d="M10 24 31 11l23 7 15-7 32 17-5 29-32 12-25-8-26-7Z" fill="#79391f" stroke="#b2663a" stroke-width="4"/><path d="m20 26 19-9 14 7 20-4M21 43l19 9 20-5 25 2" fill="none" stroke="#d39259" stroke-width="7" stroke-linecap="round" opacity=".7"/>',
    shrimp: '<path d="M18 17c28-16 74-3 78 25 3 22-20 34-42 25C36 60 31 43 43 34c12-8 24 1 20 12" fill="none" stroke="#dc7859" stroke-width="19" stroke-linecap="round"/><path d="M22 14c29-13 65-1 72 24" fill="none" stroke="#ffb18d" stroke-width="7" stroke-linecap="round"/><circle cx="24" cy="21" r="3" fill="#402518"/>',
    garlic: '<ellipse cx="33" cy="42" rx="20" ry="13" fill="#f5deab" stroke="#c9a878" stroke-width="3"/><ellipse cx="73" cy="33" rx="19" ry="12" fill="#fff0cd" stroke="#c9a878" stroke-width="3"/><path d="M17 40q15-10 30 2M59 30q14-9 28 3" fill="none" stroke="#fff8e4" stroke-width="3"/>',
    chicken: '<path d="m8 30 20-16 28 6 8 29-22 16-30-9ZM61 19l28-8 18 18-9 29-31-5-12-15Z" fill="#cb8540" stroke="#945523" stroke-width="3"/><path d="m18 31 25-6M69 29l21-7" stroke="#f5bf75" stroke-width="6" stroke-linecap="round"/>',
    pork: '<path d="m12 22 35-9 26 12-4 34-31 8-28-13ZM72 20l27-6 11 30-26 18-17-14Z" fill="#9b4d27" stroke="#4c231a" stroke-width="4"/><path d="M18 28q28-11 45 3M22 47q19 8 36 2M75 26q11-5 24 0" fill="none" stroke="#f0af66" stroke-width="9" opacity=".75"/>',
    tofu: '<path d="m13 25 40-14 35 14-40 16Z" fill="#fff2d7"/><path d="m13 25 35 16v28L13 51Z" fill="#d6c9ac"/><path d="m48 41 40-16v27L48 69Z" fill="#eee2c6"/><path d="m62 18 34 10 13 23-35 12-24-21Z" fill="#fff5dc" stroke="#d2c8ae" stroke-width="3"/>',
    greens: '<path d="M57 68C11 53 9 21 29 10c26 3 45 21 28 58ZM60 66c-6-34 10-52 37-51 15 22-2 49-37 51Z" fill="#4b904c" stroke="#2d683b" stroke-width="3"/><path d="M24 17q20 26 34 48M92 20Q70 42 61 66" fill="none" stroke="#a2cc65" stroke-width="4"/>',
    egg: '<path d="M13 30c10-21 25-18 41-16 20-11 49 6 50 24 10 28-25 38-49 27C28 75 5 57 13 30Z" fill="#fff3d3" stroke="#d8c29a" stroke-width="3"/><ellipse cx="58" cy="42" rx="19" ry="16" fill="#f9b938" stroke="#e18b2e" stroke-width="3"/><path d="M48 34q9-8 20-2" stroke="#ffe38d" stroke-width="5" fill="none"/>',
    rice: '<path d="M9 52Q17 16 60 13q43 2 51 39Z" fill="#f3e8c9" stroke="#d2bb8e" stroke-width="3"/><path d="M12 51q47 12 96 0L91 70H30Z" fill="#e7dcc4" stroke="#ad936d" stroke-width="3"/><g fill="#fffaf0"><ellipse cx="27" cy="34" rx="7" ry="3" transform="rotate(-20 27 34)"/><ellipse cx="44" cy="23" rx="7" ry="3" transform="rotate(30 44 23)"/><ellipse cx="61" cy="34" rx="7" ry="3"/><ellipse cx="75" cy="21" rx="7" ry="3" transform="rotate(-25 75 21)"/><ellipse cx="93" cy="40" rx="7" ry="3"/></g>',
    noodles: '<path d="M12 22c12-17 32-13 39 3 5 10-5 25-14 30-12 7-26-4-18-15 5-9 16-8 20-2M50 12c18-7 37 5 34 20-1 12-22 11-23 24-1 7 10 13 23 7M74 18c24-7 40 8 30 25-4 8-16 9-17 21" fill="none" stroke="#e8b86b" stroke-width="8" stroke-linecap="round"/><path d="M15 20c15-5 22 2 22 7M59 16c13-1 20 7 19 14" fill="none" stroke="#ffe4a0" stroke-width="3"/>',
    dumpling: '<path d="M9 57Q17 19 58 15q42 3 52 43-16 15-50 14Q29 73 9 57Z" fill="#f8e8c8" stroke="#d8bf9a" stroke-width="3"/><path d="M21 47Q43 10 60 17q24-4 41 30M37 32l10 19M55 21l5 28M75 24l-7 25M90 35l-12 19" fill="none" stroke="#d6b995" stroke-width="3" stroke-linecap="round"/>',
    cheese: '<path d="M11 24Q38 9 63 20q26-7 46 12L98 54H22Z" fill="#ffd875" stroke="#d99a39" stroke-width="3"/><path d="M31 49v23M59 45v29M82 48v18" stroke="#ffe7a6" stroke-width="8" stroke-linecap="round"/><path d="M23 28Q53 19 90 29" fill="none" stroke="#fff0b8" stroke-width="6"/>',
    scallion: '<path d="M10 58Q28 42 54 12M30 70Q49 41 95 17M55 75Q76 47 108 46" fill="none" stroke="#438743" stroke-width="9" stroke-linecap="round"/><path d="M11 56Q26 47 41 32M32 68Q50 47 69 35" fill="none" stroke="#8bc45a" stroke-width="3"/>',
    chocolate: '<path d="M14 18Q41 8 62 21q27-5 44 8L93 58Q62 73 29 59Z" fill="#552b20" stroke="#2b1713" stroke-width="4"/><path d="M22 27q29-16 65 4M45 50q17 13 41-4" fill="none" stroke="#a2603f" stroke-width="8" stroke-linecap="round"/><path d="M51 61v17M69 60v15" stroke="#6e2e1c" stroke-width="7" stroke-linecap="round"/>',
    caramel: '<path d="M16 25q41-21 88 3L92 61q-34 19-65 0Z" fill="#e7b766" stroke="#a85b2b" stroke-width="3"/><ellipse cx="60" cy="26" rx="45" ry="18" fill="#9b481f"/><path d="M24 22q36-18 72 0" fill="none" stroke="#ed9d4e" stroke-width="6"/>',
    mango: '<path d="m12 23 23-12 23 12-4 28-25 10-20-15ZM63 31l21-12 25 14-4 29-24 9-21-14Z" fill="#ffca42" stroke="#db8a25" stroke-width="3"/><path d="m14 26 38-2M65 34l41-1" stroke="#ffe995" stroke-width="5"/>',
    strawberry: '<path d="M60 18C37 4 18 23 26 45c5 16 22 27 34 33 13-8 32-24 35-43 2-18-17-26-35-17Z" fill="#df3c42" stroke="#9d2732" stroke-width="3"/><path d="M36 19 60 11l23 9-23 12Z" fill="#498a48"/><g fill="#ffd89a"><circle cx="43" cy="42" r="2"/><circle cx="66" cy="45" r="2"/><circle cx="56" cy="58" r="2"/><circle cx="78" cy="32" r="2"/></g>',
    cream: '<path d="M19 57Q7 46 28 37c-4-10 7-18 21-18 3-14 31-16 34 1 19 0 27 14 18 24 14 15-7 25-37 27Q30 70 19 57Z" fill="#fff7e9" stroke="#ded1be" stroke-width="3"/><path d="M33 50q23 11 47-1M48 29q21 4 31-5" fill="none" stroke="#f2e3ca" stroke-width="5"/>',
    ice: '<path d="m21 22 25-12 26 15-4 30-26 14-25-17Z" fill="#bce4e8" fill-opacity=".83" stroke="#e4faff" stroke-width="4"/><path d="m21 22 24 17 27-14M45 39l-3 29" fill="none" stroke="#f2ffff" stroke-width="3"/><path d="m73 38 21-8 16 14-7 19-20 6-14-14Z" fill="#d9f2f1" fill-opacity=".75" stroke="#e8ffff" stroke-width="3"/>',
    lime: '<circle cx="58" cy="40" r="34" fill="#d6e997" stroke="#559b4c" stroke-width="8"/><circle cx="58" cy="40" r="26" fill="#ecf6bb"/><path d="M58 14v52M32 40h52M40 22l36 36M76 22 40 58" stroke="#9abb65" stroke-width="3"/>',
    tea: '<path d="M14 58Q15 20 45 14q20 17 13 44-15 21-44 0ZM61 54Q63 24 98 18q14 29-5 47-20 10-32-11Z" fill="#6b9954" stroke="#386345" stroke-width="3"/><path d="M21 56q18-24 31-36M67 55q18-24 28-30" stroke="#b7cb73" stroke-width="3"/>',
    coffee: '<path d="M14 36q45-38 90 0Q78 68 35 57Z" fill="#9c5a3a" stroke="#4a2e2a" stroke-width="4"/><path d="M26 39q34-21 67-2M41 53q24 8 43-4" fill="none" stroke="#dfb88b" stroke-width="6"/>',
    mushroom: '<path d="M16 42Q18 11 51 13q31 2 35 28Z" fill="#a56c4e" stroke="#724632" stroke-width="3"/><path d="M35 42h31l-3 26H39Z" fill="#f0dec4" stroke="#c8ae8c" stroke-width="3"/><path d="M78 48Q82 22 101 27q14 3 16 21Z" fill="#b98759" stroke="#724632" stroke-width="3"/><path d="M91 48h17l-2 20H93Z" fill="#e9d6b9"/>',
    corn: '<path d="M35 8q25-5 37 15 15 25-4 50-28 10-43-17Q18 29 35 8Z" fill="#ffd34c" stroke="#c6952e" stroke-width="4"/><path d="M27 30q29 7 51 2M28 45q28 8 46 1M36 18q14 18 18 53M53 15q13 15 7 52" fill="none" stroke="#e89f35" stroke-width="4"/><path d="M24 55q-12 10-13 23 20-2 29-14" fill="#4e8940"/>',
    rib: '<path d="M16 45q0-23 25-28 33-10 49 13 18 20 2 36-27 18-56 2Q15 66 16 45Z" fill="#99532f" stroke="#5e3425" stroke-width="4"/><path d="M71 40q28-4 39-12l7 7q-8 21-39 21" fill="#f5e6ce" stroke="#c9a884" stroke-width="3"/><path d="M27 35q24-17 50 2" fill="none" stroke="#d4935d" stroke-width="6"/>',
    sauce: '<path d="M15 26q19-16 42 4 21 15 48-8" fill="none" stroke="#c87937" stroke-width="15" stroke-linecap="round"/><path d="M18 25q21-13 40 4 18 10 44-6" fill="none" stroke="#f5b66c" stroke-width="4" stroke-linecap="round"/>',
    sugar: '<path d="M59 7 64 32l23 8-23 6-5 25-6-25-23-6 23-8ZM22 14l3 10 11 3-11 3-3 11-3-11-10-3 10-3ZM91 4l3 9 9 3-9 3-3 9-3-9-9-3 9-3Z" fill="#fff7d6"/>',
    oil: '<path d="M57 8Q32 38 32 53a25 25 0 0 0 50 0Q82 37 57 8Z" fill="#e7b659" fill-opacity=".85" stroke="#ffdc82" stroke-width="3"/><path d="M42 52q0 14 13 16" fill="none" stroke="#fff0ad" stroke-width="5" stroke-linecap="round"/>',
    bubbles: '<circle cx="20" cy="58" r="8" fill="none" stroke="#e4faff" stroke-width="4"/><circle cx="48" cy="30" r="13" fill="none" stroke="#e4faff" stroke-width="4"/><circle cx="82" cy="50" r="18" fill="none" stroke="#e4faff" stroke-width="4"/><circle cx="98" cy="19" r="6" fill="none" stroke="#e4faff" stroke-width="3"/>'
  };
  const profiles = {
    'spicy-beef': {mood:'hot',parts:['chili:1','chili:2','chili:3','scallion']},
    'garlic-shrimp': {mood:'amber',parts:['shrimp','garlic','sauce','chili:1','chili:2']},
    'kung-pao-chicken': {mood:'amber',parts:['chili:1','chili:2','scallion']},
    'braised-pork': {mood:'amber',parts:['pork','pork:extra','sauce','scallion']},
    'claypot-tofu': {mood:'sage',parts:['tofu','mushroom','greens','chili:1'] ,lid:'claypot-lid'},
    'greens': {mood:'sage',parts:['greens','garlic','oil:1','oil:2']},
    'egg-fried-rice': {mood:'amber',parts:['rice','egg','scallion','rice:extra','egg:extra']},
    'beef-noodles': {mood:'amber',parts:['noodles','beef','greens','chili:1','chili:2']},
    'xiaolongbao': {mood:'amber',parts:['dumpling','dumpling','dumpling','dumpling:extra','dumpling:extra','dumpling:extra'],lid:'bamboo-steamer-lid'},
    'cheese-baked-rice': {mood:'amber',parts:['rice','chicken','mushroom','cheese:1','cheese:2']},
    'scallion-noodles': {mood:'amber',parts:['noodles','scallion','sauce','noodles:extra']},
    'lava-cake': {mood:'berry',parts:['chocolate','chocolate','sugar:1','sugar:2','sugar:3']},
    'caramel-pudding': {mood:'amber',parts:['caramel','sugar','ice:cold']},
    'mango-pomelo': {mood:'berry',parts:['mango','mango','cream','sugar:1','sugar:2','sugar:3']},
    'strawberry-waffle': {mood:'berry',parts:['strawberry','strawberry','cream:1','cream:2','sugar']},
    'lime-soda': {mood:'cool',parts:['bubbles','ice:1','ice:2','ice:3','sugar:1','sugar:2']},
    'osmanthus-tea': {mood:'amber',parts:['tea','tea','sugar:1','sugar:2','sugar:3']},
    'coconut-latte': {mood:'cool',parts:['ice:1','ice:2','ice:3','sugar:1','sugar:2']},
    'corn-rib-soup': {mood:'amber',parts:['corn','rib','greens','corn:extra','rib:extra']},
    'mushroom-chicken-soup': {mood:'sage',parts:['mushroom','chicken','greens','mushroom:extra','chicken:extra'],lid:'claypot-lid'}
  };
  const ingredientImages = {
    beef:'./food/ingredient-beef.webp', shrimp:'./food/ingredient-shrimp.webp', garlic:'./food/ingredient-garlic.webp',
    chicken:'./food/ingredient-chicken.webp', pork:'./food/ingredient-pork.webp', tofu:'./food/ingredient-tofu.webp',
    greens:'./food/ingredient-greens.webp', egg:'./food/ingredient-egg.webp', rice:'./food/ingredient-rice.webp',
    noodles:'./food/ingredient-noodles.webp', dumpling:'./food/ingredient-dumpling.webp', cheese:'./food/ingredient-cheese.webp',
    chocolate:'./food/ingredient-chocolate.webp', caramel:'./food/ingredient-caramel.webp', mango:'./food/ingredient-mango.webp',
    strawberry:'./food/ingredient-strawberry.webp', cream:'./food/ingredient-cream.webp', sugar:'./food/ingredient-sugar.webp',
    scallion:'./food/ingredient-scallion.webp', mushroom:'./food/ingredient-mushroom.webp', corn:'./food/ingredient-corn.webp',
    rib:'./food/ingredient-rib.webp', tea:'./food/ingredient-tea.webp', oil:'./food/ingredient-oil.webp'
  };
  const positions = [
    [50,24,-11,116],[27,40,13,88],[74,42,-15,86],[34,53,-19,78],
    [69,56,12,78],[52,39,9,89],[23,24,-8,63]
  ];
  function piece(kind,channel,i){
    const [x,y,r,w]=positions[i%positions.length];
    const visual=kind==='chili'?'<img src="./food/chili-cutout.webp" alt="">':kind==='ice'?'<img src="./food/ice-cutout.webp" alt="">':ingredientImages[kind]?`<img src="${ingredientImages[kind]}" alt="">`:`<svg viewBox="0 0 120 80" role="presentation">${art[kind]||art.greens}</svg>`;
    const semantic=channel==='extra'||channel==='cold'?channel:channel?kind:'base';
    return `<div class="scene-piece" data-channel="${semantic}" data-index="${i}" style="--piece-x:${x}%;--piece-y:${y}%;--piece-r:${r}deg;--piece-w:${w}px;--stagger:${i*65}ms" aria-hidden="true">${visual}</div>`;
  }
  function markup(item, imageUrl){
    const p=profiles[item.id];
    const baseImage={'spicy-beef':'./food/spicy-beef-mild.webp','kung-pao-chicken':'./food/kung-pao-chicken-clean.webp','lime-soda':'./food/lime-soda-clear.webp','coconut-latte':'./food/coconut-latte-clear.webp'}[item.id]||imageUrl;
    return `<div class="experience-stage" id="detailPhoto" data-mood="${p.mood}" data-item="${item.id}" style="--meal-image:url('${imageUrl}')">
      <div class="scene-photo-haze"></div><div class="scene-rim"></div><div class="scene-halo"></div>
      <div class="scene-orbit scene-orbit-one"></div><div class="scene-orbit scene-orbit-two"></div>
      <div class="scene-platter"><img src="${baseImage}" alt="${item.name}" loading="eager"></div>
      <div class="scene-pieces">${p.parts.map((part,i)=>{const [kind,channel]=part.split(':');return piece(kind,channel,i)}).join('')}</div>
      ${p.lid?`<img class="scene-lid" src="./food/${p.lid}.webp" alt="" aria-hidden="true">`:''}
      <div class="scene-steam" aria-hidden="true"><i></i><i></i><i></i></div>
      <div class="scene-caption"><span class="scene-caption-label">为你现做 · 食材随选择变化</span><strong id="sceneStatus" role="status" aria-live="polite">${item.tag}</strong></div>
      <div class="scene-counter">${String(Object.keys(profiles).indexOf(item.id)+1).padStart(2,'0')} / 20</div>
    </div>`;
  }
  function update(stage,item,selections,{initial=false,changedGroup=0}={}){
    if(!stage)return;
    const opts=selections.join(' · ');
    const isSpicy=/辣/.test(opts) && !/不辣|免辣|原味|经典蒜香/.test(opts);
    const level=/重辣|特辣/.test(opts)?3:/中辣|加辣/.test(opts)?2:isSpicy?1:0;
    const hasSpiceChoice=item.options.some(g=>g[0]==='辣度'||g.some(v=>/加辣|微辣/.test(v)));
    const isBig=/加量|双人份|12 只/.test(opts);
    const ice=/去冰/.test(opts)?0:/少冰/.test(opts)?1:3;
    const sweet=/不额外加糖|不加糖|无糖/.test(opts)?0:/少甜|微糖/.test(opts)?1:3;
    const cream=/少奶油/.test(opts)?1:2;
    const cheese=/双倍芝士/.test(opts)?2:1;
    const oil=/少油少盐/.test(opts)?0:2;
    stage.dataset.mood=hasSpiceChoice?(level===0?'sage':level===1?'amber':'hot'):(profiles[item.id].mood==='amber'&&/去冰/.test(opts)?'cool':profiles[item.id].mood);
    stage.style.setProperty('--portion-scale',isBig?'1.16':'1');
    stage.classList.toggle('less-heat',/温饮|冰镇|去冰/.test(opts));
    stage.querySelectorAll('.scene-piece').forEach(el=>{
      const ch=el.dataset.channel;
      const index=Number(el.dataset.index);
      const channelOrder=[...stage.querySelectorAll(`.scene-piece[data-channel="${ch}"]`)].indexOf(el)+1;
      let visible=true;
      if(ch==='chili')visible=channelOrder<=level;
      else if(ch==='extra')visible=isBig;
      else if(ch==='ice')visible=channelOrder<=ice;
      else if(ch==='sugar')visible=channelOrder<=sweet;
      else if(ch==='cream')visible=channelOrder<=cream;
      else if(ch==='cheese')visible=channelOrder<=cheese;
      else if(ch==='oil')visible=channelOrder<=oil;
      else if(ch==='cold')visible=/冰镇/.test(opts);
      el.classList.toggle('is-removed',!visible);
      el.setAttribute('data-visible',String(visible));
      el.style.setProperty('--exit-x',`${(index%2?1:-1)*95}px`);
    });
    const focus=selections[changedGroup]||selections[0]||'';
    let status=focus||item.tag;
    if(hasSpiceChoice)status=level===0?'免辣 · 辣椒移出画面':level===1?'微辣 · 撒入少量辣椒':level===2?'中辣 · 加入更多辣椒':'重辣 · 红椒热烈入场';
    else if(/加量|双人份|12 只/.test(focus))status='加大份量 · 食材层层叠起';
    else if(/去冰|少冰|正常冰/.test(focus))status=ice===0?'去冰 · 冰块离开杯中':ice===1?'少冰 · 留下一点清凉':'正常冰 · 冰块落入杯中';
    else if(/少甜|无糖|微糖|不加糖|不额外加糖/.test(focus))status=sweet===0?'无糖 · 甜味点缀撤去':'少甜 · 轻轻一点甜';
    else if(/少奶油/.test(focus))status='少奶油 · 奶油轻轻收起';
    else if(/双倍芝士/.test(focus))status='双倍芝士 · 拉丝层叠加倍';
    else if(/少油少盐/.test(focus))status='少油少盐 · 油润点缀收起';
    else if(/温饮/.test(focus))status='温饮 · 热气慢慢变轻';
    else if(/冰镇/.test(focus))status='冰镇 · 清凉冰晶浮现';
    else if(item.id==='caramel-pudding'&&/常温/.test(focus))status='常温 · 冰晶渐渐散去';
    if(initial&&profiles[item.id].lid)status='刚刚揭盖 · 热气扑面';
    stage.querySelector('#sceneStatus').textContent=status;
    if(initial){requestAnimationFrame(()=>requestAnimationFrame(()=>stage.classList.add('is-ready')))}
  }
  return {markup,update,profiles};
})();
