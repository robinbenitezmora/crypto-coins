import React from 'react';
import {
  Menu, Avatar,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, FontSizeOutlined,
} from '@ant-design/icons';

const navbar = () => (
  <div className="nav-container">
    <div className="logo-container">
      <Avatar src="" size="large" />
    </div>
    <Menu theme="dark">
      <Menu.Item icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item icon={<FontSizeOutlined />}>
        <Link to="/cryptocurrencies">Cryptocurrencies</Link>
      </Menu.Item>
      <Menu.Item icon={<MoneyCollectOutlined />}>
        <Link to="/exchanges">Exchanges</Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default navbar;
