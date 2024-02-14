function calculateRectangle(){
   const rectangleWidth = document.getElementById('rectangleWidth');
   const rectangleWidthText = rectangleWidth.value;
   const rectangleWidthNum = parseFloat(rectangleWidthText);

   const rectangleHeight = document.getElementById('rectangleHeight');
   const rectangleHeightText = rectangleHeight.value;
   const rectangleHeightNum = parseFloat(rectangleHeightText);

   const rectangleResult = rectangleWidthNum * rectangleHeightNum;

   const getOutputOfRectangle = document.getElementById('getOutputOfRectangle');
   getOutputOfRectangle.innerText = rectangleResult;


}