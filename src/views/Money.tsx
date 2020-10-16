import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './money/CategorySection';
import {NoteSection} from './money/NotesSection';
import {NumberPadSection} from './money/NumberPadSection';
import {TagsSection} from './money/TagsSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });

  // 使obj接受selected的部分类型
  const onChange=(obj:Partial<typeof selected>)=>{
    setSelected({
      ...selected,
      ...obj,
    })
  }

  return (
    <MyLayout>
      <TagsSection value={selected.tags}
                   onChange={tags => onChange({tags})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={() => {}}/>
    </MyLayout>
  );
}

export default Money;