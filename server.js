const newFolderName = function (folders) {
  let i = 2
  let result = ''

  if (folders.includes('New Folder')) {
    while (i <= (folders.length + 1)) {
      if (folders.includes('New Folder (" + i + ")')) {
        i++
      } else {
        result = 'New Folder (" + i + ")'
        break
      }
    }
  } else {
    result = 'New Folder'
  }

  return result
}

console.log(newFolderName(['']))

console.log(newFolderName(['New Folder', 'New Folder (2)']))

module.exports = { newFolderName }
