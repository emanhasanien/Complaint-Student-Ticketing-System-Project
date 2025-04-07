import React from 'react';
import { Row, Col } from 'react-bootstrap';
import StatisticsCard from '../../UI-Components/StatisticsCard';

const AdminDashboard = () => {
  // Sample data for statistics
  const stats = [
    { title: "Total Complaints", value: 120, icon: <i className="fas fa-comment-dots"></i> },
    { title: "Resolved Complaints", value: 80, icon: <i className="fas fa-check-circle"></i> },
    { title: "Pending Complaints", value: 40, icon: <i className="fas fa-hourglass-half"></i> },
  ];

  return (
    <div className="container mt-4 admin-dashboard">
      <h3>Dashboard</h3>
      
      <Row>
        {stats.map((stat, index) => (
          <Col md={4} key={index}>
            <StatisticsCard 
              title={stat.title} 
              value={stat.value} 
              icon={stat.icon} 
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AdminDashboard;
