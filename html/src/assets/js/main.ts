import renderTable from "./components/renderTable";

const app = document.getElementById('app');
// const endpoint = 'https://brains.tradingeconomics.com/v2/search/bond?q=united%20states&pp=50&p=0'
const endpoint = 'https://api.tradingeconomics.com/markets/currency?c=guest:guest&cross=EUR';

interface ResponseData {
    Close: number;
    CloseDate: string;
    Country: string;
    DailyChange: number;
    DailyPercentualChange: number;
    Date: string;
    Group: string;
    Importance: number;
    Last: number;
    LastUpdate: string;
    MonthlyChange: number;
    MonthlyPercentualChange: number;
    Name: string;
    StartDate: string;
    State: string;
    Symbol: string;
    Ticker: string;
    URL: string;
    WeeklyChange: number;
    WeeklyPercentualChange: number;
    YTDChange: number;
    YTDPercentualChange: number;
    YearlyChange: number;
    YearlyPercentualChange: number;
    day_high: number;
    day_low: number;
    decimals: number;
    frequency: string;
    lastMonth: number;
    lastWeek: number;
    lastYear: number;
    startYear: number;
    unit: string;
    yesterday: number;
}

interface ResponseBody {
    hits: ResponseData[];
}

 

fetch(endpoint)
    .then((res) => res.json())
    .then((res) => {
        const app = document.getElementById('app');
        const table = renderTable(res);
        app.append(table);
    })
    .catch(e => console.error(e));