"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var apollo_server_1 = require("apollo-server");
var typeDefs = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\ntype Query{\n    hello:String!\n}\n"], ["\ntype Query{\n    hello:String!\n}\n"])));
var resolvers = {
    Query: {
        hello: function () { return "hELLO"; }
    }
};
var server = new apollo_server_1.ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});
server.listen().then(function (_a) {
    var url = _a.url;
    console.log("server running on ".concat(url));
});
var templateObject_1;
