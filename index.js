module.exports = {
  "extends": "eslint:recommended",
  "env": {
    "es6": true
  },
  "rules": {
    // *************************************************************************
    // Possible Errors
    // These rules relate to possible syntax or logic errors in JavaScript code
    // *************************************************************************

    // Please note that most of the rules in this category are included as part
    // of the eslint:recommended set which this configuration extends.

    // disallow unnecessary parentheses
    "no-extra-parens": [
      "error"
    ],

    // Disallow use of Object.prototypes builtins directly
    "no-prototype-builtins": [
      "error"
    ],

    // disallow control flow statements in finally blocks
    "no-unsafe-finally": [
      "error"
    ],

    // enforce valid JSDoc comments
    "valid-jsdoc": [
      "error"
    ],

    // *************************************************************************
    // Best Practices
    // These rules relate to better ways of doing things to help you avoid
    // problems
    // *************************************************************************

    // enforce getter and setter pairs in objects
    "accessor-pairs": [
      "error"
    ],

    // enforce return statements in callbacks of array methods
    "array-callback-return": [
      "error"
    ],

    // enforce the use of variables within the scope they are defined
    "block-scoped-var": [
      "error"
    ],

    // enforce a maximum cyclomatic complexity allowed in a program
    "complexity": [
      "error"
    ],

    // require return statements to either always or never specify values
    "consistent-return": [
      "error"
    ],

    // enforce consistent brace style for all control statements
    "curly": [
      "error"
    ],

    // require default cases in switch statements
    "default-case": [
      "error"
    ],

    // enforce consistent newlines before and after dots
    "dot-location": [
      "error",
      "property"
    ],

    // enforce dot notation whenever possible
    "dot-notation": [
      "error"
    ],

    // require the use of === and !==
    "eqeqeq": [
      "error"
    ],

    // require for-in loops to include an if statement
    "guard-for-in": [
      "error"
    ],

    // disallow the use of alert, confirm, and prompt
    "no-alert": [
      "error"
    ],

    // disallow the use of arguments.caller or arguments.callee
    "no-caller": [
      "error"
    ],

    //disallow lexical declarations in case clauses
    "no-case-declarations": [
      "error"
    ],

    // disallow division operators explicitly at the beginning of regular expressions
    "no-div-regex": [
      "error"
    ],

    // disallow else blocks after return statements in if statements
    "no-else-return": [
      "error"
    ],

    // disallow empty functions
    "no-empty-function": [
      "error"
    ],

    // disallow null comparisons without type-checking operators
    "no-eq-null": [
      "error"
    ],

    // disallow the use of eval()
    "no-eval": [
      "error"
    ],

    // disallow extending native types
    "no-extend-native": [
      "error"
    ],

    // disallow unnecessary calls to .bind()
    "no-extra-bind": [
      "error"
    ],

    // disallow unnecessary labels
    "no-extra-label": [
      "error"
    ],

    // disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": [
      "error"
    ],

    // disallow shorthand type conversions
    "no-implicit-coercion": [
      "error"
    ],

    // disallow var and named function declarations in the global scope
    "no-implicit-globals": [
      "error"
    ],

    // disallow the use of eval()-like methods
    "no-implied-eval": [
      "error"
    ],

    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": [
      "error"
    ],

    // disallow the use of the __iterator__ property
    "no-iterator": [
      "error"
    ],

    // disallow labeled statements
    "no-labels": [
      "error"
    ],

    // disallow unnecessary nested blocks
    "no-lone-blocks": [
      "error"
    ],

    // disallow function declarations and expressions inside loop statements
    "no-loop-func": [
      "error"
    ],

    // disallow magic numbers
    "no-magic-numbers": [
      "off"
    ],

    // disallow multiline strings
    "no-multi-str": [
      "error"
    ],

    // disallow reassigning native objects
    "no-native-reassign": [
      "error"
    ],

    // disallow new operators outside of assignments or comparisons
    "no-new": [
      "error"
    ],

    // disallow new operators with the Function object
    "no-new-func": [
      "error"
    ],

    // disallow new operators with the String, Number, and Boolean objects
    "no-new-wrappers": [
      "error"
    ],

    // disallow octal escape sequences in string literals
    "no-octal-escape": [
      "error"
    ],

    // disallow reassigning function parameters
    "no-param-reassign": [
      "error"
    ],

    // disallow the use of the __proto__ property
    "no-proto": [
      "error"
    ],

    // disallow assignment operators in return statements
    "no-return-assign": [
      "error"
    ],

    // disallow javascript: urls
    "no-script-url": [
      "error"
    ],

    // disallow comparisons where both sides are exactly the same
    "no-self-compare": [
      "error"
    ],

    // disallow comma operators
    "no-sequences": [
      "error"
    ],

    // disallow throwing literals as exceptions
    "no-throw-literal": [
      "error"
    ],

    // disallow unmodified loop conditions
    "no-unmodified-loop-condition": [
      "error"
    ],

    // disallow unused expressions
    "no-unused-expressions": [
      "error"
    ],

    // disallow unnecessary calls to .call() and .apply()
    "no-useless-call": [
      "error"
    ],

    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": [
      "error"
    ],

    // disallow unnecessary escape characters
    "no-useless-escape": [
      "error"
    ],

    // disallow void operators
    "no-void": [
      "error"
    ],

    // disallow specified warning terms in comments
    "no-warning-comments": [
      "error"
    ],

    // disallow with statements
    "no-with": [
      "error"
    ],

    // enforce the consistent use of the radix argument when using parseInt()
    "radix": [
      "error"
    ],

    // require var declarations be placed at the top of their containing scope
    "vars-on-top": [
      "error"
    ],

    // require parentheses around immediate function invocations
    "wrap-iife": [
      "error"
    ],

    // require or disallow “Yoda” conditions
    "yoda": [
      "error"
    ],


    // *************************************************************************
    // Strict Mode
    // These rules relate to strict mode directives
    // *************************************************************************

    // require or disallow strict mode directives
    "strict": [
      "error",
      "never"
    ],


    // *************************************************************************
    // Variables
    // These rules relate to variable declarations
    // *************************************************************************

    // require or disallow initialization in var declarations
    "init-declarations": [
      "error",
      "always"
    ],

    // disallow catch clause parameters from shadowing variables in the outer scope
    "no-catch-shadow": [
      "off"
    ],

    // disallow labels that share a name with a variable
    "no-label-var": [
      "error"
    ],

    // disallow specified global variables
    "no-restricted-globals": [
      "off"
    ],

    // disallow var declarations from shadowing variables in the outer scope
    "no-shadow": [
      "off"
    ],

    // disallow identifiers from shadowing restricted names
    "no-shadow-restricted-names": [
      "error"
    ],

    // disallow initializing variables to undefined
    "no-undef-init": [
      "error"
    ],

    // disallow the use of undefined as an identifier
    "no-undefined": [
      "error"
    ],

    // disallow the use of variables before they are defined
    "no-use-before-define": [
      "error"
    ],


    // *************************************************************************
    // Node.js and CommonJS
    // These rules relate to code running in Node.js, or in browsers with
    // CommonJS
    // *************************************************************************


    // require return statements after callbacks
    "callback-return": [
      "error"
    ],

    // require require() calls to be placed at top-level module scope
    "global-require": [
      "error"
    ],

    // require error handling in callbacks
    "handle-callback-err": [
      "error"
    ],

    // disallow require calls to be mixed with regular var declarations
    "no-mixed-requires": [
      "error"
    ],

    // disallow new operators with calls to require
    "no-new-require": [
      "error"
    ],

    // disallow string concatenation with __dirname and __filename
    "no-path-concat": [
      "error"
    ],

    // disallow the use of process.env
    "no-process-env": [
      "error"
    ],

    // disallow the use of process.exit()
    "no-process-exit": [
      "error"
    ],

    // disallow specified modules when loaded by require
    "no-restricted-modules": [
      "off"
    ],

    //disallow synchronous methods
    "no-sync": [
      "error"
    ],


    // *************************************************************************
    // Stylistic Issues
    // These rules relate to style guidelines, and are therefore quite subjective
    // *************************************************************************

    // enforce consistent brace style for blocks
    "brace-style": [
      "error",
      "1tbs"
    ],

    // enforce camelcase naming convention
    "camelcase": [
      "error"
    ],

    // enforce consistent comma style
    "comma-style": [
      "error"
    ],

    // enforce consistent naming when capturing the current execution context
    "consistent-this": [
      "error",
      "that"
    ],

    // enforce named function expressions
    "func-names": [
      "off"
    ],

    // enforce the consistent use of either function declarations or expressions
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],

    // disallow specified identifiers
    "id-blacklist": [
      "off"
    ],

    // enforce minimum and maximum identifier lengths
    "id-length": [
      "error",
      {
        "min": 4,
        "properties": "always",
        "exceptions": ["x", "xc", "y", "yc", "z", "zc"]
      }
    ],

    // require identifiers to match a specified regular expression
    "id-match": [
      "off"
    ],

    // enforce consistent indentation
    "indent": [
      "error",
      2
    ],

    // enforce the consistent use of either double or single quotes in JSX attributes
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],

    // enforce consistent spacing between keys and values in object literal properties
    "key-spacing": [
      "error",
      {
        "mode": "strict",
        "beforeColon": false,
        "afterColon": true
      }
    ],

    //  enforce consistent linebreak style
    "linebreak-style": [
      "error",
      "unix"
    ],

    // require empty lines around comments
    "lines-around-comment": [
      "off"
    ],

    // enforce a maximum depth that blocks can be nested
    "max-depth": [
      "error",
      4
    ],

    // enforce a maximum line length
    "max-len": [
      "error",
      120,
      {
        "tabWidth": 4,
        "comments": 80,
        "ignoreTrailingComments": true,
        "ignoreUrls": true
      }
    ],

    // enforce a maximum depth that callbacks can be nested
    "max-nested-callbacks": [
      "error",
      10
    ],

    // enforce a maximum number of parameters in function definitions
    "max-params": [
      "error",
      {
        "max": 5
      }
    ],

    // enforce a maximum number of statements allowed in function blocks
    "max-statements": [
      "off"
    ],

    // enforce a maximum number of statements allowed per line
    "max-statements-per-line": [
      "off"
    ],

    // require constructor function names to begin with a capital letter
    "new-cap": [
      "error"
    ],

    // require parentheses when invoking a constructor with no arguments
    "new-parens": [
      "error"
    ],

    // require or disallow an empty line after var declarations
    "newline-after-var": [
      "off"
    ],

    // require an empty line before return statements
    "newline-before-return": [
      "error"
    ],

    // require a newline after each call in a method chain
    "newline-per-chained-call": [
      "error"
    ],

    // disallow Array constructors
    "no-array-constructor": [
      "error"
    ],

    // disallow bitwise operators
    "no-bitwise": [
      "error"
    ],

    // disallow continue statements
    "no-continue": [
      "error"
    ],

    // disallow inline comments after code
    "no-inline-comments": [
      "off"
    ],

    // disallow if statements as the only statement in else blocks
    "no-lonely-if": [
      "error"
    ],

    // disallow multiple empty lines
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2
      }
    ],

    // disallow negated conditions
    "no-negated-condition": [
      "error"
    ],

    // disallow nested ternary expressions
    "no-nested-ternary": [
      "error"
    ],

    // disallow Object constructors
    "no-new-object": [
      "error"
    ],

    // disallow the unary operators ++ and --
    "no-plusplus": [
      "error"
    ],

    // disallow specified syntax
    "no-restricted-syntax": [
      "error",
      "WithStatement"
    ],

    // disallow ternary operators
    "no-ternary": [
      "off"
    ],

    // disallow dangling underscores in identifiers
    "no-underscore-dangle": [
      "error"
    ],

    // disallow ternary operators when simpler alternatives exist
    "no-unneeded-ternary": [
      "error"
    ],

    // enforce placing object properties on separate lines
    "object-property-newline": [
      "error"
    ],

    // enforce variables to be declared either together or separately in functions
    "one-var": [
      "error",
      "never"
    ],

    // require or disallow newlines around var declarations
    "one-var-declaration-per-line": [
      "error",
      "always"
    ],

    // require or disallow assignment operator shorthand where possible
    "operator-assignment": [
      "error",
      "always"
    ],

    // enforce consistent linebreak style for operators
    "operator-linebreak": [
      "error",
      "after"
    ],

    // require or disallow padding within blocks
    "padded-blocks": [
      "error",
      {
        "classes": "always"
      }
    ],

    // require quotes around object literal property names
    "quote-props": [
      "error",
      "always"
    ],

    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": [
      "error",
      "double"
    ],

    // require JSDoc comments
    "require-jsdoc": [
      "error",
      {
        "require": {
          "FunctionDeclaration": false,
          "MethodDefinition": false,
          "ClassDeclaration": true
        }
      }
    ],

    // require or disallow semicolons instead of ASI
    "semi": [
      "error",
      "always"
    ],

    // require variables within the same declaration block to be sorted
    "sort-vars": [
      "off"
    ],

    // require parenthesis around regex literals
    "wrap-regex": [
      "error"
    ],


    // *************************************************************************
    // ECMAScript 6
    // These rules relate to ES6, also known as ES2015
    // *************************************************************************

    // require braces around arrow function bodies
    "arrow-body-style": [
      "error",
      "as-needed"
    ],

    // require parentheses around arrow function arguments
    "arrow-parens": [
      "error",
      "as-needed"
    ],

    // disallow arrow functions where they could be confused with comparisons
    "no-confusing-arrow": [
      "error"
    ],

    // disallow duplicate module imports
    "no-duplicate-imports": [
      "error"
    ],

    // disallow specified modules when loaded by import
    "no-restricted-imports": [
      "off"
    ],

    // disallow unnecessary computed property keys in object literals
    "no-useless-computed-key": [
      "error"
    ],

    // disallow unnecessary constructors
    "no-useless-constructor": [
      "error"
    ],

    // disallow renaming import, export, and destructured assignments to the same name
    "no-useless-rename": [
      "error"
    ],

    // require let or const instead of var
    "no-var": [
      "error"
    ],

    // require or disallow method and property shorthand syntax for object literals
    "object-shorthand": [
      "error",
      "always",
      {
        "avoidQuotes": true
      }
    ],

    // require arrow functions as callbacks
    "prefer-arrow-callback": [
      "error"
    ],

    // require const declarations for variables that are never reassigned after declared
    "prefer-const": [
      "error"
    ],

    // require Reflect methods where applicable
    "prefer-reflect": [
      "error"
    ],

    // require rest parameters instead of arguments
    "prefer-rest-params": [
      "error"
    ],

    // require spread operators instead of .apply()
    "prefer-spread": [
      "error"
    ],

    // require template literals instead of string concatenation
    "prefer-template": [
      "error"
    ],

    // require generator functions to contain yield
    "require-yield": [
      "error"
    ],

    // enforce sorted import declarations within modules
    "sort-imports": [
      "error",
      {
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
      }
    ]

  }
};
