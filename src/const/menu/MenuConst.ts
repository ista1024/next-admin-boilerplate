import { MenuConstTypes } from "@/const/menu/sideMenu";

export interface MenuProps {
  title: string;
  subtitle?: string;
}

type MenuConstProps = {
  [key in MenuConstTypes]: MenuProps;
}

const MenuConst: MenuConstProps = {
  user: {
    title: "사용자 관리",
    subtitle: "KMS 관리자 서버에 접속하는 사용자를 관리합니다."
  },
  rootKey: {
    title: "ROOT 키 관리",
    subtitle: "ROOT 키는 고객사키를 암호화하는데 사용합니다. ROOT 키가 등록이 안 된 경우 고객사키를 사용할 수가 없습니다."
  },
  custKey: {
    title: "고객사 키 관리",
    subtitle: "KMS 관리자 서버에 접속하는 고객사 키를 관리합니다."
  },
  apiKey: {
    title: "API 인증키 관리",
    subtitle: "KMS 관리자 서버에 접속하는 API 인증키를 관리합니다."
  },
  history: {
    title: "HISTORY",
    subtitle: "KMS 관리자 서버에 접속하는 이력을 관리합니다."
  }
}

export default MenuConst;
