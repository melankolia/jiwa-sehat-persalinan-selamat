import MainInstance from "../main.instance";
import { RESPONDEN } from "../constants";

const MainService = {
  createResponden(data) {
    return MainInstance.post(RESPONDEN, data);
  },
};

export default MainService;
