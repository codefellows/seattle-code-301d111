function Weather(props) {
    return (
        <>
          <section>
            {props.weather.map((day, index) => (
                <section key={index}>
                    <h3>{day.date}</h3>
                    <p>Forecast: {day.forecast}</p>
                    <p>Low: {day.low}</p>
                    <p>High: {day.high}</p>
                </section>
            ))}
          </section>
        </>
    );
}

export default Weather;