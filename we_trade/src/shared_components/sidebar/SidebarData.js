import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: "icons/home.svg",
        dropdownItems: []
    },
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: 'icons/dashboard.svg',
        dropdownItems: [{ item: 'users', link: '#' }, { item: 'admin', link: '#' }]

    },
    {
        title: 'Copy Trading',
        path: '/copy_trading',
        icon: 'icons/copy_trade.svg',
        dropdownItems: [{ item: 'users', link: '#' }, { item: 'admin', link: '#' }]

    },
    {
        title: 'Market Place',
        path: '/team',
        icon: 'icons/market_place.svg',
        dropdownItems: [{ item: 'users', link: '#' }, { item: 'admin', link: '#' }]

    },
    {
        title: 'Master Traders',
        path: '/messages',
        icon: 'icons/master_trade.svg',
        dropdownItems: [{ item: 'users', link: '#' }, { item: 'admin', link: '#' }]

    },
    {
        title: 'Platform Wallet',
        path: '/support',
        icon: 'icons/wallet.svg',
        dropdownItems: []

    },
    {
        title: 'Referral',
        path: '/support',
        icon: 'icons/referral.svg',
        dropdownItems: []

    },
    {
        title: 'Subscription',
        path: '/support',
        icon: 'icons/subscription.svg',
        dropdownItems: [{ item: 'users', link: '#' }, { item: 'admin', link: '#' }]

    },
    {
        title: 'Become Master Trader',
        path: '/support',
        icon: 'icons/become_master_trader.svg',
        dropdownItems: []

    },
    {
        title: 'My Exchanges',
        path: '/support',
        icon: 'icons/exchange.svg',
        dropdownItems: []

    },
    {
        title: 'Master Trader Profile',
        path: '/support',
        icon: 'icons/exchange.svg',
        dropdownItems: []

    },
    {
        title: 'Admin Panel',
        path: '/support',
        icon: 'icons/admin_panel.svg',
        dropdownItems: [{ item: 'users', link: '#' }, { item: 'admin', link: '#' }]

    }
];