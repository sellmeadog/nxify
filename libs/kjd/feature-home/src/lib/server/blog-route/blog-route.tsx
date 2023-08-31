import { PageRoute } from '@nxify/kjd-ui-page-route/server';

export interface BlogRouteProps {}

export async function BlogRoute(props: BlogRouteProps) {
  return <PageRoute slug="blog" />;
}
