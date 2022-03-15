
export default function Average(props) {

    let propsAverage = props.average.map(Number);
    let average = (propsAverage) => propsAverage.reduce((a, b) => a + b) / propsAverage.length;
    let result = average(propsAverage);

    return (
        <div>
            <p>Average: {result} % </p>
        </div>
    )
}