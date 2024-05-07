import { max, min, scaleBand, scaleLinear, select } from 'd3'

export const dataY = [-100, -40, 30, 86, 168, 281, 303, 365];
export const dataX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
export const unitY = "Height/m";
export const minY = min(dataY) as number;
export const maxY = max(dataY) as number;
//设置 D3 图表的 X 轴和 Y 轴的数据范围
export const yDomain = [minY, maxY];
export const xDomain = dataX;
export const svg = select('svg');
//获取 svg 元素的宽度和高度
export const width = +svg.style('width').split('px')[0];
export const height = +svg.style('height').split('px')[0];
//设置 svg 容器的下、上、左、和右边距
export const marginBottom = 30;
export const marginTop = 30;
export const marginLeft = 30;
export const marginRight = 30;
//创建了两个比例尺
export const x = scaleBand(xDomain, [marginLeft, width - marginRight]).padding(0.2);
export const y = scaleLinear(yDomain, [marginTop + maxY - minY, marginTop]);