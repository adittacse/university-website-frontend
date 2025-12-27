export type DashboardData = {
    metrics: {
        notices: {
            total: number;
            active: number;
            deleted: number;
        };
        files: {
            totalDownloads: number;
            totalViews: number;
        };
        users: {
            total: number;
        };
    };
    stats: {
        mostDownloadedNotice: {
            _id: string;
            title: string;
            downloadCount: number;
        } | null;
        mostViewedNotice: {
            _id: string;
            title: string;
            viewCount: number;
        } | null;
    };
    analytics: {
        downloadsLast7Days: {
            date: string;
            count: number;
        }[];
    };
};