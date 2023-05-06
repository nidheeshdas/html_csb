(window.dpJsonp=window.dpJsonp||[]).push([[44],{"./app/actionCreators/mediaActions.js":function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return r}));var n=o("./app/actionConstants.js"),a=function(e,t){return{type:n.y.MEDIAVIEWER_POPUP_SHOW,data:{list:e,selectedItem:t}}},i=function(e){return{type:n.y.MEDIAVIEWER_SELECTED_ITEM,data:{selectedItem:e}}},r=function(){return{type:n.y.MEDIAVIEWER_POPUP_HIDE}}},"./app/components/mediaviewer/MediaViewer.css":function(e,t,o){e.exports={previewContent:"zohohc-a7b46d058f",sgWrapper:"zohohc-f81e85101b",imgPreviewerlayout:"zohohc-b41edbc69c",imgPreviewer:"zohohc-306a310403",imgPreviewerheader:"zohohc-60c4fd9cb1",imgName:"zohohc-7be61869c1",imgCount:"zohohc-164f27d40a",navIcon:"zohohc-d508e002b5",headerIcon:"zohohc-8a9c4677e4",imgSrc:"zohohc-134f8020c3",arrowIconLeft:"zohohc-216b70efa0",arrowIconRight:"zohohc-ba6c3240ce",arrowIcon:"zohohc-8afbd49d30",imgMenuIcon:"zohohc-28c6b562c3",newpullDownIcn:"zohohc-575712783f",newpullmenuIcn:"zohohc-2c0aa92676",imgPreviewerFooter:"zohohc-5e07e2d67a",imgPreviewerFootershow:"zohohc-cafbb6e660",imgList:"zohohc-32c80231ca",iframeBox:"zohohc-809abfdf6c",contentIframeBox:"zohohc-f44faf28f9",selectedImgList:"zohohc-7cdab72239",listingView:"zohohc-f91a2382e3",imgBox:"zohohc-67ca2294a7",footerlisting:"zohohc-ebf8b5a2d2",rotateIcn:"zohohc-0ebf3b7544",imgZoomOut:"zohohc-3d62002988",imgZoomIn:"zohohc-e96bbd23ac",overFlow:"zohohc-4e55bac72c",mediaItem:"zohohc-3b7d66e900",loading:"zohohc-07905fe2d1",icon:"zohohc-1a44ae58d2",size20:"zohohc-5d24d78936",size14:"zohohc-54fbc6e2a6",white:"zohohc-5298220241",large:"zohohc-a25a4825d8",medium:"zohohc-5142137a7a",loadingIconItem:"zohohc-96db624e8a",listing:"zohohc-79149b4114",link:"zohohc-ee3e4d8e5b",displaynone:"zohohc-283d60aad9"}},"./app/components/mediaviewer/MediaViewer.js":function(e,t,o){"use strict";(function(e){o.d(t,"a",(function(){return I}));var n=o("../../../../../../../../../Users/levins-zt247/npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),a=o.n(n),i=o("./app/components/mediaviewer/MediaViewer.css"),r=o.n(i),c=o("../../../../../../../../../Users/levins-zt247/npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/prop-types/index.js"),l=o.n(c),s=o("./app/actionConstants.js");function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,i=void 0,i=function(e,t){if("object"!==m(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===m(i)?i:String(i)),n)}var a,i}function h(e,t,o){return t&&p(e.prototype,t),o&&p(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e}function d(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}function f(e,t){return(f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=g(e);if(t){var a=g(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return v(this,o)}}function v(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(e){d(o,e);var t=b(o);function o(){return u(this,o),t.apply(this,arguments)}return h(o,[{key:"render",value:function(){var e=this.props,t=e.icon,o=e.iconIdsMapping,n=e.size,i=e.iconColor,c=e.onClick;return a.a.createElement("svg",{className:r.a.icon+" "+r.a[n]+" "+(r.a[i]||""),onClick:c},a.a.createElement("use",{xlinkHref:o[t]}))}}]),o}(a.a.Component);y.defaultProps={iconIdsMapping:{zoomIn:"#zohohc-asap-media-zoomIn",zoomOut:"#zohohc-asap-media-zoomOut",newTab:"#zohohc-asap-media-newtab",pullMenu:"#zohohc-asap-media-pullMenu",pullDown:"#zohohc-asap-media-pullDown",arrowLeft:"#zohohc-asap-media-arrowLeft",arrowRight:"#zohohc-asap-media-arrowRight",closeIcon:"#zohohc-asap-media-closeIcon",downloadIcon:"#zohohc-asap-media-downloadicon",loadingIcon:"#zohohc-asap-media-loading",webIcon:"#zohohc-asap-media-webicon"}};var z=function(e){d(o,e);var t=b(o);function o(e){var n;return u(this,o),(n=t.call(this,e)).onClick=n.onClick.bind(w(n)),n}return h(o,[{key:"onClick",value:function(e){this.props.onClick&&(e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.nativeEvent&&e.nativeEvent.stopImmediatePropagation&&e.nativeEvent.stopImmediatePropagation(),this.props.onClick(this.props.location))}},{key:"render",value:function(){return a.a.createElement("a",{title:this.props.title,rel:"noopener",href:this.props.location,className:r.a.link,onClick:this.onClick,onContextMenu:this.props.onContextMenu},this.props.children)}}]),o}(a.a.Component),I=function(t){d(n,t);var o=b(n);function n(e){var t;return u(this,n),(t=o.call(this,e)).state={isThumbnailViewOpen:!1,isZoom:!1,isItemLoading:!1},t.toggleThumbnailView=t.toggleThumbnailView.bind(w(t)),t.downloadItem=t.downloadItem.bind(w(t)),t.onChangeItem=t.onChangeItem.bind(w(t)),t.switchNextItem=t.switchNextItem.bind(w(t)),t.switchPrevItem=t.switchPrevItem.bind(w(t)),t.openInBrowser=t.openInBrowser.bind(w(t)),t.toggleZoomView=t.toggleZoomView.bind(w(t)),t.handleKeyPress=t.handleKeyPress.bind(w(t)),t.offItemLoading=t.offItemLoading.bind(w(t)),t.preventEventBubbling=t.preventEventBubbling.bind(w(t)),t}return h(n,[{key:"offItemLoading",value:function(){this.setState({isItemLoading:!1})}},{key:"switchNextItem",value:function(){var e=this.props,t=e.mediaItemsList,o=e.onChange,n=e.selectedItem.position+1;if(!(n>t.length)){var a=Object.assign({},t[n-1]);this.setState({isZoom:!1,isItemLoading:!0}),o&&o(a)}}},{key:"switchPrevItem",value:function(){var e=this.props,t=e.mediaItemsList,o=e.onChange,n=e.selectedItem.position-1;if(!(n<1)){var a=Object.assign({},t[n-1]);this.setState({isZoom:!1,isItemLoading:!0}),o&&o(a)}}},{key:"toggleThumbnailView",value:function(e){this.setState({isThumbnailViewOpen:!this.state.isThumbnailViewOpen}),e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}},{key:"downloadItem",value:function(t){e.open(t,"_blank")}},{key:"openInBrowser",value:function(t){e.open(t,"_blank")}},{key:"onChangeItem",value:function(e){var t=this,o=this.props,n=o.mediaItemsList,a=o.onChange;n.forEach((function(o,n){if(o.id===e)return t.setState({isZoom:!1,isItemLoading:!0}),void(a&&a(Object.assign({},o)))})),this.setState({isZoom:!1})}},{key:"toggleZoomView",value:function(){this.setState({isZoom:!this.state.isZoom})}},{key:"handleKeyPress",value:function(e){var t=e.keyCode;27==t?(this.preventEventBubbling(e),this.props.closePopup&&this.props.closePopup()):37==t?this.switchPrevItem():39==t&&this.switchNextItem()}},{key:"preventEventBubbling",value:function(e){e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation()}},{key:"componentWillUnmount",value:function(){e.removeEventListener("keydown",this.handleKeyPress,!0)}},{key:"componentDidMount",value:function(){e.addEventListener("keydown",this.handleKeyPress,!0)}},{key:"render",value:function(){var e=this,t=this.props,o=t.mediaItemsList,n=void 0===o?[]:o,i=t.selectedItem,c=t.closePopup,l=t.nextLabel,m=t.previousLabel,u=t.zoomInLabel,p=t.zoomOutLabel,h=t.linkLabel,d=t.downloadLabel,f=t.closeLabel,b=this.state,v=b.isThumbnailViewOpen,w=b.isZoom,g=b.isItemLoading;return a.a.createElement("div",{className:r.a.previewContent+" "+r.a.imgPreviewerlayout+" "+r.a.imgPreviewer},a.a.createElement("div",{className:r.a.displaynone},a.a.createElement("svg",null,a.a.createElement("symbol",{id:"zohohc-asap-media-pullMenu",viewBox:"0 0 32 32"},a.a.createElement("path",{d:"M30.7 17.4h-19.7c-0.7 0-1.2-0.5-1.2-1.2s0.5-1.2 1.2-1.2h19.7c0.7 0 1.2 0.5 1.2 1.2-0.1 0.7-0.6 1.2-1.2 1.2z"}),a.a.createElement("path",{d:"M30.7 7.9h-29.4c-0.7 0-1.2-0.5-1.2-1.2s0.5-1.2 1.2-1.2h29.3c0.7 0 1.2 0.5 1.2 1.2s-0.5 1.2-1.1 1.2z"}),a.a.createElement("path",{d:"M30.7 26.9h-29.4c-0.7 0-1.2-0.5-1.2-1.2s0.5-1.2 1.2-1.2h29.3c0.7 0 1.2 0.5 1.2 1.2s-0.5 1.2-1.1 1.2z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-pullDown",viewBox:"0 0 32 32"},a.a.createElement("path",{d:"M31.167 15.262l-14.942-14.942c-0.213-0.214-0.459-0.321-0.737-0.321s-0.523 0.107-0.737 0.321l-1.603 1.603c-0.214 0.214-0.32 0.459-0.32 0.738s0.107 0.524 0.32 0.737l12.602 12.601-12.601 12.601c-0.214 0.214-0.32 0.46-0.32 0.737s0.107 0.524 0.32 0.738l1.603 1.603c0.214 0.214 0.459 0.321 0.737 0.321s0.524-0.107 0.737-0.321l14.942-14.942c0.214-0.214 0.32-0.46 0.32-0.738s-0.107-0.524-0.32-0.738z"}),a.a.createElement("path",{d:"M19.174 16c0-0.278-0.106-0.524-0.321-0.738l-14.941-14.942c-0.214-0.214-0.46-0.321-0.737-0.321s-0.524 0.107-0.737 0.321l-1.603 1.603c-0.214 0.214-0.321 0.459-0.321 0.738s0.107 0.524 0.321 0.737l12.601 12.601-12.601 12.601c-0.214 0.214-0.321 0.46-0.321 0.737s0.107 0.524 0.321 0.738l1.603 1.603c0.214 0.214 0.46 0.321 0.738 0.321s0.524-0.107 0.737-0.321l14.941-14.942c0.215-0.214 0.321-0.46 0.321-0.738z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-closeIcon",viewBox:"0 0 12 16"},a.a.createElement("path",{d:"M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-newtab",viewBox:"0 0 32 32"},a.a.createElement("path",{d:"M31.059 9.896c-0.52 0-0.941-0.422-0.941-0.941v-7.073h-7.073c-0.52 0-0.941-0.422-0.941-0.941s0.422-0.941 0.941-0.941h8.014c0.52 0 0.941 0.422 0.941 0.941v8.014c0 0.52-0.422 0.941-0.941 0.941z"}),a.a.createElement("path",{d:"M16.214 16.593c-0.242 0-0.485-0.093-0.669-0.279-0.366-0.369-0.363-0.965 0.006-1.331l14.323-14.188c0.369-0.366 0.966-0.362 1.331 0.006s0.363 0.965-0.006 1.331l-14.323 14.188c-0.183 0.182-0.423 0.273-0.662 0.273z"}),a.a.createElement("path",{d:"M23.239 32h-17.592c-3.114 0-5.647-2.533-5.647-5.647v-17.592c0-3.114 2.533-5.647 5.647-5.647h11.294c0.52 0 0.941 0.422 0.941 0.941s-0.422 0.941-0.941 0.941h-11.294c-2.076 0-3.765 1.689-3.765 3.765v17.592c0 2.076 1.689 3.765 3.765 3.765h17.592c2.076 0 3.765-1.689 3.765-3.765v-11.71c0-0.52 0.422-0.941 0.941-0.941s0.941 0.422 0.941 0.941v11.71c0 3.114-2.533 5.647-5.647 5.647z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-arrowRight",viewBox:"0 0 32 32"},a.a.createElement("path",{d:"M10 7.212l1.294-1.212 10.706 10-10.706 10-1.294-1.206 9.406-8.794z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-arrowLeft",viewBox:"0 0 32 32"},a.a.createElement("path",{d:"M22 7.212l-1.294-1.212-10.706 10 10.706 10 1.294-1.206-9.406-8.794z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-downloadicon",viewBox:"0 0 32 32"},a.a.createElement("path",{d:"M16 1.333q0.552 0 0.943 0.391t0.391 0.943v15.448l4.385-4.396q0.385-0.385 0.948-0.385 0.573 0 0.953 0.38t0.38 0.953q0 0.563-0.385 0.948l-6.667 6.667q-0.385 0.385-0.948 0.385t-0.948-0.385l-6.667-6.667q-0.385-0.407-0.385-0.948 0-0.552 0.391-0.943t0.943-0.391q0.563 0 0.948 0.385l4.385 4.396v-15.448q0-0.552 0.391-0.943t0.943-0.391zM29.333 20q0.552 0 0.943 0.391t0.391 0.943v5.333q0 1.667-1.156 2.823-1.177 1.177-2.812 1.177h-21.364q-1.636 0-2.833-1.167-1.167-1.197-1.167-2.833v-5.333q0-0.552 0.391-0.943t0.943-0.391 0.943 0.391 0.391 0.943v5.333q0 0.552 0.391 0.943t0.943 0.391h21.364q0.541 0 0.921-0.391t0.38-0.943v-5.333q0-0.552 0.391-0.943t0.943-0.391z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-zoomIn",viewBox:"0 0 32 32"},a.a.createElement("path",{d:"M13.333 1.333q2.437 0 4.661 0.953t3.828 2.557 2.557 3.828 0.953 4.661q0 2.093-0.683 4.011t-1.943 3.479l7.573 7.563q0.385 0.385 0.385 0.948 0 0.573-0.38 0.953t-0.953 0.38q-0.563 0-0.948-0.385l-7.563-7.573q-1.563 1.26-3.479 1.943t-4.011 0.683q-2.437 0-4.661-0.953t-3.828-2.557-2.557-3.828-0.953-4.661 0.953-4.661 2.557-3.828 3.828-2.557 4.661-0.953zM13.333 4q-1.896 0-3.625 0.74t-2.979 1.989-1.989 2.979-0.74 3.625 0.74 3.625 1.989 2.979 2.979 1.989 3.625 0.74 3.625-0.74 2.979-1.989 1.989-2.979 0.74-3.625-0.74-3.625-1.989-2.979-2.979-1.989-3.625-0.74zM13.333 8q0.552 0 0.943 0.391t0.391 0.943v2.667h2.667q0.552 0 0.943 0.391t0.391 0.943-0.391 0.943-0.943 0.391h-2.667v2.667q0 0.552-0.391 0.943t-0.943 0.391-0.943-0.391-0.391-0.943v-2.667h-2.667q-0.552 0-0.943-0.391t-0.391-0.943 0.391-0.943 0.943-0.391h2.667v-2.667q0-0.552 0.391-0.943t0.943-0.391z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-zoomOut",viewBox:"0 0 32 32"},a.a.createElement("path",{d:"M13.333 1.333q2.437 0 4.661 0.953t3.828 2.557 2.557 3.828 0.953 4.661q0 2.093-0.683 4.011t-1.943 3.479l7.573 7.563q0.385 0.385 0.385 0.948 0 0.573-0.38 0.953t-0.953 0.38q-0.563 0-0.948-0.385l-7.563-7.573q-1.563 1.26-3.479 1.943t-4.011 0.683q-2.437 0-4.661-0.953t-3.828-2.557-2.557-3.828-0.953-4.661 0.953-4.661 2.557-3.828 3.828-2.557 4.661-0.953zM13.333 4q-1.896 0-3.625 0.74t-2.979 1.989-1.989 2.979-0.74 3.625 0.74 3.625 1.989 2.979 2.979 1.989 3.625 0.74 3.625-0.74 2.979-1.989 1.989-2.979 0.74-3.625-0.74-3.625-1.989-2.979-2.979-1.989-3.625-0.74zM9.333 12h8q0.552 0 0.943 0.391t0.391 0.943-0.391 0.943-0.943 0.391h-8q-0.552 0-0.943-0.391t-0.391-0.943 0.391-0.943 0.943-0.391z"})),a.a.createElement("symbol",{id:"zohohc-asap-media-loading",viewBox:"0 0 40 40"},a.a.createElement("path",{opacity:"0.2",fill:"#fff",d:"M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"}),a.a.createElement("path",{fill:"#fff",d:"M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z",transform:"rotate(252 20 20)"},a.a.createElement("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 20 20",to:"360 20 20",dur:"0.5s",repeatCount:"indefinite"}))),a.a.createElement("symbol",{id:"zohohc-asap-media-webicon",viewBox:"0 0 18 18"},a.a.createElement("g",null,a.a.createElement("path",{d:"M9.269,2c0.617,0.02,1.214,0.119,1.791,0.299c0.587,0.189,1.129,0.433,1.627,0.731c0.488,0.308,0.94,0.677,1.358,1.104   c0.408,0.428,0.756,0.896,1.045,1.403s0.512,1.055,0.672,1.642C15.92,7.776,16,8.383,16,9s-0.08,1.224-0.239,1.821   c-0.159,0.587-0.383,1.134-0.672,1.642s-0.637,0.975-1.045,1.403c-0.418,0.428-0.871,0.796-1.358,1.104   c-0.498,0.299-1.04,0.537-1.627,0.716C10.483,15.876,9.886,15.98,9.269,16C9.209,16,9.119,16,9,16s-0.209,0-0.269,0   c-0.617-0.02-1.214-0.124-1.791-0.313c-0.587-0.179-1.129-0.418-1.627-0.716c-0.488-0.308-0.94-0.677-1.358-1.104   c-0.408-0.428-0.756-0.896-1.045-1.403s-0.512-1.055-0.672-1.642C2.08,10.224,2,9.617,2,9s0.08-1.224,0.239-1.821   C2.398,6.592,2.622,6.045,2.91,5.537s0.637-0.975,1.045-1.403C4.373,3.706,4.826,3.338,5.313,3.03   c0.498-0.299,1.04-0.542,1.627-0.731C7.517,2.119,8.114,2.02,8.731,2C8.791,2,8.881,2,9,2S9.209,2,9.269,2z M4.672,5.239   C3.896,6.134,3.438,7.174,3.299,8.358h2.537c0.119-1.731,0.692-3.368,1.716-4.91C6.408,3.746,5.448,4.343,4.672,5.239z    M3.299,9.642c0.139,1.184,0.597,2.224,1.373,3.119s1.736,1.493,2.881,1.791c-0.438-0.657-0.816-1.398-1.134-2.224   C6.1,11.502,5.905,10.607,5.836,9.642H3.299z M8.582,4.209C8.443,4.418,8.289,4.682,8.119,5S7.801,5.642,7.672,5.97   C7.542,6.299,7.423,6.672,7.313,7.09c-0.1,0.428-0.164,0.851-0.194,1.269h3.761c-0.03-0.418-0.095-0.841-0.194-1.269   c-0.109-0.428-0.229-0.801-0.358-1.119C10.199,5.642,10.05,5.318,9.881,5S9.557,4.418,9.418,4.209C9.289,4,9.149,3.801,9,3.612   C8.851,3.801,8.711,4,8.582,4.209z M7.119,9.642c0.03,0.418,0.095,0.841,0.194,1.269c0.109,0.428,0.229,0.806,0.358,1.134   C7.801,12.363,7.95,12.682,8.119,13s0.323,0.582,0.463,0.791C8.711,14,8.851,14.199,9,14.388C9.149,14.199,9.289,14,9.418,13.791   C9.557,13.582,9.711,13.318,9.881,13s0.318-0.642,0.448-0.97c0.129-0.328,0.249-0.701,0.358-1.119   c0.1-0.428,0.164-0.851,0.194-1.269H7.119z M12.164,8.358h2.537c-0.139-1.184-0.597-2.224-1.373-3.119   c-0.776-0.896-1.736-1.493-2.881-1.791C11.473,4.99,12.045,6.627,12.164,8.358z M12.164,9.642c-0.119,1.731-0.692,3.368-1.716,4.91   c1.144-0.299,2.104-0.896,2.881-1.791c0.776-0.896,1.234-1.935,1.373-3.119H12.164z"}))))),a.a.createElement("div",{className:r.a.imgPreviewerheader},a.a.createElement("div",{className:r.a.imgName},i.name),a.a.createElement("div",{className:r.a.imgCount}," ",i.position,"/",n.length," "),a.a.createElement("div",{className:r.a.navIcon},a.a.createElement("ul",{className:r.a.listing},i.mediaType!==s.F.iframe?a.a.createElement("li",{id:"zohohc_asap_mediaviewer_zoomtool"},a.a.createElement("span",{className:r.a.headerIcon+" "+r.a.zoom,onClick:this.toggleZoomView,title:w?p:u},a.a.createElement(y,{icon:w?"zoomOut":"zoomIn",size:"size20"}))):null,a.a.createElement("li",{id:"zohohc_asap_mediaviewer_newtab"},a.a.createElement(z,{location:i.viewUrl,onClick:this.openInBrowser},a.a.createElement("span",{className:r.a.headerIcon+" "+r.a.newtab,title:h},a.a.createElement(y,{icon:"newTab",size:"size20"})))),i.mediaType!==s.F.iframe?a.a.createElement("li",{id:"zohohc_asap_mediaviewer_downloadmedia"},a.a.createElement(z,{location:i.downloadUrl,onClick:this.downloadItem},a.a.createElement("span",{className:r.a.headerIcon+" "+r.a.download,title:d},a.a.createElement(y,{size:"size20",icon:"downloadIcon"})))):null,a.a.createElement("li",{id:"zohohc_asap_mediaviewer_closeicon"},a.a.createElement("span",{className:r.a.headerIcon+" "+r.a.close,onClick:c,title:f},a.a.createElement(y,{size:"size20",icon:"closeIcon"})))))),i.position>1?a.a.createElement("span",{className:r.a.arrowIconLeft+" "+r.a.arrowIcon,onClick:this.switchPrevItem,title:m},a.a.createElement(y,{icon:"arrowLeft",size:"medium",iconColor:"white"})):null,i.position<n.length?a.a.createElement("span",{className:r.a.arrowIconRight+" "+r.a.arrowIcon,onClick:this.switchNextItem,title:l},a.a.createElement(y,{icon:"arrowRight",size:"medium",iconColor:"white"})):null,a.a.createElement("div",{className:r.a.sgWrapper+" "+(w?r.a.overFlow:"")},i.mediaType===s.F.image&&g?a.a.createElement("div",{className:r.a.loadingIconItem},a.a.createElement(y,{icon:"loadingIcon",size:"large",iconColor:"white"})):null,i.mediaType==s.F.image?a.a.createElement("img",{className:r.a.mediaItem+" "+(w?r.a.imgZoomIn:r.a.imgSrc+" "+r.a.imgZoomOut)+" "+(g?r.a.loading:""),src:i.downloadUrl,onClick:this.toggleZoomView,onLoad:this.offItemLoading}):null,i.mediaType===s.F.iframe?a.a.createElement("div",{className:r.a.contentIframeBox,dangerouslySetInnerHTML:{__html:i.displayContent}}):null),a.a.createElement("div",{id:"zohohc_asap_mediaviewer_list_moreoption",className:r.a.imgMenuIcon,onClick:this.toggleThumbnailView},v?a.a.createElement("span",{className:r.a.newpullDownIcn}," ",a.a.createElement(y,{icon:"pullDown",size:"size14"})," "):a.a.createElement("span",{className:r.a.newpullmenuIcn}," ",a.a.createElement(y,{icon:"pullMenu",size:"size20"})," ")),a.a.createElement("div",{className:r.a.imgPreviewerFooter+" "+(v?r.a.imgPreviewerFootershow:"")},a.a.createElement("ul",{className:r.a.footerlisting},n&&n.map((function(t,o){return a.a.createElement("li",{className:r.a.listingView,key:o},a.a.createElement("div",{className:r.a.imgList+" "+(o+1===i.position?r.a.selectedImgList:""),onClick:e.onChangeItem.bind(e,t.id)},t.mediaType==s.F.image?a.a.createElement("img",{className:r.a.imgBox,src:t.downloadUrl}):null,t.mediaType==s.F.iframe?a.a.createElement("div",{className:r.a.iframeBox,dangerouslySetInnerHTML:{__html:t.displayContent}}):null))})))))}}]),n}(a.a.Component);I.defaultProps={nextLabel:"Next",previousLabel:"Previous",zoomInLabel:"Zoom In",zoomOutLabel:"Zoom Out",linkLabel:"Open in new tab",downloadLabel:"Download File",closeLabel:"Close"},I.propTypes={nextLabel:l.a.string,previousLabel:l.a.string,zoomInLabel:l.a.string,zoomOutLabel:l.a.string,linkLabel:l.a.string,downloadLabel:l.a.string,closeLabel:l.a.string,selectedItem:l.a.object,mediaItemsList:l.a.array,closePopup:l.a.func,onChange:l.a.func}}).call(this,o("../../../../../../../../../Users/levins-zt247/npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/webpack/buildin/global.js"))},"./app/containers/MediaViewerContainer.js":function(e,t,o){"use strict";o.r(t);var n=o("../../../../../../../../../Users/levins-zt247/npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react/index.js"),a=o.n(n),i=o("../../../../../../../../../Users/levins-zt247/npm-global/lib/node_modules/@zohodesk/react-cli/node_modules/react-redux/es/index.js"),r=o("./app/actionCreators/mediaActions.js"),c=o("./app/components/mediaviewer/MediaViewer.js");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(a=n.key,i=void 0,i=function(e,t){if("object"!==l(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===l(i)?i:String(i)),n)}var a,i}function m(e,t){return(m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var o,n=d(e);if(t){var a=d(this).constructor;o=Reflect.construct(n,arguments,a)}else o=n.apply(this,arguments);return p(this,o)}}function p(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(r,e);var t,o,n,i=u(r);function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=i.call(this,e)).closePopup=t.closePopup.bind(h(t)),t.onChangeItem=t.onChangeItem.bind(h(t)),t}return t=r,(o=[{key:"closePopup",value:function(){this.props.closeMediaViewerPopup()}},{key:"onChangeItem",value:function(e){this.props.changeMediaViewerItem(e)}},{key:"render",value:function(){var e=this.props.itemList||[],t=this.props.selectedItem;return this.props.isOpenMediaViewer&&t?a.a.createElement(c.a,{selectedItem:t,mediaItemsList:e,closePopup:this.closePopup,onChange:this.onChangeItem}):null}}])&&s(t.prototype,o),n&&s(t,n),Object.defineProperty(t,"prototype",{writable:!1}),r}(a.a.Component);t.default=Object(i.b)((function(e,t){var o=e.mediaViewerUi.data||{};return{isOpenMediaViewer:e.mediaViewerUi.active,selectedItem:o.selectedItem,itemList:o.list}}),{changeMediaViewerItem:r.a,closeMediaViewerPopup:r.b})(f)}}]);