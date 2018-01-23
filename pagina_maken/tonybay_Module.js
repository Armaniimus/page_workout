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

















try {

    const addEventListener = (function () {
        window.addEventListener("keyup", function(e) {
            if (e.shiftKey === true) {
                if ( e.key.toLowerCase() === "d") {
                    loopOverCategory();
                }
            }
        }, 1 );
    })()

    function loopOverCategory() {

        let categories = document.querySelectorAll('#urlform table tbody');
        let botData = {odd: true, max: 0, min: 0 }

        for (var i = 0; i < categories.length; i++) {
            // set botData
            botData = setBotData(botData);

            // set rows
            let rows = categories[i].querySelectorAll("tr");
            loopOverRows(rows, botData)
        }

        for (var j = 0; j < categories.length; j++) {
            categories[j].click()
        }
        // categories[3].click()
        // alert(categories.length)
    }

    function loopOverRows(rows, botData) {
        try {
            let count = 0;
            const start = 2;
            let currRow = 0;
            let saveRowData = [];

            for (var i = 0; i < rows.length-2; i=i+2) {
                currRow = i+start

                if (count < botData.max) {

                    const row = rows[currRow];
                    const rowItems = row.children[1].querySelectorAll("ul span");
                    let result = testRow(row, rowItems, saveRowData);

                    if (result) {
                        saveRowData = result.rowData
                        count += 1;
                    }
                }
            }
        } catch(e) {
            alert("error")
            console.log(e)
        }

    }

    function testRow(row, rowItems, saveRowData) {
        try {
            const checkbox = row.children[0].querySelector("input");
            let string = "";
            let testString = "";

            for (var i = 1; i < rowItems.length; i++) {
                if (rowItems[i].innerHTML == "|" ||
                    rowItems[i].innerHTML == "-" ||
                    rowItems[i].innerHTML == "–"
                ) {
                    testString = rowItems[i-1].innerHTML

                    //if not oke
                    if (testString.length < 5) {
                        return false

                    // if oke
                    } else {
                        if (string.length < 46 && string.length > 4) {
                            let test = notDouble(saveRowData, string)
                            if (test) {

                                saveRowData.push(string);
                                checkbox.checked = true;
                                sendSubmitShizzle(rowItems[i].parentElement)
                                setClasses(rowItems, i);
                                let obj = {res: true, rowData: saveRowData}


                                return obj
                            }
                            // let parent = rowItems[i].parentElement;
                            // return string;
                        }
                    }
                    return false

                } else {
                    if (string !== "") {
                        string += " ";
                    }
                    string += rowItems[i].innerHTML;
                }

            }
        } catch (e) {
            alert("error")
            console.log(e)
        }

    }

    function setClasses(rowItems, j) {
        for (var i = j; i < rowItems.length; i++) {
            rowItems[i].parentElement.classList.add("redbg");
        }
    }

    function setBotData(botData) {
        if (botData.odd) {
            botData.max = 3;
            botData.min = 4;
            botData.odd = false;

        } else {
            botData.max = 0;
            botData.min = 1;
            botData.odd = true;
        }

        return botData;
    }

    function sendSubmitShizzle(parent) {
        try {
            let info = parent.id.split("_");

            const fl = "9a79db4948d9b69e52dfdd9864ee0a91";
            const ui = document.querySelector('input.hidden').value;
            const id = info[0];
            const word = info[1];
            const serie = true;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://51.255.87.34/~pagina/ajax/remove_words.php', true);

            //Send the proper header information along with the request
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = function() {//Call a function when the state changes.
                if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
                    // Request finished. Do processing here.
                }
            }
            xhr.send('fl=' + fl + '&ui=' + ui + "&id=" + id + "&word=" + word + "&serie=" + serie);

        } catch (e) {
            alert("error")
            console.log(e)
        }
    }

    function notDouble(saveRowData, string) {

        if (saveRowData.length == 0) {
            return true
        }

        for (var i = 0; i < saveRowData.length; i++) {
            let item1 = string
            let item2 = saveRowData[i];
            let result = testStringDifferences_Module.p_all(item1, item2, 3, 20)
            if(result) {
                return false
            }
        }
        return true;
    }

} catch (e) {
    alert("tonybay broke");
    console.log(e);
}
