export const deepClone = (array) => {
  return JSON.parse(JSON.stringify(array))
}

export const findObjectById = (id, array) => { 
  return array.find((element) => element.id === id);
}

export const findIndexById = (idWithUnknowwIndex, array) => {
  return array.findIndex((itemInArray) => itemInArray.id === idWithUnknowwIndex)
}

export const remove0bjectById= (idOfItemToRemove, array) => {
  return array.filter((item) => item.id !== idOfItemToRemove)
}

export const isEmpty = (array) => {
  return array.length === 0
}
