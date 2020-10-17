import {useState} from 'react';
import {createId} from 'lib/createId';

const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];

const useTags = () => {
  const [tags, setTags] = useState<{ id: number, name: string }[]>(defaultTags);
  const findTagById = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex=(id:number)=>{
    for (let i = 0; i < tags.length; i++) {
      if(tags[i].id===id)
        return i;
    }
  }
  const updateTag=(id:number,obj:{name:string})=>{
    const index = findTagIndex(id);
    // 深拷贝tags得到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, {id: id, name: obj.name});
    setTags(tagsClone);
  }
  return {tags, setTags,findTagById,updateTag,findTagIndex};
};

export {useTags};