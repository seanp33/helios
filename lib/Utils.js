function tagMatcher(actionTags) {
    return function (objectTag, index, objectTags) {
        return actionTags.indexOf(objectTag) > -1
    }
}

function normalizeTags(tags){
    return tags.map((tag) => {return tag.toUpperCase()})
}

exports.tagMatch = function (actionTags, objectTags) {
    return normalizeTags(objectTags).some(tagMatcher(normalizeTags(actionTags)))
}

