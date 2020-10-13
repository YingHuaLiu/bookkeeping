import styled from 'styled-components';
import {Link, NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';


const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  >ul{
    display: flex;
    >li{
      width: 33.3%;
      padding: 4px 0;
      >a{
        display: flex;
        flex-direction: column;
        align-items: center;
        .icon{
          width: 24px;
          height: 24px;
        }
        &.selected{
          color: red;
          .icon{
            fill: red;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/money" activeClassName={'selected'}>
            <Icon name={'rmb'}/>
            money
          </NavLink>
        </li>
        <li>
          <NavLink to="/tags" activeClassName={'selected'}>
            <Icon name={'tag'}/>
            tags
          </NavLink>
        </li>
        <li>
          <NavLink to="/statistics" activeClassName={'selected'}>
            <Icon name={'chart'}/>
            statistics
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;