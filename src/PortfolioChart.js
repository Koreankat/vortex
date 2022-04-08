import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '01/02/2022',
    uv: 4000,
    pv: 1,
  },
  {
    name: '02/02/2022',
    uv: 4200,
    pv: 2,
  },
  {
    name: '03/02/2022',
    uv: 4123,
    pv: 2,
  },
  {
    name: '04/02/2022',
    uv: 4900,
    pv: 2,
  },
  {
    name: '05/02/2022',
    uv: 5200,
    pv: 2,
  },
  {
    name: '06/02/2022',
    uv: 8200,
    pv: 2,
  },
  {
    name: '07/02/2022',
    uv: 6224,
    pv: 2,
  },
  {
    name: '08/02/2022',
    uv: 6000,
    pv: 2,
  },
  {
    name: '09/02/2022',
    uv: 6200,
    pv: 2,
  },
  {
    name: '10/02/2022',
    uv: 6212,
    pv: 2,
  },
  {
    name: '11/02/2022',
    uv: 6142,
    pv: 1,
  },
  {
    name: '12/02/2022',
    uv: 6432,
    pv: 2,
  },
  {
    name: '13/02/2022',
    uv: 5324,
    pv: 2,
  },
  {
    name: '14/02/2022',
    uv: 5903,
    pv: 2,
  },
  {
    name: '15/02/2022',
    uv: 5500,
    pv: 2,
  },
  {
    name: '16/02/2022',
    uv: 4231,
    pv: 2,
  },
  {
    name: '17/02/2022',
    uv: 4912,
    pv: 2,
  },
  {
    name: '18/02/2022',
    uv: 5123,
    pv: 2,
  },
  {
    name: '19/02/2022',
    uv: 6023,
    pv: 2,
  },
  {
    name: '20/02/2022',
    uv: 10324,
    pv: 2,
  },
  {
    name: '21/02/2022',
    uv: 8123,
    pv: 2,
  },
  {
    name: '22/02/2022',
    uv: 7153,
    pv: 2,
  },
  {
    name: '23/02/2022',
    uv: 7000,
    pv: 2,
  },
  {
    name: '24/02/2022',
    uv: 6500,
    pv: 2,
  },
  {
    name: '25/02/2022',
    uv: 6743,
    pv: 2,
  },
  {
    name: '26/02/2022',
    uv: 6891,
    pv: 2,
  },
  {
    name: '27/02/2022',
    uv: 6923,
    pv: 2,
  },
  {
    name: '28/02/2022',
    uv: 6700,
    pv: 2,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-area-chart-4ujxw';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" fontSize="min(1.5vh,2.5vw)"/>
          <YAxis fontSize="min(1.5vh,2.5vw)"/>
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="black" fill="#000000" fillOpacity="0.26" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
