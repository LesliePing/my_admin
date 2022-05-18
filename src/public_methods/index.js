/**
 * @/public_methods/index.js
 * 公共方法集合提供调用
 * return Func()
 * 2020-06-03
 * Author: Erik
 */

// 驾驶员信息处理方法
export function handleDriverInfo(arr) {
  arr.forEach((element) => {
    if (element.driverSex === 1) {
      element.driverSex = '("PlaceHolder.Male")';
    }
    if (element.driverSex === 2) {
      element.driverSex = '("PlaceHolder.Female")';
    }
  });
  return arr;
}

// 解密方法
export function Decrypt(word) {
  return word;
}

// 加密方法
export function Encrypt(word) {
  return word;
}

// 设备信息处理方法
export function handleDeviceInfo(arr) {
  arr.forEach((element) => {
    if (element.status === 0) {
      element.status = "AllSituation.onLine";
    }
    if (element.status === 1) {
      element.status = "AllSituation.offLine";
    }
    if (element.status === 2) {
      element.status = "AllSituation.warning";
    }
  });
}
// 车辆信息处理方法
export function handleVehicleInfo(arr) {
  arr.forEach((element) => {
    switch (element.licensePlateType) {
      case 0:
        element.licensePlateType = "蓝牌";
        break;
      case 1:
        element.licensePlateType = "黄牌";
        break;
      case 2:
        element.licensePlateType = "黑牌";
        break;
      case 3:
        element.licensePlateType = "白牌";
        break;
      case 4:
        element.licensePlateType = "绿牌";
        break;
      default:
        element.licensePlateType = "其他";
        break;
    }
  });
}
// 驾驶不规范类型
export function handleMisbehaveType(arr) {
  if (arr.alarmLevel === 1) {
    arr.alarmLevel = "Form.LevelOne";
  } else if (arr.alarmLevel === 2) {
    arr.alarmLevel = "Form.LevelTwo";
  }
  switch (arr.state) {
    case 0:
      arr.state = {
        value: 0,
        type: "Form.Undisposed",
        isEdit: false,
      };
      break;
    case 1:
      arr.state = {
        value: 1,
        type: "Form.Disposed",
        isEdit: false,
      };
      break;
    case 2:
      arr.state = {
        value: 2,
        type: "ButtonComponent.FalseAlarm",
        isEdit: false,
      };
      break;
  }
  switch (Number(arr.alarmType)) {
    case 1:
      arr.alarmType = "Form.FatigueDriving";
      break;
    case 2:
      arr.alarmType = "Form.MakingCalls";
      break;
    case 3:
      arr.alarmType = "Form.Smoking";
      break;
    case 4:
      arr.alarmType = "Form.Distraction";
      break;
    case 5:
      arr.alarmType = "Form.Abonormal";
      break;
    case 6:
      arr.alarmType = "Form.NotDetected";
      break;
    // case 10:
    //   arr.alarmType = ('Form.autoCapture')
    //   break;
    // case 11:
    //   arr.alarmType = ('Form.driverChange')
    //   break;
    default:
      break;
  }
}

// 风险报警详情数据处理
export function handleRiskDetailType(arr) {
  if (arr.type === 1) {
    switch (Number(arr.alarmType)) {
      case 1:
        arr.alarmType = "Form.FrontAlarm";
        break;
      case 2:
        arr.alarmType = "Form.LaneDeparture";
        break;
      case 3:
        arr.alarmType = "Form.OverClose";
        break;
      default:
        arr.alarmType = "Form.Undefined";
        break;
    }
  } else {
    switch (Number(arr.alarmType)) {
      case 1:
        arr.alarmType = "Form.FatigueDriving";
        break;
      case 2:
        arr.alarmType = "Form.MakingCalls";
        break;
      case 3:
        arr.alarmType = "Form.Smoking";
        break;
      case 4:
        arr.alarmType = "Form.Distraction";
        break;
      case 5:
        arr.alarmType = "Form.Abonormal";
        break;
      case 6:
        arr.alarmType = "Form.NotDetected";
        break;
      default:
        break;
    }
  }
  if (arr.alarmLevel === 1) {
    arr.alarmLevel = "Form.LevelOne";
  } else if (arr.alarmLevel === 2) {
    arr.alarmLevel = "Form.LevelTwo";
  }
  if (arr.state === 1) {
    arr.state = "Form.Disposed";
  } else {
    arr.state = "Form.Undisposed";
  }
}

