export const calculateIMC = (weight, height) => {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

export const notANumber = (value) => {
  return isNaN(value) || value == ""
}