function getEllipse(){
   const ellipseA = document.getElementById('ellipseA');
   const ellipseAText = ellipseA.value;
   const ellipseANum = parseFloat(ellipseAText);

   const ellipseB =  document.getElementById('ellipseB');
   const  ellipseBText = ellipseB.value;
   const ellipseBNum = parseFloat(ellipseBText);

   const ellipseResult = 3.1416 * ellipseANum * ellipseBNum;
   const ellipseResultRound = Math.round(ellipseResult)
   console.log(ellipseResultRound);

   const getOutputOfEllipse = document.getElementById('getOutputOfEllipse');
   getOutputOfEllipse.innerText = ellipseResultRound;
}