/**
 * @fileoverview Removed Nextcloud APIs
 * @author Christoph Wurst
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-removed-apis"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-removed-apis", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "OC.Util.isIE8()",
            errors: [{
                message: "The property or function OC.Util.isIE8 was removed in Nextcloud 15.0.0",
                type: "MemberExpression"
            }]
        }
    ]
});
