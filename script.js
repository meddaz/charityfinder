
function keywordSearch() {
    var keywords = document.getElementById('keywords').value;
    var urlSearch = "https://api.globalgiving.org/api/public/services/search/projects?api_key=f9489d2a-c5c0-4b19-b089-54320fd8dfe7&q=" + keywords;

    $.getJSON(urlSearch, function (data) {
      //  console.log(data);
        var keywordOutput = data.search.response.projects.project;
 
for (var i = 0; i < keywordOutput.length; i++) {
  


 searchTerm.innerHTML = "<p>Results for: " + data.search.request.q + "</p";
results.innerHTML += "<div class='result'><h4>"+ keywordOutput[i].organization.name + "</h4><a href='" + keywordOutput[i].contactUrl + "'>Official Site</a><br>" + keywordOutput[i].activities + "<br>" +keywordOutput[i].country + "</div><br>";

}});
}