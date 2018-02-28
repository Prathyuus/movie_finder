/**
 * 
 */
var data1;
function addToFavourites(input){
	alert();
    var title= input.getAttribute('title');
    var url= input.getAttribute('url');
    var urlToImage= input.getAttribute('urlToImage');
    var description= input.getAttribute('description');
    console.log(title+url+urlToImage+description);
    
    var xmlhttp=new XMLHttpRequest();
    
    xmlhttp.onreadystatechange = function(){
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
            //document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
        }
    };
    
    var url1 ="http://localhost:8082/Moviehub/movie?title="+title+"&url="+url+"&urlToImage="+urlToImage+"&description="+description;
    xmlhttp.open('GET',url1,true);
    xmlhttp.send();
    
}

	function getData(){
var APIKEY = "1f39dea1e4239caa8c1ae2c4975e9926";
var baseURL="https://api.themoviedb.org/3/";
var movie = document.getElementById('name').value;
let url=''.concat('https://api.themoviedb.org/3/','search/movie?api_key=','1f39dea1e4239caa8c1ae2c4975e9926','&query=',movie);
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
    	//document.getElementById('output').innerHTML=JSON.stringify(data);
        document.getElementById('output').innerHTML=renderSearch(data);
    })
}
let renderSearch=function(data){
	 var htmlText = '';
     for ( var i=0;i<data.results.length;i++ ) {
    
    	/* console.log(data.results[i].title);
    	 htmlText += '<div class="div-conatiner">';
         htmlText += '<div class="col_sm_4">';
         htmlText += '<p class="p-name"> Name: ' + data.results[i].title + '</p>';
         htmlText += '<p class="p-loc">Poster: ' + data.results[i].poster_path + '</p>';
         htmlText += '<p class="p-desc"> Description: ' + data.results[i].overview + '</p>';
         htmlText += '<p class="p-created"> Released on: ' + data.results[i].release_date + '</p>';
         htmlText += '</div>';
         htmlText += '<img src=\"https://image.tmdb.org/t/p/w300_and_h450_bestv2/'+data.results[i].poster_path+'\</img>';
         htmlText += '<a href="link.jsp">';
         htmlText += '<input type="button" value="Visit Page" />';
         htmlText += '</a>';
         //htmlText += '<a href="trial.html">';
         //htmlText += '<input type="button" value="Add to Favourites list" />';
         //htmlText += '</a>';
         data1=data.results[i].title;
         htmlText += '<button onClick=setData(data1) >Add to favourites</button>';
         htmlText += '<script type="text/javascript" src="function.js"></script>';
         htmlText += '<hr>';*/
    	 var htmlText = "<img src=\"https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+data.results[i].poster_path+"\"<br><br>Title = "
			+ data.results[i].title + "<br> Ratings ="
			+ data.results[i].vote_average
			+ "<br> Release Date ="
			+ data.results[i].release_date + "<br> Overviews ="
			+ data.results[i].overview
			+ "<br><br><br></div></div></div>"+
    	  "<input type='submit' value='Add to Favourites' onclick=\"addToFavourites(this)\" " +
          "title=\""+data.results[i].title+"\" " +
          "url=\"" +data.results[i].overview+"\" " +
          "urlToImage=\"" +data.results[i].release_date+"\"" +
          "description=\"" +data.results[i].vote_average+"\"></div><hr>";
	document.getElementById('output').insertAdjacentHTML('afterend', htmlText);
     }//document.getElementById('output').innerHTML=html_code;
//document.getElementById('output').insertAdjacentHTML('afterend',htmlText);
} 

/*function setData(data1){
	alert(data1);
	var movie = data1;
	let url=''.concat('http://localhost:8082/Moviehub/movie','&query=',movie);
    fetch(url)
    .then(result=>result.json())
    .then((data)=>{
    	//document.getElementById('output').innerHTML=JSON.stringify(data);
        //document.getElementById('output').innerHTML=JSON.stringify(data);
        console.log(JSON.stringify(data));
    })
	
	console.log(data1);
}*/
/*function setData(data1)
{
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
	if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
		document.getElementById("output").innerHTML = xmlhttp.responseText;
	}
};

var params = "data="+data1;
xmlhttp.open('GET',"http://localhost:8082/Moviehub/movie?"+params, true);
xmlhttp.send();
}*/
