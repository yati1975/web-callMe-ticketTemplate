const defCONFIG = {
    QRCODEURL: "https://qrorder.lcc.com.tw:8083/index.aspx?StoreNumber=188&tableNum="+ encodeURI("預點"),
    PRINT: "0",
    SPACING: "0",
    PAPER: "80",
    BREAKSYMBOL: " "
};
const defCONTENT = {
    subtitle:"您的號碼",
    numTitle:"",
    num:"",
    notice:"請掃描下方QRCODE,可預先點餐"
};
const CONFIG ={
    'a010r':{
        conf:{
            QRCODEURL: "https://qrorder.lcc.com.tw:8083/index.aspx?StoreNumber=188&tableNum="+ encodeURI("預點"),
            PRINT: "0",
            SPACING: "0",
            PAPER: "80",
            BREAKSYMBOL: " "
        },
        content:{
            subtitle:"您的號碼",
            numTitle:"",
            num:"",
            notice:"請掃描下方QRCODE,可預先點餐"
        }
    },
    'a010v':{
        conf:{
            QRCODEURL: null,
            PRINT: "0",
            SPACING: "0",
            PAPER: "80",
            BREAKSYMBOL: " "
        },
        content:{
            subtitle:"您的號碼",
            numTitle:"",
            num:"",
            notice:null
        }
    },
    'a010n':{
        conf:{
            QRCODEURL: null,
            PRINT: "0",
            SPACING: "0",
            PAPER: "80",
            BREAKSYMBOL: " "
        },
        content:{
            subtitle:"您的號碼",
            numTitle:"",
            num:"",
            notice:null
        }
    },
    'z000f':{
        conf:{
            QRCODEURL: "https://qrorder.lcc.com.tw:8083/index.aspx?StoreNumber=188&tableNum="+ encodeURI("預點"),
            PRINT: "0",
            SPACING: "0",
            PAPER: "80",
            BREAKSYMBOL: " "
        },
        content:{
            subtitle:"您的號碼",
            numTitle:"",
            num:"",
            notice:"請掃描下方QRCODE,可預先點餐"
        }
    }    
};
function getConfig(callername){
  let username=callername;
  if(!callername){
    let urlParams = new URLSearchParams(window.location.search);
    username = urlParams.get("username"); // 若無則給預設值
  }
  let conf = CONFIG[username];
  if(!conf){
    conf.conf = defCONFIG;
    conf.content = defCONTENT;
  }
  return conf;
}