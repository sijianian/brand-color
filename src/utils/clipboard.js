let textarea = null
const getTextarea = () => {
  if (!textarea) {
    textarea = document.createElement('textarea')
    let id =
      'textarea-' +
      Math.random()
        .toString()
        .replace('.', '')
    textarea.id = id
    textarea.style.width = 0
    textarea.style.height = 0
    textarea.style.overflow = 'hidden'
    textarea.style.opacity = 0
    textarea.style.position = 'absolute'
    textarea.style.left = 0
    textarea.style.top = 0

    document.body.appendChild(textarea)
  }
  return textarea
}

export default {
  copy(text) {
    let el = getTextarea()
    el.value = text
    el.select()
    return document.execCommand('copy')
  },
}
