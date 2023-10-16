var http=require('http');
function processa(request, response){
    console.log("Incoming request: "+ request.method + " " + request.url);
    var corpo="Ciao mi hai chiamato!";
    var clength= corpo.length;
    var urllength= request.url.length;
    response.writeHead(200, {'Content_type': 'text/plain', 'Content_lenght': clength });
    function resp(){
        if (clength < urllength){
            response.end("errore del server" + "\n");
                    } 
        else{response.end(corpo);}
            };
    resp();
}
var s= http.createServer(processa);
s.listen(8383);