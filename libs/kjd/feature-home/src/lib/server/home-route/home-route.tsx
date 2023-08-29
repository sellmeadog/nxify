import { RouteBase } from '../route-base/route-base';

export interface HomeRouteProps {}

export async function HomeRoute(props: HomeRouteProps) {
  return <RouteBase slug="home" />;
}
