import React from 'react';
import { Card } from 'react-bootstrap';

const StatisticsCard = ({ title, value, icon }) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5>{title}</h5>
            <h3>{value}</h3>
          </div>
          <div className="icon-container">
            {icon}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default StatisticsCard;
