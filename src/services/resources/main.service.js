import MainInstance from "../main.instance";
import { RESPONDEN, PRETEST, SCREENING, POSTTEST } from "../constants";

const MainService = {
  createResponden(data) {
    return MainInstance.post(RESPONDEN, data);
  },
  insertPretest(id, data) {
    return MainInstance.create(PRETEST, id, data);
  },
  insertScreening(id, data) {
    return MainInstance.create(SCREENING, id, data);
  },
  insertPosttest(id, data) {
    return MainInstance.create(POSTTEST, id, data);
  },
};

export default MainService;
