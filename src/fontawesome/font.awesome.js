import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEdit,
  faTrash,
  faGlobe,
  faUser,
  faStickyNote,
  faCog
} from "@fortawesome/free-solid-svg-icons";
export function FontawesomeServe(Vue) {
  Vue.component("faIcon", FontAwesomeIcon);
  library.add(faTrash);
  library.add(faEdit);
  library.add(faFacebook);
  library.add(faGithub);
  library.add(faLinkedin);
  library.add(faGlobe);
  library.add(faUser);
  library.add(faStickyNote);
  library.add(faCog);
}
