import styled from 'styled-components';
import React, {useRef, useState} from 'react';

const Wrapper = styled.section`
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{
      margin-right: 16px;
      white-space: nowrap;
    }
    >input{
      height: 72px;
      width: 100%;
      display: block;
      background: none;
      border:none;
    }
  }
`;

const NoteSection: React.FC = () => {
  const [note, setNote] = useState<string>('');
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current) {
      setNote(refInput.current.value);
      console.log(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        {/*<input type="text"*/}
        {/*       placeholder={'在这里添加备注'}*/}
        {/*       value={note}*/}
        {/*       onChange={e=>setNote(e.target.value)}/>*/}
        <input type="text"
               placeholder={'在这里添加备注'}
               ref={refInput}
               defaultValue={note}
               onBlur={onBlur}/>
      </label>
    </Wrapper>
  );
};

export {NoteSection};