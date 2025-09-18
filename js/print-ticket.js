function breakLines(symbol,size) {
  return symbol.split("").map(ch => ({
    text: ch,
    align: "center",
    size: size
  }));
}


function printTicket(storename,callername,nowGetNumItemTitle,nowUserGetNumValue,spacing,paper,breaksymbol) {

  let title = storename;

  if (callername !== null) {
    title = storename + ' [' + callername + ']';
  }
  let url = `https://${env.liffDomain}/${env.liffId}/?shop_name=`;
  let nurl = url + encodeURI(storename) + "&user_num=" + encodeURI(nowUserGetNumValue);
  // 進行 URL 編碼（中文等特殊字元會被轉為百分比編碼）
  if (callername !== null) {
    nurl = url + encodeURI(storename) + "&caller_name=" + encodeURI(callername) + "&user_num=" + encodeURI(nowUserGetNumValue);
  }

  
  //const qrurl = (typeof CONFIG !== "undefined" && CONFIG.QRCODEURL) ? CONFIG.QRCODEURL : nurl;

  let printTicketDef = getConfig(username);
  let printTicketConf = printTicketDef.conf;
  let printTicketDoc = printTicketDef.content;
  const qrurl = (typeof printTicketConf !== "undefined" && printTicketConf.QRCODEURL) ? printTicketConf.QRCODEURL : nurl;
  //console.log(qrurl);


  // 目前取號項目名稱
  //let nowGetNumItemTitle = "";
  // if ((nowGetNumItem !== null) && ((initData.get_num_item_names !== null) && (initData.get_num_item_names !== ""))) {
  //  console.log(nowGetNumItem);
  //  nowGetNumItemTitle = initData.get_num_item_names[nowGetNumItem];
  //}
  //console.log(nowGetNumItemTitle);

  // 定義58mm或80mm紙張，各種文字的尺寸
  const sizes58 = {
    space: 0,
    title: 37,
    subtitle: 30,
    category: 40,
    number: 100,
    tip: 30,
    time: 25,
    qrsize: 300,
    paper: paper
  };
  const sizes80 = {
    space: 0,
    title: 50,
    subtitle: 40,
    category: 55,
    number: 140,
    tip: 40,
    time: 35,
    qrsize: 300,
    paper
  };

  // 根據 paper 選對字型組
  const sizes = parseInt(paper, 10) === 80 ? sizes80 : sizes58;

  // 組 content
  const content = [{
    text: title,
    align: "center",
    size: sizes.title
  }, 
  ...breakLines(breaksymbol,sizes.space),
  {
    // text: "您的號碼",
    text: printTicketDoc.subtitle,
    align: "center",
    size: sizes.subtitle
  },
  ...breakLines(breaksymbol,sizes.space),
  {
    text: String(nowGetNumItemTitle),
    align: "center",
    size: sizes.category
  },
  ...breakLines(breaksymbol,sizes.space),
  {
    text: String(nowUserGetNumValue),
    align: "center",
    size: sizes.number
  },
  ...breakLines(breaksymbol,sizes.space),
  {
    // text: "請掃描下方QRCODE,可預先點餐",
    text: printTicketDoc.notice,
    align: "center",
    size: sizes.tip
  },
  ...breakLines(breaksymbol,sizes.space)
  ];
  console.log(JSON.stringify(content));

  
  fetch("https://127.0.0.1/print", {    
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content,
        qrcode: qrurl,
        qrsize: sizes.qrsize,
        group: nowGetNumItemTitle,
        spacing: spacing,
        timesize: sizes.time,
        paper: paper,
        breaksymbol: breaksymbol
      })
    })
    .then(res => {
      if (res.ok) {
        //alert("✅ 列印請求已送出！");
      } else {
        //alert("❌ 列印失敗，狀態碼：" + res.status);
      }
    })
    .catch(err => {
      //alert("⚠️ 請求錯誤：" + err.message);
    });
}