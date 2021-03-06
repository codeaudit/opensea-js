"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("isomorphic-unfetch");
var QueryString = require("query-string");
var types_1 = require("./types");
var wyvern_1 = require("./wyvern");
exports.ORDERBOOK_VERSION = 1;
exports.API_VERSION = 1;
var API_BASE_MAINNET = 'https://api.opensea.io';
var API_BASE_RINKEBY = 'https://rinkeby-api.opensea.io';
var ORDERBOOK_PATH = "/wyvern/v" + exports.ORDERBOOK_VERSION;
var API_PATH = "/api/v" + exports.ORDERBOOK_VERSION;
var OpenSeaAPI = /** @class */ (function () {
    /**
     * Create an instance of the OpenSea API
     * @param param0 __namedParamters Object
     * @param apiKey Optional key to use for API
     * @param networkName `Network` type to use. Defaults to `Network.Main` (mainnet)
     */
    function OpenSeaAPI(_a) {
        var apiKey = _a.apiKey, networkName = _a.networkName;
        /**
         * Page size to use for fetching orders
         */
        this.pageSize = 20;
        this.apiKey = apiKey;
        switch (networkName) {
            case types_1.Network.Rinkeby:
                this.apiBaseUrl = API_BASE_RINKEBY;
                break;
            case types_1.Network.Main:
            default:
                this.apiBaseUrl = API_BASE_MAINNET;
                break;
        }
    }
    /**
     * Send an order to the orderbook.
     * Throws when the order is invalid.
     * @param order Order to post to the orderbook
     */
    OpenSeaAPI.prototype.postOrder = function (order) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post(ORDERBOOK_PATH + "/orders/post", order)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, wyvern_1.orderFromJSON(json)];
                }
            });
        });
    };
    /**
     * Get an order from the orderbook, returning `null` if none are found.
     * @param query Query to use for getting orders. A subset of parameters
     *  on the `OrderJSON` type is supported
     */
    OpenSeaAPI.prototype.getOrder = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json, orderJSON, json, orderJSON;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(ORDERBOOK_PATH + "/orders", query)];
                    case 1:
                        response = _a.sent();
                        if (!(exports.ORDERBOOK_VERSION == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        orderJSON = json[0];
                        return [2 /*return*/, orderJSON ? wyvern_1.orderFromJSON(orderJSON) : null];
                    case 3: return [4 /*yield*/, response.json()];
                    case 4:
                        json = _a.sent();
                        orderJSON = json.orders[0];
                        return [2 /*return*/, orderJSON ? wyvern_1.orderFromJSON(orderJSON) : null];
                }
            });
        });
    };
    /**
     * Get a list of orders from the orderbook, returning the page of orders
     *  and the count of total orders found.
     * @param query Query to use for getting orders. A subset of parameters
     *  on the `OrderJSON` type is supported
     * @param page Page number, defaults to 1
     */
    OpenSeaAPI.prototype.getOrders = function (query, page) {
        if (query === void 0) { query = {}; }
        if (page === void 0) { page = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var response, json, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(ORDERBOOK_PATH + "/orders", __assign({}, query, { limit: this.pageSize, offset: (page - 1) * this.pageSize }))];
                    case 1:
                        response = _a.sent();
                        if (!(exports.ORDERBOOK_VERSION == 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, {
                                orders: json.map(function (j) { return wyvern_1.orderFromJSON(j); }),
                                count: json.length
                            }];
                    case 3: return [4 /*yield*/, response.json()];
                    case 4:
                        json = _a.sent();
                        return [2 /*return*/, {
                                orders: json.orders.map(function (j) { return wyvern_1.orderFromJSON(j); }),
                                count: json.count
                            }];
                }
            });
        });
    };
    /**
     * Fetch an asset from the API, return null if it isn't found
     * @param tokenAddress Address of the asset's contract
     * @param tokenId The asset's token ID
     */
    OpenSeaAPI.prototype.getAsset = function (tokenAddress, tokenId) {
        return __awaiter(this, void 0, void 0, function () {
            var response, json;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get(API_PATH + "/asset/" + tokenAddress + "/" + tokenId)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        json = _a.sent();
                        return [2 /*return*/, json ? wyvern_1.assetFromJSON(json) : null];
                }
            });
        });
    };
    /**
     * Get JSON data from API, sending auth token in headers
     * @param apiPath Path to URL endpoint under API
     * @param query Data to send. Will be stringified using QueryString
     */
    OpenSeaAPI.prototype.get = function (apiPath, query) {
        if (query === void 0) { query = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var qs, url;
            return __generator(this, function (_a) {
                qs = QueryString.stringify(query);
                url = apiPath + "?" + qs;
                return [2 /*return*/, this._fetch(url)];
            });
        });
    };
    /**
     * POST JSON data to API, sending auth token in headers
     * @param apiPath Path to URL endpoint under API
     * @param body Data to send. Will be JSON.stringified
     * @param opts RequestInit opts, similar to Fetch API. If it contains
     *  a body, it won't be stringified.
     */
    OpenSeaAPI.prototype.post = function (apiPath, body, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var fetchOpts;
            return __generator(this, function (_a) {
                fetchOpts = __assign({ method: 'POST', body: body ? JSON.stringify(body) : undefined, headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    } }, opts);
                return [2 /*return*/, this._fetch(apiPath, fetchOpts)];
            });
        });
    };
    /**
     * PUT JSON data to API, sending auth token in headers
     * @param apiPath Path to URL endpoint under API
     * @param body Data to send
     * @param opts RequestInit opts, similar to Fetch API. If it contains
     *  a body, it won't be stringified.
     */
    OpenSeaAPI.prototype.put = function (apiPath, body, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.post(apiPath, body, __assign({ method: 'PUT' }, opts))];
            });
        });
    };
    /**
     * Get from an API Endpoint, sending auth token in headers
     * @param apiPath Path to URL endpoint under API
     * @param opts RequestInit opts, similar to Fetch API
     */
    OpenSeaAPI.prototype._fetch = function (apiPath, opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var apiBase, apiKey;
            return __generator(this, function (_a) {
                apiBase = this.apiBaseUrl;
                apiKey = this.apiKey;
                return [2 /*return*/, fetch(apiBase + apiPath, __assign({}, opts, { headers: __assign({}, (apiKey ? { 'X-API-KEY': apiKey } : {}), (opts.headers || {})) })).then(handleApiErrors)];
            });
        });
    };
    return OpenSeaAPI;
}());
exports.OpenSeaAPI = OpenSeaAPI;
function handleApiErrors(response) {
    return __awaiter(this, void 0, void 0, function () {
        var result, errorMessage, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!!response.ok) return [3 /*break*/, 7];
                    _a = response.status;
                    switch (_a) {
                        case 401: return [3 /*break*/, 1];
                        case 403: return [3 /*break*/, 1];
                        case 400: return [3 /*break*/, 2];
                        case 500: return [3 /*break*/, 4];
                    }
                    return [3 /*break*/, 5];
                case 1:
                    errorMessage = 'Unauthorized';
                    return [3 /*break*/, 6];
                case 2: return [4 /*yield*/, response.json()];
                case 3:
                    result = _b.sent();
                    errorMessage = result && result.errors
                        ? result.errors.join(', ')
                        : "Invalid request";
                    return [3 /*break*/, 6];
                case 4:
                    errorMessage = "Internal server error";
                    return [3 /*break*/, 6];
                case 5:
                    errorMessage = "Please try again later!";
                    return [3 /*break*/, 6];
                case 6: throw new Error("API Error: " + errorMessage);
                case 7: return [2 /*return*/, response];
            }
        });
    });
}
//# sourceMappingURL=api.js.map