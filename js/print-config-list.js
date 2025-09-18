const env = {
    liffDomain: "liff.line.me",
    liffId: "2003918297-NKaR4P9w",
}

const defCONFIG = {
    QRCODEURL: "",
    PRINT: "0",
    SPACING: "0",
    PAPER: "80",
    BREAKSYMBOL: ""
};
const defCONTENT = {
    subtitle:"您的號碼",
    notice:"請掃描下方QRCODE,可預先點餐"
};
const CONFIG ={
    'a010r':{
        remark: "誠記",
        conf:{
            QRCODEURL: "https://qrorder.lcc.com.tw:8083/index.aspx?StoreNumber=188&tableNum="+ encodeURI("預點"),
            PRINT: "1",
            SPACING: "0",
            PAPER: "80",
            BREAKSYMBOL: ""
        },
        content:{
            subtitle:"您的號碼",
            notice:"請掃描下方QRCODE,可預先點餐"
        }
    },
    'a010v':{
        remark: "抽血",        
        conf:{
            QRCODEURL: null,
            PRINT: "0",
            SPACING: "0",
            PAPER: "58",
            BREAKSYMBOL: ""
        },
        content:{
            subtitle:"您的號碼",
            notice:"掃描下方QRCODE,到號自動通知"
        }
    },
    'v010z':{
        remark: "承繼", 
        conf:{
            QRCODEURL: null,
            PRINT: "0",
            SPACING: "0",
            PAPER: "80",
            BREAKSYMBOL: ""
        },
        content:{
            subtitle:"您的號碼",
            notice:"掃描下方QRCODE,到號自動通知"
        }
    },    
    'a010n':{
        conf:{
            QRCODEURL: null,
            PRINT: "1",
            SPACING: "0",
            PAPER: "58",
            BREAKSYMBOL: ""
        },
        content:{
            subtitle:"您的號碼",
            notice:"掃描下方QRCODE,到號自動通知"
        }
    },
    'z000f':{
        conf:{
            QRCODEURL: "https://qrorder.lcc.com.tw:8083/index.aspx?StoreNumber=188&tableNum="+ encodeURI("預點"),
            PRINT: "1",
            SPACING: "0",
            PAPER: "58",
            BREAKSYMBOL: ""
        },
        content:{
            subtitle:"您的號碼",
            notice:"請掃描下方QRCODE,可預先點餐"
        }
    },    
    'z0005':{
        conf:{
            QRCODEURL: "http://www.google.com",
            PRINT: "1",
            SPACING: "0",
            PAPER: "58",
            BREAKSYMBOL: ""
        },
        content:{
            subtitle:"您的號碼",
            notice:"掃描下方QRCODE,到號自動通知"
        }
    }, 
};
function getConfig(callername){
  let username=callername;
  if(!callername){
    let urlParams = new URLSearchParams(window.location.search);
    username = urlParams.get("username"); // 若無則給預設值
  }

  const userConf = CONFIG[username];

  return {
    conf: { ...defCONFIG, ...(userConf?.conf || {}) },
    content: { ...defCONTENT, ...(userConf?.content || {}) }
  };

}