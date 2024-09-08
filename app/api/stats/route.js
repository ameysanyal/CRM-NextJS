// app/api/stats/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const timeRange = searchParams.get('timeRange');
    console.log(`In stats: ${timeRange}`);

    // Dummy data for different time ranges
    const stats = {
        '1day': {
            totalSales: 1200,
            newCustomers: 10,
            totalRevenue: 5000,
            retentionRate: 75,
            leadStatus: {
                labels: ['Closed', 'Open', 'Converted'],
                values: [50, 30, 20],
            },
            salesOverTime: {
                labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM'],
                values: [200, 300, 250, 400, 350, 600],
            },
            marketingPerformance: {
                labels: ['Email', 'Social Media', 'Referral', 'Organic Search'],
                values: [40, 30, 20, 10],
            },
            conversionRate: {
                labels: ['Page Visits', 'Sign-ups', 'Purchases'],
                values: [3000, 2000, 100]
            }
        },
        '1week': {
            totalSales: 7000,
            newCustomers: 45,
            totalRevenue: 28000,
            retentionRate: 80,
            leadStatus: {
                labels: ['Closed', 'Open', 'Converted'],
                values: [42, 28, 30],
            },
            salesOverTime: {
                labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                values: [1200, 1300, 1100, 1500, 1600, 1400, 1800],
            },
            marketingPerformance: {
                labels: ['Email', 'Social Media', 'Referral', 'Organic Search'],
                values: [35, 25, 25, 15],
            },
            conversionRate: {
                labels: ['Page Visits', 'Sign-ups', 'Purchases'],
                values: [2000, 800, 200]
            }
        },
        '1month': {
            totalSales: 30000,
            newCustomers: 150,
            totalRevenue: 120000,
            retentionRate: 85,
            leadStatus: {
                labels: ['Closed', 'Open', 'Converted'],
                values: [60, 30, 10],
            },
            salesOverTime: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                values: [6000, 7000, 8000, 9000],
            },
            marketingPerformance: {
                labels: ['Email', 'Social Media', 'Referral', 'Organic Search'],
                values: [30, 30, 20, 20],
            },
            conversionRate: {
                labels: ['Page Visits', 'Sign-ups', 'Purchases'],
                values: [50000, 3000, 800],
            }
        }
    };

    return NextResponse.json(stats[timeRange] || stats['1day']);
}

