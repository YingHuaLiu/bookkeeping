import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';

const Tag: React.FC = () => {
  const {findTagById} = useTags();
  const {id} = useParams<{ id: string }>();
  const tag = findTagById(parseInt(id));
  return (
    <div>
      {tag.name}
    </div>
  );

};
export {Tag};