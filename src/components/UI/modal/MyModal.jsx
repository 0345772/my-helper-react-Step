import React from 'react';
import cl from './MyModal.module.css';

export const MyModal = ({children, visiable, setVisiable}) => {

  const rootClasses = [cl.myModal]
    if(visiable) {
      rootClasses.push(cl.active)
    }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.myModalContent}>
        {children}
      </div>
    </div>
  );
};

