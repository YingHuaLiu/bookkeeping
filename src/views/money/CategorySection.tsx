import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
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

type Props = {
  value: '-' | '+',
  onChange: (value: '-' | '+') => void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type keys = keyof typeof categoryMap;
  const [categoryList] = useState<keys[]>(['-', '+']);
  const category=props.value;
  return (
    <Wrapper>
      <ul>
        {categoryList.map(c =>
          <li className={category === c ? 'selected' : ''}
              onClick={() => props.onChange(c)}
              key={c}>
            {categoryMap[c]}
          </li>)
        }
      </ul>
    </Wrapper>
  );
};

export {CategorySection};