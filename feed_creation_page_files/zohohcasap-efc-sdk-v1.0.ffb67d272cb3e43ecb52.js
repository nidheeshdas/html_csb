
    (function(){
        if (!Object.assign) {
            Object.defineProperty(Object, "assign", {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function(target, firstSource) {
                    if (target === undefined || target === null) {
                        throw new TypeError('Cannot convert first argument to object');
                    }
        
                    var to = Object(target);
                    for (var i = 1; i < arguments.length; i++) {
                        var nextSource = arguments[i];
                        if (nextSource === undefined || nextSource === null) {
                            continue;
                        }
        
                        var keysArray = Object.keys(Object(nextSource));
                        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                            var nextKey = keysArray[nextIndex];
                            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                            if (desc !== undefined && desc.enumerable) {
                                to[nextKey] = nextSource[nextKey];
                            }	
                        }
                    }
                    return to;
                }
            });
        }
        var ZohoHCAsapSettings = window.ZohoHCAsapSettings || window.ZohoHCAsap.Settings || {};
        ZohoHCAsap.Install = function(){
                
                //window.ZohoHCAsapReadyStatus=false;
                var CLIENT_DEV_STATIC_VERSION = ZohoHCAsapSettings ? ZohoHCAsapSettings.developerVersion : null;
                var CLIENT_STATIC_VERSION = (CLIENT_DEV_STATIC_VERSION || "stable.v1.97") + "/";
                
                var appSupportLanguages = "af_ZA,bg_BG,bn_IN,ca_ES,cs_CZ,el_GR,da_DK,de_DE,en_US,en_GB,es_AR,es_ES,fi_FI,fr_CA,fr_FR,he_IL,hi_IN,hr_HR,hu_HU,id_ID,it_IT,ja_JP,ka_GE,kn_IN,ko_KR,mr_IN,nb_NO,nl_NL,pl_PL,pt_BR,pt_PT,ro_RO,ru_RU,sv_SE,ta_IN,te_IN,th_TH,tr_TR,uk_UA,ur_PK,vi_VN,zh_CN,zh_TW,gu_IN,kk_KZ,ms_MY,ml_IN,sk_SK,sl_SI,ar_EG,iw_IL,fa_IR,ur_PK,he_IL".split(",");  // "ar_SA","en_GB","es_MX" not supported
                
                var rtlSupportedLanguages = "ar_EG,iw_IL,fa_IR,ur_PK,he_IL".split(",");
                var defaultLang = "en_US";
                var userLang = window.ZohoHCAsapSettings ? window.ZohoHCAsapSettings.lang : '';
                var lang = userLang || ZohoHCAsap._defaultoptions.i18NLangFile || defaultLang;
                lang = appSupportLanguages.indexOf(lang) === -1 ? defaultLang : lang;
    
                var isRtlLanguage = rtlSupportedLanguages.indexOf( lang ) !== -1;
                //RTL is not supported now : "ar_EG","iw_IL";  he_IL vs iw_IL
                
                var zohoHCAsapWebAppInit = (function(){
                    
                    var disableAWS = ZohoHCAsapSettings ? ZohoHCAsapSettings.disableAWS : false;
                    var enableCDN = ZohoHCAsapSettings ? ZohoHCAsapSettings.enableCDN : false;
                    if(disableAWS){
                        ZohoHCAsap._defaultoptions._cssstaticdomain = ZohoHCAsap._defaultoptions._cssstaticdomain_fallback;
                        ZohoHCAsap._defaultoptions._jsstaticdomain = ZohoHCAsap._defaultoptions._jsstaticdomain_fallback;
                    }
                    
                    var cssstaticdomain = ZohoHCAsap._defaultoptions._cssstaticdomain+CLIENT_STATIC_VERSION;
                    var jsstaticdomain = ZohoHCAsap._defaultoptions._jsstaticdomain+CLIENT_STATIC_VERSION;
                    var serverdomain = ZohoHCAsap._defaultoptions._serverdomain;
    
                    var loadingType = ZohoHCAsapSettings ? ZohoHCAsapSettings.loadingType : '';
                    loadingType = loadingType || "preload";
                    
                    var asapWebResources = "zohohc-asap-web-resources";
            
                    var fontSettings = ZohoHCAsapSettings ? ZohoHCAsapSettings.fontSettings : null;
                    var isLoadFontFamily = fontSettings && fontSettings.fontFamily ? false : true;
                    
                    var defaultLang = "en_US";
                    var userLang = ZohoHCAsapSettings ? ZohoHCAsapSettings.lang : '';
                    var protocol = (ZohoHCAsapSettings && ZohoHCAsapSettings.protocol) ? ZohoHCAsapSettings.protocol : "";
                    var lang = userLang || ZohoHCAsap._defaultoptions.i18NLangFile || defaultLang;
                    lang = appSupportLanguages.indexOf(lang) === -1 ? defaultLang : lang;
                    var deploymentType = ZohoHCAsap._defaultoptions.deploymentType || 'LOC';


                    var cssURL = protocol + '//css.zohostatic.in/support/asapweb/';
                    var jsURL = protocol + '//js.zohostatic.in/support/asapweb/';
                    var i18nJsURL = protocol + '//js.zohostatic.in/support/asapweb/';
                    var i18nFilePath = {"af_ZA.89d88c1d73f2040ec981_.js":"af_ZA.89d88c1d73f2040ec981_.js","af_ZA.js":"af_ZA.89d88c1d73f2040ec981_.js","ar_EG.3eafa16c246b3169d33d_.js":"ar_EG.3eafa16c246b3169d33d_.js","ar_EG.js":"ar_EG.3eafa16c246b3169d33d_.js","bg_BG.655060e98262e2de11e7_.js":"bg_BG.655060e98262e2de11e7_.js","bg_BG.js":"bg_BG.655060e98262e2de11e7_.js","bn_IN.f14aacbbcbb1d5cb6f43_.js":"bn_IN.f14aacbbcbb1d5cb6f43_.js","bn_IN.js":"bn_IN.f14aacbbcbb1d5cb6f43_.js","ca_ES.a21a563e070fcb15f4ad_.js":"ca_ES.a21a563e070fcb15f4ad_.js","ca_ES.js":"ca_ES.a21a563e070fcb15f4ad_.js","cs_CZ.b0492f7327ba316d7866_.js":"cs_CZ.b0492f7327ba316d7866_.js","cs_CZ.js":"cs_CZ.b0492f7327ba316d7866_.js","da_DK.21fc687d2989f19e43cf_.js":"da_DK.21fc687d2989f19e43cf_.js","da_DK.js":"da_DK.21fc687d2989f19e43cf_.js","de_DE.4988a1ceb8bd8745b442_.js":"de_DE.4988a1ceb8bd8745b442_.js","de_DE.js":"de_DE.4988a1ceb8bd8745b442_.js","el_GR.944a4d8c3c7a38ca0d88_.js":"el_GR.944a4d8c3c7a38ca0d88_.js","el_GR.js":"el_GR.944a4d8c3c7a38ca0d88_.js","en_GB.4467155a73561a168edf_.js":"en_GB.4467155a73561a168edf_.js","en_GB.js":"en_GB.4467155a73561a168edf_.js","en_US.555d3bf683429172dc9b_.js":"en_US.555d3bf683429172dc9b_.js","en_US.js":"en_US.555d3bf683429172dc9b_.js","es_AR.8c55fca18827ff11bd88_.js":"es_AR.8c55fca18827ff11bd88_.js","es_AR.js":"es_AR.8c55fca18827ff11bd88_.js","es_ES.acd5a4f1a8026dc81419_.js":"es_ES.acd5a4f1a8026dc81419_.js","es_ES.js":"es_ES.acd5a4f1a8026dc81419_.js","fa_IR.dabefa16443db735f7b1_.js":"fa_IR.dabefa16443db735f7b1_.js","fa_IR.js":"fa_IR.dabefa16443db735f7b1_.js","fi_FI.a3a8ddd4261f0ffb61dd_.js":"fi_FI.a3a8ddd4261f0ffb61dd_.js","fi_FI.js":"fi_FI.a3a8ddd4261f0ffb61dd_.js","fr_CA.f35e9e2b579d4e16d0ba_.js":"fr_CA.f35e9e2b579d4e16d0ba_.js","fr_CA.js":"fr_CA.f35e9e2b579d4e16d0ba_.js","fr_FR.f35e9e2b579d4e16d0ba_.js":"fr_FR.f35e9e2b579d4e16d0ba_.js","fr_FR.js":"fr_FR.f35e9e2b579d4e16d0ba_.js","gu_IN.6270c9b6b0c61706e359_.js":"gu_IN.6270c9b6b0c61706e359_.js","gu_IN.js":"gu_IN.6270c9b6b0c61706e359_.js","he_IL.dd6d06c556d46f34ed58_.js":"he_IL.dd6d06c556d46f34ed58_.js","he_IL.js":"he_IL.dd6d06c556d46f34ed58_.js","hi_IN.fa2102d4a576e3dd5a76_.js":"hi_IN.fa2102d4a576e3dd5a76_.js","hi_IN.js":"hi_IN.fa2102d4a576e3dd5a76_.js","hr_HR.2524b2b409e2754d9d63_.js":"hr_HR.2524b2b409e2754d9d63_.js","hr_HR.js":"hr_HR.2524b2b409e2754d9d63_.js","hu_HU.8451af5db318d1813205_.js":"hu_HU.8451af5db318d1813205_.js","hu_HU.js":"hu_HU.8451af5db318d1813205_.js","id_ID.175d0bd3d6831098ab77_.js":"id_ID.175d0bd3d6831098ab77_.js","id_ID.js":"id_ID.175d0bd3d6831098ab77_.js","it_IT.5b3fc9fca7db5bd36343_.js":"it_IT.5b3fc9fca7db5bd36343_.js","it_IT.js":"it_IT.5b3fc9fca7db5bd36343_.js","ja_JP.8fac48932cbf18e7d11f_.js":"ja_JP.8fac48932cbf18e7d11f_.js","ja_JP.js":"ja_JP.8fac48932cbf18e7d11f_.js","ka_GE.efe6fe98db89adf1b027_.js":"ka_GE.efe6fe98db89adf1b027_.js","ka_GE.js":"ka_GE.efe6fe98db89adf1b027_.js","kk_KZ.e79beb39729ffac08863_.js":"kk_KZ.e79beb39729ffac08863_.js","kk_KZ.js":"kk_KZ.e79beb39729ffac08863_.js","km_KH.70975fe38bac5c04b497_.js":"km_KH.70975fe38bac5c04b497_.js","km_KH.js":"km_KH.70975fe38bac5c04b497_.js","kn_IN.b31615d850d85e2cc3f6_.js":"kn_IN.b31615d850d85e2cc3f6_.js","kn_IN.js":"kn_IN.b31615d850d85e2cc3f6_.js","ko_KR.8fa3ad210ee86cfad287_.js":"ko_KR.8fa3ad210ee86cfad287_.js","ko_KR.js":"ko_KR.8fa3ad210ee86cfad287_.js","ml_IN.16b5c65267218ba31ef5_.js":"ml_IN.16b5c65267218ba31ef5_.js","ml_IN.js":"ml_IN.16b5c65267218ba31ef5_.js","mr_IN.5657c458ac1591b75f8d_.js":"mr_IN.5657c458ac1591b75f8d_.js","mr_IN.js":"mr_IN.5657c458ac1591b75f8d_.js","ms_MY.114cc80e21b57201529b_.js":"ms_MY.114cc80e21b57201529b_.js","ms_MY.js":"ms_MY.114cc80e21b57201529b_.js","my_MM.f8e8e4cd5fd476147808_.js":"my_MM.f8e8e4cd5fd476147808_.js","my_MM.js":"my_MM.f8e8e4cd5fd476147808_.js","nb_NO.bb4cbad7a0c152f06042_.js":"nb_NO.bb4cbad7a0c152f06042_.js","nb_NO.js":"nb_NO.bb4cbad7a0c152f06042_.js","nl_NL.489c86a19d2a717d280d_.js":"nl_NL.489c86a19d2a717d280d_.js","nl_NL.js":"nl_NL.489c86a19d2a717d280d_.js","pl_PL.61fec0452072fc2af4eb_.js":"pl_PL.61fec0452072fc2af4eb_.js","pl_PL.js":"pl_PL.61fec0452072fc2af4eb_.js","pt_BR.6b1b7f9406fe3f63f956_.js":"pt_BR.6b1b7f9406fe3f63f956_.js","pt_BR.js":"pt_BR.6b1b7f9406fe3f63f956_.js","pt_PT.4d7bd586da08795cbcbb_.js":"pt_PT.4d7bd586da08795cbcbb_.js","pt_PT.js":"pt_PT.4d7bd586da08795cbcbb_.js","ro_RO.0cf462bdbb4e9493324e_.js":"ro_RO.0cf462bdbb4e9493324e_.js","ro_RO.js":"ro_RO.0cf462bdbb4e9493324e_.js","ru_RU.d9671185b2dc9c75ff34_.js":"ru_RU.d9671185b2dc9c75ff34_.js","ru_RU.js":"ru_RU.d9671185b2dc9c75ff34_.js","sk_SK.4c623caeee83e242e90f_.js":"sk_SK.4c623caeee83e242e90f_.js","sk_SK.js":"sk_SK.4c623caeee83e242e90f_.js","sl_SI.81d7c9b5a31bc1b5a52f_.js":"sl_SI.81d7c9b5a31bc1b5a52f_.js","sl_SI.js":"sl_SI.81d7c9b5a31bc1b5a52f_.js","sv_SE.a9411aa20e9090b2e83b_.js":"sv_SE.a9411aa20e9090b2e83b_.js","sv_SE.js":"sv_SE.a9411aa20e9090b2e83b_.js","ta_IN.c0efe20571b409bb6de3_.js":"ta_IN.c0efe20571b409bb6de3_.js","ta_IN.js":"ta_IN.c0efe20571b409bb6de3_.js","te_IN.23e5b78880eec3432302_.js":"te_IN.23e5b78880eec3432302_.js","te_IN.js":"te_IN.23e5b78880eec3432302_.js","th_TH.e9bb14e04785389937c3_.js":"th_TH.e9bb14e04785389937c3_.js","th_TH.js":"th_TH.e9bb14e04785389937c3_.js","tr_TR.18883e36c90584666ab5_.js":"tr_TR.18883e36c90584666ab5_.js","tr_TR.js":"tr_TR.18883e36c90584666ab5_.js","uk_UA.352e3e9d3469ca637322_.js":"uk_UA.352e3e9d3469ca637322_.js","uk_UA.js":"uk_UA.352e3e9d3469ca637322_.js","ur_PK.4954b429f0356377ed6a_.js":"ur_PK.4954b429f0356377ed6a_.js","ur_PK.js":"ur_PK.4954b429f0356377ed6a_.js","vi_VN.89e3f862c3458fb2ca9e_.js":"vi_VN.89e3f862c3458fb2ca9e_.js","vi_VN.js":"vi_VN.89e3f862c3458fb2ca9e_.js","zh_CN.46241c2aeaa89de59c31_.js":"zh_CN.46241c2aeaa89de59c31_.js","zh_CN.js":"zh_CN.46241c2aeaa89de59c31_.js","zh_TW.94aafb1acf9b164c9987_.js":"zh_TW.94aafb1acf9b164c9987_.js","zh_TW.js":"zh_TW.94aafb1acf9b164c9987_.js"};

                    if( enableCDN || ( deploymentType !== 'LOC' ) ){
                        cssURL = protocol + '//d3el7j01zd7apf.cloudfront.net/asapweb/aws/';
                        jsURL = protocol + '//d17nz991552y2g.cloudfront.net/asapweb/aws/';
                        i18nJsURL = protocol + '//d17nz991552y2g.cloudfront.net/asapweb/aws/';
                    }

                    ZohoHCAsap._defaultoptions.i18nFilesPath=i18nFilePath;
                    ZohoHCAsap._defaultoptions.i18nJsURL=i18nJsURL+"i18n/";

                    var headEl = document.getElementsByTagName('head')[0];
                    var nonceValue = window.ZohoHCAsap.nonce;
                    var preloadLinks = function(preloadUrls, asType, loadType){
                        for(var i=0, len = preloadUrls.length; i < len; i++){
                            var preloadUrl = preloadUrls[ i ];
                            if(preloadUrl){
                                var preloadLink = document.createElement('link');
                                preloadLink.rel= loadType;
                                if( asType ){
                                    preloadLink.as=asType;
                                }
                                preloadLink.crossorigin="crossorigin";
                                preloadLink.href=preloadUrl;
                                preloadLink.className=asapWebResources;
                                if( nonceValue ){
                                    preloadLink.setAttribute('nonce', nonceValue);
                                }
                                headEl.appendChild(preloadLink);
                            }
                        }
                    }
                    

                    var thirdPartyCssPath = cssURL+"css/asapthirdparty.nofonts.min.css";
                    if(isLoadFontFamily){
                         thirdPartyCssPath = cssURL+"css/asapthirdparty.min.css";
                    }

                    var efcCssFilePath = cssURL+'css/styles.815db80791f6e1168fbc_.css';  //css.zohostatic.in/support/asapweb/css/efc.9287364.css

                    var runtimeEfcJsPath = jsURL+'js/runtime~efc.e2a6f311af5f14c0e30d_.js';
                    var vendorJsPath = jsURL+'js/vendor.c73fd598daea3cbcf4ba_.js';                // /js.zohostatic.in/support/asapweb/app.v1/stable.v1.97/js/vendor.0678238a3b2990d00046_.js
                    var reactJsPath = jsURL+'js/react.vendor.fb3bc28100eb33875a5e_.js';
                    var languageJsPath = i18nJsURL+'i18n/'+i18nFilePath[lang+'.js'];                 // //js.zohostatic.in/support/asapweb/app.v1/stable.v1.97/i18n/en_US.0678238a3b2990d00046_.js
                    var styleJsPath = jsURL+'js/styles.815db80791f6e1168fbc_.js';
                    var mainJsPath = jsURL+'js/efc.56b6a4b777813d299486_.js';


                    return {
                        preloadAppInformation : function(){
                            
                            preloadLinks([ cssstaticdomain, jsstaticdomain , serverdomain ], null , "dns-prefetch");
                            preloadLinks([ cssstaticdomain, jsstaticdomain , serverdomain ], null , "preconnect");
                            
                            preloadLinks([ runtimeEfcJsPath , vendorJsPath , reactJsPath , languageJsPath , styleJsPath , mainJsPath ], "script" , loadingType);
                            
                            preloadLinks([ thirdPartyCssPath ], "style", loadingType);
                            
                            if(isLoadFontFamily){
                                preloadLinks([ cssURL+"fonts/Lato-Regular.woff2", cssURL+"fonts/Lato-Bold.woff2" ], "font" , "prefetch");
                            }
                            
                        },
                        startAppWorks : function(){
                            
                            var nonceValue = window.ZohoHCAsap.nonce;
                            
                            var linkEl = document.createElement('link');
                            linkEl.rel="stylesheet";
                            linkEl.href= thirdPartyCssPath;
                            linkEl.className="zohohc_asap_web_css_resources";
                            if(nonceValue){
                                linkEl.setAttribute('nonce', nonceValue);
                            }
                            headEl.appendChild(linkEl);
                           
                            var linkElem = document.createElement('link');
                            linkElem.rel="stylesheet";
                            linkElem.href= efcCssFilePath;
                            linkElem.className="zohohc_asap_web_css_resources";
                            if(nonceValue){
                                linkElem.setAttribute('nonce', nonceValue);
                            }
                            headEl.appendChild(linkElem);
                            
                            var s = document.createElement('script');
                            s.type = 'text/javascript';
                            s.src = languageJsPath;
                            s.id = "zohohc-asap-web-langjs";
                            s.className=asapWebResources;
                            if(nonceValue){
                                s.setAttribute('nonce', nonceValue);
                            }
                            s.onload = function(){
                                var r = document.createElement('script');
                                r.type = 'text/javascript';
                                r.src = runtimeEfcJsPath;
                                r.className=asapWebResources;
                                if(nonceValue){
                                    r.setAttribute('nonce', nonceValue);
                                }
                                r.onload = function() {
                                    var c = document.createElement('script');
                                    c.type = 'text/javascript';
                                    c.src = vendorJsPath;
                                    c.className=asapWebResources;
                                    if(nonceValue){
                                        c.setAttribute('nonce', nonceValue);
                                    }
                                    c.onload = function() {
                                        var a = document.createElement('script');
                                        a.type = 'text/javascript';
                                        a.src = reactJsPath;
                                        a.className=asapWebResources;
                                        if(nonceValue){
                                            a.setAttribute('nonce', nonceValue);
                                        }
                                        a.onload = function() {
                                            var b = document.createElement('script');
                                            b.type = 'text/javascript';
                                            b.src = styleJsPath;
                                            b.className=asapWebResources;
                                            if(nonceValue){
                                                b.setAttribute('nonce', nonceValue);
                                            }
                                            b.onload = function(){
                                                var m = document.createElement('script');
                                                m.type = 'text/javascript';
                                                m.src = mainJsPath;
                                                m.className=asapWebResources;
                                                if(nonceValue){
                                                    m.setAttribute('nonce', nonceValue);
                                                }
                                                headEl.appendChild(m);
                                            }
                                            headEl.appendChild(b);
                                        };
                                        headEl.appendChild(a);
                                    };
                                    headEl.appendChild(c);
                                };
                                headEl.appendChild(r);
                            };
                            headEl.appendChild(s);
                        }
                    };
                    
                })();
                
                zohoHCAsapWebAppInit.preloadAppInformation();
                
                var runZohoHCAsapWebApp = function(){
            
                    // window.styleTarget = "zohohc-asap-web-helper-styles";
                    //window.styleTarget = { parentId : "#zohohc-asap-web-helper-main" , childId :  "#zohohc-asap-web-helper-styles" };
                    if( document.getElementById("zohohc-asap-web-helper-main") === null ){
            
                        var asapMainSide = document.createElement('aside');
                        asapMainSide.id = "zohohc-asap-web-helper-main";
                        if( isRtlLanguage ){
                            asapMainSide.setAttribute( 'dir' , "rtl" );
                        }
                        /*if( asapMainSide.attachShadow) {
                            asapMainSide.attachShadow({ mode: "open" });
                        }
                        else if( asapMainSide.createShadowRoot ){
                            asapMainSide.createShadowRoot();
                        }*/
                        var customLayoutId = ZohoHCAsapSettings ? ZohoHCAsapSettings.customLayoutId : '';
                        if( document.getElementById(customLayoutId) ){
                            
                            var customLayoutNode = document.getElementById(customLayoutId);
                            customLayoutNode.appendChild(asapMainSide);
                        }
                        else{
                            document.body.appendChild(asapMainSide);
                        }
                        
                        var mainAsapDivShadowHost = document.getElementById("zohohc-asap-web-helper-main");
                        var mainAsapDivShadowRoot = mainAsapDivShadowHost.shadowRoot ? mainAsapDivShadowHost.shadowRoot :  mainAsapDivShadowHost;
                        
                        var asideAsapStyleCore = document.createElement('div');
                        asideAsapStyleCore.id = "zohohc-asap-web-helper-styles";
                        mainAsapDivShadowRoot.appendChild(asideAsapStyleCore);
                        
                        var asideAsapMainCore = document.createElement('div');
                        asideAsapMainCore.id = "zohohc-asap-web-helper-core";
                        mainAsapDivShadowRoot.appendChild(asideAsapMainCore);
                        
                        zohoHCAsapWebAppInit.startAppWorks();
                        
                    }	
                    else{
                        
                        zohoHCAsapWebAppInit.startAppWorks();
                    }
                    
                }
                
                if( document.body !== null ){
                    runZohoHCAsapWebApp && runZohoHCAsapWebApp();
                    runZohoHCAsapWebApp = null;
                }
                
                document.addEventListener("readystatechange", function () {
                    if( document.body !== null ){
                        runZohoHCAsapWebApp && runZohoHCAsapWebApp();
                        runZohoHCAsapWebApp = null;
                    }
                });
        }
        ZohoHCAsap.removeDomElementsByQuerySelector = function(selector){
            var asapWebResources = document.querySelectorAll(selector);
            if(asapWebResources){
                for(var i=0,len=asapWebResources.length;i<len;i++){
                    var nodeResource = asapWebResources[i];
                    if(nodeResource && nodeResource.parentNode && nodeResource.parentNode.removeChild){
                        nodeResource.parentNode.removeChild( nodeResource );
                    }
                }
            }
        }
        
        ZohoHCAsap.UnInstall = function(removeType){
            
            removeType = removeType || "COMPLETELY";
            ZohoHCAsap.unmountApp && ZohoHCAsap.unmountApp();
            if(typeof window.ZohoHCAsap.ReadyStatus !== "undefined"){
                window.ZohoHCAsap.ReadyStatus = false;
            }
            else{
                window.ZohoHCAsapReadyStatus = false;
            }
            
            if(removeType === "COMPLETELY"){
                window.dpJsonp = null;
                window.zohohcasapwebwidgetClosePopups = null;
                window.publicPath = null;
                ZohoHCAsap.removeDomElementsByQuerySelector(".zohohc-asap-web-resources,#zohohc-asap-web-helper-main");
                window.ZohoHCAsap = null;
                window.ZohoDeskEditor = null;
            }
            else if( removeType === "DOM_AND_ACTIONAPIS" ){
                
                delete ZohoHCAsap.Helper ;
                delete ZohoHCAsap.API ;
                delete ZohoHCAsap.Actions ;
                delete ZohoHCAsap.Action ;
                delete ZohoHCAsap.Events ;
                delete ZohoHCAsap.Login ;
                delete ZohoHCAsap.Logout ;
                delete ZohoHCAsap.communityCategories ;
                delete ZohoHCAsap.communityTopics ;
                delete ZohoHCAsap.kbArticles ;
                delete ZohoHCAsap.kbCategories ;
                delete ZohoHCAsap.ticketCreateForm ;
                delete ZohoHCAsap.unmountApp ;
                delete ZohoHCAsap._defaultI18N ;
                ZohoHCAsap.removeDomElementsByQuerySelector(".zohohc-asap-web-resources,#zohohc-asap-web-helper-main");
            }
        }
        
        if( !ZohoHCAsapSettings || (ZohoHCAsapSettings && !ZohoHCAsapSettings.isManualInstall) ){
            ZohoHCAsap.Install();
        }
        
    })();
    