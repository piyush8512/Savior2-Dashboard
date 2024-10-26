'use client';
import { Typography } from '@mui/material';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';


const SamplePage = () => {
  return (
    <PageContainer title="feed" description="this is Sample page">
      <DashboardCard title="feed">
        <Typography>this is feed of review
          
        </Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;

