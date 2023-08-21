import { ComponentType, ElementType } from 'react';

export interface ContentPageProps {
  components: { [key: string]: ComponentType | ElementType };
  sections?: Array<{ __typename: string; [key: string]: unknown }>;
}

export async function ContentPage({ components, sections }: ContentPageProps) {
  return sections?.map(({ __typename, ...rest }) => {
    const Component = components[__typename];

    if (Component) {
      return <Component {...rest} />;
    }

    return null;
  });
}
