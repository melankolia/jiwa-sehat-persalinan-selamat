import MainInstance from "../main.instance";
import { RESPONDEN, LOGIN, EXPORT } from "../constants";

const MainService = {
  getListResponden(params) {
    return MainInstance.query(RESPONDEN, { params });
  },
  getDetail(id) {
    return MainInstance.fetch(RESPONDEN, id);
  },
  deleteResponden(id) {
    return MainInstance.deleteSlug(RESPONDEN, id);
  },
  login(payload) {
    return MainInstance.post(LOGIN, payload);
  },
  downloadFile() {
    return MainInstance.download(EXPORT, null, null, "arraybuffer");
  },
};

export default MainService;
