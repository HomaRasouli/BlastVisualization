
function GetTheHSPS(){
     var qyery2= qury;
     var xhr = require("xhr");
     var parser = require("biojs-io-blast");
     var el = document.getElementById("hello");
     xhr("http://proxy.biojs.net/https://raw.githubusercontent.com/greenify/biojs-io-blast/master/test/dummy/single.xml", function(err,request, body){
     var result =parser.parse(body);
     console.log(result);
     var hits = result.iterations[0].hits;
     var hsps = hits[1].hsps;
	 var base = svg.base({width: 500, height: 1500});
       el.appendChild(base);
	   //.style.margin = "200px 50px 200px 400px";
       for(var i=0; i < hsps.length; i++ ){
       var child = svg.rect({width: 800, height: 8,y : i  * 20 , style : "fill:red"});
	   //style : "fill:red"
       base.appendChild(child);
       }
    });
}

function queryOutput(){
     var xhr = require("xhr");
     var parser2 = require("biojs-io-blast");
     var el2= document.getElementById("hello");
     xhr("http://proxy.biojs.net/https://raw.githubusercontent.com/greenify/biojs-io-blast/master/test/dummy/single.xml", function(err,request, body){
     var data =parser2.parse(body);
     console.log(data);
	 var queryout=data.iterations[0]["query-def"];
	 document.write(queryout);
	 });}
function InputQuery() {
  var querydb = document.getElementById('QueryDB');
  var query = querydb.value;
  var hits = hitssample.value;
  return [query];
}
function main() {
  document.getElementById('QueryDB').value = "Query_1"
  //document.getElementById('hitssample').value = "gnl|BL_ORD_ID|140988";
  var input = InputQuery();
  var mybutn = document.getElementById('submit');
  mybutn.onclick function(){ 
  	var input = InputQuery();
  	GetTheHSPS();
  }
