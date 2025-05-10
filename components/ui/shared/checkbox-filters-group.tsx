'use client'; // Директива Next.js для использования компонента на стороне клиента

import React from 'react';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';
import { Input } from './ui/input';

// Тип, описывающий элемент списка чекбоксов
type Item = FilterCheckboxProps;

interface Props {
    title: string; // Заголовок группы чекбоксов (например, "Категории")
    items: Item[]; // Полный список чекбоксов, из которого пользователь может выбрать
    defaultItems: Item[]; // Список чекбоксов, который показывается изначально (до нажатия "Показать все")
    limit: number; // Ограничение на количество элементов, отображаемых по умолчанию (например, 5)
    searchInputPlaceholder: string; // Текст placeholder для поля поиска
    onChange: (values: string[]) => void; // Callback-функция, вызываемая при изменении списка выбранных чекбоксов
    defaultValue?: string[]; // Изменяемые чекбоксы, которые должны быть выбраны по умолчанию
    className?: string; // Класс для стилизации внешнего контейнера
}
// Компонент группы чекбоксов с поиском и возможностью раскрытия полного списка
export const CheckboxFiltersGroup: React.FC<Props> = ({
    title,                      // Заголовок списка чекбоксов
    items,                      // Полный список чекбоксов
    defaultItems,               // Начально отображаемые чекбоксы
    limit = 5,                  // Количество отображаемых элементов по умолчанию
    searchInputPlaceholder = 'Поиск...',  // Плейсхолдер для строки поиска
    className,                  // Дополнительные стили
    onChange,                   // Функция обратного вызова при изменении списка выбранных чекбоксов
    defaultValue,               // Значение по умолчанию
  }) => {
    // Состояние: показывает ли пользователь весь список чекбоксов
    const [showAll, setShowAll] = React.useState(false);
    
    // Состояние: значение строки поиска
    const [searchValue, setSearchValue] = React.useState('');
  
    // Функция обработки изменения в поле поиска
    const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value);
    };
  
    // Остальная логика компонента...
  
    return (
      <div className={className}>
        <h3>{title}</h3>
        <input 
          type="text" 
          placeholder={searchInputPlaceholder} 
          value={searchValue}
          onChange={onChangeSearchInput}
        />
        {/* Логика для отображения чекбоксов */}
      </div>
    );
  };
  // формирование списка отображаемых элементов:
// 1. Если список раскрыт (showAll === true), фильтруем все элементы по введённому поисковому запросу
// 2. Если список не раскрыт, показываем первые `limit` элементов из `defaultItems`
const list = showAll
? items.filter((item) => item.text.toLowerCase().includes(searchvalue.toLowerCase()))
: defaultItems.slice(0, limit);

return (
<div className={className}>
  {/* Заголовок группы чекбоксов */}
  <p className="font-bold mb-3">{title}</p>
  {/* Поле поиска отображается только при раскрытии списка */}
  {showAll && (
    <div className="mb-5">
      <Input
        onChange={onChangeSearchInput}
        placeholder={searchInputPlaceholder}
        className="bg-gray-50 border-none"
      />
    </div>
  )}
</div>
);


  {/* Список чекбоксов с возможностью скролла */}
<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
  {list.map((item, index) => (
    <FilterCheckbox
      onCheckedChange={(ids) => console.log(ids)}
      checked={false}
      key={index} // Используем индекс в качестве ключа
      value={item.value} // Значение чекбокса
      text={item.text} // Текст рядом с чекбоксом
      endAdornment={item.endAdornment} // Дополнительный элемент, например, счётчик количества
    />
  ))}
</div>

{/* Кнопка для раскрытия или скрытия полного списка, если элементов больше лимита */}
{items.length > limit && (
  <div className={`showAll ${showAll ? 'border-t-neutral-100 mt-4' : ''}`}>
    <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
      {showAll ? 'Скрыть' : 'Показать все'}
    </button>
  </div>
)}

Найти еще
