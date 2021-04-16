import MainInstance from "../main.instance";
import { RESPONDEN, PRETEST } from "../constants";

const MainService = {
  createResponden(data) {
    return MainInstance.post(RESPONDEN, data);
  },
  insertPretest(id, data) {
    return MainInstance.create(PRETEST, id, data);
  },
};

export default MainService;
