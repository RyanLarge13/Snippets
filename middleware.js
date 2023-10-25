"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var nextjs_1 = require("@clerk/nextjs");
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
exports.default = (0, nextjs_1.authMiddleware)({ publicRoutes: ["/"] });
exports.config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
