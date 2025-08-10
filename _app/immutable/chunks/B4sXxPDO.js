import"./CWj6FrbW.js";import{i as Z}from"./BW4E-qzc.js";import{f as b,b as l,r as v,h as C,t as N,H as bt,g as i,i as j,J as St,ao as tt,k as I,s as gt,p as Q,o as J,C as et,d as T,c as z,W as vt,u as ht,e as $,j as K,a as V,ag as xt,ae as Ct,A as kt,Z as Tt,B as Ot}from"./h7RsxPur.js";import{g as H,i as X,v as nt,P as m,D as d,x as g,b as k,B as w,T as q}from"./jBmkbK1o.js";import{p as A}from"./QaGTWfYB.js";import{i as O,b as It,s as wt,a as Et}from"./BQ8WIBQY.js";import{s as At,L as Mt,a as Dt,T as Rt}from"./DfcRE-jr.js";var Ft=b("<button> </button>"),Ut=b('<div class="tab-bar svelte-s4l4fd"></div>');function Me(c,n){let o=A(n,"tabs",24,()=>[]),e=A(n,"activeTab",12);var t=Ut();H(t,5,o,X,(a,s)=>{var _=Ft();let r;var u=C(_,!0);v(_),N(p=>{r=nt(_,1,"svelte-s4l4fd",null,r,p),j(u,(i(s),St(()=>i(s).label)))},[()=>({selected:e()===i(s).key})],bt),tt("click",_,()=>e(i(s).key)),l(a,_)}),v(t),l(c,t)}function Lt(c){const n=new Map;for(const e of c){const t=e.date;n.has(t)||n.set(t,{count_above_sma_20:0,count_above_sma_50:0,count_above_sma_200:0,count_in_column_x_pnf_1:0,count_in_column_o_pnf_1:0,count_in_column_x_pnf_3:0,count_in_column_o_pnf_3:0});const a=n.get(t);e.close>e.sma_20&&a.count_above_sma_20++,e.close>e.sma_50&&a.count_above_sma_50++,e.close>e.sma_200&&a.count_above_sma_200++,e.pnf1_box_type==="X"&&a.count_in_column_x_pnf_1++,e.pnf1_box_type==="O"&&a.count_in_column_o_pnf_1++,e.pnf3_box_type==="X"&&a.count_in_column_x_pnf_3++,e.pnf3_box_type==="O"&&a.count_in_column_o_pnf_3++}return Array.from(n.entries()).map(([e,t])=>({date:e,...t})).sort((e,t)=>t.date.localeCompare(e.date))}function $t(c){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of c)for(const s of n)o.push({date:a.date.substring(0,10),sma_type:s.replace("count_above_sma_",""),count:a[s]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{mapping:{x:"date",y:"sma_type",fill:"count"},data:e,kind:"plot",scales:[{aesthetic:"fill",scale_mapper_kind:"color_gradient",low:"#a6bddb",high:"#2b8cbe"}],layers:[{geom:"tile",stat:"identity",position:"identity",color:"white",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function Nt(c){const n=[];for(const t of c)n.push({date:t.date.substring(0,10),column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:t.date.substring(0,10),column_type:"o",count:t.count_in_column_o_pnf_1});const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{mapping:{x:"date",y:"count",fill:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"fill",breaks:["x","o"],values:["#2b8cbe","#a6bddb"]}],layers:[{geom:"bar",stat:"identity",position:"dodge",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const qt={name:"market_breadth_by_filter",query:`
    WITH recent_dates AS (
      SELECT DISTINCT date
      FROM \`${m}.${d}.${g}\`
      ORDER BY date DESC
      LIMIT 22
    )
    SELECT
      date,
      ticker,
      close,
      sma_20,
      sma_50,
      sma_200,
      pnf1_box_type,
      pnf3_box_type,
      pnf1_box_x_count,
      pnf1_box_o_count,
      pnf3_box_x_count,
      pnf3_box_o_count
    FROM \`${m}.${d}.${g}\`
    WHERE date IN (SELECT date FROM recent_dates)
    ORDER BY date DESC, ticker
  `,async getSpecs(c){console.log("MarketBreadthByFilterChartProvider.getSpecs called with options:",c),console.log("MarketBreadthByFilterChartProvider.getSpecs called with options:",JSON.stringify(c));const o=await I(k).bqCacheService.queryAndCache(this.query);if("needsSignIn"in o&&o.needsSignIn)return{needsSignIn:!0};const e=o;let t=w.arrayToObject(e.data,e.schema);c!=null&&c.tickerList&&c.tickerList.length>0&&(console.log("Filtering data for tickers:",c.tickerList),t=t.filter(u=>c.tickerList.includes(u.ticker)));const a=Lt(t),s=a.length>0?a[0].count_in_column_o_pnf_1+a[0].count_in_column_x_pnf_1:0,_=$t(a),r=Nt(a);return{specs:[[{title:`Stocks above SMA, Total ${s}`,spec:_},{title:"Stocks in Pnf X/O columns",spec:r}]]}}};function Bt(c){const n=new Map;for(const e of c){const t=e.industry||"Unknown",a={date:e.date,count_above_sma_20:e.count_above_sma_20,count_above_sma_50:e.count_above_sma_50,count_above_sma_200:e.count_above_sma_200,count_in_column_x_pnf_1:e.count_in_column_x_pnf_1,count_in_column_o_pnf_1:e.count_in_column_o_pnf_1,count_in_column_x_pnf_3:e.count_in_column_x_pnf_3,count_in_column_o_pnf_3:e.count_in_column_o_pnf_3};n.has(t)||n.set(t,[]),n.get(t).push(a)}const o=Array.from(n.entries());return o.sort(([,e],[,t])=>{const a=e.sort((u,p)=>p.date.localeCompare(u.date))[0],s=t.sort((u,p)=>p.date.localeCompare(u.date))[0],_=a.count_in_column_x_pnf_1+a.count_in_column_o_pnf_1;return s.count_in_column_x_pnf_1+s.count_in_column_o_pnf_1-_}),o}function Pt(c){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of c)for(const s of n)o.push({date:a.date.substring(0,10),sma_type:s.replace("count_above_sma_",""),count:a[s]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{mapping:{x:"date",y:"sma_type",fill:"count"},data:e,kind:"plot",scales:[{aesthetic:"fill",scale_mapper_kind:"color_gradient",low:"#a6bddb",high:"#2b8cbe"}],layers:[{geom:"tile",stat:"identity",position:"identity",color:"white",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function Wt(c){const n=[];for(const t of c)n.push({date:t.date.substring(0,10),column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:t.date.substring(0,10),column_type:"o",count:t.count_in_column_o_pnf_1});const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{mapping:{x:"date",y:"count",fill:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"fill",breaks:["x","o"],values:["#2b8cbe","#a6bddb"]}],layers:[{geom:"bar",stat:"identity",position:"dodge",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const Yt={name:"market_breadth_last_x_days_by_industry",query:`
WITH recent_dates AS (
  SELECT DISTINCT date
  FROM \`${m}.${d}.${g}\`
  ORDER BY date DESC
  LIMIT 22
),
filtered_data AS (
  SELECT a.*,  m.industry
  FROM \`${m}.${d}.${g}\` a
  JOIN \`${m}.${d}.${q}\` m
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
`,async getSpecs(c){console.log("MarketBreadthByIndustryChartProvider.getSpecs called with options:",c);const o=await I(k).bqCacheService.queryAndCache(this.query);if("needsSignIn"in o&&o.needsSignIn)return{needsSignIn:!0};const e=o,t=w.arrayToObject(e.data,e.schema);let a=Bt(t);return console.log("BigQuery Data:",a),c!=null&&c.industryList&&(a=a.filter(([_])=>c.industryList.includes(_))),{specs:a.map(([_,r])=>[{title:` ${_}: Stocks ${r[0].count_in_column_o_pnf_1+r[0].count_in_column_x_pnf_1} above SMA`,spec:Pt(r)},{title:`${_}: Stocks in Pnf X/O columns`,spec:Wt(r)}])}}};function Ht(c){const n=new Map;for(const e of c){const t=e.sector||"Unknown",a={date:e.date,count_above_sma_20:e.count_above_sma_20,count_above_sma_50:e.count_above_sma_50,count_above_sma_200:e.count_above_sma_200,count_in_column_x_pnf_1:e.count_in_column_x_pnf_1,count_in_column_o_pnf_1:e.count_in_column_o_pnf_1,count_in_column_x_pnf_3:e.count_in_column_x_pnf_3,count_in_column_o_pnf_3:e.count_in_column_o_pnf_3};n.has(t)||n.set(t,[]),n.get(t).push(a)}const o=Array.from(n.entries());return o.sort(([,e],[,t])=>{const a=e.sort((u,p)=>p.date.localeCompare(u.date))[0],s=t.sort((u,p)=>p.date.localeCompare(u.date))[0],_=a.count_in_column_x_pnf_1+a.count_in_column_o_pnf_1;return s.count_in_column_x_pnf_1+s.count_in_column_o_pnf_1-_}),o}function Xt(c){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of c)for(const s of n)o.push({date:a.date.substring(0,10),sma_type:s.replace("count_above_sma_",""),count:a[s]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{mapping:{x:"date",y:"sma_type",fill:"count"},data:e,kind:"plot",scales:[{aesthetic:"fill",scale_mapper_kind:"color_gradient",low:"#a6bddb",high:"#2b8cbe"}],layers:[{geom:"tile",stat:"identity",position:"identity",color:"white",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function jt(c){const n=[];for(const t of c)n.push({date:t.date.substring(0,10),column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:t.date.substring(0,10),column_type:"o",count:t.count_in_column_o_pnf_1});const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{mapping:{x:"date",y:"count",fill:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"fill",breaks:["x","o"],values:["#2b8cbe","#a6bddb"]}],layers:[{geom:"bar",stat:"identity",position:"dodge",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const Qt={name:"market_breadth_last_x_days_by_sector",query:`
  WITH recent_dates AS (
    SELECT DISTINCT date
    FROM \`${m}.${d}.${g}\`
    ORDER BY date DESC
    LIMIT 22
  ),
  filtered_data AS (
    SELECT a.*,  m.sector
    FROM \`${m}.${d}.${g}\` a
    JOIN \`${m}.${d}.${q}\` m
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
  `,async getSpecs(c){console.log("MarketBreadthBySectorChartProvider.getSpecs called with options:",c);const o=await I(k).bqCacheService.queryAndCache(this.query);if("needsSignIn"in o&&o.needsSignIn)return{needsSignIn:!0};const e=o,t=w.arrayToObject(e.data,e.schema);let a=Ht(t);return c!=null&&c.sectorList&&(a=a.filter(([_])=>c.sectorList.includes(_))),console.log("BigQuery Data:",a),{specs:a.map(([_,r])=>[{title:` ${_}: Stocks ${r[0].count_in_column_o_pnf_1+r[0].count_in_column_x_pnf_1} above SMA`,spec:Xt(r)},{title:`${_}: Stocks in Pnf X/O columns`,spec:jt(r)}])}}};function Jt(c){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of c)for(const s of n)o.push({date:a.date.substring(0,10),sma_type:s.replace("count_above_sma_",""),count:a[s]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{mapping:{x:"date",y:"sma_type",fill:"count"},data:e,kind:"plot",scales:[{aesthetic:"fill",scale_mapper_kind:"color_gradient",low:"#a6bddb",high:"#2b8cbe"}],layers:[{geom:"tile",stat:"identity",position:"identity",color:"white",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function zt(c){const n=[];for(const t of c)n.push({date:t.date.substring(0,10),column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:t.date.substring(0,10),column_type:"o",count:t.count_in_column_o_pnf_1});const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{mapping:{x:"date",y:"count",fill:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"fill",breaks:["x","o"],values:["#2b8cbe","#a6bddb"]}],layers:[{geom:"bar",stat:"identity",position:"dodge",mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const Gt={name:"market_breadth",query:`
WITH recent_dates AS (
  SELECT DISTINCT date
  FROM \`${m}.${d}.${g}\`
  ORDER BY date DESC
  LIMIT 22
),
filtered_data AS (
  SELECT *
  FROM \`${m}.${d}.${g}\`
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
`,async getSpecs(){const n=await I(k).bqCacheService.queryAndCache(this.query);if("needsSignIn"in n&&n.needsSignIn)return{needsSignIn:!0};const o=n,e=w.arrayToObject(o.data,o.schema).slice(0,7),t=e[0].count_in_column_o_pnf_1+e[0].count_in_column_x_pnf_1,a=Jt(e),s=zt(e);return{specs:[[{title:`Stocks above SMA, Total ${t}`,spec:a},{title:"Stocks in Pnf X/O columns",spec:s}]]}}};function Kt(c){const n=["count_above_sma_20","count_above_sma_50","count_above_sma_200"],o=[];for(const a of c)for(const s of n)o.push({date:a.date.substring(0,10),sma_type:s.replace("count_above_sma_",""),count:a[s]});const e={date:o.map(a=>a.date),sma_type:o.map(a=>a.sma_type),count:o.map(a=>a.count)};return{ggtitle:{text:"Stocks Above SMA Over Time"},mapping:{x:"date",y:"count",color:"sma_type"},data:e,kind:"plot",scales:[{aesthetic:"color",breaks:["20","50","200"],values:["#1f78b4","#33a02c","#e31a1c"]}],layers:[{geom:"line",stat:"identity",position:"identity",size:.8,mapping:{}}],theme:{axis_text_x:{angle:90,blank:!1}},data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"sma_type"},{type:"int",column:"count"}]}}}function Vt(c){const n=[];for(const t of c){const a=t.date.substring(0,10);n.push({date:a,column_type:"x",count:t.count_in_column_x_pnf_1}),n.push({date:a,column_type:"o",count:t.count_in_column_o_pnf_1})}const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{ggtitle:{text:"PnF.1 Column Counts Over Time"},mapping:{x:"date",y:"count",color:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"color",breaks:["x","o"],values:["#33a02c","#e31a1c"]}],layers:[{geom:"line",stat:"identity",position:"identity",size:.8,mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}function Zt(c){const n=[];for(const t of c){const a=t.date.substring(0,10);n.push({date:a,column_type:"x",count:t.count_in_column_x_pnf_3}),n.push({date:a,column_type:"o",count:t.count_in_column_o_pnf_3})}const o={date:n.map(t=>t.date),column_type:n.map(t=>t.column_type),count:n.map(t=>t.count)};return{ggtitle:{text:"PnF.3 Column Counts Over Time"},mapping:{x:"date",y:"count",color:"column_type"},data:o,kind:"plot",scales:[{aesthetic:"color",breaks:["x","o"],values:["#33a02c","#e31a1c"]}],layers:[{geom:"line",stat:"identity",position:"identity",size:.8,mapping:{}}],data_meta:{series_annotations:[{type:"str",column:"date"},{type:"str",column:"column_type"},{type:"int",column:"count"}]}}}const te={name:"market_breadth_weekly_aggression",query:`
WITH recent_mondays AS (
  SELECT DISTINCT date AS monday_date
  FROM  \`${m}.${d}.${g}\`
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
  FROM  \`${m}.${d}.${g}\` d
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
  FROM  \`${m}.${d}.${g}\` d
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
    `,async getSpecs(){const n=await I(k).bqCacheService.queryAndCache(this.query);if("needsSignIn"in n&&n.needsSignIn)return{needsSignIn:!0};const o=n,e=w.arrayToObject(o.data,o.schema);return console.log("queryRes",e),{specs:[[{title:"Weekly Market Breadth Aggregation",spec:Kt(e)}],[{title:"PnF 3 percent Column Counts Over Time",spec:Zt(e)}],[{title:"PnF 1 percent Column Counts Over Time",spec:Vt(e)}]]}}};function ee(c){const n={};for(const e of c)e.sector&&e.market_cap>0&&(n[e.industry]||(n[e.industry]=0),n[e.industry]+=e.market_cap);const o=Object.entries(n).map(([e,t])=>({industry:e,market_cap:t}));return ne(o)}function ne(c){const n=c.reduce((t,a)=>t+a.market_cap,0),o=[],e=[];for(const t of c)t.market_cap>0&&(o.push(t.industry||"Unknown"),e.push(t.market_cap/n*100));return{kind:"plot",data:{industry:o,percentage:e},mapping:{x:"industry",y:"percentage",fill:"industry"},ggtitle:{text:"Market Cap Share by industry (%)"},ggsize:{width:600,height:400},layers:[{geom:"bar",stat:"identity",position:"stack",mapping:{y:"percentage",fill:"industry"},width:1}],scales:[{aesthetic:"y",labels_format:".1f"}],data_meta:{series_annotations:[{type:"str",column:"industry"},{type:"float",column:"percentage"}]}}}const ae={name:"market_cap_by_industry",query:`SELECT ticker, sector, industry, market_cap, pe_ratio FROM \`${m}.${d}.${q}\``,async getSpecs(){const n=await I(k).bqCacheService.queryAndCache(this.query);if("needsSignIn"in n&&n.needsSignIn)return{needsSignIn:!0};const o=n,e=w.arrayToObject(o.data,o.schema);return console.log("bigQueryData",e),{specs:[[{title:"Market Cap by Industry",spec:ee(e)}]]}}};function oe(c){const n={};for(const e of c)e.sector&&e.market_cap>0&&(n[e.sector]||(n[e.sector]=0),n[e.sector]+=e.market_cap);const o=Object.entries(n).map(([e,t])=>({sector:e,market_cap:t}));return ce(o)}function ce(c){const n=c.reduce((t,a)=>t+a.market_cap,0),o=[],e=[];for(const t of c)t.market_cap>0&&(o.push(t.sector||"Unknown"),e.push(t.market_cap/n*100));return{kind:"plot",data:{sector:o,percentage:e},mapping:{},coord:{name:"polar",theta:"y"},ggtitle:{text:"Market Cap Share by Sector (%)"},ggsize:{width:600,height:400},layers:[{geom:"bar",stat:"identity",position:"stack",mapping:{y:"percentage",fill:"sector"},width:1}],scales:[{aesthetic:"y",labels_format:".1f"}],data_meta:{series_annotations:[{type:"str",column:"sector"},{type:"float",column:"percentage"}]}}}const se={name:"market_cap_by_sector",query:`SELECT ticker, sector, industry, market_cap, pe_ratio FROM \`${m}.${d}.${q}\``,async getSpecs(){const n=await I(k).bqCacheService.queryAndCache(this.query);if("needsSignIn"in n&&n.needsSignIn)return{needsSignIn:!0};const o=n,e=w.arrayToObject(o.data,o.schema);return console.log("bigQueryData",e),{specs:[[{title:"Market Cap by Sector",spec:oe(e)}]]}}},_e={market_breadth_last_x_days:Gt,market_breadth_weekly_aggregation:te,market_breadth_last_x_days_by_sector:Qt,market_breadth_last_x_days_by_industry:Yt,market_cap_by_sector:se,market_cap_by_industry:ae,market_breadth_by_filter:qt};function re(c){const n=_e[c];if(!n)throw new Error(`Chart provider not found: ${c}`);return n}var ie=b('<div class="title svelte-1ni0144"> </div>'),ue=b('<div><!> <div class="content svelte-1ni0144"><!></div></div>');function pe(c,n){let o=A(n,"title",8,""),e=A(n,"scrollable",8,!1);var t=ue(),a=C(t);{var s=u=>{var p=ie(),f=C(p,!0);v(p),N(()=>j(f,o())),l(u,p)};O(a,u=>{o()&&u(s)})}var _=gt(a,2),r=C(_);At(r,n,"default",{}),v(_),v(t),N(()=>nt(t,1,`panel ${e()?"scrollable":""}`,"svelte-1ni0144")),l(c,t)}var le=b('<div style="height: 400px;"></div>');function me(c,n){Q(n,!1);let o=A(n,"spec",8),e=et(),t;J(async()=>{t=await Mt.waitForLetsPlot(),o()&&i(e)&&t.buildPlotFromRawSpecs(o(),i(e),{width_mode:"fit",height_mode:"fit"})}),Z();var a=le();It(a,s=>T(e,s),()=>i(e)),l(c,a),z()}var de=b('<p class="text-gray-500 text-sm">Loading charts...</p>'),fe=b('<p class="text-yellow-500 text-sm">Please sign in to view this chart.</p>'),ye=b('<p class="text-red-600 text-sm"> </p>'),be=b('<div style="height: 400px; display: flex; align-items: center; justify-content: center;"><p class="text-gray-500 text-sm">Chart will load when in view...</p></div>'),Se=b("<div><!></div>"),ge=b('<div class="dashboard-row svelte-j4nvyq"></div>');function De(c,n){Q(n,!0);const[o,e]=wt(),t=()=>Et(k,"$authStore",o);let a=$(null),s=$(!0),_=$(null),r=$(!1),u=ht(()=>t().hasAccessToken);vt(()=>{i(u)&&(i(_)||i(r))&&p()});async function p(){try{const S=await re(n.providerName).getSpecs(n.options);"needsSignIn"in S&&S.needsSignIn?T(r,!0):(T(r,!1),T(a,S.specs.map(M=>M.map(h=>({...h,visible:!1}))),!0))}catch(y){T(_,"Failed to load chart specs."),console.error(y)}finally{T(s,!1)}}J(async()=>{await p()});function f(y){const S=new IntersectionObserver(U=>{U.forEach(M=>{M.isIntersecting&&(y.dispatchEvent(new CustomEvent("enterViewport")),S.unobserve(y))})},{rootMargin:"200px 0px 200px 0px"});return S.observe(y),{destroy(){S.unobserve(y)}}}var F=K(),at=V(F);{var ot=y=>{var S=de();l(y,S)},ct=(y,S)=>{{var U=h=>{var B=fe();l(h,B)},M=(h,B)=>{{var st=E=>{var D=ye(),P=C(D,!0);v(D),N(()=>j(P,i(_))),l(E,D)},_t=(E,D)=>{{var P=W=>{var G=K(),rt=V(G);H(rt,17,()=>i(a),X,(it,ut)=>{var Y=ge();H(Y,21,()=>i(ut),X,(pt,L,xe)=>{pe(pt,{get title(){return i(L).title},children:(lt,Ce)=>{var R=Se(),mt=C(R);{var dt=x=>{me(x,{get spec(){return i(L).spec}})},ft=x=>{var yt=be();l(x,yt)};O(mt,x=>{i(L).visible?x(dt):x(ft,!1)})}v(R),Dt(R,x=>f==null?void 0:f(x)),tt("enterViewport",R,()=>i(L).visible=!0),l(lt,R)},$$slots:{default:!0}})}),v(Y),l(it,Y)}),l(W,G)};O(E,W=>{i(a)&&W(P)},D)}};O(h,E=>{i(_)?E(st):E(_t,!1)},B)}};O(y,h=>{i(r)?h(U):h(M,!1)},S)}};O(at,y=>{i(s)?y(ot):y(ct,!1)})}l(c,F),z(),e()}var ve=b("<p>No ticker data available.</p>"),he=b('<div class="popup-overlay svelte-8wp2eq"><div class="popup-content svelte-8wp2eq"><!></div></div>');function Re(c,n){Q(n,!1);const o=et();let e=A(n,"rowData",8);const t=xt();function a(f){f.key==="Escape"&&t("close")}J(()=>{window.addEventListener("keydown",a)}),Ct(()=>{window.removeEventListener("keydown",a)}),kt(()=>Tt(e()),()=>{T(o,e()&&e().length>0?e()[0]:null)}),Ot(),Z();var s=he(),_=C(s),r=C(_);{var u=f=>{Rt(f,{get ticker(){return i(o)}})},p=f=>{var F=ve();l(f,F)};O(r,f=>{i(o)?f(u):f(p,!1)})}v(_),v(s),l(c,s),z()}export{Re as F,De as L,Me as T};
