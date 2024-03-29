import React from 'react';
import { MyInput, MySelect } from '../UI';


export const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
    <MyInput
      value={filter.query}
      onChange={e => setFilter({...filter, query: e.target.value})}
      placeholder="Поиск..."
    />
    <MySelect
      value={filter.sort}
      onChange={selectedSort => setFilter({...filter, sort: selectedSort}) }
      defaultValue="Сортировка"
      options={[
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" }
      ]}
    />
  </div>
  );
};
