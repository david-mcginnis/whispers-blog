
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Utvalda:                                                                                                                                                                                                           Blå himmel                              :               Måndag,sen eftermiddag. Kall men underbar dag vid havet. Klar himmel hela dagen. Nu går solen ned och molnen börjar lägga sig som ett täcke över Brantevik. . . . :                                                                                                                                                                       Viskaren                                18 Nov 2024                                                                                                                                                                                                                                                                                                                  Recept på äppelkaka                              :               Ingredienser Sätt ugnen på 175 grader 3 ägg och 2 dl socker vispas fluffigt 3dl vetemjöl 1tsk bakpulver 1,5tsk vaniljpulver smält 150g smör och tillsätt. . . :                                                                                                                                                                       Viskaren                                16 Nov 2024                                                                                                                                                                                                                                                                                                                  Min första post                              :               Det är svårt att lära sig comands:                                                                                                                                                                       Viskaren                                15 Nov 2024                                                                                                                                                                                                                                                                                                                  Happy halloween                              :               Fredagmorgon:                                                                                                                                                                       Viskaren                                15 Nov 2024                                                                                                                      Alla berättelser:                                                                                                     Blå himmel              :       Måndag,sen eftermiddag. Kall men underbar dag vid havet. Klar himmel hela dagen. Nu går solen ned och molnen börjar lägga sig som ett täcke över Brantevik. :                                                                               Viskaren                18 Nov 2024                                                                                                                                     Happy halloween              :       Fredagmorgon:                                                                               Viskaren                15 Nov 2024                                            "
    }, {
    "id": 4,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/bl%C3%A5himmel/",
    "title": "Blå himmel",
    "body": "2024/11/18 - Måndag,sen eftermiddag. Kall men underbar dag vid havet. Klar himmel hela dagen. Nu går solen ned och molnen börjar lägga sig som ett täcke över Brantevik. "
    }, {
    "id": 6,
    "url": "/appelkaka-recept/",
    "title": "Recept på äppelkaka",
    "body": "2024/11/16 - Ingredienser:  Sätt ugnen på 175 grader 3 ägg och 2 dl socker vispas fluffigt 3dl vetemjöl 1tsk bakpulver 1,5tsk vaniljpulver smält 150g smör och tillsätt 0,5dl mjöl eller filmjölk vispa lätt ihop alla igrediensernaGör så här:  Förberedelse av äpplena     5st syrliga äpplen skalas och skivas i klyftor, som sjudas några minuter.    sila vattnet från äpplena och låt dem kallna   stö därefter kanel på äpplena    Förberedelse av kakformen     smörj kakformen med smör eller klä den med blött bakplåtspapper   häll smeten i formen och toppa den med äpplena   strö över med 0,5dl stösocker   "
    }, {
    "id": 7,
    "url": "/myfirstpost.md/",
    "title": "Min första post",
    "body": "2024/11/15 - Det är svårt att lära sig comands "
    }, {
    "id": 8,
    "url": "/happyhallo/",
    "title": "Happy halloween",
    "body": "2024/11/15 - Fredagmorgon "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});