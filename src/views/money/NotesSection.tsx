import styled from 'styled-components';

const NotesSection = styled.section`
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
export {NotesSection}