// Adas报警类型
export function handleAdasType(arr) {
  switch (Number(arr.alarmType)) {
    case 1:
      arr.alarmType = "Form.FrontAlarm";
      break;
    case 2:
      arr.alarmType = "Form.LaneDeparture";
      break;
    case 3:
      arr.alarmType = "Form.OverClose";
      break;
    // case 4:
    //   arr.alarmType = ('Form.Pedestrian')
    //   break;
    // case 5:
    //   arr.alarmType = ('Form.FrequentlyChange')
    //   break;
    // case 6:
    //   arr.alarmType = ('Form.RateLimit')
    //   break;
    // case 7:
    //   arr.alarmType = ('Form.Obstruction')
    //   break;
    // case 10:
    //   arr.alarmType = ('Form.identifyRoadSigns')
    //   break;
    // case 11:
    //   arr.alarmType = ('Form.activeCapture')
    //   break;
    default:
      arr.alarmType = "Form.Undefined";
      break;
  }
  switch (Number(arr.alarmLevel)) {
    case 1:
      arr.alarmLevel = "Form.LevelOne";
      break;
    case 2:
      arr.alarmLevel = "Form.LevelTwo";
      break;
  }
  switch (arr.state) {
    case 0:
      arr.state = {
        value: 0,
        type: "Form.Undisposed",
        isEdit: false,
      };
      break;
    case 1:
      arr.state = {
        value: 1,
        type: "Form.Disposed",
        isEdit: false,
      };
      break;
    case 2:
      arr.state = {
        value: 2,
        type: "ButtonComponent.FalseAlarm",
        isEdit: false,
      };
      break;
  }
  return arr;
}

// 酒检列表
export function handleAlcoholTestType(arr) {
  if (arr.testPattern !== undefined) {
    switch (Number(arr.testPattern)) {
      case 1:
        arr.testPattern = "Form.ActiveTest";
        break;
      case 2:
        arr.testPattern = "Form.RejectTest";
        break;
      case 4:
        arr.testPattern = "Form.PassiveTest";
        break;
      case 8:
        arr.testPattern = "Form.InterruptTest";
        break;
      default:
        arr.testPattern = "Form.Others";
        break;
    }
    switch (Number(arr.alarmLevel)) {
      case 1:
        arr.alarmLevel = "Form.LevelOne";
        break;
      case 2:
        arr.alarmLevel = "Form.LevelTwo";
        break;
    }
    switch (arr.state) {
      case 0:
        arr.state = {
          value: 0,
          type: "Form.Undisposed",
          isEdit: false,
        };
        break;
      case 1:
        arr.state = {
          value: 1,
          type: "Form.Disposed",
          isEdit: false,
        };
        break;
      case 2:
        arr.state = {
          value: 2,
          type: "ButtonComponent.FalseAlarm",
          isEdit: false,
        };
        break;
    }
    return arr;
  } else {
    return arr;
  }
}

export function formatDate(formatType) {
  Date.prototype.format = function (fmt) {
    var o = {
      "M+": this.getMonth() + 1, // 月份
      "d+": this.getDate(), // 日
      "h+": this.getHours(), // 小时
      "m+": this.getMinutes(), // 分
      "s+": this.getSeconds(), // 秒
      "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
      S: this.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return fmt;
  };
  var dateReturn = new Date().format(formatType);
  return dateReturn;
}

export function dateToStr(date) {
  date = new Date(date);
  var monthz = date.getMonth() + 1;
  const str =
    date.getFullYear() +
    "-" +
    (monthz >= 10 ? monthz : "0" + monthz) +
    "-" +
    (date.getDate() >= 10 ? date.getDate() : "0" + date.getDate()) +
    " " +
    (date.getHours() > 9 ? date.getHours() : "0" + date.getHours()) +
    ":" +
    (date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()) +
    ":" +
    (date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds());
  return str;
}
