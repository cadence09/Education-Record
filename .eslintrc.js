module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "space-in-parens": [ 0, "always" ],
        "react/no-unescaped-entities": [
            "error",
            {
              forbid: [">", "}"],
            },
          ],
          "react/jsx-curly-spacing": [ 2, "always" ],
          "react/jsx-indent": [ 2, 4 ],
          "no-undef": [ 1 ],
          "react/prop-types": [0]
        
    }
};
