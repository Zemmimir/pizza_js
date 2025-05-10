import React from 'react';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <h2>Фильтры</h2>
      {/* Здесь можно добавить элементы фильтрации */}
    </div>
  );
};
<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
    <p className= "font-bold mb-3">Цена от и до:</p>
    <div className="flex gap-3 mb-5">
    <input type="number" placeholder="0" min="0" max="5000" defaultValue="0" />
    <input type="number" min={100} max={5000} placeholder="5000" />
    </div>


    <CheckboxFiltersGroup
  className="mt-5"
  title="Ингредиенты"
  limit={6}
  defaultItems={[
    {
      text: 'Сырный соус',
      value: '1',
    },
    {
      text: 'Моцарелла',
      value: '2',
    },
    {
      text: 'Чеснок',
      value: '3',
    },
  ]}
  items={[
    {
      text: 'Сырный соус',
      value: '1',
    },
    {
        text: 'Моццарелла',
        value: '2',
      },
      {
        text: 'Томаты',
        value: '3',
      },

    // Другие элементы могут быть добавлены здесь
  ]}
/>



        
</div>


  