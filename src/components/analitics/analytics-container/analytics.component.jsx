import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { AnalyticsContainer } from './analytics.styles'


const data = [
    { name: '', uv: 400, pv: 2400, amt: 2400 },
    { name: '', uv: 100, pv: 3000, amt: 2400 },
    { name: '', uv: 400, pv: 2400, amt: 2400 },
    { name: '', uv: 150, pv: 2400, amt: 5000 },
    { name: '', uv: 400, pv: 2400, amt: 2400 },
    { name: '', uv: 50, pv: 2400, amt: 2400 },
    { name: '', uv: 200, pv: 2400, amt: 2400 },
    { name: '', uv: 50, pv: 2400, amt: 2400 }
];


const Analytics = () => {

    return (
        <AnalyticsContainer>
            <LineChart width={700} height={200} data={data}>
                <Line type="monotone" dataKey="uv" stroke="var(--main-color)" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </AnalyticsContainer>
    )
}

export default Analytics