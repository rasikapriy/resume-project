import React from "react";
import { Card, Space, Tag, Typography, Button } from "antd";
import "./Style.css";

const { Title, Paragraph } = Typography;

const HoverCard = ({ title, content, skills, buttonText, onClick }) => {
  const safeSkills = Array.isArray(skills) ? skills : [];

  return (
    <Card className="hover-card" hoverable>
      <Title level={4} className="hover-card-title">
        {title}
      </Title>
      <Paragraph className="hover-card-content">{content}</Paragraph>

      {safeSkills.length > 0 && (
        <Space className="skills-list">
          {safeSkills.map((skill, index) => (
            <Tag key={index} className="skill-tag">
              {skill}
            </Tag>
          ))}
        </Space>
      )}
      {buttonText && onClick && (
        <div className="hover-card-button">
          <Button type="primary" onClick={onClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default HoverCard;
