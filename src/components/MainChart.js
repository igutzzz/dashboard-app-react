import React, {PureComponent} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';
import '../styles/MainChart.css'

const data = [
    {
        name: 'Janeiro',
        Vendas: 4500
    },
    {
        name: 'Fevereiro',
        Vendas: 7230
    },
    {
        name: 'Março',
        Vendas: 2760
    },
    {
        name: 'Abril',
        Vendas: 4650
    },
    {
        name: 'Maio',
        Vendas: 3470
    },
    {
        name: 'Junho',
        Vendas: 7600
    },
    {
        name: 'Julho',
        Vendas: 5890
    },
    {
        name: 'Agosto',
        Vendas: 6475
    },
    {
        name: 'Setembro',
        Vendas: 4865
    },
    {
        name: 'Outubro',
        Vendas: 3890
    },
    {
        name: 'Novembro',
        Vendas: 5890
    },
    {
        name: 'Dezembro',
        Vendas: 8000
    },
]

export default class MainChart extends PureComponent {
    render() {
        return(
                <AreaChart
                    width={1200}
                    height={500}
                    data={data}
                    margin={{
                        top: 100,
                        right: 200,
                        left: 0,
                        bottom: 0
                    }}
                    className='MainChart'
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="natural" dataKey="Vendas" stroke="#29339B" fill="#29339B" />
                </AreaChart>
        )
    }
}