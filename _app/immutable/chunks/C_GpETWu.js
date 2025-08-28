import"./CWj6FrbW.js";import"./C8oO2EmT.js";import{f,b as p,Z as g,Y as k,X as R,L as bt,g as i,_ as H,E as vt,ap as V,i as w,s as gt,p as Q,o as j,A as Z,d as T,c as J,w as St,u as ht,e as L,h as G,a as K,af as xt,x as kt,y as Ct,G as Tt,z as Ot}from"./DR55oPxp.js";import{e as Y,i as X,p as tt,c as C,P as b,D as v,q as S,T as et,B}from"./BCIf1rfC.js";import{p as I}from"./BaGlGDV_.js";import{i as O,b as wt,s as At,a as It}from"./Bh59sFwt.js";import{s as Mt,L as Dt,a as Et,T as Ft}from"./D1aLmaMI.js";import{i as nt}from"./Be3gzhWN.js";var Pt=f("<button> </button>"),Ut=f('<div class="tab-bar svelte-s4l4fd"></div>');function Le(s,n){let o=I(n,"tabs",24,()=>[]),e=I(n,"activeTab",12);var t=Ut();Y(t,5,o,X,(a,c)=>{var _=Pt();let r;var l=k(_,!0);g(_),R(u=>{r=tt(_,1,"svelte-s4l4fd",null,r,u),H(l,(i(c),vt(()=>i(c).label)))},[()=>({selected:e()===i(c).key})],bt),V("click",_,()=>e(i(c).key)),p(a,_)}),g(t),p(s,t)}function Lt(s){const n=new Map;for(const e of s){const t=e.date;n.has(t)||n.set(t,{count_above_sma_20:0,count_above_sma_50:0,count_above_sma_200:0,count_in_column_x_pnf_1:0,count_in_column_o_pnf_1:0,count_in_column_x_pnf_3:0,count_in_column_o_pnf_3:0});const a=n.get(t);e.close>e.sma_20&&a.count_above_sma_20++,e.close>e.sma_50&&a.count_above_sma_50++,e.close>e.sma_200&&a.count_above_sma_200++,e.pnf1_box_type==="X"&&a.count_in_column_x_pnf_1++,e.pnf1_box_type==="O"&&a.count_in_column_o_pnf_1++,e.pnf3_box_type==="X"&&a.count_in_column_x_pnf_3++,e.pnf3_box_type==="O"&&a.count_in_column_o_pnf_3++}return Array.from(n.entries()).map(([e,t])=>({date:e,...t})).sort((e,t)=>t.date.localeCompare(e.date))}function Rt(s){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of s)for(const c of n)o.push({date:a.date.substring(0,10),sma_type:c.replace("count_above_sma_",""),count:a[c]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{mapping:{x:"date",y:"sma_type",fill:"count"},data:e,kind:"plot",scales:[{aesthetic:"fill",scale_mapper_kind:"color_gradient",low:"#a6bddb",high:"#2b8cbe"}],layers:[{geom:"tile",stat:"identity",position:"identity",color:"white",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function Bt(s){const n=[];for(const t of s)n.push({date:t.date.substring(0,10),column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:t.date.substring(0,10),column_type:"o",count:t.count_in_column_o_pnf_1});const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{mapping:{x:"date",y:"count",fill:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"fill",breaks:["x","o"],values:["#2b8cbe","#a6bddb"]}],layers:[{geom:"bar",stat:"identity",position:"dodge",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const Nt={name:"market_breadth_by_filter",async getSpecs(s){console.log("MarketBreadthByFilterChartProvider.getSpecs called with options:",s),console.log("MarketBreadthByFilterChartProvider.getSpecs called with options:",JSON.stringify(s));let o=await w(C).dailyTaAnalysisForLastMonthDataProvider.getJsonObject();if("needsSignIn"in o)return{needsSignIn:!0};s!=null&&s.tickerList&&s.tickerList.length>0&&(console.log("Filtering data for tickers:",s.tickerList),o=o.filter(_=>s.tickerList.includes(_.ticker)));const e=Lt(o),t=e.length>0?e[0].count_in_column_o_pnf_1+e[0].count_in_column_x_pnf_1:0,a=Rt(e),c=Bt(e);return{specs:[[{title:`Stocks above SMA, Total ${t}`,spec:a},{title:"Stocks in Pnf X/O columns",spec:c}]]}}};function $t(s){const n=new Map;for(const e of s){const t=e.industry||"Unknown",a={date:e.date,count_above_sma_20:e.count_above_sma_20,count_above_sma_50:e.count_above_sma_50,count_above_sma_200:e.count_above_sma_200,count_in_column_x_pnf_1:e.count_in_column_x_pnf_1,count_in_column_o_pnf_1:e.count_in_column_o_pnf_1,count_in_column_x_pnf_3:e.count_in_column_x_pnf_3,count_in_column_o_pnf_3:e.count_in_column_o_pnf_3};n.has(t)||n.set(t,[]),n.get(t).push(a)}const o=Array.from(n.entries());return o.sort(([,e],[,t])=>{const a=e.sort((l,u)=>u.date.localeCompare(l.date))[0],c=t.sort((l,u)=>u.date.localeCompare(l.date))[0],_=a.count_in_column_x_pnf_1+a.count_in_column_o_pnf_1;return c.count_in_column_x_pnf_1+c.count_in_column_o_pnf_1-_}),o}function qt(s){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of s)for(const c of n)o.push({date:a.date.substring(0,10),sma_type:c.replace("count_above_sma_",""),count:a[c]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{mapping:{x:"date",y:"sma_type",fill:"count"},data:e,kind:"plot",scales:[{aesthetic:"fill",scale_mapper_kind:"color_gradient",low:"#a6bddb",high:"#2b8cbe"}],layers:[{geom:"tile",stat:"identity",position:"identity",color:"white",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function Wt(s){const n=[];for(const t of s)n.push({date:t.date.substring(0,10),column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:t.date.substring(0,10),column_type:"o",count:t.count_in_column_o_pnf_1});const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{mapping:{x:"date",y:"count",fill:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"fill",breaks:["x","o"],values:["#2b8cbe","#a6bddb"]}],layers:[{geom:"bar",stat:"identity",position:"dodge",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const Yt=`
WITH recent_dates AS (
  SELECT DISTINCT date
  FROM \`${b}.${v}.${S}\`
  ORDER BY date DESC
  LIMIT 22
),
filtered_data AS (
  SELECT a.*,  m.industry
  FROM \`${b}.${v}.${S}\` a
  JOIN \`${b}.${v}.${et}\` m
  ON a.ticker = m.ticker
  WHERE date IN (SELECT date FROM recent_dates)
)
SELECT
  date,
  industry,
  COUNTIF(close > sma_20) AS count_above_sma_20,
  COUNTIF(close > sma_50) AS count_above_sma_50,
  COUNTIF(close > sma_200) AS count_above_sma_200,
  COUNTIF(pnf1_box_type = 'X') AS count_in_column_x_pnf_1,
  COUNTIF(pnf1_box_type = 'O') AS count_in_column_o_pnf_1,
  COUNTIF(pnf3_box_type = 'X') AS count_in_column_x_pnf_3,
  COUNTIF(pnf3_box_type = 'O') AS count_in_column_o_pnf_3,
  SUM(pnf1_box_x_count) AS new_column_x_pnf1,
  SUM(pnf1_box_o_count) AS new_column_o_pnf1,
  SUM(pnf3_box_x_count) AS new_column_x_pnf3,
  SUM(pnf3_box_o_count) AS new_column_o_pnf3
FROM filtered_data
GROUP BY date, industry
ORDER BY date DESC, industry;
`,Xt={name:"market_breadth_last_x_days_by_industry",async getSpecs(s){console.log("MarketBreadthByIndustryChartProvider.getSpecs called with options:",s);const o=await w(C).bqCacheService.queryAndCache(Yt);if("needsSignIn"in o&&o.needsSignIn)return{needsSignIn:!0};const e=o,t=B.arrayToObject(e.data,e.schema);let a=$t(t);return console.log("BigQuery Data:",a),s!=null&&s.industryList&&(a=a.filter(([_])=>s.industryList.includes(_))),{specs:a.map(([_,r])=>[{title:` ${_}: Stocks ${r[0].count_in_column_o_pnf_1+r[0].count_in_column_x_pnf_1} above SMA`,spec:qt(r)},{title:`${_}: Stocks in Pnf X/O columns`,spec:Wt(r)}])}}};function Ht(s){const n=new Map;for(const e of s){const t=e.sector||"Unknown",a={date:e.date,count_above_sma_20:e.count_above_sma_20,count_above_sma_50:e.count_above_sma_50,count_above_sma_200:e.count_above_sma_200,count_in_column_x_pnf_1:e.count_in_column_x_pnf_1,count_in_column_o_pnf_1:e.count_in_column_o_pnf_1,count_in_column_x_pnf_3:e.count_in_column_x_pnf_3,count_in_column_o_pnf_3:e.count_in_column_o_pnf_3};n.has(t)||n.set(t,[]),n.get(t).push(a)}const o=Array.from(n.entries());return o.sort(([,e],[,t])=>{const a=e.sort((l,u)=>u.date.localeCompare(l.date))[0],c=t.sort((l,u)=>u.date.localeCompare(l.date))[0],_=a.count_in_column_x_pnf_1+a.count_in_column_o_pnf_1;return c.count_in_column_x_pnf_1+c.count_in_column_o_pnf_1-_}),o}function Qt(s){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of s)for(const c of n)o.push({date:a.date.substring(0,10),sma_type:c.replace("count_above_sma_",""),count:a[c]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{mapping:{x:"date",y:"sma_type",fill:"count"},data:e,kind:"plot",scales:[{aesthetic:"fill",scale_mapper_kind:"color_gradient",low:"#a6bddb",high:"#2b8cbe"}],layers:[{geom:"tile",stat:"identity",position:"identity",color:"white",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function jt(s){const n=[];for(const t of s)n.push({date:t.date.substring(0,10),column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:t.date.substring(0,10),column_type:"o",count:t.count_in_column_o_pnf_1});const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{mapping:{x:"date",y:"count",fill:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"fill",breaks:["x","o"],values:["#2b8cbe","#a6bddb"]}],layers:[{geom:"bar",stat:"identity",position:"dodge",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const Jt=`
WITH recent_dates AS (
  SELECT DISTINCT date
  FROM \`${b}.${v}.${S}\`
  ORDER BY date DESC
  LIMIT 22
),
filtered_data AS (
  SELECT a.*,  m.sector
  FROM \`${b}.${v}.${S}\` a
  JOIN \`${b}.${v}.${et}\` m
  ON a.ticker = m.ticker
  WHERE date IN (SELECT date FROM recent_dates)
)
SELECT
  date,
  sector,
  COUNTIF(close > sma_20) AS count_above_sma_20,
  COUNTIF(close > sma_50) AS count_above_sma_50,
  COUNTIF(close > sma_200) AS count_above_sma_200,
  COUNTIF(pnf1_box_type = 'X') AS count_in_column_x_pnf_1,
  COUNTIF(pnf1_box_type = 'O') AS count_in_column_o_pnf_1,
  COUNTIF(pnf3_box_type = 'X') AS count_in_column_x_pnf_3,
  COUNTIF(pnf3_box_type = 'O') AS count_in_column_o_pnf_3,
  SUM(pnf1_box_x_count) AS new_column_x_pnf1,
  SUM(pnf1_box_o_count) AS new_column_o_pnf1,
  SUM(pnf3_box_x_count) AS new_column_x_pnf3,
  SUM(pnf3_box_o_count) AS new_column_o_pnf3
FROM filtered_data
GROUP BY date, sector
ORDER BY date DESC, sector;
`,zt={name:"market_breadth_last_x_days_by_sector",async getSpecs(s){console.log("MarketBreadthBySectorChartProvider.getSpecs called with options:",s);const o=await w(C).bqCacheService.queryAndCache(Jt);if("needsSignIn"in o&&o.needsSignIn)return{needsSignIn:!0};const e=o,t=B.arrayToObject(e.data,e.schema);let a=Ht(t);return s!=null&&s.sectorList&&(a=a.filter(([_])=>s.sectorList.includes(_))),console.log("BigQuery Data:",a),{specs:a.map(([_,r])=>[{title:` ${_}: Stocks ${r[0].count_in_column_o_pnf_1+r[0].count_in_column_x_pnf_1} above SMA`,spec:Qt(r)},{title:`${_}: Stocks in Pnf X/O columns`,spec:jt(r)}])}}};function Gt(s){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of s)for(const c of n)o.push({date:a.date.substring(0,10),sma_type:c.replace("count_above_sma_",""),count:a[c]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{mapping:{x:"date",y:"sma_type",fill:"count"},data:e,kind:"plot",scales:[{aesthetic:"fill",scale_mapper_kind:"color_gradient",low:"#a6bddb",high:"#2b8cbe"}],layers:[{geom:"tile",stat:"identity",position:"identity",color:"white",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function Kt(s){const n=[];for(const t of s)n.push({date:t.date.substring(0,10),column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:t.date.substring(0,10),column_type:"o",count:t.count_in_column_o_pnf_1});const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{mapping:{x:"date",y:"count",fill:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"fill",breaks:["x","o"],values:["#2b8cbe","#a6bddb"]}],layers:[{geom:"bar",stat:"identity",position:"dodge",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const Vt=`
WITH recent_dates AS (
  SELECT DISTINCT date
  FROM \`${b}.${v}.${S}\`
  ORDER BY date DESC
  LIMIT 22
),
filtered_data AS (
  SELECT *
  FROM \`${b}.${v}.${S}\`
  WHERE date IN (SELECT date FROM recent_dates)
)
SELECT
  date,
  COUNTIF(close > sma_20) AS count_above_sma_20,
  COUNTIF(close > sma_50) AS count_above_sma_50,
  COUNTIF(close > sma_200) AS count_above_sma_200,
  COUNTIF(pnf1_box_type = 'X') AS count_in_column_x_pnf_1,
  COUNTIF(pnf1_box_type = 'O') AS count_in_column_o_pnf_1,
  COUNTIF(pnf3_box_type = 'X') AS count_in_column_x_pnf_3,
  COUNTIF(pnf3_box_type = 'O') AS count_in_column_o_pnf_3,
  SUM(pnf1_box_x_count) AS new_column_x_pnf1,
  SUM(pnf1_box_o_count) AS new_column_o_pnf1,
  SUM(pnf3_box_x_count) AS new_column_x_pnf3,
  SUM(pnf3_box_o_count) AS new_column_o_pnf3
FROM filtered_data
GROUP BY date
ORDER BY date DESC
`,Zt={name:"market_breadth",async getSpecs(){const n=await w(C).bqCacheService.queryAndCache(Vt);if("needsSignIn"in n&&n.needsSignIn)return{needsSignIn:!0};const o=n,e=B.arrayToObject(o.data,o.schema).slice(0,7),t=e[0].count_in_column_o_pnf_1+e[0].count_in_column_x_pnf_1,a=Gt(e),c=Kt(e);return{specs:[[{title:`Stocks above SMA, Total ${t}`,spec:a},{title:"Stocks in Pnf X/O columns",spec:c}]]}}};function te(s){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of s)for(const c of n)o.push({date:a.date.substring(0,10),sma_type:c.replace("count_above_sma_",""),count:a[c]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{ggtitle:{text:"Stocks Above SMA Over Time"},mapping:{x:"date",y:"count",color:"sma_type"},data:e,kind:"plot",scales:[{aesthetic:"color",breaks:["20","50","200"],values:["#1f78b4","#33a02c","#e31a1c"]}],layers:[{geom:"line",stat:"identity",position:"identity",size:.8,mapping:{}}],theme:{axis_text_x:{angle:90,blank:!1}},data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function ee(s){const n=[];for(const t of s){const a=t.date.substring(0,10);n.push({date:a,column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:a,column_type:"o",count:t.count_in_column_o_pnf_1})}const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{ggtitle:{text:"PnF.1 Column Counts Over Time"},mapping:{x:"date",y:"count",color:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"color",breaks:["x","o"],values:["#33a02c","#e31a1c"]}],layers:[{geom:"line",stat:"identity",position:"identity",size:.8,mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}function ne(s){const n=[];for(const t of s){const a=t.date.substring(0,10);n.push({date:a,column_type:"x",count:t.count_in_column_x_pnf_3}),n.push({date:a,column_type:"o",count:t.count_in_column_o_pnf_3})}const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{ggtitle:{text:"PnF.3 Column Counts Over Time"},mapping:{x:"date",y:"count",color:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"color",breaks:["x","o"],values:["#33a02c","#e31a1c"]}],layers:[{geom:"line",stat:"identity",position:"identity",size:.8,mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const ae=`
WITH recent_mondays AS (
  SELECT DISTINCT date AS monday_date
  FROM  \`${b}.${v}.${S}\`
  WHERE EXTRACT(DAYOFWEEK FROM date) = 2  -- Monday
  ORDER BY date DESC
  LIMIT 104
),

-- Step 2: Week data for SUM()
week_data AS (
  SELECT
    m.monday_date,
    SUM(d.pnf1_box_x_count) AS new_column_x_pnf1,
    SUM(d.pnf1_box_o_count) AS new_column_o_pnf1,
    SUM(d.pnf3_box_x_count) AS new_column_x_pnf3,
    SUM(d.pnf3_box_o_count) AS new_column_o_pnf3
  FROM  \`${b}.${v}.${S}\` d
  JOIN recent_mondays m
    ON DATE_TRUNC(d.date, WEEK(MONDAY)) = m.monday_date
  GROUP BY m.monday_date
),

-- Step 3: Monday-only data for COUNTIF()
monday_data AS (
  SELECT
    d.date AS monday_date,
    COUNTIF(d.close > d.sma_20) AS count_above_sma_20,
    COUNTIF(d.close > d.sma_50) AS count_above_sma_50,
    COUNTIF(d.close > d.sma_200) AS count_above_sma_200,
    COUNTIF(d.pnf1_box_type = 'X') AS count_in_column_x_pnf_1,
    COUNTIF(d.pnf1_box_type = 'O') AS count_in_column_o_pnf_1,
    COUNTIF(d.pnf3_box_type = 'X') AS count_in_column_x_pnf_3,
    COUNTIF(d.pnf3_box_type = 'O') AS count_in_column_o_pnf_3
  FROM  \`${b}.${v}.${S}\` d
  JOIN recent_mondays m ON d.date = m.monday_date
  GROUP BY d.date
)

-- Final step: Join Monday counts + Week sums
SELECT
  m.monday_date AS date,
  m.count_above_sma_20,
  m.count_above_sma_50,
  m.count_above_sma_200,
  m.count_in_column_x_pnf_1,
  m.count_in_column_o_pnf_1,
  m.count_in_column_x_pnf_3,
  m.count_in_column_o_pnf_3,
  w.new_column_x_pnf1,
  w.new_column_o_pnf1,
  w.new_column_x_pnf3,
  w.new_column_o_pnf3
FROM monday_data m
LEFT JOIN week_data w
  ON m.monday_date = w.monday_date
ORDER BY date DESC;    
    `,oe={name:"market_breadth_weekly_aggression",async getSpecs(){const n=await w(C).bqCacheService.queryAndCache(ae);if("needsSignIn"in n&&n.needsSignIn)return{needsSignIn:!0};const o=n,e=B.arrayToObject(o.data,o.schema);return console.log("queryRes",e),{specs:[[{title:"Weekly Market Breadth Aggregation",spec:te(e)}],[{title:"PnF 3 percent Column Counts Over Time",spec:ne(e)}],[{title:"PnF 1 percent Column Counts Over Time",spec:ee(e)}]]}}};function se(s){const n={};for(const e of s)e.sector&&e.market_cap>0&&(n[e.industry]||(n[e.industry]=0),n[e.industry]+=e.market_cap);const o=Object.entries(n).map(([e,t])=>({industry:e,market_cap:t}));return ce(o)}function ce(s){const n=s.reduce((t,a)=>t+a.market_cap,0),o=[],e=[];for(const t of s)t.market_cap>0&&(o.push(t.industry||"Unknown"),e.push(t.market_cap/n*100));return{kind:"plot",data:{industry:o,percentage:e},mapping:{x:"industry",y:"percentage",fill:"industry"},ggtitle:{text:"Market Cap Share by industry (%)"},ggsize:{width:600,height:400},layers:[{geom:"bar",stat:"identity",position:"stack",mapping:{y:"percentage",fill:"industry"},width:1}],scales:[{aesthetic:"y",labels_format:".1f"}],data_meta:{series_annotations:[{type:"str",column:"industry"},{type:"float",column:"percentage"}]}}}const _e={name:"market_cap_by_industry",async getSpecs(){const n=await w(C).tickerDetailsDataProvider.getJsonObject();return"needsSignIn"in n?{needsSignIn:!0}:{specs:[[{title:"Market Cap by Industry",spec:se(n)}]]}}};function re(s){const n={};for(const e of s)e.sector&&e.market_cap>0&&(n[e.sector]||(n[e.sector]=0),n[e.sector]+=e.market_cap);const o=Object.entries(n).map(([e,t])=>({sector:e,market_cap:t}));return ie(o)}function ie(s){const n=s.reduce((t,a)=>t+a.market_cap,0),o=[],e=[];for(const t of s)t.market_cap>0&&(o.push(t.sector||"Unknown"),e.push(t.market_cap/n*100));return{kind:"plot",data:{sector:o,percentage:e},mapping:{},coord:{name:"polar",theta:"y"},ggtitle:{text:"Market Cap Share by Sector (%)"},ggsize:{width:600,height:400},layers:[{geom:"bar",stat:"identity",position:"stack",mapping:{y:"percentage",fill:"sector"},width:1}],scales:[{aesthetic:"y",labels_format:".1f"}],data_meta:{series_annotations:[{type:"str",column:"sector"},{type:"float",column:"percentage"}]}}}const ue={name:"market_cap_by_sector",async getSpecs(){const n=await w(C).tickerDetailsDataProvider.getJsonObject();return"needsSignIn"in n?{needsSignIn:!0}:(console.log("bigQueryData",n),{specs:[[{title:"Market Cap by Sector",spec:re(n)}]]})}},le={market_breadth_last_x_days:Zt,market_breadth_weekly_aggregation:oe,market_breadth_last_x_days_by_sector:zt,market_breadth_last_x_days_by_industry:Xt,market_cap_by_sector:ue,market_cap_by_industry:_e,market_breadth_by_filter:Nt};function pe(s){const n=le[s];if(!n)throw new Error(`Chart provider not found: ${s}`);return n}var me=f('<div class="title svelte-1ni0144"> </div>'),de=f('<div><!> <div class="content svelte-1ni0144"><!></div></div>');function fe(s,n){let o=I(n,"title",8,""),e=I(n,"scrollable",8,!1);var t=de(),a=k(t);{var c=l=>{var u=me(),m=k(u,!0);g(u),R(()=>H(m,o())),p(l,u)};O(a,l=>{o()&&l(c)})}var _=gt(a,2),r=k(_);Mt(r,n,"default",{}),g(_),g(t),R(()=>tt(t,1,`panel ${e()?"scrollable":""}`,"svelte-1ni0144")),p(s,t)}var ye=f('<div style="height: 400px;"></div>');function be(s,n){Q(n,!1);let o=I(n,"spec",8),e=Z(),t;j(async()=>{t=await Dt.waitForLetsPlot(),o()&&i(e)&&t.buildPlotFromRawSpecs(o(),i(e),{width_mode:"fit",height_mode:"fit"})}),nt();var a=ye();wt(a,c=>T(e,c),()=>i(e)),p(s,a),J()}var ve=f('<p class="text-gray-500 text-sm">Loading charts...</p>'),ge=f('<p class="text-yellow-500 text-sm">Please sign in to view this chart.</p>'),Se=f('<p class="text-red-600 text-sm"> </p>'),he=f('<div style="height: 400px; display: flex; align-items: center; justify-content: center;"><p class="text-gray-500 text-sm">Chart will load when in view...</p></div>'),xe=f("<div><!></div>"),ke=f('<div class="dashboard-row svelte-j4nvyq"></div>');function Re(s,n){Q(n,!0);const[o,e]=At(),t=()=>It(C,"$authStore",o);let a=L(null),c=L(!0),_=L(null),r=L(!1),l=ht(()=>t().hasAccessToken);St(()=>{i(l)&&(i(_)||i(r))&&u()});async function u(){try{const y=await pe(n.providerName).getSpecs(n.options);"needsSignIn"in y&&y.needsSignIn?T(r,!0):(T(r,!1),T(a,y.specs.map(M=>M.map(h=>({...h,visible:!1}))),!0))}catch(d){T(_,"Failed to load chart specs."),console.error(d)}finally{T(c,!1)}}j(async()=>{await u()});function m(d){const y=new IntersectionObserver(P=>{P.forEach(M=>{M.isIntersecting&&(d.dispatchEvent(new CustomEvent("enterViewport")),y.unobserve(d))})},{rootMargin:"200px 0px 200px 0px"});return y.observe(d),{destroy(){y.unobserve(d)}}}var F=G(),at=K(F);{var ot=d=>{var y=ve();p(d,y)},st=(d,y)=>{{var P=h=>{var N=ge();p(h,N)},M=(h,N)=>{{var ct=A=>{var D=Se(),$=k(D,!0);g(D),R(()=>H($,i(_))),p(A,D)},_t=(A,D)=>{{var $=q=>{var z=G(),rt=K(z);Y(rt,17,()=>i(a),X,(it,ut)=>{var W=ke();Y(W,21,()=>i(ut),X,(lt,U,Oe)=>{fe(lt,{get title(){return i(U).title},children:(pt,we)=>{var E=xe(),mt=k(E);{var dt=x=>{be(x,{get spec(){return i(U).spec}})},ft=x=>{var yt=he();p(x,yt)};O(mt,x=>{i(U).visible?x(dt):x(ft,!1)})}g(E),Et(E,x=>m==null?void 0:m(x)),V("enterViewport",E,()=>i(U).visible=!0),p(pt,E)},$$slots:{default:!0}})}),g(W),p(it,W)}),p(q,z)};O(A,q=>{i(a)&&q($)},D)}};O(h,A=>{i(_)?A(ct):A(_t,!1)},N)}};O(d,h=>{i(r)?h(P):h(M,!1)},y)}};O(at,d=>{i(c)?d(ot):d(st,!1)})}p(s,F),J(),e()}var Ce=f("<p>No ticker data available.</p>"),Te=f('<div class="popup-overlay svelte-8wp2eq"><div class="popup-content svelte-8wp2eq"><!></div></div>');function Be(s,n){Q(n,!1);const o=Z();let e=I(n,"rowData",8);const t=xt();function a(m){m.key==="Escape"&&t("close")}j(()=>{window.addEventListener("keydown",a)}),kt(()=>{window.removeEventListener("keydown",a)}),Ct(()=>Tt(e()),()=>{T(o,e()&&e().length>0?e()[0]:null)}),Ot(),nt();var c=Te(),_=k(c),r=k(_);{var l=m=>{Ft(m,{get ticker(){return i(o)}})},u=m=>{var F=Ce();p(m,F)};O(r,m=>{i(o)?m(l):m(u,!1)})}g(_),g(c),p(s,c),J()}export{Be as F,Re as L,Le as T};
