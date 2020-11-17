let ELEMENT_NODE = 1
let TEXT_NODE = 3
let COMMENT_NODE = 8
let DOCUMENT_NODE = 9
let PROCESSING_INSTRUCTION_NODE = 7
let CDATA_SECTION_NODE = 4 // deprecated
//From Index.js


function dom2json(dom) {
    let root = childNodes2Obj(dom.childNodes)
    // There should only be one node
    let rootNodeName = Object.keys(root).filter(nodeName => nodeName !== '$attrs')
    if (rootNodeName.length === 1) {
        let dom2jsonStructure = {
            $attrs: root.$attrs,
            document: {}
        }
        dom2jsonStructure.document[rootNodeName[0]] = root[rootNodeName[0]][0]
        return dom2jsonStructure
    } else {
        return {
            error: 'There are more than one root node'
        }
    }
}


// import getAttributes from './getAttributes'
// import getProcessingNodeAttributes from './getProcessingNodeAttributes'
// import * as NodeType from './NodeType'

//From childNodes2Obj.js

/**
 * Recursive function to change childNodes into object
 * @param  {[type]} childNodes [description]
 * @return {[type]}            [description]
 */
function childNodes2Obj(childNodes) {
    let ret = {}
    Array.apply(null, childNodes).forEach(node => {
        if (node.nodeType === NodeType.TEXT_NODE) {
            if (node.parentNode.childNodes.length === 1) {
                ret.$value = node.nodeValue
            }
        } else if (node.nodeType === NodeType.PROCESSING_INSTRUCTION_NODE) {
            if (typeof node.nodeValue !== 'undefined') {
                ret.$attrs = {}
                getProcessingNodeAttributes(node.nodeValue).forEach(regexValues => {
                    const [key, value] = regexValues
                    ret.$attrs[key] = value
                })
            }
        } else if (node.nodeType === NodeType.CDATA_SECTION_NODE) {
            if (typeof node.nodeValue !== 'undefined') {
                ret.$value = node.nodeValue
            }
        } else {
            ret[node.nodeName] = ret[node.nodeName] || []
            let temp = childNodes2Obj(node.childNodes)
            temp.$attrs = getAttributes(node)
            ret[node.nodeName].push(temp)
        }
    })
    return ret
}


// import * as NodeType from './NodeType'

//From get attributes.js


/**
 * Gets an object map of the attributes
 * @param  {[type]} node HTMLNode
 * @return {[type]}      [description]
 */
function getAttributes(node) {
    if (node.nodeType !== NodeType.ELEMENT_NODE) {
        throw new Error(`Requires ELEMENT_NODE, this is NodeType ${node.nodeType}`)
    }
    let attrsHash = {}
    const attrs = node.attributes
    for (let i = 0; i < attrs.length; i++) {
        attrsHash[attrs[i].name] = attrs[i].value
    }
    return attrsHash
}

//from getProcessingNodeAttributes.js
/**
 * Takes in: one="1" two="two" three="3.3"
 * Output: [["one", "1", "two", "two", "three", "3.3"]]
 *
 * @param  {[type]} processingInstructionNodeValue [description]
 * @return {[type]}                                [description]
 */
function (processingInstructionNodeValue) {
    return processingInstructionNodeValue.split(/\s+/)
        .map(keyValue => /(\w+)="([\w\d-.]+)"/.exec(keyValue))
        .filter(arrays => arrays)
        .map(regexValues => regexValues.splice(-2))
}
