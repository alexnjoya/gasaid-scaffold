"use client";

import { motion } from 'framer-motion'
import { BarChart3, Users, Coins, TrendingUp, Eye, Heart } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'

const DashboardPage = () => {
  const stats = [
    { label: 'Total Donations', value: '125.7 ETH', change: '+12.5%', icon: Coins },
    { label: 'Users Helped', value: '15,420+', change: '+8.2%', icon: Users },
    { label: 'Success Rate', value: '94.2%', change: '+2.1%', icon: TrendingUp },
    { label: 'Active Sponsors', value: '847', change: '+15.3%', icon: Heart },
  ]

  const recentClaims = [
    { address: '0x1234...5678', amount: '0.05 ETH', time: '2 hours ago', status: 'Completed' },
    { address: '0x8765...4321', amount: '0.05 ETH', time: '4 hours ago', status: 'Completed' },
    { address: '0x1111...9999', amount: '0.05 ETH', time: '6 hours ago', status: 'Completed' },
    { address: '0x2222...8888', amount: '0.05 ETH', time: '8 hours ago', status: 'Completed' },
  ]

  const recentDonations = [
    { address: '0x3333...7777', amount: '1.0 ETH', time: '1 hour ago' },
    { address: '0x4444...6666', amount: '0.5 ETH', time: '3 hours ago' },
    { address: '0x5555...5555', amount: '0.25 ETH', time: '5 hours ago' },
    { address: '0x6666...4444', amount: '2.0 ETH', time: '7 hours ago' },
  ]

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
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="success" className="text-xs">
                        {stat.change}
                      </Badge>
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

          {/* Charts and Data */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Claims */}
            <Card className="card-ethereum">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>Recent Gas Claims</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Latest gas claims from new Web3 users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentClaims.map((claim, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">
                            {claim.address}
                          </div>
                          <div className="text-white/60 text-xs">
                            {claim.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold text-sm">
                          {claim.amount}
                        </div>
                        <Badge variant="success" className="text-xs">
                          {claim.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Donations */}
            <Card className="card-ethereum">
              <CardHeader>
                <CardTitle className="text-white text-xl flex items-center space-x-2">
                  <Heart className="w-5 h-5" />
                  <span>Recent Donations</span>
                </CardTitle>
                <CardDescription className="text-white/80">
                  Latest contributions from our generous sponsors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentDonations.map((donation, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{index + 1}</span>
                        </div>
                        <div>
                          <div className="text-white font-medium text-sm">
                            {donation.address}
                          </div>
                          <div className="text-white/60 text-xs">
                            {donation.time}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold text-sm">
                          {donation.amount}
                        </div>
                        <Badge variant="ethereum" className="text-xs">
                          Donated
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Impact Metrics */}
          <Card className="card-ethereum">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Platform Impact</CardTitle>
              <CardDescription className="text-white/80">
                See how Gas Aid is transforming Web3 onboarding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">$2.5M+</div>
                  <div className="text-white/80">Total Value Distributed</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">25+</div>
                  <div className="text-white/80">Countries Reached</div>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">98.5%</div>
                  <div className="text-white/80">User Satisfaction</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="card-ethereum max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Want to Contribute?</CardTitle>
                <CardDescription className="text-white/80">
                  Join our community of sponsors and help more people enter Web3
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/donate" className="btn-ethereum px-8 py-3 text-lg font-semibold">
                    Become a Sponsor
                  </a>
                  <a href="/claim" className="px-8 py-3 rounded-lg border border-white/30 text-white hover:bg-white/20 transition-colors">
                    Claim Free Gas
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default DashboardPage
