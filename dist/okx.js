"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrderUpdateEvent = exports.isPositionUpdateEvent = exports.isTickerUpdateEvent = void 0;
const isTickerUpdateEvent = (event) => {
    return event.arg.channel === "tickers";
};
exports.isTickerUpdateEvent = isTickerUpdateEvent;
const isPositionUpdateEvent = (event) => {
    return event.arg.channel === "positions";
};
exports.isPositionUpdateEvent = isPositionUpdateEvent;
const isOrderUpdateEvent = (event) => {
    return event.arg.channel === "orders";
};
exports.isOrderUpdateEvent = isOrderUpdateEvent;
