import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { GrTransaction } from "react-icons/gr";
import { CiBank } from "react-icons/ci";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Consumers',
		path: '/products',
		icon: < HiOutlineUsers/>
	},
	{
		key: 'orders',
		label: 'Transactions',
		path: '/orders',
		icon: <GrTransaction />
	},
	{
		key: 'customers',
		label: 'Bullion Operations',
		path: '/customers',
		icon: < HiOutlineCube/>
	},
	{
		key: 'transactions',
		label: 'Manage Accounts',
		path: '/transactions',
		icon: <CiBank />
	},
	{
		key: 'messages',
		label: 'FAQ',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
