function triangleCalculate(){
   const triangleBase = document.getElementById('triangleBase')
   const triangleBaseText = triangleBase.value;
   const triangleBaseNum = parseFloat(triangleBaseText);

   const triangleHeight = document.getElementById('triangleHeight');
   const triangleHeightText = triangleHeight.value;
   const triangleHeightNum = parseFloat(triangleHeightText);

   const triangleOutput = 0.5 * triangleBaseNum *  triangleHeightNum;

   const getOutput = document.getElementById('getOutputOfTriangle');
   getOutput.innerText = triangleOutput;

}