import{r as a,j as o,R as l,a as d}from"./client.wfddGqHm.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(){return a.useEffect(()=>{console.log("PopupSettings 組件已掛載"),updateDataStatus();const s=(i,n)=>{console.log("儲存變更事件觸發:",i),n==="local"&&(console.log("本地儲存變更, 更新資料狀態"),updateDataStatus())};chrome.storage.onChanged.addListener(s);const r=setInterval(()=>{console.log("定期檢查資料狀態"),updateDataStatus()},3e3);return()=>{console.log("清理 PopupSettings 組件"),chrome.storage.onChanged.removeListener(s),clearInterval(r)}},[]),o.jsxs("div",{className:"app-container",children:[o.jsx("h1",{children:"NHI Cloud Data Extractor"}),o.jsx("p",{children:"This is the main application component, but it's not used in the Chrome extension context."}),o.jsx("p",{children:"The extension functionality is provided through the content script and popup."})]})}l.createRoot(document.getElementById("root")).render(o.jsx(d.StrictMode,{children:o.jsx(u,{})}));
