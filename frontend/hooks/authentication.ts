import { useKeycloak } from "@react-keycloak/ssr";
import { KeycloakInstance } from "keycloak-js";

export const useIsLoggedIn = (): boolean => {
  const { keycloak } = useKeycloak<KeycloakInstance>();

  const token = keycloak?.token;

  return (!!keycloak?.authenticated ?? false) && !!token;
};

export const useIsAdmin = () => {
  const { keycloak } = useKeycloak<KeycloakInstance>();
  return keycloak?.resourceAccess?.hasura?.roles?.includes("admin") ?? false;
};
