import styled from "styled-components";

const Container = styled.div`

    padding-top: 20px;
    padding-bottom: 40px;
    text-align: center;
` 

const Thumb = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`
const StatsThumb = styled.div`
text-align: start;
`

const ChartStatsThumb = styled.div`
    width: 80px;
`
export {Container, Thumb, ChartStatsThumb, StatsThumb}