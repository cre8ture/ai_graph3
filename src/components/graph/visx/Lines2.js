import React, { useState } from 'react';
import { extent, max } from '@visx/vendor/d3-array';
import * as allCurves from '@visx/curve';
import { Group } from '@visx/group';
import { LinePath } from '@visx/shape';
import { scaleTime, scaleLinear } from '@visx/scale';
import { MarkerArrow, MarkerCross, MarkerX, MarkerCircle, MarkerLine } from '@visx/marker';
import generateDateValue from '@visx/mock-data/lib/generators/genDateValue';

const curveTypes = Object.keys(allCurves);
const lineCount = 5;
const series = new Array(lineCount).fill(null).map((_, i) =>
  generateDateValue(25, /* seed= */ i / 72).sort(
    (a, b) => a.date.getTime() - b.date.getTime()
  )
);
const allData = series.reduce((rec, d) => rec.concat(d), []);

// data accessors
const getX = (d) => d.date;
const getY = (d) => d.value;

// scales
const xScale = scaleTime({
  domain: extent(allData, getX),
});
const yScale = scaleLinear({
  domain: [0, max(allData, getY)],
});

const CurveProps = {
  width: 0,
  height: 0,
  showControls: false,
};

export default function Example({ width, height, showControls = true }) {
  const [curveType, setCurveType] = useState('curveNatural');
  const [showPoints, setShowPoints] = useState(true);
  const svgHeight = showControls ? height - 40 : height;
  const lineHeight = svgHeight / lineCount;

  // update scale output ranges
  xScale.range([0, width - 50]);
  yScale.range([lineHeight - 2, 0]);

  return (
    React.createElement('div', { className: 'visx-curves-demo' },
      showControls && (
        React.createElement(React.Fragment, null,
          React.createElement('label', null,
            'Curve type \xA0',
            React.createElement('select', { onChange: (e) => setCurveType(e.target.value), value: curveType },
              curveTypes.map((curve) =>
                React.createElement('option', { key: curve, value: curve },
                  curve
                )
              )
            )
          ),
          '\xA0',
          React.createElement('label', null,
            'Show points\xA0',
            React.createElement('input', { type: 'checkbox', checked: showPoints, onChange: () => setShowPoints(!showPoints) })
          ),
          React.createElement('br', null)
        )
      ),
      React.createElement('svg', { width: width, height: svgHeight },
        React.createElement(MarkerX, { id: 'marker-x', stroke: '#333', size: 22, strokeWidth: 4, markerUnits: 'userSpaceOnUse' }),
        React.createElement(MarkerCross, { id: 'marker-cross', stroke: '#333', size: 22, strokeWidth: 4, strokeOpacity: 0.6, markerUnits: 'userSpaceOnUse' }),
        React.createElement(MarkerCircle, { id: 'marker-circle', fill: '#333', size: 2, refX: 2 }),
        React.createElement(MarkerArrow, { id: 'marker-arrow-odd', stroke: '#333', size: 8, strokeWidth: 1 }),
        React.createElement(MarkerLine, { id: 'marker-line', fill: '#333', size: 16, strokeWidth: 1 }),
        React.createElement(MarkerArrow, { id: 'marker-arrow', fill: '#333', refX: 2, size: 6 }),
        React.createElement('rect', { width: width, height: svgHeight, fill: '#efefef', rx: 14, ry: 14 }),
        width > 8 &&
          series.map((lineData, i) => {
            const even = i % 2 === 0;
            let markerStart = even ? 'url(#marker-cross)' : 'url(#marker-x)';
            if (i === 1) markerStart = 'url(#marker-line)';
            const markerEnd = even ? 'url(#marker-arrow)' : 'url(#marker-arrow-odd)';
            return (
              React.createElement(Group, { key: `lines-${i}`, top: i * lineHeight, left: 13 },
                showPoints &&
                  lineData.map((d, j) =>
                    React.createElement('circle', {
                      key: i + j,
                      r: 3,
                      cx: xScale(getX(d)) ?? 0,
                      cy: yScale(getY(d)) ?? 0,
                      stroke: 'rgba(33,33,33,0.5)',
                      fill: 'transparent',
                    })
                  ),
                React.createElement(LinePath, {
                  curve: allCurves[curveType],
                  data: lineData,
                  x: (d) => xScale(getX(d)) ?? 0,
                  y: (d) => yScale(getY(d)) ?? 0,
                  stroke: '#333',
                  strokeWidth: even ? 2 : 1,
                  strokeOpacity: even ? 0.6 : 1,
                  shapeRendering: 'geometricPrecision',
                  markerMid: 'url(#marker-circle)',
                  markerStart: markerStart,
                  markerEnd: markerEnd,
                })
              )
            );
          })
      ),
      React.createElement('style', { jsx: true }, `
        .visx-curves-demo label {
          font-size: 12px;
        }
      `)
    )
  );
}
