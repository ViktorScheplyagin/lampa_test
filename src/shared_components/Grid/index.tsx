import styled from 'styled-components';

type GridProps = {
  className?: string;
  cols: (number | undefined)[];
  rows: (number | undefined)[];
  justify?: string;
  align?: string;
};

const Grid = styled.div`
  display: grid;
  gap: 15px 15px;
  justify-items: ${(props: GridProps) => props.justify};
  align-items: ${(props: GridProps) => props.align};
  grid-template-columns: 100%;
  grid-template-rows: 100%;
`;


const calcGridTemplateValues = (cellsQuantity = 1): string => {
  const availableContainerSpace = 100; // percents
  const cellSize = availableContainerSpace / cellsQuantity; // percents of container size

  return `${cellSize}% `.repeat(cellsQuantity).trim();
};


const ResponsiveGrid = styled(Grid)`
  ${({ theme, cols, rows }) => (
    theme.breakpoints.map((breakpoint: string, idx: number) => (
      `@media(min-width: ${breakpoint}) {
        grid-template-columns: ${calcGridTemplateValues(cols[idx])};
        grid-template-rows: ${calcGridTemplateValues(rows[idx])};
      }`
    ))
  )}
`;

export default ResponsiveGrid;