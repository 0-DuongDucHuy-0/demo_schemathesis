import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";


export default function AdminDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <DashboardCard title="Users" subtitle="Hello world 1" body="Hihihi"/>
            <DashboardCard title="Products" subtitle="Hello world 2" body="Hihihi"/>
            <DashboardCard title="Aunctioneers" subtitle="Hello world 3" body="Hihihi"/>
            <DashboardCard title="Others" subtitle="Hello world 4" body="Hihihi"/>
            <DashboardCard title="Others" subtitle="Hello world 4" body="Hihihi"/>
            <DashboardCard title="Others" subtitle="Hello world 4" body="Hihihi"/>
        </div>
    )
}

type DashboardCardProps = {
    title: string
    subtitle: string
    body: string
}

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{subtitle}</CardDescription>
            </CardHeader>

            <CardContent>
                <p>{body}</p>
            </CardContent>
        </Card>
    )
}