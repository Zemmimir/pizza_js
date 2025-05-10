// components/Header.tsx
"use client"
import { Container } from './container';
import { cn } from '@/lib/utils';
import * as React from 'react';
import Image from 'next/image';
import { useState } from 'react';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
        // Здесь можно добавить логику для обработки поиска
    };

    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className="flex-shrink-0">
                    <Image src="/logo.svg" alt="Логотип" width={100} height={50} />
                </div>
                <form onSubmit={handleSearchSubmit} className="flex flex-grow mx-4">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleSearchChange}
                        placeholder="Поиск..."
                        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
                        Поиск
                    </button>
                </form>
                <div className="flex items-center space-x-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Войти
                    </button>
                    <Image src="/cart-icon.svg" alt="Корзина" width={30} height={30} className="cursor-pointer" />
                </div>
            </Container>
        </header>
    );
};