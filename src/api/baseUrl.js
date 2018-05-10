// export default function getBaseUrl() {
//   const inDevelopment=window.location.hostname == 'localhost';
//   return inDevelopment ? 'http://localhost:8781/' : '/';
//
// }

export default function getBaseUrl() {

  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:8781/':'/';
}

// function getQueryStringParameterByName(name,url) {
//   if(!url) {
//     url = window.location.href;
//   }
//   name = name.replace(/[\[\]]/g,"$&");
//   var regex= new RegExp("[?&"+ name + "(=([^&#]*)|&|#|$)");
//   let results = regex.exec(url);
//   if (!results) return null;
//   if (!results[2]) return '';
//   return decodeURIComponent(results[2].replace(/\+/g," "));
//
// }

function getQueryStringParameterByName(name, url) {
  if(!url) {
    url = window.location.href;
  }
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

