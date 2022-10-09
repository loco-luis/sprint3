var vecCands = new Array(6);

vecCands[0] = 0;
vecCands[1] = 0;
vecCands[2] = 0;
vecCands[3] = 0;
vecCands[4] = 0;
vecCands[5] = 0;

function votar(numCandidato) {
    vecCands[numCandidato] = vecCands[numCandidato] + 1;
    alert("Gracias, su voto es Importante!!!");
}
function estadistica(){
    alert("Candidato 1: "+vecCands[0]+"Candidato 2: "+vecCands[1]+"Candidato 3: "+vecCands[2]+"Candidato 4: "+vecCands[3]+"Candidato 5: "+vecCands[4]+"Candidato 6: "+vecCands[5]);
}