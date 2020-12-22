var webRequest = [
    {
        "namespace": "webRequest",
        "description": "Use the <code>chrome.webRequest</code> API to observe and analyze traffic and to intercept, block, or modify requests in-flight.",
        "properties": {
            "MAX_HANDLER_BEHAVIOR_CHANGED_CALLS_PER_10_MINUTES": {
                "value": 20,
                "description": "The maximum number of times that <code>handlerBehaviorChanged</code> can be called per 10 minute sustained interval. <code>handlerBehaviorChanged</code> is an expensive function call that shouldn't be called often."
            }
        },
        "types": [
            {
                "id": "ResourceType",
                "type": "string",
                "enum": ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "csp_report", "media", "websocket", "other"]
            },
            {
                "id": "OnBeforeRequestOptions",
                "type": "string",
                "enum": ["blocking", "requestBody", "extraHeaders"]
            },
            {
                "id": "OnBeforeSendHeadersOptions",
                "type": "string",
                "enum": ["requestHeaders", "blocking", "extraHeaders"]
            },
            {
                "id": "OnSendHeadersOptions",
                "type": "string",
                "enum": ["requestHeaders", "extraHeaders"]
            },
            {
                "id": "OnHeadersReceivedOptions",
                "type": "string",
                "enum": ["blocking", "responseHeaders", "extraHeaders"]
            },
            {
                "id": "OnAuthRequiredOptions",
                "type": "string",
                "enum": ["responseHeaders", "blocking", "asyncBlocking", "extraHeaders"]
            },
            {
                "id": "OnResponseStartedOptions",
                "type": "string",
                "enum": ["responseHeaders", "extraHeaders"]
            },
            {
                "id": "OnBeforeRedirectOptions",
                "type": "string",
                "enum": ["responseHeaders", "extraHeaders"]
            },
            {
                "id": "OnCompletedOptions",
                "type": "string",
                "enum": ["responseHeaders", "extraHeaders"]
            },
            {
                "id": "OnErrorOccurredOptions",
                "type": "string",
                "enum": ["extraHeaders"]
            },
            {
                "id": "RequestFilter",
                "type": "object",
                "description": "An object describing filters to apply to webRequest events.",
                "properties": {
                    "urls": {
                        "type": "array",
                        "description": "A list of URLs or URL patterns. Requests that cannot match any of the URLs will be filtered out.",
                        "items": { "type": "string" }
                    },
                    "types": {
                        "type": "array",
                        "optional": true,
                        "description": "A list of request types. Requests that cannot match any of the types will be filtered out.",
                        "items": { "$ref": "ResourceType" }
                    },
                    "tabId": { "type": "integer", "optional": true },
                    "windowId": { "type": "integer", "optional": true }
                }
            },
            {
                "id": "HttpHeaders",
                "nocompile": true,
                "type": "array",
                "description": "An array of HTTP headers. Each header is represented as a dictionary containing the keys <code>name</code> and either <code>value</code> or <code>binaryValue</code>.",
                "items": {
                    "type": "object",
                    "properties": {
                        "name": { "type": "string", "description": "Name of the HTTP header." },
                        "value": { "type": "string", "optional": true, "description": "Value of the HTTP header if it can be represented by UTF-8." },
                        "binaryValue": {
                            "type": "array",
                            "optional": true,
                            "description": "Value of the HTTP header if it cannot be represented by UTF-8, stored as individual byte values (0..255).",
                            "items": { "type": "integer" }
                        }
                    }
                }
            },
            {
                "id": "BlockingResponse",
                "nocompile": true,
                "type": "object",
                "description": "Returns value for event handlers that have the 'blocking' extraInfoSpec applied. Allows the event handler to modify network requests.",
                "properties": {
                    "cancel": {
                        "type": "boolean",
                        "optional": true,
                        "description": "If true, the request is cancelled. This prevents the request from being sent. This can be used as a response to the onBeforeRequest, onBeforeSendHeaders, onHeadersReceived and onAuthRequired events."
                    },
                    "redirectUrl": {
                        "type": "string",
                        "optional": true,
                        "description": "Only used as a response to the onBeforeRequest and onHeadersReceived events. If set, the original request is prevented from being sent/completed and is instead redirected to the given URL. Redirections to non-HTTP schemes such as <code>data:</code> are allowed. Redirects initiated by a redirect action use the original request method for the redirect, with one exception: If the redirect is initiated at the onHeadersReceived stage, then the redirect will be issued using the GET method. Redirects from URLs with <code>ws://</code> and <code>wss://</code> schemes are <b>ignored</b>."
                    },
                    "requestHeaders": {
                        "$ref": "HttpHeaders",
                        "optional": true,
                        "description": "Only used as a response to the onBeforeSendHeaders event. If set, the request is made with these request headers instead."
                    },
                    "responseHeaders": {
                        "$ref": "HttpHeaders",
                        "optional": true,
                        "description": "Only used as a response to the onHeadersReceived event. If set, the server is assumed to have responded with these response headers instead. Only return <code>responseHeaders</code> if you really want to modify the headers in order to limit the number of conflicts (only one extension may modify <code>responseHeaders</code> for each request)."
                    },
                    "authCredentials": {
                        "type": "object",
                        "description": "Only used as a response to the onAuthRequired event. If set, the request is made using the supplied credentials.",
                        "optional": true,
                        "properties": {
                            "username": { "type": "string" },
                            "password": { "type": "string" }
                        }
                    }
                }
            },
            {
                "id": "UploadData",
                "type": "object",
                "properties": {
                    "bytes": {
                        "type": "any",
                        "optional": true,
                        "description": "An ArrayBuffer with a copy of the data."
                    },
                    "file": {
                        "type": "string",
                        "optional": true,
                        "description": "A string with the file's path and name."
                    }
                },
                "description": "Contains data uploaded in a URL request."
            },
            {
                "id": "FormDataItem",
                "choices": [
                    { "type": "binary" },
                    { "type": "string" }
                ],
                "description": "Contains data passed within form data. For urlencoded form it is stored as string if data is utf-8 string and as ArrayBuffer otherwise. For form-data it is ArrayBuffer. If form-data represents uploading file, it is string with filename, if the filename is provided."
            },
            {
                "id": "IgnoredActionType",
                "decription": "Denotes the extension proposed action which was ignored.",
                "type": "string",
                "enum": ["redirect", "request_headers", "response_headers", "auth_credentials"]
            }
        ],
        "functions": [
            {
                "name": "handlerBehaviorChanged",
                "type": "function",
                "description": "Needs to be called when the behavior of the webRequest handlers has changed to prevent incorrect handling due to caching. This function call is expensive. Don't call it often.",
                "parameters": [
                    { "type": "function", "name": "callback", "optional": true, "parameters": [] }
                ]
            }
        ],
        "events": [
            {
                "name": "onBeforeRequest",
                "type": "function",
                "description": "Fired when a request is about to occur.",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "requestBody": {
                                "type": "object",
                                "optional": true,
                                "description": "Contains the HTTP request body data. Only provided if extraInfoSpec contains 'requestBody'.",
                                "properties": {
                                    "error": { "type": "string", "optional": true, "description": "Errors when obtaining request body data." },
                                    "formData": {
                                        "type": "object",
                                        "optional": true,
                                        "description": "If the request method is POST and the body is a sequence of key-value pairs encoded in UTF8, encoded as either multipart/form-data, or application/x-www-form-urlencoded, this dictionary is present and for each key contains the list of all values for that key. If the data is of another media type, or if it is malformed, the dictionary is not present. An example value of this dictionary is {'key': ['value1', 'value2']}.",
                                        "properties": {},
                                        "additionalProperties": {
                                            "type": "array",
                                            "items": { "$ref": "FormDataItem" }
                                        }
                                    },
                                    "raw": {
                                        "type": "array",
                                        "optional": true,
                                        "items": { "$ref": "UploadData" },
                                        "description": "If the request method is PUT or POST, and the body is not already parsed in formData, then the unparsed request body elements are contained in this array."
                                    }
                                }
                            },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." }
                        }
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnBeforeRequestOptions"
                        }
                    }
                ],
                "returns": {
                    "$ref": "BlockingResponse",
                    "description": "If \"blocking\" is specified in the \"extraInfoSpec\" parameter, the event listener should return an object of this type.",
                    "optional": true
                }
            },
            {
                "name": "onBeforeSendHeaders",
                "nocompile": true,
                "type": "function",
                "description": "Fired before sending an HTTP request, once the request headers are available. This may occur after a TCP connection is made to the server, but before any HTTP data is sent. ",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." },
                            "requestHeaders": { "$ref": "HttpHeaders", "optional": true, "description": "The HTTP request headers that are going to be sent out with this request." }
                        }
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnBeforeSendHeadersOptions"
                        }
                    }
                ],
                "returns": {
                    "$ref": "BlockingResponse",
                    "description": "If \"blocking\" is specified in the \"extraInfoSpec\" parameter, the event listener should return an object of this type.",
                    "optional": true
                }
            },
            {
                "name": "onSendHeaders",
                "nocompile": true,
                "type": "function",
                "description": "Fired just before a request is going to be sent to the server (modifications of previous onBeforeSendHeaders callbacks are visible by the time onSendHeaders is fired).",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." },
                            "requestHeaders": { "$ref": "HttpHeaders", "optional": true, "description": "The HTTP request headers that have been sent out with this request." }
                        }
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnSendHeadersOptions"
                        }
                    }
                ]
            },
            {
                "name": "onHeadersReceived",
                "nocompile": true,
                "type": "function",
                "description": "Fired when HTTP response headers of a request have been received.",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." },
                            "statusLine": { "type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line)." },
                            "responseHeaders": { "$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that have been received with this response." },
                            "statusCode": { "type": "integer", "description": "Standard HTTP status code returned by the server." }
                        }
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnHeadersReceivedOptions"
                        }
                    }
                ],
                "returns": {
                    "$ref": "BlockingResponse",
                    "description": "If \"blocking\" is specified in the \"extraInfoSpec\" parameter, the event listener should return an object of this type.",
                    "optional": true
                }
            },
            {
                "name": "onAuthRequired",
                "nocompile": true,
                "type": "function",
                "description": "Fired when an authentication failure is received. The listener has three options: it can provide authentication credentials, it can cancel the request and display the error page, or it can take no action on the challenge. If bad user credentials are provided, this may be called multiple times for the same request. Note, only one of <code>'blocking'</code> or <code>'asyncBlocking'</code> modes must be specified in the <code>extraInfoSpec</code> parameter.",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." },
                            "scheme": { "type": "string", "description": "The authentication scheme, e.g. Basic or Digest." },
                            "realm": { "type": "string", "description": "The authentication realm provided by the server, if there is one.", "optional": true },
                            "challenger": { "type": "object", "description": "The server requesting authentication.", "properties": { "host": { "type": "string" }, "port": { "type": "integer" } } },
                            "isProxy": { "type": "boolean", "description": "True for Proxy-Authenticate, false for WWW-Authenticate." },
                            "responseHeaders": { "$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that were received along with this response." },
                            "statusLine": { "type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers." },
                            "statusCode": { "type": "integer", "description": "Standard HTTP status code returned by the server." }
                        }
                    },
                    {
                        "type": "function",
                        "optional": true,
                        "description": "Only valid if <code>'asyncBlocking'</code> is specified as one of the <code>OnAuthRequiredOptions</code>.",
                        "name": "asyncCallback",
                        "parameters": [
                            { "name": "response", "$ref": "BlockingResponse" }
                        ]
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnAuthRequiredOptions"
                        }
                    }
                ],
                "returns": {
                    "$ref": "BlockingResponse",
                    "description": "If \"blocking\" is specified in the \"extraInfoSpec\" parameter, the event listener should return an object of this type.",
                    "optional": true
                }
            },
            {
                "name": "onResponseStarted",
                "nocompile": true,
                "type": "function",
                "description": "Fired when the first byte of the response body is received. For HTTP requests, this means that the status line and response headers are available.",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." },
                            "ip": { "type": "string", "optional": true, "description": "The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address." },
                            "fromCache": { "type": "boolean", "description": "Indicates if this response was fetched from disk cache." },
                            "statusCode": { "type": "integer", "description": "Standard HTTP status code returned by the server." },
                            "responseHeaders": { "$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that were received along with this response." },
                            "statusLine": { "type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers." }
                        }
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnResponseStartedOptions"
                        }
                    }
                ]
            },
            {
                "name": "onBeforeRedirect",
                "type": "function",
                "nocompile": true,
                "description": "Fired when a server-initiated redirect is about to occur.",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." },
                            "ip": { "type": "string", "optional": true, "description": "The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address." },
                            "fromCache": { "type": "boolean", "description": "Indicates if this response was fetched from disk cache." },
                            "statusCode": { "type": "integer", "description": "Standard HTTP status code returned by the server." },
                            "redirectUrl": { "type": "string", "description": "The new URL." },
                            "responseHeaders": { "$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that were received along with this redirect." },
                            "statusLine": { "type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers." }
                        }
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnBeforeRedirectOptions"
                        }
                    }
                ]
            },
            {
                "name": "onCompleted",
                "type": "function",
                "nocompile": true,
                "description": "Fired when a request is completed.",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." },
                            "ip": { "type": "string", "optional": true, "description": "The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address." },
                            "fromCache": { "type": "boolean", "description": "Indicates if this response was fetched from disk cache." },
                            "statusCode": { "type": "integer", "description": "Standard HTTP status code returned by the server." },
                            "responseHeaders": { "$ref": "HttpHeaders", "optional": true, "description": "The HTTP response headers that were received along with this response." },
                            "statusLine": { "type": "string", "description": "HTTP status line of the response or the 'HTTP/0.9 200 OK' string for HTTP/0.9 responses (i.e., responses that lack a status line) or an empty string if there are no headers." }
                        }
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnCompletedOptions"
                        }
                    }
                ]
            },
            {
                "name": "onErrorOccurred",
                "type": "function",
                "description": "Fired when an error occurs.",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "url": { "type": "string" },
                            "method": { "type": "string", "description": "Standard HTTP method." },
                            "frameId": { "type": "integer", "description": "The value 0 indicates that the request happens in the main frame; a positive value indicates the ID of a subframe in which the request happens. If the document of a (sub-)frame is loaded (<code>type</code> is <code>main_frame</code> or <code>sub_frame</code>), <code>frameId</code> indicates the ID of this frame, not the ID of the outer frame. Frame IDs are unique within a tab." },
                            "parentFrameId": { "type": "integer", "description": "ID of frame that wraps the frame which sent the request. Set to -1 if no parent frame exists." },
                            "tabId": { "type": "integer", "description": "The ID of the tab in which the request takes place. Set to -1 if the request isn't related to a tab." },
                            "type": { "$ref": "ResourceType", "description": "How the requested resource will be used." },
                            "initiator": { "type": "string", "optional": true, "description": "The origin where the request was initiated. This does not change through redirects. If this is an opaque origin, the string 'null' will be used." },
                            "timeStamp": { "type": "number", "description": "The time when this signal is triggered, in milliseconds since the epoch." },
                            "ip": { "type": "string", "optional": true, "description": "The server IP address that the request was actually sent to. Note that it may be a literal IPv6 address." },
                            "fromCache": { "type": "boolean", "description": "Indicates if this response was fetched from disk cache." },
                            "error": { "type": "string", "description": "The error description. This string is <em>not</em> guaranteed to remain backwards compatible between releases. You must not parse and act based upon its content." }
                        }
                    }
                ],
                "extraParameters": [
                    {
                        "$ref": "RequestFilter",
                        "name": "filter",
                        "description": "A set of filters that restricts the events that will be sent to this listener."
                    },
                    {
                        "type": "array",
                        "optional": true,
                        "name": "extraInfoSpec",
                        "description": "Array of extra information that should be passed to the listener function.",
                        "items": {
                            "$ref": "OnErrorOccurredOptions"
                        }
                    }
                ]
            },
            {
                "name": "onActionIgnored",
                "type": "function",
                "description": "Fired when an extension's proposed modification to a network request is ignored. This happens in case of conflicts with other extensions.",
                "parameters": [
                    {
                        "type": "object",
                        "name": "details",
                        "properties": {
                            "requestId": { "type": "string", "description": "The ID of the request. Request IDs are unique within a browser session. As a result, they could be used to relate different events of the same request." },
                            "action": { "$ref": "IgnoredActionType", "description": "The proposed action which was ignored." }
                        }
                    }
                ]
            }
        ]
    }
]