import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/Input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';

const TopBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 20px;
  padding: 14px 0;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;      
  padding: 0 16px;
  margin-top: 8px;
`;

const Tag: React.FC = () => {
  const {findTagById, updateTag, deleteTagById} = useTags();
  const {id} = useParams<{ id: string }>();
  const tag = findTagById(parseInt(id));

  const tagContent =(tag:{id:number,name:string})=> (
    <div>
      <InputWrapper>
        <Input label={'标签名'}
               type={'text'}
               placeholder={'标签名'}
               value={tag.name}
               onChange={e => updateTag(tag.id, {name: e.target.value})}/>
      </InputWrapper>;
      <Center>
        <Space/>
        <Button onClick={() => deleteTagById(tag.id)}>删除标签</Button>
      </Center>
    </div>
)
  return (
    <Layout>
      <TopBar>
        <Icon name={'left'}/>
        <span>编辑标签</span>
        <Icon/>
      </TopBar>
      {tag ? tagContent(tag) : <div>tag不存在</div>}
    </Layout>
  );

};
export {Tag};