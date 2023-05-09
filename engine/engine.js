const markdownItMark = require('markdown-it-mark')
const markdownItSub = require('markdown-it-sub')
const markdownItSup = require('markdown-it-sup')
const markdownItUnderline = require('markdown-it-underline')
const markdownItTaskLists = require('markdown-it-task-lists')
const markdownItMultimdTable = require('markdown-it-multimd-table')
const markdownItVideo = require('markdown-it-html5-embed')

module.exports = ({ marp }) => marp
  .use(markdownItMark)
  .use(markdownItSub)
  .use(markdownItSup)
  .use(markdownItUnderline)
  .use(markdownItTaskLists)
  .use(markdownItMultimdTable)
  .use(markdownItVideo, { html5embed: { useImageSyntax: true, attributes: {
    audio: 'controls preload="metadata"',
    video: 'controls preload="metadata" autoplay muted loop'
  } } })
