"use client"
import React from 'react';
import PageTitle from '@/components/common/page-title';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle title="Telecord" />
      <h1>{t('title')}</h1>
    </>
  );
}
