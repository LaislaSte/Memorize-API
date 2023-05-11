import { ControllerPost, ControllerProfile, ControllerReview, ControllerUser } from "../controller";
import { DaoPost } from "../model/dao/DaoPost";
import { DaoProfile } from "../model/dao/DaoProfile";
import { DaoReview } from "../model/dao/DaoReview";
import { DaoUser } from "../model/dao/DaoUser";
import { ExecuterPost } from "./ExecuterPost";
import { ExecuterProfile } from "./ExecuterProfile";
import { ExecuterReview } from "./ExecuterReview";
import { ExecuterUser } from "./ExecuterUser";

//USER LAYERS
const du = new DaoUser();
const eu = new ExecuterUser(du);
const contUser = new ControllerUser(eu);

//PRIFILE LAYERS
const dP = new DaoProfile();
const eP = new ExecuterProfile(dP);
const contProfile = new ControllerProfile(eP);

//POST LAYERS
const dPos = new DaoPost();
const ePos = new ExecuterPost(dPos);
const contPost = new ControllerPost(ePos);

//POST REVIEW
const dR = new DaoReview();
const eR = new ExecuterReview(dR);
const contReview = new ControllerReview(eR);


export { contUser, contProfile, contPost, contReview };