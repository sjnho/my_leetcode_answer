var minimumLengthEncoding = function (words) {
  let ret = []
  for (let i = 0; i < words.length; i++) {
    let word = words[i]
    let add = true
    for (let j = 0; j < ret.length; j++) {
      let s = ret[j]
      if (s.length > word.length) {
        if (s.substring(s.length - word.length, s.length) === word) {
          add = false
          break
        }
      } else {
        if (word.substring(word.length - s.length, word.length) === s) {
          add = false
          ret[j] = word
          break
        }
      }
    }
    if (add) {
      ret.push(word)
    }
  }
  return (ret.join("#") + "#").length
};
console.log(minimumLengthEncoding(["time", "me", "bell"]))
console.log(minimumLengthEncoding(["me", "time"]))
