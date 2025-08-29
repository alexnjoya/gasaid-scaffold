"use client";

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Building2, Users, Shield, Settings, Plus, Eye, Edit, Trash2 } from 'lucide-react'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

const AdminPage = () => {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    setIsConnected(true)
  }

  const organizations = [
    {
      id: 1,
      name: 'Ethereum Foundation',
      type: 'Foundation',
      status: 'Active',
      users: 1250,
      donations: '25.5 ETH',
      impact: 'High'
    },
    {
      id: 2,
      name: 'ConsenSys',
      type: 'Company',
      status: 'Active',
      users: 890,
      donations: '18.2 ETH',
      impact: 'High'
    },
    {
      id: 3,
      name: 'Gitcoin',
      type: 'DAO',
      status: 'Active',
      users: 567,
      donations: '12.8 ETH',
      impact: 'Medium'
    },
    {
      id: 4,
      name: 'MetaMask',
      type: 'Company',
      status: 'Pending',
      users: 0,
      donations: '0 ETH',
      impact: 'N/A'
    }
  ]

  const stats = [
    { label: 'Total Organizations', value: '47', icon: Building2 },
    { label: 'Active Partners', value: '42', icon: Shield },
    { label: 'Total Users Helped', value: '15,420+', icon: Users },
    { label: 'Total Donations', value: '125.7 ETH', icon: Settings },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'success'
      case 'Pending': return 'warning'
      case 'Inactive': return 'destructive'
      default: return 'default'
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'success'
      case 'Medium': return 'warning'
      case 'Low': return 'destructive'
      default: return 'default'
    }
  }

  return (
    <div className="min-h-screen pt-20 px-4 pb-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center space-y-4">
          </div>

          {!isConnected ? (
            <div className="text-center">
              <Card className="card-ethereum max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Admin Access Required</CardTitle>
                  <CardDescription className="text-white/80">
                    Connect your admin wallet to access organization management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={handleConnect}
                    className="btn-ethereum w-full py-6 text-lg font-semibold"
                  >
                    Connect Admin Wallet
                  </Button>
                </CardContent>
              </Card>
            </div>
          ) : (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="card-ethereum h-full">
                      <CardHeader className="pb-4">
                        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-white mb-2">
                          {stat.value}
                        </div>
                        <div className="text-white/80 text-sm">
                          {stat.label}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Partner Organizations</h2>
                <Button className="btn-ethereum">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Organization
                </Button>
              </div>

              {/* Organizations Table */}
              <Card className="card-ethereum">
                <CardHeader>
                  <CardTitle className="text-white">Organization List</CardTitle>
                  <CardDescription className="text-white/80">
                    Manage and monitor partner organizations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left p-3 text-white/80 font-medium">Organization</th>
                          <th className="text-left p-3 text-white/80 font-medium">Type</th>
                          <th className="text-left p-3 text-white/80 font-medium">Status</th>
                          <th className="text-left p-3 text-white/80 font-medium">Users Helped</th>
                          <th className="text-left p-3 text-white/80 font-medium">Donations</th>
                          <th className="text-left p-3 text-white/80 font-medium">Impact</th>
                          <th className="text-left p-3 text-white/80 font-medium">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {organizations.map((org) => (
                          <tr key={org.id} className="border-b border-white/10 hover:bg-white/5">
                            <td className="p-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                  <Building2 className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <div className="text-white font-medium">{org.name}</div>
                                  <div className="text-white/60 text-sm">ID: {org.id}</div>
                                </div>
                              </div>
                            </td>
                            <td className="p-3 text-white/80">{org.type}</td>
                            <td className="p-3">
                              <Badge variant={getStatusColor(org.status)}>
                                {org.status}
                              </Badge>
                            </td>
                            <td className="p-3 text-white/80">{org.users.toLocaleString()}</td>
                            <td className="p-3 text-white/80">{org.donations}</td>
                            <td className="p-3">
                              <Badge variant={getImpactColor(org.impact)}>
                                {org.impact}
                              </Badge>
                            </td>
                            <td className="p-3">
                              <div className="flex space-x-2">
                                <Button variant="ghost" size="sm" className="p-2">
                                  <Eye className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2">
                                  <Edit className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm" className="p-2 text-destructive">
                                  <Trash2 className="w-4 h-4" />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="card-ethereum">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Add New Organization</CardTitle>
                    <CardDescription className="text-white/80">
                      Onboard new partner organizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="btn-ethereum w-full">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Organization
                    </Button>
                  </CardContent>
                </Card>

                <Card className="card-ethereum">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Review Applications</CardTitle>
                    <CardDescription className="text-white/80">
                      Review pending organization applications
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                      <Eye className="w-4 h-4 mr-2" />
                      Review Applications
                    </Button>
                  </CardContent>
                </Card>

                <Card className="card-ethereum">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Generate Reports</CardTitle>
                    <CardDescription className="text-white/80">
                      Create impact and analytics reports
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full bg-white/10 border-white/30 text-white hover:bg-white/20">
                      <Settings className="w-4 h-4 mr-2" />
                      Generate Reports
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default AdminPage
