import Head from 'next/head';
import React, { FC, PropsWithChildren } from 'react';
import BasePageWrapper from './BasePageWrapper';

interface PageWrapperWithMetadataProps {
  title: string;
  description: string;
  keywords: string;
}
const PageWrapperWithMetadata: FC<PropsWithChildren<PageWrapperWithMetadataProps>> = ({
  title,
  description,
  keywords,
  children,
}) => (
  <BasePageWrapper>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Head>
    {children}
  </BasePageWrapper>
);

export default PageWrapperWithMetadata;
