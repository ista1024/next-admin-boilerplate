import PersonIcon from "@mui/icons-material/Person";
import SecurityIcon from "@mui/icons-material/Security";
import KeyIcon from "@mui/icons-material/Key";
import LanIcon from "@mui/icons-material/Lan";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

interface SubMenuConstProps {
  title: string;
  name: string;
  route: string;
}

export interface SideMenuConstProps {
  title: string;
  icon: any;
  name: string;
  route: string;
  subMenu: SubMenuConstProps[] | [];
}

// 사이드 메뉴 관련 상수
export const SIDE_MENU_WIDTH = 240;
const user: SideMenuConstProps = { title: "사용자 관리", icon: PersonIcon, name: "user", route: "", subMenu: [] };
const rootKey: SideMenuConstProps = { title: "ROOT 키 관리", icon: SecurityIcon, name: "rootKey", route: "", subMenu: [] };
const userKey: SideMenuConstProps = { title: "고객사 키 관리", icon: KeyIcon, name: "userKey", route: "", subMenu: [] };
const apiKey: SideMenuConstProps = { title: "API 인증키 관리", icon: LanIcon, name: "apiKey", route: "", subMenu: [] };
const history: SideMenuConstProps = {
  title: "HISTORY",
  icon: HistoryEduIcon,
  name: "history",
  route: "",
  subMenu: [
    { title: "전체 이력", name: "allHistory", route: "" },
    { title: "사용자 이력", name: "userHistory", route: "" },
    { title: "고객사 이력", name: "customerHistory", route: "" },
    { title: "API 인증키 이력", name: "apiKeyHistory", route: "" },
    { title: "데이터키 이력", name: "dataKeyHistory", route: "" },
  ]
};

const menus = [
  user,
  rootKey,
  userKey,
  apiKey,
  history
];

const sideMenu = {
  menus,
};

// 사이드메뉴 함수
export const hasSubMenu = ({ subMenu }: SideMenuConstProps) => {
  return !!subMenu && subMenu.length > 0;
}

export default sideMenu;
