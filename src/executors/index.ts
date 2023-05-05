import { ControllerUser } from "../controller";
import { DaoUser } from "../model/dao/DaoUser";
import { ExecuterUser } from "./ExecuterUser";

//USER LAYERS
const du = new DaoUser();
const eu = new ExecuterUser(du);
const contUser = new ControllerUser(eu);

export { contUser };