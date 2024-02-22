import { PiUsersFourFill } from "react-icons/pi";
import { PiUsersFill } from "react-icons/pi";
import { MdLibraryBooks } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { FaQuestionCircle } from "react-icons/fa";
import { FaKeyboard } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa6";

export const menuOptions = [
  {
    route: 'applicants',
    component: 'Applicants',
    title: 'Aspirantes',
    icon: PiUsersFourFill,
  },
  {
    route: 'about',
    component: 'About',
    title: 'Acerca',
    icon: FaQuestionCircle,
  },
  {
    route: 'credits',
    component: 'Credits',
    title: 'Creditos',
    icon: FaHandHoldingHeart,
  },
  {
    route: 'dashboard',
    component: 'Dashboard',
    title: 'Metricas',
    icon: FaChartPie,
  },
  {
    route: 'trainings',
    component: 'trainings',
    title: 'Entrenamientos',
    icon: FaKeyboard,
  },
  {
    route: 'how-to-use',
    component: 'HowToUse',
    title: 'Como usar',
    icon: MdLibraryBooks,
  },
  {
    route: 'users',
    component: 'Users',
    title: 'Responsables',
    icon: PiUsersFill,
  },
]