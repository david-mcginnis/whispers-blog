
var documents = [{
    "id": 0,
    "url": "/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "/about",
    "title": "Visparen",
    "body": ""
    }, {
    "id": 2,
    "url": "/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "/",
    "title": "Home",
    "body": "      Utvalda:                                                                                                                                                                                                           Kycklingcurry                              :               Detta är en lättlagad lunch som smakar gott och med få ingredienser. :                                                                                                                                                                       Viskaren                                06 Jan 2025                                                                                                                                                                                                                                                                                                                  Surf i Brantevik                              :               Starka vindar från söder är perfekt för surfing idag. :                                                                                                                                                                       Viskaren                                24 Nov 2024                                                                                                                                                                                                                                                                                                                              Recept på äppelkaka                              :               Ingredienser Sätt ugnen på 175 grader 3 ägg och 2 dl socker vispas fluffigt 3dl vetemjöl 1tsk bakpulver 1,5tsk vaniljpulver smält 150g smör och tillsätt. . . :                                                                                                                                                                       Viskaren                                16 Nov 2024                                                                                                                                  Alla berättelser:                                                                                                     Surf i Brantevik              :       Starka vindar från söder är perfekt för surfing idag. :                                                                               Viskaren                24 Nov 2024                                                                                            Förstasnön              :       ermiddagens snö täckte stengången till huset. — layout: post title: “Första snön” author: viskaren categories: [ bilder] tags: [natur] image: assets/images/förstasnön. jpg comments: false featured: true hidden: true #rating: 4. 5 —. . . :                               22 Nov 2024        &lt;/span&gt;                                                                                                                             Blå himmel              :       Måndag,sen eftermiddag. Kall men underbar dag vid havet. Klar himmel hela dagen. Nu går solen ned och molnen börjar lägga sig som ett täcke över Brantevik. :                                                                               Viskaren                18 Nov 2024                                                                                                                                     Happy halloween              :       Fredagmorgon:                                                                               Viskaren                15 Nov 2024                                            "
    }, {
    "id": 4,
    "url": "/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "/kycklingrecept/",
    "title": "Kycklingcurry",
    "body": "2025/01/06 - Detta är en lättlagad lunch som smakar gott och med få ingredienser. 4 st. Portioner Ingredienser:  800g kycklingfile 2-3 msk smör 1 gul lök 2-3 msk curry 5dl vispgrädde/matmagningsgrädde 2st. kycklingbuljong tärningar 1/2 dl chilisås salt och malen svartpeppar efter smakGör så här:  Dela fileerna i mindre bitar Finhacka löken Smält smöret i tjockbottnad kastrull och fräs löken mjuk och glansig på låg värme.  Tillsätt curryn och fräs tillsammans med löken en minut.  Lägg därefter i kycklingdelarna i kastrullen tillsammans med buljong tärningarna.  Steka allt tillsammans några minuter.  Häll i grädde, chilisås och låt allt koka upp till kycklingen är mjuk och går lätt att dela.  Smaka av ock salta och peppra efter smak.  Servera med kokt basmatiris och gröna ärtor.  Smaklig måltid :)"
    }, {
    "id": 6,
    "url": "/surf/",
    "title": "Surf i Brantevik",
    "body": "2024/11/24 - Starka vindar från söder är perfekt för surfing idag. "
    }, {
    "id": 7,
    "url": "/f%C3%B6rstasn%C3%B6n/",
    "title": "Förstasnön",
    "body": "2024/11/22 - ermiddagens snö täckte stengången till huset. —layout: posttitle: “Första snön”author: viskarencategories: [ bilder]tags: [natur]image: assets/images/förstasnön. jpgcomments: falsefeatured: truehidden: true#rating: 4. 5—De sista äpplena i trädgården. "
    }, {
    "id": 8,
    "url": "/bl%C3%A5himmel/",
    "title": "Blå himmel",
    "body": "2024/11/18 - Måndag,sen eftermiddag. Kall men underbar dag vid havet. Klar himmel hela dagen. Nu går solen ned och molnen börjar lägga sig som ett täcke över Brantevik. "
    }, {
    "id": 9,
    "url": "/appelkaka-recept/",
    "title": "Recept på äppelkaka",
    "body": "2024/11/16 - Ingredienser:  Sätt ugnen på 175 grader 3 ägg och 2 dl socker vispas fluffigt 3dl vetemjöl 1tsk bakpulver 1,5tsk vaniljpulver smält 150g smör och tillsätt 0,5dl mjöl eller filmjölk vispa lätt ihop alla igrediensernaGör så här:  Förberedelse av äpplena     5st syrliga äpplen skalas och skivas i klyftor, som sjudas några minuter.    sila vattnet från äpplena och låt dem kallna   stö därefter kanel på äpplena     Förberedelse av kakformen     smörj kakformen med smör eller klä den med blött bakplåtspapper   häll smeten i formen och toppa den med äpplena   strö över med 0,5dl stösocker    "
    }, {
    "id": 10,
    "url": "/myfirstpost/",
    "title": "Min första post",
    "body": "2024/11/15 - Det är svårt att lära sig comands "
    }, {
    "id": 11,
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