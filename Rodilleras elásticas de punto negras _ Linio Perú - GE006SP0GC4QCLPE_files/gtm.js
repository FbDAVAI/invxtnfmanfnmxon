
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"375",
  
  "macros":[{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"pageType",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"product_id",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"product_id_list",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",2],
      "vtp_map":["list",["map","key","product","value",["macro",3]],["map","key","cart","value",["macro",4]],["map","key","checkout","value",["macro",4]],["map","key","checkout1","value",["macro",4]],["map","key","checkout2","value",["macro",4]],["map","key","checkout3","value",["macro",4]],["map","key","success","value",["macro",4]]]
    },{
      "function":"__smm",
      "vtp_input":["macro",2],
      "vtp_setDefaultValue":false,
      "vtp_map":["list",["map","key","home","value","home"],["map","key","category","value","category"],["map","key","product","value","product"],["map","key","search","value","searchresults"],["map","key","cart","value","cart"],["map","key","checkout","value","cart"],["map","key","checkout1","value","cart"],["map","key","checkout2","value","cart"],["map","key","checkout3","value","cart"],["map","key","success","value","purchase"]]
    },{
      "function":"__v",
      "vtp_name":"special_price",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"cartTotalValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"orderValue",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"transactionTotal",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_input":["macro",2],
      "vtp_setDefaultValue":false,
      "vtp_map":["list",["map","key","product","value",["macro",7]],["map","key","cart","value",["macro",8]],["map","key","checkout","value",["macro",9]],["map","key","checkout1","value",["macro",9]],["map","key","checkout2","value",["macro",9]],["map","key","checkout3","value",["macro",9]],["map","key","success","value",["macro",10]]]
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"price",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 100*(1-(",["escape",["macro",7],8,16],"||",["escape",["macro",13],8,16],")\/",["escape",["macro",13],8,16],")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sku_config"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",7],8,16],"||",["escape",["macro",13],8,16],"})();"]
    },{
      "function":"__c",
      "vtp_value":"UA-31571834-1"
    },{
      "function":"__j",
      "vtp_name":"dataLayer"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function f(a){var c=[];if(Array.isArray(a)\u0026\u00260\u003Ca.length)for(var d=0;d\u003Ca.length;d++){var b=a[d],e=b.sku||b.skuSimple||b.sku_config||\"\";e=e.split(\"-\")[0];var f=b.name||b.productName||b.product_name||\"\",g=b.price||0;b.special_price\u0026\u00260\u003Cb.special_price\u0026\u0026(g=b.special_price);var h=b.brand||\"\",k=b.category||b.categoryFull||b.category_full||\"\";k=k.replace(\/--\/g,\"\/\");var l=b.sku||b.skuSimple||\"\",m=b.quantity||1,n=b.categoryBusinessPlan||\"9_1 Other\";b=b.is_international||0;c.push({name:f,id:e,price:g,\nbrand:h,category:k,variant:l,quantity:m,coupon:\"\",dimension10:n,dimension12:\"\"+b})}return c}var a=",["escape",["macro",18],8,16],";a=a[0];var c=\"undefined\"!==typeof a.ecommerce?{ecommerce:a.ecommerce}:{ecommerce:{}};c.ecommerce.impressions\u0026\u0026(c.ecommerce.impressions=null);var d=0;if(\"undefined\"===typeof a.pageType)return c;try{if(\"product\"==a.pageType)c.ecommerce.detail={products:f([a])};else if(\"cart\"==a.pageType){var e=a.cartProducts;d=1;c.ecommerce.checkout={actionField:{step:d},products:f(e)}}else if(\"checkout\"==\na.pageType){e=a.checkoutProducts;var g=window.location.pathname;0\u003C=g.indexOf(\"shipping-address\")\u0026\u0026(d=2);0\u003C=g.indexOf(\"shipping-options\")\u0026\u0026(d=3);0\u003C=g.indexOf(\"payment\")\u0026\u0026(d=4);c.ecommerce.checkout={actionField:{step:d},products:f(e)}}else\"success\"==a.pageType\u0026\u0026(e=a.transactionProducts,c.ecommerce.purchase={actionField:{id:a.order_number,affiliation:a.transactionAffiliation||\"\",revenue:a.transactionTotal||0,tax:a.transactionTax||0,shipping:a.transactionShipping||0,coupon:\"0\"},products:f(e)})}catch(h){console.log(\"ERROR ON ECOMM: \"+\nh)}return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mail_hash"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"n\/a\"!==",["escape",["macro",20],8,16],")return ",["escape",["macro",20],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"experiment_id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"variation_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cart_id"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new Date).getTime()+\".\"+Math.random().toString(36).substring(5)})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"linio_id"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"custom_Source"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"custom_Medium"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",2],8,16],";return a.charAt(0).toUpperCase()+a.slice(1)+\"Recommendation\"})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",31],8,16],",b=\"\";a\u0026\u0026(a=a.split(\"\/p\/\"),a=a[1].split(\"-\"),a=a[a.length-3],b=a.split(\"\").reverse().join(\"\"));return b})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"q",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"00136709"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var b=ga.getAll(),c;var a=0;for(c=b.length;a\u003Cc;a+=1)if(b[a].get(\"trackingId\")===",["escape",["macro",17],8,16],")return b[a].get(\"clientId\")}catch(d){}return\"false\"})();"]
    },{
      "function":"__k",
      "vtp_name":"__utm_full",
      "vtp_decodeCookie":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function h(a,c){for(var b=0;b\u003Cc.length;b++)if(a.match(c[b]))return!0;return!1}function k(a){var c={};a=a.replace(\/^\\?\/,\"\").split(\"\\x26\");for(var b=a.length,d=0,e;d\u003Cb;d++)a[d]\u0026\u0026(e=a[d].split(\"\\x3d\"),c[e[0]]=e[1]);return c}var l=\"29546 26956 26956 11085 2058 1929 24287 13012 11001 29546 3298 29277 33008\".split(\" \"),a=\"\",f=\"\",g=\"\";\"\"!=",["escape",["macro",37],8,16],"\u0026\u0026\"undefined\"!=typeof ",["escape",["macro",37],8,16],"\u0026\u0026(a=k(",["escape",["macro",37],8,16],"),g=\"undefined\"!==typeof a.utm_source?a.utm_source:\"\",f=\"undefined\"!==\ntypeof a.utm_medium?a.utm_medium:\"\",a=\"undefined\"!==typeof a.utm_campaign?a.utm_campaign:\"\");return h(a,l)\u0026\u0026\"affiliates\"==f||\"hermedia\"==g?!0:!1})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"__siteUnderVisits"
    },{
      "function":"__v",
      "vtp_name":"identifier_hash",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gender",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"product_name",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"category_full",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"brand",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"FixMe"
    },{
      "function":"__v",
      "vtp_name":"cartProducts",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"transactionProducts",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"order_number",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"category1",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"category2",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"category3",
      "vtp_dataLayerVersion":1
    },{
      "function":"__k",
      "vtp_name":"__utm_source"
    },{
      "function":"__k",
      "vtp_name":"__utmz"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!=",["escape",["macro",53],8,16],".search(\"mainadv\")?1:0})();"]
    },{
      "function":"__k",
      "vtp_name":"__umz"
    },{
      "function":"__c",
      "vtp_value":"1481282062085130"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=!1,b=navigator.userAgent||navigator.vendor||window.opera;if(\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino\/i.test(b)||\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(b.substr(0,\n4)))a=!0;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionCurrency"
    },{
      "function":"__j",
      "vtp_name":"ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",59],8,16],";\"undefined\"!==typeof a\u0026\u0026\"undefined\"===typeof window.onsite_ga_tracking\u0026\u0026(a(\"create\",",["escape",["macro",17],8,16],",{userId:",["escape",["macro",21],8,16],",name:\"onsite\"}),window.onsite_ga_tracking=1,window.optimizely=window.optimizely||[],window.optimizely.push(\"activateUniversalAnalytics\"));return a})();"]
    },{
      "function":"__v",
      "vtp_name":"sku_config",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"brand"
    },{
      "function":"__d",
      "vtp_elementSelector":"input[name=sku]",
      "vtp_attributeName":"value",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "vtp_name":"sku_simple",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",0],8,16],";if(-1\u003Ca.indexOf(\"linio.com.mx\"))return[\"linio.com.mx\",\"paypal.com\",\"m.linio.com.mx\",\"linio.com\",\"accounts.google.com\"];if(-1\u003Ca.indexOf(\"linio.com.co\"))return[\"linio.com.mx\",\"m.linio.com.co\",\"linio.com.co\",\"linio.com\",\"accounts.google.com\"];if(-1\u003Ca.indexOf(\"linio.com.pe\"))return[\"linio.com.pe\",\"m.linio.com.pe\",\"linio.com\",\"accounts.google.com\"];if(-1\u003Ca.indexOf(\"linio.com.ve\"))return[\"linio.com.ve\",\"m.linio.com.ve\",\"linio.com\",\"accounts.google.com\"];if(-1\u003Ca.indexOf(\"linio.cl\"))return\"linio.cl transbank.cl webpay.cl linioshowroom.com puntopagos.com paypal.com webpay3g.transbanck.cl empresas.bancochile.cl certification.webpay.cl alice-staging-cl1.linioshowroom.com bci.cl servipag.com m.linio.cl linio.com accounts.google.com\".split(\" \");\nif(-1\u003Ca.indexOf(\"linio.com.pa\"))return[\"linio.com.pa\",\"m.linio.com.pa\",\"linio.com\",\"accounts.google.com\"];if(-1\u003Ca.indexOf(\"linio.com.ar\"))return[\"linio.com.ar\",\"m.linio.com.ar\",\"linio.com\",\"accounts.google.com\"];if(-1\u003Ca.indexOf(\"linio.com.ec\"))return[\"linio.com.ec\",\"optar.com.ec\",\"m.linio.com.ec\",\"linio.com\",\"accounts.google.com\"]})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"c_plist"
    },{
      "function":"__v",
      "vtp_name":"is_recurrent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",2],
      "vtp_defaultValue":"linio-pe-general",
      "vtp_map":["list",["map","key","success","value","linio-pe-conv"]]
    },{
      "function":"__k",
      "vtp_name":"__utm_medium"
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_dataLayerVersion":2,
      "vtp_name":"transactionId"
    },{
      "function":"__v",
      "vtp_name":"is_recurrent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__c",
      "vtp_value":"20"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"category_id"
    },{
      "function":"__c",
      "vtp_value":"PEN"
    },{
      "function":"__v",
      "vtp_name":"category4",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"sku_simple"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"small_image"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"slug"
    },{
      "function":"__k",
      "convert_undefined_to":"false",
      "vtp_decodeCookie":false,
      "vtp_name":"__lci"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionAffiliation"
    },{
      "function":"__c",
      "vtp_value":"transactionTax"
    },{
      "function":"__v",
      "vtp_name":"transactionShippingValue",
      "vtp_dataLayerVersion":2
    },{
      "function":"__f"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"category5",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"email",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"mrsp_price",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"orderProducts",
      "vtp_dataLayerVersion":1
    },{
      "function":"__j",
      "vtp_name":"CachebusterMT"
    },{
      "function":"__j",
      "vtp_name":"skus"
    },{
      "function":"__c",
      "vtp_value":"transactionShippingValue"
    },{
      "function":"__c",
      "vtp_value":"kV"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(null!=dataLayer[0].transactionShippingValue\u0026\u0026null!=dataLayer[0].transactionTax){var a=dataLayer[0].transactionShippingValue+dataLayer[0].transactionTax;return 0!=dataLayer[0].transactionTotal\u0026\u0026dataLayer[0].transactionTotal\u003Ea?dataLayer[0].transactionTotal-a:0}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1!=",["escape",["macro",53],8,16],".search(\"pampanetwork\")?1:0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.getElementById(\"searchInput\");return a.value||\"\"})();"]
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return-1\u003C",["escape",["macro",52],8,16],".indexOf(\"criteo\")||-1\u003C",["escape",["macro",69],8,16],".indexOf(\"criteo\")?1:0})();"]
    },{
      "function":"__r"
    },{
      "function":"__k",
      "vtp_name":"splitVar"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_source",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"google\/organic;r.yieldkit.com\/referral;Postal\/CRM;Ingenious\/affiliates;criteodisp\/retargeting;paypal.com\/referral;google\/cpc;BounceX\/InboxRetargeting;(direct)\/(none);Ingenious?utm_source\\x3dIngenious\/affiliates;liniochatmx.questionpro.com\/referral;sociomantic\/retargeting;col131.mail.live.com\/referral;liniomxm1.questionpro.com\/referral;CRM\/Postal;search.iminent.com\/referral;Hermedia\/affiliates;offers.bycontext.com\/referral;bay179.mail.live.com\/referral;linio.com\/referral;cupon.mx\/referral;blu175.mail.live.com\/referral;bing\/organic;sociable-labs\/sa;accounts.google.com\/referral;i-sil.com\/referral;mail.google.com\/referral;elempleo.com\/referral;xbox.com\/referral;tododecomputo.com\/referral;rs.comparisongenie.com\/referral;yahoo\/organic;mx.startech.com\/referral;bossa.mx\/referral;bay181.mail.live.com\/referral;col129.mail.live.com\/referral;clubpremier.com\/referral;blu174.mail.live.com\/referral;cazaofertas.com.mx\/referral;snt148.mail.live.com\/referral;plus.url.google.com\/referral;dafiti.com.mx\/referral;blu178.mail.live.com\/referral;tools.liniodesign.com\/referral;tiendavolaris.com\/referral;tags.right-ads.com\/referral;bis.cortalink.com\/referral;avg\/organic;cas.sv.us.criteo.com\/referral;Postal\/affiliates;globo\/organic;Dealply\/affiliates;4csupport.com\/referral;cuponia.com.mx\/referral;quantcast\/display;abix.com.mx\/referral;ofertas-linio.com\/referral;comprasconlinio.com\/referral;sociable-labs\/pp;en.eazel.com\/referral;descuentodos.com\/referral;deseos.x10.mx\/referral;go.redirectingat.com\/referral;mediamath\/retargeting-rhs;blu168.mail.live.com\/referral;i.maxthon.com\/referral;chat.virginmobile.mx\/referral;blu180.mail.live.com\/referral;data.taggify.net\/referral;blu172.mail.live.com\/referral;cuponofertas.com.mx\/referral;blu182.mail.live.com\/referral;AltNetEC\/Display;bay174.mail.live.com\/referral;dsldevice.lan\/referral;blu173.mail.live.com\/referral;snt146.mail.live.com\/referral;Ingenious\/(not set);bay176.mail.live.com\/referral;snt149.mail.live.com\/referral;only-search.com\/referral;bay177.mail.live.com\/referral;blu176.mail.live.com\/referral;mussi.com.mx\/referral;r.xiaourl.com\/referral;start.iminent.com\/referral;curebit\/referral-via-other;ask\/organic;cuponesmagicos.com.mx\/referral;blu171.mail.live.com\/referral;mediamath\/display;linio.com.mx\/referral;hot.spot\/referral;msn\/organic;prinsel.com.mx\/referral;blu181.mail.live.com\/referral;onclickads.net\/referral;govome2.inspsearch.com\/referral;us.wow.com\/referral;linkedin.com\/referral;bay175.mail.live.com\/referral;zapmeta.mx\/referral;col130.mail.live.com\/referral;prinsel.com\/referral;compras.innatia.com\/referral;mh-int.com\/referral;dub114.mail.live.com\/referral;search.snapdo.com\/referral;snt153.mail.live.com\/referral;searches.vi-view.com\/referral;172.18.126.9:81\/referral;articulo.mercadolibre.com.mx\/referral;snt150.mail.live.com\/referral;turbocupones.com.mx\/referral;Ingenious\/affil;Ingenious\/affili;Ingenious\/affilia;Ingenious\\x26utm_medium\\x3daffiliates\\x26utm_campaign\\x3d2092-5120\\x26utm_term\\x3d9545\/\/(not set);affiliates2\/Ingenious;liniocom1.questionpro.com\/referral;linio.com.co\/referral;search.tb.ask.com\/referral;pse.todo1.com\/referral;liniofashion.com.co\/referral;criteofbx\/retargeting;sociomanticfbx\/retargeting;198.101.189.150\/referral;entrenamientolinio.questionpro.com\/referral;eltiempo\/(not set);linio.com.ar\/referral;infantil.linio.com.co\/referral;redi.remarkads.com\/referral;wms.linio.com.co\/referral;bay168.mail.live.com\/referral;codigos-descuento.com\/referral;bay172.mail.live.com\/referral;blu184.mail.live.com\/referral;pse.mispagosaldia.com\/referral;tracking.targeton.net\/referral;loencontraste.com\/referral;api.bounceexchange.com\/referral;col126.mail.live.com\/referral;snt151.mail.live.com\/referral;blog\/socialmedia;touch.kaspersky.com\/referral;adf.ly\/referral;twitter\/socialmedia;bay178.mail.live.com\/referral;blu179.mail.live.com\/referral;dp.g.doubleclick.net\/referral;snt147.mail.live.com\/referral;google.com.co\/referral;servicerow.com\/referral;turbocupones.com\/referral;googleads.g.doubleclick.net\/referral;clixtrac.com\/referral;empresas.davivienda.com\/referral;bestadbid.com\/referral;CRM\/SMS;snt152.mail.live.com\/referral;bay180.mail.live.com\/referral;search.webssearches.com\/referral;search.gboxapp.com\/referral;blu169.mail.live.com\/referral;ostercolombia.com\/referral;solonotebooks.net\/referral;blu177.mail.live.com\/referral;linio.soicos.com\/referral;(not set)\/(not set);cuponeitor.es\/referral;descuentocity.com\/referral;conexionsegura.telefonica.com.co\/referral;bay182.mail.live.com\/referral;laneros.com\/referral;blu170.mail.live.com\/referral;imtecnologia.co\/referral;tpc.googlesyndication.com\/referral;info.linio.com.co\/referral;correo.sipo.com.co\/referral;grandes-descuentos.com\/referral;portalpymes.davivienda.com\/referral;dub119.mail.live.com\/referral;api.xdirectx.com\/referral;reggia.com.co\/referral;lede-search.com\/referral;searches.omiga-plus.com\/referral;192.168.2.24\/referral;emBlue Email Marketing emBlue_14775OfertalinioEne27\/Email;1546956\/DFA;forever21.com\/referral;bing.com\/referral;Ingenious\/a;linio.com.pe\/referral;liniofashion.com.pe\/referral;link.adssrvs.com\/referral;dub130.mail.live.com\/referral;galeriaswilson.com\/referral;buscape.com.pe\/referral;ofertasenlinea.info\/referral;oralb.com.pe\/referral;punto-web.com\/referral;col125.mail.live.com\/referral;liniopem1.questionpro.com\/referral;liniocolombia.secure.force.com\/referral;descuentazos.pe\/referral;google.com.pe\/referral;dub125.mail.live.com\/referral;curebit\/referral-via-reminder;sociomantic\/r etargeting;pe.oferta-linio.com\/referral;mailing\/pagoefectivo;pizzaencono.com\/referral;srv1.site-analytics.info\/referral;166.78.228.20\/referral;t.co\/referral;sinintereses.com.pe\/referral;comparazon.com\/referral;g1style.com.pe\/referral;dub131.mail.live.com\/referral;bay173.mail.live.com\/referral;itelsistem.com\/referral;dub127.mail.live.com\/referral;dub118.mail.live.com\/referral;tiendaclaro.pe\/referral;peruhardware.net\/referral;safetypay.pe\/referral;bay167.mail.live.com\/referral;getpocket.com\/referral;192.168.2.1\/referral;GrupoAS Bolet\\u00edn\/email;vu.yoplink.com\/referral;mail.dercoperu.net\/referral;forosperu.net\/referral;curebit\/referral-via-email;search.genieo.com\/referral;link.pampanetwork.com\/referral;12-19producciones.com:2095\/referral;curebit\/Post Purchase;diariotec.com\/referral;webmail.pepp.gob.pe\/referral;gamegape.com\/referral;editorialmacro.com\/referral;gateway.safetypay.com\/referral;zimbra.coes.org.pe\/referral;tuganga.cl\/referral;criteo\/retargeting;HOMETEASER1\/NOTEBOOKHP;Hometeaser1\/playstation;cas.ny.us.criteo.com\/referral;compara.la\/referral;Ingenious -\/affiliates;facebook.com\/referral;l.facebook.com\/referral;es-mg42.mail.yahoo.com\/referral;linio.com.ve\/referral;emBlue - Newsletter\/email;promodescuentos.com\/referral;Ingenious\/(notset);shopmania.com.mx\/referral;bis.cortalink.com\/referral9;ebuy.com.mx\/referral;api.smart-cache.net\/referral;dscuento.com.mx\/referral;Line\/Partnerships;hotsale.com.mx\/referral;inlife-club.com\/referral;plenlife.com\/referral;bay169.mail.live.com\/referral;promodescuentos.digidip.net\/referral;pampanetwork\/Affiliates;buscape.com.mx\/referral;apestan.com\/referral;mx.celulares.com\/referral;\/\".split(\";\");\nreturn-1\u003Ca.indexOf(",["escape",["macro",52],8,16],"+\"\/\"+",["escape",["macro",69],8,16],")||void 0==",["escape",["macro",52],8,16],"\u0026\u0026void 0==",["escape",["macro",69],8,16],"?!0:!1})();"]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_campaign",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"amc",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function d(b,a){for(var c=0;c\u003Ca.length;c++)if(b.match(a[c]))return!0;return!1}var e=[\"ingenious\"],f=[\"postal\",\"crm\",\"bouncex\"],g=[\"retargeting\"],h=[\"facebook\",\"twitter\"],k=[\"ts\",\"cs\"],l=[\"\/\"],b=\"\";\"\"!=",["escape",["macro",100],8,16],"\u0026\u0026\"undefined\"!=typeof ",["escape",["macro",100],8,16],"\u0026\u0026(b=",["escape",["macro",100],8,16],");var a=\"\";\"\"!=",["escape",["macro",102],8,16],"\u0026\u0026\"undefined\"!=typeof ",["escape",["macro",102],8,16],"\u0026\u0026(a=",["escape",["macro",102],8,16],");var c=\"\";\"\"!=",["escape",["macro",103],8,16],"\u0026\u0026\"undefined\"!=typeof ",["escape",["macro",103],8,16],"\u0026\u0026(c=",["escape",["macro",103],8,16],");\nc=c.split(\"-\");a=b.toLowerCase()+\"\/\"+a.toLowerCase();b=\"9347\";return\"\"==",["escape",["macro",104],8,16],"||\"undefined\"==typeof ",["escape",["macro",104],8,16],"?0!=d(a,e)?(e=!isNaN(c[0]),f=!isNaN(c[1]),2==c.length\u0026\u00261==e\u0026\u00261==f?\"aff.linio.\"+c[0]+\".\"+c[1]+\".\"+b:\"aff.linio.29295.34673.\"+b):0!=d(a,f)?\"lead.linio.29297.34675.\"+b:0!=d(a,g)?\"con.linio.29299.34677.\"+b:0!=d(a,h)?\"soc.linio.29301.34679.\"+b:0!=d(a,k)?\"off.linio.29309.34687.\"+b:0!=d(a,l)?\"\":\"unknown.linio.29324.34712.\"+b+\".\"+escape(a):\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=[];for(var a=0;a\u003C",["escape",["macro",46],8,16],".length;a++)b[a]=",["escape",["macro",46],8,16],"[a].product_id;return b})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[],a=0;a\u003C",["escape",["macro",88],8,16],".length;a++)b[a]=",["escape",["macro",88],8,16],"[a].product_id;return b})();"]
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"sku_simple_list",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_setDefaultValue":false,
      "vtp_name":"small_image",
      "vtp_dataLayerVersion":2
    },{
      "function":"__c",
      "vtp_value":"573o0000000068s"
    },{
      "function":"__c",
      "vtp_value":"572o000000005KA"
    },{
      "function":"__c",
      "vtp_value":"00Do0000000JSFI"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"transactionPaymentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"new_user"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"attrset"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"large_image"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"transactionDeliveryZipCode"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"categoryKey2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"categoryKey1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mobile_app_log"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"msrpPrice"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_linio_plus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"transactionShippingMethod"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"nls",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"PHPSESSID"
    },{
      "function":"__c",
      "vtp_value":"i3851129"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_international"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.pathname+window.location.search+window.location.hash;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"checkoutProducts"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",2],
      "vtp_map":["list",["map","key","cart","value",["macro",46]],["map","key","checkout","value",["macro",131]],["map","key","success","value",["macro",47]]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{}};a.ecommerce.add={products:[{name:\"",["escape",["macro",42],7],"\",id:\"",["escape",["macro",61],7],"\",price:\"",["escape",["macro",16],7],"\",brand:\"",["escape",["macro",62],7],"\",category:\"",["escape",["macro",43],7],"\",variant:\"",["escape",["macro",63],7],"\",quantity:1}]};return a})();"]
    },{
      "function":"__c",
      "vtp_value":"C8nA32E23F78C356zCB9477i128d4157"
    },{
      "function":"__c",
      "vtp_value":"pe"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"is_master"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"rsin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ean_code"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=\"",["escape",["macro",135],7],":\";return a=0\u003C",["escape",["macro",136],8,16],"?a+\"",["escape",["macro",137],7],["escape",["macro",138],7],"\":a+\"",["escape",["macro",61],7],"\"})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","\u0026uid","value",["macro",21]],["map","fieldName","allowLinker","value","false"],["map","fieldName","expId","value",["macro",22]],["map","fieldName","expVar","value",["macro",23]]],
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",21]],["map","index","1","dimension",["macro",24]],["map","index","5","dimension",["macro",26]],["map","index","6","dimension",["macro",27]],["map","index","7","dimension",["macro",28]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__r"
    }],
  "tags":[{
      "function":"__ua",
      "priority":9999,
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_overrideGaSettings":true,
      "vtp_ecommerceMacroData":["macro",19],
      "vtp_setTrackerName":false,
      "vtp_doubleClick":true,
      "vtp_fieldsToSet":["list",["map","fieldName","\u0026uid","value",["macro",21]],["map","fieldName","allowLinker","value","false"],["map","fieldName","expId","value",["macro",22]],["map","fieldName","expVar","value",["macro",23]]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",24]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",21]],["map","index","5","dimension",["macro",26]],["map","index","8","dimension",["macro",27]],["map","index","9","dimension",["macro",28]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-31571834-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":124
    },{
      "function":"__html",
      "priority":9998,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(a,d,c){var b=new Date;b.setTime(b.getTime()+864E5*c);c=\"expires\\x3d\"+b.toUTCString();document.cookie=a+\"\\x3d\"+d+\"; \"+c+\"; path\\x3d\/\"}function pre_setCookie(a,d,c,b){return\"utm_source\\x3d\"+a+\"\\x26utm_medium\\x3d\"+d+\"\\x26utm_campaign\\x3d\"+c+\"\\x26utm_term\\x3d\"+b}function getCookie(a){a+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var b=d[c];\" \"==b.charAt(0);)b=b.substring(1);if(0==b.indexOf(a))return b.substring(a.length,b.length)}return\"\"}\nfunction params_unserialize(a){if(\"undefined\"===typeof a)return{};var d={};a=a.replace(\/^\\?\/,\"\").split(\"\\x26\");for(var c=a.length,b=0,e;b\u003Cc;b++)a[b]\u0026\u0026(e=a[b].split(\"\\x3d\"),d[e[0]]=e[1]);return d}function isReferrerIgnored(a){if(\"\"==a)return!1;for(var d=",["escape",["macro",65],8,16],",c=!1,b=0;b\u003Cd.length;b++)-1\u003Ca.indexOf(d[b])\u0026\u0026(c=!0);return c}function hasPreviousData(a){a=params_unserialize(a);return\"\"!==typeof a.utm_source\u0026\u0026\"(direct)\"!=a.utm_source?a:null}\nvar cookie_name=\"__utm_full\",utm_source=\"\",utm_medium=\"\",utm_campaign=\"\",utm_term=\"\",utm_cookie=getCookie(cookie_name),vals=params_unserialize(document.URL.split(\"?\")[1]);\n\"undefined\"!==typeof vals.gclid||\"undefined\"!==typeof vals.gclsrc?(utm_source=\"google\",utm_medium=\"cpc\"):\"undefined\"!==typeof vals.utm_source?(utm_source=vals.utm_source,utm_medium=\"undefined\"!==typeof vals.utm_medium?vals.utm_medium:\"\",utm_campaign=\"undefined\"!==typeof vals.utm_campaign?vals.utm_campaign:\"\",utm_term=\"undefined\"!==typeof vals.utm_term?vals.utm_term:\"\"):\"\"==document.referrer||isReferrerIgnored(document.referrer)?(_v=hasPreviousData(getCookie(cookie_name)))?(utm_source=_v.utm_source,\nutm_medium=\"undefined\"!==typeof _v.utm_medium?_v.utm_medium:\"\",utm_campaign=\"undefined\"!==typeof _v.utm_campaign?_v.utm_campaign:\"\",utm_term=\"undefined\"!==typeof _v.utm_term?_v.utm_term:\"\"):(utm_source=\"(direct)\",utm_medium=\"(none)\",utm_campaign=\"(direct)\"):(utm_source=document.referrer.split(\"?\")[0],utm_medium=\"referral\");setCookie(\"__utm_medium\",utm_medium,60);setCookie(\"__utm_source\",utm_source,60);setCookie(cookie_name,pre_setCookie(utm_source,utm_medium,utm_campaign,utm_term),60);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":123
    },{
      "function":"__html",
      "priority":100,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){var a=window.analytics=window.analytics||[];if(!a.initialize)if(a.invoked)window.console\u0026\u0026console.error\u0026\u0026console.error(\"Segment snippet included twice.\");else{a.invoked=!0;a.methods=\"trackSubmit trackClick trackLink trackForm pageview identify reset group track ready alias debug page once off on\".split(\" \");a.factory=function(b){return function(){var c=Array.prototype.slice.call(arguments);c.unshift(b);a.push(c);return a}};for(var e=0;e\u003Ca.methods.length;e++){var f=a.methods[e];a[f]=a.factory(f)}a.load=\nfunction(b,c){var d=document.createElement(\"script\");d.type=\"text\/javascript\";d.async=!0;d.src=\"https:\/\/cdn.segment.com\/analytics.js\/v1\/\"+b+\"\/analytics.min.js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(d,b);a._loadOptions=c};a.SNIPPET_VERSION=\"4.1.0\";a.load(\"FS6Gc40CftSAsNdopIJsITQUL5NAelD2\");a.page()}}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    },{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eanalytics.track(\"Category\",{user_device:",["escape",["macro",57],8,16],"?\"mobile\":\"desktop\",content_category:",["escape",["macro",43],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":203
    },{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eanalytics.track(\"Checkout View\",{content_type:\"product\",user_device:",["escape",["macro",57],8,16],"?\"mobile\":\"desktop\",content_ids:",["escape",["macro",4],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":204
    },{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eanalytics.track(\"Home\",{user_device:",["escape",["macro",57],8,16],"?\"mobile\":\"desktop\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":205
    },{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Edocument.getElementById(\"buy-now\").addEventListener(\"click\",function(){var a=document.querySelector('[itemprop\\x3d\"sku\"]').content,b=document.querySelector(\"#product-quantity :checked\").value;a={product_id:a,quantity:b};analytics.track(\"Product Add to Cart\",{content_type:\"product\",content:a,user_device:",["escape",["macro",57],8,16],"?\"mobile\":\"desktop\",content_ids:[",["escape",["macro",3],8,16],"],content_category:",["escape",["macro",43],8,16],",value:",["escape",["macro",16],8,16],",currency:",["escape",["macro",74],8,16],"})});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":206
    },{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eanalytics.track(\"Product Detail View\",{content_type:\"product\",user_device:",["escape",["macro",57],8,16],"?\"mobile\":\"desktop\",content_name:",["escape",["macro",42],8,16],",content_ids:[",["escape",["macro",3],8,16],"],content_category:",["escape",["macro",43],8,16],",sku:",["escape",["macro",61],8,16],",category1:",["escape",["macro",49],8,16],",category2:",["escape",["macro",50],8,16],",category3:",["escape",["macro",51],8,16],",category4:",["escape",["macro",75],8,16],",name:",["escape",["macro",42],8,16],",variant:",["escape",["macro",76],8,16],",brand:",["escape",["macro",62],8,16],",price:",["escape",["macro",7],8,16],",url:",["escape",["macro",0],8,16],",\nimage_url:",["escape",["macro",77],8,16],",slug:",["escape",["macro",78],8,16],",currency:",["escape",["macro",74],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":207
    },{
      "function":"__html",
      "priority":99,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getMap(){var c=[],a=dataLayer[0].transactionProducts,d=[],b;for(b in a)d.push({product_id:a[b].sku,quantity:a[b].quantity}),c.push(a[b].category);return{categories:c,products:d}}var options={},map=getMap(),categories=map.categories.join(\"|\"),products=map.products;\nanalytics.track(\"Success Purchase View\",{content_type:\"product\",content_ids:",["escape",["macro",4],8,16],",content:products,value:",["escape",["macro",10],8,16],",revenue:",["escape",["macro",10],8,16],",sale_amount:",["escape",["macro",10],8,16],",currency:",["escape",["macro",74],8,16],",order_id:",["escape",["macro",48],8,16],",user_device:",["escape",["macro",57],8,16],"?\"mobile\":\"desktop\",content_category:categories});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":208
    },{
      "function":"__html",
      "priority":20,
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6011073833687\",{value:\"",["escape",["macro",10],7],"\",currency:\"PEN\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6011073833687\u0026amp;cd[value]=",["escape",["macro",10],12],"\u0026amp;cd[currency]=PEN\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "priority":10,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"499910300956494\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=499910300956494\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":363
    },{
      "function":"__html",
      "priority":9,
      "metadata":["map"],
      "setup_tags":["list",["tag",10,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackSingle\",\"499910300956494\",\"Purchase\",{currency:\"PEN\",content_type:\"product\",content_ids:",["escape",["macro",4],8,16],",value:",["escape",["macro",10],8,16],",currency:",["escape",["macro",58],8,16],",order_id:",["escape",["macro",48],8,16],",user_device:",["escape",["macro",57],8,16],"?\"mobile\":\"desktop\",content_category:getCategories()});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":364
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_prodid","value",["macro",5]],["map","key","ecomm_pagetype","value",["macro",6]],["map","key","ecomm_totalvalue","value",["macro",11]]],
      "vtp_conversionId":"980337278",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_conversionLabel":"vbACCPnWgl8Q_oS70wM",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",12],
      "vtp_enableRdpCheckbox":true,
      "tag_id":57
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",14],
      "vtp_eventCategory":"productView",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",15],
      "vtp_eventLabel":["macro",16],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionLabel":"69BPCLLSvlYQnejp3gM",
      "vtp_currencyCode":"PEN",
      "vtp_conversionValue":["macro",10],
      "vtp_conversionId":"1004172317",
      "vtp_url":["macro",12],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":146
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionLabel":"9bKQCKe99mAQs7Sb3gM",
      "vtp_currencyCode":"PEN",
      "vtp_conversionValue":["macro",10],
      "vtp_conversionId":"1002887731",
      "vtp_url":["macro",12],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":157
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",10],
      "vtp_currencyCode":"PEN",
      "vtp_conversionId":"980337278",
      "vtp_conversionLabel":"vbACCPnWgl8Q_oS70wM",
      "vtp_url":["macro",12],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":158
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":["macro",10],
      "vtp_currencyCode":"PEN",
      "vtp_conversionId":"961831097",
      "vtp_conversionLabel":"pfx6CMuBiV8QucHRygM",
      "vtp_url":["macro",12],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "vtp_enableRdpCheckbox":true,
      "vtp_enableTransportUrl":false,
      "tag_id":159
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",30],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",32],
      "vtp_eventLabel":["macro",3],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":166
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"GuidedSearch",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",33],
      "vtp_eventLabel":["macro",34],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":167
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_customParams":["list",["map","key","ecomm_pagetype","value",["macro",6]]],
      "vtp_conversionId":"1004172317",
      "vtp_customParamsFormat":"USER_SPECIFIED",
      "vtp_enableOgtRmktParams":true,
      "vtp_enableUserId":false,
      "vtp_url":["macro",12],
      "vtp_enableRdpCheckbox":true,
      "tag_id":168
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":["macro",35],
      "tag_id":173
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"SessTracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","2","dimension",["macro",36]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":176
    },{
      "function":"__hl",
      "once_per_event":true,
      "tag_id":178
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",19],
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","\u0026uid","value",["macro",21]],["map","fieldName","allowLinker","value","false"]],
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",24]],["map","index","3","dimension",["macro",25]],["map","index","4","dimension",["macro",21]],["map","index","5","dimension",["macro",26]],["map","index","8","dimension",["macro",27]],["map","index","9","dimension",["macro",28]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "tag_id":179
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"CrossSell",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",32],
      "vtp_eventLabel":["macro",3],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableTransportUrl":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":188
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":false,
      "vtp_enableUrlPassthroughFeature":false,
      "tag_id":199
    },{
      "function":"__cl",
      "tag_id":386
    },{
      "function":"__cl",
      "tag_id":387
    },{
      "function":"__cl",
      "tag_id":388
    },{
      "function":"__cl",
      "tag_id":389
    },{
      "function":"__cl",
      "tag_id":390
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"Add to cart:\n\n\u003Cscript type=\"text\/javascript\"\u003Evar fb_param={pixel_id:\"6011073832887\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6011073832887\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":38
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",21],8,16],")var sonar_customer={identifier:",["escape",["macro",40],8,16],",mhash:",["escape",["macro",21],8,16],",gender:\"male\"===",["escape",["macro",41],8,16],"?0:1};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar sonar_url=document.location.href;0\u003Csonar_url.indexOf(\"?\")\u0026\u0026(sonar_url=sonar_url.substring(0,document.location.href.indexOf(\"?\")));var sonar_product={identifier:",["escape",["macro",3],8,16],",fn:",["escape",["macro",42],8,16],",category:",["escape",["macro",43],8,16],".split(\"\/\"),brand:",["escape",["macro",44],8,16],",price:",["escape",["macro",7],8,16],",amount:",["escape",["macro",13],8,16],",currency:\"PEN\",url:sonar_url,photo:",["escape",["macro",45],8,16],"};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"us-sonar.sociomantic.com\/js\/2010-07-01\/adpan\/linio-pe\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",21],8,16],")var sonar_customer={identifier:",["escape",["macro",40],8,16],",mhash:",["escape",["macro",21],8,16],",gender:\"male\"===",["escape",["macro",41],8,16],"?0:1};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efor(var cartMacro=",["escape",["macro",46],8,16],",arrProd=[],i=0;i\u003CcartMacro.length;i++)arrProd.push({identifier:cartMacro[i].product_id,amount:cartMacro[i].special_price,currency:\"PEN\",quantity:cartMacro[i].quantity});var sonar_basket={products:arrProd};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"us-sonar.sociomantic.com\/js\/2010-07-01\/adpan\/linio-pe\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",21],8,16],")var sonar_customer={identifier:",["escape",["macro",40],8,16],",mhash:",["escape",["macro",21],8,16],",gender:\"male\"===",["escape",["macro",41],8,16],"?0:1};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Efor(var cartMacro=",["escape",["macro",47],8,16],",arrProd=[],i=0;i\u003CcartMacro.length;i++)arrProd.push({identifier:cartMacro[i].product_id,amount:cartMacro[i].price,currency:\"PEN\",quantity:cartMacro[i].quantity});var sonar_basket={products:arrProd,currency:\"PEN\",amount:",["escape",["macro",10],8,16],",transaction:",["escape",["macro",48],8,16],"};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"us-sonar.sociomantic.com\/js\/2010-07-01\/adpan\/linio-pe\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",21],8,16],")var sonar_customer={identifier:",["escape",["macro",40],8,16],",mhash:",["escape",["macro",21],8,16],",gender:\"male\"===",["escape",["macro",41],8,16],"?0:1};\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Evar cat1=",["escape",["macro",49],8,16],",cat2=",["escape",["macro",50],8,16],",cat3=",["escape",["macro",51],8,16],",arrCat=[cat1];cat2\u0026\u0026arrCat.push(cat2);cat3\u0026\u0026arrCat.push(cat3);var sonar_product={category:arrCat};\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"us-sonar.sociomantic.com\/js\/2010-07-01\/adpan\/linio-pe\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eif(",["escape",["macro",21],8,16],")var sonar_customer={identifier:",["escape",["macro",40],8,16],",mhash:",["escape",["macro",21],8,16],",gender:\"male\"===",["escape",["macro",41],8,16],"?0:1};\u003C\/script\u003E\n\u003Cscript async type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/us-sonar.sociomantic.com\/js\/2010-07-01\/adpan\/linio-pe\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript language=\"javascript\"\u003Evar isMain=",["escape",["macro",54],8,16],";1==isMain\u0026\u0026document.write(\"\\x3ciframe src\\x3dhttps:\/\/www.mainadv.com\/retargeting\/live\/Conversion\/ConversionPixel.aspx?pid\\x3d1162 scrolling\\x3dno frameborder\\x3d0 width\\x3d1 height\\x3d1\\x3e\\x3c\/iframe\\x3e\");\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":62
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar sonar_sale={confirmed:!0};\"object\"===typeof sociomantic\u0026\u0026\"object\"===typeof sociomantic.sonar\u0026\u0026\"object\"===typeof sociomantic.sonar.adv\u0026\u0026\"object\"===typeof sociomantic.sonar.adv[\"linio-pe\"]\u0026\u0026\"function\"===typeof sociomantic.sonar.adv[\"linio-pe\"].getConfirmed\u0026\u0026sociomantic.sonar.adv[\"linio-pe\"].getConfirmed();\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":80
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,d,c,a,f,g){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],f=e.createElement(d),f.async=!0,f.src=c,g=e.getElementsByTagName(d)[0],g.parentNode.insertBefore(f,g))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",56],8,16],");fbq(\"track\",\"PageView\");var device=\"\";device=",["escape",["macro",57],8,16],"?\"mobile\":\"desktop\";var pt=",["escape",["macro",2],8,16],";\nif(\"product\"==pt){fbq(\"track\",\"ViewContent\",{content_type:\"product\",user_device:device,content_name:",["escape",["macro",42],8,16],",content_ids:[\"",["escape",["macro",3],7],"\"],content_category:",["escape",["macro",43],8,16],"});var btns=document.querySelectorAll(\"#buy-now\");try{btns\u0026\u00260\u003Cbtns.length\u0026\u0026btns[0].addEventListener(\"click\",function(){fbq(\"track\",\"AddToCart\",{content_type:\"product\",content_ids:[\"",["escape",["macro",3],7],"\"],user_device:device,content_category:",["escape",["macro",43],8,16],",value:",["escape",["macro",16],8,16],"})})}catch(b){console.log(\"Something went wrong: \"+\nb)}}else\"success\"==pt?fbq(\"track\",\"Purchase\",{content_type:\"product\",content_ids:",["escape",["macro",4],8,16],",value:",["escape",["macro",10],8,16],",currency:",["escape",["macro",58],8,16],",order_id:",["escape",["macro",48],8,16],",user_device:device,content_category:getCategories()}):\"home\"==pt?fbq(\"trackCustom\",\"Home\",{user_device:device}):\"category\"==pt?fbq(\"trackCustom\",\"Category\",{user_device:device,content_category:",["escape",["macro",43],8,16],"}):\"checkout\"==pt\u0026\u0026fbq(\"track\",\"InitiateCheckout\",{content_type:\"product\",user_device:device,\ncontent_ids:",["escape",["macro",4],8,16],"});function getCategories(){var b=\"\",e=0,d,c=null;\"cart\"==",["escape",["macro",2],8,16],"?c=dataLayer[0].cartProducts:\"success\"==",["escape",["macro",2],8,16],"\u0026\u0026(c=dataLayer[0].transactionProducts);for(d in c)e==c.length-1?b+=c[d].category:(b+=c[d].category+\"|\",e++);return b};\u003C\/script\u003E\n\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",56],12],"\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){document.querySelector(\"#buy-now\").addEventListener(\"click\",function(){",["escape",["macro",60],8,16],"\u0026\u0026(ga(\"onsite.require\",\"ec\"),ga(\"onsite.ec:addProduct\",{name:\"",["escape",["macro",42],7],"\",id:\"",["escape",["macro",61],7],"\",price:\"",["escape",["macro",16],7],"\",brand:\"",["escape",["macro",62],7],"\",category:\"",["escape",["macro",43],7],"\",variant:\"",["escape",["macro",63],7],"\",quantity:1}),ga(\"onsite.ec:setAction\",\"add\"),ga(\"onsite.send\",\"event\",\"addToCart\",\"",["escape",["macro",64],7],"\",\"",["escape",["macro",16],7],"\",",["escape",["macro",14],8,16],"))})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(b,d){var a=document.createElement(\"script\"),c=document.getElementsByTagName(\"script\")[0];a.async=1;c.parentNode.insertBefore(a,c);a.onload=a.onreadystatechange=function(b,c){if(c||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,c||d\u0026\u0026d()};a.src=b}\ngetScript(\"https:\/\/assets.jetlore.com\/js\/jltracking.js\",function(){email=",["escape",["macro",21],8,16],";\"undefined\"===typeof email\u0026\u0026(email=\"\");JL.tracking({cid:\"c01d4f051fdbc6beccaab8c8b387e57151f7191e2ef9f1fba9bf0871fa389ab5\",user_id:email,explicit:!0});JL.tracker.click({deal_id:dataLayer[0].sku_simple});var b=document.querySelector(\"#buy-now\");b\u0026\u0026b.addEventListener(\"click\",function(){JL.tracker.addToCart({count:1,deal_id:dataLayer[0].sku_simple})})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(e,c){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=1;b.parentNode.insertBefore(a,b);a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,d||c\u0026\u0026c()};a.src=e}var i;\ngetScript(\"https:\/\/assets.jetlore.com\/js\/jltracking.js\",function(){email=",["escape",["macro",21],8,16],";\"undefined\"===typeof email\u0026\u0026(email=\"\");JL.tracking({cid:\"c01d4f051fdbc6beccaab8c8b387e57151f7191e2ef9f1fba9bf0871fa389ab5\",user_id:email,explicit:!0});for(i=0;i\u003CdataLayer[0].transactionProducts.length;i++)JL.tracker.purchase({count:parseInt(dataLayer[0].transactionProducts[i].quantity),deal_id:dataLayer[0].transactionProducts[i].sku})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(e,c){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=1;b.parentNode.insertBefore(a,b);a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,d||c\u0026\u0026c()};a.src=e}\ngetScript(\"https:\/\/assets.jetlore.com\/js\/jltracking.js\",function(){email=",["escape",["macro",21],8,16],";\"undefined\"===typeof email\u0026\u0026(email=\"\");JL.tracking({cid:\"c01d4f051fdbc6beccaab8c8b387e57151f7191e2ef9f1fba9bf0871fa389ab5\",user_id:email,explicit:!0})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":131
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(e,c){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=1;b.parentNode.insertBefore(a,b);a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,d||c\u0026\u0026c()};a.src=e}\ngetScript(\"\/\/static.criteo.net\/js\/ld\/ld.js\",function(){window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:15275},{event:\"setCustomerId\",id:\"",["escape",["macro",21],7],"\"},{event:\"setSiteType\",type:\"d\"},{event:\"viewHome\"})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":132
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(b,c){var a=document.createElement(\"script\"),d=document.getElementsByTagName(\"script\")[0];a.async=1;d.parentNode.insertBefore(a,d);a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,d||c\u0026\u0026c()};a.src=b}\ngetScript(\"\/\/static.criteo.net\/js\/ld\/ld.js\",function(){for(var b=",["escape",["macro",46],8,16],",c=[],a=0;a\u003Cb.length;a++)c.push({id:b[a].product_id,price:b[a].price,quantity:b[a].quantity});window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:15275},{event:\"setCustomerId\",id:\"",["escape",["macro",21],7],"\"},{event:\"setSiteType\",type:\"d\"},{event:\"viewBasket\",item:c})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(e,c){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=1;b.parentNode.insertBefore(a,b);a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,d||c\u0026\u0026c()};a.src=e}\ngetScript(\"\/\/static.criteo.net\/js\/ld\/ld.js\",function(){window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:15275},{event:\"setCustomerId\",id:\"",["escape",["macro",21],7],"\"},{event:\"setSiteType\",type:\"d\"},{event:\"viewList\",item:",["escape",["macro",66],8,16],",keywords:\"\"})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(e,c){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=1;b.parentNode.insertBefore(a,b);a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,d||c\u0026\u0026c()};a.src=e}\ngetScript(\"\/\/static.criteo.net\/js\/ld\/ld.js\",function(){window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:15275},{event:\"setCustomerId\",id:\"",["escape",["macro",21],7],"\"},{event:\"setSiteType\",type:\"d\"},{event:\"viewItem\",item:\"",["escape",["macro",3],7],"\"})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":135
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(d,c){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=1;b.parentNode.insertBefore(a,b);a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,d||c\u0026\u0026c()};a.src=d}\ngetScript(\"\/\/static.criteo.net\/js\/ld\/ld.js\",function(){for(var d=",["escape",["macro",67],8,16],",c=",["escape",["macro",47],8,16],",a=[],b=0;b\u003Cc.length;b++)a.push({id:c[b].product_id,price:c[b].price,quantity:c[b].quantity});window.criteo_q=window.criteo_q||[];window.criteo_q.push({event:\"setAccount\",account:15275},{event:\"setCustomerId\",id:\"",["escape",["macro",21],7],"\"},{event:\"setSiteType\",type:\"d\"},{event:\"trackTransaction\",id:\"",["escape",["macro",48],7],"\",new_customer:2==d?0:1,item:a})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":136
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" defer\u003Efunction getScript(e,c){var a=document.createElement(\"script\"),b=document.getElementsByTagName(\"script\")[0];a.async=1;b.parentNode.insertBefore(a,b);a.onload=a.onreadystatechange=function(b,d){if(d||!a.readyState||\/loaded|complete\/.test(a.readyState))a.onload=a.onreadystatechange=null,a=void 0,d||c\u0026\u0026c()};a.src=e}\ngetScript(\"https:\/\/assets.jetlore.com\/js\/jltracking.js\",function(){email=",["escape",["macro",21],8,16],";\"undefined\"===typeof email\u0026\u0026(email=\"\");JL.tracking({cid:\"c01d4f051fdbc6beccaab8c8b387e57151f7191e2ef9f1fba9bf0871fa389ab5\",user_id:email,explicit:!0});JL.tracker.search({text:\"",["escape",["macro",33],7],"\"})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":141
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\" async\u003Eif(",["escape",["macro",60],8,16],")for(var searchForms=document.querySelectorAll(\"[data-search-suggestions]\"),i=0;i\u003CsearchForms.length;i++){for(var currentForm=searchForms[i],buttons=currentForm.querySelectorAll('button, input[type\\x3d\"submit\"]'),j=0;j\u003Cbuttons.length;j++)buttons[j].addEventListener(\"click\",function(){var a=currentForm.querySelector('input[type\\x3d\"search\"]').value||\"-\";ga(\"onsite.send\",\"event\",\"Search\",\"SearchButton\",a)});currentForm.querySelector('input[type\\x3d\"search\"]').addEventListener(\"keypress\",\nfunction(a){a=a.which||a.keyCode;13===a\u0026\u0026(a=this.value||\"-\",ga(\"onsite.send\",\"event\",\"Search\",\"SearchButton\",a))})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction setCookie(d,e,b){var a=new Date;a.setTime(a.getTime()+864E5*b);var c=\"\";0\u003Cb\u0026\u0026(c=\";expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+c+\"; path\\x3d\/\"}\nif(",["escape",["macro",38],8,16],"){var count=0,prev_url=document.referrer;void 0!=",["escape",["macro",39],8,16],"\u0026\u0026\"\"!=",["escape",["macro",39],8,16],"\u0026\u0026(count=parseInt(",["escape",["macro",39],8,16],"));-1\u003Cprev_url.indexOf(\"linio.com.mx\")\u0026\u0026count++;\"success\"==",["escape",["macro",2],8,16],"?setCookie(\"__siteUnderVisits\",count.toString(),60):setCookie(\"__siteUnderVisits\",count.toString(),0)};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){var b=a.createElement(\"script\");b.type=\"text\/javascript\";b.async=!0;b.src=\"\/\/us.widget.mb-srv.com\/load.js.gz?tag\\x3d",["escape",["macro",68],7],"\";b.id=\"mabayaLoader\";a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){for(var b=",["escape",["macro",47],8,16],",d,e,f,g,h,c,a=0;a\u003Cb.length;a++){d=\"",["escape",["macro",70],7],"-\"+b[a].product_id;e=\"",["escape",["macro",71],7],"\";f=b[a].categoryKey1;g=b[a].quantity;h=b[a].sku;c=0\u003Cb[a].special_price?b[a].special_price:b[a].price;c=c*b[a].quantity-Number(b[a].tax_cost.replace(\",\",\"\"));var k=new Image;k.src=\"https:\/\/linio.go2cloud.org\/aff_l?offer_id\\x3d",["escape",["macro",72],7],"\\x26adv_sub\\x3d\"+d+\"\\x26adv_sub2\\x3d\"+e+\"\\x26adv_sub3\\x3d\"+f+\"\\x26adv_sub4\\x3d\"+g+\"\\x26adv_sub5\\x3d\"+h+\"\\x26amount\\x3d\"+\nc}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){document.querySelector(\"#buy-now\").addEventListener(\"click\",function(){var a=new Image;a.src=\"\/\/www.googleadservices.com\/pagead\/conversion\/1004172317\/?value\\x3d",["escape",["macro",16],7],"\\x26currency_code\\x3dPEN\\x26label\\x3d_DvlCIaK3XUQnejp3gM\\x26guid\\x3dON\\x26script\\x3d0\"})})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_duc4YzmIbqLrjVFO59C6_home\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_duc4YzmIbqLrjVFO59C6_category2_",["escape",["macro",73],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_duc4YzmIbqLrjVFO59C6_offer_",["escape",["macro",3],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_duc4YzmIbqLrjVFO59C6_listing_",["escape",["macro",4],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_duc4YzmIbqLrjVFO59C6_basketstatus_",["escape",["macro",4],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_duc4YzmIbqLrjVFO59C6\u0026amp;ncm=1\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"\/\/us.creativecdn.com\/tags?id=pr_duc4YzmIbqLrjVFO59C6_orderstatus2_",["escape",["macro",10],12],"_",["escape",["macro",70],12],"_",["escape",["macro",4],12],"\u0026amp;cd=default\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"https:\/\/pixel.mathtag.com\/event\/js?mt_id=1387815\u0026amp;mt_adid=219164\u0026amp;mt_exem=\u0026amp;mt_excl=\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":200
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.lpTag=window.lpTag||{};\n\"undefined\"==typeof window.lpTag._tagCount?(window.lpTag={wl:lpTag.wl||null,scp:lpTag.scp||null,site:\"164264\",section:lpTag.section||\"\",tagletSection:lpTag.tagletSection||null,autoStart:!1!==lpTag.autoStart,ovr:lpTag.ovr||{},_v:\"1.10.0\",_tagCount:1,protocol:\"https:\",events:{bind:function(a,b,c){lpTag.defer(function(){lpTag.events.bind(a,b,c)},0)},trigger:function(a,b,c){lpTag.defer(function(){lpTag.events.trigger(a,b,c)},1)}},defer:function(a,b){0===b?(this._defB=this._defB||[],this._defB.push(a)):\n1===b?(this._defT=this._defT||[],this._defT.push(a)):(this._defL=this._defL||[],this._defL.push(a))},load:function(a,b,c){var d=this;setTimeout(function(){d._load(a,b,c)},0)},_load:function(a,b,c){var d=a;a||(d=this.protocol+\"\/\/\"+(this.ovr\u0026\u0026this.ovr.domain?this.ovr.domain:\"lptag.liveperson.net\")+\"\/tag\/tag.js?site\\x3d\"+this.site);a=document.createElement(\"script\");a.setAttribute(\"charset\",b?b:\"UTF-8\");c\u0026\u0026a.setAttribute(\"id\",c);a.setAttribute(\"src\",d);document.getElementsByTagName(\"head\").item(0).appendChild(a)},\ninit:function(){this._timing=this._timing||{};this._timing.start=(new Date).getTime();var a=this;window.attachEvent?window.attachEvent(\"onload\",function(){a._domReady(\"domReady\")}):(window.addEventListener(\"DOMContentLoaded\",function(){a._domReady(\"contReady\")},!1),window.addEventListener(\"load\",function(){a._domReady(\"domReady\")},!1));\"undefined\"===typeof window._lptStop\u0026\u0026this.load()},start:function(){this.autoStart=!0},_domReady:function(a){this.isDom||(this.isDom=!0,this.events.trigger(\"LPT\",\"DOM_READY\",\n{t:a}));this._timing[a]=(new Date).getTime()},vars:lpTag.vars||[],dbs:lpTag.dbs||[],ctn:lpTag.ctn||[],sdes:lpTag.sdes||[],hooks:lpTag.hooks||[],identities:lpTag.identities||[],ev:lpTag.ev||[]},lpTag.init()):window.lpTag._tagCount+=1;\u003C\/script\u003E\n\n\u003Cstyle\u003E\n  .lp-json-pollock-layout.lp-json-pollock-layout-vertical.lpc_card.lpc_card_vertical {\n    border: 0 !important;\n}\n\n\n.lp-json-pollock-element-button.lpc_card__button {\n    border: 0 !important;\n}\n\n.lp-json-pollock-element-button.lpc_card__button button {\n    background-color: white !important;\n    margin-top:5px;\n    margin-bottom:5px;\n    color: #ff6600 !important;\n    border-radius: 1rem;\n    border-style: solid !important;\n    border-color: #ff6600 !important;\n    border-width: thin !important;\n\n}\n.lp-json-pollock-element-text.lpc_card__text.lpc_desktop\n{\n  background-color: #ff6600 !important;\n  color: #f7f7f7 !important;\n  border-radius: .3rem !important;\n  font-weight: normal !important;\n  font-size: 12px !important;\n}\n  @media(max-width: 320px) \n  {\n    \n    .lp-window-root .lp_main .lp_main_area \n    {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 25px !important;\n      right: 0;\n\t}\n    \n  }\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":201
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar lci=",["escape",["macro",79],8,16],";lci\u0026\u0026(window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:\"ddAuthentication\",userID:",["escape",["macro",79],8,16],"}));\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":369
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"detail\",currencyCode:",["escape",["macro",74],8,16],",product:{name:",["escape",["macro",42],8,16],",id:",["escape",["macro",3],8,16],",price:",["escape",["macro",16],8,16],",brand:",["escape",["macro",44],8,16],",category:",["escape",["macro",43],8,16],",variant:",["escape",["macro",23],8,16],"}});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":371
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"transaction\",transactionId:",["escape",["macro",70],8,16],",currencyCode:",["escape",["macro",74],8,16],",affiliation:",["escape",["macro",80],8,16],",total:",["escape",["macro",10],8,16],",tax:",["escape",["macro",81],8,16],",shippingFee:",["escape",["macro",82],8,16],",products:",["escape",["macro",47],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":372
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction getProductsObject(a){return a.map(function(a){return{id:a.sku,name:a.name,price:a.price,category:a.category,brand:a.brand,quantity:a.quantity}})}function getCurrentCart(a){return window.initialCart.filter(function(b){return 0\u003C=a.indexOf(b.sku)})}function getRemovedItem(a,b){var c=a.filter(function(a){return-1===b.indexOf(a.sku)});return c.filter(function(a){return-1===c.indexOf(a.sku)})}function setRemoved(a){for(idx in a)window.removed.push(a[idx].sku)}\nwindow.initialCart=",["escape",["macro",46],8,16],"||[];window.removed=[];window.updatedWith=null;\nwindow.addEventListener(\"cart-updated\",function(a){if(\"remove\"===updatedWith){window.updatedWith=null;var b=[];a.detail.hasOwnProperty(\"length\")||(b=Object.getOwnPropertyNames(a.detail));a=window.initialCart;a=getRemovedItem(a,b);window.initialCart=getCurrentCart(b);setRemoved(a);products=getProductsObject(a);window.dataLayer=window.dataLayer||[];window.dataLayer.push({event:\"removeFromCart\",currencyCode:",["escape",["macro",74],8,16],",products:products})}});\ndocument.addEventListener(\"click\",function(a){if(a.target.matches('[ng-click\\x3d\"cart.removeItem(item.sku)\"]')||a.target.closest('[ng-click\\x3d\"cart.removeItem(item.sku)\"]'))updatedWith=\"remove\"},!0);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":377
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar newsletterCheckbox=document.getElementById(\"registration_subscribedToNewsletter\");newsletterCheckbox.checked=!1;\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":385
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"http:\/\/www.tiendaclaro.pe"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"product"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"staging"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"success"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":".product-card:not(.swiper-slide-duplicate )\u003E .product-image \u003E img, .product-card:not(.swiper-slide-duplicate )\u003E .product-info \u003E div"
    },{
      "function":"_re",
      "arg0":["macro",2],
      "arg1":"product|home"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":".search-suggestion"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_css",
      "arg0":["macro",29],
      "arg1":"div[data-recommendations=\"productdetail\"] div[data-source=\"https:\/\/live-cross-sell.linio.com.mx\/api\/cross_sell\/recommend\/\"] .product-image img,div[data-recommendations=\"productdetail\"] div[data-source=\"https:\/\/live-cross-sell.linio.com.mx\/api\/cross_sell\/recommend\/\"] div.product-info"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"cart"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"product"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"liniofashion.com.pe"
    },{
      "function":"_eq",
      "arg0":["macro",38],
      "arg1":"true"
    },{
      "function":"_lt",
      "arg0":["macro",39],
      "arg1":"2"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"category"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"brand"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"search"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"home"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"http:\/\/www.tiendaclaro.pe"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"mainadv"
    },{
      "function":"_cn",
      "arg0":["macro",55],
      "arg1":"sociomantic"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"linio.com.pe"
    },{
      "function":"_cn",
      "arg0":["macro",69],
      "arg1":"hasoffers"
    },{
      "function":"_eq",
      "arg0":["macro",52],
      "arg1":"affiliates"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"checkout"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"\/account\/login"
    }],
  "rules":[
    [["if",0,2],["unless",1],["add",12,20,21,23,40,1,52,53,61,64,2]],
    [["if",2,3],["unless",1,4],["add",13]],
    [["if",2],["add",0,65]],
    [["if",2,5],["unless",1],["add",14,15,16,17,9,35,38,43,49,62,8,10,11,67],["block",1,61]],
    [["if",6,7,8],["unless",4],["add",18]],
    [["if",8,9,10],["unless",4],["add",19]],
    [["if",12],["unless",11],["add",22]],
    [["if",13],["add",24]],
    [["if",3,8,14],["unless",4],["add",25]],
    [["if",15],["add",26,27,28,29,30,31]],
    [["if",2,16],["unless",1],["add",32,34,44,46,60,68],["block",61]],
    [["if",2,17],["unless",1],["add",33,41,42,48,55,58,6,7,66],["block",61]],
    [["if",2,21],["unless",1],["add",36,47,57,3],["block",61]],
    [["if",2,22],["unless",1],["add",36,47]],
    [["if",2,23],["unless",1],["add",36,47,50,59],["block",61]],
    [["if",2,24],["unless",25],["add",37,45,56,63,5],["block",61]],
    [["if",2,5,26],["add",38]],
    [["if",2,5,27,28],["add",39]],
    [["if",0,2],["unless",1,4],["add",51]],
    [["if",2,5,29,30],["add",54]],
    [["if",12,31],["unless",1],["add",4],["block",61]],
    [["if",2,32],["add",69]],
    [["if",2,4],["block",0,41,1,54,55,56,57,58,59,60,62]],
    [["if",2,18],["block",33,34,36,37]],
    [["if",2,19,20],["block",33,34,35,36,37,45,46,47,48,49]]]
},
"runtime":[[50,"__cegg",[46,"a"],[52,"b",["require","injectScript"]],[52,"c",["require","getTimestamp"]],[52,"d",["require","makeInteger"]],[52,"e",["require","setInWindow"]],[52,"f",[17,[15,"a"],"usersNumericId"]],[22,[28,[15,"f"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[22,[17,[15,"a"],"snapshotName"],[46,["e","CE_SNAPSHOT_NAME",[17,[15,"a"],"snapshotName"],true]]],[41,"g"],[3,"g",[2,[15,"f"],"toString",[7]]],[42,[23,[17,[15,"g"],"length"],8],[46],false,[46,[3,"g",[0,"0",[15,"g"]]]]],[52,"h",[2,[15,"g"],"match",[7,"(\\d+)(\\d{4})$"]]],[22,[28,[15,"h"]],[46,[2,[15,"a"],"gtmOnFailure",[7]],[36]]],[52,"i",[0,[0,[0,[0,[0,[0,"https://script.crazyegg.com/pages/scripts/",[16,[15,"h"],1]],"/"],[16,[15,"h"],2]],".js"],"?"],["d",[10,["c"],3600000]]]],["b",[15,"i"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],[2,[15,"f"],"toString",[7]]]]]
,"permissions":{"__cegg":{"access_globals":{"keys":[{"key":"CE_SNAPSHOT_NAME","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/script.crazyegg.com\/pages\/scripts\/*"]}}}

,"security_groups":{
"nonGoogleScripts":["__cegg"]}

};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ia={Rf:!0},ja={};try{ja.__proto__=ia;ha=ja.Rf;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=fa,la=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]},ma=this||self,na=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(a,b){this.a=a;this.i=b};var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.o={};this.m=!1;this.F={}};ra.prototype.get=function(a){return this.o["dust."+a]};ra.prototype.set=function(a,b){this.m||(a="dust."+a,this.F.hasOwnProperty(a)||(this.o[a]=b))};ra.prototype.has=function(a){return this.o.hasOwnProperty("dust."+a)};var ta=function(a){var b=[],c;for(c in a.o)a.o.hasOwnProperty(c)&&b.push(c.substr(5));return b};var h=function(a){this.i=new ra;this.a=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.a[Number(b)]=a[Number(b)]:this.i.set(b,a[b]))};aa=h.prototype;aa.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.a.length;c++){var d=this.a[c];null===d||void 0===d?b.push(""):d instanceof h?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
aa.set=function(a,b){if("length"==a){if(!qa(b))throw Error("RangeError: Length property must be a valid integer.");this.a.length=Number(b)}else qa(a)?this.a[Number(a)]=b:this.i.set(a,b)};aa.get=function(a){return"length"==a?this.length():qa(a)?this.a[Number(a)]:this.i.get(a)};aa.length=function(){return this.a.length};aa.bc=function(){for(var a=ta(this.i),b=0;b<this.a.length;b++)a.push(b+"");return new h(a)};
var ua=function(a,b){if(qa(b))delete a.a[Number(b)];else{var c=a.i,d;d="dust."+b;c.m||c.F.hasOwnProperty(d)||delete c.o[d]}};aa=h.prototype;aa.pop=function(){return this.a.pop()};aa.push=function(a){return this.a.push.apply(this.a,Array.prototype.slice.call(arguments))};aa.shift=function(){return this.a.shift()};aa.splice=function(a,b,c){return new h(this.a.splice.apply(this.a,arguments))};aa.unshift=function(a){return this.a.unshift.apply(this.a,Array.prototype.slice.call(arguments))};
aa.has=function(a){return qa(a)&&this.a.hasOwnProperty(a)||this.i.has(a)};var va=function(){function a(f,g){if(b[f]){if(b[f].Tb+g>b[f].max)throw Error("Quota exceeded");b[f].Tb+=g}}var b={},c=void 0,d=void 0,e={ih:function(f){c=f},ve:function(){c&&a(c,1)},kh:function(f){d=f},Ba:function(f){d&&a(d,f)},Hh:function(f,g){b[f]=b[f]||{Tb:0};b[f].max=g},Jg:function(f){return b[f]&&b[f].Tb||0},reset:function(){b={}},qg:a};e.onFnConsume=e.ih;e.consumeFn=e.ve;e.onStorageConsume=e.kh;e.consumeStorage=e.Ba;e.setMax=e.Hh;e.getConsumed=e.Jg;e.reset=e.reset;e.consume=e.qg;return e};var wa=function(a,b){this.F=a;this.O=function(c,d,e){return c.apply(d,e)};this.m=b;this.i=new ra;this.a=this.o=void 0};wa.prototype.add=function(a,b){ya(this,a,b,!1)};var ya=function(a,b,c,d){if(!a.i.m)if(a.F.Ba(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.i;e.set(b,c);e.F["dust."+b]=!0}else a.i.set(b,c)};
wa.prototype.set=function(a,b){this.i.m||(!this.i.has(a)&&this.m&&this.m.has(a)?this.m.set(a,b):(this.F.Ba(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.i.set(a,b)))};wa.prototype.get=function(a){return this.i.has(a)?this.i.get(a):this.m?this.m.get(a):void 0};wa.prototype.has=function(a){return!!this.i.has(a)||!(!this.m||!this.m.has(a))};var za=function(a){var b=new wa(a.F,a);a.o&&(b.o=a.o);b.O=a.O;b.a=a.a;return b};var Ca=function(){},Da=function(a){return"function"==typeof a},p=function(a){return"string"==typeof a},Ea=function(a){return"number"==typeof a&&!isNaN(a)},Ga=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},C=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ha=function(a,b){if(a&&Ga(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ia=function(a,b){if(!Ea(a)||
!Ea(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},La=function(a,b){for(var c=new Ka,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Ma=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Na=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Pa=function(a){return Math.round(Number(a))||0},Qa=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Ra=function(a){var b=[];if(Ga(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Sa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ta=function(){return(new Date).getTime()},Ka=function(){this.prefix="gtm.";this.values={}};Ka.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ka.prototype.get=function(a){return this.values[this.prefix+a]};
var Ua=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Wa=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Xa=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ya=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Za=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},ab=function(a){for(var b=E,c=0;c<a.length-1;c++){if(!b.hasOwnProperty(a[c]))return;b=b[a[c]]}return b},bb=function(a,b){for(var c=
{},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},cb=function(a){var b=[];Ma(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")};var db=function(a,b){ra.call(this);this.a=a;this.O=b};la(db,ra);db.prototype.toString=function(){return this.a};db.prototype.bc=function(){return new h(ta(this))};db.prototype.i=function(a,b){a.F.ve();return this.O.apply(fb(this,a),Array.prototype.slice.call(arguments,1))};var fb=function(a,b){var c=function(d,e){this.i=d;this.m=e};c.prototype.a=function(d){var e=this.m;return Ga(d)?gb(e,d):d};c.prototype.F=function(d){return hb(this.m,d)};c.prototype.o=function(){return b.F};return new c(a,b)};
db.prototype.Ea=function(a,b){try{return this.i.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};var hb=function(a,b){for(var c,d=0;d<b.length&&!(c=gb(a,b[d]),c instanceof pa);d++);return c},gb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof db))throw Error("Attempting to execute non-function "+b[0]+".");return c.i.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.o;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}};var ib=function(){ra.call(this)};la(ib,ra);ib.prototype.bc=function(){return new h(ta(this))};var jb=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|Map|List)$/i,kb={Fn:"function",Map:"Object",List:"Array"},F=function(a,b,c){for(var d=0;d<b.length;d++){var e=jb.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],k=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==k){var n=typeof l;l instanceof db?n="Fn":l instanceof h?n="List":l instanceof ib&&(n="Map");if(n!=k)throw Error("Error in "+
a+". Argument "+f+" has type "+n+", which does not match required type "+(kb[k]||k)+".");}}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var lb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,mb=function(a){if(null==a)return String(a);var b=lb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},nb=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ob=function(a){if(!a||"object"!=mb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!nb(a,"constructor")&&!nb(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||nb(a,b)},G=function(a,b){var c=b||("array"==mb(a)?[]:{}),d;for(d in a)if(nb(a,d)){var e=a[d];"array"==mb(e)?("array"!=mb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):ob(e)?(ob(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var qb=function(a,b){var c=[],d=[],e=function(g,k){for(var l=ta(g),m=0;m<l.length;m++)k[l[m]]=f(g.get(l[m]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(g instanceof h){var l=[];c.push(g);d.push(l);for(var m=g.bc(),n=0;n<m.length();n++)l[m.get(n)]=f(g.get(m.get(n)));return l}if(g instanceof ib){var r={};c.push(g);d.push(r);e(g,r);return r}if(g instanceof db){var t=function(){for(var q=Array.prototype.slice.call(arguments,0),u=0;u<q.length;u++)q[u]=pb(q[u],b);var w=b?b.F:va(),v=new wa(w);b&&
(v.a=b.a);return f(g.i.apply(g,[v].concat(q)))};c.push(g);d.push(t);e(g,t);return t}switch(typeof g){case "boolean":case "number":case "string":case "undefined":return g;case "object":if(null===g)return null}};return f(a)},pb=function(a,b){var c=[],d=[],e=function(g,k){for(var l in g)g.hasOwnProperty(l)&&k.set(l,f(g[l]))},f=function(g){var k=C(c,g);if(-1<k)return d[k];if(Ga(g)||Na(g)){var l=new h([]);c.push(g);d.push(l);for(var m in g)g.hasOwnProperty(m)&&l.set(m,f(g[m]));return l}if(ob(g)){var n=
new ib;c.push(g);d.push(n);e(g,n);return n}if("function"===typeof g){var r=new db("",function(q){for(var u=Array.prototype.slice.call(arguments,0),w=0;w<u.length;w++)u[w]=qb(this.a(u[w]),b);return f((0,this.m.O)(g,g,u))});c.push(g);d.push(r);e(g,r);return r}var t=typeof g;if(null===g||"string"===t||"number"===t||"boolean"===t)return g};return f(a)};var rb={control:function(a,b){return new pa(a,this.a(b))},fn:function(a,b,c){var d=this.m,e=this.a(b);if(!(e instanceof h))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.o().Ba(a.length+f.length);return new db(a,function(){return function(g){var k=za(d);void 0===k.a&&(k.a=this.m.a);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=this.a(l[m]),l[m]instanceof pa)return l[m];for(var n=e.get("length"),r=
0;r<n;r++)r<l.length?k.set(e.get(r),l[r]):k.set(e.get(r),void 0);k.set("arguments",new h(l));var t=hb(k,f);if(t instanceof pa)return"return"===t.a?t.i:t}}())},list:function(a){var b=this.o();b.Ba(arguments.length);for(var c=new h,d=0;d<arguments.length;d++){var e=this.a(arguments[d]);"string"===typeof e&&b.Ba(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.o(),c=new ib,d=0;d<arguments.length-1;d+=2){var e=this.a(arguments[d])+"",f=this.a(arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.Ba(g);c.set(e,f)}return c},undefined:function(){}};function sb(a,b){var c=gb(a,b);if(c instanceof pa||c instanceof db||c instanceof h||c instanceof ib||null===c||void 0===c||"string"===typeof c||"number"===typeof c||"boolean"===typeof c)return c}var tb=function(){this.m=va();this.a=new wa(this.m)},ub=function(a,b,c){var d=new db(b,c);d.m=!0;a.a.set(b,d)};tb.prototype.Zb=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.i(c)};tb.prototype.i=function(a){for(var b,c=0;c<arguments.length;c++)b=sb(this.a,arguments[c]);return b};
tb.prototype.o=function(a,b){var c=za(this.a);c.a=a;for(var d,e=1;e<arguments.length;e++)d=sb(c,arguments[e]);return d};var vb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var wb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof h)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new h(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.i(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.i(a,this.get(e),e,this)&&d.push(this.get(e));return new h(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.i(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.i(a,this.get(e),e,this));return new h(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g==d)throw Error("TypeError: Reduce on List with no elements.");}for(var k=f;k<d;k++)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0==d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var k=f;0<=k;k--)this.has(k)&&(e=b.i(a,e,this.get(k),k,this));return e},reverse:function(){for(var a=vb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):ua(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new h(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.i(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=vb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.i(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):ua(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var xb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),yb=new pa("break"),zb=new pa("continue"),Bb=function(a,b){return this.a(a)+this.a(b)},Cb=function(a,b){return this.a(a)&&this.a(b)},Db=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);if(!(c instanceof h))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"==typeof a){if(0<=C(xb,b))return pb(a[b].apply(a,vb(c)),this.m);throw Error("TypeError: "+b+" is not a function");}if(a instanceof h){if(a.has(b)){var d=a.get(b);if(d instanceof db){var e=vb(c);e.unshift(this.m);return d.i.apply(d,e)}throw Error("TypeError: "+b+" is not a function");}if(0<=C(wb.supportedMethods,b)){var f=vb(c);f.unshift(this.m);
return wb[b].apply(a,f)}}if(a instanceof db||a instanceof ib){if(a.has(b)){var g=a.get(b);if(g instanceof db){var k=vb(c);k.unshift(this.m);return g.i.apply(g,k)}throw Error("TypeError: "+b+" is not a function");}if("toString"==b)return a instanceof db?a.a:a.toString();if("hasOwnProperty"==b)return a.has.apply(a,vb(c))}throw Error("TypeError: Object has no '"+b+"' property.");},Eb=function(a,b){a=this.a(a);if("string"!=typeof a)throw Error("Invalid key name given for assignment.");var c=this.m;if(!c.has(a))throw Error("Attempting to assign to undefined value "+
b);var d=this.a(b);c.set(a,d);return d},Fb=function(a){var b=za(this.m),c=hb(b,Array.prototype.slice.apply(arguments));if(c instanceof pa)return c},Gb=function(){return yb},Hb=function(a){for(var b=this.a(a),c=0;c<b.length;c++){var d=this.a(b[c]);if(d instanceof pa)return d}},Ib=function(a){for(var b=this.m,c=0;c<arguments.length-1;c+=2){var d=arguments[c];if("string"===typeof d){var e=this.a(arguments[c+1]);ya(b,d,e,!0)}}},Jb=function(){return zb},Kb=function(a,b,c){var d=new h;b=this.a(b);for(var e=
0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.m.set(a,this.a(f))},Lb=function(a,b){return this.a(a)/this.a(b)},Mb=function(a,b){return this.a(a)==this.a(b)},Nb=function(a){for(var b,c=0;c<arguments.length;c++)b=this.a(arguments[c]);return b};
function Ob(a,b,c){if("string"==typeof b)for(var d=0;d<b.length;d++){var e=a(d),f=hb(e,c);if(f instanceof pa){if("break"==f.a)break;if("return"==f.a)return f}}else if(b instanceof ib||b instanceof h||b instanceof db)for(var g=b.bc(),k=g.length(),l=0;l<k;l++){var m=a(g.get(l)),n=hb(m,c);if(n instanceof pa){if("break"==n.a)break;if("return"==n.a)return n}}}
var Pb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){d.set(a,e);return d},b,c)},Qb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=za(d);ya(f,a,e,!0);return f},b,c)},Rb=function(a,b,c){a=this.a(a);b=this.a(b);c=this.a(c);var d=this.m;return Ob(function(e){var f=za(d);f.add(a,e);return f},b,c)},Tb=function(a){return this.m.get(this.a(a))},Ub=function(a,b){var c;a=this.a(a);b=this.a(b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+
a+".");a instanceof ib||a instanceof h||a instanceof db?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c},Vb=function(a,b){return this.a(a)>this.a(b)},Wb=function(a,b){return this.a(a)>=this.a(b)},Xb=function(a,b){return this.a(a)===this.a(b)},Yb=function(a,b){return this.a(a)!==this.a(b)},Zb=function(a,b,c){var d=[];this.a(a)?d=this.a(b):c&&(d=this.a(c));var e=this.F(d);if(e instanceof pa)return e},$b=function(a,b){return this.a(a)<this.a(b)},ac=function(a,b){return this.a(a)<=
this.a(b)},bc=function(a,b){return this.a(a)%this.a(b)},cc=function(a,b){return this.a(a)*this.a(b)},dc=function(a){return-this.a(a)},ec=function(a){return!this.a(a)},fc=function(a,b){return this.a(a)!=this.a(b)},gc=function(){return null},hc=function(a,b){return this.a(a)||this.a(b)},ic=function(a,b){var c=this.a(a);this.a(b);return c},jc=function(a){return this.a(a)},kc=function(a){return Array.prototype.slice.apply(arguments)},lc=function(a){return new pa("return",this.a(a))},mc=function(a,b,c){a=
this.a(a);b=this.a(b);c=this.a(c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof db||a instanceof h||a instanceof ib)&&a.set(b,c);return c},nc=function(a,b){return this.a(a)-this.a(b)},oc=function(a,b,c){a=this.a(a);var d=this.a(b),e=this.a(c);if(!Ga(d)||!Ga(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,k=0;k<d.length;k++)if(g||a===this.a(d[k]))if(f=this.a(e[k]),f instanceof pa){var l=f.a;if("break"==l)return;if("return"==
l||"continue"==l)return f}else g=!0;if(e.length==d.length+1&&(f=this.a(e[e.length-1]),f instanceof pa&&("return"==f.a||"continue"==f.a)))return f},pc=function(a,b,c){return this.a(a)?this.a(b):this.a(c)},qc=function(a){a=this.a(a);return a instanceof db?"function":typeof a},rc=function(a){for(var b=this.m,c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}},sc=function(a,b,c,d){var e,f=this.a(d);if(this.a(c)&&(e=this.F(f),e instanceof pa)){if("break"==e.a)return;if("return"==
e.a)return e}for(;this.a(a);){e=this.F(f);if(e instanceof pa){if("break"==e.a)break;if("return"==e.a)return e}this.a(b)}},tc=function(a){return~Number(this.a(a))},uc=function(a,b){return Number(this.a(a))<<Number(this.a(b))},vc=function(a,b){return Number(this.a(a))>>Number(this.a(b))},wc=function(a,b){return Number(this.a(a))>>>Number(this.a(b))},xc=function(a,b){return Number(this.a(a))&Number(this.a(b))},yc=function(a,b){return Number(this.a(a))^Number(this.a(b))},zc=function(a,b){return Number(this.a(a))|
Number(this.a(b))};var Bc=function(){this.a=new tb;Ac(this)};Bc.prototype.Zb=function(a){return this.a.i(a)};
var Dc=function(a,b){return Cc.a.o(a,b)},Ac=function(a){function b(e,f){var g=d.a,k=String(f);rb.hasOwnProperty(e)&&ub(g,k||e,rb[e])}function c(e,f){ub(d.a,String(e),f)}var d=a;b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);c(0,Bb);c(1,Cb);c(2,Db);c(3,Eb);c(53,Fb);c(4,Gb);c(5,Hb);c(52,Ib);c(6,Jb);c(9,Hb);c(50,Kb);c(10,Lb);c(12,Mb);c(13,Nb);c(47,Pb);c(54,Qb);c(55,Rb);c(15,Tb);c(16,Ub);c(17,Ub);c(18,Vb);c(19,Wb);c(20,Xb);c(21,Yb);c(22,Zb);c(23,$b);c(24,ac);c(25,bc);c(26,cc);c(27,
dc);c(28,ec);c(29,fc);c(45,gc);c(30,hc);c(32,ic);c(33,ic);c(34,jc);c(35,jc);c(46,kc);c(36,lc);c(43,mc);c(37,nc);c(38,oc);c(39,pc);c(40,qc);c(41,rc);c(42,sc);c(58,tc);c(57,uc);c(60,vc);c(61,wc);c(56,xc);c(62,yc);c(59,zc)},Fc=function(){var a=Cc,b=Ec();ub(a.a,"require",b)},Gc=function(a,b){a.a.a.O=b};
var Hc=[],Ic={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Jc=function(a){return Ic[a]},Kc=/[\x00\x22\x26\x27\x3c\x3e]/g;var Oc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Pc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},Qc=function(a){return Pc[a]};Hc[7]=function(a){return String(a).replace(Oc,Qc)};
Hc[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Oc,Qc)+"'"}};var Xc=/['()]/g,Yc=function(a){return"%"+a.charCodeAt(0).toString(16)};Hc[12]=function(a){var b=
encodeURIComponent(String(a));Xc.lastIndex=0;return Xc.test(b)?b.replace(Xc,Yc):b};var Zc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,$c={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ad=function(a){return $c[a]};Hc[16]=function(a){return a};var cd;
var dd=[],ed=[],fd=[],gd=[],hd=[],id={},jd,kd,ld,md=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},nd=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=id[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):cd(c,e,b)},pd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=od(a[e],b,c));
return d},qd=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=id[b];return c?c.priorityOverride||0:0},od=function(a,b,c){if(Ga(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(od(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var g=dd[f];if(!g||b.dd(g))return;c[f]=!0;try{var k=pd(g,b,c);k.vtp_gtmEventId=b.id;d=nd(k,b);ld&&(d=ld.sg(d,k))}catch(x){b.Ne&&b.Ne(x,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[od(a[l],b,c)]=od(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=od(a[n],b,c);kd&&(m=m||r===kd.Mb);d.push(r)}return kd&&m?kd.wg(d):d.join("");case "escape":d=od(a[1],b,c);if(kd&&Ga(a[1])&&"macro"===a[1][0]&&kd.Vg(a))return kd.ph(d);d=String(d);for(var t=2;t<a.length;t++)Hc[a[t]]&&(d=Hc[a[t]](d));return d;case "tag":var q=a[1];if(!gd[q])throw Error("Unable to resolve tag reference "+q+".");return d={Ae:a[2],
index:q};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var w=rd(u,b,c),v=!!a[4];return v||2!==w?v!==(1===w):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},rd=function(a,b,c){try{return jd(pd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var sd=function(){var a=function(b){return{toString:function(){return b}}};return{Id:a("convert_case_to"),Jd:a("convert_false_to"),Kd:a("convert_null_to"),Ld:a("convert_true_to"),Md:a("convert_undefined_to"),$h:a("debug_mode_metadata"),xa:a("function"),sf:a("instance_name"),wf:a("live_only"),yf:a("malware_disabled"),zf:a("metadata"),ai:a("original_vendor_template_id"),Df:a("once_per_event"),Td:a("once_per_load"),ae:a("setup_tags"),ce:a("tag_id"),de:a("teardown_tags")}}();var td=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.i=a;this.a=c};la(td,Error);function ud(a,b){if(Ga(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ud(a[c],b[c])}};var vd=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.m=a;this.i=b;this.a=[]};la(vd,Error);var wd=function(a){var b=a.a.slice();a.i&&(b=a.i(b));return b};var yd=function(){return function(a,b){a instanceof vd||(a=new vd(a,xd));b&&a.a.push(b);throw a;}};function xd(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)Ea(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var zd=null,Cd=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}var c=[],d=[];zd=Ad(a);for(var e=0;e<ed.length;e++){var f=ed[e],g=Bd(f);if(g){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===g&&b(f.block||[])}for(var m=[],n=0;n<gd.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Bd=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=zd(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var g=zd(e[f]);if(2===g)return null;
if(1===g)return!1}return!0},Ad=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=rd(fd[c],a));return b[c]}};var Dd=function(){this.a={}};function Ed(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(k){g="string"===typeof k?g+(": "+k):k instanceof Error?g+(": "+k.message):g+"."}if(!f)throw new td(c,d,g);}}function Fd(a,b,c){return function(){var d=arguments[0];if(d){var e=a.a[d],f=a.a.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));Ed(e,b,d,g);Ed(f,b,d,g)}}}};var Jd=function(a){var b=Gd.w,c=this;this.i=new Dd;this.a={};var d={},e=Fd(this.i,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Ma(a,function(f,g){var k={};Ma(g,function(l,m){var n=Hd(l,m);k[l]=n.assert;d[l]||(d[l]=n.K)});c.a[f]=function(l,m){var n=k[l];if(!n)throw Id(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);n.apply(void 0,r);e.apply(void 0,r)}})},Ld=function(a){return Kd.a[a]||
function(){}};function Hd(a,b){var c=md(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=Id;try{return nd(c)}catch(d){return{assert:function(e){throw new td(e,{},"Permission "+e+" is unknown.");},K:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function Id(a,b,c){return new td(a,b,c)};var Nd=!1;var Od={};Od.Qh=Qa('');Od.Cg=Qa('');var Pd=Nd,Qd=Od.Cg,Rd=Od.Qh;
var ee=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},fe=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;ee(b,"/*")&&(b=b.slice(0,-2));ee(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var k=d[d.length-1];return a.lastIndexOf(k)===a.length-k.length},ge=/^[a-z0-9-]+$/i,he=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
ie=function(a,b){var c;if(!(c="https:"!=a.protocol||a.port&&"443"!=a.port)){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!ge.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var k;var l=a,m=b[g];if(!he.exec(m))throw Error("Invalid Wildcard");var n=m.slice(8),r=n.slice(0,n.indexOf("/")),t;var q=l.hostname,u=r;if(0!==u.indexOf("*."))t=q.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var w=q.toLowerCase().indexOf(u.toLowerCase());
t=-1===w?!1:q.length===u.length?!0:q.length!==u.length+w?!1:"."===q[w-1]}if(t){var v=n.slice(n.indexOf("/"));k=fe(l.pathname+l.search,v)?!0:!1}else k=!1;if(k)return!0}return!1};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var je,ke=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.eg&&(l["fix_"+m]=!0),l.Ce=l.Ce||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var q=k.indexOf("--\x3e");if(0<=q)return{content:k.substr(4,q),length:q+3}},endTag:function(){var q=k.match(d);if(q)return{tagName:q[1],length:q[0].length}},atomicTag:function(){var q=r.startTag();
if(q){var u=k.slice(q.length);if(u.match(new RegExp("</\\s*"+q.tagName+"\\s*>","i"))){var w=u.match(new RegExp("([\\s\\S]*?)</\\s*"+q.tagName+"\\s*>","i"));if(w)return{tagName:q.tagName,T:q.T,content:w[1],length:w[0].length+q.length}}}},startTag:function(){var q=k.match(c);if(q){var u={};q[2].replace(e,function(w,v,x,y,A){var B=x||y||A||f.test(v)&&v||null,z=document.createElement("div");z.innerHTML=B;u[v]=z.textContent||z.innerText||B});return{tagName:q[1],T:u,Fb:!!q[3],length:q[0].length}}},chars:function(){var q=
k.indexOf("<");return{length:0<=q?q:k.length}}},t=function(){for(var q in n)if(n[q].test(k)){var u=r[q]();return u?(u.type=u.type||q,u.text=k.substr(0,u.length),k=k.slice(u.length),u):null}};l.Ce&&function(){var q=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,u=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,w=[];w.Le=function(){return this[this.length-1]};w.fd=function(z){var D=this.Le();return D&&D.tagName&&D.tagName.toUpperCase()===z.toUpperCase()};w.rg=
function(z){for(var D=0,H;H=this[D];D++)if(H.tagName===z)return!0;return!1};var v=function(z){z&&"startTag"===z.type&&(z.Fb=q.test(z.tagName)||z.Fb);return z},x=t,y=function(){k="</"+w.pop().tagName+">"+k},A={startTag:function(z){var D=z.tagName;"TR"===D.toUpperCase()&&w.fd("TABLE")?(k="<TBODY>"+k,B()):l.ji&&u.test(D)&&w.rg(D)?w.fd(D)?y():(k="</"+z.tagName+">"+k,B()):z.Fb||w.push(z)},endTag:function(z){w.Le()?l.Eg&&!w.fd(z.tagName)?y():w.pop():l.Eg&&(x(),B())}},B=function(){var z=k,D=v(x());k=z;if(D&&
A[D.type])A[D.type](D)};t=function(){B();return v(x())}}();return{append:function(q){k+=q},wh:t,oi:function(q){for(var u;(u=t())&&(!q[u.type]||!1!==q[u.type](u)););},clear:function(){var q=k;k="";return q},ri:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.ui="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.si=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.m=b;a.s=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.T){var t=m.T[r];n+=
" "+r+'="'+(t?t.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.Fb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.i=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var g in b)a.a=a.a||!b[g]&&g;je=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,t,q){var u,w=r&&r.length||0;for(u=0;u<w;u++)t.call(q,r[u],u)}function d(r,t,q){for(var u in r)r.hasOwnProperty(u)&&t.call(q,u,r[u])}function e(r,
t){d(t,function(q,u){r[q]=u});return r}function f(r,t){r=r||{};d(t,function(q,u){b(r[q])||(r[q]=u)});return r}function g(r){try{return m.call(r)}catch(q){var t=[];c(r,function(u){t.push(u)});return t}}var k={Vf:a,Wf:a,Xf:a,Yf:a,fg:a,gg:function(r){return r},done:a,error:function(r){throw r;},zh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(q,u,w){var v="data-ps-"+u;if(2===arguments.length){var x=q.getAttribute(v);return b(x)?String(x):x}b(w)&&""!==w?q.setAttribute(v,
w):q.removeAttribute(v)}function t(q,u){var w=q.ownerDocument;e(this,{root:q,options:u,Gb:w.defaultView||w.parentWindow,Ra:w,qc:je("",{eg:!0}),Sc:[q],qd:"",rd:w.createElement(q.nodeName),Cb:[],Ha:[]});r(this.rd,"proxyof",0)}t.prototype.write=function(){[].push.apply(this.Ha,arguments);for(var q;!this.Vb&&this.Ha.length;)q=this.Ha.shift(),"function"===typeof q?this.lg(q):this.Bd(q)};t.prototype.lg=function(q){var u={type:"function",value:q.name||q.toString()};this.md(u);q.call(this.Gb,this.Ra);this.Re(u)};
t.prototype.Bd=function(q){this.qc.append(q);for(var u,w=[],v,x;(u=this.qc.wh())&&!(v=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("script"):!1)&&!(x=u&&"tagName"in u?!!~u.tagName.toLowerCase().indexOf("style"):!1);)w.push(u);this.Vh(w);v&&this.Og(u);x&&this.Pg(u)};t.prototype.Vh=function(q){var u=this.ig(q);u.qe&&(u.bd=this.qd+u.qe,this.qd+=u.th,this.rd.innerHTML=u.bd,this.Sh())};t.prototype.ig=function(q){var u=this.Sc.length,w=[],v=[],x=[];c(q,function(y){w.push(y.text);if(y.T){if(!/^noscript$/i.test(y.tagName)){var A=
u++;v.push(y.text.replace(/(\/?>)/," data-ps-id="+A+" $1"));"ps-script"!==y.T.id&&"ps-style"!==y.T.id&&x.push("atomicTag"===y.type?"":"<"+y.tagName+" data-ps-proxyof="+A+(y.Fb?" />":">"))}}else v.push(y.text),x.push("endTag"===y.type?y.text:"")});return{vi:q,raw:w.join(""),qe:v.join(""),th:x.join("")}};t.prototype.Sh=function(){for(var q,u=[this.rd];b(q=u.shift());){var w=1===q.nodeType;if(!w||!r(q,"proxyof")){w&&(this.Sc[r(q,"id")]=q,r(q,"id",null));var v=q.parentNode&&r(q.parentNode,"proxyof");
v&&this.Sc[v].appendChild(q)}u.unshift.apply(u,g(q.childNodes))}};t.prototype.Og=function(q){var u=this.qc.clear();u&&this.Ha.unshift(u);q.src=q.T.src||q.T.bi;q.src&&this.Cb.length?this.Vb=q:this.md(q);var w=this;this.Uh(q,function(){w.Re(q)})};t.prototype.Pg=function(q){var u=this.qc.clear();u&&this.Ha.unshift(u);q.type=q.T.type||q.T.TYPE||"text/css";this.Wh(q);u&&this.write()};t.prototype.Wh=function(q){var u=this.kg(q);this.Sg(u);q.content&&(u.styleSheet&&!u.sheet?u.styleSheet.cssText=q.content:
u.appendChild(this.Ra.createTextNode(q.content)))};t.prototype.kg=function(q){var u=this.Ra.createElement(q.tagName);u.setAttribute("type",q.type);d(q.T,function(w,v){u.setAttribute(w,v)});return u};t.prototype.Sg=function(q){this.Bd('<span id="ps-style"/>');var u=this.Ra.getElementById("ps-style");u.parentNode.replaceChild(q,u)};t.prototype.md=function(q){q.lh=this.Ha;this.Ha=[];this.Cb.unshift(q)};t.prototype.Re=function(q){q!==this.Cb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Cb.shift(),this.write.apply(this,q.lh),!this.Cb.length&&this.Vb&&(this.md(this.Vb),this.Vb=null))};t.prototype.Uh=function(q,u){var w=this.jg(q),v=this.Jh(w),x=this.options.Vf;q.src&&(w.src=q.src,this.Eh(w,v?x:function(){u();x()}));try{this.Rg(w),q.src&&!v||u()}catch(y){this.options.error(y),u()}};t.prototype.jg=function(q){var u=this.Ra.createElement(q.tagName);d(q.T,function(w,v){u.setAttribute(w,v)});q.content&&(u.text=q.content);return u};t.prototype.Rg=function(q){this.Bd('<span id="ps-script"/>');
var u=this.Ra.getElementById("ps-script");u.parentNode.replaceChild(q,u)};t.prototype.Eh=function(q,u){function w(){q=q.onload=q.onreadystatechange=q.onerror=null}var v=this.options.error;e(q,{onload:function(){w();u()},onreadystatechange:function(){/^(loaded|complete)$/.test(q.readyState)&&(w(),u())},onerror:function(){var x={message:"remote script failed "+q.src};w();v(x);u()}})};t.prototype.Jh=function(q){return!/^script$/i.test(q.nodeName)||!!(this.options.zh&&q.src&&q.hasAttribute("async"))};
return t}();l.postscribe=function(){function r(){var v=u.shift(),x;v&&(x=v[v.length-1],x.Wf(),v.stream=t.apply(null,v),x.Xf())}function t(v,x,y){function A(H){H=y.gg(H);w.write(H);y.Yf(H)}w=new n(v,y);w.id=q++;w.name=y.name||w.id;var B=v.ownerDocument,z={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return A(g(arguments).join(""))},writeln:function(){return A(g(arguments).join("")+"\n")}});var D=w.Gb.onerror||a;w.Gb.onerror=function(H,M,O){y.error({mi:H+
" - "+M+":"+O});D.apply(w.Gb,arguments)};w.write(x,function(){e(B,z);w.Gb.onerror=D;y.done();w=null;r()});return w}var q=0,u=[],w=null;return e(function(v,x,y){"function"===typeof y&&(y={done:y});y=f(y,k);v=/^#/.test(v)?l.document.getElementById(v.substr(1)):v.li?v[0]:v;var A=[v,x,y];v.oh={cancel:function(){A.stream?A.stream.abort():A[1]=a}};y.fg(A);u.push(A);w||r();return v.oh},{streams:{},ni:u,di:n})}();ke=l.postscribe}})();function le(a){return""+a}
function me(a,b){var c=[];return c};var ne=function(a,b){var c=new db(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=this.a(d[e]);return b.apply(this,d)});c.m=!0;return c},oe=function(a,b){var c=new ib,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Da(e)?c.set(d,ne(a+"_"+d,e)):(Ea(e)||p(e)||"boolean"==typeof e)&&c.set(d,e)}c.m=!0;return c};var pe=function(a,b){F(this.i.a,["apiName:!string","message:?string"],arguments);var c={},d=new ib;return d=oe("AssertApiSubject",c)};var qe=function(a,b){F(this.i.a,["actual:?*","message:?string"],arguments);var c={},d=new ib;return d=oe("AssertThatSubject",c)};function re(a){return function(){for(var b=[],c=this.m,d=0;d<arguments.length;++d)b.push(qb(arguments[d],c));return pb(a.apply(null,b))}}var te=function(){for(var a=Math,b=se,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=re(a[e].bind(a)))}return c};var ue=function(a){var b;return b};var ve=function(a){var b;return b};var we=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURI(a)};var xe=function(a){F(this.i.a,["uri:!string"],arguments);return encodeURIComponent(a)};var ye=function(a){F(this.i.a,["message:?string"],arguments);};var ze=function(a,b){F(this.i.a,["min:!number","max:!number"],arguments);return Ia(a,b)};var Ae=function(){return(new Date).getTime()};var Be=function(a,b,c){var d=a.m.a;if(!d)throw Error("Missing program state.");d.dg.apply(null,Array.prototype.slice.call(arguments,1))};var Ce=function(){Be(this,"read_container_data");var a=new ib;a.set("containerId",'GTM-B4QK');a.set("version",'375');a.set("environmentName",'');a.set("debugMode",Pd);a.set("previewMode",Rd);a.set("environmentMode",Qd);a.m=!0;return a};var De=function(a){return null===a?"null":a instanceof h?"array":a instanceof db?"function":typeof a};var Ee=function(a){function b(c){return function(d){try{return c(d)}catch(e){(Pd||Rd)&&a.call(this,e.message)}}}return{parse:b(function(c){return pb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(qb(c))})}};var Fe=function(a){return Pa(qb(a,this.m))};var Ge=function(a){return Number(qb(a,this.m))};var He=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var Ie=function(a,b,c){var d=null,e=!1;return e?d:null};var se="floor ceil round max min abs pow sqrt".split(" ");var Je=function(){var a={};return{Kg:function(b){return a.hasOwnProperty(b)?a[b]:void 0},Ih:function(b,c){a[b]=c},reset:function(){a={}}}},Ke=function(a,b){F(this.i.a,["apiName:!string","mock:?*"],arguments);};var Le=function(){this.a={}};Le.prototype.get=function(a,b){var c=this.a.hasOwnProperty(a)?this.a[a]:void 0;return c};Le.prototype.add=function(a,b,c){if(this.a.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";this.a[a]=c?void 0:Da(b)?ne(a,b):oe(a,b)};function Me(){var a={};return a};var I={eb:"_ee",Qc:"_syn",ci:"_uei",Gc:"event_callback",Lb:"event_timeout",J:"gtag.config",ja:"allow_ad_personalization_signals",Hc:"restricted_data_processing",ab:"allow_google_signals",ka:"cookie_expires",Kb:"cookie_update",cb:"session_duration",la:"user_properties",wa:"transport_url",N:"ads_data_redaction"};I.Je=[I.ja,I.ab,I.Kb];I.Me=[I.ka,I.Lb,I.cb];var E=window,K=document,Ne=navigator,Oe=K.currentScript&&K.currentScript.src,Pe=function(a,b){var c=E[a];E[a]=void 0===c?b:c;return E[a]},Qe=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Re=function(a,b,c){var d=K.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;Qe(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var f=ma.document,g=f.querySelector&&f.querySelector("script[nonce]");
if(g){var k=g.nonce||g.getAttribute("nonce");if(k&&na.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=K.getElementsByTagName("script")[0]||K.body||K.head;l.parentNode.insertBefore(d,l);return d},Se=function(){if(Oe){var a=Oe.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Te=function(a,b){var c=K.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=K.body&&K.body.lastChild||
K.body||K.head;d.parentNode.insertBefore(c,d);Qe(c,b);void 0!==a&&(c.src=a);return c},Ue=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Ve=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},We=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},N=function(a){E.setTimeout(a,0)},Xe=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Ye=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Ze=function(a){var b=K.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},$e=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},af=function(a){Ne.sendBeacon&&Ne.sendBeacon(a)||Ue(a)},bf=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var cf={},R=function(a,b){cf[a]=cf[a]||[];cf[a][b]=!0},df=function(a){for(var b=[],c=cf[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ef=[];function ff(){var a=Pe("google_tag_data",{});a.ics||(a.ics={entries:{},set:gf,update:hf,addListener:jf,notifyListeners:kf,active:!1});return a.ics}
function gf(a,b,c,d,e,f){var g=ff();g.active=!0;if(void 0!=b){var k=g.entries,l=k[a]||{},m=l.region,n=c&&p(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(n===e||(n===d?m!==e:!n&&!m)){var r=!!(f&&0<f&&void 0===l.update),t={region:n,initial:"granted"===b,update:l.update,quiet:r};k[a]=t;r&&E.setTimeout(function(){k[a]===t&&t.quiet&&(t.quiet=!1,lf(a),kf(),R("TAGGING",2))},f)}}}
function hf(a,b){var c=ff();c.active=!0;if(void 0!=b){var d=mf(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=mf(a);f.quiet?(f.quiet=!1,lf(a)):g!==d&&lf(a)}}function jf(a,b){ef.push({ue:a,Fg:b})}function lf(a){for(var b=0;b<ef.length;++b){var c=ef[b];Ga(c.ue)&&-1!==c.ue.indexOf(a)&&(c.Ve=!0)}}function kf(){for(var a=0;a<ef.length;++a){var b=ef[a];if(b.Ve){b.Ve=!1;try{b.Fg.call()}catch(c){}}}}
var mf=function(a){var b=ff().entries[a]||{};return void 0!==b.update?b.update:void 0!==b.initial?b.initial:void 0},nf=function(a){return!(ff().entries[a]||{}).quiet},of=function(){return ff().active},pf=function(a,b){ff().addListener(a,b)},qf=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!nf(b[e]))return!0;return!1}if(c()){var d=!1;pf(b,function(){d||c()||(d=!0,a())})}else a()},rf=function(a,b){if(!1===mf(b)){var c=!1;pf([b],function(){!c&&mf(b)&&(a(),c=!0)})}};var sf=[I.s,I.I],tf=function(a){var b=a[I.vh];b&&R("GTM",40);var c=a[I.Dh];c&&R("GTM",41);for(var d=Ga(b)?b:[b],e=0;e<d.length;++e)for(var f=0;f<sf.length;f++){var g=sf[f],k=a[sf[f]],l=d[e];ff().set(g,k,l,"RO","RO-B",c)}},uf=function(a){for(var b=0;b<sf.length;b++){var c=sf[b],d=a[sf[b]];ff().update(c,d)}ff().notifyListeners()},vf=function(a){var b=mf(a);return void 0!=b?b:!0},wf=function(){for(var a=[],b=0;b<sf.length;b++){var c=mf(sf[b]);a[b]=!0===c?"1":!1===c?"0":"-"}return"G1"+
a.join("")},xf=function(a){rf(a,I.s)},yf=function(a,b){qf(a,b)};var Af=function(a){return zf?K.querySelectorAll(a):null},Bf=function(a,b){if(!zf)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!K.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Cf=!1;if(K.querySelectorAll)try{var Df=K.querySelectorAll(":root");Df&&1==Df.length&&Df[0]==K.documentElement&&(Cf=!0)}catch(a){}var zf=Cf;var Gd={},Rf=null,Sf=Math.random();Gd.w="GTM-B4QK";Gd.Qb="5k1";Gd.Sd="";var Tf={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Uf="www.googletagmanager.com/gtm.js";
var Vf=Uf,Wf=null,Xf=null,Yf=null,Zf="//www.googletagmanager.com/a?id="+Gd.w+"&cv=375",$f={},ag={},bg=function(){var a=Rf.sequence||0;Rf.sequence=a+1;return a};
var cg=function(){return"&tc="+gd.filter(function(a){return a}).length},fg=function(){dg||(dg=E.setTimeout(eg,500))},eg=function(){dg&&(E.clearTimeout(dg),dg=void 0);void 0===gg||hg[gg]&&!ig&&!jg||(kg[gg]||lg.Xg()||0>=mg--?(R("GTM",1),kg[gg]=!0):(lg.xh(),Ue(ng()),hg[gg]=!0,og=pg=jg=ig=""))},ng=function(){var a=gg;if(void 0===a)return"";var b=df("GTM"),c=df("TAGGING");return[qg,hg[a]?"":"&es=1",rg[a],b?"&u="+b:"",c?"&ut="+c:"",cg(),ig,jg,pg,og,"&z=0"].join("")},sg=function(){return[Zf,"&v=3&t=t","&pid="+
Ia(),"&rv="+Gd.Qb].join("")},tg="0.005000">Math.random(),qg=sg(),ug=function(){qg=sg()},hg={},ig="",jg="",og="",pg="",gg=void 0,rg={},kg={},dg=void 0,lg=function(a,b){var c=0,d=0;return{Xg:function(){if(c<a)return!1;Ta()-d>=b&&(c=0);return c>=a},xh:function(){Ta()-d>=b&&(c=0);c++;d=Ta()}}}(2,1E3),mg=1E3,vg=function(a,b){if(tg&&!kg[a]&&gg!==a){eg();gg=a;og=ig="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";rg[a]="&e="+c+"&eid="+a;fg()}},wg=function(a,b,c){if(tg&&!kg[a]&&
b){a!==gg&&(eg(),gg=a);var d,e=String(b[sd.xa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;ig=ig?ig+"."+f:"&tr="+f;var g=b["function"];if(!g)throw Error("Error: No function name given for function call.");var k=(id[g]?"1":"2")+d;og=og?og+"."+k:"&ti="+k;fg();2022<=ng().length&&eg()}},xg=function(a,b,c){if(tg&&!kg[a]){a!==gg&&(eg(),gg=a);var d=c+b;jg=jg?jg+
"."+d:"&epr="+d;fg();2022<=ng().length&&eg()}};var yg={},zg=new Ka,Ag={},Bg={},Eg={name:"dataLayer",set:function(a,b){G(bb(a,b),Ag);Cg()},get:function(a){return Dg(a,2)},reset:function(){zg=new Ka;Ag={};Cg()}},Dg=function(a,b){if(2!=b){var c=zg.get(a);if(tg){var d=Fg(a);c!==d&&R("GTM",5)}return c}return Fg(a)},Fg=function(a){var b=a.split("."),c=!1,d=void 0;return c?d:Gg(b)},Gg=function(a){for(var b=Ag,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Hg=function(a,b){Bg.hasOwnProperty(a)||(zg.set(a,b),G(bb(a,b),Ag),Cg())},Cg=function(a){Ma(Bg,function(b,c){zg.set(b,c);G(bb(b,void 0),Ag);G(bb(b,c),Ag);a&&delete Bg[b]})},Ig=function(a,b,c){yg[a]=yg[a]||{};var d=1!==c?Fg(b):zg.get(b);"array"===mb(d)||"object"===mb(d)?yg[a][b]=G(d):yg[a][b]=d},Jg=function(a,b){if(yg[a])return yg[a][b]},Kg=function(a,b){yg[a]&&delete yg[a][b]};var Ng=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Og=/:[0-9]+$/,Pg=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var k=f[g].split("=");if(decodeURIComponent(k[0]).replace(/\+/g," ")===b){var l=k.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},Sg=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Qg(a.protocol)||Qg(E.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
E.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||E.location.hostname).replace(Og,"").toLowerCase());return Rg(a,b,c,d,e)},Rg=function(a,b,c,d,e){var f,g=Qg(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=Tg(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(Og,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||R("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=C(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=Pg(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},Qg=function(a){return a?a.replace(":",
"").toLowerCase():""},Tg=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},Ug=function(a){var b=K.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||R("TAGGING",1),c="/"+c);var d=b.hostname.replace(Og,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},Vg=function(a){function b(m){var n=m.split("=")[0];return 0>d.indexOf(n)?m:n+"=0"}function c(m){return m.split("&").map(b).filter(function(n){return void 0!=
n}).join("&")}var d="gclid dclid gclaw gcldc gclgp gclha gclgf _gl".split(" "),e=Ug(a),f=a.split(/[?#]/)[0],g=e.search,k=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===k[0]&&(k=k.substring(1));g=c(g);k=c(k);""!==g&&(g="?"+g);""!==k&&(k="#"+k);var l=""+f+g+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};function Wg(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),k=g[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};var Xg={},Yg=function(a){return void 0==Xg[a]?!1:Xg[a]};var $g=function(a,b,c,d){return Zg(d)?Wg(a,String(b||document.cookie),c):[]},ch=function(a,b,c,d,e){if(Zg(e)){var f=ah(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=bh(f,function(g){return g.Wb},b);if(1===f.length)return f[0].id;f=bh(f,function(g){return g.Ab},c);return f[0]?f[0].id:void 0}}};function dh(a,b,c,d){var e=document.cookie;document.cookie=a;var f=document.cookie;return e!=f||void 0!=c&&0<=$g(b,f,!1,d).indexOf(c)}
var hh=function(a,b,c,d){function e(v,x,y){if(null==y)return delete k[x],v;k[x]=y;return v+"; "+x+"="+y}function f(v,x){if(null==x)return delete k[x],v;k[x]=!0;return v+"; "+x}if(!Zg(c.Da))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=eh(b),g=a+"="+b);var k={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.fh);g=e(g,"samesite",
c.Bh);c.Fh&&(g=f(g,"secure"));g=f(g,c.flags);var m=c.domain;if("auto"===m){for(var n=fh(),r=void 0,t=!1,q=0;q<n.length;++q){var u="none"!==n[q]?n[q]:void 0,w=e(g,"domain",u);try{d&&d(a,k)}catch(v){r=v;continue}t=!0;if(!gh(u,c.path)&&dh(w,a,b,c.Da))return 0}if(r&&!t)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));d&&d(a,k);return gh(m,c.path)?1:dh(g,a,b,c.Da)?0:1},ih=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return hh(a,b,c)};
function bh(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var k=a[g],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function ah(a,b,c){for(var d=[],e=$g(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),k=g.shift();if(!b||-1!==b.indexOf(k)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),Wb:1*l[0]||1,Ab:1*l[1]||1}))}}return d}
var eh=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},jh=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,kh=/(^|\.)doubleclick\.net$/i,gh=function(a,b){return kh.test(document.location.hostname)||"/"===b&&jh.test(a)},fh=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;kh.test(e)||jh.test(e)||a.push("none");
return a},Zg=function(a){if(!Yg("gtag_cs_api")||!a||!of())return!0;if(!nf(a))return!1;var b=mf(a);return null==b?!0:!!b};var mh=function(){for(var a=Ne.userAgent+(K.cookie||"")+(K.referrer||""),b=a.length,c=E.history.length;0<c;)a+=c--^b++;var d=1,e,f,g;if(a)for(d=0,f=a.length-1;0<=f;f--)g=a.charCodeAt(f),d=(d<<6&268435455)+g+(g<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Ta()/1E3)].join(".")},ph=function(a,b,c,d,e){var f=nh(b);return ch(a,f,oh(c),d,e)},qh=function(a,b,c,d){var e=""+nh(c),f=oh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},nh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},oh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function rh(a,b,c){var d,e=a.yb;null==e&&(e=7776E3);0!==e&&(d=new Date((b||Ta())+1E3*e));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var sh=["1"],th={},xh=function(a){var b=uh(a.prefix);th[b]||vh(b,a.path,a.domain)||(wh(b,mh(),a),vh(b,a.path,a.domain))};function wh(a,b,c){var d=qh(b,"1",c.domain,c.path),e=rh(c);e.Da="ad_storage";ih(a,d,e)}function vh(a,b,c){var d=ph(a,b,c,sh,"ad_storage");d&&(th[a]=d);return d}function uh(a){return(a||"_gcl")+"_au"};function yh(){for(var a=zh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Ah(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var zh,Bh;function Ch(a){zh=zh||Ah();Bh=Bh||yh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),g=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|g>>4,n=(g&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(zh[l],zh[m],zh[n],zh[r])}return b.join("")}
function Dh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=Bh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}zh=zh||Ah();Bh=Bh||yh();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=k&&(c+=String.fromCharCode(g<<6&192|k)))}};var Eh;var Ih=function(){var a=Fh,b=Gh,c=Hh(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){Ve(K,"mousedown",d);Ve(K,"keyup",d);Ve(K,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},Jh=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};Hh().decorators.push(f)},Kh=function(a,b,c){for(var d=Hh().decorators,e={},f=0;f<d.length;++f){var g=
d[f],k;if(k=!c||g.forms)a:{var l=g.domains,m=a,n=!!g.sameHost;if(l&&(n||m!==K.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[r])||n&&0<=l[r].indexOf(m)){k=!0;break a}k=!1}if(k){var t=g.placement;void 0==t&&(t=g.fragment?2:1);t===b&&Xa(e,g.callback())}}return e},Hh=function(){var a=Pe("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Lh=/(.*?)\*(.*?)\*(.*)/,Mh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Nh=/^(?:www\.|m\.|amp\.)+/,Oh=/([^?#]+)(\?[^#]*)?(#.*)?/;function Ph(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var Rh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Ch(String(d))))}var e=b.join("*");return["1",Qh(e),e].join("*")},Qh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=Eh)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,k=0;8>k;k++)g=
g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}Eh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Eh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Th=function(){return function(a){var b=Ug(E.location.href),c=b.search.replace("?",""),d=Pg(c,"_gl",!1,!0)||"";a.query=Sh(d)||{};var e=Sg(b,"fragment").match(Ph("_gl"));a.fragment=Sh(e&&e[3]||"")||{}}},Uh=function(a){var b=Th(),c=Hh();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Xa(d,e.query),a&&Xa(d,e.fragment));return d},
Sh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Lh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var k=g[3],l;a:{for(var m=g[2],n=0;n<b;++n)if(m===Qh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},t=k?k.split("*"):[],q=0;q<t.length;q+=2)r[t[q]]=Dh(t[q+1]);return r}}}}catch(u){}};
function Vh(a,b,c,d){function e(n){var r=n,t=Ph(a).exec(r),q=r;if(t){var u=t[2],w=t[4];q=t[1];w&&(q=q+u+w)}n=q;var v=n.charAt(n.length-1);n&&"&"!==v&&(n+="&");return n+m}d=void 0===d?!1:d;var f=Oh.exec(c);if(!f)return"";var g=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+g+k+l}
function Wh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=Kh(b,1,c),e=Kh(b,2,c),f=Kh(b,3,c);if(Ya(d)){var g=Rh(d);c?Xh("_gl",g,a):Yh("_gl",g,a,!1)}if(!c&&Ya(e)){var k=Rh(e);Yh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){Yh(m,n,r,void 0);break a}if("form"===r.tagName.toLowerCase()){Xh(m,n,r);break a}}"string"==typeof r&&Vh(m,n,r,void 0)}}
function Yh(a,b,c,d){if(c.href){var e=Vh(a,b,c.href,void 0===d?!1:d);Ng.test(e)&&(c.href=e)}}
function Xh(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var k=e[g];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=K.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=Vh(a,b,c.action);Ng.test(m)&&(c.action=m)}}}
var Fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Wh(e,e.hostname)}}catch(g){}},Gh=function(a){try{if(a.action){var b=Sg(Ug(a.action),"host");Wh(a,b)}}catch(c){}},Zh=function(a,b,c,d){Ih();Jh(a,b,"fragment"===c?2:1,!!d,!1)},$h=function(a,b){Ih();Jh(a,[Rg(E.location,"host",!0)],b,!0,!0)},ai=function(){var a=K.location.hostname,b=Mh.exec(K.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Nh,""),l=e.replace(Nh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},bi=function(a,b){return!1===a?!1:a||b||ai()};var ci=/^\w+$/,di=/^[\w-]+$/,ei=/^~?[\w-]+$/,fi={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"},gi=function(){if(!Yg("gtag_cs_api")||!of())return!0;var a=mf("ad_storage");return null==a?!0:!!a},hi=function(a,b){nf("ad_storage")?gi()?a():rf(a,"ad_storage"):b?R("TAGGING",3):qf(function(){hi(a,!0)},["ad_storage"])},ki=function(a){var b=[];if(!K.cookie)return b;var c=$g(a,K.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d=0;d<c.length;d++){var e=ii(c[d]);e&&-1===C(b,e)&&b.push(e)}return ji(b)};
function li(a){return a&&"string"==typeof a&&a.match(ci)?a:"_gcl"}
var ni=function(){var a=Ug(E.location.href),b=Sg(a,"query",!1,void 0,"gclid"),c=Sg(a,"query",!1,void 0,"gclsrc"),d=Sg(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Pg(e,"gclid",!1,void 0);c=c||Pg(e,"gclsrc",!1,void 0)}return mi(b,c,d)},mi=function(a,b,c){var d={},e=function(f,g){d[g]||(d[g]=[]);d[g].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(di))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":Yg("gtm_3pds")&&
e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},pi=function(a){var b=ni();hi(function(){return oi(b,a)})};
function oi(a,b,c){function d(m,n){var r=qi(m,e);r&&(ih(r,n,f),g=!0)}b=b||{};var e=li(b.prefix);c=c||Ta();var f=rh(b,c,!0);f.Da="ad_storage";var g=!1,k=Math.round(c/1E3),l=function(m){return["GCL",k,m].join(".")};a.aw&&(!0===b.wi?d("aw",l("~"+a.aw[0])):d("aw",l(a.aw[0])));a.dc&&d("dc",l(a.dc[0]));a.gf&&d("gf",l(a.gf[0]));a.ha&&d("ha",l(a.ha[0]));a.gp&&d("gp",l(a.gp[0]));return g}
var si=function(a,b){var c=Uh(!0);hi(function(){for(var d=li(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==fi[f]){var g=qi(f,d),k=c[g];if(k){var l=Math.min(ri(k),Ta()),m;b:{for(var n=l,r=$g(g,K.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if(ri(r[t])>n){m=!0;break b}m=!1}if(!m){var q=rh(b,l,!0);q.Da="ad_storage";ih(g,k,q)}}}}oi(mi(c.gclid,c.gclsrc),b)})},qi=function(a,b){var c=fi[a];if(void 0!==c)return b+c},ri=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ii(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var ti=function(a,b,c,d,e){if(Ga(b)){var f=li(e),g=function(){for(var k={},l=0;l<a.length;++l){var m=qi(a[l],f);if(m){var n=$g(m,K.cookie,void 0,"ad_storage");n.length&&(k[m]=n.sort()[n.length-1])}}return k};hi(function(){Zh(g,b,c,d)})}},ji=function(a){return a.filter(function(b){return ei.test(b)})},ui=function(a,b){for(var c=li(b.prefix),d={},e=0;e<a.length;e++)fi[a[e]]&&(d[a[e]]=fi[a[e]]);hi(function(){Ma(d,function(f,g){var k=$g(c+g,K.cookie,void 0,"ad_storage");if(k.length){var l=k[0],m=ri(l),
n={};n[f]=[ii(l)];oi(n,b,m)}})})};function vi(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var wi=function(){function a(e,f,g){g&&(e[f]=g)}var b=["aw","dc"];if(of()){var c=ni();if(vi(c,b)){var d={};a(d,"gclid",c.gclid);a(d,"dclid",c.dclid);a(d,"gclsrc",c.gclsrc);$h(function(){return d},3);$h(function(){var e={};return e._up="1",e},1)}}},xi=function(){var a;if(gi()){for(var b=[],c=K.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({xd:f[1],value:f[2]})}var g={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");
"1"==l[0]&&3==l.length&&l[1]&&(g[b[k].xd]||(g[b[k].xd]=[]),g[b[k].xd].push({timestamp:l[1],Hg:l[2]}))}a=g}else a={};return a};var yi=/^\d+\.fls\.doubleclick\.net$/;function zi(a,b){nf(I.s)?vf(I.s)?a():xf(a):b?R("GTM",42):yf(function(){zi(a,!0)},[I.s])}function Ai(a){var b=Ug(E.location.href),c=Sg(b,"host",!1);if(c&&c.match(yi)){var d=Sg(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Bi(a,b,c){if("aw"==a||"dc"==a){var d=Ai("gcl"+a);if(d)return d.split(".")}var e=li(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!vf(I.s)&&c,g;g=ni()[a]||[];if(0<g.length)return f?["0"]:g}var k=qi(a,e);return k?ki(k):[]}
var Ci=function(a){var b=Ai("gac");if(b)return!vf(I.s)&&a?"0":decodeURIComponent(b);var c=xi(),d=[];Ma(c,function(e,f){for(var g=[],k=0;k<f.length;k++)g.push(f[k].Hg);g=ji(g);g.length&&d.push(e+":"+g.join(","))});return d.join(";")},Di=function(a,b){var c=ni().dc||[];zi(function(){xh(b);var d=th[uh(b.prefix)],e=!1;if(d&&0<c.length){var f=Rf.joined_au=Rf.joined_au||{},g=b.prefix||"_gcl";if(!f[g])for(var k=0;k<c.length;k++){var l="https://adservice.google.com/ddm/regclk";l=l+"?gclid="+c[k]+"&auiddc="+d;af(l);e=f[g]=
!0}}null==a&&(a=e);if(a&&d){var m=uh(b.prefix),n=th[m];n&&wh(m,n,b)}})};var Ei=/[A-Z]+/,Fi=/\s/,Gi=function(a){if(p(a)&&(a=Sa(a),!Fi.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ei.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],B:d}}}}},Ii=function(a){for(var b={},c=0;c<a.length;++c){var d=Gi(a[c]);d&&(b[d.id]=d)}Hi(b);var e=[];Ma(b,function(f,g){e.push(g)});return e};
function Hi(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.B[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Ji=function(){var a=!1;return a};var Li=function(a,b,c,d){return(2===Ki()||d||"http:"!=E.location.protocol?a:b)+c},Ki=function(){var a=Se(),b;if(1===a)a:{var c=Vf;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=K.getElementsByTagName("script"),k=0;k<g.length&&100>k;k++){var l=g[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Zi=function(a){return vf(I.s)?a:a.replace(/&url=([^&#]+)/,function(b,c){var d=Vg(decodeURIComponent(c));return"&url="+encodeURIComponent(d)})};var $i=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),aj={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},bj={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},cj="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var ej=function(a){var b=Dg("gtm.whitelist");b&&R("GTM",9);var c=b&&Za(Ra(b),aj),d=Dg("gtm.blacklist");d||(d=Dg("tagTypeBlacklist"))&&R("GTM",3);d?
R("GTM",8):d=[];dj()&&(d=Ra(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=C(Ra(d),"google")&&R("GTM",2);var e=d&&Za(Ra(d),bj),f={};return function(g){var k=g&&g[sd.xa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=ag[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>C(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>C(c,l[r])){R("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var t=!1;if(d){var q=0<=C(e,k);if(q)t=q;else{var u=La(e,l||[]);u&&R("GTM",10);t=u}}var w=!m||t;w||!(0<=C(l,"sandboxedScripts"))||c&&-1!==C(c,"sandboxedScripts")||(w=La(e,cj));return f[k]=w}},dj=function(){return $i.test(E.location&&E.location.hostname)};var fj={sg:function(a,b){b[sd.Id]&&"string"===typeof a&&(a=1==b[sd.Id]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(sd.Kd)&&null===a&&(a=b[sd.Kd]);b.hasOwnProperty(sd.Md)&&void 0===a&&(a=b[sd.Md]);b.hasOwnProperty(sd.Ld)&&!0===a&&(a=b[sd.Ld]);b.hasOwnProperty(sd.Jd)&&!1===a&&(a=b[sd.Jd]);return a}};var gj={active:!0,isWhitelisted:function(){return!0}},hj=function(a){var b=Rf.zones;!b&&a&&(b=Rf.zones=a());return b};var ij=function(){};var jj=!1,kj=0,lj=[];function mj(a){if(!jj){var b=K.createEventObject,c="complete"==K.readyState,d="interactive"==K.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){jj=!0;for(var e=0;e<lj.length;e++)N(lj[e])}lj.push=function(){for(var f=0;f<arguments.length;f++)N(arguments[f]);return 0}}}function nj(){if(!jj&&140>kj){kj++;try{K.documentElement.doScroll("left"),mj()}catch(a){E.setTimeout(nj,50)}}}var oj=function(a){jj?a():lj.push(a)};var pj={},qj={},rj=function(a,b,c,d){if(!qj[a]||Tf[b]||"__zone"===b)return-1;var e={};ob(d)&&(e=G(d,e));e.id=c;e.status="timeout";return qj[a].tags.push(e)-1},sj=function(a,b,c,d){if(qj[a]){var e=qj[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function tj(a){for(var b=pj[a]||[],c=0;c<b.length;c++)b[c]();pj[a]={push:function(d){d(Gd.w,qj[a])}}}
var wj=function(a,b,c){qj[a]={tags:[]};Da(b)&&uj(a,b);c&&E.setTimeout(function(){return tj(a)},Number(c));return vj(a)},uj=function(a,b){pj[a]=pj[a]||[];pj[a].push(Wa(function(){return N(function(){b(Gd.w,qj[a])})}))};function vj(a){var b=0,c=0,d=!1;return{add:function(){c++;return Wa(function(){b++;d&&b>=c&&tj(a)})},cg:function(){d=!0;b>=c&&tj(a)}}};var xj=function(){function a(d){return!Ea(d)||0>d?0:d}if(!Rf._li&&E.performance&&E.performance.timing){var b=E.performance.timing.navigationStart,c=Ea(Eg.get("gtm.start"))?Eg.get("gtm.start"):0;Rf._li={cst:a(c-b),cbt:a(Xf-b)}}};var Bj={},Cj=function(){return E.GoogleAnalyticsObject&&E[E.GoogleAnalyticsObject]},Dj=!1;
var Ej=function(a){E.GoogleAnalyticsObject||(E.GoogleAnalyticsObject=a||"ga");var b=E.GoogleAnalyticsObject;if(E[b])E.hasOwnProperty(b)||R("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);E[b]=c}xj();return E[b]},Fj=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Cj();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Hj=function(a){},Gj=function(){return E.GoogleAnalyticsObject||"ga"};var Nj=function(){return!1},Oj=function(){var a={};return function(b,c,d){}};function Pj(a,b,c,d){var e=gd[a],f=Qj(a,b,c,d);if(!f)return null;var g=od(e[sd.ae],c,[]);if(g&&g.length){var k=g[0];f=Pj(k.index,{D:f,C:1===k.Ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function Qj(a,b,c,d){function e(){if(f[sd.yf])k();else{var v=pd(f,c,[]),x=rj(c.id,String(f[sd.xa]),Number(f[sd.ce]),v[sd.zf]),y=!1;v.vtp_gtmOnSuccess=function(){if(!y){y=!0;var z=Ta()-B;wg(c.id,gd[a],"5");sj(c.id,x,"success",z);g()}};v.vtp_gtmOnFailure=function(){if(!y){y=!0;var z=Ta()-B;wg(c.id,gd[a],"6");sj(c.id,x,"failure",z);k()}};v.vtp_gtmTagId=f.tag_id;
v.vtp_gtmEventId=c.id;wg(c.id,f,"1");var A=function(){var z=Ta()-B;wg(c.id,f,"7");sj(c.id,x,"exception",z);y||(y=!0,k())};var B=Ta();try{nd(v,c)}catch(z){A(z)}}}var f=gd[a],g=b.D,k=b.C,l=b.terminate;if(c.dd(f))return null;var m=od(f[sd.de],c,[]);if(m&&m.length){var n=m[0],r=Pj(n.index,{D:g,C:k,terminate:l},c,d);if(!r)return null;g=r;k=2===n.Ae?l:r}if(f[sd.Td]||f[sd.Df]){var t=f[sd.Td]?hd:c.Kh,q=g,u=k;if(!t[a]){e=Wa(e);var w=Rj(a,t,e);g=w.D;k=w.C}return function(){t[a](q,u)}}return e}
function Rj(a,b,c){var d=[],e=[];b[a]=Sj(d,e,c);return{D:function(){b[a]=Tj;for(var f=0;f<d.length;f++)d[f]()},C:function(){b[a]=Uj;for(var f=0;f<e.length;f++)e[f]()}}}function Sj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Tj(a){a()}function Uj(a,b){b()};var Xj=function(a,b){for(var c=[],d=0;d<gd.length;d++)if(a.zb[d]){var e=gd[d];var f=b.add();try{var g=Pj(d,{D:f,C:f,terminate:f},a,d);g?c.push({bf:d,We:qd(e),Zb:g}):(Vj(d,a),f())}catch(l){f()}}b.cg();c.sort(Wj);for(var k=0;k<c.length;k++)c[k].Zb();return 0<c.length};function Wj(a,b){var c,d=b.We,e=a.We;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.bf,k=b.bf;f=g>k?1:g<k?-1:0}return f}
function Vj(a,b){if(!tg)return;var c=function(d){var e=b.dd(gd[d])?"3":"4",f=od(gd[d][sd.ae],b,[]);f&&f.length&&c(f[0].index);wg(b.id,gd[d],e);var g=od(gd[d][sd.de],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var Yj=!1,Zj=function(a,b,c,d,e){if("gtm.js"==b){if(Yj)return!1;Yj=!0}vg(a,b);var f=wj(a,d,e);Ig(a,"event",1);Ig(a,"ecommerce",1);Ig(a,"gtm");var g={id:a,name:b,dd:ej(c),zb:[],Kh:[],Ne:function(){R("GTM",6)}};g.zb=Cd(g);var k=Xj(g,f);"gtm.js"!==b&&"gtm.sync"!==b||Hj(Gd.w);if(!k)return k;for(var l=0;l<g.zb.length;l++)if(g.zb[l]){var m=gd[l];if(m&&!Tf[String(m[sd.xa])])return!0}return!1};function bk(a,b){}function ck(a,b){return dk()?bk(a,b):void 0}
function dk(){var a=!1;return a};var ek=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.a={};this.globalConfig={};this.D=function(){};this.C=function(){};this.eventId=void 0},fk=function(a){var b=new ek;b.eventModel=a;return b},gk=function(a,b){a.targetConfig=b;return a},hk=function(a,b){a.containerConfig=b;return a},ik=function(a,b){a.a=b;return a},jk=function(a,b){a.globalConfig=b;return a},kk=function(a,b){a.D=b;return a},lk=function(a,b){a.C=b;return a};
ek.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.a[a])return this.a[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var mk=function(a){function b(e){Ma(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Ma(c,function(e){d.push(e)});return d};var nk;if(3===Gd.Qb.length)nk="g";else{var ok="G";nk=ok}
var pk={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:nk,OPT:"o"},qk=function(a){var b=Gd.w.split("-"),c=b[0].toUpperCase(),d=pk[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Gd.Qb.length){var g="w";f="2"+g}else f="";return f+d+Gd.Qb+e};function rk(){var a=!1;a=of();return a}
function sk(a,b,c){function d(r){var t;Rf.reported_gclid||(Rf.reported_gclid={});t=Rf.reported_gclid;var q=f+(r?"gcu":"gcs");if(!t[q]){t[q]=!0;var u=[],w=function(B,z){z&&u.push(B+"="+encodeURIComponent(z))},v="https://www.google.com";if(of()){var x=vf(I.s);w("gcs",wf());r&&w("gcu","1");w("rnd",n);if((!f||g&&"aw.ds"!==g)&&vf(I.s)){var y=ki("_gcl_aw");w("gclaw",y.join("."))}w("url",String(E.location).split(/[?#]/)[0]);w("dclid",tk(b,k));!x&&b&&(v="https://pagead2.googlesyndication.com")}
w("gclid",tk(b,f));w("gclsrc",g);w("gtm",qk(!c));var A=v+"/pagead/landing?"+u.join("&");af(A)}}var e=ni(),f=e.gclid||"",g=e.gclsrc,k=e.dclid||"",l=!a&&(!f||g&&"aw.ds"!==g?!1:!0),m=rk();if(l||m){var n=""+mh();m?yf(function(){d();vf(I.s)||xf(function(){return d(!0)})},[I.s]):d()}}
function tk(a,b){var c=a&&!vf(I.s);if(b&&c)return"0";return b}var xl={},yl=["G","GP"];xl.df="";var zl=xl.df.split(",");function Al(){var a=Rf;return a.gcq=a.gcq||new Bl}
var Cl=function(a,b,c){Al().register(a,b,c)},Dl=function(a,b,c,d){Al().push("event",[b,a],c,d)},El=function(a,b){Al().push("config",[a],b)},Fl={},Gl=function(a){return!0},Hl=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.a=!1},Il=function(a,b,c,d,e){this.type=a;this.m=b;this.ba=c||"";
this.a=d;this.i=e},Bl=function(){this.m={};this.i={};this.a=[]},Jl=function(a,b){var c=Gi(b);return a.m[c.containerId]=a.m[c.containerId]||new Hl},Kl=function(a,b,c){if(b){var d=Gi(b);if(d&&1===Jl(a,b).status&&Gl(d.prefix)){Jl(a,b).status=2;var e={};tg&&(e.timeoutId=E.setTimeout(function(){R("GTM",38);fg()},3E3));a.push("require",[e],d.containerId);Fl[d.containerId]=Ta();if(Ji()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=E.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=ck(c,g)||k;Re(l)}}}},Ll=function(a,b,c,d){if(d.ba){var e=Jl(a,d.ba),
f=e.m;if(f){var g=G(c),k=G(e.targetConfig[d.ba]),l=G(e.containerConfig),m=G(e.i),n=G(a.i),r=Dg("gtm.uniqueEventId"),t=Gi(d.ba).prefix,q=lk(kk(jk(ik(hk(gk(fk(g),k),l),m),n),function(){xg(r,t,"2");}),function(){xg(r,t,"3");});try{xg(r,t,"1");f(d.ba,b,d.m,q)}catch(u){
xg(r,t,"4");}}}};
Bl.prototype.register=function(a,b,c){if(3!==Jl(this,a).status){Jl(this,a).m=b;Jl(this,a).status=3;c&&(Jl(this,a).i=c);var d=Gi(a),e=Fl[d.containerId];if(void 0!==e){var f=Rf[d.containerId].bootstrap,g=d.prefix.toUpperCase();Rf[d.containerId]._spx&&(g=g.toLowerCase());var k=Dg("gtm.uniqueEventId"),l=g,m=Ta()-f;if(tg&&!kg[k]){k!==gg&&(eg(),gg=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);pg=pg?pg+","+n:"&cl="+n}delete Fl[d.containerId]}this.flush()}};
Bl.prototype.push=function(a,b,c,d){var e=Math.floor(Ta()/1E3);Kl(this,c,b[0][I.wa]||this.i[I.wa]);this.a.push(new Il(a,e,c,b,d));d||this.flush()};
Bl.prototype.flush=function(a){for(var b=this;this.a.length;){var c=this.a[0];if(c.i)c.i=!1,this.a.push(c);else switch(c.type){case "require":if(3!==Jl(this,c.ba).status&&!a)return;tg&&E.clearTimeout(c.a[0].timeoutId);break;case "set":Ma(c.a[0],function(l,m){G(bb(l,m),b.i)});break;case "config":var d=c.a[0],e=!!d[I.sc];delete d[I.sc];var f=Jl(this,c.ba),g=Gi(c.ba),k=g.containerId===g.id;e||(k?f.containerConfig={}:f.targetConfig[c.ba]={});f.a&&e||Ll(this,I.J,d,c);f.a=!0;delete d[I.eb];k?G(d,f.containerConfig):
G(d,f.targetConfig[c.ba]);break;case "event":Ll(this,c.a[1],c.a[0],c)}this.a.shift()}};var Ml=function(a,b){return!0};var Nl=function(a,b){var c;return c};var Ol=function(a){};var Pl=function(a){var b;return pb(b,this.m)};var Ql=function(a,b){var c=null;return pb(c,this.m)};var Rl=function(a){var b;return pb(b,this.m)};var Sl=function(a){var b;return b};var Tl=function(a,b){b=void 0===b?!0:b;var c;return c};var Ul=function(a,b){var c;return c};var Vl=function(a,b){var c;return c};var Wl=function(a){var b="";return b};var Xl=function(a){var b="";return b};var Yl=function(a,b){};var Zl={},$l=function(a,b,c,d){F(this.i.a,["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);Be(this,"inject_script",a);var e=this.m,f=function(){b instanceof db&&b.Ea(e)},g=function(){c instanceof db&&c.Ea(e)};if(!d){Re(a,f,g);return}var k=d;Zl[k]?(Zl[k].onSuccess.push(f),Zl[k].onFailure.push(g)):(Zl[k]={onSuccess:[f],onFailure:[g]},f=function(){for(var l=Zl[k].onSuccess,m=0;m<l.length;m++)N(l[m]);l.push=function(n){N(n);
return 0}},g=function(){for(var l=Zl[k].onFailure,m=0;m<l.length;m++)N(l[m]);Zl[k]=null},Re(a,f,g));};var am=function(){return!1},bm={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};var cm=function(){};var dm=function(a,b){var c=!1;return c};var em=function(a,b,c){};var fm=function(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};var gm=function(a,b,c){F(this.i.a,["path:!string","value:?*","overrideExisting:?boolean"],arguments);Be(this,"access_globals","readwrite",a);var d=a.split("."),e=E,f;for(f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;if(void 0===e[d[f]]||c)return e[d[f]]=qb(b,this.m),!0;return!1};var hm=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};var im=function(a,b,c){var d=this;};var jm={},km={};jm.getItem=function(a){var b=null;return b};
jm.setItem=function(a,b){};
jm.removeItem=function(a){};jm.clear=function(){};var lm=function(a){var b;return b};function mm(a){}
function nm(a,b){var c;return pb(c,this.m)}function om(){var a="";return a}
function pm(){var a="";return a}
var Ec=function(){var a=new Le;Ji()?(a.add("injectHiddenIframe",Ca),a.add("injectScript",Ca)):(a.add("injectHiddenIframe",Yl),a.add("injectScript",$l));var b=em;a.add("Math",te());a.add("TestHelper",Me());a.add("addEventCallback",mm);a.add("aliasInWindow",Ml);a.add("assertApi",pe);a.add("assertThat",qe);a.add("callInWindow",
Nl);a.add("callLater",Ol);a.add("copyFromDataLayer",nm);a.add("copyFromWindow",Pl);a.add("createArgumentsQueue",Ql);a.add("createQueue",Rl);a.add("decodeUri",ue);a.add("decodeUriComponent",ve);a.add("encodeUri",we);a.add("encodeUriComponent",xe);a.add("fail",ye);a.add("fromBase64",Sl,!("atob"in E));a.add("generateRandom",ze);a.add("getContainerVersion",Ce);a.add("getCookieValues",Tl);a.add("getQueryParameters",Ul);a.add("getReferrerQueryParameters",Vl);a.add("getReferrerUrl",Wl);a.add("getTimestamp",
Ae);a.add("getType",De);a.add("getUrl",Xl);a.add("localStorage",bm,!am());a.add("logToConsole",cm);a.add("makeInteger",Fe);a.add("makeNumber",Ge);a.add("makeString",He);a.add("makeTableMap",Ie);a.add("mock",Ke);a.add("queryPermission",dm);a.add("readCharacterSet",om);a.add("readTitle",pm);a.add("sendPixel",b);a.add("setCookie",fm);a.add("setInWindow",gm);a.add("sha256",im);a.add("toBase64",lm,!("btoa"in E));return function(c){var d;if(a.a.hasOwnProperty(c))d=a.get(c,this);else throw Error(c+" is not a valid API name.");return d}};var Cc,Kd;
function qm(){var a=data.runtime||[],b=data.runtime_lines;Cc=new Bc;rm();cd=function(e,f,g){sm(f);var k=new ib;Ma(f,function(q,u){k.set(q,pb(u))});Cc.a.a.o=yd();var l={dg:Ld(e),eventId:void 0!==g?g.id:void 0,Yb:e,log:function(){}};if(Nj()){var m=Oj(),n=void 0,r=void 0;l.ca={i:{},a:function(q,u,w){1===u&&(n=q);7===u&&(r=w);m(q,u,w)},m:Je()};l.log=function(q,u){if(n){var w=Array.prototype.slice.call(arguments,1);m(n,4,{level:q,source:r,message:w})}}}var t=Dc(l,[e,k]);Cc.a.a.o=void 0;t instanceof pa&&
"return"===t.a&&(t=t.i);return qb(t)};Fc();for(var c=0;c<a.length;c++){var d=a[c];if(!Ga(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ud(d,b[c]);Cc.Zb(d)}}function sm(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Da(b)&&(a.gtmOnSuccess=function(){N(b)});Da(c)&&(a.gtmOnFailure=function(){N(c)})}
function rm(){var a=Cc;Rf.SANDBOXED_JS_SEMAPHORE=Rf.SANDBOXED_JS_SEMAPHORE||0;Gc(a,function(b,c,d){Rf.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Rf.SANDBOXED_JS_SEMAPHORE--}})}function tm(a){void 0!==a&&Ma(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");ag[e]=ag[e]||[];ag[e].push(b)}})};var um=["HA","GF","GP","G"],vm="G".split(/,/);vm.push("DC");vm.push("UA");vm.push("AW");var wm=!1;
wm=!0;var xm=null,ym={},zm={},Am;function Bm(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.Gc]&&(c.eventCallback=b[I.Gc]),b[I.Lb]&&(c.eventTimeout=b[I.Lb]));return c}
var Gm={config:function(a){},event:function(a){var b=a[1];if(p(b)&&!(3<a.length)){var c;if(2<a.length){if(!ob(a[2])&&void 0!=a[2])return;c=a[2]}var d=Bm(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=Kd.i;d.a[b]?d.a[b].push(c):d.a[b]=[c]}},set:function(a){var b;
2==a.length&&ob(a[1])?b=G(a[1]):3==a.length&&p(a[1])&&(b={},ob(a[2])||Ga(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}};var Hm={policy:!0};var Im=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Km=function(a){var b=Jm(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Lm=!1,Mm=[];function Nm(){if(!Lm){Lm=!0;for(var a=0;a<Mm.length;a++)N(Mm[a])}}var Om=function(a){Lm?N(a):Mm.push(a)};var en=function(a){if(dn(a))return a;this.a=a};en.prototype.Ng=function(){return this.a};var dn=function(a){return!a||"object"!==mb(a)||ob(a)?!1:"getUntrustedUpdateValue"in a};en.prototype.getUntrustedUpdateValue=en.prototype.Ng;var fn=[],gn=!1,hn=function(a){return E["dataLayer"].push(a)},jn=function(a){var b=Rf["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function kn(a){var b=a._clear;Ma(a,function(f,g){"_clear"!==f&&(b&&Hg(f,void 0),Hg(f,g))});Wf||(Wf=a["gtm.start"]);var c=a.event,d=a["gtm.uniqueEventId"];if(!c)return!1;d||(d=bg(),a["gtm.uniqueEventId"]=d,Hg("gtm.uniqueEventId",d));Yf=c;var e=ln(a);Yf=null;switch(c){case "gtm.init":R("GTM",19),e&&R("GTM",20)}return e}
function ln(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Rf.zones;d=e?e.checkState(Gd.w,c):gj;return d.active?Zj(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function mn(){for(var a=!1;!gn&&0<fn.length;){gn=!0;delete Ag.eventModel;Cg();var b=fn.shift();if(null!=b){var c=dn(b);if(c){var d=b;b=dn(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var g=e[f],k=Dg(g,1);if(Ga(k)||ob(k))k=G(k);Bg[g]=k}}try{if(Da(b))try{b.call(Eg)}catch(u){}else if(Ga(b)){var l=b;if(p(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),t=Dg(m.join("."),2);if(void 0!==t&&null!==t)try{t[n].apply(t,r)}catch(u){}}}else{if(Na(b)){a:{if(b.length&&p(b[0])){var q=Gm[b[0]];if(q&&(!c||!Hm[b[0]])){b=q(b);break a}}b=void 0}if(!b){gn=!1;continue}}a=kn(b)||a}}finally{c&&Cg(!0)}}gn=!1}return!a}function nn(){var a=mn();try{Im(E["dataLayer"],Gd.w)}catch(b){}return a}
var pn=function(){var a=Pe("dataLayer",[]),b=Pe("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};oj(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Om(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Rf.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new en(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);fn.push.apply(fn,d);if(300<
this.length)for(R("GTM",4);300<this.length;)this.shift();var g="boolean"!==typeof f||f;return mn()&&g};fn.push.apply(fn,a.slice(0));on()&&N(nn)},on=function(){var a=!0;return a};var qn={};qn.Mb=new String("undefined");
var rn=function(a){this.a=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===qn.Mb?b:a[d]);return c.join("")}};rn.prototype.toString=function(){return this.a("undefined")};rn.prototype.valueOf=rn.prototype.toString;qn.Mf=rn;qn.Pc={};qn.wg=function(a){return new rn(a)};var sn={};qn.yh=function(a,b){var c=bg();sn[c]=[a,b];return c};qn.we=function(a){var b=a?0:1;return function(c){var d=sn[c];if(d&&"function"===typeof d[b])d[b]();sn[c]=void 0}};qn.Vg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};qn.ph=function(a){if(a===qn.Mb)return a;var b=bg();qn.Pc[b]=a;return'google_tag_manager["'+Gd.w+'"].macro('+b+")"};qn.gh=function(a,b,c){a instanceof qn.Mf&&(a=a.a(qn.yh(b,c)),b=Ca);return{bd:a,D:b}};var tn=function(a,b,c){function d(f,g){var k=f[g];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||Xe(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},un=function(a){Rf.hasOwnProperty("autoEventsSettings")||(Rf.autoEventsSettings={});var b=Rf.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},vn=function(a,b,c){un(a)[b]=c},wn=function(a,b,c,d){var e=un(a),f=Ua(e,b,d);e[b]=c(f)},xn=function(a,b,c){var d=un(a);return Ua(d,b,c)};var yn=["input","select","textarea"],zn=["button","hidden","image","reset","submit"],An=function(a){var b=a.tagName.toLowerCase();return!Ha(yn,function(c){return c===b})||"input"===b&&Ha(zn,function(c){return c===a.type.toLowerCase()})?!1:!0},Bn=function(a){return a.form?a.form.tagName?a.form:K.getElementById(a.form):$e(a,["form"],100)},Cn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(An(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var Dn=!!E.MutationObserver,En=void 0,Fn=function(a){if(!En){var b=function(){var c=K.body;if(c)if(Dn)(new MutationObserver(function(){for(var e=0;e<En.length;e++)N(En[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Ve(c,"DOMNodeInserted",function(){d||(d=!0,N(function(){d=!1;for(var e=0;e<En.length;e++)N(En[e])}))})}};En=[];K.body?b():N(b)}En.push(a)};var $n=E.clearTimeout,ao=E.setTimeout,S=function(a,b,c){if(Ji()){b&&N(b)}else return Re(a,b,c)},bo=function(){return E.location.href},co=function(a){return Sg(Ug(a),"fragment")},eo=function(a){return Tg(Ug(a))},T=function(a,b){return Dg(a,b||2)},fo=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=hn(a)):d=hn(a);return d},go=function(a,b){E[a]=b},U=function(a,b,c){b&&(void 0===E[a]||c&&!E[a])&&(E[a]=
b);return E[a]},ho=function(a,b,c){return $g(a,b,void 0===c?!0:!!c)},io=function(a,b){if(Ji()){b&&N(b)}else Te(a,b)},jo=function(a){return!!xn(a,"init",!1)},ko=function(a){vn(a,"init",!0)},lo=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Vf;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";S(Li("https://","http://",c))},mo=function(a,b){var c=a[b];return c};
var no=qn.gh;function Ko(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Lo=new Ka;function Mo(a,b){function c(g){var k=Ug(g),l=Sg(k,"protocol"),m=Sg(k,"host",!0),n=Sg(k,"port"),r=Sg(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function No(a){return Oo(a)?1:0}
function Oo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ga(c)){for(var d=0;d<c.length;d++)if(No({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var g=0;g<f.length;g++)if(b[f[g]]){e=b[f[g]](c);break a}}catch(t){}}e=!1}return e;case "_ew":return Ko(b,c);case "_eq":return String(b)==String(c);
case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var k;k=String(b).split(",");return 0<=C(k,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var l;var m=a.ignore_case?"i":void 0;try{var n=String(c)+m,r=Lo.get(n);r||(r=new RegExp(c,m),Lo.set(n,r));l=r.test(b)}catch(t){l=!1}return l;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Mo(b,c)}return!1};var Po=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Qo={},Ro=encodeURI,Y=encodeURIComponent,So=Ue;var To=function(a,b){if(!a)return!1;var c=Sg(Ug(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Uo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Qo.Wg=function(){var a=!1;return a};function lq(){return E.gaGlobal=E.gaGlobal||{}}var mq=function(){var a=lq();a.hid=a.hid||Ia();return a.hid};var vq=window,wq=document,xq=function(a){var b=vq._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===vq["ga-disable-"+a])return!0;try{var c=vq.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Wg("AMP_TOKEN",String(wq.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return wq.getElementById("__gaOptOutExtension")?!0:!1};function Aq(a,b){delete b.eventModel[I.eb];if(a!==I.J){var c=b.getWithConfig(I.kc);if(Ga(c)){R("GTM",26);for(var d={},e=0;e<c.length;e++){var f=c[e],g=b.getWithConfig(f);void 0!==g&&(d[f]=g)}b.eventModel=d}}Cq(b.eventModel)}var Cq=function(a){Ma(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.la]||{};Ma(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var Fq=function(a,b,c){Dl(b,c,a)},Gq=function(a,b,c){Dl(b,c,a,!0)},Iq=function(a,b){};
function Hq(a,b){}var Z={b:{}};


Z.b.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.g="jsm";Z.__jsm.h=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=U("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.b.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.g="sp";Z.__sp.h=!0;Z.__sp.priorityOverride=0})(function(a){var b=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js",c=a.vtp_gtmOnFailure,d=function(){var f=U("google_trackConversion");if(Da(f)){var g={};"DATA_LAYER"==a.vtp_customParamsFormat?g=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(g=Uo(a.vtp_customParams,
"key","value"));var k={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(g.event=a.vtp_eventName),a.vtp_eventValue&&(k.value=a.vtp_eventValue),a.vtp_eventItems&&(k.items=a.vtp_eventItems));var l={google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:g,google_gtag_event_data:k,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:qk()};a.vtp_rdp&&(l.google_restricted_data_processing=!0);a.vtp_userId&&(l.google_user_id=a.vtp_userId);
f(l)||c()}else c()},e=function(){S(b,d,c)};if(of()){yf(function(){vf(I.s)?e():xf(e)},[I.s]);return}xj();e()})}();Z.b.c=["google"],function(){(function(a){Z.__c=a;Z.__c.g="c";Z.__c.h=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.b.d=["google"],function(){(function(a){Z.__d=a;Z.__d.g="d";Z.__d.h=!0;Z.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=Af(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=K.getElementById(a.vtp_elementId);b&&(d?c=Xe(b,d):c=Ye(b));return Sa(String(b&&c))})}();
Z.b.e=["google"],function(){(function(a){Z.__e=a;Z.__e.g="e";Z.__e.h=!0;Z.__e.priorityOverride=0})(function(a){return String(Jg(a.vtp_gtmEventId,"event"))})}();
Z.b.f=["google"],function(){(function(a){Z.__f=a;Z.__f.g="f";Z.__f.h=!0;Z.__f.priorityOverride=0})(function(a){var b=T("gtm.referrer",1)||K.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Sg(Ug(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):eo(String(b)):String(b)})}();
Z.b.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=tn(c,"gtm.click");fo(d)}}(function(b){Z.__cl=b;Z.__cl.g="cl";Z.__cl.h=!0;Z.__cl.priorityOverride=0})(function(b){if(!jo("cl")){var c=U("document");Ve(c,"click",a,!0);ko("cl")}N(b.vtp_gtmOnSuccess)})}();
Z.b.j=["google"],function(){(function(a){Z.__j=a;Z.__j.g="j";Z.__j.h=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=U(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.b.k=["google"],function(){(function(a){Z.__k=a;Z.__k.g="k";Z.__k.h=!0;Z.__k.priorityOverride=0})(function(a){return ho(a.vtp_name,T("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.b.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Z.__access_globals=b;Z.__access_globals.g="access_globals";Z.__access_globals.h=!0;Z.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],k=0;k<c.length;k++){var l=c[k],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(n,r,t){if(!p(t))throw d(n,{},"Key must be a string.");if("read"===r){if(-1<C(e,t))return}else if("write"===r){if(-1<C(f,t))return}else if("readwrite"===r){if(-1<C(f,t)&&-1<C(e,t))return}else if("execute"===r){if(-1<C(g,t))return}else throw d(n,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(n,{},"Prohibited "+r+" on global variable: "+
t+".");},K:a}})}();Z.b.r=["google"],function(){(function(a){Z.__r=a;Z.__r.g="r";Z.__r.h=!0;Z.__r.priorityOverride=0})(function(a){return Ia(a.vtp_min,a.vtp_max)})}();
Z.b.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.g="u";Z.__u.h=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=T("gtm.url",1);c=c||bo();var d=b[a("vtp_component")];if(!d||"URL"==d)return eo(String(c));var e=Ug(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ga(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Sg(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Sg(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.b.v=["google"],function(){(function(a){Z.__v=a;Z.__v.g="v";Z.__v.h=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=T(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.b.ua=["google"],function(){var a,b={},c=function(e){yf(function(){d(e)},[I.I,I.s])},d=function(e){var f={},g={},k={},l={},m={};if(e.vtp_gaSettings){var n=e.vtp_gaSettings;G(Uo(n.vtp_fieldsToSet,"fieldName","value"),g);G(Uo(n.vtp_contentGroup,"index","group"),k);G(Uo(n.vtp_dimension,"index","dimension"),l);G(Uo(n.vtp_metric,"index","metric"),m);e.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=G(n);e=G(e,r)}G(Uo(e.vtp_fieldsToSet,
"fieldName","value"),g);G(Uo(e.vtp_contentGroup,"index","group"),k);G(Uo(e.vtp_dimension,"index","dimension"),l);G(Uo(e.vtp_metric,"index","metric"),m);vf(I.I)||(g.storage="none"),vf(I.s)||(g.allowAdFeatures=!1,g.storeGac=!1);var t=Ej(e.vtp_functionName);if(Da(t)){var q="",u="";e.vtp_setTrackerName&&"string"==typeof e.vtp_trackerName?""!==e.vtp_trackerName&&(u=e.vtp_trackerName,q=u+"."):(u="gtm"+bg(),
q=u+".");var w={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},v={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,
allowAdFeatures:!0,allowAdPersonalizationSignals:!0},x=function(P){var Q=[].slice.call(arguments,0);Q[0]=q+Q[0];t.apply(window,Q)},y=function(P,Q){return void 0===Q?Q:P(Q)},A=function(P,Q){if(Q)for(var Ja in Q)Q.hasOwnProperty(Ja)&&x("set",P+Ja,Q[Ja])},B=function(){var P=function(Mq,Lk,Nq){if(!ob(Lk))return!1;for(var Md=Ua(Object(Lk),Nq,[]),lh=0;Md&&lh<Md.length;lh++)x(Mq,Md[lh]);return!!Md&&0<Md.length},Q;if(e.vtp_useEcommerceDataLayer){var Ja=
!1;Ja||(Q=T("ecommerce",1))}else e.vtp_ecommerceMacroData&&(Q=e.vtp_ecommerceMacroData.ecommerce);if(!ob(Q))return;Q=Object(Q);var $a=Ua(g,"currencyCode",Q.currencyCode);void 0!==$a&&x("set","&cu",$a);P("ec:addImpression",Q,"impressions");if(P("ec:addPromo",Q[Q.promoClick?"promoClick":"promoView"],"promotions")&&Q.promoClick){x("ec:setAction",
"promo_click",Q.promoClick.actionField);return}for(var Fa="detail checkout checkout_option click add remove purchase refund".split(" "),Va="refund purchase remove checkout checkout_option add click detail".split(" "),eb=0;eb<Fa.length;eb++){var Ab=Q[Fa[eb]];if(Ab){P("ec:addProduct",Ab,"products");x("ec:setAction",Fa[eb],Ab.actionField);if(tg)for(var Sb=0;Sb<Va.length;Sb++){var Vc=Q[Va[Sb]];if(Vc){Vc!==Ab&&R("GTM",13);break}}break}}},
z=function(P,Q,Ja){var $a=0;if(P)for(var Fa in P)if(P.hasOwnProperty(Fa)&&(Ja&&w[Fa]||!Ja&&void 0===w[Fa])){var Va=v[Fa]?Qa(P[Fa]):P[Fa];"anonymizeIp"!=Fa||Va||(Va=void 0);Q[Fa]=Va;$a++}return $a},D={name:u};z(g,D,!0);t("create",e.vtp_trackingId||f.trackingId,D);x("set","&gtm",qk(!0));of()&&x("set","&gcs",wf());e.vtp_enableRecaptcha&&x("require","recaptcha","recaptcha.js");(function(P,Q){void 0!==e[Q]&&x("set",P,e[Q])})("nonInteraction","vtp_nonInteraction");A("contentGroup",k);A("dimension",l);A("metric",m);var H={};z(g,H,!1)&&x("set",H);var M;
e.vtp_enableLinkId&&x("require","linkid","linkid.js");x("set","hitCallback",function(){var P=g&&g.hitCallback;Da(P)&&P();e.vtp_gtmOnSuccess()});if("TRACK_EVENT"==e.vtp_trackType){e.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());var O={hitType:"event",eventCategory:String(e.vtp_eventCategory||f.category),eventAction:String(e.vtp_eventAction||f.action),eventLabel:y(String,e.vtp_eventLabel||f.label),eventValue:y(Pa,e.vtp_eventValue||
f.value)};z(M,O,!1);x("send",O);}else if("TRACK_SOCIAL"==e.vtp_trackType){}else if("TRACK_TRANSACTION"==e.vtp_trackType){}else if("TRACK_TIMING"==
e.vtp_trackType){}else if("DECORATE_LINK"==e.vtp_trackType){}else if("DECORATE_FORM"==e.vtp_trackType){}else if("TRACK_DATA"==e.vtp_trackType){}else{e.vtp_enableEcommerce&&(x("require","ec","ec.js"),B());if(e.vtp_doubleClick||"DISPLAY_FEATURES"==e.vtp_advertisingFeaturesType){var W=
"_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","displayfeatures",void 0,{cookieName:W})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==e.vtp_advertisingFeaturesType){var xa="_dc_gtm_"+String(e.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");x("require","adfeatures",{cookieName:xa})}M?x("send","pageview",M):x("send","pageview");}if(!a){var Ba=e.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";e.vtp_useInternalVersion&&!e.vtp_useDebugVersion&&(Ba="internal/"+Ba);a=!0;var Oa=ck(g._x_19,"/analytics.js"),sa=Li("https:","http:","//www.google-analytics.com/"+Ba,g&&g.forceSSL);S("analytics.js"===Ba&&Oa?Oa:sa,function(){var P=Cj();P&&P.loaded||e.vtp_gtmOnFailure();},e.vtp_gtmOnFailure)}}else N(e.vtp_gtmOnFailure)};
Z.__ua=c;Z.__ua.g="ua";Z.__ua.h=!0;Z.__ua.priorityOverride=0}();

Z.b.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Z.__inject_script=b;Z.__inject_script.g="inject_script";Z.__inject_script.h=!0;Z.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!p(f))throw d(e,{},"Script URL must be a string.");try{if(ie(Ug(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},K:a}})}();




Z.b.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Z.__gclidw=b;Z.__gclidw.g="gclidw";Z.__gclidw.h=!0;Z.__gclidw.priorityOverride=100})(function(b){N(b.vtp_gtmOnSuccess);var c,d,e,f;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain,b.vtp_enableCookieFlagsFeature&&(f=b.vtp_cookieFlags));var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var k={prefix:e,path:c,domain:d,flags:f};b.vtp_enableCrossDomainFeature&&
(b.vtp_enableCrossDomain&&!1===b.vtp_acceptIncoming||(b.vtp_enableCrossDomain||ai())&&si(a,k));pi(k);ui(["aw","dc"],k);Di(g,k);var l=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var m=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),n=b.vtp_urlPosition,r=!!b.vtp_formDecoration;ti(a,m,n,r,l);}var t=T(I.N);
sk(!1,void 0!=t&&!1!==t);b.vtp_enableUrlPassthroughFeature&&b.vtp_enableUrlPassthrough&&wi()})}();

Z.b.aev=["google"],function(){function a(q,u){var w=Jg(q,"gtm");if(w)return w[u]}function b(q,u,w,v){v||(v="element");var x=q+"."+u,y;if(n.hasOwnProperty(x))y=n[x];else{var A=a(q,v);if(A&&(y=w(A),n[x]=y,r.push(x),35<r.length)){var B=r.shift();delete n[B]}}return y}function c(q,u,w){var v=a(q,t[u]);return void 0!==v?v:w}function d(q,u){if(!q)return!1;var w=e(bo());Ga(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var v=[w],x=0;x<u.length;x++)if(u[x]instanceof RegExp){if(u[x].test(q))return!1}else{var y=
u[x];if(0!=y.length){if(0<=e(q).indexOf(y))return!1;v.push(e(y))}}return!To(q,v)}function e(q){m.test(q)||(q="http://"+q);return Sg(Ug(q),"HOST",!0)}function f(q,u,w){switch(q){case "SUBMIT_TEXT":return b(u,"FORM."+q,g,"formSubmitElement")||w;case "LENGTH":var v=b(u,"FORM."+q,k);return void 0===v?w:v;case "INTERACTED_FIELD_ID":return l(u,"id",w);case "INTERACTED_FIELD_NAME":return l(u,"name",w);case "INTERACTED_FIELD_TYPE":return l(u,"type",w);case "INTERACTED_FIELD_POSITION":var x=a(u,"interactedFormFieldPosition");
return void 0===x?w:x;case "INTERACT_SEQUENCE_NUMBER":var y=a(u,"interactSequenceNumber");return void 0===y?w:y;default:return w}}function g(q){switch(q.tagName.toLowerCase()){case "input":return Xe(q,"value");case "button":return Ye(q);default:return null}}function k(q){if("form"===q.tagName.toLowerCase()&&q.elements){for(var u=0,w=0;w<q.elements.length;w++)An(q.elements[w])&&u++;return u}}function l(q,u,w){var v=a(q,"interactedFormField");return v&&Xe(v,u)||w}var m=/^https?:\/\//i,n={},r=[],t={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(q){Z.__aev=q;Z.__aev.g="aev";Z.__aev.h=!0;Z.__aev.priorityOverride=0})(function(q){var u=q.vtp_gtmEventId,w=q.vtp_defaultValue,v=q.vtp_varType;switch(v){case "TAG_NAME":var x=a(u,"element");return x&&x.tagName||
w;case "TEXT":return b(u,v,Ye)||w;case "URL":var y;a:{var A=String(a(u,"elementUrl")||w||""),B=Ug(A),z=String(q.vtp_component||"URL");switch(z){case "URL":y=A;break a;case "IS_OUTBOUND":y=d(A,q.vtp_affiliatedDomains);break a;default:y=Sg(B,z,q.vtp_stripWww,q.vtp_defaultPages,q.vtp_queryKey)}}return y;case "ATTRIBUTE":var D;if(void 0===q.vtp_attribute)D=c(u,v,w);else{var H=q.vtp_attribute,M=a(u,"element");D=M&&Xe(M,H)||w||""}return D;case "MD":var O=q.vtp_mdValue,da=b(u,"MD",Mn);return O&&da?Pn(da,
O)||w:da||w;case "FORM":return f(String(q.vtp_component||"SUBMIT_TEXT"),u,w);default:return c(u,v,w)}})}();
Z.b.gas=["google"],function(){function a(b,c,d){b.vtp_fieldsToSet=b.vtp_fieldsToSet||[];var e=b[c];void 0!==e&&(b.vtp_fieldsToSet.push({fieldName:d,value:e}),delete b[c])}(function(b){Z.__gas=b;Z.__gas.g="gas";Z.__gas.h=!0;Z.__gas.priorityOverride=0})(function(b){var c=G(b),d=c;d[sd.xa]=null;d[sd.sf]=null;c=d;a(c,"vtp_cookieDomain","cookieDomain");return c})}();


Z.b.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:bo()}function b(f,g){Ve(f,"hashchange",function(k){var l=a(k);g({source:"hashchange",state:null,url:eo(l),R:co(l)})})}function c(f,g){Ve(f,"popstate",function(k){var l=a(k);g({source:"popstate",state:k.state,url:eo(l),R:co(l)})})}function d(f,g,k){var l=g.history,m=l[f];if(Da(m))try{l[f]=function(n,r,t){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:eo(bo()),
R:co(bo())})}}catch(n){}}function e(){var f={source:null,state:U("history").state||null,url:eo(bo()),R:co(bo())};return function(g){var k=f,l={};l[k.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||k.R!=g.R){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.R,"gtm.newUrlFragment":g.R,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=g.url;
f=g;fo(m)}}}(function(f){Z.__hl=f;Z.__hl.g="hl";Z.__hl.h=!0;Z.__hl.priorityOverride=0})(function(f){var g=U("self");if(!jo("hl")){var k=e();b(g,k);c(g,k);d("pushState",g,k);d("replaceState",g,k);ko("hl")}N(f.vtp_gtmOnSuccess)})}();
Z.b.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=U("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},g=function(k){function l(){var v=!1;v=!0;v&&of()?
yf(function(){var x=vf(I.s),y=!x&&void 0!=T(I.N)&&!1!==T(I.N);!k.vtp_transportUrl&&y&&(m.google_transport_url="https://pagead2.googlesyndication.com/");t("gcs",wf());b.push(m);x||xf(function(){m=G(m);!k.vtp_transportUrl&&m.google_transport_url&&delete m.google_transport_url;t("gcs",wf());t("gcu","1");b.push(m)})},[I.s]):b.push(m)}xj();var m={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,google_conversion_value:k.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:qk()};k.vtp_rdp&&(m.google_restricted_data_processing=!0);void 0!=T(I.N)&&!1!==T(I.N)&&(m.google_gtm_url_processor=function(v){return v=Zi(v)});var n=function(v){return function(x,y,A){var B="DATA_LAYER"==v?T(A):k[y];B&&(m[x]=B)}},r=n("JSON");r("google_conversion_currency","vtp_currencyCode");r("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(r=n(k.vtp_productReportingDataSource),
r("google_conversion_merchant_id","vtp_awMerchantId","aw_merchant_id"),r("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),r("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),r("google_basket_discount","vtp_discount","discount"),r("google_conversion_items","vtp_items","items"),m.google_conversion_items&&m.google_conversion_items.map&&(m.google_conversion_items=m.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}})));
var t=function(v,x){(m.google_additional_conversion_params=m.google_additional_conversion_params||{})[v]=x},q=function(v){return function(x,y,A,B){var z="DATA_LAYER"==v?T(A):k[y];B(z)&&t(x,z)}};var u=ck(k.vtp_transportUrl,"/pagead/conversion_async.js");u||(u=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":
"https://www.google.com/pagead/conversion_async.js");k.vtp_enableNewCustomerReporting&&(r=q(k.vtp_newCustomerReportingDataSource),r("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),r("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(m.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),m.google_read_gcl_cookie_opt_out=
!1):m.google_read_gcl_cookie_opt_out=!0;var w=!0;w&&l();a||(a=!0,S(u,f(),e(u)))};
Z.__awct=g;Z.__awct.g="awct";Z.__awct.h=!0;Z.__awct.priorityOverride=0}();Z.b.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.g="smm";Z.__smm.h=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Uo(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.b.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=K.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,Qe(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,g)()}else d.insertBefore(k,null),l()}else f()}catch(t){N(g)}}}var b=function(d,e,f){oj(function(){var g,k=Rf;k.postscribe||(k.postscribe=ke);g=k.postscribe;var l={done:e},m=K.createElement("div");m.style.display="none";m.style.visibility="hidden";K.body.appendChild(m);try{g(m,d,l)}catch(n){N(f)}})};var c=function(d){if(K.body){var e=
d.vtp_gtmOnFailure,f=no(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.bd,k=f.D;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,k,e):a(K.body,Ze(g),k,e)()}else ao(function(){c(d)},
200)};Z.__html=c;Z.__html.g="html";Z.__html.h=!0;Z.__html.priorityOverride=0}();








var Jq={};Jq.macro=function(a){if(qn.Pc.hasOwnProperty(a))return qn.Pc[a]},Jq.onHtmlSuccess=qn.we(!0),Jq.onHtmlFailure=qn.we(!1);Jq.dataLayer=Eg;Jq.callback=function(a){$f.hasOwnProperty(a)&&Da($f[a])&&$f[a]();delete $f[a]};function Kq(){Rf[Gd.w]=Jq;Xa(ag,Z.b);kd=kd||qn;ld=fj}
function Lq(){Xg.gtm_3pds=!0;Rf=E.google_tag_manager=E.google_tag_manager||{};if(Rf[Gd.w]){var a=Rf.zones;a&&a.unregisterChild(Gd.w);}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)dd.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)gd.push(e[f]);for(var g=b.predicates||[],k=0;k<g.length;k++)fd.push(g[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},t=0;t<n.length;t++)r[n[t][0]]=Array.prototype.slice.call(n[t],1);ed.push(r)}id=Z;jd=No;var q=data.permissions||{},u=data.sandboxed_scripts,w=data.security_groups;qm();Kd=new Jd(q);if(void 0!==
u)for(var v=["sandboxedScripts"],x=0;x<u.length;x++){var y=u[x].replace(/^_*/,"");ag[y]=v}tm(w);Kq();pn();jj=!1;kj=0;if("interactive"==K.readyState&&!K.createEventObject||"complete"==K.readyState)mj();else{Ve(K,"DOMContentLoaded",mj);Ve(K,"readystatechange",mj);if(K.createEventObject&&K.documentElement.doScroll){var A=!0;try{A=!E.frameElement}catch(H){}A&&nj()}Ve(E,"load",mj)}Lm=!1;"complete"===K.readyState?Nm():Ve(E,"load",Nm);a:{if(!tg)break a;E.setInterval(ug,864E5);}
Xf=(new Date).getTime();}}
(function(a){a()})(Lq);

})()
