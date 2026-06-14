import { Router, type IRouter } from "express";
import healthRouter from "./health";
import propertiesRouter from "./properties";
import agentsRouter from "./agents";
import statsRouter from "./stats";
import searchRouter from "./search";

const router: IRouter = Router();

router.use(healthRouter);
router.use(propertiesRouter);
router.use(agentsRouter);
router.use(statsRouter);
router.use(searchRouter);

export default router;
