import './GeneralPageShakespeare.css'
import React, { useState } from 'react';
import { Flex, Layout } from 'antd';
const { Header, Sider, Content } = Layout;
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShakespeareGeneralInformation from '../ShakespeareGeneralInformation/ShakespeareGeneralInformation';
import HamletShakespear from '../HamletShakespeare/HamletShakespeare';

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#000',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#D0D0D0',
  };
  
  const contentStyle: React.CSSProperties = {    
    minHeight: 'calc(100vh - 64px)',
    color: '#000',
    backgroundColor: '#F0F0F0',
  };
  
  const siderStyle: React.CSSProperties = {
    textAlign: 'left',
    lineHeight: '50px',
    color: '#000',
    backgroundColor: '#E7E7E7',
  };

  const layoutStyle = {
    overflow: 'hidden',
    width: '100%',
    maxWidth: '100%',
  };

export default function GeneralPageShakespeare() {
    return (
        <Flex gap="middle" wrap>
            <Layout style={layoutStyle}>
                <Router>
                    <Sider width="20%" style={siderStyle}>
                        <ul className='menu-items'>                            
                            <li><Link to="shakespeare">Shakespeare</Link></li>
                            <li><Link to="shakespeare/hamlet">Hamlet</Link></li>
                        </ul>
                    </Sider>
                    <Layout>
                        <Header style={headerStyle}>
                            <p>Используя рендеринг элементов создайте приложение, отображающее библиографию Шекспира.</p>
                        </Header>
                        <Content style={contentStyle}>
                            <Routes>
                                <Route path='shakespeare' element={<ShakespeareGeneralInformation />}></Route>
                                <Route path='shakespeare/hamlet' element={<HamletShakespear />}></Route>
                            </Routes>    
                        </Content>                
                    </Layout>
                </Router>
            </Layout>
        </Flex>
    )
}