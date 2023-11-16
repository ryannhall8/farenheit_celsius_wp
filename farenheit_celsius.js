function convertToCelsius(farenheit){
    const celsius = (farenheit - 32) * 0.55;
return celsius;
}

const inputfarenheit = window.prompt ('what degree farenheit do you want to convert?');
console.log(inputfarenheit);
const convertedcelsius = convertToCelsius(inputfarenheit);
console.log(convertedcelsius);