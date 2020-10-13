import styled from 'styled-components';

const CategorySection = styled.section`
  background: #c4c4c4;
  font-size: 24px;
  >ul{
    display:flex;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content: '';
        background: black;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0; //防止在safari里面出错
        width: 100%;
        height: 2px;
      }
    }
  }
`;
export {CategorySection}