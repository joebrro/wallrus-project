// export const navigate = (url) => {
//   window.open(url, '_blank');
// };

var Http = new XMLHttpRequest(); //creating a httpRequest variable
var url = 'https://jsonplaceholder.typicode.com/posts'; //Variable URL
var httpDoc;//responceType variable
Http.responseType = 'document'; //URL link documents 
var parse = new urlPaser('r', '5', 'document'); //parsing the objects to strings
// var obj = [
//   { name: 'Afghanistan', code: 'AF' },
//   { name: 'Åland Islands', code: 'AX' },
//   { name: 'Albania', code: 'AL' },
//   { name: 'Algeria', code: 'DZ' },
// ];

//storing objects inside an array   
var obj2 = new Array(25);
obj2[0] = parse;
obj2[1] = parse;
obj2[2] = parse;
obj2[3] = parse;
obj2[4] = parse;

//onreadystatechange a property value.
Http.onreadystatechange = (url) => {
  // the code you're looking for
  var needle = 'AL';
  // iterate over each element in the array
  for (var i = 0; i < obj2.length; i++) {
    if (http.readyState == XMLHttpRequest.DONE) {
      httpDoc = Http.response;
      var json = JSON.parse(httpDoc.responseText);
      //console.log(json.DONE);
      document.write(obj2[i]);
    // look for the entry with a matching `code` value
      // if (obj[i].code == needle) {
      // we found it
      // obj[i].name is the matched result
       

    }

  
  }
};
//sends to the backend server.
Http.send(json); 
//opens the httprequested search links in the running backround invisable
Http.open('GET', url); 

// export const navigate = url => {
//   window.open(url, '_blank');
// };

// let request = new XMLHttpRequest();
// request.open('GET', url);
// request.responseType = 'text';

// request.onload = function() {
//   poemDisplay.textContent = request.response;
// };
//   request.send();

//   fetch(url).then(function(response) {
//     response.text().then(function(text) {
//       poemDisplay.textContent = text;
//     });
//   });

//   var results = [];
// var searchField = "name";
// var searchVal = "my Name";
// for (var i=0 ; i < obj.list.length ; i++)
// {
//     if (obj.list[i][searchField] == searchVal) {
//         results.push(obj.list[i]);
//     }
// }

// obj2[0] = parse
// obj2[1] = parse
// obj2[2] = parse
// obj2[3] = parse
// obj2[4] = parse
// obj2[5] = parse
// obj2[6] = parse
// obj2[7] = parse
// obj2[8] = parse
// obj2[9] = parse
// obj2[10] = parse
// obj2[11] = parse
// obj2[12] = parse
// obj2[13] = parse
// obj2[14] = parse
// obj2[15] = parse
// obj2[16] = parse
// obj2[17] = parse
// obj2[18] = parse
// obj2[19] = parse
// obj2[20] = parse
// obj2[21] = parse
// obj2[22] = parse
// obj2[23] = parse
// obj2[24] = parse
