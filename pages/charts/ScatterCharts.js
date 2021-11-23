// import { Scatter } from '@ant-design/charts';
import React from 'react';

import dynamic from 'next/dynamic';
const Scatter = dynamic(
  () => import("@ant-design/charts").then((mod) => mod.Line),
  { ssr: false }
)

const ScatterPage = () => {
  const data = [
    {
      city: 'Santiago',
      Norte: 1.5,
      Sur: 6,
      Calidad: 3,
    },
    {
      city: 'La reina',
      Norte: 2,
      Sur: 5,
      Calidad: 13,
    },
    {
      city: 'Providencia',
      Norte: 7,
      Sur: 3.6,
      Calidad: 16,
    },
    {
      city: 'Peñalolen',
      Norte: 5,
      Sur: 5,
      Calidad: 16,
    },
    {
      city: 'Quilicura',
      Norte: 2,
      Sur: 1,
      Calidad: 19,
    },
    {
      city: 'Recoleta',
      Norte: 7,
      Sur: 2,
      Calidad: 90,
    },
    {
      city: 'Ñuñoa',
      Norte: 7.4,
      Sur: 1.5,
      Calidad: 30,
    },
    {
      city: 'Maipu',
      Norte: 1,
      Sur: 1,
      Calidad: 34,
    },
    {
      city: 'Macul',
      Norte: 7,
      Sur: 5,
      Calidad: 46,
    },
    {
      city: 'La Florida',
      Norte: 3.4,
      Sur: 2.3,
      Calidad: 49,
    },
    {
      city: 'Puente alto',
      Norte: 0.5,
      Sur: 6.5,
      Calidad: 51,
    },
    {
      city: 'San bernardo',
      Norte: 2.5,
      Sur: 5,
      Calidad: 51,
    },
    {
      city: 'La granja',
      Norte: 1,
      Sur: 5,
      Calidad: 53,
    },
    {
      city: 'La pintana',
      Norte: 6,
      Sur: 5,
      Calidad: 57,
    },
    {
      city: 'Huechuraba',
      Norte: 2,
      Sur: 3,
      Calidad: 57,
    },
    {
      city: 'Paine',
      Norte: 3,
      Sur: 4.6,
      Calidad: 65,
    },
    {
      city: 'Talagante',
      Norte: 6,
      Sur: 7,
      Calidad: 68,
    },
    {
      city: 'El monte',
      Norte: 5,
      Sur: 3.4,
      Calidad: 68,
    },
    {
      city: 'Padre Hurtado',
      Norte: 5,
      Sur: 2,
      Calidad: 69,
    },
    {
      city: 'San Miguel',
      Norte: 2,
      Sur: 7,
      Calidad: 78,
    },
    {
      city: 'Conchali',
      Norte: 4.4,
      Sur: 5,
      Calidad: 45,
    },
    {
      city: 'El bosque',
      Norte: 3.4,
      Sur: 7,
      Calidad: 29,
    },
    {
      city: 'Independencia',
      Norte: 3,
      Sur: 1,
      Calidad: 94,
    },
    {
      city: 'Cerrillos',
      Norte: 6,
      Sur: 3,
      Calidad: 99,
    },
  ];
  const config = {
    width: 800,
    height: 400,
    autoFit: false,
    appendPadding: 16,
    data,
    xField: 'Norte',
    yField: 'Sur',
    sizeField: 'Calidad',
    size: [12, 30],
    shape: 'circle',
    pointStyle: {
      fill: '#D6E3FD',
      fillOpacity: 0.6,
      stroke: '#6d9bf9',
    },
    tooltip: {
      showTitle: true,
      showMarkers: false,
      fields: ['Norte', 'Sur', 'Calidad'],
      customContent: (title, items) => {
        const field = items?.[0];
        const formatterInfo = {
          Norte: (value) => value + '万',
          Sur: (value) => value + '万',
          Calidad: () => '%',
        };
        let htmlStr = `<div style="margin:10px 0;font-weight:700;">${field?.data?.city}</div><div class="g2-tooltip-items">`;
        items.forEach((item) => {
          htmlStr += `<div class="g2-tooltip-item" style="margin-bottom:8px;display:flex;justify-content:space-between;">
                <span class="g2-tooltip-item-label" style="margin-right: 12px;">${item.name}</span>
                <span class="g2-tooltip-item-value">${item.value + formatterInfo[item.name](item.value)}</span>
              </div>`;
        });
        htmlStr += '</div>';
        return htmlStr;
      },
    },
    xAxis: {
      grid: {
        line: {
          style: {
            stroke: '#eee',
          },
        },
      },
      label: {
        formatter: (v) => (v !== '0' ? v + '%' : v),
      },
      line: null,
    },
    label: {
      formatter: (item) => {
        return item.city;
      },
      offsetY: 12,
      style: {
        fontSize: 12,
        fill: 'rgba(0,0,0,0.85)',
      },
    },
    yAxis: {
      min: 0,
      line: null,
      label: {
        formatter: (v) => (v !== '0' ? v + '%' : v),
      },
    },
    annotations: [
      {
        type: 'text',
        position: [4, 8],
        content: 'Calidad',
        offsetY: -8,
        style: {
          fontSize: 12,
          textAlign: 'center',
        },
      },
      {
        type: 'text',
        position: [8, 4],
        content: 'Calidad',
        rotate: Math.PI / 2,
        offsetY: -40,
        offsetX: 8,
        style: {
          fontSize: 12,
        },
      },
      {
        type: 'region',
        start: [7, 7],
        end: [7.8, 7.8],
        top: true,
        style: {
          fill: '#fff',
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
      {
        type: 'region',
        start: [0.2, 7],
        end: [1, 7.8],
        top: true,
        style: {
          fill: '#fff',
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
      {
        type: 'region',
        start: [7, 0.2],
        end: [7.8, 1],
        top: true,
        style: {
          fill: '#fff',
          fillOpacity: 0.5,
          opacity: 1,
        },
      },
    ],
    quadrant: {
      xBaseline: 4,
      yBaseline: 4,
      lineStyle: {
        lineDash: [4, 2],
        lineWidth: 2,
      },
      regionStyle: [
        {
          fill: '#5bd8a6',
          fillOpacity: 0.1,
        },
        {
          fill: '#667796',
          fillOpacity: 0.1,
        },
        {
          fill: '#fff',
        },
        {
          fill: '#f7664e',
          fillOpacity: 0.1,
        },
      ],
      labels: [
        {
          content: '',
          position: [7.2, 7],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'start',
          },
        },
        {
          content: 'Uno',
          position: [0.2, 7],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'start',
          },
        },
        {
          content: '',
        },
        {
          content: 'Dos',
          position: [7.2, 1],
          style: {
            fill: 'rgba(0,0,0, 0.85)',
            textAlign: 'start',
          },
        },
      ],
    },
  };
  return <Scatter {...config} />;
};
export default ScatterPage;
