(()=>{var a={medicationData:null,labData:null,chinesemedData:null,imagingData:null,allergyData:null,surgeryData:null,dischargeData:null,medDaysData:null,patientSummaryData:null,token:null,currentUserSession:null},i={allergy:"medcloud2.nhi.gov.tw/imu/api/imue0040/imue0040s02/get-data",surgery:"medcloud2.nhi.gov.tw/imu/api/imue0020/imue0020s02/get-data",discharge:"medcloud2.nhi.gov.tw/imu/api/imue0070/imue0070s02/get-data",medDays:"medcloud2.nhi.gov.tw/imu/api/imue0120/imue0120s01/pres-med-day",patientSummary:"medcloud2.nhi.gov.tw/imu/api/imue2000/imue2000s01/get-summary"};Object.entries(i).forEach(([e,n])=>{chrome.webRequest.onBeforeRequest.addListener(function(t){return t.method==="GET"&&t.url.includes(n)&&(console.log(`Detected ${e} API request:`,t.url),chrome.tabs.sendMessage(t.tabId,{action:"apiCallDetected",url:t.url,type:e})),{cancel:!1}},{urls:[`https://${n}*`]},["requestBody"]),chrome.webRequest.onCompleted.addListener(function(t){t.method==="GET"&&t.url.includes(n)&&(console.log(`Completed ${e} API request:`,t.url),chrome.tabs.sendMessage(t.tabId,{action:"apiCallCompleted",url:t.url,statusCode:t.statusCode,type:e}))},{urls:[`https://${n}*`]},["responseHeaders"])});chrome.webRequest.onBeforeRequest.addListener(function(e){return e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue0090/imue0090s02/get-data")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallDetected",url:e.url,type:"chinesemed"}),{cancel:!1}},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue0090/imue0090s02/get-data*"]},["requestBody"]);chrome.webRequest.onBeforeRequest.addListener(function(e){return e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue0130/imue0130s02/get-data")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallDetected",url:e.url,type:"imaging"}),{cancel:!1}},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue0130/imue0130s02/get-data*"]},["requestBody"]);chrome.webRequest.onCompleted.addListener(function(e){e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue0090/imue0090s02/get-data")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallCompleted",url:e.url,statusCode:e.statusCode,type:"chinesemed"})},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue0090/imue0090s02/get-data*"]},["responseHeaders"]);chrome.webRequest.onCompleted.addListener(function(e){e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue0130/imue0130s02/get-data")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallCompleted",url:e.url,statusCode:e.statusCode,type:"imaging"})},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue0130/imue0130s02/get-data*"]},["responseHeaders"]);chrome.webRequest.onBeforeRequest.addListener(function(e){return e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue0008/imue0008s02/get-data")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallDetected",url:e.url,type:"medication"}),{cancel:!1}},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue0008/imue0008s02/get-data*"]},["requestBody"]);chrome.webRequest.onBeforeRequest.addListener(function(e){return e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue0060/imue0060s02/get-data")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallDetected",url:e.url,type:"labdata"}),{cancel:!1}},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue0060/imue0060s02/get-data*"]},["requestBody"]);chrome.webRequest.onCompleted.addListener(function(e){e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue0008/imue0008s02/get-data")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallCompleted",url:e.url,statusCode:e.statusCode,type:"medication"})},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue0008/imue0008s02/get-data*"]},["responseHeaders"]);chrome.webRequest.onCompleted.addListener(function(e){e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue0060/imue0060s02/get-data")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallCompleted",url:e.url,statusCode:e.statusCode,type:"labdata"})},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue0060/imue0060s02/get-data*"]},["responseHeaders"]);chrome.webRequest.onBeforeRequest.addListener(function(e){return e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue2000/imue2000s01/get-summary")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallDetected",url:e.url,type:"patientSummary"}),{cancel:!1}},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue2000/imue2000s01/get-summary*"]},["requestBody"]);chrome.webRequest.onCompleted.addListener(function(e){e.method==="GET"&&e.url.includes("medcloud2.nhi.gov.tw/imu/api/imue2000/imue2000s01/get-summary")&&chrome.tabs.sendMessage(e.tabId,{action:"apiCallCompleted",url:e.url,statusCode:e.statusCode,type:"patientSummary"})},{urls:["https://medcloud2.nhi.gov.tw/imu/api/imue2000/imue2000s01/get-summary*"]},["responseHeaders"]);chrome.runtime.onMessage.addListener((e,n,t)=>{let u={saveAllergyData:"allergyData",saveSurgeryData:"surgeryData",saveDischargeData:"dischargeData",saveMedDaysData:"medDaysData",savePatientSummaryData:"patientSummaryData"};if(e.action==="openPopup"&&chrome.action.openPopup(),Object.keys(u).includes(e.action)){let r=u[e.action];return a[r]=e.data,a.currentUserSession=e.userSession||a.currentUserSession,chrome.storage.local.set({[r]:e.data,currentUserSession:e.userSession||a.currentUserSession},function(){chrome.action.setBadgeText({text:"\u2713"}),chrome.action.setBadgeBackgroundColor({color:"#4CAF50"}),e.data&&e.data.rObject&&Array.isArray(e.data.rObject)?t({status:"saved",recordCount:e.data.rObject.length}):t({status:"saved",recordCount:0,error:"Invalid data format"})}),!0}return e.action==="saveChineseMedData"?(a.chinesemedData=e.data,a.currentUserSession=e.userSession||a.currentUserSession,chrome.storage.local.set({chinesemedData:e.data,currentUserSession:e.userSession||a.currentUserSession},function(){chrome.action.setBadgeText({text:"\u2713"}),chrome.action.setBadgeBackgroundColor({color:"#4CAF50"}),e.data&&e.data.rObject&&Array.isArray(e.data.rObject)?t({status:"saved",recordCount:e.data.rObject.length}):t({status:"saved",recordCount:0,error:"Invalid data format"})}),!0):e.action==="saveImagingData"?(a.imagingData=e.data,a.currentUserSession=e.userSession||a.currentUserSession,chrome.storage.local.set({imagingData:e.data,currentUserSession:e.userSession||a.currentUserSession},function(){chrome.action.setBadgeText({text:"\u2713"}),chrome.action.setBadgeBackgroundColor({color:"#4CAF50"}),e.data&&e.data.rObject&&Array.isArray(e.data.rObject)?t({status:"saved",recordCount:e.data.rObject.length}):t({status:"saved",recordCount:0,error:"Invalid data format"})}),!0):e.action==="userSessionChanged"?(a={medicationData:null,labData:null,chinesemedData:null,imagingData:null,allergyData:null,surgeryData:null,dischargeData:null,medDaysData:null,patientSummaryData:null,token:null,currentUserSession:e.userSession},chrome.storage.local.remove(["medicationData","labData","chinesemedData","imagingData","allergyData","surgeryData","dischargeData","medDaysData","patientSummaryData"],function(){chrome.action.setBadgeText({text:""})}),t({status:"session_reset"}),!0):e.action==="clearSessionData"?(a={medicationData:null,labData:null,chinesemedData:null,imagingData:null,token:null,currentUserSession:null},t({status:"cleared"}),!0):(e.userSession&&e.userSession!==a.currentUserSession&&(a={medicationData:null,labData:null,token:null,currentUserSession:e.userSession}),e.action==="saveMedicationData"?(a.medicationData=e.data,a.currentUserSession=e.userSession||a.currentUserSession,chrome.storage.local.set({medicationData:e.data,currentUserSession:e.userSession||a.currentUserSession},function(){chrome.action.setBadgeText({text:"\u2713"}),chrome.action.setBadgeBackgroundColor({color:"#4CAF50"}),e.data&&e.data.rObject&&Array.isArray(e.data.rObject)?t({status:"saved",recordCount:e.data.rObject.length}):t({status:"saved",recordCount:0,error:"Invalid data format"})}),!0):e.action==="saveLabData"?(a.labData=e.data,a.currentUserSession=e.userSession||a.currentUserSession,chrome.storage.local.set({labData:e.data,currentUserSession:e.userSession||a.currentUserSession},function(){chrome.action.setBadgeText({text:"\u2713"}),chrome.action.setBadgeBackgroundColor({color:"#4CAF50"}),e.data&&e.data.rObject&&Array.isArray(e.data.rObject)?t({status:"saved",recordCount:e.data.rObject.length}):t({status:"saved",recordCount:0,error:"Invalid data format"})}),!0):e.action==="saveToken"?(a.token=e.token,a.currentUserSession=e.userSession||a.currentUserSession,t({status:"token_saved"}),!0):e.action==="getSessionData"?(t({status:"success",data:a}),!0):e.action==="getDataStatus"?(chrome.storage.local.get(["medicationData","labData","chinesemedData","imagingData","allergyData","surgeryData","dischargeData","medDaysData","patientSummaryData"],r=>{console.log("STORAGE DATA DEBUG:",r);let o={};r.medicationData?.rObject?o.medication={status:"fetched",count:r.medicationData.rObject.length}:o.medication={status:"none",count:0},r.labData?.rObject?o.labData={status:"fetched",count:r.labData.rObject.length}:o.labData={status:"none",count:0},r.chinesemedData?.rObject?o.chineseMed={status:"fetched",count:r.chinesemedData.rObject.length}:o.chineseMed={status:"none",count:0},r.imagingData?.rObject?(console.log("IMAGING DEBUG:",r.imagingData),o.imaging={status:"fetched",count:r.imagingData.rObject.length}):(console.log("IMAGING NOT FOUND OR INVALID FORMAT:",r.imagingData),o.imaging={status:"none",count:0}),r.allergyData?.rObject?o.allergy={status:"fetched",count:r.allergyData.rObject.length}:o.allergy={status:"none",count:0},r.surgeryData?.rObject?o.surgery={status:"fetched",count:r.surgeryData.rObject.length}:o.surgery={status:"none",count:0},r.dischargeData?.rObject?o.discharge={status:"fetched",count:r.dischargeData.rObject.length}:o.discharge={status:"none",count:0},r.medDaysData?.rObject?o.medDays={status:"fetched",count:r.medDaysData.rObject.length}:o.medDays={status:"none",count:0},r.patientSummaryData?.robject?o.patientSummary={status:"fetched",count:r.patientSummaryData.robject.length}:r.patientSummaryData?.rObject?o.patientSummary={status:"fetched",count:r.patientSummaryData.rObject.length}:o.patientSummary={status:"none",count:0},t({dataStatus:o})}),!0):(t({status:"received"}),!0))});chrome.tabs.onUpdated.addListener((e,n,t)=>{n.url&&(n.url.includes("medcloud2.nhi.gov.tw/imu/login")||n.url.includes("medcloud2.nhi.gov.tw/imu/IMUE1000/IMUE0001"))&&(console.log("Detected navigation to login page, clearing session data"),a={medicationData:null,labData:null,token:null,currentUserSession:null},chrome.storage.local.remove(["medicationData","labData","currentUserSession"],function(){console.log("Storage data cleared due to logout"),chrome.action.setBadgeText({text:""})}))});})();
