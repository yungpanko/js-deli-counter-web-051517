let katzDeliLine = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let name = katzDeliLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let line = "The line is currently:"
    for (var i = 0; i < katzDeliLine.length; i++) {
      if (i === 0) {
        line = line + ` ${i + 1}. ${katzDeliLine[i]}`
      } else {
        line = line + `, ${i + 1}. ${katzDeliLine[i]}`
      }
    }
    return line;
  } else {
    return "The line is currently empty."
  }
}
