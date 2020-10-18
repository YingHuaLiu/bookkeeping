import {useEffect, useRef, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './hooks/useUpdate';

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>([]);

  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);
  }, []);


  useUpdate(() => {window.localStorage.setItem('tags', JSON.stringify(tags));}, [tags]);

  const findTagById = (id: number) => tags.filter(tag => tag.id === id)[0];

  const findTagIndex = (id: number) => {
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id)
        return i;
    }
  };

  const updateTag = (id: number, name: string) => {
    setTags(tags.map(tag => {
      if (tag.id === id) {
        return {id, name};
      } else {
        return tag;
      }
    }));
  };

  const deleteTagById = (id: number) => {
    setTags(tags.filter(tag => tag.id !== id));
  };

  const addTag = () => {
    const tagName = window.prompt('新增的标签名为 ');
    if (tagName !== null) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };

  return {tags, setTags, findTagById, updateTag, deleteTagById, addTag};
};

export {useTags};