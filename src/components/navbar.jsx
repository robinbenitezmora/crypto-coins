import React from 'react';
import { Button, Menu, Tipography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'; 

const navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src="" size="large" />
        <Tipography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Tipography.Title>
        <Button className="menu-control-container">
          <MenuOutlined />
        </Button>
      </div>
    </div>
  );
};

export default navbar