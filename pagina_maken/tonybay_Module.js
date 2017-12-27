// try {
//     setTimeout(function () {
//
//         const tonybay_Module = (function() {
//             let categories = document.querySelectorAll('#urlform table tbody');
//
//             if (categories[0]) {
//
//                 // categories[0].querySelectorAll('tr td ul li .crossall')[2].click()
//
//                 const categoryLooper = function(categories) {
//                     for (var i = 0; i < categories.length; i++) {
//                         let rows = categories[i].querySelectorAll("tr")
//
//                         const runRows = (async function (rows, category) {
//                             let saveRowData = rowLooper(rows);
//                             commitRow(saveRowData, rows);
//
//                             setTimeout(function () {
//                                 category.click();
//                             }, 100);
//                         })(rows, categories[i]);
//
//                     }
//                 }(categories);
//
//                 function rowLooper(rows) {
//                     let saveRowData = [];
//                     for (var i = 2; i < rows.length; i++) {
//
//                         let testRowRes = testRow(rows[i]);
//                         if (testRowRes !== false) {
//                             let newRowDataObj = {}
//
//
//                             if (i < 3) {
//                                 createobj(i, testRowRes, false)
//                             }
//
//                             else if (notDouble(saveRowData, testRowRes) == true) {
//                                 createobj(i, testRowRes, false)
//                             }
//
//                             function createobj(i, testRowRes, id) {
//                                 newRowDataObj.rowNr = i;
//                                 newRowDataObj.string = testRowRes;
//                                 newRowDataObj.identity = id;
//                                 saveRowData.push(newRowDataObj)
//
//                                 rows[i].children[1].style.backgroundColor = "black";
//                             }
//
//                             function notDouble(saveRowData, string) {
//                                 for (var i = 0; i < saveRowData.length; i++) {
//                                     let item1 = string
//                                     let item2 = saveRowData[i]["string"];
//                                     let result = testStringDifferences_Module.p_all(item1, item2, 3, 20)
//                                     if(result) {
//                                         return false
//                                     }
//                                 }
//                                 return true;
//                             }
//                             // console.log(saveRowData);
//                         }
//                     }
//
//                     return saveRowData
//                 }
//
//
//                 function commitRow(saveRowData, rows) {
//
//                     for (var i = 0; i < saveRowData.length; i++) {
//                         let row = rows[saveRowData[i].rowNr];
//
//                         const thisAs = (function(row) {
//                             row.children[0].children[0].checked = true;
//                         })(row)
//
//                     }
//                 }
//
//                 function testRow(row) {;
//                     let item = checkDoubleLinks_Module.p_getContentItems(row);
//
//                     if (item.length < 46 && item.length > 3) {
//                         return item;
//                     }
//                     else {
//                         return false
//                     }
//
//
//                 }
//
//
//                 function getContentItems(row) {
//                     let items = row.querySelectorAll('td ul li');
//                     let textLine = "";
//                     for (var i = 0; i < items.length; i++) {
//                         if (
//                             items[i].classList.contains("redbg") === false &&
//                             items[i].querySelector('span').innerHTML !== ""
//                         ) {
//                             if (textLine.length !== 0) {
//                                 textLine += " ";
//                             }
//                             textLine += items[i].querySelector("span").innerHTML;
//                         };
//                     }
//                     return textLine;
//                 }
//
//                 // checkDoubleLinks_Module.run(categories[0]);
//             }
//
//         })();
//     }, 2000);
//
// } catch (e) {
//     alert("tonybay broke");
//     console.log(e);
// }
