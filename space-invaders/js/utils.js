var loadJSON = function (path, success, error)
{
    var oReq = new XMLHttpRequest();
    oReq.onload = function reqListener () {
      jsonData = JSON.parse(this.responseText);
      console.log("Loading JSON data", jsonData);
      success(jsonData);
    };;
    oReq.open("get", path, true);
    oReq.send();
}
