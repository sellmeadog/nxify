import { PageRoute } from '@nxify/kjd-ui-page-route/server';

export interface HomeRouteProps {}

export async function HomeRoute(props: HomeRouteProps) {
  return <PageRoute slug="home" />;
}
