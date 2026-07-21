import { chromium } from "playwright";
const OUT="/private/tmp/claude-501/-Users-amanrasheed-Desktop-belifehome/526bbce9-e3da-418c-8689-34c9b306d3c3/scratchpad";
const b=await chromium.launch({headless:true});
for(const w of [320,360,390,414,430,620,768,1440]){
  const p=await b.newPage({viewport:{width:w,height:800},deviceScaleFactor:2});
  await p.goto("http://localhost:4319",{waitUntil:"networkidle"});
  await p.waitForTimeout(700);
  const dock=await p.locator(".bl-dock").boundingBox();
  const label=await p.locator(".bl-dock-label").boundingBox();
  const call=await p.locator(".bl-dock-call").boundingBox();
  const hOverflow=await p.evaluate(()=>document.documentElement.scrollWidth>window.innerWidth);
  const labelVisible=await p.locator(".bl-dock-label").isVisible();
  const fits = dock.x>=0 && (dock.x+dock.width)<=w;
  console.log(
    String(w).padStart(4),
    "dock:", Math.round(dock.width)+"px",
    "| x:", Math.round(dock.x),"->",Math.round(dock.x+dock.width),
    "| label:", labelVisible?Math.round(label.width)+"px":"HIDDEN",
    "| call:", Math.round(call.width)+"px",
    "| fits:", fits, "| h-overflow:", hOverflow
  );
  if(w===320||w===390) await p.locator(".bl-dock").screenshot({path:`${OUT}/dock-${w}.png`});
  await p.close();
}
await b.close();
