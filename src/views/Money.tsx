import Layout from '../components/Layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {CategorySection} from './money/CategorySection';
import {NoteSection} from './money/NotesSection';
import {NumberPadSection} from './money/NumberPadSection';
import {TagsSection} from './money/TagsSection';
import {useRecords} from '../hooks/useRecords';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`;

type Category = '-' | '+'

const initialState = {
  tagIds: [] as number[],
  note: '',
  category: '-' as Category,
  amount: 0
};

function Money() {
  const [selected, setSelected] = useState(initialState);
  const {addRecord} = useRecords();

  // 使obj接受selected的部分类型
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({...selected, ...obj,});
  };

  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功！');
      setSelected(initialState);
    }
  };

  return (
    <MyLayout>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategorySection value={selected.category}
                       onChange={category => onChange({category})}/>
      <NumberPadSection value={selected.amount}
                        onChange={amount => onChange({amount})}
                        onOk={submit}/>
    </MyLayout>
  );
}

export default Money;