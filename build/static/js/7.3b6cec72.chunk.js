(this.webpackJsonpilovesemicolons=this.webpackJsonpilovesemicolons||[]).push([[7],{89:function(r,t,i){"use strict";i.r(t),i.d(t,"CheckInputContainSmallLetters",(function(){return o}));var e=i(4),n=i(5),o=function(){function r(){Object(e.a)(this,r),this.validationErrorArray=[]}return Object(n.a)(r,[{key:"validate",value:function(r,t,i,e,n){var o=typeof t,a=function(r){return r.length>0||0!==r.length&&void 0},s=0,u=function(r){for(var t=0;t<r.length;t++)r[t]===r[t].toLowerCase()&&r[t]!==r[t].toUpperCase()&&s++};if("boolean"===o){if(!0===t){if(!/[A-Z]/.test(e))return!0;this.validationErrorArray.push(i,n)}if(!1===t){if(!/[a-z]/.test(e))return!0;this.validationErrorArray.push(i,n)}}else if("number"===o&&a(e)){if(u(e),t===s)return!0;this.validationErrorArray.push(i,n)}else if("object"===o&&a(e)){var f=t[0],l=t[1],h=typeof f,p=typeof l;if(!0===f&&"number"===p){if(u(e),!(0===s||s>l))return!0;this.validationErrorArray.push(i,n)}else if("number"===h&&!0===l){if(u(e),!(0===s||s<f))return!0;this.validationErrorArray.push(i,n)}else if("number"===h&&"number"===p){if(u(e),!(s<f||s>l))return!0;this.validationErrorArray.push(i,n)}}}}]),r}()}}]);
//# sourceMappingURL=7.3b6cec72.chunk.js.map