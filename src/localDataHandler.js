/**
 * 本地資料處理器
 * 負責處理從本地上傳的 JSON 檔案，並將資料儲存到擴充功能變數中
 */

// 資料狀態追蹤
let localDataStatus = {
  loaded: false,
  source: '',
  dataTypes: []
};

/**
 * 處理本地 JSON 資料
 * @param {Object} jsonData - 解析後的 JSON 資料
 * @param {string} filename - 檔案名稱
 * @returns {Object} - 處理結果 {success, message, loadedTypes}
 */
export function processLocalData(jsonData, filename) {
  console.log('開始處理本地 JSON 資料:', filename);

  try {
    // 重置資料類型追蹤
    const loadedTypes = [];

    // 檢查不同種類的資料並處理
    if (jsonData.medication) {
      window.lastInterceptedMedicationData = JSON.parse(JSON.stringify(jsonData.medication));
      loadedTypes.push('medication');

      // 觸發資料載入完成事件
      triggerDataFetchCompleted('medication');
    }

    if (jsonData.lab) {
      window.lastInterceptedLabData = JSON.parse(JSON.stringify(jsonData.lab));
      loadedTypes.push('labData');

      triggerDataFetchCompleted('lab');
    }

    if (jsonData.chinesemed) {
      window.lastInterceptedChineseMedData = JSON.parse(JSON.stringify(jsonData.chinesemed));
      loadedTypes.push('chineseMed');

      triggerDataFetchCompleted('chinesemed');
    }

    if (jsonData.imaging) {
      window.lastInterceptedImagingData = JSON.parse(JSON.stringify(jsonData.imaging));
      loadedTypes.push('imaging');

      triggerDataFetchCompleted('imaging');
    }

    if (jsonData.allergy) {
      window.lastInterceptedAllergyData = JSON.parse(JSON.stringify(jsonData.allergy));
      loadedTypes.push('allergy');

      triggerDataFetchCompleted('allergy');
    }

    if (jsonData.surgery) {
      window.lastInterceptedSurgeryData = JSON.parse(JSON.stringify(jsonData.surgery));
      loadedTypes.push('surgery');

      triggerDataFetchCompleted('surgery');
    }

    if (jsonData.discharge) {
      window.lastInterceptedDischargeData = JSON.parse(JSON.stringify(jsonData.discharge));
      loadedTypes.push('discharge');

      triggerDataFetchCompleted('discharge');
    }

    if (jsonData.medDays) {
      window.lastInterceptedMedDaysData = JSON.parse(JSON.stringify(jsonData.medDays));
      loadedTypes.push('medDays');

      triggerDataFetchCompleted('medDays');
    }

    if (jsonData.patientSummary) {
      window.lastInterceptedPatientSummaryData = JSON.parse(JSON.stringify(jsonData.patientSummary));
      loadedTypes.push('patientSummary');

      triggerDataFetchCompleted('patientSummary');
    }

    // 更新資料狀態
    if (loadedTypes.length > 0) {
      localDataStatus = {
        loaded: true,
        source: filename,
        dataTypes: loadedTypes
      };

      // 通知擴充功能資料已載入
      notifyExtensionDataLoaded(filename, loadedTypes);

      return {
        success: true,
        message: `成功載入 ${loadedTypes.length} 種資料`,
        loadedTypes: loadedTypes
      };
    } else {
      return {
        success: false,
        message: '沒有找到可識別的資料類型',
        loadedTypes: []
      };
    }
  } catch (error) {
    console.error('處理本地 JSON 資料時出錯:', error);
    return {
      success: false,
      message: `處理資料時出錯: ${error.message}`,
      error: error
    };
  }
}

/**
 * 觸發資料載入完成事件
 * @param {string} dataType - 資料類型
 */
function triggerDataFetchCompleted(dataType) {
  // 使用 setTimeout 確保變量已完全初始化後再觸發事件
  setTimeout(() => {
    const customEvent = new CustomEvent("dataFetchCompleted", {
      detail: { type: dataType },
    });
    window.dispatchEvent(customEvent);
  }, 100);
}

/**
 * 通知擴充功能資料已載入
 * @param {string} source - 資料來源
 * @param {Array} dataTypes - 已載入的資料類型
 */
function notifyExtensionDataLoaded(source, dataTypes) {
  // 發送訊息給 background script
  chrome.runtime.sendMessage({
    action: "localDataLoaded",
    source: source,
    dataTypes: dataTypes
  });
}

/**
 * 清除所有本地資料
 * @returns {Object} - 處理結果 {success, message}
 */
export function clearLocalData() {
  try {
    // 清除全局變數
    window.lastInterceptedMedicationData = undefined;
    window.lastInterceptedLabData = undefined;
    window.lastInterceptedChineseMedData = undefined;
    window.lastInterceptedImagingData = undefined;
    window.lastInterceptedAllergyData = undefined;
    window.lastInterceptedSurgeryData = undefined;
    window.lastInterceptedDischargeData = undefined;
    window.lastInterceptedMedDaysData = undefined;
    window.lastInterceptedPatientSummaryData = undefined;

    // 重置狀態
    localDataStatus = {
      loaded: false,
      source: '',
      dataTypes: []
    };

    // 發送清除完成消息
    chrome.runtime.sendMessage({
      action: "localDataCleared"
    });

    return {
      success: true,
      message: '已清除所有本地資料'
    };
  } catch (error) {
    console.error('清除本地資料時出錯:', error);
    return {
      success: false,
      message: `清除資料時出錯: ${error.message}`
    };
  }
}

/**
 * 獲取本地資料狀態
 * @returns {Object} - 本地資料狀態
 */
export function getLocalDataStatus() {
  return { ...localDataStatus };
}