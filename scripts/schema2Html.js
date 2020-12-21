var schema = {
    "$schema": "http://json-schema.org/schema#",
        "type": "object",
            "title": "The User Registration Schema",
                "description": "Sample Schema 1 for testing",
                    "default": { },
    "properties": {
        "UserName": {
            "type": "string",
                "maxLength": 20
        },
        "Email": {
            "type": "string",
                "format": "idn-email"
        },
        "Gender": {
            "type": "string",
                "enum": ["Male", "Female", "Others"]
        },
        "DateOfBirth": {
            "type": "string",
                "format": "date"
        },
        "Country": {
            "const": "India"
        },
        "MagicNos": {
            "type": "array",
                "contains": {
                "type": "number",
                    "minimum": 0,
                        "exclusiveMaximum": 10000
            }
        },
        "Document": {
            "type": "string",
                "contentMediaType": "text/html"
        }

    },
    "additionalProperties": false,
        "required": ["UserName", "Email", "Gender", "DateOfBirth",
            "Country", "MagicNos", "Document"]

}

var htmlSelect = {
    "type": "object",
    "title": "htmlClass demonstration",
    "properties": {
        "foo": {
            "type": "string"
        },
        "bar": {
            "type": "number"
        }
    }
}

var basic = {
    "schema": {
        "name": {
            "title": "Name",
            "description": "Nickname allowed",
            "type": "string"
        },
        "gender": {
            "title": "Gender",
            "description": "Your gender",
            "type": "string",
            "enum": [
                "male",
                "female",
                "alien"
            ]
        }
    }
}

// var basicForm = {
// < form id = "result-form" class="form-vertical" >
//     <div>
//         <div class="form-group jsonform-error-name">
//             <label for="jsonform-6-elt-name">Name</label>
//             <div class="controls"><input type="text" class="form-control" name="name" value="" id="jsonform-6-elt-name"><span class="help-block">Nickname allowed</span><span class="help-block jsonform-errortext" style="display:none;"></span></div>
//             </div>
//             <div class="form-group jsonform-error-gender">
//                 <label for="jsonform-6-elt-gender">Gender</label>
//                 <div class="controls">
//                     <select name="gender" id="jsonform-6-elt-gender" class="form-control">
//                         <option value="male">male</option>
//                         <option value="female">female</option>
//                         <option value="alien">alien</option>
//                     </select>
//                     <span class="help-block">Your gender</span><span class="help-block jsonform-errortext" style="display:none;"></span>
//                 </div>
//             </div>
//             <div class=""><input type="submit" class="btn btn-primary " value="Submit"></div>
//             </div>
// </form>
// }
    

    