function calculateTriangleArea() {
    // Get the base and height values inside the function
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleHeightInput = document.getElementById('triangle-height');

    const triangleBaseText = triangleBaseInput.value;
    const triangleHeightText = triangleHeightInput.value;

    // Parse the input values to numbers
    const triangleBase = parseFloat(triangleBaseText);
    const triangleHeight = parseFloat(triangleHeightText);


    // Calculate the area
    const area = triangleBase * triangleHeight * 0.5;
    console.log(area);

    // Display the result
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}


