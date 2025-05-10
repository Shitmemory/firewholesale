import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  BarChart,
  LineChart,
  PieChart,
  ShoppingCart,
  Users,
  Package,
  TrendingUp,
  Calendar,
  Download,
  FileText,
} from "lucide-react"

export default function DashboardPage() {
  // Mock data for charts and analytics
  const recentOrders = [
    { id: "ORD-7892", date: "2025-04-10", total: "£1,245.89", status: "Delivered" },
    { id: "ORD-7891", date: "2025-04-08", total: "£879.50", status: "Processing" },
    { id: "ORD-7890", date: "2025-04-05", total: "£1,654.30", status: "Delivered" },
    { id: "ORD-7889", date: "2025-04-01", total: "£567.20", status: "Delivered" },
  ]

  const topProducts = [
    { name: "Fire Platter Wholesale Pack", sales: 42, revenue: "£5,040.00" },
    { name: "Premium Curry Base", sales: 38, revenue: "£3,230.00" },
    { name: "Butter Chicken Base - 5kg", sales: 35, revenue: "£2,275.00" },
    { name: "Paneer Tikka Wholesale Kit", sales: 29, revenue: "£2,610.00" },
  ]

  return (
    <main className="min-h-screen bg-black text-white py-8 px-4 md:px-8">
      <div className="container mx-auto">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-400">Welcome back to your wholesale dashboard</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button
              variant="outline"
              className="border-gray-700 text-white hover:bg-[#FF6B35] hover:text-white hover:border-[#FF6B35]"
            >
              <FileText className="h-4 w-4 mr-2" />
              Reports
            </Button>
            <Button className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white">
              <ShoppingCart className="h-4 w-4 mr-2" />
              New Order
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Orders</p>
                  <h3 className="text-3xl font-bold mt-1">247</h3>
                  <p className="text-[#4ADE80] text-sm mt-1 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <div className="bg-[#FF6B35]/10 p-3 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-[#FF6B35]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Revenue</p>
                  <h3 className="text-3xl font-bold mt-1">£24,389</h3>
                  <p className="text-[#4ADE80] text-sm mt-1 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +8.2% from last month
                  </p>
                </div>
                <div className="bg-[#FF6B35]/10 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-[#FF6B35]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Total Customers</p>
                  <h3 className="text-3xl font-bold mt-1">38</h3>
                  <p className="text-[#4ADE80] text-sm mt-1 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +4.1% from last month
                  </p>
                </div>
                <div className="bg-[#FF6B35]/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-[#FF6B35]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Products Sold</p>
                  <h3 className="text-3xl font-bold mt-1">1,423</h3>
                  <p className="text-[#4ADE80] text-sm mt-1 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +16.8% from last month
                  </p>
                </div>
                <div className="bg-[#FF6B35]/10 p-3 rounded-full">
                  <Package className="h-6 w-6 text-[#FF6B35]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="mb-8">
          <TabsList className="bg-[#1A1A1A] border-gray-800">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Sales Trend Chart */}
              <Card className="bg-[#1A1A1A] border-gray-800 lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Sales Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    {/* Placeholder for chart */}
                    <div className="text-center">
                      <LineChart className="h-16 w-16 text-[#FF6B35] mx-auto mb-4 opacity-50" />
                      <p className="text-gray-400">Sales trend visualization would appear here</p>
                      <p className="text-gray-500 text-sm">Showing data for the last 30 days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Product Distribution */}
              <Card className="bg-[#1A1A1A] border-gray-800">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl">Product Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-80 flex items-center justify-center">
                    {/* Placeholder for chart */}
                    <div className="text-center">
                      <PieChart className="h-16 w-16 text-[#FF6B35] mx-auto mb-4 opacity-50" />
                      <p className="text-gray-400">Product distribution chart would appear here</p>
                      <p className="text-gray-500 text-sm">Showing sales by category</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sales" className="mt-6">
            <Card className="bg-[#1A1A1A] border-gray-800">
              <CardHeader>
                <CardTitle>Sales Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Detailed sales analytics would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="mt-6">
            <Card className="bg-[#1A1A1A] border-gray-800">
              <CardHeader>
                <CardTitle>Customer Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Customer analytics and heat maps would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <Card className="bg-[#1A1A1A] border-gray-800">
              <CardHeader>
                <CardTitle>Product Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">Product performance analytics would appear here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Recent Orders & Top Products */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Orders */}
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">Recent Orders</CardTitle>
              <Button variant="ghost" size="sm" className="text-[#FF6B35] hover:text-[#FF8C5A] hover:bg-transparent">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                    <div>
                      <p className="font-medium">{order.id}</p>
                      <p className="text-sm text-gray-400">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.total}</p>
                      <p
                        className={`text-sm ${
                          order.status === "Delivered"
                            ? "text-green-500"
                            : order.status === "Processing"
                              ? "text-yellow-500"
                              : "text-gray-400"
                        }`}
                      >
                        {order.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Products */}
          <Card className="bg-[#1A1A1A] border-gray-800">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-xl">Top Products</CardTitle>
              <Button variant="ghost" size="sm" className="text-[#FF6B35] hover:text-[#FF8C5A] hover:bg-transparent">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                    <div>
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-gray-400">{product.sales} units sold</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{product.revenue}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Marketing & Newsletter */}
        <Card className="bg-[#1A1A1A] border-gray-800 mb-8">
          <CardHeader>
            <CardTitle>Marketing & Newsletters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Upcoming Promotions</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-black/30 rounded-lg">
                    <Calendar className="h-10 w-10 text-[#FF6B35] mr-4" />
                    <div>
                      <p className="font-medium">Summer Special Offer</p>
                      <p className="text-sm text-gray-400">Starts May 1, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-black/30 rounded-lg">
                    <Calendar className="h-10 w-10 text-[#FF6B35] mr-4" />
                    <div>
                      <p className="font-medium">Eid Festival Promotion</p>
                      <p className="text-sm text-gray-400">Starts June 15, 2025</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4">Recent Newsletters</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-3 bg-black/30 rounded-lg">
                    <FileText className="h-10 w-10 text-[#FF6B35] mr-4" />
                    <div className="flex-1">
                      <p className="font-medium">April Product Showcase</p>
                      <p className="text-sm text-gray-400">Sent on April 5, 2025</p>
                    </div>
                    <Button size="sm" variant="ghost" className="text-[#FF6B35]">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center p-3 bg-black/30 rounded-lg">
                    <FileText className="h-10 w-10 text-[#FF6B35] mr-4" />
                    <div className="flex-1">
                      <p className="font-medium">March Product Updates</p>
                      <p className="text-sm text-gray-400">Sent on March 8, 2025</p>
                    </div>
                    <Button size="sm" variant="ghost" className="text-[#FF6B35]">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
