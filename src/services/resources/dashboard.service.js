import MainInstance from "../main.instance";
import { RESPONDEN } from "../constants";

const MainService = {
  getListResponden(params) {
    return MainInstance.query(RESPONDEN, { params });
  },
  getDetail(id) {
    return MainInstance.fetch(RESPONDEN, id);
  },
};

export default MainService;
