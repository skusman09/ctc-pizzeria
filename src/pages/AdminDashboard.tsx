
import React from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package, Users, ShoppingCart, CreditCard, Settings, Plus } from 'lucide-react';

const AdminDashboard = () => {
  const { user } = useAuth();

  const dashboardCards = [
    {
      title: 'Menu Management',
      description: 'Manage menu items and categories',
      icon: Package,
      href: '/admin/menu',
      color: 'bg-blue-500'
    },
    {
      title: 'Orders',
      description: 'View and manage customer orders',
      icon: ShoppingCart,
      href: '/admin/orders',
      color: 'bg-green-500'
    },
    {
      title: 'Payments',
      description: 'Track payments and transactions',
      icon: CreditCard,
      href: '/admin/payments',
      color: 'bg-purple-500'
    },
    {
      title: 'Customers',
      description: 'Manage customer accounts',
      icon: Users,
      href: '/admin/customers',
      color: 'bg-orange-500'
    },
    {
      title: 'Settings',
      description: 'Configure system settings',
      icon: Settings,
      href: '/admin/settings',
      color: 'bg-gray-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-900 dark:to-gray-800 p-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Welcome back, {user?.email}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${card.color}`}>
                      <card.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    Manage
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plus className="mr-2 h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="flex items-center justify-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Menu Item
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Category
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <Plus className="mr-2 h-4 w-4" />
                  Create Discount
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;
