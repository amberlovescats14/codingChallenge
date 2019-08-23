const func2A = str => {
  let final = []
  let split = str.split('')
  let reduce = split.reduce((obj, item)=> {
    if(!obj[item]) obj[item] = 0
    obj[item]++
    return obj
  }, {})
  let arr = Object.entries(reduce)
  arr.forEach((item, i)=> {
    if(item[1] === 1) final.push(item[0])
    else final.push(`${item[0]}*${item[1]}`)
  })
  final = final.join()
  return final.replace(/,/g, '')
}
// console.log(func2A('zaabbccc'))

//! AMATEUR
//*GOT IT
const func1 = str => {
  let replace = str.replace(' ', '')
  let split = replace.split('')
  let lower = []
  let upper = []
  split.forEach(l => {
    if(l === l.toLowerCase()) lower.push(l)
    if(l === l.toUpperCase()) upper.push(l)
  })
  if(lower.length === split.length ||
    upper.length === split.length) return true
  else return false
}
// console.log(func1('have FUN'))

//*GOT IT
const func2 = arr => {
  let final = []
  let count = 0
  arr.forEach((n, i )=> {
    count += Number(n)

    if(i === 0) final.push(n)
    else {
      final.push(count)
    }
  })
  return final
}
// console.log(func2([1,4, 0, 7, 3]))
//* GOT IT
const func3 = str => {
  let final = true
  let split = str.split('')
  let reduce = split.reduce((obj, item)=> {
    if(!obj[item]) obj[item] = 0
    obj[item]++
    return obj
  },{})
  let values = Object.values(reduce)
  values.forEach(n => {
    if(n > 1) final = false
  })
  return final
}
// console.log(func3('orange'))

const func4 = str => {
  let res 
  let final = []
  let alpha = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let keypad = [
    [0],
     ['a','b','c'],
     ['d','e','f'],
     ['g','h','i'],
     ['j','k','l'],
     ['m','n','o'],
     ['p','q','r','s'],
     ['t','u','v'],
     ['w','x','y', 'z']
    ]
  let splitString = str.toLowerCase().split('')
  splitString.forEach((l,i)=> {
    keypad.forEach((k, j)=> {
      if(k.includes(l)) final.push(j)
    })
  })
  let first = [final[0], final[1],final[2],'-', final[3],final[4],final[5], '-', final[5],final[6], final[7], final[8]]

  return first.join().replace(/,/g, '')
}
console.log(func4('TRY-THE-FOOD'))