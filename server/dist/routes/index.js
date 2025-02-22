"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const auth_routes_1 = __importDefault(require("./auth-routes"));
const router = express_1.default.Router();
router.use('/auth', auth_routes_1.default);
// Protect Kanban board routes
router.get('/kanban', auth_1.authenticateToken, (_, res) => {
    res.json({ message: "Welcome to your Kanban board!" });
});
exports.default = router;
