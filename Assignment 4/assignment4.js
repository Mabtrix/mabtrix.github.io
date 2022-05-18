// NOTE: Part A
const peterMkg = 92;
const peterHmeter = 1.95;
const lucasMkg = 78;
const lucasHmeter = 1.69;

const peterbmi = peterMkg/(peterHmeter*peterHmeter)
const lucasbmi = lucasMkg/(lucasHmeter*lucasHmeter)

console.log("Part A");
console.log("The BMI of Peter is " + pbmi + " The BMI of Lucas is " + lbmi + " Lucas' BMI is higher than Petter’s BMI that is " + (lbmi>pbmi) + "!!" );

// NOTE: Part B
const celsius = Number(prompt('Please enter the celsius:'))
const fahrenheit = Number(prompt('Please enter the fahrenheit:'))

const fahtocel = (fahrenheit - 32) * 5/9
const celtofah = 1.8*celsius + 32

console.log("Part B");
console.log(celsius+"°C is "+celtofah+"°F");
console.log(fahrenheit+"°F is "+fahtocel+"°C");

// NOTE: Part C
console.log("Part C");
if (peterbmi>lucasbmi) {
  console.log("Peter’s BMI (" + peterbmi + ") is higher than Lucas' (" + lucasbmi + ")!");
}
else {
  console.log("Lucas' BMI (" + lucasbmi + ") is higher than Peter’s (" + peterbmi + ")!");
}

// NOTE: Part D
console.log("Part D");
function CovertCelsiusToFahrenheit(c) {
  const cel = 1.8*c + 32
  return c+"°C is "+cel+"°F"
}
function CovertFahrenheitToCelsius(f) {
  const fah = (f - 32) * 5/9
  return f+"°F is "+fah+"°C"
}
console.log(CovertCelsiusToFahrenheit(100),CovertCelsiusToFahrenheit(0),CovertCelsiusToFahrenheit(10));
console.log(CovertFahrenheitToCelsius(32),CovertFahrenheitToCelsius(10),CovertFahrenheitToCelsius(102));
