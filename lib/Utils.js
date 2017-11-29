const Glossary = require('./Glossary')

function tagMatcher(actionTags) {
    return function (objectTag, index, objectTags) {
        return actionTags.indexOf(objectTag) > -1
    }
}

function normalizeTags(tags) {
    return tags.map((tag) => { return tag.toUpperCase() })
}

exports.tagMatch = function (actionTags, objectTags) {
    return normalizeTags(objectTags).some(tagMatcher(normalizeTags(actionTags)))
}

exports.parseTagAndSubject = function (object) {
    object = object.replace(/about/ig, '')
    object = object.split(" ")
    let tag = object.shift()
    return { tag: tag, subject: object.join(" ").trim() }
}

// TODO: consider additional methods of resolving subjects
// Currently, we  just look it up in the glossary
exports.getResponseForSubject = function (subject) {
    return Glossary[subject.toUpperCase()]
}