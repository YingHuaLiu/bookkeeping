import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {CategorySection} from './money/CategorySection';
import {NotesSection} from './money/NotesSection';
import {NumberPadSection} from './money/NumberPadSection';
import {TagsSection} from './money/TagsSection';

const MyLayout=styled(Layout)`
  display:flex;
  flex-direction: column;
`

function Money() {
  return (
    <MyLayout>
      <TagsSection>
        <ul>
          <li>衣</li>
          <li>食</li>
          <li>住</li>
          <li>行</li>
        </ul>
        <button>新增标签</button>
      </TagsSection>
      <NotesSection>
        <label>
          <span>备注</span>
          <input type="text" placeholder={'在这里添加备注'}/>
        </label>
      </NotesSection>
      <CategorySection>
        <ul>
          <li className={'selected'}>支出</li>
          <li>收入</li>
        </ul>
      </CategorySection>
      <NumberPadSection>
        <div className={'output'}>
          100
        </div>
        <div className={'pad'}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className={'ok'}>OK</button>
          <button className={'zero'}>0</button>
          <button>.</button>
        </div>
      </NumberPadSection>
    </MyLayout>
  );
}

export default Money;