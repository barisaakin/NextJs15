import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Building2, Users, FileText } from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname()

  const navigation = [
    {
      name: 'Şirketler',
      href: '/companies',
      icon: Building2,
      roles: ['ROOT', 'ADMIN']
    },
    {
      name: 'Kullanıcılar',
      href: '/users',
      icon: Users,
      roles: ['ROOT', 'ADMIN']
    },
    {
      name: 'Raporlar',
      href: '/reports',
      icon: FileText,
      roles: ['ROOT', 'ADMIN', 'USER']
    }
  ]

  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="flex h-16 items-center justify-center border-b">
        <h1 className="text-xl font-bold text-gray-800">Next Creator Rapor</h1>
      </div>
      <nav className="mt-5 px-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`group flex items-center rounded-md px-2 py-2 text-sm font-medium ${
              pathname === item.href
                ? 'bg-gray-100 text-gray-900'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
            }`}
          >
            <item.icon
              className={`mr-3 h-5 w-5 flex-shrink-0 ${
                pathname === item.href
                  ? 'text-gray-500'
                  : 'text-gray-400 group-hover:text-gray-500'
              }`}
            />
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar 