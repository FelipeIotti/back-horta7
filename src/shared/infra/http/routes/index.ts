import { Router } from "express";
import { dataRoutes } from "./data.routes";

export const router = Router();

router.use('/data',dataRoutes);

