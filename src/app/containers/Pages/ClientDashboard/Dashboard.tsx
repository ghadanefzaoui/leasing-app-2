// Dashboard.tsx
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  margin-left: 250px;
  padding: 20px;
`;

const Card = styled.div`
  background: #ecf0f1;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  text-align: center;
`;

const CardContent = styled.p`
  text-align: center;
`;

const Dashboard: React.FC = () => (
  <DashboardContainer>
    <Card>
      <CardTitle>Card 1</CardTitle>
      <CardContent>Some information here.</CardContent>
    </Card>
    <Card>
      <CardTitle>Card 2</CardTitle>
      <CardContent>Some information here.</CardContent>
    </Card>
    <Card>
      <CardTitle>Card 3</CardTitle>
      <CardContent>Some information here.</CardContent>
    </Card>
    <Card>
      <CardTitle>Card 4</CardTitle>
      <CardContent>Some information here.</CardContent>
    </Card>
  </DashboardContainer>
);

export default Dashboard;
