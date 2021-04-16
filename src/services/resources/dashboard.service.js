import MainInstance from "../main.instance";
import { RESPONDEN } from "../constants";

const MainService = {
  getListResponden(params) {
    return MainInstance.query(RESPONDEN, { params });
  },
};

export default MainService;
