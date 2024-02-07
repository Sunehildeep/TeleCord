import Head from 'next/head';
import React from 'react'

interface TitleProps {
    title: string;
}

const PageTitle = ({title} : TitleProps) => {
  return (
    <Head>
        <title>{title}</title>
    </Head>
  )
}


export default PageTitle
